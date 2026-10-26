# Noble Hardwoods — supported SEO follow-up

Date: October 25, 2026, America/Chicago. Capture timestamps in the JSON evidence are UTC on October 26.

## Result and publication state

Prepared and verified a separate follow-up on `codex/seo-supported-followup`, based on the deployed first batch `3be6444b8820324363da69f865b260fd59f8777a`. Remote main still resolves to that exact first-batch commit. This follow-up is local and has not been pushed or deployed. No completed first-batch work was repushed.

All work is in `/Users/kylecoffelt/Documents/Codex/2026-10-25/task/noble-seo-work`. The Downloads checkout and its pre-existing edits were not modified or staged.

## Implemented

- Added three service-specific planning sections to each of Installation, Repair, Dustless Sanding, Stairs & Railings, and Custom Floors. Topics cover scope, existing conditions, material choices, estimates, access, and finish scheduling. Added links to relevant existing cost, repair, stain, stair, species and installation guides; retained the installation page's existing solid/engineered link.
- Reused the existing static service-page detail layout with a service-specific heading. Content stays server-rendered and adds no client component or dependency. The service-route build size remains 196 B with 111 kB first-load JS.
- Corrected Lighthouse-reproduced contrast failures: quote-form helper/intro/privacy text, homepage city-card counts, nearby city counts, and the light-on-dark project spotlight label/number. No review, count, or claim was rewritten.
- Added the wordmark `sizes` value to match the existing 96px mobile / 128px larger display widths. This changes browser image selection, not branding or layout.

Files: `src/data/servicePlanning.ts`, `src/data/launch.ts`, `src/app/[serviceSlug]/page.tsx`, `src/app/page.tsx`, `src/components/QuoteForm.tsx`, `src/components/LocationProjectSpotlight.tsx`, `src/components/NearbyServiceAreas.tsx`, `src/components/Logo.tsx`, and this follow-up's checklist/evidence files in `docs/seo/`.

The educational content builds on the existing blog/service library. General flooring distinctions were cross-checked against NWFA's [floor types](https://woodfloors.org/types-of-wood-floors/), [refinishing](https://woodfloors.org/refinishing-your-floors/), [moisture guidance](https://woodfloors.org/problem-prevention/), and [finishes](https://woodfloors.org/finishes/). These sources do not establish Noble's membership, credentials, equipment, products, or pricing. No new business-specific claims were added.

## Fresh performance baseline

Production measured before this follow-up, using Lighthouse 12.8.2, default mobile simulated throttling. One run per URL; these are lab observations, not field data or demonstrated before/after improvement.

| Production page | Performance | LCP | TBT | CLS | Accessibility | SEO |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 80 | 5.20 s | 65.5 ms | 0 | 96 | 100 |
| Contact | 73 | 5.77 s | 130 ms | 0 | 96 | 100 |
| Overland Park | 77 | 4.91 s | 37 ms | 0 | 96 | 100 |
| Refinishing | 72 | 5.76 s | 86 ms | 0 | 96 | 100 |

The unused-JavaScript opportunity on all four pages points to Google's `gtag/js` (~79,800 bytes estimated unused), not a removable application module. Analytics and consent are expressly excluded from changes by the resume instructions.

The actual mobile browser checks on production showed hero animation `none`, H1 opacity `1`, and H1 LCP at first contentful paint: Contact 1,084 ms, Overland Park 192 ms in that separate unthrottled session. Those values are not comparable to simulated Lighthouse results and are not evidence of field Core Web Vitals passing. No second animation patch was justified. The LCP goal remains unmet in the lab baseline and needs separate performance investigation; CrUX was not collected.

Raw Lighthouse reports are preserved locally in ignored `output/lighthouse/`. Their SHA256 hashes, settings, scores, failures, and metric values are in `followup-performance-2026-10-25.json`. Local follow-up checks ran accessibility/SEO only: Home, Contact and Overland Park each scored 100/100 with no contrast failures. No production after-run or performance-score gain is claimed.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed; generated 73 static entries, including system routes. Rebuilt after the final source edit.
- `git diff --check`: passed.
- Production-mode local server: `node_modules/.bin/next start -p 3217`.
- All 60 sitemap URLs returned 200 with one H1 and the expected production canonical.
- Chrome mobile 390x844 and desktop 1440x1000: Home, Contact, Overland Park and all five expanded services; 16 checks, no page errors or horizontal overflow, heading opacity 1.
- All newly attached guide destinations returned 200. Each expanded service rendered its three planning sections and at least two resources.
- Empty quote submission displayed six invalid fields and made zero lead requests. No valid lead, upload or email was submitted, and delivery/storage behavior is not newly verified.
- Screenshots preserved in ignored `output/playwright/`. The Playwright skill's wrapper failed because the installed package did not expose `playwright-cli`; checks used the already-installed Playwright library with Chrome. A visual-check selector was narrowed to the header after matching both header/footer wordmarks; this was a verification script issue, not an application failure.
- React checklist: no added hooks, effects, client boundaries, network waterfalls, list-key changes, or client data fetching. Existing form behavior and tracking remain unchanged.

## Remaining work and dependencies

1. **Owner facts:** current listing name, address visibility and old phone ownership before correcting BBB/BuilderMarket or deciding BBB `sameAs`; verify existing experience/team/project-count claims. Nothing was asserted or removed based on an assumption.
2. **Authentic content:** real local job stories, permitted photos, attributable city reviews, neighborhoods and service notes before rewriting the 19 templated city pages or adding Mission Hills/Brookside/Waldo pages. The five service pages now have useful general planning depth, but owner-specific process, equipment, products, pricing and project proof remain incomplete. No padding to a 1,000-word quota or new case studies.
3. **Service decisions:** confirm distinct positioning and actual scope before adding screen-and-recoat or separate sanding pages. Existing service routes and strong stairs rankings should be preserved.
4. **External actions:** review requests/replies, GBP categories/photos/posts, citation claims/corrections, supplier/association/chamber listings, partnerships and local link outreach. No messages or external account changes were made.
5. **Private measurement/access:** GSC query/page data before broad city-title changes; request About recrawl with access; GA4/GBP Insights for actual leads and calls. The supplied SE Ranking snapshot is historical provider data, not a fresh ranking test or proof of cannibalization.
6. **Performance:** further investigate simulated heading render delay and obtain CrUX/real-user data. The fresh measurements close the missing lab-baseline task, not the LCP target. Changes to analytics/consent are outside this scope.
7. **Publication:** this new follow-up has not been published. Existing first-batch deployment evidence is retained in the Downloads project's receipt; fresh Netlify API verification requires authentication. No deployment or account-access change was attempted.
