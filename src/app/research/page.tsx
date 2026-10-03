import type { Metadata } from "next";
import Link from "next/link";
import { ResearchMagazineCard } from "@/components/magazine/MagazineCards";
import { Page } from "@/components/shell/Page";
import { researchArticles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
};

export default async function ResearchPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type = "all" } = await searchParams;
  const active = type === "industry" || type === "company" ? type : "all";
  const list =
    active === "all"
      ? researchArticles
      : researchArticles.filter((a) => a.category === active);
  const [featured, ...rest] = list;

  return (
    <Page width="dash">
      <div className="flex gap-1 border-b border-line">
        {(
          [
            ["all", "All"],
            ["industry", "Industry"],
            ["company", "Companies"],
          ] as const
        ).map(([id, label]) => {
          const selected = active === id;
          const href = id === "all" ? "/research" : `/research?type=${id}`;
          return (
            <Link
              key={id}
              href={href}
              className={`relative px-3 py-3 text-[13.5px] ${
                selected ? "font-semibold text-ink" : "font-medium text-ink-3 hover:text-ink"
              }`}
            >
              {label}
              {selected ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-accent" /> : null}
            </Link>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured ? <ResearchMagazineCard article={featured} featured /> : null}
        {rest.map((article) => (
          <ResearchMagazineCard key={article.slug} article={article} />
        ))}
      </div>
    </Page>
  );
}
