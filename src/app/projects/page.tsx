import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { InteriorHero } from "@/components/InteriorHero";
import { JsonLd } from "@/components/JsonLd";
import { getAbsoluteUrl, getFeaturedProjectSchema } from "@/data/launch";
import { featuredProjects, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Hardwood Flooring Projects in Kansas City",
  description:
    "Explore Noble Hardwoods project examples for hardwood floor refinishing, installation, stairs, repairs, and custom floors across the Kansas City metro.",
  alternates: {
    canonical: "/projects"
  },
  openGraph: {
    title: "Hardwood Flooring Projects in Kansas City | Noble Hardwoods",
    description:
      "Recent hardwood flooring project examples from Noble Hardwoods across Kansas City and nearby areas.",
    url: "/projects",
    images: [{ url: "/images/project-flooring/apartment-office-hardwood-floor.webp" }]
  }
};

const completedRoomPhotos = [
  {
    src: "/images/project-flooring/apartment-bedroom-hardwood-floor.webp",
    alt: "Natural hardwood flooring in a bright apartment bedroom",
    label: "Apartment bedroom"
  },
  {
    src: "/images/project-flooring/guillen-home-kitchen-hardwood-floor-2.webp",
    alt: "Warm hardwood flooring running through the Guillen home kitchen",
    label: "Guillen home kitchen"
  }
];

export default function ProjectsPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hardwood Flooring Projects in Kansas City",
    url: getAbsoluteUrl("/projects"),
    hasPart: getFeaturedProjectSchema()
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />
      <InteriorHero
        eyebrow="Project Proof"
        title="Real floors. Real Kansas City homes."
        text="Browse a few recent hardwood flooring projects from Noble Hardwoods, including installation, refinishing, stairs, and custom details."
        image="/images/project-flooring/apartment-office-hardwood-floor.webp"
        imageAlt="Finished hardwood floors in a bright apartment office"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="carpenter-card group block"
                data-reveal
              >
                <div className="relative aspect-[1.22/1] overflow-hidden bg-noble-mist">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-5 border-t border-noble-ink/12 pt-5">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
                      {project.city} / {project.date}
                    </p>
                    <h2 className="mt-3 text-xl font-extrabold uppercase leading-tight text-noble-ink">
                      {project.title}
                    </h2>
                  </div>
                  <span className="shrink-0 text-xs font-black uppercase tracking-[0.18em] text-noble-orange">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-7 text-noble-ink/68">
                  {project.summary}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 border-t border-noble-ink/12 pt-10 sm:mt-20 sm:pt-12">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
                More completed spaces
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-noble-ink sm:text-4xl">
                The floor changes how the whole room feels.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {completedRoomPhotos.map((photo) => (
                <figure key={photo.src}>
                  <div className="relative aspect-[1.5/1] overflow-hidden bg-noble-mist">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-noble-ink/60">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-noble-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Services Behind the Work
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] tracking-normal text-noble-ink">
              From worn floors to finished rooms.
            </h2>
          </div>
          <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white p-6 text-sm font-extrabold uppercase text-noble-ink transition hover:bg-cream-50 hover:text-noble-orange"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Have a project like this in mind?"
        text="Send details about your rooms, timeline, and floor condition. Photos are welcome."
      />
    </>
  );
}
