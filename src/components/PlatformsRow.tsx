import type { SourceKind } from "@/lib/types";
import { sourceLabel } from "@/lib/utils";
import { SourceIcon } from "./SourceIcon";

const platforms: SourceKind[] = ["twitter", "substack", "youtube", "podcast"];

export function PlatformsRow({
  className = "",
  muted = false,
}: {
  className?: string;
  muted?: boolean;
}) {
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-2 ${className}`}>
      {platforms.map((kind) => (
        <li
          key={kind}
          className={`inline-flex items-center gap-1.5 text-xs ${muted ? "text-white/65" : "text-ink-3"}`}
        >
          <SourceIcon kind={kind} />
          {sourceLabel(kind)}
        </li>
      ))}
    </ul>
  );
}
