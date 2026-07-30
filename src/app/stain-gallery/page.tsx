import type { Metadata } from "next";
import Link from "next/link";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { StainGallerySelector } from "@/components/StainGallerySelector";
import { getAbsoluteUrl } from "@/data/launch";
import { business } from "@/data/site";
import { durasealSourceUrl, durasealStains } from "@/data/stains";

export const metadata: Metadata = {
  title: "DuraSeal Stain Gallery and Color Selector",
  description:
    "Explore DuraSeal hardwood floor stain colors for White Oak and Red Oak before your Noble Hardwoods consultation in Kansas City.",
  alternates: {
    canonical: "/stain-gallery"
  },
  openGraph: {
    title: "DuraSeal Stain Gallery | Noble Hardwoods",
    description:
      "Compare hardwood floor stain color directions for White Oak and Red Oak before your Kansas City hardwood floor quote.",
    url: "/stain-gallery",
    images: [{ url: "/images/projects/living-room-hardwood-floors.jpg" }]
  }
};

export default function StainGalleryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DuraSeal Stain Gallery and Color Selector",
    url: getAbsoluteUrl("/stain-gallery"),
    isPartOf: {
      "@type": "WebSite",
      name: business.name,
      url: business.siteUrl
    },
    hasPart: durasealStains.map((stain) => ({
      "@type": "Thing",
      name: stain.name,
      description: `${stain.name} DuraSeal hardwood floor stain shown on White Oak and Red Oak`
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Stain Gallery", href: "/stain-gallery" }]} />

      <section className="bg-[linear-gradient(115deg,#fffdf8_0%,#f7f4ef_58%,#efe0c7_100%)] py-12 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:gap-10 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              DuraSeal Stain Gallery
            </p>
            <h1 className="mt-5 max-w-3xl text-[2.35rem] font-black uppercase leading-[0.96] tracking-normal text-noble-ink min-[390px]:text-[2.65rem] sm:mt-6 sm:text-6xl">
              Hardwood stain colors for Kansas City homes.
            </h1>
          </div>
          <div className="bg-white/72 p-5 shadow-soft backdrop-blur sm:p-6">
            <p className="text-[0.95rem] leading-7 text-noble-ink/70 sm:text-base sm:leading-8">
              Compare DuraSeal&apos;s manufacturer samples on White Oak and Red Oak before your
              quote or consultation. Select any color to see both species side by side, then
              narrow the gallery by tone or name.
            </p>
            <Link
              href={durasealSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink transition hover:text-noble-orange"
            >
              View official DuraSeal gallery <ArrowMark />
            </Link>
            <details className="group mt-5 border-t border-noble-ink/10 pt-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-extrabold uppercase tracking-[0.12em] text-noble-ink">
                About these digital swatches
                <span className="text-lg font-normal text-noble-orange group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-noble-ink/62">
                These are DuraSeal&apos;s official digital sample images, locally optimized for
                faster browsing. Natural wood, sanding, application, finish, room lighting, and
                your screen can all change how the final color appears.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="stain-selector" className="bg-cream-50 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <StainGallerySelector />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Choosing a stain
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-normal text-noble-ink sm:text-5xl">
              Samples in your home still matter.
            </h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-noble-ink/68">
            <p>
              Online swatches are useful for narrowing a direction, but hardwood stain needs
              to be reviewed with the actual floor, room light, species, and finish plan.
              In-home samples are the best way to confirm the final stain choice before work
              begins.
            </p>
            <p>
              If stain color matters to the project, mention your favorite colors in the quote
              form and Noble Hardwoods can talk through practical sample options.
            </p>
          </div>
          <p className="mx-auto mt-10 max-w-4xl border-t border-noble-ink/12 pt-5 text-xs leading-6 text-noble-ink/52 lg:col-span-2">
            Sample photography and product names are sourced from the official DuraSeal stain
            gallery. DuraSeal is a trademark of its respective owner. Noble Hardwoods is not
            affiliated with or endorsed by DuraSeal or Sherwin-Williams. This gallery is for color
            planning; an in-home sample should be used for final approval.
          </p>
        </div>
      </section>

      <CTABand
        title="Have a stain color in mind?"
        text="Send your quote request and include any colors or floor photos that help explain the look you want."
      />
    </>
  );
}
