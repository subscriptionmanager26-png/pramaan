import type { ArticleBlock, SeriesChartBlock } from "@/lib/articles/types";

function SeriesChart({ block }: { block: SeriesChartBlock }) {
  const allValues = block.series.flatMap((s) => s.values);
  const max = Math.max(...allValues, 1);
  const groupCount = block.categories.length;
  const seriesCount = block.series.length;
  const chartW = 560;
  const chartH = 168;
  const padL = 36;
  const padR = 16;
  const padT = 16;
  const padB = 36;
  const innerW = chartW - padL - padR;
  const innerH = chartH - padT - padB;
  const groupW = innerW / Math.max(groupCount, 1);
  const barW = Math.min(22, (groupW * 0.7) / Math.max(seriesCount, 1));

  return (
    <figure className="my-6 max-w-[32rem] overflow-hidden rounded-xl border border-line bg-paper-2/60 p-3 sm:my-8 sm:p-4">
      <figcaption className="text-[14px] font-bold tracking-tight text-ink">{block.title}</figcaption>
      <svg
        viewBox={`0 0 ${chartW} ${chartH}`}
        className="mt-3 h-auto w-full max-h-[11rem] sm:max-h-[12.5rem]"
        role="img"
        aria-label={block.title}
      >
        {block.categories.map((cat, i) => {
          const x = padL + i * groupW + groupW / 2;
          return (
            <text
              key={cat}
              x={x}
              y={chartH - 10}
              textAnchor="middle"
              className="fill-ink-3"
              style={{ fontSize: 11, fontFamily: "var(--font-geist-mono)" }}
            >
              {cat}
            </text>
          );
        })}
        {block.series.map((series, sIdx) =>
          series.values.map((value, i) => {
            const h = (Math.abs(value) / max) * innerH;
            const x =
              padL +
              i * groupW +
              groupW / 2 -
              (seriesCount * barW) / 2 +
              sIdx * barW;
            const y = padT + innerH - h;
            return (
              <rect
                key={`${series.name}-${i}`}
                x={x}
                y={y}
                width={barW - 2}
                height={Math.max(h, 1)}
                rx={3}
                fill={series.color}
              />
            );
          }),
        )}
      </svg>
      <div className="mt-3 flex flex-wrap gap-4">
        {block.series.map((s) => (
          <span key={s.name} className="inline-flex items-center gap-2 text-[12px] font-medium text-ink-2">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>
      <p className="text-meta mt-3 leading-5 text-ink-2">{block.caption}</p>
    </figure>
  );
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mt-8 max-w-3xl">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="text-section mt-10 text-ink first:mt-0">
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="mt-4 text-[16px] leading-7 text-ink-2">
              {block.text}
            </p>
          );
        }
        return <SeriesChart key={i} block={block} />;
      })}
    </div>
  );
}
