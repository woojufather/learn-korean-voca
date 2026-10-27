CREATE TABLE IF NOT EXISTS feedback (
    id TEXT PRIMARY KEY,
    request_id TEXT NOT NULL UNIQUE,
    fingerprint TEXT NOT NULL,
    category TEXT NOT NULL CHECK(category IN ('translation','audio','bug','idea')),
    message TEXT NOT NULL CHECK(length(message) BETWEEN 10 AND 3000),
    email TEXT NOT NULL DEFAULT '',
    language TEXT NOT NULL,
    context_json TEXT NOT NULL DEFAULT '{}',
    status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new','reviewing','resolved')),
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS feedback_created ON feedback(created_at DESC, id DESC);
CREATE INDEX IF NOT EXISTS feedback_status_created ON feedback(status, created_at DESC, id DESC);
CREATE TABLE IF NOT EXISTS admin_sessions (
    token_hash TEXT PRIMARY KEY,
    expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS rate_limits (
    key TEXT PRIMARY KEY,
    hits INTEGER NOT NULL,
    expires_at INTEGER NOT NULL
);
