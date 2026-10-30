import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  // Display utilities must live on the wrapper — Logo always uses inline-flex,
  // so callers should hide/show with an outer element (hidden / lg:hidden).
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Home">
      <Image
        src="/pocketedge-logo.png"
        alt="PocketEdge"
        width={132}
        height={36}
        className="h-8 w-auto max-w-[7.5rem] object-contain object-left sm:h-9 sm:max-w-none"
        priority
      />
    </Link>
  );
}
