import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Noble Hardwoods home">
      <Image
        src="/images/brand/noble-wordmark.png"
        alt="Noble Hardwoods"
        width={190}
        height={84}
        priority
        className="h-auto w-32 sm:w-36"
      />
    </Link>
  );
}
