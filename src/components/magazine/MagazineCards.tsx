import Link from "next/link";
import { formatRelative } from "@/lib/utils";
import type { NewsItem, ResearchArticle } from "@/lib/site";

function TagRow({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return (
    <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[13px] font-medium text-accent">
      {tags.map((tag) => (
        <span key={tag}>• {tag}</span>
      ))}
    </p>
  );
}

export function NewsMagazineCard({
  item,
  featured = false,
  compact = false,
}: {
  item: NewsItem;
  featured?: boolean;
  compact?: boolean;
}) {
  const tags = [item.topic, item.source.toLowerCase()];

  const external = /^https?:\/\//i.test(item.url);

  if (compact) {
    return (
      <a
        href={item.url}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="group grid grid-cols-[88px_minmax(0,1fr)] gap-4 border-b border-line py-5 last:border-0 sm:grid-cols-[120px_minmax(0,1fr)]"
      >
        <div className="aspect-[5/4] overflow-hidden rounded-xl bg-paper-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">News</p>
          <h3 className="text-headline mt-2 text-ink transition-colors group-hover:text-accent">
            {item.headline}
          </h3>
          <p className="mt-2 text-[15px] leading-6 text-ink-2 line-clamp-2">{item.summary}</p>
          <p className="text-meta mt-3">
            {item.source} · {formatRelative(item.publishedAt)}
          </p>
          <TagRow tags={tags} />
        </div>
      </a>
    );
  }

  return (
    <a
      href={item.url}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group block ${featured ? "sm:col-span-2" : ""}`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-paper-2 ${
          featured ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/10]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-sm">
          News
        </span>
        <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-highlight text-ink shadow-sm">
          ★
        </span>
      </div>
      <div className="pt-4">
        <h2
          className={`font-bold tracking-tight text-ink transition-colors group-hover:text-accent ${
            featured ? "text-[1.55rem] leading-snug sm:text-[1.85rem]" : "text-headline"
          }`}
        >
          {item.headline}
        </h2>
        <p className="mt-2 text-[15px] leading-6 text-ink-2 line-clamp-3">{item.summary}</p>
        <p className="text-meta mt-3">
          {item.source} · {formatRelative(item.publishedAt)}
        </p>
        <TagRow tags={tags} />
      </div>
    </a>
  );
}

export function ResearchMagazineCard({
  article,
  featured = false,
  compact = false,
}: {
  article: ResearchArticle;
  featured?: boolean;
  compact?: boolean;
}) {
  const tags = [article.category, article.companyOrSector.toLowerCase()];

  if (compact) {
    return (
      <Link href={`/research/${article.slug}`} className="group block border-b border-line py-5 last:border-0">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">Research</p>
        <h3 className="text-headline mt-2 text-ink transition-colors group-hover:text-accent">{article.title}</h3>
        <p className="mt-2 text-[15px] leading-6 text-ink-2 line-clamp-2">{article.summary}</p>
        <p className="text-meta mt-3">
          {article.readMinutes} min · {formatRelative(article.publishedAt)}
        </p>
        <TagRow tags={tags} />
      </Link>
    );
  }

  return (
    <Link href={`/research/${article.slug}`} className={`group block ${featured ? "sm:col-span-2" : ""}`}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-paper-2 ${
          featured ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-sm">
          Research
        </span>
      </div>
      <div className="pt-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
          {article.category === "industry" ? "Industry" : "Company"} · {article.companyOrSector}
        </p>
        <h2
          className={`mt-2 font-bold tracking-tight text-ink transition-colors group-hover:text-accent ${
            featured ? "text-[1.55rem] leading-snug sm:text-[1.85rem]" : "text-headline"
          }`}
        >
          {article.title}
        </h2>
        <p className="mt-2 text-[15px] leading-6 text-ink-2 line-clamp-3">{article.summary}</p>
        <p className="text-meta mt-3">
          {article.readMinutes} min read · {formatRelative(article.publishedAt)}
        </p>
        <TagRow tags={tags} />
      </div>
    </Link>
  );
}

export function TrendingList({
  items,
}: {
  items: { href: string; title: string; meta: string }[];
}) {
  return (
    <aside>
      <h2 className="text-[1.35rem] font-black italic tracking-tight text-ink">TRENDING</h2>
      <ul className="mt-5 divide-y divide-line">
        {items.map((item) => (
          <li key={item.href} className="py-4 first:pt-0">
            <p className="text-meta">{item.meta}</p>
            <Link href={item.href} className="mt-1.5 block text-[15px] font-bold leading-snug text-ink hover:text-accent">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
