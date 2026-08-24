import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { CustomizeFeedButton } from "@/components/feed/CustomizeFeed";
import { getCreator, topics, upcomingEvents } from "@/lib/data";
import { formatDay, formatMonth, formatTime } from "@/lib/utils";

export function RightRail() {
  const events = upcomingEvents().slice(0, 4);
  const chips = topics.slice(0, 8);

  return (
    <aside className="hidden w-72 shrink-0 xl:block">
      <div className="sticky top-20 space-y-4">
        <section className="card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Upcoming Events</h2>
            <Link href="/events" className="text-xs font-semibold text-violet">
              View all
            </Link>
          </div>
          <ul className="mt-4 space-y-4">
            {events.map((event) => {
              const creator = getCreator(event.creatorSlug);
              return (
                <li key={event.slug}>
                  <Link href={`/events/${event.slug}`} className="flex gap-3">
                    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-paper-2 text-ink">
                      <span className="text-[9px] font-semibold tracking-wider text-ink-3">
                        {formatMonth(event.startsAt)}
                      </span>
                      <span className="text-base font-semibold leading-none">{formatDay(event.startsAt)}</span>
                    </div>
                    <span className="min-w-0">
                      <span className="line-clamp-2 text-sm font-medium leading-snug">{event.title}</span>
                      <span className="mt-1 block text-xs text-ink-3">
                        {formatTime(event.startsAt)} IST · {event.location}
                      </span>
                      {creator ? (
                        <span className="mt-1 flex items-center gap-1.5 text-xs text-ink-3">
                          <Avatar creator={creator} size="sm" />
                          {creator.name}
                        </span>
                      ) : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold">Trending Topics</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((t) => (
              <Link
                key={t.slug}
                href={`/topics/${t.slug}`}
                className="rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium text-ink-2 hover:border-accent/30"
              >
                # {t.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold">Customize your feed</h2>
          <p className="mt-2 text-xs leading-5 text-ink-3">
            Choose sources and topics. Preferences stay on this device for now.
          </p>
          <div className="mt-4">
            <CustomizeFeedButton />
          </div>
        </section>
      </div>
    </aside>
  );
}
