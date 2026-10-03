import type { ContentItem, Creator } from "@/lib/types";
import { ContentFeedCard } from "@/components/feed/FeedCards";
import { formatRelative, previewHeadline, sourceCta, sourceLabel } from "@/lib/utils";
import { Avatar } from "./Avatar";
import { SourceIcon } from "./SourceIcon";

/**
 * Content rows — default matches Home/News FeedCards language.
 * Compact / tile kept for dense directories.
 */
export function ContentCard({
  item,
  creator,
  variant = "feed",
}: {
  item: ContentItem;
  creator: Creator;
  variant?: "feed" | "compact" | "tile" | "pulse" | "essay" | "video";
  hideByline?: boolean;
}) {
  if (variant === "compact" || variant === "pulse") {
    const headline = previewHeadline(item.title, item.summary);
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="group flex items-start justify-between gap-3 py-3"
      >
        <span className="min-w-0">
          <span className="block text-[14px] font-medium leading-snug text-ink group-hover:text-accent">
            {headline}
          </span>
          <span className="mt-1 block text-[12px] text-ink-3">
            {creator.name} · {sourceLabel(item.source)} · {formatRelative(item.publishedAt)}
          </span>
        </span>
        <span
          className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden
        >
          ↗
        </span>
      </a>
    );
  }

  if (variant === "video" || variant === "tile") {
    const headline = previewHeadline(item.title, item.summary);
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="group flex w-[min(80vw,16.5rem)] shrink-0 snap-start flex-col rounded-xl border border-line bg-white p-4 transition-colors hover:bg-paper-2"
      >
        <div className="flex items-center gap-2 text-[11px] text-ink-3">
          <SourceIcon kind={item.source} className="h-3 w-3" />
          <span>{sourceLabel(item.source)}</span>
        </div>
        <p className="mt-3 flex-1 text-[15px] font-medium leading-snug text-ink group-hover:text-accent">
          {headline}
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-line pt-3">
          <Avatar creator={creator} size="sm" />
          <span className="min-w-0 truncate text-[12px] text-ink-2">{creator.name}</span>
        </div>
        <span className="mt-3 text-[12px] font-medium text-accent">
          {sourceCta(item.source)} ↗
        </span>
      </a>
    );
  }

  return <ContentFeedCard item={item} creator={creator} />;
}
