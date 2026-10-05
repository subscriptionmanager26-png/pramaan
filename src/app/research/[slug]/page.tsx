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
      <Link href="/research" className="text-[13px] font-semibold text-accent hover:underline">
        ← All research
      </Link>

      <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-2xl bg-paper-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt="" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-sm">
          Research
        </span>
      </div>

      <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
        {article.category === "industry" ? "Industry" : "Company"} · {article.companyOrSector}
      </p>
      <h1 className="text-section mt-2 text-ink">{article.title}</h1>
      <p className="text-meta mt-3">
        {formatDate(article.publishedAt)} · {article.readMinutes} min read
      </p>
      <p className="mt-6 text-[17px] leading-7 text-ink-2">{article.summary}</p>
      <div className="mt-8 space-y-5 text-[16px] leading-7 text-ink">
        {article.body.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-line bg-accent-2 p-5">
        <p className="text-meta uppercase tracking-[0.14em] text-accent">Go deeper with AI</p>
        <p className="mt-2 text-[15px] font-bold text-ink">Ask what this means for your portfolio.</p>
        <Link href="/ai" className="btn-primary mt-4 text-[13px]">
          Ask AI
        </Link>
      </div>
    </Page>
  );
}
