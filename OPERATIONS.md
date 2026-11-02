# K-Talk Coach content and measurement

## Static lessons and search

`content/lessons.mjs` contains ten original English beginner guides. `node scripts/build-learning-pages.mjs` generates committed, readable HTML under `/learn/`, the four operator pages, `sitemap.xml` and `robots.txt`. GitHub Pages serves the generated files directly; no server rendering or build dependency is required. Content is available without JavaScript. Every public HTML page has its own title, description and absolute canonical URL. The sitemap contains 16 canonical URLs, without fragments or duplicate index.html URLs.

The app footer links to the lesson library and operator pages. Its labels follow the existing five-language setting; the guide and operator page bodies are currently English. Links connect guides to the relevant existing app tab. Existing learning datasets and learning progress formats are unchanged.

Operator details supplied by the owner: zyper choi; wooju200903@gmail.com. No invented company, address, registration number or legal jurisdiction has been added. If these details, actual data handling or integrations change, update the information pages in the generator before regenerating them. Privacy statements describe current behavior, including the absence of automatic feedback/analytics deletion.

## Google setup (updated November 2026)

- AdSense: the existing homepage head script for `ca-pub-5677208926480734` remains once. No new ad placements or auto-ad settings were enabled in this release. Site verification does not imply ad approval or income.
- Search Console: the owner-supplied homepage head verification tag remains unchanged. The owner confirmed successful HTML-tag verification. Keep the tag permanently; actual sitemap submission/indexing is managed in the owner’s account.
- GA4: `G-JRM8LY3R2J` is installed via one shared synchronous head module on all 16 public HTML pages. `google-analytics.js` initializes consent defaults before the unchanged AdSense library, then runs the standard async gtag.js load and config only after analytics permission. No Tag Manager container or second direct GA4 installation is used. Native Google page_view measurement is used; no manual page_view is sent. SPA history views depend on the stream’s Enhanced Measurement setting. Do not install an additional page-view history trigger or another Google tag for the same stream.
- Before serving personalized ads to EEA/UK/Swiss users, configure and test an appropriate Google-certified CMP in AdSense Privacy & messaging. The first-party statistics opt-out is not an advertising CMP. Review ads.txt and any ad-unit/auto-ad requirements in the actual AdSense account after approval; this release does not claim they are configured.

Primary references checked for this release:

- https://support.google.com/webmasters/answer/9008080
- https://support.google.com/analytics/answer/9539598
- https://support.google.com/analytics/answer/9311124
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://support.google.com/adsense/answer/13554116

## First-party and GA4 events

| Action | First-party event | GA4 event after analytics consent |
| --- | --- | --- |
| Open a guide or change an app tab | `page_view` with fixed `page_path` | `page_view` (avoid automatic + manual double counting) |
| First actual learning interaction per view | `learning_start` | custom `learning_start` |
| Submit one answer in the app | `quiz_answer` and `quiz_complete` once per current question | custom `quiz_complete` |
| Submit all three questions in a guide | three `quiz_answer` events and one `quiz_complete` | custom `quiz_complete` |
| Speech recognition actually starts | `speech_practice` | custom `speech_practice` |

The server statistics are already operational independently of Google. Use the authenticated admin panel; localStorage is only a browser identifier/settings store, not the source of global counts. Never send feedback text, email, typed answers, raw identifiers, query strings or administrator tokens to GA4. GA4 consent, blocking, timezone and visitor definitions differ from first-party counts. Google receives technical page/browser/network data through its library; custom learning events contain only a fixed page identifier, never form content. Known owner browsers, direct #admin, DNT and GPC are excluded from this integration. Use a clean private browser window to verify Realtime.

## Deployment

Test locally with `node --test --test-isolation=none backend/worker.test.mjs backend/cache.test.mjs backend/analytics.test.mjs`. Apply the page migration once and deploy the Worker before pushing the frontend to GitHub Pages. Keep existing Cloudflare secrets and administrator password unchanged. Bump the service-worker cache version for a release. Verify public URLs, one AdSense script in the homepage head, and authenticated statistics after deployment. Never use production feedback messages or raw visitor records as test fixtures.

## Analytics consent and verification

The banner provides equal Allow/Reject choices in all five supported languages. It uses basic consent mode: no GA4 library is loaded before permission. An allow/deny preference is saved for at most 180 days under kTalkGA4ConsentV1, with a Cookie settings button in each footer. Granting analytics does not grant advertising permission. Google signals and ad personalization signals are disabled in the GA4 config. Withdrawal sets the official ga-disable flag, denies analytics storage and removes accessible _ga cookies. It cannot erase already collected Google data. Property retention, sharing, timezone and internal-traffic filters require the operator’s account; this code does not claim to configure them. The new banner is not a Google-certified advertising CMP. Existing first-party statistics and their separate privacy control remain operational.

Verify with a private window, no tracking blocker or DNT/GPC, and Allow analytics. Open the app and a guide, then check Reports > Realtime overview in the G-JRM8LY3R2J property for page_view and learning_start/quiz_complete. Initial collection may take up to 30 minutes. A successful g/collect response establishes request delivery, not proof that a private account report displays it. Never claim to have inspected that report without account access.
