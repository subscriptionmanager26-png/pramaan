import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Home">
      <Image
        src="/pocketedge-logo.png"
        alt="PocketEdge"
        width={132}
        height={36}
        className="h-8 w-auto object-contain object-left sm:h-9"
        priority
      />
    </Link>
  );
}
