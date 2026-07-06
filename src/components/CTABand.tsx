import { business } from "@/data/site";
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
    <section className="relative overflow-hidden bg-noble-ink py-0 text-white">
      <div className="absolute inset-0 carpenter-line-art opacity-90" />
      <div className="relative mx-auto grid min-h-[36rem] max-w-[76.25rem] gap-8 px-5 py-20 sm:px-6 lg:grid-cols-[1fr_auto_0.82fr] lg:items-center lg:px-8 xl:px-0">
        <div className="max-w-2xl">
          <p className="carpenter-eyebrow mb-6 text-white/82">Get a free quote</p>
          <h2 className="carpenter-title text-5xl font-bold sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/78">{text}</p>
        </div>
        <div className="hidden h-40 w-px bg-white/35 lg:block" />
        <div className="flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row lg:justify-end">
          <ButtonLink href="/contact" variant="primary" className="px-10">
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
