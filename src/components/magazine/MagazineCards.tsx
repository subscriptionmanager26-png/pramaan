import Link from "next/link";
import { formatRelative } from "@/lib/utils";
import type { NewsItem, ResearchArticle } from "@/lib/site";

export function NewsMagazineCard({
  item,
  featured = false,
}: {
  item: NewsItem;
  featured?: boolean;
}) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className={`group flex flex-col overflow-hidden rounded-xl border border-line bg-white ${
        featured ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-paper-2 ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
          News
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-3">{item.topic}</p>
        <h2
          className={`mt-1.5 font-semibold tracking-tight text-ink group-hover:text-accent ${
            featured ? "text-[1.35rem] leading-snug sm:text-[1.5rem]" : "text-headline"
          }`}
        >
          {item.headline}
        </h2>
        <p className="mt-2 flex-1 text-[13.5px] leading-6 text-ink-2 line-clamp-3">{item.summary}</p>
        <p className="text-meta mt-3">
          {item.source} · {formatRelative(item.publishedAt)}
        </p>
      </div>
    </a>
  );
}

export function ResearchMagazineCard({
  article,
  featured = false,
}: {
  article: ResearchArticle;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/research/${article.slug}`}
      className={`group flex flex-col overflow-hidden rounded-xl border border-line bg-white ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-paper-2 ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
          Research
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-3">
          {article.category === "industry" ? "Industry" : "Company"} · {article.companyOrSector}
        </p>
        <h2
          className={`mt-1.5 font-semibold tracking-tight text-ink group-hover:text-accent ${
            featured ? "text-[1.35rem] leading-snug sm:text-[1.5rem]" : "text-headline"
          }`}
        >
          {article.title}
        </h2>
        <p className="mt-2 flex-1 text-[13.5px] leading-6 text-ink-2 line-clamp-3">{article.summary}</p>
        <p className="text-meta mt-3">
          {article.readMinutes} min read · {formatRelative(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
