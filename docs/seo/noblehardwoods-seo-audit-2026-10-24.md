# SEO Audit: Noble Hardwoods (noblehardwoods.co)
*Prepared for Hometown Marketing Agency. Data collected Saturday, Oct 24, 2026 (America/Chicago, CT). Read-only audit: no logins, no form submissions, no outreach.*

---

## 1. Conclusion first

**The website is technically solid. The real problem is local visibility.** Noble has a clean, fast, well-structured site with good schema and strong blog content. But in the Google results I captured from Kansas City, **Noble did not appear in the local 3-pack or the Maps results for any of the 8 core non-brand searches I checked.** Those searches included "hardwood floor refinishing kansas city", "hardwood floor installation kansas city" and "hardwood floor refinishing near me".

The businesses that do win those packs have **57 to 355 Google reviews**. Noble has **26**. Noble's **BBB and BuilderMarket listings also show a different phone number and a street address** that don't match the site or the Google Business Profile.

Organically, Noble showed up on page 1 for only 2 of the 10 non-brand queries:
- "hardwood stairs kansas city", where the **homepage** ranked, not the stairs page
- "hardwood floor refinishing leawood", where the **/service-areas hub** ranked, not the Leawood page

**What will move the needle most:**
1. More Google reviews, plus a consistent name, address and phone everywhere.
2. Rewriting the 19 copy-paste city pages and fleshing out the thin service pages.
3. Earning local links.

---

## 2. Scorecard (1–10)

| Area | Score | One-line reason |
|---|---|---|
| **Technical** | **8** | All 60 sitemap URLs return 200 and are indexable with self-canonicals, HTTPS is enforced and the schema is rich. Deductions: mobile lab LCP is 3.2–6.0s on inner pages, and 2 outbound links are broken. |
| **On-page** | **7** | Every page has a unique title and exactly one H1, and URLs are keyword-targeted. Deductions: 4 meta descriptions are too long, city-page title formats are inconsistent, and the wrong pages rank for stairs and Leawood. |
| **Content** | **6** | The 13 blog posts are excellent (1,325–2,841 words each). But 19 of 27 city pages are largely templated, 5 of 6 service pages have only 453–506 words, and there are only 4 project case studies. |
| **Local** | **4** | GBP is healthy (5.0★, 26 reviews, owner replies, a post on Sep 3, 2026), yet Noble is absent from every local pack checked. Competitors have 2–14× the reviews, and BBB and BuilderMarket show a conflicting phone and address. |
| **Authority** | **3** | Free sources found only a handful of referring sites: BBB, BuilderMarket and the Hometown agency site. Confidence is low because no Ahrefs, Moz or Semrush data was available. |

---

## 3. Confirmed business details

| Field | Value | Source |
|---|---|---|
| Name | Noble Hardwoods (GBP: "Noble Hardwoods LLC"). It is "A Zera Company", i.e. Zera Services LLC. | Site footer and contact page; Google Maps (rendered) |
| Owner | Clayton Rookstool | BBB profile ("Business Management"); site |
| Phone | **(816) 312-9131** | Site (tel links), schema, GBP |
| Email | info@noblehardwoods.co | Site |
| Hours | Mon–Fri, 7 AM–5 PM | Site and GBP |
| Address | **None published.** It is a service-area business; schema geo is 39.058078, -94.562411. | Site and schema |
| GBP | 5.0★, **26 reviews**, primary category "Wood floor installation service", 16 photos, last post Sep 3, 2026 | Google Maps, rendered Oct 24, 2026 |
| Services | Refinishing, installation, repair, dustless sanding, stairs & railings, custom floors | Site |
| Claims on site | "15+ years", "16-person team", "112+ completed projects" in KC, MO | Site home and about pages (not independently verified) |
| BBB | Not accredited, "Not Rated", file opened 11/8/2019, business started 5/15/2019. **Phone (816) 812-5260, address 30 W. Pershing St., Kansas City, MO 64141.** | bbb.org profile |

---

## 4. Biggest problems, with evidence

### Problem 1: Noble is invisible in the local pack
- **Evidence:** I rendered Google from the box (geolocated to Kansas City, MO) on Oct 24, 2026. Raw pages are in `serps/`.
  - Noble was **not in the local pack or Maps results** for refinishing KC, installation KC, repair KC, dustless KC, "near me", refinishing Overland Park, flooring Overland Park and refinishing Lee's Summit.
  - Pack winners and their review counts:

    | Competitor | Rating | Reviews |
    |---|---|---|
    | Kimminau Wood Floors | 4.9 | 355 |
    | KC Flooring Experts | 5.0 | 224 |
    | Totta Hardwoods | 4.8 | 221 |
    | SVB Wood Floors | 4.8 | 178 |
    | Precision Hardwood Floors | 5.0 | 157 |
    | RC Hardwood Flooring | 5.0 | 149 |
    | JRK Flooring | 4.9 | 143 |
    | DLV Hardwood Flooring | 5.0 | 104 |
    | Heritage Hardwood Floor Co. | 4.9 | 57 |
    | Midwest Flooring Co | 4.8 | 57 |

  - **Noble has 26.**
- **Why it matters:** Most local leads come from the 3-pack. Review count and velocity, NAP consistency and proximity are the main levers. As a service-area business without a public address, Noble also can't lean on proximity, so reviews and relevance matter even more.
- *Caveat:* this is one unpersonalized snapshot from one location. Rankings vary by searcher location.

### Problem 2: NAP conflict on BBB and BuilderMarket
- **Evidence:**
  - The BBB profile and thebuildermarket.com both list **(816) 812-5260** and **30 W. Pershing St., Kansas City, MO 64141**.
  - The site, schema and GBP all use **(816) 312-9131** and no address.
  - The site's own schema `sameAs` links to that BBB profile.
- **Why it matters:** Conflicting phone and address data weakens Google's confidence in the entity. The BBB link in schema actively points Google at the wrong number.
- *Not verified:* I couldn't confirm Yelp, Houzz, Angi, Facebook or Nextdoor listings (see section 8).

### Problem 3: 19 templated city pages, and the wrong pages ranking
- **Evidence:** `city_page_similarity.txt` compares 5-word shingles across the 27 city pages.
  - **170 of 351 page pairs are ≥50% identical.** The worst pair is Belton vs Peculiar at 64%.
  - The 8 big-city pages (KC MO, Overland Park, Prairie Village, Shawnee, Lenexa, Lee's Summit, Olathe, Leawood) are genuinely unique, at about 9–11% overlap.
  - The other 19 (Roeland Park, Mission, Westwood, Fairway, Grandview, Raytown, Gladstone, North KC, Independence, Lawrence, Basehor, Liberty, Parkville, Riverside, Belton, KC KS, Kearney, Peculiar, Weatherby Lake) are about 39–43% similar on average.
  - For "hardwood floor refinishing leawood", Google ranked **/service-areas**, not `/service-areas/hardwood-flooring-leawood-ks`.
  - For "hardwood stairs kansas city", Google ranked the **homepage**, not `/hardwood-stairs-railings-kansas-city`.
  - Mission Hills, Brookside and Waldo are named in the schema `areaServed` and the footer, but **have no pages**.
  - City title formats are mixed: "Hardwood Floor Refinishing Overland Park KS | Noble" vs "Hardwood Flooring Roeland Park KS | Noble Hardwoods".

### Problem 4: Thin service pages and few proof-of-work pages
- **Evidence:** from `crawl_pages.csv`, main-content word counts:
  - The refinishing page has **1,114** words.
  - Installation, repair, dustless, stairs and custom have only **453–506** each.
  - There are only **4 project case studies** at 330–345 words each, and the /projects hub has 212 words. Yet the homepage claims 112+ KC projects, 34+ in Overland Park and 24+ in Lee's Summit.
- **Competitor contrast:**
  - SVB Wood Floors has **606** sitemap URLs, about 40 city-style URLs and about 227 blog/news URLs.
  - JRK Flooring has **91** URLs, 21 city pages and separate cost/FAQ pages.
  - Noble has **60**. See `competitors/competitors.csv`.

### Problem 5: Mobile speed and very weak backlink signals
- **Speed evidence:** Lighthouse 12, mobile, single lab runs (`lighthouse/`):

  | Page | Perf | LCP |
  |---|---|---|
  | Home | 89 | 3.5s |
  | Refinishing | 75 | 3.2s (TBT 660ms) |
  | Overland Park | 64 | **6.0s** |
  | Contact | 73 | **5.6s** |

  - On the city and contact pages, the LCP element is the hero H1. A CSS animation (`hero-copy-in .9s … both`) starts it at `opacity:0`, which pushes LCP back.
  - Desktop home scored 100.
  - Other Lighthouse flags:
    - Contrast failures: orange #ef5f3d on #fffdf8 at 3.24:1, and the breadcrumb #7c7976 at 3.94:1.
    - About 78 KiB of unused JS.
- **Backlink evidence:** Free checks found these referring sources only:
  - bbb.org (wrong phone number)
  - thebuildermarket.com (wrong phone, 0 reviews)
  - hometownkc.agency, whose case-study page links to https://www.noblehardwoods.co/ and whose homepage mentions Noble
  - Instagram (profile behind a login wall)

  No local press, supplier, association or chamber links turned up. **This is a very incomplete picture.** See section 8.

### Smaller issues (fix when convenient)
- **Broken outbound links:**
  - The bona.com TDS PDF (404) on `/blog/how-long-does-hardwood-floor-refinishing-take`.
  - woodfloors.org/selecting-your-floors/ (404) on 2 blog posts.
- **Meta descriptions over about 160 characters:**
  - Refinishing (184)
  - Installation (169)
  - Repair (169)
  - Home (166)

  Project-page metas are short (76–98).
- **Homepage link text:** a "Learn more" link to /about. This is the only thing keeping home SEO at 92 instead of 100 in Lighthouse.
- **/about page:**
  - It has an agency "Website Partnership" block with uncited claims ("quote submissions increased by 65%", "organic traffic increased by more than 50%"). Customers may find this odd on a contractor's About page, and the numbers aren't sourced.
  - It also has a testimonial typo: "profitablity".
  - Worth a gentle chat with the client.
- **Paraphrased testimonial:** The Adam Chiarelli quote on the homepage is reworded from his Google review ("Josiah was professional" became "The Noble team was professional"). It's safer to quote reviews verbatim or label them as excerpts.
- **Stale index copy:** The search index still shows older /about copy naming Josiah Smith and Ben Clinton as co-owners. Request a recrawl in Search Console after updates.
- **Brand confusion:** noblehardwoodfloors.com, a different business, appears on the "noble hardwoods" brand SERP. Noble is running brand ads, which helps.
- **Zera page:** `/zera-services` is noindex but linked sitewide, with a different phone, (816) 882-0101. That's fine if intentional; just make sure that number never bleeds into Noble's citations.
- **Images:** About 4 images per page have empty alt text (logo, wordmark and icons). That's acceptable for decorative images. Give the logo `alt="Noble Hardwoods"`.

---

## 5. What's working (keep it)
- Clean robots.txt and sitemap. All 60 sitemap pages return 200, canonicals are correct, there are no duplicate titles or metas, and no internal links are broken.
- Rich schema:
  - HomeAndConstructionBusiness and FAQPage on home.
  - Service, Breadcrumb and FAQ on service and city pages.
  - BlogPosting on posts.
- Strong, locally flavoured blog posts. Examples include the 2026 cost guides for refinishing and installation, white vs red oak, and screen & recoat vs refinish.
- Desktop performance 100; CLS 0 everywhere.
- The GBP is active, with recent posts, owner replies and accurate hours, phone and site.
- The 8 core city pages are genuinely unique.

---

## 6. Competitor comparison
Raw data is in `competitors/competitors.csv` and `competitors/competitors.json`. Review counts come from the Google local packs captured Oct 24, 2026.

| Business | GBP ★ (reviews) | Sitemap URLs | City pages | Blog-type URLs | Notes |
|---|---|---|---|---|---|
| **Noble Hardwoods** | 5.0 (26) | 60 | 27 | 13 | Best schema of the group; thin service pages |
| SVB Wood Floors | 4.8 (178) | 606 | ~40 | ~227 | On page 1 (ads or organic) for 8 of the 10 non-brand queries; huge content footprint |
| JRK Flooring | 4.9 (143) | 91 | 21 | cost & FAQ pages | "4.9 Stars" in title tag; has Mission Hills and Shawnee Mission pages |
| KC Flooring Experts | 5.0 (224) | 13 | 9 | 0 | Small site, but wins packs on reviews |
| Precision Hardwood Floors | 5.0 (157) | 17 | 4 | 0 | Leawood-based; small site, strong reviews |
| Totta Hardwoods | 4.8 (221) | n/a | n/a | n/a | Bot challenge blocked analysis |
| Rippn' Finish (organic) | — | 440* | many | 6 | *Includes image URLs; appears often in organic results |

**Takeaway:** Pack winners like KC Flooring Experts and Precision have *smaller* sites than Noble but **6–9× the reviews**. Organic winners like SVB and Rippn' Finish win on sheer volume of local and project content. Noble needs both reviews and depth.

---

## 7. Prioritized plan

*Target keywords below are suggestions based on what's currently ranking. No search-volume data was available (no keyword tool access).*

### This week
1. **Fix BBB and BuilderMarket NAP.**
   - Have the client claim both listings and update them to Noble Hardwoods LLC, (816) 312-9131, noblehardwoods.co.
   - Remove or hide the 30 W. Pershing St. address if it's no longer valid.
   - Until BBB is fixed, consider removing it from schema `sameAs`.
2. **Start a review engine.**
   - Text or email the GBP review link (g.page/r/CVDjg6Cs_lh_EAE/review) to every customer from the last 12 months.
   - Goal: **26 → 50 reviews in 60 days**, then 4–6 per month. Ask customers to mention the service and city, e.g. "refinished our red oak in Prairie Village".
3. **Fix the LCP animation.**
   - On the `.hero-enter-copy` H1, animate transform only, not opacity. Alternatively, start at `opacity:1`, or skip the animation on mobile.
   - Then re-run Lighthouse on `/service-areas/hardwood-flooring-overland-park-ks` and `/contact`. Goal: mobile LCP under 2.5s.
4. **Internal-link fixes.**
   - On the homepage stairs card, link with anchor text "hardwood stairs and railings in Kansas City" to `/hardwood-stairs-railings-kansas-city`.
   - From `/service-areas`, link with anchor text "hardwood floor refinishing in Leawood" to `/service-areas/hardwood-flooring-leawood-ks`.
   - Change the homepage "Learn more" link to "About Noble Hardwoods".
5. **Quick on-page tidy-ups.**
   - Trim the meta descriptions on `/`, `/hardwood-floor-refinishing-kansas-city`, `/hardwood-floor-installation-kansas-city` and `/hardwood-floor-repair-kansas-city` to 150–160 characters.
   - Fix the 3 broken outbound links.
   - Fix the "profitablity" typo.
   - Give the logo alt text.
6. **GBP.**
   - Check the secondary categories and add any of "Floor refinishing service", "Flooring contractor" and "Wood floor refinishing service" that are missing.
   - Upload 10+ fresh job photos (currently 16).
   - Post weekly.

### Next 30 days
1. **Standardize city titles** to the format *"Hardwood Floor Refinishing & Installation {City} {ST} | Noble"*.
   - Example: `/service-areas/hardwood-flooring-roeland-park-ks` becomes "Hardwood Floor Refinishing & Installation Roeland Park KS | Noble".
2. **Rewrite the 19 templated city pages, starting where Noble has the most jobs.**
   - Order: Roeland Park (12+ projects), Mission (9+), Westwood (7+), then Lawrence, Independence, Liberty, Gladstone, KC KS, Raytown, Grandview, Fairway, Parkville, Riverside, North KC, Belton, Peculiar, Basehor, Kearney, Weatherby Lake.
   - Each page needs:
     - 2–3 real local job photos with a short story
     - Neighbourhoods and housing stock (e.g. 1940s red oak in Roeland Park)
     - A local review quote
     - Driving and service notes
     - A unique FAQ
   - Target keywords: "hardwood floor refinishing {city}", "hardwood floor installation {city} {st}".
3. **Expand the 5 thin service pages to about 1,000+ words,** using the refinishing page as the model. Each should include process, pricing ranges (linking to the 2026 cost posts), species and finish options, FAQs, and project photos.

   | URL | Target keywords |
   |---|---|
   | `/hardwood-floor-installation-kansas-city` | hardwood floor installation kansas city; hardwood flooring installers kansas city |
   | `/hardwood-floor-repair-kansas-city` | hardwood floor repair kansas city; water damaged hardwood floor repair kc |
   | `/dustless-hardwood-floor-refinishing-kansas-city` | dustless hardwood floor refinishing kansas city |
   | `/hardwood-stairs-railings-kansas-city` | hardwood stairs kansas city; carpet to hardwood stairs kansas city |
   | `/custom-hardwood-floors-kansas-city` | custom hardwood floors kansas city; herringbone floor installation kansas city |

4. **Build or claim core citations** with the exact NAP:
   - Yelp, Houzz, Angi, Nextdoor, Facebook, Apple Business Connect, Bing Places, Thumbtack.
   - Thumbtack, Yelp, Angi and Houzz all appear on page 1 for the target queries.
5. **Publish 6–8 new project case studies** at `/projects/...`, focusing on Overland Park, Lee's Summit, Prairie Village and Leawood jobs. Example: "Red Oak Refinishing in Prairie Village, KS".

### Next 90 days
1. **New pages:**

   | URL | Target keyword |
   |---|---|
   | `/service-areas/hardwood-flooring-mission-hills-ks` | hardwood floor refinishing mission hills ks |
   | `/service-areas/hardwood-flooring-brookside-kansas-city` | hardwood floor refinishing brookside |
   | `/service-areas/hardwood-flooring-waldo-kansas-city` | hardwood floors waldo kc |
   | `/screen-and-recoat-kansas-city` (service page, linked from the existing blog post) | screen and recoat hardwood floors kansas city |

   - Also consider `/hardwood-floor-sanding-kansas-city` if the client wants that service positioned separately.
2. **Local link building, aiming for 10–15 real local links:**
   - Supplier and manufacturer contractor locators (DuraSeal, Bona, local lumber yards)
   - NWFA membership directory
   - Chambers (Overland Park, Lee's Summit, KC)
   - Realtor and stager partnerships (pitch the "refinish before selling" post)
   - Neighbourhood association sponsorships
   - Local home-show or parade-of-homes features
3. **Reviews:** keep 4–6 per month and reply to all. Re-check the local pack monthly for the 8 core queries.
4. **Measurement:**
   - Connect Search Console and GA4 data to the next audit. I had no access, so impressions, clicks and positions were not measured.
   - Track calls from GBP and form submissions.

---

## 8. Blocked tools and missing data (please read)
- **Google PageSpeed Insights API:** returned HTTP 429 (daily quota exceeded) for mobile and desktop (`psi_home_*.json`).
  - I used local Lighthouse 12 instead. These are single lab runs on 4 pages, so treat them as indicative only.
  - **No CrUX field data (real-user Core Web Vitals) was available.**
- **Google Search:** I rendered 11 queries and 3 Maps searches successfully. Afterwards Google started serving captchas, so the later citation and backlink queries (`citations/g_*.html`) returned no results.
  - Rankings are **one unpersonalized page-1 snapshot** from KC, MO on Oct 24, 2026. There is no rank tracking over time.
- **DuckDuckGo:** bot challenge. **Bing (curl):** ignored the quoted queries and returned irrelevant results.
- **Citations not verifiable:**
  - Yelp returned 403.
  - Angi returned 403 (Cloudflare).
  - Houzz served a "Client Challenge".
  - Facebook and Instagram require login.
  - The Nextdoor guess URL returned 404.
  - So I **can't confirm whether Noble has Yelp, Houzz, Angi, Facebook or Nextdoor listings**, or what NAP they show. Web search mentioned a Facebook page, but I couldn't open it.
- **Backlinks:** no Ahrefs, Moz, Semrush or Majestic access. The authority score is based only on mentions found by hand (BBB, BuilderMarket, hometownkc.agency) and **is likely incomplete.** There is no Domain Rating, Domain Authority or referring-domain count.
- **No Google Search Console, GA4 or GBP Insights access:** traffic, impressions, calls and direction requests are unknown.
- **Totta Hardwoods' website** blocked analysis with a robot challenge.
- **Not checked:** the http→https redirect chain (port 80 timed out from the box). https://noblehardwoods.co → 301 → https://www.noblehardwoods.co/ is verified.
- **No keyword volume data:** target keywords are informed judgment, not volume-ranked.

---

## 9. Files in this folder
- `crawl_pages.csv`, `crawl_links.csv`, `pages/`: full crawl (61 pages, 92 external links)
- `city_page_similarity.txt`: templated-content analysis
- `lighthouse/` (JSON and `lighthouse_summary.txt`), `psi_home_*.json` (429 errors)
- `gbp_maps_rendered.*`: Google Business Profile capture
- `serps/`: rendered Google SERPs and Maps results, plus `organic_summary.txt`
- `competitors/`: competitor site data
- `citations/`: attempted citation and mention searches (mostly blocked)
- `sitemap.xml`, `sitemap_urls.txt`, `home.html`
