import type { Metadata } from "next";
import Link from "next/link";
import { ResearchMagazineCard } from "@/components/magazine/MagazineCards";
import { ResearchFilters } from "@/components/research/ResearchFilters";
import { Page, PageHeader } from "@/components/shell/Page";
import { listArticles } from "@/lib/articles/catalog";
import { listCompanies, listIndustries } from "@/lib/articles/taxonomy";
import type { Verdict } from "@/lib/articles/types";
import { researchArticles } from "@/lib/site";
import { formatRelative } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Research",
};

export default async function ResearchPage({
  searchParams,
}: {
  searchParams: Promise<{ verdict?: string; industry?: string; company?: string; q?: string }>;
}) {
  const { verdict = "all", industry, company, q = "" } = await searchParams;
  const all = listArticles();
  const industries = listIndustries();
  const companies = listCompanies();

  const industryCounts = Object.fromEntries(
    industries.map((ind) => [ind, all.filter((a) => a.industry === ind).length]),
  );
  const verdictCounts = {
    buy: all.filter((a) => a.verdict === "buy").length,
    hold: all.filter((a) => a.verdict === "hold").length,
    avoid: all.filter((a) => a.verdict === "avoid").length,
    neutral: all.filter((a) => a.verdict === "neutral").length,
  };

  let list = [...all].sort(
    (a, b) =>
      +new Date(b.publishedAt) - +new Date(a.publishedAt) || a.company.localeCompare(b.company),
  );

  if (verdict !== "all" && ["buy", "hold", "avoid", "neutral"].includes(verdict)) {
    list = list.filter((a) => a.verdict === (verdict as Verdict));
  }
  if (industry) list = list.filter((a) => a.industry === industry);
  if (company) list = list.filter((a) => a.companySlug === company);
  if (q.trim()) {
    const needle = q.trim().toLowerCase();
    list = list.filter((a) =>
      `${a.title} ${a.dek} ${a.symbol} ${a.company} ${a.industry}`.toLowerCase().includes(needle),
    );
  }

  const showDeskNotes = !industry && !company && verdict === "all" && !q.trim();

  return (
    <Page>
      <PageHeader
        eyebrow="Research desk"
        title="Company research memos"
        description={`${all.length} hand-built midcap memos. Filter by verdict, industry, or company.`}
      />

      {showDeskNotes && researchArticles.length ? (
        <section className="mb-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-meta uppercase tracking-[0.14em]">Desk notes</p>
              <h2 className="mt-1 text-[1.25rem] font-bold tracking-tight text-ink">
                From the advisor-feed wire
              </h2>
            </div>
            <p className="text-meta hidden sm:block">
              {researchArticles
                .map((a) => formatRelative(a.publishedAt))
                .slice(0, 1)
                .join("")}
            </p>
          </div>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {researchArticles.map((article) => (
              <ResearchMagazineCard key={article.slug} article={article} />
            ))}
          </div>
          <p className="text-meta mt-4">
            Looking for a ticker memo?{" "}
            <Link href="#memos" className="font-semibold text-accent hover:underline">
              Jump to company filters
            </Link>
          </p>
        </section>
      ) : null}

      <div id="memos">
        <ResearchFilters
          verdict={verdict}
          industry={industry}
          company={company}
          q={q}
          industries={industries}
          companies={companies}
          industryCounts={industryCounts}
          verdictCounts={verdictCounts}
          totalCount={all.length}
          articles={list}
        />
      </div>
    </Page>
  );
}
