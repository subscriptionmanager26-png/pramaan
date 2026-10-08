import type { Metadata } from "next";
import { ResearchFilters } from "@/components/research/ResearchFilters";
import { Page, PageHeader } from "@/components/shell/Page";
import { listArticles } from "@/lib/articles/catalog";
import { listCompanies, listIndustries } from "@/lib/articles/taxonomy";
import type { Verdict } from "@/lib/articles/types";

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

  return (
    <Page>
      <PageHeader
        title="Company research memos"
        description={`${all.length} hand-built midcap memos. Filter by verdict, industry, or company. Short news desk notes live under News.`}
      />

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
