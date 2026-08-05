import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { business } from "@/data/site";

type InteriorHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  proof?: {
    value: string;
    label: string;
    note?: string;
  };
};

export function InteriorHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  ctaHref = "/contact",
  ctaLabel = "Get a free quote",
  proof
}: InteriorHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream-50 text-noble-ink">
      <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-noble-mist lg:block" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[78rem] gap-8 px-5 pb-10 pt-11 sm:gap-10 sm:px-6 sm:py-20 lg:min-h-[38rem] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8 xl:px-0">
        <div className="hero-enter-copy min-w-0">
          <div className="carpenter-eyebrow max-w-full text-noble-orange">
            <span>{eyebrow}</span>
          </div>
          <h1 className="carpenter-title mt-5 max-w-4xl text-[2.55rem] font-bold text-noble-ink min-[390px]:text-[2.85rem] sm:mt-6 sm:text-6xl lg:text-[4.25rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-noble-ink/68 sm:mt-6 sm:text-base sm:leading-8">{text}</p>
          {proof ? (
            <dl className="mt-6 flex max-w-md items-center gap-4 border-y border-noble-ink/15 py-4 sm:mt-7">
              <div className="shrink-0 border-r border-noble-ink/15 pr-4">
                <dt className="sr-only">Completed project count</dt>
                <dd className="text-3xl font-bold tabular-nums tracking-[-0.04em] text-noble-orange sm:text-4xl">
                  {proof.value}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Local experience</dt>
                <dd className="max-w-[15rem] text-xs font-bold uppercase leading-5 tracking-[0.11em] text-noble-ink/72">
                  {proof.label}
                </dd>
                {proof.note ? (
                  <dd className="mt-1 text-[0.68rem] font-medium leading-4 text-noble-ink/48">
                    {proof.note}
                  </dd>
                ) : null}
              </div>
            </dl>
          ) : null}
          <div className="mt-7 flex max-w-sm gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:items-center">
            <ButtonLink href={ctaHref} className="w-full px-6 sm:w-auto sm:px-8">
              {ctaLabel}
            </ButtonLink>
            <ButtonLink href={business.phoneHref} variant="secondary" className="hidden px-8 sm:inline-flex">
              Call {business.phone}
            </ButtonLink>
          </div>
        </div>

        <div className="hero-enter-media relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[1.42/1] overflow-hidden bg-noble-mist shadow-[0_24px_70px_rgba(87,51,31,0.14)] sm:aspect-[1.35/1] lg:min-h-[31rem]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
