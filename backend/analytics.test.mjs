import {test} from 'node:test';
import assert from 'node:assert/strict';
import {database} from './test-database.mjs';
import worker from './worker.mjs';
import {dayInSeoul,snapshot} from './analytics.mjs';
async function setup(t){
    const DB=database();t.after(()=>DB.sqlite.close());
    const password='analytics-test-owner';
    const env={DB,ALLOWED_ORIGIN:'https://ktalkcoach.online',RATE_SECRET:'analytics-test-hmac',ADMIN_PASSWORD_HASH:Buffer.from(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(password))).toString('hex')};
    const jobs=[];
    const call=async(path,data,token,ua='Mozilla/5.0 Chrome/130')=>{
        const response=await worker.fetch(new Request('https://feedback.test'+path,{method:'POST',headers:{Origin:env.ALLOWED_ORIGIN,'Content-Type':'application/json','CF-Connecting-IP':'192.0.2.42','User-Agent':ua,...(token?{Authorization:'Bearer '+token}:{})},body:JSON.stringify(data)}),env,{waitUntil:p=>jobs.push(p)});
        await Promise.all(jobs);return {status:response.status,data:await response.json(),response};
    };
    const token=(await call('/admin/login',{password})).data.token;
    const event=(visitor,extra={})=>({visitor_id:visitor,event_id:crypto.randomUUID(),type:'page_view',language:'en',device:'desktop',...extra});
    return{DB,env,call,token,event};
}
test('Korea date boundary uses server time, not UTC or a client date',()=>{
    assert.equal(dayInSeoul(Date.parse('2026-10-27T14:59:59Z')),'2026-10-27');
    assert.equal(dayInSeoul(Date.parse('2026-10-27T15:00:00Z')),'2026-10-28');
});
test('two browsers share one global snapshot, while reloads do not add unique visitors',async t=>{
    const {call,token,event}=await setup(t);
    const first=crypto.randomUUID(),second=crypto.randomUUID();
    assert.equal((await call('/analytics/events',event(first))).status,202);
    await call('/analytics/events',event(first));
    await call('/analytics/events',event(second,{language:'ja',device:'mobile'}));
    const stats=(await call('/admin/analytics',{},token)).data;
    assert.equal(stats.total_visitors,2);assert.equal(stats.today_visitors,2);
    assert.equal(stats.total_pageviews,3);assert.equal(stats.today_pageviews,3);
    assert.deepEqual(stats.languages,{en:1,ja:1,zh:0,es:0,th:0});
    assert.deepEqual(stats.devices,{desktop:1,mobile:1,tablet:0});
    assert.equal(stats.timezone,'Asia/Seoul');
    assert.equal(stats.history[0].visitors,2);assert.equal(stats.history[0].pageviews,3);
    assert.equal(stats.history[1].collecting,false);
});
test('retries do not duplicate counts or undo a subsequent language change',async t=>{
    const {call,token,event}=await setup(t);const id=crypto.randomUUID();
    const original=event(id);await call('/analytics/events',original);
    await call('/analytics/events',event(id,{type:'language_change',language:'th'}));
    await call('/analytics/events',original);
    const changed=(await call('/admin/analytics',{},token)).data;
    assert.equal(changed.total_pageviews,1);assert.equal(changed.today_visitors,1);
    assert.equal(changed.languages.en,0);assert.equal(changed.languages.th,1);
    const answer=event(id,{type:'quiz_answer',language:'th'});
    await call('/analytics/events',answer);await call('/analytics/events',answer);
    await call('/analytics/events',event(id,{type:'speech_practice',language:'th'}));
    const stats=(await call('/admin/analytics',{},token)).data;
    assert.equal(stats.today_quizzes,1);assert.equal(stats.today_speech,1);
    assert.equal(stats.today_visitors,1);assert.equal(stats.total_pageviews,1);
});
test('owner exclusion removes owner history from all denominators; admin refresh never counts a visit',async t=>{
    const {call,token,event}=await setup(t);const owner=crypto.randomUUID(),learner=crypto.randomUUID();
    await call('/analytics/events',event(owner,{language:'es'}));
    await call('/analytics/events',event(learner,{language:'zh'}));
    assert.equal((await call('/admin/analytics/exclude',{visitor_id:owner})).status,401);
    assert.equal((await call('/admin/analytics/exclude',{visitor_id:owner},token)).status,200);
    await call('/analytics/events',event(owner,{language:'es'}));
    const one=(await call('/admin/analytics',{},token)).data;
    const two=(await call('/admin/analytics',{},token)).data;
    assert.equal(one.total_visitors,1);assert.equal(two.total_pageviews,1);
    assert.equal(two.languages.zh,1);assert.equal(two.languages.es,0);
    assert.equal(two.history[0].visitors,1);
});
test('recognized bots ignored; invalid events rejected; snapshots protected; raw IDs not stored',async t=>{
    const {call,token,event,DB}=await setup(t);const raw=crypto.randomUUID();
    assert.equal((await call('/admin/analytics',{})).status,401);
    assert.equal((await call('/analytics/events',event(raw),undefined,'Googlebot')).status,202);
    assert.equal((await call('/admin/analytics',{},token)).data.total_visitors,0);
    for(const change of [{visitor_id:'bad'},{language:'ko'},{device:'tv'},{type:'arbitrary'},{event_id:'bad'}])assert.equal((await call('/analytics/events',event(raw,change))).status,400);
    await call('/analytics/events',event(raw));
    assert.notEqual(DB.sqlite.prepare('SELECT visitor_key FROM analytics_visitors').get().visitor_key,raw);
    const response=await call('/admin/analytics',{},token);assert.match(response.response.headers.get('Cache-Control'),/no-store/);
});
test('a returning browser on another day is one total visitor and one visitor per day',async t=>{
    const {env,call,token,event,DB}=await setup(t);const id=crypto.randomUUID();
    await call('/analytics/events',event(id));
    const today=dayInSeoul();const yesterday=dayInSeoul(Date.now()-86400000);
    const key=DB.sqlite.prepare('SELECT visitor_key FROM analytics_visitors').get().visitor_key;
    DB.sqlite.prepare('UPDATE analytics_meta SET value=? WHERE key=?').run(String(Date.now()-2*86400000),'started_at');
    DB.sqlite.prepare('INSERT INTO analytics_events(event_key,visitor_key,day,type,language,device,received_at) VALUES (?,?,?,?,?,?,?)').run('yesterday',key,yesterday,'page_view','es','desktop',Date.now()-86400000);
    const stats=await snapshot(env);
    assert.equal(stats.total_visitors,1);assert.equal(stats.total_pageviews,2);
    assert.equal(stats.history.find(row=>row.day===today).visitors,1);
    assert.equal(stats.history.find(row=>row.day===yesterday).visitors,1);
});

test('page attribution, learning starts and completions are shared, deduplicated and owner-filtered',async t=>{
    const {call,token,event,DB}=await setup(t);
    const learner=crypto.randomUUID(),owner=crypto.randomUUID();
    const page='/learn/ordering-korean-cafe/';
    await call('/analytics/events',event(learner,{page_path:page}));
    const start=event(learner,{type:'learning_start',page_path:page});
    await call('/analytics/events',start);await call('/analytics/events',start);
    const complete=event(learner,{type:'quiz_complete',page_path:page});
    await call('/analytics/events',complete);await call('/analytics/events',complete);
    await call('/analytics/events',event(learner,{page_path:'/#quiz'}));
    await call('/analytics/events',event(owner,{page_path:page}));
    await call('/admin/analytics/exclude',{visitor_id:owner},token);
    const stats=(await call('/admin/analytics',{},token)).data;
    const row=stats.pages.find(r=>r.page_path===page);
    assert.deepEqual(row,{page_path:page,visitors:1,pageviews:1,learning_starts:1,quiz_completions:1});
    assert.equal(stats.today_learning_starts,1);assert.equal(stats.today_quiz_completions,1);
    assert.equal(stats.today_visitors,1);assert.equal(stats.total_pageviews,2);
    assert.equal(stats.page_period.to,stats.today);assert(Number.isFinite(stats.detail_started_at));
    assert.equal(DB.sqlite.prepare('SELECT count(*) AS n FROM feedback').get().n,0);
    // Same event id cannot be reassigned to another page on retry.
    assert.equal((await call('/analytics/events',{...complete,page_path:'/#quiz'})).status,409);
});

test('only fixed page identifiers are accepted; older clients remain compatible without invented attribution',async t=>{
    const {call,token,event}=await setup(t);const id=crypto.randomUUID();
    for(const page_path of ['/learn/not-real/','/#admin','https://evil.test/','/contact/?email=private@example.com','/learn/ordering-korean-cafe/?name=secret',null,123]){
        assert.equal((await call('/analytics/events',event(id,{page_path}))).status,400);
    }
    assert.equal((await call('/analytics/events',event(id))).status,202);
    const stats=(await call('/admin/analytics',{},token)).data;
    assert.equal(stats.pages[0].page_path,'/legacy/');
    assert.equal(stats.pages[0].pageviews,1);
    assert.equal(stats.today_quiz_completions,0);
});

test('page migration preserves existing totals, feedback schema and legacy events',async t=>{
    const {DatabaseSync}=await import('node:sqlite');
    const {readFileSync}=await import('node:fs');
    const db=new DatabaseSync(':memory:');t.after(()=>db.close());
    db.exec(readFileSync(new URL('./schema.sql',import.meta.url),'utf8'));
    db.exec(readFileSync(new URL('./analytics.sql',import.meta.url),'utf8'));
    db.prepare('INSERT INTO analytics_events(event_key,visitor_key,day,type,language,device,received_at) VALUES (?,?,?,?,?,?,?)').run('old-event','old-visitor',dayInSeoul(),'page_view','en','desktop',Date.now());
    const before=db.prepare('SELECT value FROM analytics_meta WHERE key=?').get('started_at').value;
    db.exec(readFileSync(new URL('./analytics-pages.sql',import.meta.url),'utf8'));
    assert.equal(db.prepare('SELECT count(*) AS n FROM analytics_events').get().n,1);
    assert.equal(db.prepare('SELECT page_path FROM analytics_visible_events').get().page_path,'/legacy/');
    assert.equal(db.prepare('SELECT value FROM analytics_meta WHERE key=?').get('started_at').value,before);
    assert.equal(db.prepare('SELECT count(*) AS n FROM feedback').get().n,0);
});
