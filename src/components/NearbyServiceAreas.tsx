import Link from "next/link";
import { ArrowMark } from "./ArrowMark";
import type { ServiceAreaPage } from "@/data/serviceAreaPages";

type NearbyServiceAreasProps = {
  areas: ServiceAreaPage[];
};

export function NearbyServiceAreas({ areas }: NearbyServiceAreasProps) {
  if (!areas.length) return null;

  return (
    <section className="bg-noble-mist py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
              Nearby service areas
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-none text-noble-ink sm:text-4xl">
              Noble works throughout the metro.
            </h2>
          </div>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.1em] text-noble-ink transition hover:text-noble-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
          >
            All service areas <ArrowMark />
          </Link>
        </div>
        <div className="mt-8 grid gap-px bg-noble-ink/12 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={area.href}
              className="group bg-white p-5 transition duration-300 hover:bg-cream-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-noble-orange"
            >
              <p className="font-bold text-noble-ink transition group-hover:text-noble-orange">
                {area.city}, {area.state}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-noble-ink/55">
                {area.projectCount}+ completed projects
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
