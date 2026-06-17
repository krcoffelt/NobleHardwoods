import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site";
import { ArrowMark } from "./ArrowMark";

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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div>
            <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink sm:text-5xl">
              {title}
            </h2>
          </div>
          <Link
            href="/#services"
            className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink hover:text-noble-orange"
          >
            View all services <ArrowMark />
          </Link>
        </div>

        <div className="mt-10 grid gap-px bg-noble-ink/12 md:grid-cols-3">
          {related.map((service) =>
            service ? (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white p-6 transition duration-300 hover:bg-noble-mist active:translate-y-px"
              >
                <Image src={service.icon} alt="" width={52} height={52} className="size-12" />
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-noble-orange">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-noble-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-noble-ink/68">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase text-noble-ink group-hover:text-noble-orange">
                  Learn more <ArrowMark />
                </span>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
