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
    <section className="overflow-hidden bg-[linear-gradient(115deg,#fffdf8_0%,#f7f4ef_55%,#efe0c7_100%)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8 lg:py-14">
        <div className="min-w-0">
          <div className="inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 border border-noble-orange/30 bg-white/55 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
            <span>{eyebrow}</span>
          </div>
          <h1 className="mt-7 max-w-3xl text-[2.45rem] font-black uppercase leading-[0.96] tracking-[-0.035em] text-noble-ink min-[390px]:text-5xl sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-noble-ink/68">{text}</p>
          <div className="mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <ButtonLink href={ctaHref} className="min-h-14 px-8 active:translate-y-px">
              {ctaLabel}
            </ButtonLink>
            <ButtonLink href={business.phoneHref} variant="secondary" className="min-h-14 px-8 active:translate-y-px">
              Call {business.phone}
            </ButtonLink>
          </div>
        </div>

        <div className="noble-shadow relative mx-auto w-full max-w-xl bg-white/55 p-2 lg:max-w-none">
          <div className="relative aspect-[1.28/1] overflow-hidden bg-noble-mist">
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
