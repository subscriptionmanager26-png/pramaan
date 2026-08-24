"use client";

import { useState } from "react";
import { EventCard } from "@/components/EventCard";
import { getCreator, pastEvents, upcomingEvents } from "@/lib/data";

export function EventsExplorer() {
  const [when, setWhen] = useState<"upcoming" | "past">("upcoming");
  const list = when === "upcoming" ? upcomingEvents() : pastEvents();

  return (
    <div>
      <div className="flex gap-2">
        {(
          [
            ["upcoming", "Upcoming"],
            ["past", "Past"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setWhen(id)}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              when === id ? "border-navy bg-navy text-white" : "border-line bg-white text-ink-2"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        {list.map((event) => {
          const creator = getCreator(event.creatorSlug);
          if (!creator) return null;
          return <EventCard key={event.slug} event={event} creator={creator} />;
        })}
      </div>
    </div>
  );
}
