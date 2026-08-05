# Noble Hardwoods Local SEO — Phase 3 Implementation

Implementation date: August 4, 2026

## Outcome

Phase 3 expands the eight Tier 1 service-area pages into distinct, useful local landing pages. Each priority market now has its own search snippet, hero message, local overview, service guidance, and FAQs. Verified completed-project counts remain the primary city-level trust signal.

## Priority markets completed

| Market | Verified minimum | Documented case study |
|---|---:|---|
| Kansas City, MO | 112+ | Not yet mapped |
| Overland Park, KS | 34+ | Floor installation and refinishing |
| Lee's Summit, MO | 24+ | Not yet mapped |
| Prairie Village, KS | 18+ | Not yet mapped |
| Leawood, KS | 17+ | Not yet mapped |
| Shawnee, KS | 13+ | Not yet mapped |
| Olathe, KS | 12+ | Not yet mapped |
| Lenexa, KS | 6+ | Stage and steps installation |

The project counts come from the closed-deals-by-city report supplied by Noble Hardwoods on August 4, 2026. The plus sign presents each count as a conservative minimum.

## Content added to every Tier 1 page

- Unique SEO title and meta description
- City-specific hero message
- Verified completed-project count with an August 2026 date note
- Unique local experience heading
- Two-paragraph market overview
- City-specific service-section introduction
- Four locally framed service descriptions
- Four custom homeowner FAQs
- Four curated nearby service-area links
- Shared Noble business schema identity and city-level Service schema

## Evidence rules preserved

- Only Overland Park and Lenexa display a local project spotlight because those are the only Tier 1 cities with matching project records in the current repository.
- No Tier 1 page displays a city-attributed testimonial because no supplied review has verified city attribution.
- No Tier 1 page displays a local photo gallery because the available photographs have not been mapped to a city or project record.
- Default hero images use factual visual alt text and do not claim to depict a specific city.
- Each location is represented as a service area, not as a separate Noble business address.

## Verification completed

- ESLint passes.
- Next.js production build passes and statically generates all 27 service-area routes.
- React review found no client-state, hydration, accessibility, or bundle-boundary issues in the edited route/components.
- Desktop browser QA completed for Kansas City and Overland Park.
- Mobile browser QA completed for Lenexa.
- Rendered DOM checks confirmed counts, unique local headings, service copy, FAQs, and the two attributable case studies.

## Inputs still needed for a complete proof layer

Phase 3 content is production-ready, but the following first-party evidence would make the Tier 1 pages materially stronger:

1. At least one attributable project record for Kansas City, Lee's Summit, Prairie Village, Leawood, Shawnee, and Olathe.
2. Three to six verified photos for each priority city, mapped to a project address or approved project record.
3. One public or permissioned customer review with verified city attribution for each priority market.
4. Crew review of the local service narratives to add any recurring floor types, project constraints, or homeowner questions Noble sees in each city.

These additions can be made through `src/data/serviceAreaPages.ts` without changing the route or component structure created in Phase 2.
