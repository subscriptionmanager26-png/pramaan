import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { CustomizeFeedButton } from "@/components/feed/CustomizeFeed";
import { getCreator, upcomingEvents } from "@/lib/data";
import { formatDay, formatMonth, formatTime } from "@/lib/utils";

export function RightRail() {
  const events = upcomingEvents().slice(0, 4);

  return (
    <aside className="hidden w-72 shrink-0 xl:block">
      <div className="sticky top-20 space-y-8">
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] font-semibold text-ink">Upcoming Events</h2>
            <Link href="/events" className="text-[12px] font-medium text-accent">
              View all
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-line">
            {events.map((event) => {
              const creator = getCreator(event.creatorSlug);
              return (
                <li key={event.slug} className="py-3.5 first:pt-0">
                  <Link href={`/events/${event.slug}`} className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-paper-2 text-ink">
                      <span className="text-[9px] font-medium tracking-wider text-ink-3">
                        {formatMonth(event.startsAt)}
                      </span>
                      <span className="text-[15px] font-semibold leading-none">{formatDay(event.startsAt)}</span>
                    </div>
                    <span className="min-w-0">
                      <span className="line-clamp-2 text-[13.5px] font-medium leading-snug text-ink">
                        {event.title}
                      </span>
                      <span className="text-meta mt-1 block">
                        {formatTime(event.startsAt)} IST · {event.location}
                      </span>
                      {creator ? (
                        <span className="mt-1.5 flex items-center gap-1.5 text-[12px] text-ink-3">
                          <Avatar creator={creator} size="xs" />
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

        <section className="border-t border-line pt-6">
          <h2 className="text-[14px] font-semibold text-ink">Customize your feed</h2>
          <p className="text-meta mt-2 leading-5">
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
