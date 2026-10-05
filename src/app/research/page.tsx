import type { Metadata } from "next";
import { ResearchMagazineCard } from "@/components/magazine/MagazineCards";
import { Page, PageHeader, SoftChip } from "@/components/shell/Page";
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
    <Page>
      <PageHeader
        eyebrow="Research desk"
        title="Master the markets"
        description="Plain-English reports on industries and companies — what changed, why it matters."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {(
          [
            ["all", "All"],
            ["industry", "Industry"],
            ["company", "Companies"],
          ] as const
        ).map(([id, label]) => (
          <SoftChip
            key={id}
            href={id === "all" ? "/research" : `/research?type=${id}`}
            active={active === id}
          >
            {label}
          </SoftChip>
        ))}
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {featured ? <ResearchMagazineCard article={featured} featured /> : null}
        {rest.map((article) => (
          <ResearchMagazineCard key={article.slug} article={article} />
        ))}
      </div>
    </Page>
  );
}
