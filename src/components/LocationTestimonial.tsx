import Link from "next/link";
import type { LocalReview } from "@/data/serviceAreaPages";

type LocationTestimonialProps = {
  city: string;
  review?: LocalReview;
};

export function LocationTestimonial({ city, review }: LocationTestimonialProps) {
  if (!review) return null;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
            From a {city} homeowner
          </p>
          <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.96] text-noble-ink sm:text-5xl">
            Local experience, in their words.
          </h2>
        </div>
        <figure className="relative overflow-hidden bg-cream-50 p-7 sm:p-10">
          <span
            aria-hidden="true"
            className="absolute right-5 top-1 text-8xl font-bold leading-none text-noble-orange/10"
          >
            “
          </span>
          <blockquote className="relative max-w-3xl text-xl font-bold leading-8 text-noble-ink sm:text-2xl sm:leading-9">
            {review.quote}
          </blockquote>
          <figcaption className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-noble-orange">
            {review.name} · {review.detail}
          </figcaption>
          {review.sourceUrl ? (
            <Link
              href={review.sourceUrl}
              className="mt-5 inline-flex text-xs font-bold text-noble-ink/60 underline transition hover:text-noble-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
            >
              View review source
            </Link>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
