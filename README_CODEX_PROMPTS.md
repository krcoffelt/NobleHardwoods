# Codex Prompts for Noble Hardwoods

Use these prompts after adding the markdown files to the project root.

## Initial Setup Prompt

```txt
Read AGENTS.md, NOBLE_BUILD_PLAN.md, SEO_KEYWORDS.md, and CONTENT_MAP.md.

Build the first version of the Noble Hardwoods website using Next.js App Router, TypeScript, Tailwind CSS, Supabase, and Resend.

Start with:
1. Global layout, header, footer, and mobile sticky CTA
2. Homepage
3. Contact/quote form page
4. Reusable service page template
5. Initial service pages for refinishing, installation, repair, dustless sanding, stairs, and custom floors
6. Supabase lead submission function
7. Resend customer confirmation and internal notification emails
8. SEO metadata for all initial pages

Use the existing noblehardwoods.co design direction from the build plan. Prioritize speed, mobile usability, local SEO, and lead conversion.

After building, run lint/build and summarize what was completed, what files changed, and what still needs to be done.
```

## Phase 1 Prompt

```txt
Build the foundation from the build plan: layout, navigation, footer, homepage, global styles, mobile sticky CTA, and quote CTA components. Do not build every page yet. Run lint/build when done.
```

## Phase 2 Prompt

```txt
Build the quote form system using Supabase and Resend. Add form validation, photo upload support, customer confirmation email, internal lead notification email, and a thank-you page. Use env variables and update .env.example.
```

## Phase 3 Prompt

```txt
Build the six core SEO service pages from CONTENT_MAP.md: refinishing, installation, repair, dustless sanding, stairs, and custom floors. Add metadata, FAQs, review blocks, internal links, and CTA sections.
```

## Phase 4 Prompt

```txt
Build the service area page template and create pages for Overland Park, Leawood, Lenexa, Prairie Village, Mission Hills, Fairway, Westwood, Brookside, Waldo, Shawnee, Olathe, and Briarcliff.
```

## Phase 5 Prompt

```txt
Build the projects system and add project case study pages using the Noble Hardwoods project structure in NOBLE_BUILD_PLAN.md. Include city, service type, square footage, gallery, review, related services, and CTA.
```

## Phase 6 Prompt

```txt
Add technical SEO improvements: LocalBusiness schema, Service schema, FAQ schema, BreadcrumbList schema, sitemap, robots.txt, canonical URLs, Open Graph metadata, and optimized image alt text.
```

## Phase 7 Prompt

```txt
Improve performance and conversion tracking. Optimize images, reduce unused JS, verify mobile sticky CTA behavior, add GA4/GTM events for form submissions, phone clicks, email clicks, CTA clicks, and thank-you page visits.
```
