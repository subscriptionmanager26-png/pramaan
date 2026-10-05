import Link from "next/link";
import type { Article, Verdict } from "@/lib/articles/types";
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
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/research/${article.slug}`}
      className="group block border-b border-line py-6 last:border-0"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${verdictStyle[article.verdict]}`}
        >
          {article.verdict}
        </span>
        <span className="text-meta uppercase tracking-[0.12em]">{article.symbol}</span>
        <span className="text-[12px] font-medium text-accent">• {article.industry}</span>
      </div>
      <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-3">
        {article.company}
      </p>
      <h2
        className={`mt-1.5 font-bold tracking-tight text-ink transition-colors group-hover:text-accent ${
          featured ? "text-[1.45rem] leading-snug sm:text-[1.7rem]" : "text-headline"
        }`}
      >
        {article.title}
      </h2>
      <p className="mt-2 max-w-3xl text-[15px] leading-6 text-ink-2 line-clamp-3">{article.dek}</p>
      <p className="text-meta mt-3">
        {article.readMinutes} min · {formatRelative(`${article.publishedAt}T12:00:00+05:30`)}
      </p>
    </Link>
  );
}
