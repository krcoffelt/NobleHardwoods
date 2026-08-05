/**
 * Completed-project counts come from the closed-deals-by-city report supplied
 * by Noble Hardwoods on August 4, 2026. The "+" treatment in the UI presents
 * each value as a conservative minimum rather than a live counter.
 */
export type ServiceAreaPage = {
  city: string;
  state: "KS" | "MO";
  slug: string;
  href: string;
  projectCount: number;
  projectCountAsOf: string;
  localContext: string;
  heroText?: string;
  introHeading?: string;
  marketOverview: string[];
  serviceIntro?: string;
  seoTitle?: string;
  metaDescription?: string;
  nearbySlugs: string[];
  featuredProjectSlugs: string[];
  serviceContent: LocalServiceContent[];
  gallery: LocalGalleryImage[];
  localReview?: LocalReview;
  faqs?: LocalFAQ[];
  heroImage?: LocationImage;
};

export type LocationImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type LocalGalleryImage = LocationImage & {
  projectHref?: string;
};

export type LocalReview = {
  name: string;
  quote: string;
  detail: string;
  sourceUrl?: string;
};

export type LocalServiceContent = {
  serviceHref: string;
  heading: string;
  text: string;
};

export type LocalFAQ = {
  question: string;
  answer: string;
};

type ServiceAreaPageData = Pick<
  ServiceAreaPage,
  "city" | "state" | "slug" | "projectCount" | "localContext"
>;

type ServiceAreaContent = Partial<
  Pick<
    ServiceAreaPage,
    | "featuredProjectSlugs"
    | "serviceContent"
    | "gallery"
    | "localReview"
    | "faqs"
    | "heroImage"
    | "heroText"
    | "introHeading"
    | "marketOverview"
    | "serviceIntro"
    | "seoTitle"
    | "metaDescription"
  >
>;

const serviceAreaPageData: ServiceAreaPageData[] = [
  {
    city: "Kansas City",
    state: "MO",
    slug: "hardwood-flooring-kansas-city-mo",
    projectCount: 112,
    localContext:
      "From older homes with original oak to full-room flooring updates, Kansas City projects call for careful planning around each home’s character."
  },
  {
    city: "Overland Park",
    state: "KS",
    slug: "hardwood-flooring-overland-park-ks",
    projectCount: 34,
    localContext:
      "Overland Park homes often bring a mix of existing hardwood, open floor plans, and remodel transitions that need to feel consistent from room to room."
  },
  {
    city: "Lee's Summit",
    state: "MO",
    slug: "hardwood-flooring-lees-summit-mo",
    projectCount: 24,
    localContext:
      "Lee’s Summit homeowners turn to Noble for hardwood work that balances durable everyday performance with a warm, finished look."
  },
  {
    city: "Prairie Village",
    state: "KS",
    slug: "hardwood-flooring-prairie-village-ks",
    projectCount: 18,
    localContext:
      "Prairie Village projects frequently involve restoring established hardwood or blending new flooring into homes with distinctive existing details."
  },
  {
    city: "Leawood",
    state: "KS",
    slug: "hardwood-flooring-leawood-ks",
    projectCount: 17,
    localContext:
      "Leawood hardwood projects deserve precise installation, thoughtful finish choices, and communication that respects the home from start to finish."
  },
  {
    city: "Shawnee",
    state: "KS",
    slug: "hardwood-flooring-shawnee-ks",
    projectCount: 13,
    localContext:
      "In Shawnee, Noble helps homeowners repair, refinish, or extend hardwood so updated spaces still feel connected to the rest of the home."
  },
  {
    city: "Olathe",
    state: "KS",
    slug: "hardwood-flooring-olathe-ks",
    projectCount: 12,
    localContext:
      "Olathe projects range from worn-floor refinishing to new hardwood installation, all planned around the way the family uses the space."
  },
  {
    city: "Roeland Park",
    state: "KS",
    slug: "hardwood-flooring-roeland-park-ks",
    projectCount: 12,
    localContext:
      "Roeland Park homes often reward a restoration-first approach that preserves good hardwood while repairing the areas that need focused attention."
  },
  {
    city: "Weatherby Lake",
    state: "MO",
    slug: "hardwood-flooring-weatherby-lake-mo",
    projectCount: 10,
    localContext:
      "Weatherby Lake homeowners rely on well-finished hardwood that can handle active living while keeping the home comfortable and inviting."
  },
  {
    city: "Mission",
    state: "KS",
    slug: "hardwood-flooring-mission-ks",
    projectCount: 9,
    localContext:
      "Mission projects often involve bringing older hardwood back to life or tying renovated rooms into the home’s existing floor plan."
  },
  {
    city: "Grandview",
    state: "MO",
    slug: "hardwood-flooring-grandview-mo",
    projectCount: 8,
    localContext:
      "Grandview homeowners come to Noble for practical hardwood repair, refinishing, and installation backed by a clear project plan."
  },
  {
    city: "Westwood",
    state: "KS",
    slug: "hardwood-flooring-westwood-ks",
    projectCount: 7,
    localContext:
      "Westwood’s established homes call for careful floor restoration and detailed transitions that preserve the scale and feel of each room."
  },
  {
    city: "Lenexa",
    state: "KS",
    slug: "hardwood-flooring-lenexa-ks",
    projectCount: 6,
    localContext:
      "Lenexa projects benefit from hardwood choices and finish systems selected for durability, clean sightlines, and long-term ease of care."
  },
  {
    city: "Gladstone",
    state: "MO",
    slug: "hardwood-flooring-gladstone-mo",
    projectCount: 4,
    localContext:
      "Gladstone homeowners trust Noble to solve worn finishes, damaged boards, and flooring transitions without losing sight of the whole room."
  },
  {
    city: "North Kansas City",
    state: "MO",
    slug: "hardwood-flooring-north-kansas-city-mo",
    projectCount: 4,
    localContext:
      "North Kansas City hardwood work often pairs renovation goals with existing materials that need an experienced eye and a measured approach."
  },
  {
    city: "Raytown",
    state: "MO",
    slug: "hardwood-flooring-raytown-mo",
    projectCount: 4,
    localContext:
      "Raytown projects often start with original hardwood that needs repair, sanding, or a fresh finish to become a feature again."
  },
  {
    city: "Fairway",
    state: "KS",
    slug: "hardwood-flooring-fairway-ks",
    projectCount: 3,
    localContext:
      "Fairway homes benefit from detail-focused hardwood restoration that respects existing trim, room proportions, and the floor’s original character."
  },
  {
    city: "Independence",
    state: "MO",
    slug: "hardwood-flooring-independence-mo",
    projectCount: 3,
    localContext:
      "Independence homeowners call Noble when hardwood needs an honest assessment and a clear choice between repair, refinishing, and replacement."
  },
  {
    city: "Lawrence",
    state: "KS",
    slug: "hardwood-flooring-lawrence-ks",
    projectCount: 3,
    localContext:
      "Lawrence projects combine thoughtful design choices with the practical craftsmanship needed for lasting floors, stairs, and transitions."
  },
  {
    city: "Basehor",
    state: "KS",
    slug: "hardwood-flooring-basehor-ks",
    projectCount: 2,
    localContext:
      "Basehor homeowners can expect direct guidance, careful preparation, and hardwood work planned for the specific conditions in their home."
  },
  {
    city: "Liberty",
    state: "MO",
    slug: "hardwood-flooring-liberty-mo",
    projectCount: 2,
    localContext:
      "Liberty hardwood projects receive the same detailed prep, finish planning, and clear communication Noble brings across the Kansas City metro."
  },
  {
    city: "Parkville",
    state: "MO",
    slug: "hardwood-flooring-parkville-mo",
    projectCount: 2,
    localContext:
      "Parkville homes call for hardwood craftsmanship that feels considered, from board repairs and stain selection to final transitions."
  },
  {
    city: "Riverside",
    state: "MO",
    slug: "hardwood-flooring-riverside-mo",
    projectCount: 2,
    localContext:
      "Riverside homeowners get a practical plan for hardwood installation, repair, or refinishing with no one-size-fits-all recommendations."
  },
  {
    city: "Belton",
    state: "MO",
    slug: "hardwood-flooring-belton-mo",
    projectCount: 1,
    localContext:
      "Belton homeowners can bring worn, damaged, or unfinished spaces to Noble for careful hardwood recommendations and dependable work."
  },
  {
    city: "Kansas City",
    state: "KS",
    slug: "hardwood-flooring-kansas-city-ks",
    projectCount: 1,
    localContext:
      "Kansas City, Kansas projects receive locally experienced hardwood guidance tailored to the floor condition, home, and desired result."
  },
  {
    city: "Kearney",
    state: "MO",
    slug: "hardwood-flooring-kearney-mo",
    projectCount: 1,
    localContext:
      "Kearney homeowners can count on a straightforward process for evaluating hardwood, selecting the right scope, and planning the finish."
  },
  {
    city: "Peculiar",
    state: "MO",
    slug: "hardwood-flooring-peculiar-mo",
    projectCount: 1,
    localContext:
      "Peculiar projects get the same careful hardwood assessment and finish-focused craftsmanship Noble provides throughout the metro."
  }
];

const projectCountAsOf = "2026-08-04";

const serviceAreaContentBySlug: Record<string, ServiceAreaContent> = {
  "hardwood-flooring-kansas-city-mo": {
    seoTitle: "Hardwood Flooring Kansas City MO | Noble Hardwoods",
    metaDescription:
      "Kansas City, MO hardwood floor refinishing, installation, and repair from Noble Hardwoods, backed by 112+ completed projects in the city.",
    heroText:
      "Refinishing, installation, repair, dustless sanding, stairs, and custom hardwood work backed by Noble’s deepest project history in the metro.",
    introHeading: "Hardwood experience built across Kansas City.",
    marketOverview: [
      "With 112+ completed projects recorded in Kansas City, Missouri, this is Noble’s largest documented city market. That experience helps the team start with the right questions: what can be preserved, where repairs are needed, and whether refinishing or new installation will create the better long-term result.",
      "The scope can be as focused as replacing damaged boards or as coordinated as installing new hardwood and bringing connected rooms into a consistent finish. Every recommendation begins with the actual floor and the way the spaces connect."
    ],
    serviceIntro:
      "Kansas City projects vary widely in age, floor condition, and scope. Noble evaluates the existing wood first, then builds a plan around restoration, repair, new installation, or a coordinated combination.",
    serviceContent: [
      {
        serviceHref: "/hardwood-floor-refinishing-kansas-city",
        heading: "Hardwood floor refinishing in Kansas City, MO",
        text:
          "For scratched, dull, or unevenly worn floors, Noble sands, prepares, stains when requested, and applies a durable finish selected for the home and desired look."
      },
      {
        serviceHref: "/hardwood-floor-installation-kansas-city",
        heading: "Hardwood floor installation for connected spaces",
        text:
          "Noble installs solid, engineered, unfinished, and prefinished hardwood, with careful attention to layout, transitions, and how new rooms meet existing flooring."
      },
      {
        serviceHref: "/hardwood-floor-repair-kansas-city",
        heading: "Targeted hardwood floor repair",
        text:
          "Damaged, stained, loose, or missing boards are assessed in context so a focused repair can be paired with refinishing when that will produce a more consistent result."
      },
      {
        serviceHref: "/dustless-hardwood-floor-refinishing-kansas-city",
        heading: "Dustless sanding available in Kansas City",
        text:
          "Professional dust-containment equipment and careful home protection make sanding a cleaner, more controlled part of the refinishing process."
      }
    ],
    faqs: [
      {
        question: "Does Noble refinish hardwood floors in Kansas City, Missouri?",
        answer:
          "Yes. Noble provides full hardwood floor refinishing, including sanding, stain changes when requested, and durable finish application throughout Kansas City, Missouri."
      },
      {
        question: "Can Noble repair only part of a damaged Kansas City hardwood floor?",
        answer:
          "Often, yes. Noble evaluates the damaged area, the available matching wood, and the surrounding finish before recommending board replacement, a lace-in repair, refinishing, or replacement."
      },
      {
        question: "Can new hardwood be added beside existing flooring?",
        answer:
          "In many homes, new boards can be selected and installed to connect with existing hardwood. Sanding and finishing connected areas together may help create a more consistent appearance."
      },
      {
        question: "What should I send for a Kansas City hardwood flooring quote?",
        answer:
          "Share the project address, approximate room sizes, the service you are considering, and clear photos of the floors and damaged areas. Noble will follow up with the next step for an accurate estimate."
      }
    ]
  },
  "hardwood-flooring-overland-park-ks": {
    seoTitle: "Hardwood Floor Refinishing Overland Park KS | Noble",
    metaDescription:
      "Overland Park hardwood floor refinishing, installation, and repair backed by 34+ completed Noble projects and a documented whole-home flooring project.",
    heroText:
      "Hardwood refinishing, installation, and repair planned for clean transitions and a consistent result across connected Overland Park living spaces.",
    introHeading: "A coordinated plan from existing floors to new rooms.",
    marketOverview: [
      "Noble’s Overland Park project history includes 34+ completed projects and a documented whole-home installation and refinishing project. That combination of services is useful when one part of a home already has hardwood and another needs new flooring.",
      "Rather than treating each room as a separate decision, the team considers board direction, transitions, stain and finish choices, and how old and new flooring will read together once the work is complete."
    ],
    serviceIntro:
      "Overland Park homeowners can bring Noble one worn room, a damaged section, or a multi-room renovation. The plan accounts for the existing floor and the visual connection between spaces.",
    featuredProjectSlugs: ["floor-installation-and-refinishing-in-overland-park-ks"],
    serviceContent: [
      {
        serviceHref: "/hardwood-floor-refinishing-kansas-city",
        heading: "Hardwood floor refinishing in Overland Park",
        text:
          "Noble restores worn hardwood through careful sanding, optional stain changes, and a finish system chosen for the floor, household, and preferred sheen."
      },
      {
        serviceHref: "/hardwood-floor-installation-kansas-city",
        heading: "Installation that works with existing hardwood",
        text:
          "New hardwood can be planned around adjoining rooms, sightlines, and transitions so an addition or remodel feels connected instead of patched together."
      },
      {
        serviceHref: "/hardwood-floor-repair-kansas-city",
        heading: "Repairs before the final finish",
        text:
          "Noble assesses damaged boards, gaps, stains, and transition problems before sanding so repairs become part of one coordinated scope."
      },
      {
        serviceHref: "/custom-hardwood-floors-kansas-city",
        heading: "Custom details for high-visibility spaces",
        text:
          "Pattern, border, plank-width, and layout decisions are developed around the room rather than added as an afterthought."
      }
    ],
    faqs: [
      {
        question: "Can Noble combine installation and refinishing in one Overland Park project?",
        answer:
          "Yes. Noble has a documented Overland Park project that paired new hardwood installation with refinishing of existing floors to create a more consistent whole-home result."
      },
      {
        question: "Can the stain color of existing hardwood be changed?",
        answer:
          "Often, yes. The available color range depends on the wood species, current condition, prior coatings, and desired tone. Sample options should be reviewed on the actual floor before the final selection."
      },
      {
        question: "Does Noble repair damaged boards before refinishing?",
        answer:
          "Yes. Board repairs and lace-ins can be evaluated before sanding so the repair and surrounding floor can be finished as one planned project."
      },
      {
        question: "How do I start an Overland Park flooring estimate?",
        answer:
          "Send the project address, room dimensions or approximate square footage, photos, and a short description of the desired result. Noble will recommend the right next step."
      }
    ]
  },
  "hardwood-flooring-lees-summit-mo": {
    seoTitle: "Hardwood Flooring Lee's Summit MO | Noble Hardwoods",
    metaDescription:
      "Lee's Summit hardwood floor refinishing, installation, and repair from Noble Hardwoods, supported by 24+ completed local projects.",
    heroText:
      "Practical hardwood refinishing, installation, and repair for Lee’s Summit homes, backed by 24+ completed projects in the city.",
    introHeading: "A clear path from floor condition to finished result.",
    marketOverview: [
      "Across 24+ completed Lee’s Summit projects, Noble has helped homeowners move from a broad flooring goal to a defined scope. The first decision is whether the existing wood can be restored, needs localized repair, or should be supplemented or replaced with new flooring.",
      "From there, the work is planned around daily use: transitions between rooms, finish durability, the look of the wood, and a sequence that is understandable before the project begins."
    ],
    serviceIntro:
      "The right service depends on what is already in the home. Noble separates cosmetic wear from repair needs and installation opportunities before recommending a scope.",
    serviceContent: [
      {
        serviceHref: "/hardwood-floor-refinishing-kansas-city",
        heading: "Hardwood floor refinishing in Lee’s Summit",
        text:
          "Sanding and refinishing can renew floors with surface wear, scratches, or an outdated color while preserving the wood already in the home."
      },
      {
        serviceHref: "/hardwood-floor-installation-kansas-city",
        heading: "New hardwood installation",
        text:
          "Material, plank direction, transitions, and on-site or factory finishing are considered together so the installed floor fits the rooms and the project goals."
      },
      {
        serviceHref: "/hardwood-floor-repair-kansas-city",
        heading: "Repair options before replacement",
        text:
          "Noble checks whether water damage, pet stains, loose boards, or isolated wear can be addressed with a focused repair before broader replacement is considered."
      },
      {
        serviceHref: "/hardwood-stairs-railings-kansas-city",
        heading: "Hardwood stairs and railing updates",
        text:
          "Treads, risers, railings, newel posts, and balusters can be planned to coordinate with the flooring and the way the spaces connect."
      }
    ],
    faqs: [
      {
        question: "Does Noble provide hardwood floor refinishing in Lee’s Summit?",
        answer:
          "Yes. Noble offers hardwood sanding, refinishing, stain selection, repairs, and finish application in Lee’s Summit and surrounding communities."
      },
      {
        question: "Should I repair, refinish, or replace my hardwood floor?",
        answer:
          "That depends on the wood thickness, damage, subfloor conditions, prior sanding, and the result you want. Noble reviews those factors before recommending the most practical scope."
      },
      {
        question: "Is dustless sanding available in Lee’s Summit?",
        answer:
          "Yes. Dustless sanding is available as part of eligible refinishing projects, using professional dust-containment equipment and careful preparation."
      },
      {
        question: "Can Noble update hardwood stairs with the floor?",
        answer:
          "Yes. Stair treads, risers, railings, and related details can be included in the project scope and coordinated with the flooring finish."
      }
    ]
  },
  "hardwood-flooring-prairie-village-ks": {
    seoTitle: "Hardwood Floor Refinishing Prairie Village KS | Noble",
    metaDescription:
      "Prairie Village hardwood floor refinishing, repair, and installation from Noble Hardwoods, backed by 18+ completed projects in the city.",
    heroText:
      "Restoration-minded refinishing, repair, and installation for Prairie Village homes, backed by 18+ completed local projects.",
    introHeading: "Preserve what works. Resolve what does not.",
    marketOverview: [
      "For Prairie Village homeowners, the most valuable first step is often an honest assessment of the hardwood already in place. Noble’s 18+ completed projects in the city support a restoration-minded approach: preserve sound flooring, repair problem areas, and replace or extend wood only where the project calls for it.",
      "Details such as board matching, room transitions, stain direction, and finish sheen are considered early because they determine whether repaired, refinished, and newly installed areas feel like parts of one home."
    ],
    serviceIntro:
      "Prairie Village projects often require several small decisions to work together. Noble looks at repairability, matching, transitions, and finish before defining the final scope.",
    serviceContent: [
      {
        serviceHref: "/hardwood-floor-refinishing-kansas-city",
        heading: "Hardwood floor refinishing in Prairie Village",
        text:
          "Refinishing removes worn coatings and surface damage, then rebuilds the color and protection of hardwood that still has useful life."
      },
      {
        serviceHref: "/hardwood-floor-repair-kansas-city",
        heading: "Board repair and hardwood restoration",
        text:
          "Localized damage, missing boards, stains, and previous alterations are evaluated for repair before a larger replacement scope is recommended."
      },
      {
        serviceHref: "/hardwood-floor-installation-kansas-city",
        heading: "Extend hardwood into adjoining rooms",
        text:
          "When a remodel adds hardwood to a new space, Noble plans material, layout, and transitions around the flooring that will remain."
      },
      {
        serviceHref: "/dustless-hardwood-floor-refinishing-kansas-city",
        heading: "A cleaner sanding process",
        text:
          "Dust-containment equipment is available to reduce airborne sanding dust while the team protects adjoining surfaces and work areas."
      }
    ],
    faqs: [
      {
        question: "Can original hardwood floors in Prairie Village be restored?",
        answer:
          "Many existing hardwood floors can be repaired and refinished, but the answer depends on wood thickness, prior sanding, damage, and subfloor conditions. Noble evaluates the floor before recommending restoration."
      },
      {
        question: "Can damaged boards be replaced without replacing the whole floor?",
        answer:
          "Often, yes. Individual boards or sections may be repaired or laced in when compatible material is available and the surrounding floor can be finished to support a consistent result."
      },
      {
        question: "Can Noble match hardwood in a remodeled room?",
        answer:
          "Noble can assess wood species, dimensions, grade, color, and layout to determine the best way to connect new flooring with the existing floor. Exact matching depends on the materials and aging of the original wood."
      },
      {
        question: "What determines the cost of Prairie Village floor refinishing?",
        answer:
          "Square footage, floor condition, repairs, stain changes, stairs, transitions, and the selected finish system all affect the final estimate."
      }
    ]
  },
  "hardwood-flooring-leawood-ks": {
    seoTitle: "Hardwood Floor Refinishing Leawood KS | Noble Hardwoods",
    metaDescription:
      "Leawood hardwood floor refinishing, installation, repair, stairs, and custom flooring backed by 17+ completed Noble projects.",
    heroText:
      "Detail-focused hardwood refinishing, installation, repair, stairs, and custom work backed by 17+ completed Leawood projects.",
    introHeading: "Finish, transitions, and details planned as one system.",
    marketOverview: [
      "Noble’s 17+ completed Leawood projects give homeowners a local record to weigh alongside craftsmanship and communication. The work begins with the floor’s condition, but the plan also accounts for visible transitions, stair details, finish tone, and how each choice carries across the home.",
      "Whether the project centers on refinishing, new installation, or a custom feature, Noble organizes those decisions before execution so the final floor feels deliberate rather than assembled one choice at a time."
    ],
    serviceIntro:
      "Leawood projects can involve straightforward restoration or a more detailed mix of installation, stairs, and custom work. Noble coordinates the visible details from the start.",
    serviceContent: [
      {
        serviceHref: "/hardwood-floor-refinishing-kansas-city",
        heading: "Hardwood floor refinishing in Leawood",
        text:
          "Noble refines color, sheen, and finish durability after careful sanding and preparation, with samples used to make the final direction tangible."
      },
      {
        serviceHref: "/hardwood-floor-installation-kansas-city",
        heading: "Precisely planned hardwood installation",
        text:
          "Board selection, layout, transitions, and finishing approach are coordinated around the architecture and adjacent materials."
      },
      {
        serviceHref: "/hardwood-stairs-railings-kansas-city",
        heading: "Stairs and railings that belong with the floor",
        text:
          "Treads, risers, railings, newel posts, balusters, and metal details can be designed to work with the flooring instead of reading as a separate project."
      },
      {
        serviceHref: "/custom-hardwood-floors-kansas-city",
        heading: "Custom patterns and statement details",
        text:
          "Herringbone, chevron, wide-plank layouts, borders, and other custom elements are planned around room dimensions, sightlines, and material movement."
      }
    ],
    faqs: [
      {
        question: "Does Noble refinish hardwood floors in Leawood?",
        answer:
          "Yes. Noble provides hardwood floor sanding, refinishing, stain consultation, repairs, and finish application throughout Leawood."
      },
      {
        question: "Can I preview stain colors before refinishing?",
        answer:
          "The final stain direction should be reviewed against the actual wood because species, sanding, lighting, and existing materials affect how a color appears. Noble guides that selection during planning."
      },
      {
        question: "Can flooring and stair work be completed as one project?",
        answer:
          "Yes. Coordinating floors, treads, risers, and railing elements in one scope can make it easier to align materials, color, sheen, and scheduling."
      },
      {
        question: "Does Noble install herringbone or other custom patterns in Leawood?",
        answer:
          "Noble offers herringbone, chevron, wide-plank, border, and custom hardwood layouts. The right pattern and material depend on the room, subfloor, and desired design."
      }
    ]
  },
  "hardwood-flooring-shawnee-ks": {
    seoTitle: "Hardwood Floor Refinishing Shawnee KS | Noble Hardwoods",
    metaDescription:
      "Shawnee hardwood floor refinishing, installation, and repair from Noble Hardwoods, backed by 13+ completed projects in the city.",
    heroText:
      "Hardwood repair, refinishing, and installation that helps updated Shawnee rooms stay connected to the rest of the home.",
    introHeading: "Solve the damaged areas without losing the whole floor.",
    marketOverview: [
      "Noble has completed 13+ recorded projects in Shawnee. For homeowners, that experience is most useful when the answer is not simply ‘replace everything’—a worn or damaged floor may call for repair, refinishing, new installation in selected rooms, or a combination.",
      "The team evaluates what can remain, what needs intervention, and how material and finish choices can keep updated spaces visually connected to the rest of the home."
    ],
    serviceIntro:
      "Shawnee homeowners can start with the problem area. Noble then evaluates the surrounding wood and connected rooms before recommending repair, refinishing, installation, or a combined scope.",
    serviceContent: [
      {
        serviceHref: "/hardwood-floor-repair-kansas-city",
        heading: "Hardwood floor repair in Shawnee",
        text:
          "Water damage, pet stains, loose boards, gaps, and missing sections are assessed to determine whether a focused repair can preserve the surrounding floor."
      },
      {
        serviceHref: "/hardwood-floor-refinishing-kansas-city",
        heading: "Refinishing after wear or repair",
        text:
          "Sanding and refinishing can reset a worn surface and help repaired areas relate more naturally to the original hardwood."
      },
      {
        serviceHref: "/hardwood-floor-installation-kansas-city",
        heading: "Installation for additions and room updates",
        text:
          "New hardwood is planned around board direction, adjacent flooring, transitions, and the finish approach for the rest of the home."
      },
      {
        serviceHref: "/dustless-hardwood-floor-refinishing-kansas-city",
        heading: "Dustless sanding available",
        text:
          "Dust-containment equipment and careful site preparation help reduce disruption while the old finish is removed."
      }
    ],
    faqs: [
      {
        question: "Can Noble repair water-damaged hardwood in Shawnee?",
        answer:
          "Noble evaluates the damaged boards, moisture source, subfloor, and surrounding finish before recommending board repair, section replacement, refinishing, or broader replacement."
      },
      {
        question: "Can new flooring be blended into an existing Shawnee floor?",
        answer:
          "Often, compatible boards can be installed or laced into the existing floor. The feasibility and final appearance depend on wood species, dimensions, age, and finish."
      },
      {
        question: "Will refinishing remove every pet stain?",
        answer:
          "Some surface discoloration sands out, while deeper staining may remain in the wood and require board replacement or a stain strategy. Noble assesses the depth before setting expectations."
      },
      {
        question: "Is dustless sanding completely dust-free?",
        answer:
          "No sanding process is literally dust-free. Professional dust-containment equipment captures much of the sanding dust and is paired with careful preparation and cleanup."
      }
    ]
  },
  "hardwood-flooring-olathe-ks": {
    seoTitle: "Hardwood Floor Refinishing Olathe KS | Noble Hardwoods",
    metaDescription:
      "Olathe hardwood floor refinishing, installation, and repair from Noble Hardwoods, backed by 12+ completed local projects.",
    heroText:
      "Durable hardwood refinishing, repair, and installation planned around how Olathe households use their rooms every day.",
    introHeading: "A durable result starts with the right scope.",
    marketOverview: [
      "With 12+ completed projects recorded in Olathe, Noble brings local project history to the first assessment. The goal is to separate surface wear from structural or board-level problems, then choose refinishing, repair, installation, or a coordinated mix.",
      "Finish durability, room transitions, care expectations, and project sequencing are discussed alongside appearance so the recommendation works after the tools and materials leave the home."
    ],
    serviceIntro:
      "Olathe projects are planned around condition and daily use. Noble helps determine what can be renewed, what needs repair, and where new hardwood creates the better long-term solution.",
    serviceContent: [
      {
        serviceHref: "/hardwood-floor-refinishing-kansas-city",
        heading: "Hardwood floor refinishing in Olathe",
        text:
          "Worn hardwood is sanded and prepared for the chosen color and finish, with durability and ongoing care considered during selection."
      },
      {
        serviceHref: "/hardwood-floor-installation-kansas-city",
        heading: "Hardwood installation for lived-in spaces",
        text:
          "Noble helps compare solid, engineered, unfinished, and prefinished options based on the room, subfloor, schedule, and desired appearance."
      },
      {
        serviceHref: "/hardwood-floor-repair-kansas-city",
        heading: "Repair before broader replacement",
        text:
          "Localized damage is evaluated first so serviceable hardwood is not removed without a clear reason."
      },
      {
        serviceHref: "/hardwood-stairs-railings-kansas-city",
        heading: "Coordinated stairs and railings",
        text:
          "Stair treads, risers, railings, posts, and balusters can be incorporated into the floor plan for a consistent material and finish direction."
      }
    ],
    faqs: [
      {
        question: "Does Noble offer hardwood floor refinishing in Olathe?",
        answer:
          "Yes. Noble offers sanding, refinishing, repairs, stain consultation, and durable finish application for Olathe hardwood floors."
      },
      {
        question: "How long will an Olathe refinishing project take?",
        answer:
          "Timing depends on square footage, floor condition, repairs, stain, finish system, and curing requirements. Noble provides a project-specific schedule before work begins."
      },
      {
        question: "Should I choose prefinished or site-finished hardwood?",
        answer:
          "Prefinished and site-finished floors each have advantages involving installation time, appearance, seams, customization, and repairability. Noble recommends an option after reviewing the rooms and priorities."
      },
      {
        question: "Can hardwood stairs be matched to a new floor?",
        answer:
          "Flooring and stair components can be selected and finished as one coordinated scope. Exact matching depends on species, product construction, and existing materials."
      }
    ]
  },
  "hardwood-flooring-lenexa-ks": {
    seoTitle: "Hardwood Flooring Lenexa KS | Noble Hardwoods",
    metaDescription:
      "Lenexa hardwood floor installation, refinishing, repair, and stairs from Noble Hardwoods, with 6+ completed projects and a documented stage project.",
    heroText:
      "Hardwood installation, refinishing, repair, and stair work for Lenexa homes and project spaces, backed by documented local experience.",
    introHeading: "Hardwood craftsmanship for floors, stages, and steps.",
    marketOverview: [
      "Noble’s six-plus completed Lenexa projects include a documented commercial stage and full-length step installation. That project demonstrates the same planning fundamentals that matter in residential work: material selection, edge and transition details, durable finishing, and a sequence built around how the finished surface will be used.",
      "For homes, Noble applies that process to refinishing, installation, repair, and stairs—starting with actual site conditions rather than a one-size-fits-all recommendation."
    ],
    serviceIntro:
      "Lenexa work can range from a worn residential floor to stairs or a larger custom surface. Noble defines the material, preparation, details, and finish as one complete scope.",
    featuredProjectSlugs: ["stage-steps-installation-in-lenexa-ks"],
    serviceContent: [
      {
        serviceHref: "/hardwood-floor-installation-kansas-city",
        heading: "Hardwood floor installation in Lenexa",
        text:
          "Solid, engineered, unfinished, and prefinished hardwood options are evaluated against the subfloor, room layout, schedule, and desired finish."
      },
      {
        serviceHref: "/hardwood-stairs-railings-kansas-city",
        heading: "Steps, treads, and railing details",
        text:
          "Noble’s documented Lenexa work includes full-length stair treads and risers for a commercial stage, finished for durability and a cohesive appearance."
      },
      {
        serviceHref: "/hardwood-floor-refinishing-kansas-city",
        heading: "Hardwood floor refinishing in Lenexa",
        text:
          "Existing hardwood can be sanded, repaired where needed, restained when requested, and protected with a finish selected for the space."
      },
      {
        serviceHref: "/hardwood-floor-repair-kansas-city",
        heading: "Focused repairs and board replacement",
        text:
          "Noble assesses damaged boards and surrounding flooring together before recommending a repair, lace-in, refinish, or larger replacement."
      }
    ],
    faqs: [
      {
        question: "Does Noble install hardwood stairs and steps in Lenexa?",
        answer:
          "Yes. Noble has a documented Lenexa project involving a hardwood stage with full-length stair treads and risers, and offers stair and railing work for residential projects as well."
      },
      {
        question: "Does Noble provide residential hardwood refinishing in Lenexa?",
        answer:
          "Yes. Noble provides hardwood floor sanding, refinishing, repair, and installation services for Lenexa homes."
      },
      {
        question: "What finish works best for hardwood steps?",
        answer:
          "The right finish depends on wood species, traffic, sheen preference, maintenance expectations, and whether the steps need to coordinate with adjacent flooring."
      },
      {
        question: "Can Noble handle a project with both floors and stairs?",
        answer:
          "Yes. Combining the scopes allows flooring, treads, risers, and railing details to be planned around one material and finish direction."
      }
    ]
  },
  "hardwood-flooring-lawrence-ks": {
    featuredProjectSlugs: ["floor-installation-and-finish-in-lawrence-ks"]
  }
};

const nearbySlugsBySlug: Record<string, string[]> = {
  "hardwood-flooring-kansas-city-mo": [
    "hardwood-flooring-north-kansas-city-mo",
    "hardwood-flooring-riverside-mo",
    "hardwood-flooring-raytown-mo",
    "hardwood-flooring-kansas-city-ks"
  ],
  "hardwood-flooring-overland-park-ks": [
    "hardwood-flooring-leawood-ks",
    "hardwood-flooring-prairie-village-ks",
    "hardwood-flooring-lenexa-ks",
    "hardwood-flooring-olathe-ks"
  ],
  "hardwood-flooring-lees-summit-mo": [
    "hardwood-flooring-grandview-mo",
    "hardwood-flooring-raytown-mo",
    "hardwood-flooring-independence-mo",
    "hardwood-flooring-peculiar-mo"
  ],
  "hardwood-flooring-prairie-village-ks": [
    "hardwood-flooring-fairway-ks",
    "hardwood-flooring-mission-ks",
    "hardwood-flooring-westwood-ks",
    "hardwood-flooring-leawood-ks"
  ],
  "hardwood-flooring-leawood-ks": [
    "hardwood-flooring-overland-park-ks",
    "hardwood-flooring-prairie-village-ks",
    "hardwood-flooring-olathe-ks",
    "hardwood-flooring-mission-ks"
  ],
  "hardwood-flooring-shawnee-ks": [
    "hardwood-flooring-lenexa-ks",
    "hardwood-flooring-mission-ks",
    "hardwood-flooring-kansas-city-ks",
    "hardwood-flooring-overland-park-ks"
  ],
  "hardwood-flooring-olathe-ks": [
    "hardwood-flooring-overland-park-ks",
    "hardwood-flooring-lenexa-ks",
    "hardwood-flooring-leawood-ks",
    "hardwood-flooring-basehor-ks"
  ],
  "hardwood-flooring-roeland-park-ks": [
    "hardwood-flooring-mission-ks",
    "hardwood-flooring-fairway-ks",
    "hardwood-flooring-westwood-ks",
    "hardwood-flooring-kansas-city-ks"
  ],
  "hardwood-flooring-weatherby-lake-mo": [
    "hardwood-flooring-riverside-mo",
    "hardwood-flooring-parkville-mo",
    "hardwood-flooring-gladstone-mo",
    "hardwood-flooring-north-kansas-city-mo"
  ],
  "hardwood-flooring-mission-ks": [
    "hardwood-flooring-roeland-park-ks",
    "hardwood-flooring-fairway-ks",
    "hardwood-flooring-westwood-ks",
    "hardwood-flooring-shawnee-ks"
  ],
  "hardwood-flooring-grandview-mo": [
    "hardwood-flooring-lees-summit-mo",
    "hardwood-flooring-belton-mo",
    "hardwood-flooring-leawood-ks",
    "hardwood-flooring-raytown-mo"
  ],
  "hardwood-flooring-westwood-ks": [
    "hardwood-flooring-fairway-ks",
    "hardwood-flooring-mission-ks",
    "hardwood-flooring-roeland-park-ks",
    "hardwood-flooring-kansas-city-mo"
  ],
  "hardwood-flooring-lenexa-ks": [
    "hardwood-flooring-shawnee-ks",
    "hardwood-flooring-overland-park-ks",
    "hardwood-flooring-olathe-ks",
    "hardwood-flooring-mission-ks"
  ],
  "hardwood-flooring-gladstone-mo": [
    "hardwood-flooring-north-kansas-city-mo",
    "hardwood-flooring-liberty-mo",
    "hardwood-flooring-riverside-mo",
    "hardwood-flooring-kansas-city-mo"
  ],
  "hardwood-flooring-north-kansas-city-mo": [
    "hardwood-flooring-kansas-city-mo",
    "hardwood-flooring-gladstone-mo",
    "hardwood-flooring-riverside-mo",
    "hardwood-flooring-kansas-city-ks"
  ],
  "hardwood-flooring-raytown-mo": [
    "hardwood-flooring-kansas-city-mo",
    "hardwood-flooring-independence-mo",
    "hardwood-flooring-lees-summit-mo",
    "hardwood-flooring-grandview-mo"
  ],
  "hardwood-flooring-fairway-ks": [
    "hardwood-flooring-westwood-ks",
    "hardwood-flooring-mission-ks",
    "hardwood-flooring-roeland-park-ks",
    "hardwood-flooring-prairie-village-ks"
  ],
  "hardwood-flooring-independence-mo": [
    "hardwood-flooring-raytown-mo",
    "hardwood-flooring-lees-summit-mo",
    "hardwood-flooring-kansas-city-mo",
    "hardwood-flooring-liberty-mo"
  ],
  "hardwood-flooring-lawrence-ks": [
    "hardwood-flooring-basehor-ks",
    "hardwood-flooring-lenexa-ks",
    "hardwood-flooring-olathe-ks",
    "hardwood-flooring-shawnee-ks"
  ],
  "hardwood-flooring-basehor-ks": [
    "hardwood-flooring-kansas-city-ks",
    "hardwood-flooring-lawrence-ks",
    "hardwood-flooring-shawnee-ks",
    "hardwood-flooring-parkville-mo"
  ],
  "hardwood-flooring-liberty-mo": [
    "hardwood-flooring-gladstone-mo",
    "hardwood-flooring-kearney-mo",
    "hardwood-flooring-north-kansas-city-mo",
    "hardwood-flooring-independence-mo"
  ],
  "hardwood-flooring-parkville-mo": [
    "hardwood-flooring-riverside-mo",
    "hardwood-flooring-weatherby-lake-mo",
    "hardwood-flooring-kansas-city-ks",
    "hardwood-flooring-gladstone-mo"
  ],
  "hardwood-flooring-riverside-mo": [
    "hardwood-flooring-north-kansas-city-mo",
    "hardwood-flooring-parkville-mo",
    "hardwood-flooring-weatherby-lake-mo",
    "hardwood-flooring-kansas-city-mo"
  ],
  "hardwood-flooring-belton-mo": [
    "hardwood-flooring-peculiar-mo",
    "hardwood-flooring-grandview-mo",
    "hardwood-flooring-lees-summit-mo",
    "hardwood-flooring-olathe-ks"
  ],
  "hardwood-flooring-kansas-city-ks": [
    "hardwood-flooring-kansas-city-mo",
    "hardwood-flooring-shawnee-ks",
    "hardwood-flooring-roeland-park-ks",
    "hardwood-flooring-basehor-ks"
  ],
  "hardwood-flooring-kearney-mo": [
    "hardwood-flooring-liberty-mo",
    "hardwood-flooring-gladstone-mo",
    "hardwood-flooring-north-kansas-city-mo",
    "hardwood-flooring-independence-mo"
  ],
  "hardwood-flooring-peculiar-mo": [
    "hardwood-flooring-belton-mo",
    "hardwood-flooring-grandview-mo",
    "hardwood-flooring-lees-summit-mo",
    "hardwood-flooring-olathe-ks"
  ]
};

export const defaultLocationHeroImages: LocationImage[] = [
  {
    src: "/images/noble-hardwoods-hero.jpg",
    alt: "Warm hardwood flooring across an open living and dining space"
  },
  {
    src: "/images/project-flooring/guillen-home-dining-room-hardwood-floor.webp",
    alt: "Natural hardwood flooring in a bright dining room"
  },
  {
    src: "/images/project-flooring/robinson-home-kitchen-hardwood-floor-2.webp",
    alt: "Restored hardwood flooring beside white kitchen cabinetry"
  },
  {
    src: "/images/project-flooring/apartment-living-room-hardwood-floor.webp",
    alt: "Warm hardwood flooring throughout a furnished living room"
  }
];

export const serviceAreaPages: ServiceAreaPage[] = serviceAreaPageData.map((area) => ({
  ...area,
  href: `/service-areas/${area.slug}`,
  projectCountAsOf,
  heroText: serviceAreaContentBySlug[area.slug]?.heroText,
  introHeading: serviceAreaContentBySlug[area.slug]?.introHeading,
  marketOverview: serviceAreaContentBySlug[area.slug]?.marketOverview ?? [],
  serviceIntro: serviceAreaContentBySlug[area.slug]?.serviceIntro,
  seoTitle: serviceAreaContentBySlug[area.slug]?.seoTitle,
  metaDescription: serviceAreaContentBySlug[area.slug]?.metaDescription,
  nearbySlugs: nearbySlugsBySlug[area.slug] ?? [],
  featuredProjectSlugs: serviceAreaContentBySlug[area.slug]?.featuredProjectSlugs ?? [],
  serviceContent: serviceAreaContentBySlug[area.slug]?.serviceContent ?? [],
  gallery: serviceAreaContentBySlug[area.slug]?.gallery ?? [],
  localReview: serviceAreaContentBySlug[area.slug]?.localReview,
  faqs: serviceAreaContentBySlug[area.slug]?.faqs,
  heroImage: serviceAreaContentBySlug[area.slug]?.heroImage
}));

export const locatedProjectTotal = serviceAreaPages.reduce(
  (total, area) => total + area.projectCount,
  0
);

export function getServiceAreaPage(slug: string) {
  return serviceAreaPages.find((area) => area.slug === slug);
}

export function getServiceAreaByCityLabel(cityLabel: string) {
  return serviceAreaPages.find((area) => `${area.city}, ${area.state}` === cityLabel);
}

export function getLocationHeroImage(area: ServiceAreaPage) {
  if (area.heroImage) return area.heroImage;

  const imageIndex = serviceAreaPages.findIndex((item) => item.slug === area.slug);
  return defaultLocationHeroImages[imageIndex % defaultLocationHeroImages.length];
}

export function getNearbyServiceAreas(current: ServiceAreaPage, limit = 4) {
  const curatedAreas = current.nearbySlugs
    .map((slug) => getServiceAreaPage(slug))
    .filter((area): area is ServiceAreaPage => Boolean(area));

  return curatedAreas.slice(0, limit);
}

export function getLocationFaqs(area: ServiceAreaPage): LocalFAQ[] {
  if (area.faqs?.length) return area.faqs;

  return [
    {
      question: `Does Noble Hardwoods serve ${area.city}, ${area.state}?`,
      answer: `Yes. Noble Hardwoods provides hardwood floor refinishing, installation, repair, dustless sanding, stairs, railings, and custom floor work in ${area.city} and nearby Kansas City communities.`
    },
    {
      question: `How much does hardwood floor refinishing cost in ${area.city}?`,
      answer:
        "Cost depends on square footage, floor condition, repairs, stain changes, and the finish system. Noble Hardwoods provides a clear estimate after reviewing the project."
    },
    {
      question: `Can Noble match new hardwood to existing floors in a ${area.city} home?`,
      answer:
        "Often, yes. The team can identify the existing wood, lace in new boards where appropriate, and use sanding, stain, and finish work to create a more consistent result."
    },
    {
      question: `Does Noble repair damaged hardwood floors in ${area.city}?`,
      answer:
        "Yes. Noble Hardwoods evaluates water damage, pet stains, loose boards, missing boards, and other localized damage before recommending repair, refinishing, or replacement."
    }
  ];
}
