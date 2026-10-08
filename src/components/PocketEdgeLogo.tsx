import Image from "next/image";
import Link from "next/link";

const POCKETEDGE_HOME = "https://www.pocketedge.in";

export function PocketEdgeLogo({
  className = "",
  linked = true,
}: {
  className?: string;
  /** When true, links to pocketedge.in (default on Tools). */
  linked?: boolean;
}) {
  const img = (
    <Image
      src="/pocketedge-logo.png"
      alt="PocketEdge"
      width={140}
      height={44}
      className={`h-9 w-auto object-contain object-left ${className}`}
      priority
    />
  );

  if (!linked) return img;

  return (
    <a
      href={POCKETEDGE_HOME}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center"
      aria-label="PocketEdge (opens in new tab)"
    >
      {img}
    </a>
  );
}
