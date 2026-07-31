import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Noble Hardwoods home">
      <Image
        src="/images/brand/noble-tiger-full-copy.svg"
        alt=""
        width={864}
        height={864}
        priority
        className="size-10 shrink-0 sm:size-12"
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
  );
}
