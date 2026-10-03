"use client";

import { useState } from "react";
import { EventCard } from "@/components/EventCard";
import { UnderlineTabs } from "@/components/ui/UnderlineTabs";
import { getCreator, pastEvents, upcomingEvents } from "@/lib/data";

export function EventsExplorer() {
  const [when, setWhen] = useState<"upcoming" | "past">("upcoming");
  const list = when === "upcoming" ? upcomingEvents() : pastEvents();

  return (
    <div>
      <UnderlineTabs
        tabs={[
          { id: "upcoming", label: "Upcoming", count: upcomingEvents().length },
          { id: "past", label: "Past", count: pastEvents().length },
        ]}
        active={when}
        onChange={(id) => setWhen(id as "upcoming" | "past")}
      />
      <div className="mt-1 divide-y divide-line">
        {list.map((event) => {
          const creator = getCreator(event.creatorSlug);
          if (!creator) return null;
          return <EventCard key={event.slug} event={event} creator={creator} />;
        })}
        {!list.length ? (
          <p className="py-10 text-center text-[13px] text-ink-3">No events in this view.</p>
        ) : null}
      </div>
    </div>
  );
}
