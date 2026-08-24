import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar } from "@/components/Avatar";
import { ContentCard } from "@/components/ContentCard";
import { EventCard } from "@/components/EventCard";
import { SebiBadge } from "@/components/SebiBadge";
import { SourceIcon } from "@/components/SourceIcon";
import { contentByCreator, creators, eventsByCreator, getCreator } from "@/lib/data";
import { sourceLabel } from "@/lib/utils";

export function generateStaticParams() {
  return creators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) return { title: "Creator" };
  return { title: creator.name, description: creator.headline };
}

export default async function CreatorPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { slug } = await params;
  const { tab = "content" } = await searchParams;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const pieces = contentByCreator(creator.slug);
  const creatorEvents = eventsByCreator(creator.slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <div className="h-28" style={{ background: creator.color }} />
        <div className="px-5 pb-6 sm:px-6">
          <div className="-mt-10">
            <span className="rounded-full ring-4 ring-white">
              <Avatar creator={creator} size="xl" />
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-navy">{creator.name}</h1>
          <p className="mt-1 text-sm text-ink-3">{creator.city}</p>
          <div className="mt-3">
            <SebiBadge type={creator.sebi.type} number={creator.sebi.number} />
          </div>
          <p className="mt-4 text-sm leading-6 text-ink-2">{creator.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {creator.specialties.map((specialty) => (
              <span key={specialty} className="border border-line px-2.5 py-1 text-xs text-ink-2">{specialty}</span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {creator.sources.map((s) => (
              <a
                key={s.kind}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-ink-2 hover:border-navy/30"
              >
                <SourceIcon kind={s.kind} />
                {sourceLabel(s.kind)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-1 border-b border-line">
        <Link
          href={`/creators/${creator.slug}`}
          className={`px-3 py-2.5 text-sm ${tab !== "events" ? "border-b-2 border-navy font-medium text-navy" : "text-ink-3"}`}
        >
          Work
        </Link>
        <Link
          href={`/creators/${creator.slug}?tab=events`}
          className={`px-3 py-2.5 text-sm ${tab === "events" ? "border-b-2 border-navy font-medium text-navy" : "text-ink-3"}`}
        >
          Events
        </Link>
      </div>

      {tab === "events" ? (
        <div className="mt-4 space-y-3">
          {creatorEvents.map((event) => (
            <EventCard key={event.slug} event={event} creator={creator} />
          ))}
        </div>
      ) : (
        <div className="divide-y divide-line">
          {pieces.map((item) => (
            <ContentCard key={item.slug} item={item} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
}
