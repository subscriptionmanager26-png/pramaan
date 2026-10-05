import type { Metadata } from "next";
import Link from "next/link";
import { ResearchMemoCard } from "@/components/research/ResearchMemoCard";
import { Page, PageHeader, SoftChip } from "@/components/shell/Page";
import { listArticles } from "@/lib/articles/catalog";
import { listCompanies, listIndustries } from "@/lib/articles/taxonomy";
import type { Verdict } from "@/lib/articles/types";

export const metadata: Metadata = {
  title: "Research",
};

const verdictFilters = [
  { id: "all", label: "All" },
  { id: "buy", label: "Buy" },
  { id: "neutral", label: "Neutral" },
  { id: "hold", label: "Hold" },
  { id: "avoid", label: "Avoid" },
] as const;

export default async function ResearchPage({
  searchParams,
}: {
  searchParams: Promise<{ verdict?: string; industry?: string; company?: string }>;
}) {
  const { verdict = "all", industry, company } = await searchParams;
  const activeVerdict = verdictFilters.some((f) => f.id === verdict) ? verdict : "all";
  const industries = listIndustries();
  const companies = listCompanies();

  let list = [...listArticles()].sort(
    (a, b) =>
      +new Date(b.publishedAt) - +new Date(a.publishedAt) || a.company.localeCompare(b.company),
  );

  if (activeVerdict !== "all") {
    list = list.filter((a) => a.verdict === (activeVerdict as Verdict));
  }
  if (industry) {
    list = list.filter((a) => a.industry === industry);
  }
  if (company) {
    list = list.filter((a) => a.companySlug === company);
  }

  const [featured, ...rest] = list;
  const total = listArticles().length;

  function hrefFor(next: { verdict?: string; industry?: string | null; company?: string | null }) {
    const params = new URLSearchParams();
    const v = next.verdict ?? activeVerdict;
    const ind = next.industry === null ? undefined : (next.industry ?? industry);
    const co = next.company === null ? undefined : (next.company ?? company);
    if (v && v !== "all") params.set("verdict", v);
    if (ind) params.set("industry", ind);
    if (co) params.set("company", co);
    const q = params.toString();
    return q ? `/research?${q}` : "/research";
  }

  return (
    <Page>
      <PageHeader
        eyebrow="Research desk"
        title="Company research memos"
        description={`${total} hand-built memos, tagged by company and industry. No demo content.`}
      />

      <div className="mt-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {verdictFilters.map((f) => (
            <SoftChip key={f.id} href={hrefFor({ verdict: f.id })} active={activeVerdict === f.id}>
              {f.label}
            </SoftChip>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <SoftChip href={hrefFor({ industry: null })} active={!industry}>
            All industries
          </SoftChip>
          {industries.map((ind) => (
            <SoftChip key={ind} href={hrefFor({ industry: ind })} active={industry === ind}>
              {ind}
            </SoftChip>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          <SoftChip href={hrefFor({ company: null })} active={!company}>
            All companies
          </SoftChip>
          {companies.map((c) => (
            <SoftChip
              key={c.companySlug}
              href={hrefFor({ company: c.companySlug })}
              active={company === c.companySlug}
            >
              {c.symbol}
              {c.count > 1 ? ` (${c.count})` : ""}
            </SoftChip>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-sky px-4 py-2">
        <p className="text-meta text-center text-ink-2">
          {list.length} memo{list.length === 1 ? "" : "s"}
          {industry ? ` · ${industry}` : ""}
          {company ? ` · ${companies.find((c) => c.companySlug === company)?.company ?? company}` : ""}
        </p>
      </div>

      <div className="mt-6 divide-y divide-line border-t border-line">
        {featured ? <ResearchMemoCard article={featured} featured /> : null}
        {rest.map((article) => (
          <ResearchMemoCard key={article.slug} article={article} />
        ))}
      </div>

      {!list.length ? (
        <p className="mt-10 text-[15px] text-ink-2">
          No memos for this filter.{" "}
          <Link href="/research" className="font-semibold text-accent">
            View all
          </Link>
        </p>
      ) : null}
    </Page>
  );
}
