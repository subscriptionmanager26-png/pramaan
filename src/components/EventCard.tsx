import Link from "next/link";
import type { Creator, EventItem } from "@/lib/types";
import { formatDay, formatLabel, formatMonth, formatTime, formatWeekday } from "@/lib/utils";
import { Avatar } from "./Avatar";

export function EventCard({
  event,
  creator,
  variant = "default",
}: {
  event: EventItem;
  creator: Creator;
  variant?: "default" | "rail" | "feed";
}) {
  const date = (
    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center bg-navy text-white">
      <span className="text-[10px] font-medium tracking-wider">{formatMonth(event.startsAt)}</span>
      <span className="text-lg font-semibold leading-none">{formatDay(event.startsAt)}</span>
    </div>
  );

  if (variant === "rail") {
    return (
      <Link href={`/events/${event.slug}`} className="group flex gap-3 py-3">
        {date}
        <div className="min-w-0">
          <p className="text-sm font-medium leading-snug group-hover:text-accent">{event.title}</p>
          <p className="mt-1 text-xs text-ink-3">
            {formatLabel(event.format)} · {creator.name}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "feed") {
    return (
      <Link
        href={`/events/${event.slug}`}
        className="group my-2 flex gap-4 border border-line bg-white/70 px-4 py-4 transition-colors hover:border-navy/30"
      >
        {date}
        <div className="min-w-0 flex-1">
          <p className="text-[11px] uppercase tracking-[0.14em] text-accent">Event</p>
          <h3 className="font-serif mt-1 text-lg font-medium leading-snug tracking-tight text-navy group-hover:text-accent">
            {event.title}
          </h3>
          <p className="mt-1 text-sm text-ink-3">
            {formatWeekday(event.startsAt)} · {formatTime(event.startsAt)} IST · {formatLabel(event.format)} ·{" "}
            {event.location}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-ink-3">
            <Avatar creator={creator} size="sm" />
            {creator.name}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex gap-4 border border-line bg-white/70 p-4 hover:border-navy/25"
    >
      {date}
      <div className="min-w-0 flex-1">
        <p className="text-xs text-ink-3">
          {formatLabel(event.format)} · {formatTime(event.startsAt)} IST · {event.location}
        </p>
        <h3 className="font-serif mt-1 text-lg font-medium tracking-tight text-navy group-hover:text-accent">
          {event.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-xs text-ink-3">
          <Avatar creator={creator} size="sm" />
          {creator.name}
        </div>
      </div>
    </Link>
  );
}
