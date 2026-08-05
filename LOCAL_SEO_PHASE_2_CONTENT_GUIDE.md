# Noble Hardwoods Local SEO — Phase 2 Content System Guide

Implementation date: August 4, 2026

## Purpose

Phase 2 converts the shared service-area template into an evidence-aware content system. A city can now receive unique projects, service copy, a verified gallery, a city-attributed review, custom FAQs, a hero image, and curated nearby links without duplicating route code.

Empty evidence fields intentionally render nothing. This prevents an unverified photograph, review, or project claim from being presented as local proof.

## Source-of-truth files

- Location data and evidence fields: `src/data/serviceAreaPages.ts`
- Location route composition and schema: `src/app/service-areas/[locationSlug]/page.tsx`
- Existing project records: `src/data/site.ts`
- Project route: `src/app/projects/[projectSlug]/page.tsx`

## Location content fields

Each generated `ServiceAreaPage` supports:

| Field | Purpose | Evidence rule |
|---|---|---|
| `projectCount` | Minimum completed-project trust signal | Must match the approved report |
| `projectCountAsOf` | Count recency displayed in the hero | Update whenever counts change |
| `localContext` | Short city-specific introduction | Must be reviewed against actual experience |
| `nearbySlugs` | Geographic internal links | Use actual nearby markets, not array order |
| `featuredProjectSlugs` | Links to documented local case studies | Project record must contain the same city/state |
| `serviceContent` | City-specific service headings and copy | Use real local work patterns or crew insight |
| `gallery` | Verified local photographs | Every file must be mapped to the city/project |
| `localReview` | City-attributed testimonial | Reviewer location and source must be verified |
| `faqs` | City-specific homeowner questions | Answers must provide useful local or service context |
| `heroImage` | Verified image override | Alt text must describe the visible image accurately |

## Evidence-aware components

### `LocationProjectSpotlight`

Displays documented project titles, dates, summaries, scope, and links. It intentionally does not inherit a project image. Verified photographs belong in the explicit gallery field.

### `LocationServiceSections`

Displays the six Noble services with location-aware headings. Phase 3 can replace the default descriptions using `serviceContent` without changing the component.

### `LocationGallery`

Renders only when the location has verified gallery entries. Images use `next/image`, responsive sizing, factual alt text, and optional project links.

### `LocationTestimonial`

Renders only when `localReview` exists. Its heading identifies the review as being from that city, so city verification is mandatory.

### `NearbyServiceAreas`

Uses curated city relationships from `nearbySlugsBySlug`. It replaces the former state-first selection logic.

## Adding a documented project

1. Confirm the project record’s `city` exactly matches the service-area city/state.
2. Add the project slug to the location’s `featuredProjectSlugs` entry in `serviceAreaContentBySlug`.
3. Verify the project page links back to the matching service-area page.
4. Do not add photographs to the local gallery until their provenance is confirmed.

Example:

```ts
"hardwood-flooring-overland-park-ks": {
  featuredProjectSlugs: [
    "floor-installation-and-refinishing-in-overland-park-ks"
  ]
}
```

## Adding verified gallery images

```ts
"hardwood-flooring-overland-park-ks": {
  gallery: [
    {
      src: "/images/projects/example.webp",
      alt: "New white oak flooring across an open kitchen and dining room",
      caption: "White oak installation and finishing",
      projectHref: "/projects/example-project"
    }
  ]
}
```

Alt text should describe the photograph. The city is unnecessary in alt text unless the location itself is visibly relevant.

## Adding a verified local review

```ts
"hardwood-flooring-overland-park-ks": {
  localReview: {
    name: "Customer name",
    quote: "Verified review text",
    detail: "Hardwood refinishing in Overland Park",
    sourceUrl: "https://review-source.example/review"
  }
}
```

Required confirmation:

- Reviewer identity or approved public display name
- City
- Relevant service or project
- Review source
- Permission or public-source status

## Adding unique service content

```ts
"hardwood-flooring-overland-park-ks": {
  serviceContent: [
    {
      serviceHref: "/hardwood-floor-refinishing-kansas-city",
      heading: "Hardwood floor refinishing in Overland Park",
      text: "Copy based on documented Overland Park floor conditions and Noble project experience."
    }
  ]
}
```

Only override services where Noble has something useful and specific to say. Do not add city names to generic copy solely for keyword repetition.

## Schema model

Noble Hardwoods now uses one stable schema identity:

```text
https://www.noblehardwoods.co/#business
```

Location pages describe a `Service` with:

- A stable page-level service ID
- One `areaServed` city/state
- Noble’s shared provider ID
- The accurate hero image
- Links to documented project entities through `subjectOf`

Project pages link back to their matching service-area `Service` when one exists.

Do not represent each service area as a separate physical Noble business location.

## Nearby-area maintenance

Every current location has four explicitly curated nearby slugs. When adding a new location:

1. Add its nearby list.
2. Add it to appropriate nearby lists for existing cities.
3. Prefer practical homeowner navigation over strict state boundaries.
4. Confirm neighborhood pages point to their parent Kansas City market where appropriate.

## Phase 3 handoff checklist

Before a Tier 1 page is considered fully enriched:

- [ ] Project count terminology confirmed by operations
- [ ] At least one attributable local project
- [ ] Project problem, solution, and outcome documented
- [ ] Verified city photography available
- [ ] City-attributed review available when possible
- [ ] Service copy reviewed by someone familiar with the work
- [ ] Custom FAQs answer real homeowner questions
- [ ] Project, service, and nearby-city links verified
- [ ] Metadata and schema validated
- [ ] Mobile and desktop visual QA completed
