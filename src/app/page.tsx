import Link from "next/link";
import { ResearchMemoCard } from "@/components/research/ResearchMemoCard";
import { SoftChip } from "@/components/shell/Page";
import { listArticles } from "@/lib/articles/catalog";
import { listIndustries } from "@/lib/articles/taxonomy";

export default function HomePage() {
  const articles = [...listArticles()].sort(
    (a, b) =>
      +new Date(b.publishedAt) - +new Date(a.publishedAt) || a.company.localeCompare(b.company),
  );
  const industries = listIndustries();
  const buys = articles.filter((a) => a.verdict === "buy").slice(0, 4);

  return (
    <div>
      <section className="grid-paper relative overflow-hidden border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
          <div className="animate-fade-up max-w-2xl">
            <p className="text-meta uppercase tracking-[0.16em] text-ink-3">Pramaan Research</p>
            <h1 className="text-display mt-4 text-ink">Company research, written for operators.</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-ink-2">
              {articles.length} hand-built midcap memos — tagged by company and industry. No demo
              filler.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/research" className="btn-primary">
                Browse research
              </Link>
              <Link href="/ai" className="btn-secondary">
                Ask AI
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {industries.map((ind) => (
                <SoftChip key={ind} href={`/research?industry=${encodeURIComponent(ind)}`}>
                  {ind}
                </SoftChip>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-section text-ink">
            <span className="mark">Latest memos</span>
          </h2>
          <p className="text-meta mt-3">{articles.length} articles on the desk</p>
        </div>

        {buys.length ? (
          <div className="mt-10">
            <h3 className="text-[1.1rem] font-black italic tracking-tight text-ink">BUY IDEAS</h3>
            <div className="mt-2 divide-y divide-line border-t border-line">
              {buys.map((a) => (
                <ResearchMemoCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12">
          <div className="mb-2 flex items-end justify-between gap-3">
            <h3 className="text-[1.1rem] font-black italic tracking-tight text-ink">ALL RESEARCH</h3>
            <Link href="/research" className="text-[13px] font-semibold text-accent">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-line border-t border-line">
            {articles.slice(0, 12).map((a) => (
              <ResearchMemoCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
