import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowMark } from "@/components/ArrowMark";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { getAbsoluteUrl } from "@/data/launch";
import { featuredProjects, services } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ projectSlug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ projectSlug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = featuredProjects.find((item) => item.slug === projectSlug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: project.href
    },
    openGraph: {
      title: `${project.title} | Noble Hardwoods`,
      description: project.summary,
      url: project.href,
      images: [{ url: project.image }]
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { projectSlug } = await params;
  const project = featuredProjects.find((item) => item.slug === projectSlug);

  if (!project) notFound();

  const relatedServices = project.relatedServices
    .map((href) => services.find((service) => service.href === href))
    .filter(Boolean);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: getAbsoluteUrl(project.href),
    image: getAbsoluteUrl(project.image),
    about: "Hardwood flooring project",
    locationCreated: project.city
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title, href: project.href }
        ]}
      />

      <section className="bg-[linear-gradient(115deg,#fffdf8_0%,#f7f4ef_58%,#efe0c7_100%)] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              {project.city} / {project.category} / {project.date}
            </p>
            <h1 className="mt-6 max-w-3xl text-[2.65rem] font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-noble-ink/68">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center bg-noble-orange px-8 text-sm font-extrabold text-white transition hover:bg-noble-orange-dark"
              >
                Start a similar project <ArrowMark className="ml-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex min-h-14 items-center justify-center border border-noble-ink/14 bg-white px-8 text-sm font-extrabold text-noble-ink transition hover:border-noble-orange hover:text-noble-orange"
              >
                View all projects
              </Link>
            </div>
          </div>

          <div className="relative aspect-[1.18/1] overflow-hidden border-[10px] border-white bg-white noble-shadow">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Project Scope
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] text-noble-ink">
              Hardwood work planned around the home.
            </h2>
          </div>
          <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-3">
            {project.scope.map((item) => (
              <div key={item} className="bg-white p-6">
                <p className="text-sm font-extrabold leading-7 text-noble-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noble-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="w-fit border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
              Related Services
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.96] text-noble-ink">
              Services behind this project.
            </h2>
          </div>
          <div className="grid gap-px bg-noble-ink/12 sm:grid-cols-2">
            {relatedServices.map((service) =>
              service ? (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white p-6 transition hover:bg-cream-50"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-black uppercase leading-tight text-noble-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-noble-ink/68">
                    {service.description}
                  </p>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      <CTABand
        title="Have a project like this in mind?"
        text="Send details about your home, timeline, and floor condition. Noble Hardwoods will help with the next step."
      />
    </>
  );
}
