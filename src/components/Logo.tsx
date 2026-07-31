import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/site";

type LogoProps = {
  showOwnership?: boolean;
};

export function Logo({ showOwnership = false }: LogoProps) {
  return (
    <div className="inline-grid grid-cols-[2.75rem_auto] gap-x-2.5 sm:grid-cols-[3.5rem_auto]">
      <Link
        href="/"
        className="col-span-2 grid grid-cols-[2.75rem_auto] items-center gap-x-2.5 sm:grid-cols-[3.5rem_auto]"
        aria-label="Noble Hardwoods home"
      >
        <Image
          src="/images/brand/noble-tiger-full-copy.svg"
          alt=""
          width={864}
          height={864}
          priority
          className="size-11 shrink-0 translate-y-1.5 sm:size-14 sm:translate-y-1"
        />
        <Image
          src="/images/brand/noble-wordmark.png"
          alt=""
          width={190}
          height={84}
          priority
          className="h-auto w-24 sm:w-32"
        />
      </Link>

      {showOwnership ? (
        <Link
          href={business.zeraServicesHref}
          className="col-start-2 mt-0.5 w-fit text-[0.48rem] font-extrabold uppercase leading-none tracking-[0.14em] text-noble-orange transition hover:text-noble-ink sm:text-[0.58rem]"
        >
          {business.ownershipLabel}
        </Link>
      ) : null}
    </div>
  );
}
