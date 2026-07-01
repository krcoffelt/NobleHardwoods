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
      description: `${stain.name} hardwood floor stain color direction`
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Stain Gallery", href: "/stain-gallery" }]} />

      <section className="bg-[linear-gradient(115deg,#fffdf8_0%,#f7f4ef_58%,#efe0c7_100%)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              DuraSeal Stain Gallery
            </p>
            <h1 className="mt-6 max-w-3xl text-[2.65rem] font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
              Hardwood stain colors for Kansas City homes.
            </h1>
          </div>
          <div className="bg-white/72 p-6 shadow-soft backdrop-blur">
            <p className="text-base leading-8 text-noble-ink/70">
              Use this selector to compare common DuraSeal stain directions on White Oak and
              Red Oak before your quote or consultation. Final stain color can vary by wood
              species, age, sanding, finish system, lighting, and screen display.
            </p>
            <Link
              href={durasealSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink transition hover:text-noble-orange"
            >
              View official DuraSeal gallery <ArrowMark />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-16 sm:py-20">
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
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink sm:text-5xl">
              Samples in your home still matter.
            </h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-noble-ink/68">
            <p>
              Online swatches are useful for narrowing a direction, but hardwood stain needs
              to be reviewed with the actual floor, room light, species, and finish plan.
            </p>
            <p>
              If stain color matters to the project, mention your favorite colors in the quote
              form and Noble Hardwoods can talk through practical sample options.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Have a stain color in mind?"
        text="Send your quote request and include any colors or floor photos that help explain the look you want."
      />
    </>
  );
}
