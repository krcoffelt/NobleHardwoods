import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site";

type RelatedServicesProps = {
  currentHref?: string;
  hrefs?: string[];
  title?: string;
};

export function RelatedServices({
  currentHref,
  hrefs,
  title = "Related hardwood services"
}: RelatedServicesProps) {
  const related = hrefs
    ? hrefs.map((href) => services.find((service) => service.href === href)).filter(Boolean)
    : services.filter((service) => service.href !== currentHref).slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
              Services
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-noble-ink">
              {title}
            </h2>
          </div>
          <Link
            href="/#services"
            className="inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink hover:text-noble-orange"
          >
            View all services <span className="text-2xl">-&gt;</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((service) =>
            service ? (
              <Link
                key={service.href}
                href={service.href}
                className="group border border-noble-ink/12 bg-white p-6 transition hover:border-noble-orange hover:bg-noble-mist"
              >
                <Image src={service.icon} alt="" width={52} height={52} className="size-12" />
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-noble-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-noble-ink/68">{service.description}</p>
                <span className="mt-5 inline-flex text-sm font-extrabold uppercase text-noble-ink group-hover:text-noble-orange">
                  Learn more -&gt;
                </span>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
