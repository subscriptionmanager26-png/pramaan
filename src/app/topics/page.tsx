import type { Metadata } from "next";
import Link from "next/link";
import { content, topics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Topics",
};

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-navy">What are you trying to understand?</h1>
      <p className="mt-2 max-w-xl text-sm leading-6 text-ink-2">Start with a subject, then compare how registered voices explain it.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {topics.map((t) => {
          const n = content.filter((c) => c.topic === t.name).length;
          return (
            <Link key={t.slug} href={`/topics/${t.slug}`} className="border-t border-line py-5 hover:border-navy/25">
              <h2 className="font-semibold text-navy">{t.name}</h2>
              <p className="mt-1 text-sm leading-6 text-ink-2">{t.blurb}</p>
              <p className="mt-2 text-xs text-ink-3">{n} {n === 1 ? "piece" : "pieces"} indexed</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
