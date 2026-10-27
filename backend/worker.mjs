const CATEGORIES = new Set(['translation', 'audio', 'bug', 'idea']);
const LANGUAGES = new Set(['en', 'ja', 'zh', 'es', 'th']);
const STATUSES = new Set(['new', 'reviewing', 'resolved']);
const TABS = new Set(['hangul', 'quiz', 'realkorean', 'flashcard', 'voca', 'review', 'stats']);
const encoder = new TextEncoder();
const hex = bytes => Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2, '0')).join('');
const hash = async value => hex(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
function equal(a, b) {
    if (a.length !== b.length) return false;
    let difference = 0;
    for (let i = 0; i < a.length; i++) difference |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return difference === 0;
}
function failure(code, status) { throw Object.assign(new Error(code), { status }); }
async function body(request) {
    if (!request.headers.get('Content-Type')?.startsWith('application/json')) failure('invalid_request', 415);
    if (Number(request.headers.get('Content-Length') || 0) > 24000) failure('too_large', 413);
    // Read with a cap even when the sender omits Content-Length.
    const reader = request.body?.getReader();
    if (!reader) failure('invalid_request', 400);
    let length = 0;
    const chunks = [];
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        length += value.length;
        if (length > 24000) { await reader.cancel(); failure('too_large', 413); }
        chunks.push(value);
    }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    try {
        const value = JSON.parse(new TextDecoder().decode(bytes));
        if (!value || typeof value !== 'object' || Array.isArray(value)) failure('invalid_request', 400);
        return value;
    } catch { failure('invalid_request', 400); }
}
async function rateLimit(request, env, kind, limit, seconds) {
    const now = Math.floor(Date.now() / 1000);
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    // Store only a daily HMAC bucket, never the raw visitor IP.
    const key = await crypto.subtle.importKey('raw', encoder.encode(env.RATE_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const digest = hex(await crypto.subtle.sign('HMAC', key, encoder.encode(`${kind}:${Math.floor(now / 86400)}:${ip}`)));
    const row = await env.DB.prepare(`INSERT INTO rate_limits(key,hits,expires_at) VALUES (?,1,?)
        ON CONFLICT(key) DO UPDATE SET
          hits=CASE WHEN rate_limits.expires_at<=? THEN 1 ELSE rate_limits.hits+1 END,
          expires_at=CASE WHEN rate_limits.expires_at<=? THEN excluded.expires_at ELSE rate_limits.expires_at END
        RETURNING hits,expires_at`).bind(digest, now + seconds, now, now).first();
    if (row.hits > limit) failure('rate_limited', 429);
}
async function authenticate(request, env) {
    const token = request.headers.get('Authorization')?.match(/^Bearer ([a-f0-9]{64})$/)?.[1];
    if (!token) failure('unauthorized', 401);
    const tokenHash = await hash(token);
    const row = await env.DB.prepare('SELECT expires_at FROM admin_sessions WHERE token_hash=?').bind(tokenHash).first();
    if (!row || row.expires_at <= Date.now()) failure('unauthorized', 401);
    return tokenHash;
}
function cleanContext(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
    const result = {};
    if (TABS.has(value.tab)) result.tab = value.tab;
    if (typeof value.phrase === 'string') result.phrase = value.phrase.slice(0, 300);
    if (['desktop', 'mobile', 'tablet'].includes(value.device)) result.device = value.device;
    if (['Edge', 'Chrome', 'Safari', 'Firefox', 'Other'].includes(value.browser)) result.browser = value.browser;
    return result;
}
function feedbackRow(row) {
    const { request_id, fingerprint, context_json, ...rest } = row;
    return { ...rest, context: JSON.parse(context_json) };
}
export default {
    async fetch(request, env, ctx) {
        const origin = request.headers.get('Origin');
        const headers = {
            'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store, private',
            'Vary': 'Origin', 'X-Content-Type-Options': 'nosniff',
            'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
            'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type,Authorization',
            'Access-Control-Max-Age': '600'
        };
        const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers });
        try {
            if (origin !== env.ALLOWED_ORIGIN) return json({ error: 'forbidden' }, 403);
            if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
            if (!env.DB || !env.ADMIN_PASSWORD_HASH || !env.RATE_SECRET) return json({ error: 'unavailable' }, 503);
            const url = new URL(request.url);
            if (url.pathname === '/feedback' && request.method === 'POST') {
                const input = await body(request);
                const message = typeof input.message === 'string' ? input.message.trim() : '';
                const email = typeof input.email === 'string' ? input.email.trim() : '';
                if (!CATEGORIES.has(input.category) || !LANGUAGES.has(input.language) ||
                    message.length < 10 || message.length > 3000 || email.length > 254 ||
                    (email && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) || input.website ||
                    typeof input.request_id !== 'string' || !/^[a-f0-9-]{36}$/.test(input.request_id)) failure('invalid_request', 400);
                const context = cleanContext(input.context);
                const fingerprint = await hash(JSON.stringify([input.category, message, email, input.language, context]));
                const existing = await env.DB.prepare('SELECT id,fingerprint FROM feedback WHERE request_id=?').bind(input.request_id).first();
                if (existing) {
                    if (!equal(existing.fingerprint, fingerprint)) failure('request_conflict', 409);
                    return json({ id: existing.id });
                }
                await rateLimit(request, env, 'submit', 5, 600);
                const id = crypto.randomUUID(), now = Date.now();
                const result = await env.DB.prepare(`INSERT OR IGNORE INTO feedback
                    (id,request_id,fingerprint,category,message,email,language,context_json,status,created_at,updated_at)
                    VALUES (?,?,?,?,?,?,?,?,'new',?,?)`).bind(id, input.request_id, fingerprint, input.category, message, email, input.language, JSON.stringify(context), now, now).run();
                if (result.meta.changes === 0) {
                    const duplicate = await env.DB.prepare('SELECT id,fingerprint FROM feedback WHERE request_id=?').bind(input.request_id).first();
                    if (!duplicate || !equal(duplicate.fingerprint, fingerprint)) failure('request_conflict', 409);
                    return json({ id: duplicate.id });
                }
                ctx.waitUntil(env.DB.prepare('DELETE FROM rate_limits WHERE expires_at<?').bind(Math.floor(now / 1000)).run());
                return json({ id }, 201);
            }
            if (url.pathname === '/admin/login' && request.method === 'POST') {
                await rateLimit(request, env, 'login', 5, 600);
                const input = await body(request);
                if (typeof input.password !== 'string' || input.password.length > 128 ||
                    !equal(await hash(input.password), env.ADMIN_PASSWORD_HASH)) failure('unauthorized', 401);
                const token = hex(crypto.getRandomValues(new Uint8Array(32)));
                const expires = Date.now() + 4 * 60 * 60 * 1000;
                await env.DB.prepare('INSERT INTO admin_sessions(token_hash,expires_at) VALUES (?,?)').bind(await hash(token), expires).run();
                ctx.waitUntil(env.DB.prepare('DELETE FROM admin_sessions WHERE expires_at<?').bind(Date.now()).run());
                return json({ token, expires_at: expires });
            }
            const tokenHash = await authenticate(request, env);
            if (url.pathname === '/admin/logout' && request.method === 'POST') {
                await env.DB.prepare('DELETE FROM admin_sessions WHERE token_hash=?').bind(tokenHash).run();
                return json({ ok: true });
            }
            if (url.pathname === '/admin/feedback' && ['GET','POST'].includes(request.method)) {
                const query = request.method === 'POST' ? await body(request) : Object.fromEntries(url.searchParams);
                const status = query.status || 'all';
                if (status !== 'all' && !STATUSES.has(status)) failure('invalid_request', 400);
                const offset = Number(query.offset || 0);
                if (!Number.isSafeInteger(offset) || offset < 0 || offset > 100000) failure('invalid_request', 400);
                const where = status === 'all' ? '' : 'WHERE status=?';
                const args = status === 'all' ? [] : [status];
                const result = await env.DB.prepare(`SELECT * FROM feedback ${where} ORDER BY created_at DESC,id DESC LIMIT 25 OFFSET ?`).bind(...args, offset).all();
                const total = await env.DB.prepare(`SELECT count(*) AS count FROM feedback ${where}`).bind(...args).first();
                const counts = await env.DB.prepare('SELECT status,count(*) AS count FROM feedback GROUP BY status').all();
                return json({ items: result.results.map(feedbackRow), total: total.count, counts: counts.results });
            }
            const match = url.pathname.match(/^\/admin\/feedback\/([a-f0-9-]{36})$/);
            if (match && request.method === 'PATCH') {
                const input = await body(request);
                if (!STATUSES.has(input.status)) failure('invalid_request', 400);
                const result = await env.DB.prepare('UPDATE feedback SET status=?,updated_at=? WHERE id=? RETURNING id,status').bind(input.status, Date.now(), match[1]).first();
                if (!result) failure('not_found', 404);
                return json(result);
            }
            return json({ error: 'not_found' }, 404);
        } catch (error) {
            // Never log visitor messages, emails, credentials, or raw request bodies.
            return json({ error: error.status ? error.message : 'unavailable' }, error.status || 503);
        }
    }
};
