import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Page } from "@/components/shell/Page";
import { formatDate } from "@/lib/utils";
import { getResearch, researchArticles } from "@/lib/site";

export function generateStaticParams() {
  return researchArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearch(slug);
  return { title: article?.title ?? "Research" };
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResearch(slug);
  if (!article) notFound();

  return (
    <Page width="content">
      <Link href="/research" className="text-[12px] font-medium text-accent hover:underline">
        All research
      </Link>

      <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-xl bg-paper-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt="" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
          Research
        </span>
      </div>

      <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.12em] text-ink-3">
        {article.category === "industry" ? "Industry" : "Company"} · {article.companyOrSector}
      </p>
      <h1 className="text-display mt-2 text-ink">{article.title}</h1>
      <p className="mt-3 text-[13px] text-ink-3">
        {formatDate(article.publishedAt)} · {article.readMinutes} min read
      </p>
      <p className="mt-6 max-w-2xl text-[16px] leading-7 text-ink-2">{article.summary}</p>
      <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-ink">
        {article.body.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
    </Page>
  );
}
