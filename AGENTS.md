# Noble Hardwoods Website Rebuild — Agent Instructions

Before making changes, read:

- `NOBLE_BUILD_PLAN.md`
- `SEO_KEYWORDS.md`
- `CONTENT_MAP.md`

## Project Goal

Build a fast, modern, SEO-focused lead generation website for Noble Hardwoods, a Kansas City hardwood flooring company.

The site should improve:

- Local SEO rankings
- Page speed
- Mobile usability
- Quote requests
- Phone calls
- Service-area visibility
- Project proof
- Review-driven trust

## Tech Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase for lead storage and photo uploads
- Resend for email notifications
- Static/SEO-friendly routes where possible

## Design Direction

Use `noblehardwoods.co` as the design reference.

The design should feel:

- Premium
- Warm
- Craftsman
- Clean
- Trustworthy
- Local to Kansas City

Use a palette inspired by:

- Warm white
- Cream
- Charcoal
- Natural wood brown
- Soft tan/gold accents

Avoid:

- Generic contractor templates
- Overly flashy animations
- Slow-loading video backgrounds
- Cluttered CTA sections
- Hard-to-read text over images
- Hiding contact actions on mobile

## Primary Conversion Goals

Every major page should make it easy to:

1. Submit a quote request
2. Call Noble Hardwoods
3. View project proof
4. Read reviews
5. Understand the service offered

Use a sticky mobile CTA with:

- Call Now
- Get Quote

Primary phone number:

- `(816) 312-9131`

Primary email:

- `info@noblehardwoods.co`

## SEO Requirements

Every service and city page should include:

- One clear H1
- SEO title
- Meta description
- Local Kansas City/suburb language
- Internal links
- FAQ section
- Review/testimonial section
- CTA section
- Optimized image alt text
- Schema where appropriate

## Important Keywords

Prioritize:

- hardwood floor refinishing Kansas City
- hardwood floor installation Kansas City
- hardwood floor repair Kansas City
- dustless hardwood floor refinishing Kansas City
- hardwood stairs Kansas City
- hardwood floor refinishing Overland Park KS
- hardwood floor refinishing Leawood KS
- hardwood floor refinishing Prairie Village KS

## Lead Funnel Rules

The lead funnel should support:

- Short quote form
- Optional photo upload
- Mobile call CTA
- Thank-you page
- Supabase lead storage
- Resend customer confirmation email
- Resend internal notification email
- UTM/source page capture

Lead form fields:

- First name
- Last name
- Phone
- Email
- City
- Project type
- Message
- Preferred contact method
- Optional photo upload

Project type options:

- Hardwood Floor Refinishing
- Hardwood Floor Installation
- Hardwood Floor Repair
- Dustless Sanding
- Stairs & Railings
- Custom Floor Pattern
- Not Sure Yet

## Build Rules

- Keep pages fast and mostly static.
- Use reusable components.
- Keep content easy to edit.
- Make forms accessible and mobile-friendly.
- Validate forms before submission.
- Store all leads in Supabase.
- Send customer and internal emails through Resend.
- Do not expose secret keys client-side.
- Use environment variables.
- Run lint/build before completing major tasks.
- Prioritize semantic HTML and accessibility.
- Use internal linking to support local SEO.
- Keep content natural and not keyword-stuffed.

## Suggested Components

Create reusable components for:

- Header
- Footer
- Mobile sticky CTA
- Hero
- Service cards
- CTA band
- Quote form
- Review card
- FAQ accordion
- Project card
- Service area links
- Before/after gallery
- Breadcrumbs
- Page intro
- Related services

## Completion Expectations

After each major task, summarize:

- What was built
- Files changed
- Any commands run
- Any build/lint errors
- What still needs to be done
