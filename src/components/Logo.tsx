import Image from "next/image";
import Link from "next/link";

export function Logo() {
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
    </div>
  );
}
