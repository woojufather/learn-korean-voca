import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import worker from './worker.mjs';
const origin = 'https://ktalkcoach.online';
const password = 'unit-test-private-password';
const sha = async value => Buffer.from(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value))).toString('hex');
export function database() {
    const sqlite = new DatabaseSync(':memory:');
    sqlite.exec(readFileSync(new URL('./schema.sql', import.meta.url),'utf8'));
    return {
        sqlite,
        prepare(sql) {
            return { bind(...values) {
                const statement = sqlite.prepare(sql);
                return {
                    async first() { return statement.get(...values) || null; },
                    async all() { return { results:statement.all(...values) }; },
                    async run() { return { meta:{changes:Number(statement.run(...values).changes)} }; }
                };
            },
            async all() { return {results:sqlite.prepare(sql).all()}; },
            async first() { return sqlite.prepare(sql).get() || null; },
            async run() {return {meta:{changes:Number(sqlite.prepare(sql).run().changes)}};} };
        }
    };
}
async function setup(t) {
    const DB=database();t.after(()=>DB.sqlite.close());
    const env={DB,ALLOWED_ORIGIN:origin,ADMIN_PASSWORD_HASH:await sha(password),RATE_SECRET:'unit-test-rate-secret'};
    async function request(path,options={}) {
        const {method='GET',data,token,ip='203.0.113.1',requestOrigin=origin}=options;
        const headers={Origin:requestOrigin,'CF-Connecting-IP':ip,...(data?{'Content-Type':'application/json'}:{}),...(token?{Authorization:`Bearer ${token}`}:{})};
        const jobs=[];
        const response=await worker.fetch(new Request(`https://feedback.test${path}`,{method,headers,...(data?{body:JSON.stringify(data)}:{})}),env,{waitUntil:p=>jobs.push(p)});
        await Promise.all(jobs);
        return {response,status:response.status,data:response.status===204?null:await response.json()};
    }
    const valid=(extra={})=>({request_id:crypto.randomUUID(),category:'translation',message:'The translation on this card is unclear.',email:'',language:'ja',context:{tab:'hangul',phrase:'고',device:'desktop',browser:'Edge'},...extra});
    const login=async()=> (await request('/admin/login',{method:'POST',data:{password}})).data.token;
    return {env,DB,request,valid,login};
}
test('anonymous submission persists, is private, and is idempotent',async t=>{
    const {request,valid,login,DB}=await setup(t);
    const input=valid({email:'learner@example.com'});
    const saved=await request('/feedback',{method:'POST',data:input});assert.equal(saved.status,201);
    const retry=await request('/feedback',{method:'POST',data:input});assert.equal(retry.data.id,saved.data.id);
    assert.equal(DB.sqlite.prepare('SELECT count(*) AS n FROM feedback').get().n,1);
    assert.equal((await request('/admin/feedback')).status,401);
    assert.equal((await request('/admin/feedback',{token:'a'.repeat(64)})).status,401);
    const inbox=await request('/admin/feedback',{token:await login()});assert.equal(inbox.status,200);
    assert.equal(inbox.data.items[0].email,'learner@example.com');
    assert.equal(inbox.data.items[0].message,input.message);
    assert.equal(inbox.data.items[0].fingerprint,undefined);
    assert.match(inbox.response.headers.get('Cache-Control'),/no-store/);
    const conflict=await request('/feedback',{method:'POST',data:{...input,message:'A completely different feedback message.'}});assert.equal(conflict.status,409);
});
test('validates content, email, categories, context and honeypot',async t=>{
    const {request,valid,login}=await setup(t);
    for(const extra of [{message:'short'},{message:'x'.repeat(3001)},{email:'invalid'},{category:'hacked'},{language:'xx'},{website:'spam.example'}]) {
        assert.equal((await request('/feedback',{method:'POST',data:valid(extra)})).status,400);
    }
    const input=valid({context:{tab:'quiz',phrase:'안녕하세요',browser:'Edge',device:'desktop',url:'https://secret.test',answer:'private',ip:'192.0.2.1'}});
    assert.equal((await request('/feedback',{method:'POST',data:input})).status,201);
    const inbox=await request('/admin/feedback',{token:await login()});
    assert.deepEqual(inbox.data.items[0].context,{tab:'quiz',phrase:'안녕하세요',device:'desktop',browser:'Edge'});
});
test('requires allowed Origin and allows browser preflight',async t=>{
    const {request,valid}=await setup(t);
    assert.equal((await request('/feedback',{method:'POST',data:valid(),requestOrigin:'https://evil.test'})).status,403);
    const preflight=await request('/feedback',{method:'OPTIONS'});assert.equal(preflight.status,204);
    assert.equal(preflight.response.headers.get('Access-Control-Allow-Origin'),origin);
});
test('server rate limits submissions and login attempts',async t=>{
    const {request,valid}=await setup(t);
    for(let i=0;i<5;i++) assert.equal((await request('/feedback',{method:'POST',data:valid()})).status,201);
    assert.equal((await request('/feedback',{method:'POST',data:valid()})).status,429);
    for(let i=0;i<5;i++) assert.equal((await request('/admin/login',{method:'POST',data:{password:'wrong'}})).status,401);
    assert.equal((await request('/admin/login',{method:'POST',data:{password}})).status,429);
});
test('admin changes status, filters, paginates, and session revokes on logout',async t=>{
    const {request,valid,login,DB}=await setup(t);
    const saved=await request('/feedback',{method:'POST',data:valid()});const token=await login();
    assert.equal((await request(`/admin/feedback/${saved.data.id}`,{method:'PATCH',data:{status:'resolved'}})).status,401);
    assert.equal((await request(`/admin/feedback/${saved.data.id}`,{method:'PATCH',token,data:{status:'resolved'}})).status,200);
    const resolved=await request('/admin/feedback?status=resolved',{token});assert.equal(resolved.data.total,1);
    assert.equal((await request('/admin/feedback?status=new',{token})).data.total,0);
    assert.equal((await request('/admin/feedback?offset=-1',{token})).status,400);
    assert.equal((await request('/admin/feedback?status=invalid',{token})).status,400);
    for(let i=0;i<30;i++) DB.sqlite.prepare("INSERT INTO feedback(id,request_id,fingerprint,category,message,language,created_at,updated_at) VALUES (?,?,?,'bug',?,'en',?,?)").run(crypto.randomUUID(),crypto.randomUUID(),'hash','Pagination test feedback.',Date.now()+i,Date.now()+i);
    assert.equal((await request('/admin/feedback',{token})).data.items.length,25);
    assert.equal((await request('/admin/feedback?offset=25',{token})).data.items.length,6);
    assert.equal((await request('/admin/logout',{method:'POST',token,data:{}})).status,200);
    assert.equal((await request('/admin/feedback',{token})).status,401);
});
test('expired session cannot read feedback',async t=>{
    const {request,login,DB}=await setup(t);const token=await login();
    DB.sqlite.prepare('UPDATE admin_sessions SET expires_at=0').run();
    assert.equal((await request('/admin/feedback',{token})).status,401);
});
