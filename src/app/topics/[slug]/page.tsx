import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentCard } from "@/components/ContentCard";
import { contentByTopic, getCreator, topicBySlug, topics } from "@/lib/data";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  return { title: topic?.name ?? "Topic" };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) notFound();
  const pieces = contentByTopic(topic.name);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link href="/topics" className="text-xs font-medium uppercase tracking-wider text-accent hover:underline">
        All topics
      </Link>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy">{topic.name}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-2">{topic.blurb}</p>
      <p className="mt-2 text-xs text-ink-3">{pieces.length} indexed {pieces.length === 1 ? "piece" : "pieces"} · newest first</p>
      <div className="mt-6 divide-y divide-line border-t border-line">
        {pieces.map((item) => {
          const creator = getCreator(item.creatorSlug);
          if (!creator) return null;
          return <ContentCard key={item.slug} item={item} creator={creator} />;
        })}
      </div>
    </div>
  );
}
