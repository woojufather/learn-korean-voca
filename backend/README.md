# K-Talk Coach feedback service

The static app submits anonymous feedback to a Cloudflare Worker backed by D1. The inbox is read only through server-authenticated administrator requests. Browser-side flags and the former numeric PIN do not grant API access.

- `POST /feedback`: category, message, optional email, language, optional screen context, and a UUID `request_id`. Retries with the same content and request ID return the same receipt.
- `POST /admin/login`: private administrator password; returns a four-hour revocable session.
- `GET /admin/feedback?status=all&offset=0`: 25 records per page, with totals and new-feedback counts.
- `PATCH /admin/feedback/:id`: `new`, `reviewing`, or `resolved`.
- `POST /admin/logout`: revokes the session.

Admin routes require `Authorization: Bearer <session>`. Sessions are hashed in D1. All API responses are private and must never be cached. The app service worker only caches same-origin assets and its existing static CDNs, and bypasses the feedback API.

Submission and login limits allow five attempts per ten-minute IP bucket. Only a daily HMAC bucket is stored, not the raw IP. This limits casual abuse; it does not replace a bot challenge against determined distributed spam. Messages, passwords and emails are not logged by the Worker; observability is disabled. Context includes only the selected screen, Korean phrase, broad device type and browser name. It excludes answers typed by the learner, browsing history and query strings.

## Maintenance

Install the pinned development dependency with `npm install` in this folder. Run `npm test`. Create the database and apply `schema.sql` before deploying. `wrangler.jsonc` contains public account/database identifiers and the allowed app origin.

Provide `ADMIN_PASSWORD_HASH` and `RATE_SECRET` through Cloudflare secrets, never through committed files or browser JavaScript. The administrator password is randomly generated with high entropy; `ADMIN_PASSWORD_HASH` is its SHA-256 digest. When changing credentials, rotate the private password hash and clear existing sessions deliberately. Keep the owner's credential file outside this repository.

Deploy the Worker before publishing the static app. Its address is configured in `../feedback-config.js`, which contains no secrets. Deploy updated frontend assets and `sw.js` together. The service uses the existing Cloudflare account without changing its plan.
