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
    <section className="cta-woodgrain relative overflow-hidden text-white">
      <div className="relative mx-auto grid min-h-[20rem] max-w-[78rem] gap-7 px-5 py-12 sm:min-h-[26rem] sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-8 xl:px-0">
        <div className="max-w-2xl" data-reveal>
          <p className="carpenter-eyebrow mb-5 text-white/82 sm:mb-6">Get a free quote</p>
          <h2 className="carpenter-title text-[2.25rem] font-bold sm:text-6xl lg:text-[4.25rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-white/78 sm:mt-6 sm:text-base sm:leading-8">{text}</p>
        </div>
        <div className="flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row lg:justify-end" data-reveal>
          <ButtonLink href="/contact" variant="primary" className="w-full px-8 sm:w-auto sm:px-10">
            Get a free quote
          </ButtonLink>
          <ButtonLink href={business.phoneHref} variant="light" className="hidden sm:inline-flex">
            Call {business.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
