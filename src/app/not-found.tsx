import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { business, services } from "@/data/site";

export default function NotFound() {
  return (
    <section className="bg-noble-mist">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl gap-10 px-5 py-16 sm:min-h-[calc(100svh-6rem)] sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
            Page not found
          </p>
          <h1 className="mt-5 text-[2.65rem] font-black uppercase leading-[0.98] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
            This page is not on the floor plan.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-noble-ink/68">
            The page may have moved, but you can still get to the main hardwood services,
            projects, or quote request.
          </p>
          <div className="mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href={business.phoneHref} variant="secondary">
              Call {business.phone}
            </ButtonLink>
          </div>
        </div>
        <div className="border border-noble-ink/12 bg-white p-6">
          <h2 className="font-serif text-3xl leading-tight text-noble-ink">
            Hardwood services
          </h2>
          <div className="mt-6 grid gap-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="border-b border-noble-ink/10 py-3 text-sm font-extrabold text-noble-ink transition last:border-b-0 hover:text-noble-orange"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
