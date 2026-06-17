import { business } from "@/data/site";
import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type CTABandProps = {
  title?: string;
  text?: string;
};

export function CTABand({
  title = "Let's bring your vision to life.",
  text = "Send a few details about your project and the Noble Hardwoods team will follow up."
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-noble-ink py-14 text-white sm:py-16">
      <div className="absolute inset-0">
        <Image
          src="/images/textures/wood-grain.jpg"
          alt=""
          fill
          sizes="100vw"
          className="size-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-noble-ink/55" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-white/82">{text}</p>
        </div>
        <div className="hidden h-28 w-px bg-white/42 lg:block" />
        <div className="flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
          <ButtonLink href="/contact" variant="primary" className="min-h-16 px-10">
            Get a free quote
          </ButtonLink>
          <ButtonLink href={business.phoneHref} variant="light">
            Call {business.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
