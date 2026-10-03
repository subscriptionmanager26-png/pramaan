import type { Metadata } from "next";
import Link from "next/link";
import { NewsMagazineCard } from "@/components/magazine/MagazineCards";
import { Page } from "@/components/shell/Page";
import { newsFeed, researchArticles } from "@/lib/site";

export const metadata: Metadata = {
  title: "News",
};

const topics = [
  { id: "all", label: "All" },
  { id: "markets", label: "Markets" },
  { id: "economy", label: "Economy" },
  { id: "companies", label: "Companies" },
  { id: "policy", label: "Policy" },
] as const;

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic = "all" } = await searchParams;
  const active = topics.some((t) => t.id === topic) ? topic : "all";
  const items =
    active === "all" ? newsFeed : newsFeed.filter((n) => n.topic === active);
  const sorted = [...items].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  const [featured, ...rest] = sorted;

  return (
    <Page width="dash">
      <div className="flex gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex gap-1 overflow-x-auto border-b border-line scrollbar-none">
            {topics.map((t) => {
              const selected = active === t.id;
              const href = t.id === "all" ? "/news" : `/news?topic=${t.id}`;
              return (
                <Link
                  key={t.id}
                  href={href}
                  className={`relative shrink-0 px-3 py-3 text-[13.5px] whitespace-nowrap ${
                    selected ? "font-semibold text-ink" : "font-medium text-ink-3 hover:text-ink"
                  }`}
                >
                  {t.label}
                  {selected ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-accent" /> : null}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {featured ? <NewsMagazineCard item={featured} featured /> : null}
            {rest.map((item) => (
              <NewsMagazineCard key={item.slug} item={item} />
            ))}
          </div>
        </div>

        <aside className="hidden w-72 shrink-0 xl:block">
          <div className="sticky top-20 space-y-8">
            <section>
              <h2 className="text-[14px] font-semibold text-ink">Trending research</h2>
              <ul className="mt-3 divide-y divide-line">
                {researchArticles.slice(0, 4).map((a) => (
                  <li key={a.slug} className="py-3 first:pt-0">
                    <Link
                      href={`/research/${a.slug}`}
                      className="text-[13.5px] font-medium leading-snug text-ink hover:text-accent"
                    >
                      {a.title}
                    </Link>
                    <p className="text-meta mt-1">{a.readMinutes} min</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </aside>
      </div>
    </Page>
  );
}
