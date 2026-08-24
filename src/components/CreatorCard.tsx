import Link from "next/link";
import type { Creator } from "@/lib/types";
import { countContent } from "@/lib/data";
import { Avatar } from "./Avatar";
import { SebiBadge } from "./SebiBadge";
import { SourceIcon } from "./SourceIcon";

export function CreatorCard({ creator }: { creator: Creator }) {
  const pieces = countContent(creator.slug);
  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="group border border-line bg-white/70 p-4 transition-colors hover:border-navy/30"
    >
      <div className="flex items-start gap-3">
        <Avatar creator={creator} size="lg" />
        <div className="min-w-0">
          <p className="font-medium tracking-tight text-navy group-hover:text-accent">{creator.name}</p>
          <div className="mt-1.5">
            <SebiBadge type={creator.sebi.type} />
          </div>
          <p className="mt-2 text-sm leading-5 text-ink-2">{creator.specialties.join(" · ")}</p>
          <div className="mt-3 flex items-center justify-between gap-2 text-xs text-ink-3">
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
