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
          className="w-full rounded-xl border border-line bg-paper-2 px-4 py-2.5 text-[14px] outline-none focus:border-accent/40 focus:bg-white"
        />
      </form>
      {!q ? (
        <p className="mt-6 text-[13px] text-ink-3">Try Ananya, tax, or INA.</p>
      ) : (
        <div className="mt-8 space-y-10">
          {matchedCreators.length ? (
            <section>
              <h2 className="text-section text-ink">
                People <span className="font-normal text-ink-3">({matchedCreators.length})</span>
              </h2>
              <div className="mt-2 divide-y divide-line sm:mt-4 sm:grid sm:grid-cols-2 sm:gap-3 sm:divide-y-0 lg:grid-cols-3">
                {matchedCreators.map((c) => (
                  <div key={c.slug}>
                    <div className="sm:hidden">
                      <CreatorCard creator={c} variant="row" />
                    </div>
                    <div className="hidden sm:block">
                      <CreatorCard creator={c} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          {matchedContent.length ? (
            <section>
              <h2 className="text-section text-ink">
                Work <span className="font-normal text-ink-3">({matchedContent.length})</span>
              </h2>
              <div className="mt-1 divide-y divide-line">
                {matchedContent.map((item) => {
                  const creator = getCreator(item.creatorSlug);
                  if (!creator) return null;
                  return (
                    <ContentCard
                      key={`${item.source}-${item.slug}-${item.url}`}
                      item={item}
                      creator={creator}
                    />
                  );
                })}
              </div>
            </section>
          ) : null}
          {matchedEvents.length ? (
            <section>
              <h2 className="text-section text-ink">
                Events <span className="font-normal text-ink-3">({matchedEvents.length})</span>
              </h2>
              <div className="mt-1 divide-y divide-line">
                {matchedEvents.map((event) => {
                  const creator = getCreator(event.creatorSlug);
                  if (!creator) return null;
                  return <EventCard key={event.slug} event={event} creator={creator} />;
                })}
              </div>
            </section>
          ) : null}
          {!matchedCreators.length && !matchedContent.length && !matchedEvents.length ? (
            <p className="text-[13px] text-ink-3">Nothing matched.</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
