# Noble Hardwoods SEO implementation — October 26, 2026

## Sources and isolation

- [x] Read the complete October 24 original audit and repository AGENTS.md, NOBLE_BUILD_PLAN.md, SEO_KEYWORDS.md and CONTENT_MAP.md; inspected the local SEO blog skill and site contract.
- [x] Save original audit here and at `/Users/kylecoffelt/Downloads/SEO-Audits-2026-10-24/noblehardwoods-seo-audit-2026-10-24.md`. SHA256: `d924e144401a662844bfc5ad523aeb60b098be72009d7d7747921c975dcbebc5` (20,721 bytes). Parent text HTML entities were decoded only after proving the result matched the authoritative hash.
- [x] Save the readable October 25 SE Ranking companion and project baseline alongside this checklist. Raw JSON download failed; the readable provider snapshot is the baseline, not a fresh ranking check.
- [x] Verify live remote main `0f80119ec1c00d87717d03cc4549dc3d3bbc198e` before editing; use an isolated local clone. Original Downloads checkout has pre-existing modifications in content, package/email files and other paths. None were copied into this patch, staged, discarded or published.

## Reproduced and implemented

- [x] CSS `hero-copy-in` began at opacity 0. Remove hidden-start opacity; preserve transform motion, reduced-motion and existing mobile exclusions. Do not claim measured LCP improvement without a new lab run.
- [x] Original orange `#ef5f3d` failed normal-text contrast on cream. Use `#bd4023` (5.27:1 on cream, 5.36:1 on white, 4.88:1 on mist) with a darker hover. Breadcrumb text opacity increased from 56% to 72%. Dark footer plus symbols remain above 3:1 as graphical controls.
- [x] Add a descriptive homepage stairs link to the existing stairs page and a contextual Leawood refinishing link from the area hub. Preserve existing ranked routes.
- [x] Replace homepage generic About link; allow the longer label to stack on mobile.
- [x] Shorten four metadata descriptions while retaining service and Kansas City intent.
- [x] Replace broken NWFA selecting-your-floors references with its official Types of Wood Floors page; replace stale Bona PDF with current US Traffic HD technical sheet. Official replacement resources resolve successfully. These references do not assert Noble uses a specific finish.
- [x] Add wordmark alt text; retain decorative tiger/icon empty alt and the existing accessible home-link name.
- [x] Restore verbatim Adam, Eric and Jordan review excerpts from CONTENT_MAP.md, including Adam's original Josiah wording in the cost article. No invented reviews or changing reviewer attribution.
- [x] Remove the agency Website Partnership section from contractor About content: it contained uncited conversion/revenue claims and the agency testimonial typo. Preserve the existing agency footer credit.
- [x] Preserve analytics, consent, quote handling, phone numbers, opening hours, indexable routes, and Zera behavior.

## Verification

- [x] `npm run lint` passed.
- [x] `npm run build` passed, generating 73 static build entries including internal/system routes.
- [x] `git diff --check` passed.
- [x] Crawl all 60 local production sitemap URLs: all 200, one H1 each, canonical present. Evidence: `verification-2026-10-26.json`.
- [x] Chrome desktop and 390×844 mobile inspection: homepage readable, hero opacity 1, no horizontal overflow. Contact, Overland Park, area hub, stairs and About: one H1, expected canonical, no mobile overflow. Leawood contextual link and absence of agency metric copy verified in rendered DOM.
- [ ] Push one tested commit to main; record exact live remote SHA and CI/Netlify outcome in the separate deployment receipt after pushing.

## Deferred for Kyle / future verified content

- [ ] Resolve BBB and BuilderMarket phone/address conflicts; no listings or schema identity links were changed without current owner confirmation.
- [ ] Review outreach, GBP categories/posts/photos, citation claims, partnerships and link building are external work and were not performed.
- [ ] Obtain real job stories/photos, city-specific reviews, verified neighborhoods and service notes before replacing the 19 templated city pages or creating new city/case-study pages. Existing project counts were preserved, not newly verified.
- [ ] Expand service pages with verified process, pricing, product and project details; no padding to meet a word quota and no unsupported service/credential promises.
- [ ] Review city title strategy against actual GSC data before broad changes to pages already ranking. The provider's historical homepage landing URLs alone do not establish cannibalization.
- [ ] Confirm GSC/GA4/GBP Insights data and request recrawls with appropriate access. No traffic, conversion, review or rank improvement is claimed by this implementation.
- [ ] New Lighthouse/CrUX measurements remain separate follow-up; original audit's single-run lab scores are not field data.
