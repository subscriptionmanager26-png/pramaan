import type { ContentItem, Creator } from "@/lib/types";
import { SourceIcon } from "./SourceIcon";

export function Thumb({
  item,
  creator,
  className = "",
}: {
  item: ContentItem;
  creator: Creator;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden text-white ${className}`}
      style={{ background: creator.color }}
    >
      <span className="text-2xl font-semibold tracking-tight opacity-80">{creator.initials}</span>
      <span className="absolute left-2 top-2 rounded-full bg-black/25 p-1">
        <SourceIcon kind={item.source} className="h-3 w-3" />
      </span>
      {item.source === "youtube" || item.source === "podcast" ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <svg viewBox="0 0 12 12" className="h-3.5 w-3.5 translate-x-px fill-white">
              <path d="M3 1.5v9l8-4.5-8-4.5z" />
            </svg>
          </span>
        </span>
      ) : null}
    </div>
  );
}
