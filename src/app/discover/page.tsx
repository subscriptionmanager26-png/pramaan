import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContentCard } from "@/components/ContentCard";
import { CreatorCard } from "@/components/CreatorCard";
import { FeedTabs } from "@/components/FeedTabs";
import {
  contentBySource,
  creators,
  getCreator,
  latestContent,
  topics,
  upcomingEvents,
} from "@/lib/data";
import type { SourceKind } from "@/lib/types";

export const metadata: Metadata = {
  title: "Discover",
};

const sources: SourceKind[] = ["twitter", "substack", "youtube", "podcast"];

function isSource(type: string): type is SourceKind {
  return sources.includes(type as SourceKind);
}

export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type = "all" } = await searchParams;
  const feed = isSource(type) ? contentBySource(type) : latestContent();
  const counts = {
    all: latestContent().length,
    twitter: contentBySource("twitter").length,
    substack: contentBySource("substack").length,
    youtube: contentBySource("youtube").length,
    podcast: contentBySource("podcast").length,
    event: upcomingEvents().length,
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-navy sm:text-5xl">Discover</h1>
        <p className="mt-3 text-[15px] leading-7 text-ink-2">
          Browse creators by what they cover, then filter their public work by platform.
        </p>
      </header>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-sm font-semibold text-navy">Topics</h2>
          <Link href="/topics" className="text-xs text-accent hover:underline">
            All topics
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {topics.slice(0, 8).map((t) => (
            <Link
              key={t.slug}
              href={`/topics/${t.slug}`}
              className="border border-line bg-white/60 px-3 py-1.5 text-sm text-ink-2 transition-colors hover:border-navy/30 hover:text-navy"
            >
              {t.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-sm font-semibold text-navy">Creators</h2>
          <Link href="/creators" className="text-xs text-accent hover:underline">
            Full directory
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {creators.slice(0, 6).map((c) => (
            <CreatorCard key={c.slug} creator={c} />
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-2xl">
        <h2 className="text-sm font-semibold text-navy">All indexed work</h2>
        <div className="mt-4">
          <Suspense fallback={<div className="h-10 border-b border-line" />}>
            <FeedTabs counts={counts} basePath="/discover" />
          </Suspense>
          {type === "event" ? (
            <div className="mt-4 space-y-3">
              {upcomingEvents().map((event) => {
                const creator = getCreator(event.creatorSlug);
                if (!creator) return null;
                return (
                  <Link
                    key={event.slug}
                    href={`/events/${event.slug}`}
                    className="block border-b border-line py-4 text-sm font-medium text-navy hover:text-accent"
                  >
                    {event.title}
                    <span className="mt-1 block text-xs font-normal text-ink-3">
                      {creator.name} · {event.location}
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="divide-y divide-line border-t border-line">
              {feed.map((item) => {
                const creator = getCreator(item.creatorSlug);
                if (!creator) return null;
                return <ContentCard key={item.slug} item={item} creator={creator} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
