import Link from "next/link";
import { ArrowMark } from "./ArrowMark";
import { featuredProjects } from "@/data/site";

type LocationProjectSpotlightProps = {
  city: string;
  state: string;
  projectSlugs: string[];
};

export function LocationProjectSpotlight({
  city,
  state,
  projectSlugs
}: LocationProjectSpotlightProps) {
  const projects = projectSlugs
    .map((slug) => featuredProjects.find((project) => project.slug === slug))
    .filter((project): project is (typeof featuredProjects)[number] => Boolean(project));

  if (!projects.length) return null;

  return (
    <section className="bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
              Documented local work
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-bold uppercase leading-[0.96] text-noble-ink sm:text-5xl">
              A project from {city}.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-noble-ink/68">
            See the documented scope, services, and finish goals from Noble’s work in {city},{" "}
            {state}.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="grid overflow-hidden border border-noble-ink/10 bg-white lg:grid-cols-[0.34fr_1.66fr]"
            >
              <div className="flex min-h-44 flex-col justify-between bg-noble-ink p-7 text-white sm:p-9">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-noble-orange">
                  Documented project
                </p>
                <p className="mt-10 font-mono text-5xl font-bold tabular-nums text-white/18">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-noble-orange">
                  {project.category} · {project.date}
                </p>
                <h3 className="mt-4 text-3xl font-bold leading-tight text-noble-ink">
                  {project.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-noble-ink/68">{project.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-noble-ink/12 pt-6">
                  {project.scope.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-noble-ink/72">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-noble-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.href}
                  className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.1em] text-noble-ink transition hover:text-noble-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
                >
                  View project details <ArrowMark />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
