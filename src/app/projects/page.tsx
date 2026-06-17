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
    images: [{ url: "/images/projects/living-room-hardwood-floors.jpg" }]
  }
};

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
        image="/images/projects/living-room-hardwood-floors.jpg"
        imageAlt="Finished hardwood floors in a bright Kansas City living room"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="group border border-noble-ink/10 bg-white p-4 transition hover:-translate-y-1 hover:border-noble-orange/35 hover:shadow-soft"
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
                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
                      {project.city} / {project.date}
                    </p>
                    <h2 className="mt-3 text-xl font-extrabold uppercase leading-tight text-noble-ink">
                      {project.title}
                    </h2>
                  </div>
                  <span className="shrink-0 text-xs font-black uppercase tracking-[0.18em] text-noble-ink/35">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-7 text-noble-ink/68">
                  {project.summary}
                </p>
              </Link>
            ))}
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
