# K-Talk Coach content and measurement

## Static lessons and search

`content/lessons.mjs` contains ten original English beginner guides. `node scripts/build-learning-pages.mjs` generates committed, readable HTML under `/learn/`, the four operator pages, `sitemap.xml` and `robots.txt`. GitHub Pages serves the generated files directly; no server rendering or build dependency is required. Content is available without JavaScript. Every public HTML page has its own title, description and absolute canonical URL. The sitemap contains 16 canonical URLs, without fragments or duplicate index.html URLs.

The app footer links to the lesson library and operator pages. Its labels follow the existing five-language setting; the guide and operator page bodies are currently English. Links connect guides to the relevant existing app tab. Existing learning datasets and learning progress formats are unchanged.

Operator details supplied by the owner: zyper choi; wooju200903@gmail.com. No invented company, address, registration number or legal jurisdiction has been added. If these details, actual data handling or integrations change, update the information pages in the generator before regenerating them. Privacy statements describe current behavior, including the absence of automatic feedback/analytics deletion.

## Google setup: not yet connected

- AdSense: the existing homepage head script for `ca-pub-5677208926480734` remains once. No new ad placements or auto-ad settings were enabled in this release. Site verification does not imply ad approval or income.
- Search Console: no verification meta tag in current HTML and no Google verification TXT at the public apex DNS at the time of inspection. This does not establish whether the owner has another valid account verification method. Request the exact HTML verification tag or confirmation of successful domain verification. If supplied, put the exact meta tag in the homepage head and retain it. Submit `https://ktalkcoach.online/sitemap.xml` in the owner's property. Verify actual indexing in Search Console; do not treat sitemap publication as indexing confirmation.
- GA4: no GA4 measurement ID, gtag or Google Tag Manager installation was present. Request the owner's `G-…` web stream Measurement ID. Do not invent an ID or use the AdSense publisher ID as a measurement ID. Add one consistent Google tag setup across public pages after the owner supplies the ID and consent configuration; update Privacy Policy then. No GA4 collection is active in this release.
- Before serving personalized ads to EEA/UK/Swiss users, configure and test an appropriate Google-certified CMP in AdSense Privacy & messaging. The first-party statistics opt-out is not an advertising CMP. Review ads.txt and any ad-unit/auto-ad requirements in the actual AdSense account after approval; this release does not claim they are configured.

Primary references checked for this release:

- https://support.google.com/webmasters/answer/9008080
- https://support.google.com/analytics/answer/9539598
- https://support.google.com/analytics/answer/9311124
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://support.google.com/adsense/answer/13554116

## Events available now, and a future GA4 mapping

| Action | First-party event | Potential GA4 event after connection |
| --- | --- | --- |
| Open a guide or change an app tab | `page_view` with fixed `page_path` | `page_view` (avoid automatic + manual double counting) |
| First actual learning interaction per view | `learning_start` | custom `learning_start` |
| Submit one answer in the app | `quiz_answer` and `quiz_complete` once per current question | custom `quiz_complete` |
| Submit all three questions in a guide | three `quiz_answer` events and one `quiz_complete` | custom `quiz_complete` |
| Speech recognition actually starts | `speech_practice` | custom `speech_practice` |

The server statistics are already operational independently of Google. Use the authenticated admin panel; localStorage is only a browser identifier/settings store, not the source of global counts. Never send feedback text, email, typed answers, raw identifiers, query strings or administrator tokens to GA4. If GA4 is enabled later, its consent, blocking, timezone and visitor definitions may differ, so expect its totals to differ from first-party counts.

## Deployment

Test locally with `node --test --test-isolation=none backend/worker.test.mjs backend/cache.test.mjs backend/analytics.test.mjs`. Apply the page migration once and deploy the Worker before pushing the frontend to GitHub Pages. Keep existing Cloudflare secrets and administrator password unchanged. Bump the service-worker cache version for a release. Verify public URLs, one AdSense script in the homepage head, and authenticated statistics after deployment. Never use production feedback messages or raw visitor records as test fixtures.
