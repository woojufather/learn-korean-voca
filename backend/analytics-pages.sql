-- Apply once after analytics.sql. Existing statistics and feedback are preserved.
-- Old events have no reliable page attribution; do not assign them to the homepage.
ALTER TABLE analytics_events ADD COLUMN page_path TEXT NOT NULL DEFAULT '/legacy/';
CREATE INDEX IF NOT EXISTS analytics_events_page_day ON analytics_events(page_path,day);
INSERT OR IGNORE INTO analytics_meta(key,value) VALUES ('detail_started_at',CAST(strftime('%s','now') AS INTEGER)*1000);
