import type { AllocationSlice } from "@/lib/portfolio/dashboard-data";

export function AllocationDonut({ slices }: { slices: AllocationSlice[] }) {
  const gradient = slices
    .reduce<{ parts: string[]; cursor: number }>(
      (acc, slice) => {
        const end = acc.cursor + slice.weightPct;
        acc.parts.push(`${slice.color} ${acc.cursor}% ${end}%`);
        acc.cursor = end;
        return acc;
      },
      { parts: [], cursor: 0 },
    )
    .parts.join(", ");

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
      <div className="relative h-44 w-44 shrink-0">
        <div
          className="absolute inset-0 rounded-full border border-line shadow-[2px_2px_0_#0b0b0b]"
          style={{ background: `conic-gradient(${gradient})` }}
          role="img"
          aria-label="Asset allocation chart"
        />
        <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full border border-line bg-white text-center">
          <span className="text-meta text-ink-3">Allocation</span>
          <span className="mt-0.5 text-[15px] font-semibold text-ink">100%</span>
        </div>
      </div>
      <ul className="w-full min-w-0 space-y-2.5 sm:max-w-xs">
        {slices.map((slice) => (
          <li key={slice.label} className="flex items-center gap-2.5 text-[13px]">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-sm border border-line"
              style={{ backgroundColor: slice.color }}
              aria-hidden
            />
            <span className="min-w-0 flex-1 truncate text-ink">{slice.label}</span>
            <span className="shrink-0 font-medium tabular-nums text-ink">{slice.weightPct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
