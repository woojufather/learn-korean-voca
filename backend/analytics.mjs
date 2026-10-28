export const dayInSeoul = (time=Date.now()) => new Date(time+9*60*60*1000).toISOString().slice(0,10);
const languages = new Set(['en','ja','zh','es','th']);
const devices = new Set(['desktop','mobile','tablet']);
const types = new Set(['page_view','visit','language_change','quiz_answer','speech_practice']);
const uuid = value => typeof value==='string' && /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(value);
function invalid() { throw Object.assign(new Error('invalid_request'),{status:400}); }
export async function visitorKey(env,id) {
    if(!uuid(id)) invalid();
    const encoder=new TextEncoder();
    const key=await crypto.subtle.importKey('raw',encoder.encode(env.RATE_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign']);
    const bytes=await crypto.subtle.sign('HMAC',key,encoder.encode('analytics:'+id.toLowerCase()));
    return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
}
export async function recordEvent(input,env,request) {
    if(!uuid(input.visitor_id)||!uuid(input.event_id)||!types.has(input.type)||!languages.has(input.language)||!devices.has(input.device)) invalid();
    if(/bot|crawler|spider|headless|lighthouse|preview|slurp/i.test(request.headers.get('User-Agent')||'')) return;
    const visitor=await visitorKey(env,input.visitor_id);
    if(await env.DB.prepare('SELECT 1 FROM analytics_excluded WHERE visitor_key=?').bind(visitor).first()) return;
    const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(visitor+':'+input.event_id.toLowerCase()));
    const event=Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
    const existing=await env.DB.prepare('SELECT type,language,device FROM analytics_events WHERE event_key=?').bind(event).first();
    if(existing) {
        if(existing.type!==input.type||existing.language!==input.language||existing.device!==input.device) throw Object.assign(new Error('request_conflict'),{status:409});
        return;
    }
    const now=Date.now();
    // The trigger updates visitors and daily language/device attribution atomically.
    // A duplicate INSERT does not fire it, so retrying an old event cannot revert the language.
    await env.DB.prepare(`INSERT OR IGNORE INTO analytics_events
        (event_key,visitor_key,day,type,language,device,received_at) VALUES (?,?,?,?,?,?,?)`)
        .bind(event,visitor,dayInSeoul(now),input.type,input.language,input.device,now).run();
}
export async function excludeVisitor(input,env) {
    const key=await visitorKey(env,input.visitor_id);
    await env.DB.prepare('INSERT OR IGNORE INTO analytics_excluded(visitor_key) VALUES (?)').bind(key).run();
}
export async function snapshot(env,now=Date.now()) {
    const today=dayInSeoul(now);
    const days=Array.from({length:7},(_,i)=>dayInSeoul(now-i*86400000));
    // D1 batch executes these reads in a transaction, keeping denominators consistent.
    const data=await env.DB.batch([
        env.DB.prepare("SELECT value FROM analytics_meta WHERE key='started_at'"),
        env.DB.prepare('SELECT count(*) count FROM analytics_visitors v WHERE NOT EXISTS (SELECT 1 FROM analytics_excluded x WHERE x.visitor_key=v.visitor_key)'),
        env.DB.prepare("SELECT count(*) count FROM analytics_visible_events WHERE type='page_view'"),
        env.DB.prepare('SELECT count(*) count FROM analytics_visible_daily WHERE day=?').bind(today),
        env.DB.prepare('SELECT type,count(*) count FROM analytics_visible_events WHERE day=? GROUP BY type').bind(today),
        env.DB.prepare('SELECT language,count(*) count FROM analytics_visible_daily WHERE day=? GROUP BY language').bind(today),
        env.DB.prepare('SELECT device,count(*) count FROM analytics_visible_daily WHERE day=? GROUP BY device').bind(today),
        env.DB.prepare('SELECT day,count(*) visitors FROM analytics_visible_daily WHERE day>=? AND day<=? GROUP BY day').bind(days[6],today),
        env.DB.prepare(`SELECT day,
            sum(CASE WHEN type='page_view' THEN 1 ELSE 0 END) pageviews,
            sum(CASE WHEN type='quiz_answer' THEN 1 ELSE 0 END) quizzes,
            sum(CASE WHEN type='speech_practice' THEN 1 ELSE 0 END) speech
            FROM analytics_visible_events WHERE day>=? AND day<=? GROUP BY day`).bind(days[6],today)
    ]);
    const started=Number(data[0].results[0]?.value);
    if(!Number.isFinite(started)) throw Error('analytics_not_initialized');
    const todayEvents=Object.fromEntries(data[4].results.map(row=>[row.type,row.count]));
    const daily=new Map(data[7].results.map(row=>[row.day,row.visitors]));
    const activity=new Map(data[8].results.map(row=>[row.day,row]));
    return {
        started_at:started,updated_at:now,today,timezone:'Asia/Seoul',
        total_visitors:data[1].results[0].count,total_pageviews:data[2].results[0].count,
        today_visitors:data[3].results[0].count,today_pageviews:todayEvents.page_view||0,
        today_quizzes:todayEvents.quiz_answer||0,today_speech:todayEvents.speech_practice||0,
        languages:Object.fromEntries([...languages].map(lang=>[lang,data[5].results.find(row=>row.language===lang)?.count||0])),
        devices:Object.fromEntries([...devices].map(device=>[device,data[6].results.find(row=>row.device===device)?.count||0])),
        history:days.map(day=>({day,collecting:day>=dayInSeoul(started),
            visitors:daily.get(day)||0,pageviews:activity.get(day)?.pageviews||0,
            quizzes:activity.get(day)?.quizzes||0,speech:activity.get(day)?.speech||0}))
    };
}
