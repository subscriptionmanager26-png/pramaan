import type { PerformancePoint } from "@/lib/portfolio/dashboard-data";

const W = 400;
const H = 160;
const PAD = { top: 12, right: 8, bottom: 28, left: 8 };

function scalePoints(points: PerformancePoint[]) {
  const values = points.map((p) => p.portfolio);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  return points.map((p, i) => {
    const x = PAD.left + (i / Math.max(points.length - 1, 1)) * innerW;
    const y = PAD.top + innerH - ((p.portfolio - min) / range) * innerH;
    return { x, y, label: p.label };
  });
}

export function PerformanceChart({ points, caption }: { points: PerformancePoint[]; caption: string }) {
  const scaled = scalePoints(points);
  const line = scaled.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `${PAD.left},${H - PAD.bottom} ${line} ${scaled[scaled.length - 1]?.x ?? PAD.left},${H - PAD.bottom}`;

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full text-accent" aria-label={caption}>
        <defs>
          <linearGradient id="perf-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f57ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2f57ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#perf-fill)" />
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={line}
        />
        {scaled.map((p) => (
          <text
            key={p.label}
            x={p.x}
            y={H - 6}
            textAnchor="middle"
            className="fill-ink-3 text-[9px] font-mono"
          >
            {p.label}
          </text>
        ))}
      </svg>
      <p className="mt-2 text-meta text-ink-3">{caption}</p>
    </div>
  );
}
