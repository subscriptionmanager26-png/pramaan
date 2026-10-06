import Link from "next/link";
import type { Article, Verdict } from "@/lib/articles/types";
import { articleCover } from "@/lib/articles/images";
import { formatRelative } from "@/lib/utils";

const verdictStyle: Record<Verdict, string> = {
  buy: "bg-accent text-white",
  hold: "bg-highlight text-ink",
  avoid: "bg-ink text-white",
  neutral: "bg-paper-2 text-ink-2 border border-line",
};

export function ResearchMemoCard({
  article,
  featured = false,
  layout = "row",
}: {
  article: Article;
  featured?: boolean;
  /** `grid` = magazine card with cover; `row` = list row with thumb */
  layout?: "row" | "grid";
}) {
  const cover = articleCover(article.slug, featured ? "hero" : layout === "grid" ? "card" : "thumb");
  const published = formatRelative(`${article.publishedAt}T12:00:00+05:30`);

  if (layout === "grid") {
    return (
      <Link href={`/research/${article.slug}`} className="group block">
        <div
          className={`relative overflow-hidden rounded-2xl bg-paper-2 ${
            featured ? "aspect-[16/9]" : "aspect-[16/10]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            className={`absolute left-3 top-3 rounded-md px-2 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm ${verdictStyle[article.verdict]}`}
          >
            {article.verdict}
          </span>
        </div>
        <div className="pt-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-3">
            {article.symbol} · {article.industry}
          </p>
          <h2
            className={`mt-1.5 font-bold tracking-tight text-ink transition-colors group-hover:text-accent ${
              featured ? "text-[1.45rem] leading-snug sm:text-[1.7rem]" : "text-headline"
            }`}
          >
            {article.title}
          </h2>
          <p className="mt-2 text-[15px] leading-6 text-ink-2 line-clamp-3">{article.dek}</p>
          <p className="text-meta mt-3">
            {article.readMinutes} min · {published}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/research/${article.slug}`}
      className="group grid grid-cols-[88px_minmax(0,1fr)] gap-4 border-b border-line py-5 last:border-0 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-5"
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-paper-2 sm:aspect-[16/11]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${verdictStyle[article.verdict]}`}
          >
            {article.verdict}
          </span>
          <span className="text-meta uppercase tracking-[0.12em]">{article.symbol}</span>
          <span className="text-[12px] font-medium text-accent">• {article.industry}</span>
        </div>
        <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-3">
          {article.company}
        </p>
        <h2
          className={`mt-1 font-bold tracking-tight text-ink transition-colors group-hover:text-accent ${
            featured ? "text-[1.25rem] leading-snug sm:text-[1.45rem]" : "text-headline"
          }`}
        >
          {article.title}
        </h2>
        <p className="mt-1.5 hidden text-[15px] leading-6 text-ink-2 line-clamp-2 sm:block">
          {article.dek}
        </p>
        <p className="text-meta mt-2">
          {article.readMinutes} min · {published}
        </p>
      </div>
    </Link>
  );
}
