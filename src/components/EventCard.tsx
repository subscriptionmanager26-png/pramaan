import Link from "next/link";
import type { Creator, EventItem } from "@/lib/types";
import { formatDay, formatLabel, formatMonth, formatTime, formatWeekday } from "@/lib/utils";
import { Avatar } from "./Avatar";

function DateBlock({ startsAt }: { startsAt: string }) {
  return (
    <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-paper-2 text-ink">
      <span className="text-[9px] font-medium tracking-wider text-ink-3">{formatMonth(startsAt)}</span>
      <span className="text-[15px] font-semibold leading-none">{formatDay(startsAt)}</span>
    </div>
  );
}

export function EventCard({
  event,
  creator,
  variant = "default",
}: {
  event: EventItem;
  creator: Creator;
  variant?: "default" | "rail" | "feed";
}) {
  if (variant === "rail") {
    return (
      <Link href={`/events/${event.slug}`} className="group flex gap-3 py-3">
        <DateBlock startsAt={event.startsAt} />
        <div className="min-w-0">
          <p className="text-[13.5px] font-medium leading-snug text-ink group-hover:text-accent">{event.title}</p>
          <p className="mt-1 text-[12px] text-ink-3">
            {formatLabel(event.format)} · {creator.name}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "feed") {
    return (
      <Link href={`/events/${event.slug}`} className="group flex gap-3 py-4">
        <DateBlock startsAt={event.startsAt} />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent">Event</p>
          <h3 className="text-headline mt-1 text-ink group-hover:text-accent">{event.title}</h3>
          <p className="mt-1 text-[13px] text-ink-3">
            {formatWeekday(event.startsAt)} · {formatTime(event.startsAt)} IST · {formatLabel(event.format)} ·{" "}
            {event.location}
          </p>
          <div className="mt-2.5 flex items-center gap-2 text-[12px] text-ink-3">
            <Avatar creator={creator} size="sm" />
            {creator.name}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/events/${event.slug}`} className="group flex gap-3 py-4">
      <DateBlock startsAt={event.startsAt} />
      <div className="min-w-0 flex-1">
        <p className="text-[12px] text-ink-3">
          {formatLabel(event.format)} · {formatTime(event.startsAt)} IST · {event.location}
        </p>
        <h3 className="text-headline mt-1 text-ink group-hover:text-accent">{event.title}</h3>
        <div className="mt-2 flex items-center gap-2 text-[12px] text-ink-3">
          <Avatar creator={creator} size="sm" />
          {creator.name}
        </div>
      </div>
    </Link>
  );
}
