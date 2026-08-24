import type { Metadata } from "next";
import Link from "next/link";
import { ContentCard } from "@/components/ContentCard";
import { Avatar } from "@/components/Avatar";
import { SebiBadge } from "@/components/SebiBadge";
import { contentByCreator, getCreator, portfolioContent, portfolioCreators } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  const voices = portfolioCreators();
  const feed = portfolioContent().slice(0, 12);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <header className="border-b border-line pb-8">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-navy sm:text-5xl">Portfolio</h1>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-ink-2">
          A sample set of voices to follow. When accounts ship, this becomes yours.
        </p>
      </header>

      <section className="border-b border-line py-8">
        <h2 className="text-sm font-semibold text-navy">Voices you follow</h2>
        <ul className="mt-5 space-y-4">
          {voices.map((creator) => {
            const latest = contentByCreator(creator.slug)[0];
            return (
              <li key={creator.slug}>
                <Link href={`/creators/${creator.slug}`} className="group flex items-start gap-3">
                  <Avatar creator={creator} />
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-navy group-hover:text-accent">{creator.name}</span>
                      <SebiBadge type={creator.sebi.type} />
                    </span>
                    <span className="mt-1 block text-sm text-ink-2">{creator.specialties.slice(0, 3).join(" · ")}</span>
                    {latest ? (
                      <span className="mt-1 block text-xs text-ink-3 line-clamp-1">Latest: {latest.title}</span>
                    ) : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="pt-2">
        <h2 className="pt-6 text-sm font-semibold text-navy">From your portfolio</h2>
        <div className="divide-y divide-line">
          {feed.map((item) => {
            const creator = getCreator(item.creatorSlug);
            if (!creator) return null;
            return <ContentCard key={item.slug} item={item} creator={creator} />;
          })}
        </div>
      </section>
    </div>
  );
}
