"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ContentCard } from "@/components/ContentCard";
import { CreatorCard } from "@/components/CreatorCard";
import { EventCard } from "@/components/EventCard";
import { content, creators, events, getCreator } from "@/lib/data";

export function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const qParam = params.get("q") ?? "";
  const [draft, setDraft] = useState(qParam);
  const q = qParam.trim().toLowerCase();

  const matchedCreators = useMemo(() => {
    if (!q) return [];
    return creators.filter((c) =>
      `${c.name} ${c.city} ${c.headline} ${c.specialties.join(" ")} ${c.sebi.number}`.toLowerCase().includes(q),
    );
  }, [q]);

  const matchedContent = useMemo(() => {
    if (!q) return [];
    return content.filter((c) => `${c.title} ${c.summary} ${c.topic}`.toLowerCase().includes(q));
  }, [q]);

  const matchedEvents = useMemo(() => {
    if (!q) return [];
    return events.filter((e) => `${e.title} ${e.summary} ${e.topic}`.toLowerCase().includes(q));
  }, [q]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = draft.trim();
    router.push(next ? `/search?q=${encodeURIComponent(next)}` : "/search");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Search names, topics, SEBI numbers"
          className="w-full rounded-full border border-line bg-white px-4 py-2.5 text-sm outline-none"
        />
      </form>
      {!q ? (
        <p className="mt-6 text-sm text-ink-3">Try Ananya, tax, or INA.</p>
      ) : (
        <div className="mt-10 space-y-12">
          {matchedCreators.length ? (
            <section>
              <h2 className="text-sm font-semibold text-navy">People <span className="font-normal text-ink-3">({matchedCreators.length})</span></h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {matchedCreators.map((c) => (
                  <CreatorCard key={c.slug} creator={c} />
                ))}
              </div>
            </section>
          ) : null}
          {matchedContent.length ? (
            <section>
              <h2 className="text-sm font-semibold text-navy">Work <span className="font-normal text-ink-3">({matchedContent.length})</span></h2>
              <div className="mt-2 divide-y divide-line">
                {matchedContent.map((item) => {
                  const creator = getCreator(item.creatorSlug);
                  if (!creator) return null;
                  return <ContentCard key={item.slug} item={item} creator={creator} />;
                })}
              </div>
            </section>
          ) : null}
          {matchedEvents.length ? (
            <section>
              <h2 className="text-sm font-semibold text-navy">Events <span className="font-normal text-ink-3">({matchedEvents.length})</span></h2>
              <div className="mt-4 space-y-3">
                {matchedEvents.map((event) => {
                  const creator = getCreator(event.creatorSlug);
                  if (!creator) return null;
                  return <EventCard key={event.slug} event={event} creator={creator} />;
                })}
              </div>
            </section>
          ) : null}
          {!matchedCreators.length && !matchedContent.length && !matchedEvents.length ? (
            <p className="text-sm text-ink-3">Nothing matched.</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
