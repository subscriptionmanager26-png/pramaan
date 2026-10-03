import type { NewsStory, PortfolioHolding } from "@/lib/news";
import { formatRelative } from "@/lib/utils";

export function HoldingsRail({
  holdings,
  extra,
}: {
  holdings: PortfolioHolding[];
  extra: number;
}) {
  return (
    <section>
      <p className="text-meta">Based on your portfolio</p>
      <div className="mt-2.5 flex gap-2 overflow-x-auto pb-0.5 scrollbar-none">
        {holdings.map((h) => (
          <span
            key={h.symbol}
            className="shrink-0 rounded-lg border border-line bg-white px-3 py-1.5 text-[13px] font-medium text-ink"
          >
            {h.label}
          </span>
        ))}
        {extra > 0 ? (
          <span className="shrink-0 rounded-lg border border-line bg-paper-2 px-3 py-1.5 text-[13px] font-medium text-ink-3">
            +{extra}
          </span>
        ) : null}
      </div>
    </section>
  );
}

export function NewsStoryCard({
  story,
  variant = "featured",
}: {
  story: NewsStory;
  variant?: "featured" | "compact";
}) {
  if (variant === "compact") {
    return (
      <a href={story.url} target="_blank" rel="noreferrer" className="flex gap-3 py-4">
        <span className="min-w-0 flex-1">
          <span className="text-headline block text-ink">{story.headline}</span>
          <span className="text-meta mt-1.5 block">
            {story.source} · {formatRelative(story.publishedAt)}
          </span>
        </span>
        <span
          className="h-[4.5rem] w-24 shrink-0 rounded-[10px] sm:w-28"
          style={{ background: `linear-gradient(145deg, ${story.thumb}, ${story.thumb}aa)` }}
          aria-hidden
        />
      </a>
    );
  }

  return (
    <a href={story.url} target="_blank" rel="noreferrer" className="block py-5">
      <div className="flex gap-4">
        <span className="min-w-0 flex-1">
          <span className="text-headline block text-ink">{story.headline}</span>
          <span className="text-meta mt-1.5 block">
            {story.source} · {formatRelative(story.publishedAt)}
          </span>
          <span className="text-body mt-2 block text-ink-2">{story.summary}</span>
        </span>
        <span
          className="h-[4.5rem] w-24 shrink-0 rounded-[10px] sm:h-[5.5rem] sm:w-[8.5rem]"
          style={{ background: `linear-gradient(145deg, ${story.thumb}, ${story.thumb}aa)` }}
          aria-hidden
        />
      </div>
      {story.whyItMatters ? (
        <div className="mt-3 rounded-lg bg-accent-2 px-3.5 py-2.5 text-[12.5px] leading-5 text-ink">
          <span className="font-medium text-ink">Why it matters to you</span>
          <span className="mt-0.5 block text-ink-2">{story.whyItMatters}</span>
        </div>
      ) : null}
    </a>
  );
}
