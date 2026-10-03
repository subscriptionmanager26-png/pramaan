import type { ContentItem, Creator, EventItem } from "@/lib/types";
import {
  eventSignupCta,
  formatDay,
  formatLabel,
  formatMonth,
  formatRelative,
  formatTime,
  previewHeadline,
  previewSnippet,
  youtubeThumb,
} from "@/lib/utils";
import { Avatar } from "@/components/Avatar";
import { SourceIcon } from "@/components/SourceIcon";

function MetaRow({
  creator,
  source,
  name,
  handle,
  time,
}: {
  creator: Creator;
  source: ContentItem["source"] | "event";
  name: string;
  handle?: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative shrink-0">
        <Avatar creator={creator} size="sm" />
        <span className="absolute -right-0.5 -bottom-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-1 ring-line">
          {source === "event" ? (
            <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-accent text-[6px] font-bold text-white">
              E
            </span>
          ) : (
            <SourceIcon kind={source} className="h-2 w-2 text-ink" />
          )}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 items-baseline gap-1.5 text-[13px]">
        <span className="truncate font-medium text-ink">{name}</span>
        {handle ? <span className="truncate text-ink-3">{handle}</span> : null}
        <span className="text-ink-3">·</span>
        <span className="shrink-0 text-ink-3">{time}</span>
      </div>
    </div>
  );
}

/** Text-first — no chrome card, divider between items via parent */
export function TwitterFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block py-4">
      <MetaRow
        creator={creator}
        source="twitter"
        name={creator.name}
        handle={`@${creator.sources.find((s) => s.kind === "twitter")?.handle.replace(/^@/, "") ?? creator.slug}`}
        time={formatRelative(item.publishedAt)}
      />
      <p className="text-body mt-2.5 pl-10 text-ink">{previewHeadline(item.title, item.summary)}</p>
    </a>
  );
}

/** Editorial — title + snippet + thumbnail (~1/3 width) */
export function SubstackFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  const publication = creator.sources.find((s) => s.kind === "substack")?.handle ?? "Substack";
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block py-4">
      <MetaRow
        creator={creator}
        source="substack"
        name={creator.name}
        handle={publication}
        time={formatRelative(item.publishedAt)}
      />
      <div className="mt-2.5 flex gap-4 pl-10">
        <div className="min-w-0 flex-[2]">
          <h3 className="text-headline text-ink">{previewHeadline(item.title, item.summary)}</h3>
          {item.summary && item.summary !== item.title ? (
            <p className="text-body mt-1.5 text-ink-2">{previewSnippet(item.summary, 100)}</p>
          ) : null}
          {item.duration ? <p className="text-meta mt-2">{item.duration}</p> : null}
        </div>
        <div
          className="hidden h-[4.5rem] w-[30%] max-w-[7.5rem] shrink-0 rounded-lg sm:block"
          style={{ background: `${creator.color}18`, border: `1px solid ${creator.color}22` }}
          aria-hidden
        />
      </div>
    </a>
  );
}

/** Visual-first — larger thumbnail */
export function YouTubeFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  const thumb = youtubeThumb(item.url);
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block py-4">
      <MetaRow
        creator={creator}
        source="youtube"
        name={creator.name}
        time={formatRelative(item.publishedAt)}
      />
      <div className="mt-2.5 flex gap-4 pl-10">
        <div className="min-w-0 flex-1">
          <h3 className="text-headline text-ink">{previewHeadline(item.title, item.summary)}</h3>
          {item.summary && item.summary !== item.title ? (
            <p className="text-body mt-1.5 line-clamp-2 text-ink-2">{previewSnippet(item.summary, 100)}</p>
          ) : null}
          {item.duration ? <p className="text-meta mt-2">{item.duration}</p> : null}
        </div>
        <div className="relative h-[4.75rem] w-[8.5rem] shrink-0 overflow-hidden rounded-lg bg-paper-2 sm:h-[5.5rem] sm:w-[10.5rem]">
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumb} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center bg-ink text-white">
              <SourceIcon kind="youtube" className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export function PodcastFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block py-4">
      <MetaRow
        creator={creator}
        source="podcast"
        name={creator.name}
        time={formatRelative(item.publishedAt)}
      />
      <div className="mt-2.5 pl-10">
        <h3 className="text-headline text-ink">{previewHeadline(item.title, item.summary)}</h3>
        {item.summary && item.summary !== item.title ? (
          <p className="text-body mt-1.5 text-ink-2">{previewSnippet(item.summary, 100)}</p>
        ) : null}
        {item.duration ? <p className="text-meta mt-2">{item.duration}</p> : null}
      </div>
    </a>
  );
}

/** Event-first — date/time/location over imagery */
export function EventFeedCard({ event, creator }: { event: EventItem; creator: Creator }) {
  return (
    <article className="py-4">
      <MetaRow creator={creator} source="event" name={creator.name} time={formatLabel(event.format)} />
      <div className="mt-2.5 flex flex-col gap-3 pl-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-headline text-ink">{event.title}</h3>
          <p className="mt-2 text-[14px] text-ink-2">
            {formatMonth(event.startsAt)} {formatDay(event.startsAt)} · {formatTime(event.startsAt)} IST
          </p>
          <p className="mt-1 text-[14px] text-ink-3">{event.location}</p>
          {event.seats ? <p className="text-meta mt-2">{event.seats}</p> : null}
        </div>
        <a
          href={event.registerUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-accent-2 px-3.5 py-2 text-[13px] font-medium text-accent"
        >
          {eventSignupCta(event.location)}
        </a>
      </div>
    </article>
  );
}

export function ContentFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  if (item.source === "twitter") return <TwitterFeedCard item={item} creator={creator} />;
  if (item.source === "substack") return <SubstackFeedCard item={item} creator={creator} />;
  if (item.source === "youtube") return <YouTubeFeedCard item={item} creator={creator} />;
  return <PodcastFeedCard item={item} creator={creator} />;
}
