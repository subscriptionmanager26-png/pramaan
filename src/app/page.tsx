import Link from "next/link";
import { Suspense } from "react";
import {
  ContentFeedCard,
  EventFeedCard,
} from "@/components/feed/FeedCards";
import { CustomizeFeedButton } from "@/components/feed/CustomizeFeed";
import { DashTabs } from "@/components/feed/DashTabs";
import { RightRail } from "@/components/feed/RightRail";
import { Avatar } from "@/components/Avatar";
import {
  contentBySource,
  getCreator,
  latestContent,
  upcomingEvents,
} from "@/lib/data";
import { parseDashTab } from "@/lib/dash";
import { formatDay, formatMonth, formatTime } from "@/lib/utils";
import type { ContentItem } from "@/lib/types";
import type { ReactNode } from "react";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab: tabParam } = await searchParams;
  const tab = parseDashTab(tabParam);

  const events = upcomingEvents();
  const feed: ContentItem[] =
    tab === "all"
      ? latestContent()
      : tab === "events"
        ? []
        : contentBySource(tab);

  const mobileEvents = events.slice(0, 6);

  return (
    <div className="mx-auto flex w-full max-w-6xl gap-6 px-4 py-4 sm:px-6 lg:py-6">
      <div className="min-w-0 flex-1">
        <Suspense fallback={<div className="h-12 border-b border-line" />}>
          <DashTabs active={tab} />
        </Suspense>

        {/* Mobile / tablet upcoming events carousel */}
        {tab === "all" ? (
          <section className="mt-5 xl:hidden">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Upcoming Events</h2>
              <Link href="/events" className="text-xs font-semibold text-violet">
                View all
              </Link>
            </div>
            <div className="mt-3 -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-none">
              {mobileEvents.map((event) => {
                const creator = getCreator(event.creatorSlug);
                return (
                  <Link
                    key={event.slug}
                    href={`/events/${event.slug}`}
                    className="card w-[min(78vw,16.5rem)] shrink-0 p-4"
                  >
                    <div className="flex h-11 w-11 flex-col items-center justify-center rounded-xl bg-paper-2">
                      <span className="text-[9px] font-semibold text-ink-3">
                        {formatMonth(event.startsAt)}
                      </span>
                      <span className="text-base font-semibold leading-none">
                        {formatDay(event.startsAt)}
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm font-semibold leading-snug">{event.title}</p>
                    <p className="mt-2 text-xs text-ink-3">
                      {formatTime(event.startsAt)} IST · {event.location}
                    </p>
                    {creator ? (
                      <div className="mt-3 flex items-center gap-2 text-xs text-ink-3">
                        <Avatar creator={creator} size="sm" />
                        {creator.name}
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        <div className="mt-4 space-y-3">
          {tab === "events"
            ? events.map((event) => {
                const creator = getCreator(event.creatorSlug);
                if (!creator) return null;
                return <EventFeedCard key={event.slug} event={event} creator={creator} />;
              })
            : null}

          {tab !== "events"
            ? (() => {
                const nodes: ReactNode[] = [];
                feed.forEach((item, index) => {
                  const creator = getCreator(item.creatorSlug);
                  if (!creator) return;
                  nodes.push(
                    <ContentFeedCard
                      key={`${item.source}-${item.slug}-${item.publishedAt}`}
                      item={item}
                      creator={creator}
                    />,
                  );
                  if (tab === "all" && index === 3 && events[0]) {
                    const ec = getCreator(events[0].creatorSlug);
                    if (ec) {
                      nodes.push(
                        <EventFeedCard key={`weave-${events[0].slug}`} event={events[0]} creator={ec} />,
                      );
                    }
                  }
                });
                return nodes;
              })()
            : null}

          {!feed.length && tab !== "events" ? (
            <div className="card p-10 text-center text-sm text-ink-3">Nothing in this channel yet.</div>
          ) : null}
        </div>

        {/* Mobile customize CTA */}
        <section className="card mt-4 p-4 xl:hidden">
          <div className="flex items-center justify-center gap-2 text-ink-3">
            <span className="text-xs">Twitter</span>
            <span className="text-xs">·</span>
            <span className="text-xs">Substack</span>
            <span className="text-xs">·</span>
            <span className="text-xs">YouTube</span>
            <span className="text-xs">·</span>
            <span className="text-xs">Events</span>
          </div>
          <div className="mt-3">
            <CustomizeFeedButton />
          </div>
        </section>
      </div>

      <RightRail />
    </div>
  );
}
