import type { ContentItem, Creator } from "@/lib/types";
import { sourceLabel } from "@/lib/utils";

export function Poster({
  item,
  creator,
  className = "",
  quiet = false,
}: {
  item: ContentItem;
  creator: Creator;
  className?: string;
  quiet?: boolean;
}) {
  return (
    <div
      className={`grain relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(165deg, ${creator.color} 0%, #120f0c 85%)`,
      }}
    >
      <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-cream/10" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative flex h-full min-h-[180px] flex-col justify-between p-5 text-cream">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{sourceLabel(item.source)}</p>
        {quiet ? (
          <p className="font-serif text-7xl leading-none text-cream/25">{creator.initials}</p>
        ) : (
          <p className="line-clamp-3 font-serif text-2xl leading-tight text-cream/95">{item.title}</p>
        )}
      </div>
    </div>
  );
}
