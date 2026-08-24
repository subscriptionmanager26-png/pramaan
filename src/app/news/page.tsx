import type { Metadata } from "next";
import { ContentCard } from "@/components/ContentCard";
import { getCreator, newsContent } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  const feed = newsContent();

  const byDay = new Map<string, typeof feed>();
  for (const item of feed) {
    const key = formatDate(item.publishedAt);
    const list = byDay.get(key) ?? [];
    list.push(item);
    byDay.set(key, list);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <header className="border-b border-line pb-8">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-navy sm:text-5xl">News</h1>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-ink-2">
          What’s new from registered voices — markets, tax, funds, and more — newest first.
        </p>
      </header>

      <div className="mt-2">
        {[...byDay.entries()].map(([day, items]) => (
          <section key={day} className="border-b border-line py-8 last:border-b-0">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-3">{day}</h2>
            <div className="mt-2 divide-y divide-line">
              {items.map((item) => {
                const creator = getCreator(item.creatorSlug);
                if (!creator) return null;
                return <ContentCard key={item.slug} item={item} creator={creator} />;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
