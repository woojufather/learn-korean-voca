# K-Talk Coach feedback service

The static app submits anonymous feedback to a Cloudflare Worker backed by D1. The inbox is read only through server-authenticated administrator requests. Browser-side flags and the former numeric PIN do not grant API access.

- `POST /feedback`: category, message, optional email, language, optional screen context, and a UUID `request_id`. Retries with the same content and request ID return the same receipt.
- `POST /admin/login`: private administrator password; returns a four-hour revocable session.
- `GET /admin/feedback?status=all&offset=0`: 25 records per page, with totals and new-feedback counts.
- `POST /admin/feedback` with `{ "status": "all", "offset": 0 }`: the same query; the app uses POST to bypass GET caching even in older installed service workers.
- `PATCH /admin/feedback/:id`: `new`, `reviewing`, or `resolved`.
- `POST /admin/logout`: revokes the session.

Admin routes require `Authorization: Bearer <session>`. Sessions are hashed in D1. All API responses are private and must never be cached. The app service worker only caches same-origin assets and its existing static CDNs, and bypasses the feedback API.

Submission and login limits allow five attempts per ten-minute IP bucket. Only a daily HMAC bucket is stored, not the raw IP. This limits casual abuse; it does not replace a bot challenge against determined distributed spam. Messages, passwords and emails are not logged by the Worker; observability is disabled. Context includes only the selected screen, Korean phrase, broad device type and browser name. It excludes answers typed by the learner, browsing history and query strings.

## Maintenance

Install the pinned development dependency with `npm install` in this folder. Run `npm test`. Create the database and apply `schema.sql` before deploying. `wrangler.jsonc` contains public account/database identifiers and the allowed app origin.

Provide `ADMIN_PASSWORD_HASH` and `RATE_SECRET` through Cloudflare secrets, never through committed files or browser JavaScript. `ADMIN_PASSWORD_HASH` is the SHA-256 digest of the owner's configured password. When changing credentials, rotate the private password hash and clear existing sessions deliberately. Keep the owner's credential file outside this repository.

Deploy the Worker before publishing the static app. Its address is configured in `../feedback-config.js`, which contains no secrets. Deploy updated frontend assets and `sw.js` together. The service uses the existing Cloudflare account without changing its plan.

## Site-wide analytics

### Page and funnel extension (November 2026)

For an existing database, apply `analytics-pages.sql` **once**, after `analytics.sql` and before deploying the new Worker. It adds a page column and detail collection timestamp; it does not reset existing statistics or feedback. Do not re-run its `ALTER TABLE` statement. Fresh test databases apply both files in that order.

The new `learning_start` and `quiz_complete` event types, together with `page_view`, support per-page learning measurement. `page_path` accepts only known site pages and app tabs; arbitrary URLs, query strings and administrator routes are rejected. Older clients without `page_path` remain accepted and are labelled `/legacy/`, never attributed to a made-up homepage. Earlier answers are not backfilled as completions.

The admin snapshot adds today's learning starts and completions, detail start time, and page-level browser/view/start/completion counts for the last seven Korea-time calendar days. Unique browsers across pages are not additive. An app completion is one submitted question, regardless of correctness. A guide completion is submission of all three self-check questions. Checking again does not add another completion. A learning start is the first interaction in a learning page view, not just landing on the page. Reloading or navigating away and back creates another view. These are client-reported behavioral events validated and aggregated on the server, not a proof of attendance or a fraud-resistant ad measurement system.

The new Privacy page lets a browser opt out of first-party collection with `kTalkAnalyticsOptOut`. DNT/GPC and owner exclusion still apply. This control is separate from advertising consent and does not act as a certified CMP.

Apply `analytics.sql` before deploying a Worker that imports `analytics.mjs`. This adds separate analytics tables and does not change feedback or administrator credentials. `analytics_meta.started_at` is initialized once; historical badge counts and browser-local counters are not imported.

`POST /analytics/events` accepts a random browser UUID, event UUID, type, chosen learning language and broad device category. The browser UUID is stored only as an HMAC. No Korean answers, feedback content, full user agent or raw IP is stored in the analytics tables. The same event UUID cannot increment a count twice. SQLite triggers update browser/day records atomically with event insertion. Days use Asia/Seoul (UTC+09:00), derived from server receipt time.

The client honors Do Not Track and Global Privacy Control, skips storage-blocked browsers, and keeps retry queues only in memory for at most ten minutes. Offline or blocked visits may therefore be missing. Recognized bot user agents are ignored; this is not a comprehensive bot-detection or anti-fraud system.

`POST /admin/analytics` returns one transactional snapshot: daily and cumulative unique browsers, daily and cumulative page views, today's submitted questions and started speech-recognition practices, today's latest language/device per browser, and seven daily rows. A browser can count on multiple days but only once in the cumulative visitor total. Reloading adds a view, not a unique browser. Language changes update attribution without adding a view.

`POST /admin/analytics/exclude` accepts `visitor_id` under administrator authentication. The administrator's browser is excluded retroactively through query filters; raw records are not deleted. Owner sessions, direct `#admin` loads and dashboard refreshes do not generate visitor events. Deployment probes are excluded using the same endpoint.

`../analytics.js` renders only this server snapshot. On failure it shows an error, without substituting old local data or fabricated zeros. Figures are browser-based estimates, not verified counts of individual people or their native languages. Clearing browser storage, changing browsers or using another device can create another visitor identity.
