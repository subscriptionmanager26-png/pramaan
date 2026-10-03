import Link from "next/link";
import type { Creator } from "@/lib/types";
import { countContent } from "@/lib/data";
import { Avatar } from "./Avatar";
import { SebiBadge } from "./SebiBadge";
import { SourceIcon } from "./SourceIcon";

export function CreatorCard({
  creator,
  variant = "card",
}: {
  creator: Creator;
  variant?: "card" | "row";
}) {
  const pieces = countContent(creator.slug);

  if (variant === "row") {
    return (
      <Link href={`/creators/${creator.slug}`} className="group flex items-start gap-3 py-3.5">
        <Avatar creator={creator} />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-[14px] font-medium text-ink group-hover:text-accent">{creator.name}</span>
            <SebiBadge type={creator.sebi.type} />
          </span>
          <span className="mt-1 block text-[13px] text-ink-2">{creator.specialties.slice(0, 3).join(" · ")}</span>
          <span className="mt-1.5 flex items-center gap-2 text-[12px] text-ink-3">
            <span>
              {pieces} indexed {pieces === 1 ? "piece" : "pieces"}
            </span>
            <span className="flex gap-1">
              {creator.sources.map((s) => (
                <SourceIcon key={s.kind} kind={s.kind} />
              ))}
            </span>
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="group block rounded-xl border border-line bg-white p-4 transition-colors hover:bg-paper-2"
    >
      <div className="flex items-start gap-3">
        <Avatar creator={creator} size="lg" />
        <div className="min-w-0">
          <p className="text-[14px] font-medium tracking-tight text-ink group-hover:text-accent">{creator.name}</p>
          <div className="mt-1.5">
            <SebiBadge type={creator.sebi.type} />
          </div>
          <p className="mt-2 text-[13px] leading-5 text-ink-2">{creator.specialties.slice(0, 3).join(" · ")}</p>
          <div className="mt-3 flex items-center justify-between gap-2 text-[12px] text-ink-3">
            <span>
              {pieces} indexed {pieces === 1 ? "piece" : "pieces"}
            </span>
            <span className="flex gap-1.5">
              {creator.sources.map((s) => (
                <SourceIcon key={s.kind} kind={s.kind} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
