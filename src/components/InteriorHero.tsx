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
    <section className="relative overflow-hidden bg-noble-ink text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(239,95,61,0.35),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(239,95,61,0.16),transparent_28%)]" />
      </div>
      <div className="relative mx-auto grid max-w-[76.25rem] gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[48rem] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24 xl:px-0">
        <div className="min-w-0">
          <div className="carpenter-eyebrow max-w-full text-noble-orange">
            <span>{eyebrow}</span>
          </div>
          <h1 className="carpenter-title mt-7 max-w-4xl text-[3.25rem] font-bold uppercase text-white min-[390px]:text-6xl sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">{text}</p>
          <div className="mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <ButtonLink href={ctaHref} className="px-8">
              {ctaLabel}
            </ButtonLink>
            <ButtonLink href={business.phoneHref} variant="light" className="px-8">
              Call {business.phone}
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[0.96/1] overflow-hidden bg-noble-mist shadow-[0_36px_100px_rgba(0,0,0,0.28)] lg:min-h-[35rem]">
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
