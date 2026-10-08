import type { Metadata } from "next";
import Link from "next/link";
import { NewsMagazineCard, ResearchList } from "@/components/magazine/MagazineCards";
import { Page, SoftChip } from "@/components/shell/Page";
import { researchRailItems } from "@/lib/articles/research-rail";
import { newsFeed } from "@/lib/site";

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
  const items = active === "all" ? newsFeed : newsFeed.filter((n) => n.topic === active);
  const sorted = [...items].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  const [featured, second, ...rest] = sorted;

  const researchSidebar = researchRailItems(5);

  return (
    <Page>
      <div className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <SoftChip
            key={t.id}
            href={t.id === "all" ? "/news" : `/news?topic=${t.id}`}
            active={active === t.id}
          >
            {t.label}
          </SoftChip>
        ))}
      </div>
      <p className="text-meta mt-4">
        Desk notes first — short explainers on policy, behaviour, and consumption. Open any card for
        the full brief.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0 space-y-10">
          {featured ? <NewsMagazineCard item={featured} featured /> : null}
          {second ? <NewsMagazineCard item={second} /> : null}
          <div className="divide-y divide-line border-t border-line">
            {rest.map((item) => (
              <NewsMagazineCard key={item.slug} item={item} compact />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <ResearchList items={researchSidebar} />
          <Link href="/ai" className="block rounded-2xl border border-line bg-accent-2 p-5">
            <p className="text-meta uppercase tracking-[0.14em] text-accent">AI</p>
            <p className="mt-2 text-[15px] font-bold text-ink">Summarise today’s wire</p>
          </Link>
        </div>
      </div>
    </Page>
  );
}
