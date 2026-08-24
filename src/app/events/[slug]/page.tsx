import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar } from "@/components/Avatar";
import { SebiBadge } from "@/components/SebiBadge";
import { events, getCreator, getEvent } from "@/lib/data";
import { eventSignupCta, formatDate, formatLabel, formatTime, formatWeekday } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event" };
  return { title: event.title, description: event.summary };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();
  const creator = getCreator(event.creatorSlug);
  if (!creator) notFound();
  const upcoming = new Date(event.startsAt) >= new Date("2026-08-21T18:30:00+05:30");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-navy text-white">
        <span className="text-xs tracking-wider">{formatWeekday(event.startsAt).toUpperCase()}</span>
        <span className="text-2xl font-semibold">{formatDate(event.startsAt).split(" ")[0]}</span>
      </div>
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-accent">
        {formatLabel(event.format)} · {event.topic}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-navy">{event.title}</h1>
      <p className="mt-2 text-sm text-ink-3">
        {formatTime(event.startsAt)} IST · {event.location}
      </p>
      <p className="mt-5 text-base leading-7 text-ink-2">{event.summary}</p>
      <p className="mt-4 text-xs leading-5 text-ink-3">
        Listed by Pramaan. Sign-up and attendance happen on the host’s page.
      </p>
      <Link href={`/creators/${creator.slug}`} className="mt-6 flex items-center gap-3">
        <Avatar creator={creator} />
        <span>
          <span className="block text-sm font-medium">{creator.name}</span>
          <SebiBadge type={creator.sebi.type} compact />
        </span>
      </Link>
      <a
        href={event.registerUrl}
        target="_blank"
        rel="noreferrer"
        className="offset-btn mt-8 inline-flex rounded-full border border-ink bg-navy px-5 py-2.5 text-sm font-medium text-white"
      >
        {upcoming ? eventSignupCta(event.location) : "Open host page"}
      </a>
    </div>
  );
}
