import Link from "next/link";
import { NewsMagazineCard, ResearchMagazineCard, TrendingList } from "@/components/magazine/MagazineCards";
import { newsFeed, researchArticles } from "@/lib/site";
import { formatRelative } from "@/lib/utils";

function HeroCollage() {
  return (
    <div className="relative mx-auto mt-10 hidden h-[320px] w-full max-w-3xl md:block lg:absolute lg:right-0 lg:top-8 lg:mt-0 lg:h-[420px] lg:w-[46%]">
      <div className="animate-float absolute left-[8%] top-6 w-[42%] overflow-hidden rounded-2xl border border-line bg-white shadow-[6px_6px_0_rgba(11,11,11,0.08)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
          alt=""
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="animate-float-delayed absolute right-[4%] top-0 w-[48%] rounded-2xl bg-ink px-5 py-6 text-white shadow-[8px_8px_0_rgba(47,87,255,0.25)]">
        <p className="text-meta text-white/55">Research desk</p>
        <p className="mt-3 text-[1.35rem] font-bold leading-snug tracking-tight">Monthly market update</p>
        <p className="mt-2 text-[13px] text-white/70">Margins, flows, and what changed this week.</p>
      </div>
      <div className="animate-float absolute bottom-4 left-[18%] w-[44%] rounded-2xl border border-line bg-accent px-5 py-5 text-white shadow-[6px_6px_0_rgba(11,11,11,0.12)]">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Weekly</p>
        <p className="mt-2 text-[1.1rem] font-bold leading-snug">AI brief for global allocators</p>
      </div>
      <div className="animate-float-delayed absolute bottom-10 right-[2%] w-[36%] overflow-hidden rounded-2xl border border-line bg-highlight shadow-[5px_5px_0_rgba(11,11,11,0.1)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80"
          alt=""
          className="aspect-square w-full object-cover mix-blend-multiply"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  const sortedNews = [...newsFeed].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  const ticker = sortedNews.slice(0, 5);
  const [lead, second, ...restNews] = sortedNews;
  const trending = researchArticles.slice(0, 5).map((a) => ({
    href: `/research/${a.slug}`,
    title: a.title,
    meta: `${formatRelative(a.publishedAt)} · ${a.readMinutes} min`,
  }));

  const today = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date("2026-10-05T12:00:00+05:30"));

  return (
    <div>
      <section className="grid-paper relative overflow-hidden border-b border-line">
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:min-h-[540px]">
          <div className="animate-fade-up relative z-10 max-w-xl">
            <p className="text-meta uppercase tracking-[0.16em] text-ink-3">Pramaan</p>
            <h1 className="text-display mt-4 text-ink">Outthink The Market.</h1>
            <p className="mt-5 max-w-md text-[17px] leading-7 text-ink-2">
              Understand what&apos;s happening in markets — and know what to do next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/research" className="btn-primary">
                Explore research
              </Link>
              <Link href="/ai" className="btn-secondary">
                Try AI
              </Link>
            </div>

            <div className="mt-10 flex gap-3 overflow-x-auto pb-1 scrollbar-none sm:grid sm:grid-cols-3 sm:gap-0 sm:overflow-visible sm:divide-x sm:divide-line sm:rounded-2xl sm:border sm:border-line sm:bg-white/80 sm:backdrop-blur">
              {[
                { k: "4.9", t: "Loved by investors who want clarity, not noise" },
                { k: "AI", t: "Ask anything — briefs grounded in today’s wire" },
                { k: "Global", t: "Advisors for cross-border investing, listed plainly" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="min-w-[220px] rounded-2xl border border-line bg-white/90 px-4 py-4 sm:min-w-0 sm:rounded-none sm:border-0 sm:bg-transparent"
                >
                  <p className="text-[1.35rem] font-black tracking-tight text-ink">{item.k}</p>
                  <p className="text-meta mt-2 leading-5 text-ink-2">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroCollage />
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-4 scrollbar-none sm:px-6">
          {ticker.map((item) => (
            <a
              key={item.slug}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-w-[240px] shrink-0 items-baseline gap-3 hover:opacity-80 sm:min-w-0 sm:flex-1"
            >
              <span className="text-meta shrink-0 text-accent">
                {new Date(item.publishedAt).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </span>
              <span className="text-[13.5px] font-semibold leading-snug text-ink line-clamp-2">
                {item.headline}
              </span>
            </a>
          ))}
          <Link href="/news" className="shrink-0 self-center text-[13px] font-semibold text-accent whitespace-nowrap">
            More news →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-section text-ink">
            <span className="mark">What&apos;s Going On — And Why You Should Care.</span>
          </h2>
          <p className="text-meta mt-4">{today}</p>
          <div className="mt-4 rounded-lg bg-sky px-4 py-2 text-center">
            <p className="text-meta text-ink-2">Today&apos;s issue is curated · AI brief available</p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-10">
            {lead ? <NewsMagazineCard item={lead} featured /> : null}
            {second ? <NewsMagazineCard item={second} /> : null}
            <div className="rounded-2xl border border-line bg-accent-2 p-5 sm:p-6">
              <p className="text-meta uppercase tracking-[0.14em] text-accent">Pramaan AI</p>
              <h3 className="mt-2 text-[1.35rem] font-bold tracking-tight text-ink">
                Ask what the market move means for you
              </h3>
              <p className="mt-2 max-w-xl text-[15px] leading-6 text-ink-2">
                Turn the wire into a plain answer — rates, sectors, or a company you follow.
              </p>
              <Link href="/ai" className="btn-primary mt-5">
                Open AI
              </Link>
            </div>
            <div className="divide-y divide-line border-t border-line">
              {restNews.slice(0, 4).map((item) => (
                <NewsMagazineCard key={item.slug} item={item} compact />
              ))}
            </div>
            <div>
              <div className="mb-6 flex items-end justify-between gap-3">
                <h3 className="text-section text-ink">
                  <span className="mark">Research</span>
                </h3>
                <Link href="/research" className="text-[13px] font-semibold text-accent">
                  All research →
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                {researchArticles.slice(0, 2).map((article) => (
                  <ResearchMagazineCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:pt-1">
            <div className="sticky top-24 space-y-10">
              <TrendingList items={trending} />
              <div className="rounded-2xl border border-line bg-white p-5">
                <p className="text-meta uppercase tracking-[0.14em]">Advisors</p>
                <p className="mt-2 text-[15px] font-bold leading-snug text-ink">
                  Need a licensed hand for global investing?
                </p>
                <Link href="/advisors" className="btn-secondary mt-4 text-[13px]">
                  Browse advisors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
