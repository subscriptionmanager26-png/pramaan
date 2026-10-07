import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/research/ArticleBody";
import { ResearchDossier } from "@/components/research/ResearchDossier";
import { ResearchMemoCard } from "@/components/research/ResearchMemoCard";
import { Page } from "@/components/shell/Page";
import { getArticle, listArticles, relatedArticles } from "@/lib/articles/catalog";
import { articleCover } from "@/lib/articles/images";
import { getDeepResearchForArticle } from "@/lib/research";
import { formatDate } from "@/lib/utils";
import { isDeskSectionHeader } from "@/lib/desk-notes";
import { getResearch, researchArticles } from "@/lib/site";

export function generateStaticParams() {
  const memoSlugs = listArticles().map((a) => ({ slug: a.slug }));
  const noteSlugs = researchArticles.map((a) => ({ slug: a.slug }));
  return [...memoSlugs, ...noteSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (article) return { title: article.title };
  const note = getResearch(slug);
  return { title: note?.title ?? "Research" };
}

const verdictStyle = {
  buy: "bg-accent text-white",
  hold: "bg-highlight text-ink",
  avoid: "bg-ink text-white",
  neutral: "bg-paper-2 text-ink-2 border border-line",
} as const;

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  const research = getDeepResearchForArticle(slug);

  if (article && article.blocks.length && research) {
    const related = relatedArticles(slug, 6);

    return (
      <Page width="content">
        <Link href="/research" className="text-[13px] font-semibold text-accent hover:underline">
          ← All research
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${verdictStyle[article.verdict]}`}
          >
            {article.verdict}
          </span>
          <span className="text-meta uppercase tracking-[0.12em]">{article.symbol}</span>
          <span className="text-meta">· {article.conviction} conviction</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-[13px]">
          <Link
            href={`/research?company=${article.companySlug}`}
            className="rounded-full border border-line bg-white px-3 py-1 font-medium text-ink hover:border-accent/40 hover:text-accent"
          >
            {article.company}
          </Link>
          <Link
            href={`/research?industry=${encodeURIComponent(article.industry)}`}
            className="rounded-full border border-line bg-white px-3 py-1 font-medium text-accent hover:border-accent/40"
          >
            {article.industry}
          </Link>
        </div>

        <h1 className="text-section mt-4 text-ink">{article.title}</h1>
        <p className="mt-3 text-[17px] leading-7 text-ink-2">{article.dek}</p>
        <p className="text-meta mt-3">
          {formatDate(`${article.publishedAt}T12:00:00+05:30`)} · {article.readMinutes} min read
        </p>

        <div className="mt-8 max-w-xl overflow-hidden rounded-2xl border border-line bg-paper-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={articleCover(article.slug, "hero")}
            alt=""
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        {article.keyTakeaways.length ? (
          <div className="mt-8 rounded-2xl border border-line bg-accent-2/50 p-5">
            <p className="text-meta uppercase tracking-[0.14em] text-accent">Key takeaways</p>
            <ul className="mt-3 space-y-2">
              {article.keyTakeaways.map((t) => (
                <li key={t} className="text-[15px] leading-6 text-ink">
                  <span className="mr-2 text-accent">•</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <ArticleBody blocks={article.blocks} />
        <ResearchDossier research={research} />

        {related.length ? (
          <section className="mt-14 border-t border-line pt-10">
            <h2 className="text-[1.1rem] font-black italic tracking-tight text-ink">RELATED</h2>
            <p className="text-meta mt-2">
              More on {article.company} and {article.industry}
            </p>
            <div className="mt-4 divide-y divide-line border-t border-line">
              {related.map((a) => (
                <ResearchMemoCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12 rounded-2xl border border-line bg-paper-2 p-5">
          <p className="text-meta uppercase tracking-[0.14em]">Disclaimer</p>
          <p className="mt-2 text-[14px] leading-6 text-ink-2">
            For informational purposes only. Not investment advice. Verify with filings and a licensed
            adviser.
          </p>
          <Link href="/ai" className="btn-primary mt-4 text-[13px]">
            Ask AI about this name
          </Link>
        </div>
      </Page>
    );
  }

  const note = getResearch(slug);
  if (!note) notFound();

  const otherNotes = researchArticles.filter((a) => a.slug !== note.slug).slice(0, 4);

  return (
    <Page width="content">
      <Link href="/research" className="text-[13px] font-semibold text-accent hover:underline">
        ← All research
      </Link>

      <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
        Desk note · {note.category} · {note.companyOrSector}
      </p>
      <h1 className="text-section mt-2 text-ink">{note.title}</h1>
      <p className="mt-3 text-[17px] leading-7 text-ink-2">{note.summary}</p>
      <p className="text-meta mt-3">
        {formatDate(note.publishedAt)} · {note.readMinutes} min read
      </p>

      <div className="mt-8 max-w-xl overflow-hidden rounded-2xl border border-line bg-paper-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={note.image} alt="" className="aspect-[16/9] w-full object-cover" />
      </div>

      {note.keyTakeaways?.length ? (
        <div className="mt-8 rounded-2xl border border-line bg-accent-2/50 p-5">
          <p className="text-meta uppercase tracking-[0.14em] text-accent">Key takeaways</p>
          <ul className="mt-3 space-y-2">
            {note.keyTakeaways.map((t) => (
              <li key={t.slice(0, 48)} className="text-[15px] leading-6 text-ink">
                <span className="mr-2 text-accent">•</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-ink">
        {note.body.map((para, i) =>
          isDeskSectionHeader(para) ? (
            <h2
              key={`h-${i}-${para}`}
              className="pt-2 text-[13px] font-bold uppercase tracking-[0.08em] text-accent"
            >
              {para}
            </h2>
          ) : (
            <p key={`p-${i}-${para.slice(0, 40)}`}>{para}</p>
          ),
        )}
      </div>

      {note.sourceNote ? (
        <p className="mt-8 max-w-2xl text-[13px] leading-6 text-ink-3">{note.sourceNote}</p>
      ) : null}

      {otherNotes.length ? (
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="text-[1.1rem] font-black italic tracking-tight text-ink">MORE DESK NOTES</h2>
          <div className="mt-4 divide-y divide-line border-t border-line">
            {otherNotes.map((a) => (
              <Link
                key={a.slug}
                href={`/research/${a.slug}`}
                className="group block border-b border-line py-5 last:border-0"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
                  {a.companyOrSector}
                </p>
                <h3 className="text-headline mt-2 text-ink transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-2 line-clamp-2">{a.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-12 rounded-2xl border border-line bg-paper-2 p-5">
        <p className="text-meta uppercase tracking-[0.14em]">Disclaimer</p>
        <p className="mt-2 text-[14px] leading-6 text-ink-2">
          For informational purposes only. Not investment advice. Verify with filings and a licensed
          adviser.
        </p>
      </div>
    </Page>
  );
}
