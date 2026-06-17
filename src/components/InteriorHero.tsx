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
};

export function InteriorHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  ctaHref = "/contact",
  ctaLabel = "Get a free quote"
}: InteriorHeroProps) {
  return (
    <section className="overflow-hidden bg-noble-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-20">
        <div className="min-w-0">
          <div className="flex max-w-full flex-wrap items-center gap-x-6 gap-y-3 text-sm font-extrabold uppercase tracking-[0.16em] text-noble-orange">
            <span>{eyebrow}</span>
            <span className="h-0.5 w-14 shrink-0 bg-noble-orange" />
          </div>
          <h1 className="mt-7 max-w-3xl text-[2.65rem] font-black uppercase leading-[0.98] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-noble-ink/68">{text}</p>
          <div className="mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
            <ButtonLink href={ctaHref} className="min-h-14 px-8">
              {ctaLabel}
            </ButtonLink>
            <ButtonLink href={business.phoneHref} variant="secondary" className="min-h-14 px-8">
              Call {business.phone}
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-[1.18/1] w-full max-w-xl overflow-hidden bg-white shadow-soft lg:max-w-none">
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
    </section>
  );
}
