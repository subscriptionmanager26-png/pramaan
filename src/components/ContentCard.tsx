import type { ContentItem, Creator } from "@/lib/types";
import { formatRelative, previewHeadline, sourceCta, sourceLabel } from "@/lib/utils";
import { Avatar } from "./Avatar";
import { SourceIcon } from "./SourceIcon";
import { SebiBadge } from "./SebiBadge";

/**
 * Outbound link card — Pramaan does not host the work.
 * Density variants match platform cadence:
 * - pulse: Twitter (many, compact)
 * - essay: Substack (few, spacious)
 * - video: YouTube / podcast (medium, scannable)
 * - feed / compact: general lists
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
  const headline = previewHeadline(item.title, item.summary);

  if (variant === "pulse") {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="group flex gap-3 border-b border-line py-3 last:border-b-0"
      >
        <Avatar creator={creator} size="sm" />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-[11px] text-ink-3">
            <span className="font-medium text-ink">{creator.name}</span>
            <span>{formatRelative(item.publishedAt)}</span>
          </span>
          <span className="mt-1 block text-[14px] leading-snug text-navy group-hover:text-accent">
            {headline}
          </span>
        </span>
        <span className="shrink-0 self-start text-ink-3 group-hover:text-accent" aria-hidden>
          ↗
        </span>
      </a>
    );
  }

  if (variant === "essay") {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="group block border-b border-line py-7 last:border-b-0"
      >
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-ink-3">
          <SourceIcon kind={item.source} className="h-3 w-3" />
          <span>{formatRelative(item.publishedAt)}</span>
        </div>
        <p className="font-serif mt-2 text-[1.35rem] font-medium leading-snug tracking-tight text-navy group-hover:text-accent sm:text-[1.5rem]">
          {headline}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Avatar creator={creator} size="sm" />
            <span className="text-sm font-medium text-ink">{creator.name}</span>
            <SebiBadge type={creator.sebi.type} />
          </div>
          <span className="text-xs font-medium text-accent">
            {sourceCta(item.source)} ↗
          </span>
        </div>
      </a>
    );
  }

  if (variant === "video") {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="group flex w-[min(80vw,16.5rem)] shrink-0 snap-start flex-col border border-line bg-white/70 p-4 transition-colors hover:border-navy/30"
      >
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-ink-3">
          <SourceIcon kind={item.source} className="h-3 w-3" />
          <span>{sourceLabel(item.source)}</span>
        </div>
        <p className="font-serif mt-3 flex-1 text-[1.05rem] font-medium leading-snug tracking-tight text-navy group-hover:text-accent">
          {headline}
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-line pt-3">
          <Avatar creator={creator} size="sm" />
          <span className="min-w-0 truncate text-xs text-ink-2">{creator.name}</span>
        </div>
        <span className="mt-3 text-xs font-medium text-accent">
          {sourceCta(item.source)} ↗
        </span>
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="group flex items-start justify-between gap-3 py-3"
      >
        <span className="min-w-0">
          <span className="block font-serif text-[15px] font-medium leading-snug tracking-tight text-navy group-hover:text-accent">
            {headline}
          </span>
          <span className="mt-1 block text-xs text-ink-3">
            {creator.name} · {sourceLabel(item.source)} · {formatRelative(item.publishedAt)}
          </span>
        </span>
        <span className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden>
          ↗
        </span>
      </a>
    );
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group block border-b border-line py-6 transition-colors last:border-b-0 hover:bg-white/40"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.14em] text-ink-3">
        <SourceIcon kind={item.source} className="h-3 w-3" />
        <span>{sourceLabel(item.source)}</span>
        <span aria-hidden>·</span>
        <span className="normal-case tracking-normal">{formatRelative(item.publishedAt)}</span>
      </div>

      <p className="font-serif mt-2 max-w-2xl text-[1.2rem] font-medium leading-snug tracking-tight text-navy group-hover:text-accent sm:text-[1.35rem]">
        {headline}
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Avatar creator={creator} size="sm" />
          <span className="text-sm font-medium text-ink">{creator.name}</span>
          <SebiBadge type={creator.sebi.type} />
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
          <SourceIcon kind={item.source} className="h-3 w-3" />
          {sourceCta(item.source)}
          <span aria-hidden>↗</span>
        </span>
      </div>
    </a>
  );
}
