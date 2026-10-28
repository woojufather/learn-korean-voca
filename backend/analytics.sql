-- New server analytics. Legacy badge/localStorage counts are intentionally not imported.
CREATE TABLE IF NOT EXISTS analytics_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
INSERT OR IGNORE INTO analytics_meta(key,value) VALUES ('started_at',CAST(strftime('%s','now') AS INTEGER)*1000);
CREATE TABLE IF NOT EXISTS analytics_excluded (visitor_key TEXT PRIMARY KEY);
CREATE TABLE IF NOT EXISTS analytics_visitors (
    visitor_key TEXT PRIMARY KEY, first_seen INTEGER NOT NULL, last_seen INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS analytics_daily_visitors (
    day TEXT NOT NULL, visitor_key TEXT NOT NULL,
    language TEXT NOT NULL, device TEXT NOT NULL, last_seen INTEGER NOT NULL,
    PRIMARY KEY(day,visitor_key)
);
CREATE TABLE IF NOT EXISTS analytics_events (
    event_key TEXT PRIMARY KEY, visitor_key TEXT NOT NULL,
    day TEXT NOT NULL, type TEXT NOT NULL,
    language TEXT NOT NULL, device TEXT NOT NULL, received_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS analytics_events_day_type ON analytics_events(day,type);
CREATE INDEX IF NOT EXISTS analytics_events_type ON analytics_events(type);
CREATE INDEX IF NOT EXISTS analytics_events_visitor ON analytics_events(visitor_key);
CREATE TRIGGER IF NOT EXISTS analytics_record_visit AFTER INSERT ON analytics_events
BEGIN
    INSERT INTO analytics_visitors(visitor_key,first_seen,last_seen)
        VALUES (NEW.visitor_key,NEW.received_at,NEW.received_at)
        ON CONFLICT(visitor_key) DO UPDATE SET last_seen=MAX(last_seen,excluded.last_seen);
    INSERT INTO analytics_daily_visitors(day,visitor_key,language,device,last_seen)
        VALUES (NEW.day,NEW.visitor_key,NEW.language,NEW.device,NEW.received_at)
        ON CONFLICT(day,visitor_key) DO UPDATE SET
            language=excluded.language,device=excluded.device,last_seen=excluded.last_seen;
END;
CREATE VIEW IF NOT EXISTS analytics_visible_events AS
    SELECT e.* FROM analytics_events e WHERE NOT EXISTS
        (SELECT 1 FROM analytics_excluded x WHERE x.visitor_key=e.visitor_key);
CREATE VIEW IF NOT EXISTS analytics_visible_daily AS
    SELECT d.* FROM analytics_daily_visitors d WHERE NOT EXISTS
        (SELECT 1 FROM analytics_excluded x WHERE x.visitor_key=d.visitor_key);
