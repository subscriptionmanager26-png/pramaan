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

function CardShell({ children }: { children: React.ReactNode }) {
  return <article className="card p-4 sm:p-5">{children}</article>;
}

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
    <div className="flex items-start gap-3">
      <div className="relative shrink-0">
        <Avatar creator={creator} size="sm" />
        <span className="absolute -right-0.5 -bottom-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white ring-1 ring-line">
          {source === "event" ? (
            <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-violet text-[7px] font-bold text-white">
              E
            </span>
          ) : (
            <SourceIcon kind={source} className="h-2.5 w-2.5 text-ink" />
          )}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex min-w-0 items-baseline gap-1.5 text-sm">
            <span className="truncate font-semibold text-ink">{name}</span>
            {handle ? <span className="truncate text-ink-3">{handle}</span> : null}
          </div>
          <span className="shrink-0 text-sm text-ink-3">{time}</span>
        </div>
      </div>
    </div>
  );
}

export function TwitterFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block">
      <CardShell>
        <MetaRow
          creator={creator}
          source="twitter"
          name={creator.name}
          handle={`@${creator.sources.find((s) => s.kind === "twitter")?.handle.replace(/^@/, "") ?? creator.slug}`}
          time={formatRelative(item.publishedAt)}
        />
        <p className="mt-3 pl-12 text-[15px] leading-6 text-ink">
          {previewHeadline(item.title, item.summary)}
        </p>
      </CardShell>
    </a>
  );
}

export function SubstackFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  const publication = creator.sources.find((s) => s.kind === "substack")?.handle ?? "Substack";
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block">
      <CardShell>
        <MetaRow
          creator={creator}
          source="substack"
          name={creator.name}
          handle={publication}
          time={formatRelative(item.publishedAt)}
        />
        <div className="mt-3 flex gap-4 pl-12">
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-ink">
              {previewHeadline(item.title, item.summary)}
            </h3>
            {item.summary && item.summary !== item.title ? (
              <p className="mt-1.5 text-sm leading-6 text-ink-2">{previewSnippet(item.summary, 100)}</p>
            ) : null}
            <p className="mt-3 text-xs text-ink-3">{item.duration}</p>
          </div>
          <div
            className="hidden h-20 w-20 shrink-0 rounded-xl sm:block"
            style={{ background: `${creator.color}22`, border: `1px solid ${creator.color}33` }}
            aria-hidden
          />
        </div>
      </CardShell>
    </a>
  );
}

export function YouTubeFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  const thumb = youtubeThumb(item.url);
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block">
      <CardShell>
        <MetaRow
          creator={creator}
          source="youtube"
          name={creator.name}
          time={formatRelative(item.publishedAt)}
        />
        <div className="mt-3 flex gap-4 pl-12">
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-ink">
              {previewHeadline(item.title, item.summary)}
            </h3>
            {item.summary && item.summary !== item.title ? (
              <p className="mt-1.5 text-sm leading-6 text-ink-2">{previewSnippet(item.summary, 100)}</p>
            ) : null}
            <p className="mt-3 text-xs text-ink-3">{item.duration}</p>
          </div>
          <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-paper-2 sm:h-24 sm:w-36">
            {thumb ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={thumb} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center bg-navy text-white">
                <SourceIcon kind="youtube" className="h-6 w-6" />
              </div>
            )}
          </div>
        </div>
      </CardShell>
    </a>
  );
}

export function PodcastFeedCard({ item, creator }: { item: ContentItem; creator: Creator }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block">
      <CardShell>
        <MetaRow
          creator={creator}
          source="podcast"
          name={creator.name}
          time={formatRelative(item.publishedAt)}
        />
        <div className="mt-3 pl-12">
          <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-ink">
            {previewHeadline(item.title, item.summary)}
          </h3>
          {item.summary && item.summary !== item.title ? (
            <p className="mt-1.5 text-sm leading-6 text-ink-2">{previewSnippet(item.summary, 100)}</p>
          ) : null}
          <p className="mt-3 text-xs text-ink-3">{item.duration}</p>
        </div>
      </CardShell>
    </a>
  );
}

export function EventFeedCard({ event, creator }: { event: EventItem; creator: Creator }) {
  return (
    <article className="card p-4 sm:p-5">
      <MetaRow
        creator={creator}
        source="event"
        name={creator.name}
        time={formatLabel(event.format)}
      />
      <div className="mt-3 flex flex-col gap-4 pl-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-ink">{event.title}</h3>
          <p className="mt-2 text-sm text-ink-2">
            {formatMonth(event.startsAt)} {formatDay(event.startsAt)} · {formatTime(event.startsAt)} IST
          </p>
          <p className="mt-1 text-sm text-ink-3">{event.location}</p>
          {event.seats ? <p className="mt-2 text-xs text-ink-3">{event.seats}</p> : null}
        </div>
        <a
          href={event.registerUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-violet-2 px-4 py-2.5 text-sm font-semibold text-violet"
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
