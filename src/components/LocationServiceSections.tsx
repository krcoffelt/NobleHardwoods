import Link from "next/link";
import { ArrowMark } from "./ArrowMark";
import type { ServiceAreaPage } from "@/data/serviceAreaPages";
import { services } from "@/data/site";

export function LocationServiceSections({ area }: { area: ServiceAreaPage }) {
  return (
    <section className="bg-noble-mist py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
              Services in {area.city}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold uppercase leading-[0.96] text-noble-ink sm:text-5xl">
              One team for the full hardwood project.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-noble-ink/68">
            {area.serviceIntro ??
              "Start with the floor condition and the result you want. Noble will help determine whether the right next step is repair, refinishing, installation, or more detailed custom work."}
          </p>
        </div>

        <div className="mt-10 grid border-t border-noble-ink/14 md:grid-cols-2">
          {services.map((service, index) => {
            const localContent = area.serviceContent.find(
              (content) => content.serviceHref === service.href
            );
            const heading = localContent?.heading ?? `${service.title} in ${area.city}`;
            const text = localContent?.text ?? service.description;

            return (
              <article
                key={service.href}
                className={`group flex min-h-64 flex-col border-b border-noble-ink/14 py-8 md:px-8 ${
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                }`}
              >
                <div className="flex items-center justify-between gap-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-noble-orange">
                    {service.eyebrow}
                  </p>
                  <span className="font-mono text-xs tabular-nums text-noble-ink/36">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-tight text-noble-ink">{heading}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-noble-ink/68">{text}</p>
                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-3 pt-7 text-xs font-extrabold uppercase tracking-[0.1em] text-noble-ink transition group-hover:text-noble-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
                >
                  Explore {service.title.toLowerCase()} <ArrowMark />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
