import {
  blogPosts,
  business,
  faqs,
  featuredProjects,
  processSteps,
  reviews,
  serviceAreas,
  services
} from "./site";

export type FAQ = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  href: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  includes: string[];
  problems: string[];
  process: string[];
  faqs: FAQ[];
  relatedServices: string[];
};

const sharedProcess = processSteps;

export const servicePages: ServicePage[] = [
  {
    slug: "hardwood-floor-refinishing-kansas-city",
    href: "/hardwood-floor-refinishing-kansas-city",
    title: "Hardwood Floor Refinishing",
    seoTitle: "Hardwood Floor Refinishing Kansas City",
    metaDescription:
      "Bring worn hardwood floors back to life with professional hardwood floor refinishing in Kansas City. Noble Hardwoods offers sanding, staining, recoating, repairs, and durable finishes.",
    eyebrow: "Sanding & Refinishing",
    h1: "Hardwood Floor Refinishing in Kansas City",
    intro:
      "Bring scratched, dull, or worn hardwood floors back to life with a careful refinishing process built around craftsmanship, clean work, and a finish that fits your home.",
    image: "/images/projects/living-room-hardwood-floors.jpg",
    imageAlt: "Refinished hardwood floors in a bright Kansas City living room",
    includes: [
      "Full sanding and refinishing",
      "Screen and recoat guidance",
      "Stain color planning",
      "Durable finish systems",
      "Dust-conscious prep and cleanup",
      "Minor repair review before finishing"
    ],
    problems: [
      "Scratches, dull finish, and worn traffic paths",
      "Pet wear, water marks, and discoloration",
      "Old finishes that no longer protect the wood",
      "Floors that need a new color or more consistent sheen"
    ],
    process: sharedProcess,
    faqs: [
      faqs[0],
      faqs[1],
      faqs[2],
      {
        question: "Can you change the color of my hardwood floors?",
        answer:
          "Yes. Most sandable hardwood floors can be stained a new color after sanding, though the final look depends on species, age, and existing floor condition."
      },
      {
        question: "How long before rugs can go back?",
        answer:
          "Rug timing depends on the finish system and cure schedule. Noble Hardwoods will give care instructions before the final walkthrough."
      }
    ],
    relatedServices: [
      "/dustless-hardwood-floor-refinishing-kansas-city",
      "/hardwood-floor-repair-kansas-city",
      "/hardwood-floor-installation-kansas-city"
    ]
  },
  {
    slug: "hardwood-floor-installation-kansas-city",
    href: "/hardwood-floor-installation-kansas-city",
    title: "Hardwood Floor Installation",
    seoTitle: "Hardwood Floor Installation Kansas City",
    metaDescription:
      "Noble Hardwoods installs unfinished, prefinished, solid, engineered, and custom hardwood floors throughout Kansas City, Overland Park, Leawood, Lenexa, and nearby areas.",
    eyebrow: "Installation",
    h1: "Hardwood Floor Installation in Kansas City",
    intro:
      "Upgrade your home with hardwood floors installed by a Kansas City team focused on detail, beauty, and long-term durability.",
    image: "/images/projects/kitchen-hardwood-floors.jpg",
    imageAlt: "New hardwood flooring installed in a bright Kansas City kitchen",
    includes: [
      "Unfinished hardwood installation",
      "Prefinished hardwood installation",
      "Solid and engineered hardwood guidance",
      "White oak, red oak, walnut, and maple options",
      "Subfloor review and prep",
      "Stain and finish coordination"
    ],
    problems: [
      "Carpet or dated flooring ready for replacement",
      "Rooms that need hardwood tied into existing floors",
      "Layout transitions that need careful trim and threshold work",
      "Homes that need a cleaner, more timeless floor plan"
    ],
    process: sharedProcess,
    faqs: [
      {
        question: "Should I choose solid or engineered hardwood?",
        answer:
          "The right choice depends on the room, subfloor, moisture conditions, desired look, and long-term refinishing goals."
      },
      {
        question: "Can you match new hardwood to existing floors?",
        answer:
          "Yes. Noble Hardwoods can lace in new boards, match species where possible, and sand or finish floors to help old and new areas blend."
      },
      {
        question: "Do you install unfinished hardwood?",
        answer:
          "Yes. Unfinished hardwood can be installed, sanded, stained, and finished on site for a custom result."
      },
      {
        question: "Do you install white oak hardwood floors?",
        answer:
          "Yes. White oak is a popular option for Kansas City homeowners who want a durable floor with a warm, timeless look."
      }
    ],
    relatedServices: [
      "/custom-hardwood-floors-kansas-city",
      "/hardwood-floor-refinishing-kansas-city",
      "/hardwood-stairs-railings-kansas-city"
    ]
  },
  {
    slug: "hardwood-floor-repair-kansas-city",
    href: "/hardwood-floor-repair-kansas-city",
    title: "Hardwood Floor Repair",
    seoTitle: "Hardwood Floor Repair Kansas City",
    metaDescription:
      "Need hardwood floor repair in Kansas City? Noble Hardwoods repairs damaged boards, pet stains, water damage, loose planks, and lace-in hardwood to match existing floors.",
    eyebrow: "Repairs",
    h1: "Hardwood Floor Repair in Kansas City",
    intro:
      "From damaged boards to water spots and lace-in repairs, Noble Hardwoods helps Kansas City homeowners restore hardwood floors without replacing more than necessary.",
    image: "/images/projects/hardwood-stairs.jpg",
    imageAlt: "Detailed hardwood repair and stair work in a Kansas City home",
    includes: [
      "Board replacement",
      "Water damage review",
      "Pet stain repair planning",
      "Loose or squeaky board repair",
      "Lace-in repairs",
      "Repair versus refinish guidance"
    ],
    problems: [
      "Water-damaged boards",
      "Pet stains and dark spots",
      "Loose, cupped, cracked, or missing boards",
      "New hardwood areas that need to match old flooring"
    ],
    process: sharedProcess,
    faqs: [
      faqs[3],
      faqs[4],
      {
        question: "Can damaged hardwood boards be replaced?",
        answer:
          "Yes. Damaged boards can often be removed and replaced, then blended through sanding, stain, and finish work."
      },
      {
        question: "Is repair better than replacing the whole floor?",
        answer:
          "Often, yes. The right answer depends on the extent of damage, wood thickness, species availability, and the final look you want."
      }
    ],
    relatedServices: [
      "/hardwood-floor-refinishing-kansas-city",
      "/hardwood-floor-installation-kansas-city",
      "/dustless-hardwood-floor-refinishing-kansas-city"
    ]
  },
  {
    slug: "dustless-hardwood-floor-refinishing-kansas-city",
    href: "/dustless-hardwood-floor-refinishing-kansas-city",
    title: "Dustless Sanding",
    seoTitle: "Dustless Hardwood Floor Refinishing Kansas City",
    metaDescription:
      "Noble Hardwoods offers dustless hardwood floor refinishing and cleaner floor sanding for homes across Kansas City and surrounding areas.",
    eyebrow: "Dustless Sanding",
    h1: "Dustless Hardwood Floor Refinishing in Kansas City",
    intro:
      "A cleaner sanding process helps protect the home while worn hardwood floors are prepared for stain, finish, and renewed everyday use.",
    image: "/images/noble-hardwoods-hero.jpg",
    imageAlt: "Clean hardwood floors in a warm Kansas City living room",
    includes: [
      "Professional sanding equipment",
      "Cleaner worksite planning",
      "Prep and containment guidance",
      "Refinishing coordination",
      "Stain and finish planning",
      "Final care instructions"
    ],
    problems: [
      "Homeowners worried about sanding dust",
      "High-traffic rooms that need a cleaner refinishing plan",
      "Occupied homes where careful prep matters",
      "Floors ready for sanding, staining, and finish renewal"
    ],
    process: sharedProcess,
    faqs: [
      faqs[2],
      {
        question: "Is dustless sanding completely dust-free?",
        answer:
          "No sanding process is completely dust-free, but professional dustless equipment can greatly reduce airborne dust compared with traditional sanding."
      },
      faqs[1],
      {
        question: "Can dustless sanding be used before changing floor color?",
        answer:
          "Yes. Dustless sanding can prepare eligible hardwood floors for stain and finish changes."
      }
    ],
    relatedServices: [
      "/hardwood-floor-refinishing-kansas-city",
      "/hardwood-floor-repair-kansas-city",
      "/hardwood-floor-installation-kansas-city"
    ]
  },
  {
    slug: "hardwood-stairs-railings-kansas-city",
    href: "/hardwood-stairs-railings-kansas-city",
    title: "Stairs & Railings",
    seoTitle: "Hardwood Stairs and Railings Kansas City",
    metaDescription:
      "Noble Hardwoods installs and refinishes hardwood stairs, stair treads, railings, newel posts, balusters, and metal spindles in Kansas City homes.",
    eyebrow: "Stairs & Railings",
    h1: "Hardwood Stairs and Railings in Kansas City",
    intro:
      "Bring the same level of hardwood craftsmanship to stairs, railings, treads, risers, newel posts, balusters, and transitions.",
    image: "/images/projects/hardwood-stairs.jpg",
    imageAlt: "Hardwood stairs with black railings in a Kansas City home",
    includes: [
      "Hardwood stair treads",
      "Risers and landings",
      "Railing updates",
      "Newel posts and balusters",
      "Metal spindle coordination",
      "Stair refinishing and repair"
    ],
    problems: [
      "Worn or dated stair treads",
      "Stairs that do not match updated hardwood floors",
      "Loose, damaged, or mismatched rail components",
      "Homes that need a more finished entry or main staircase"
    ],
    process: sharedProcess,
    faqs: [
      faqs[5],
      {
        question: "Can stairs be refinished to match the floors?",
        answer:
          "Yes. Stairs can often be sanded, stained, and finished to coordinate with surrounding hardwood floors."
      },
      {
        question: "Do you install metal spindles?",
        answer:
          "Yes. Noble Hardwoods can help with stair updates that include wood rail components and metal spindle details."
      },
      {
        question: "Can stair treads be replaced?",
        answer:
          "Yes. Stair tread replacement depends on the existing construction, desired wood, railing details, and finish plan."
      }
    ],
    relatedServices: [
      "/hardwood-floor-installation-kansas-city",
      "/hardwood-floor-refinishing-kansas-city",
      "/custom-hardwood-floors-kansas-city"
    ]
  },
  {
    slug: "custom-hardwood-floors-kansas-city",
    href: "/custom-hardwood-floors-kansas-city",
    title: "Custom Hardwood Floors",
    seoTitle: "Custom Hardwood Floors Kansas City",
    metaDescription:
      "Noble Hardwoods creates custom hardwood floors in Kansas City, including herringbone, chevron, wide plank, and distinctive wood floor patterns.",
    eyebrow: "Custom Floors",
    h1: "Custom Hardwood Floors in Kansas City",
    intro:
      "For homes that need something distinctive, Noble Hardwoods plans and installs custom hardwood patterns with careful layout, proportion, and finish detail.",
    image: "/images/projects/kitchen-hardwood-floors.jpg",
    imageAlt: "Custom hardwood floors in a bright Kansas City kitchen",
    includes: [
      "Herringbone hardwood floors",
      "Chevron hardwood floors",
      "Wide plank planning",
      "Feature rooms and transitions",
      "Pattern layout guidance",
      "Custom stain and finish coordination"
    ],
    problems: [
      "Homes that need a more distinctive hardwood detail",
      "Formal rooms, entries, or kitchens needing stronger visual impact",
      "New flooring that should feel designed, not generic",
      "Pattern work that needs precise layout and finish planning"
    ],
    process: sharedProcess,
    faqs: [
      {
        question: "Do you install herringbone hardwood floors?",
        answer:
          "Yes. Herringbone floors require careful planning and layout, and Noble Hardwoods can help determine the right pattern scale for the room."
      },
      {
        question: "What is the difference between herringbone and chevron?",
        answer:
          "Herringbone uses rectangular boards in a broken zigzag pattern. Chevron boards are cut at an angle so the points meet cleanly."
      },
      {
        question: "Can custom floors be stained on site?",
        answer:
          "Yes. Many custom hardwood floors can be sanded, stained, and finished on site for a tailored look."
      },
      {
        question: "Are custom patterns more expensive?",
        answer:
          "Custom patterns usually require more labor, layout time, and material planning than standard straight-laid flooring."
      }
    ],
    relatedServices: [
      "/hardwood-floor-installation-kansas-city",
      "/hardwood-stairs-railings-kansas-city",
      "/hardwood-floor-refinishing-kansas-city"
    ]
  }
];

export const publicRoutes = [
  "/",
  "/contact",
  "/thank-you",
  "/services",
  "/projects",
  "/blog",
  "/stain-gallery",
  "/service-areas",
  "/about",
  "/privacy",
  ...featuredProjects.map((project) => project.href),
  ...blogPosts.map((post) => post.href),
  ...servicePages.map((service) => service.href)
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getServiceByHref(href: string) {
  return services.find((service) => service.href === href);
}

export function getAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, business.siteUrl).toString();
}

export function getFeaturedProjectSchema() {
  return featuredProjects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    url: getAbsoluteUrl(project.href),
    image: getAbsoluteUrl(project.image),
    about: "Hardwood flooring project"
  }));
}

export function getReviewSchema() {
  return reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name
    },
    reviewBody: review.quote,
    itemReviewed: {
      "@type": "HomeAndConstructionBusiness",
      name: business.name
    }
  }));
}

export function getAreaSchema() {
  return serviceAreas.map((area) => ({ "@type": "City", name: area }));
}
