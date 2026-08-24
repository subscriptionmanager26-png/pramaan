import type { SebiType } from "@/lib/types";
import { sebiShort } from "@/lib/utils";

export function SebiBadge({
  type,
  number,
}: {
  type: SebiType;
  number?: string;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-2 px-2.5 py-0.5 text-[11px] font-medium text-ink ring-1 ring-accent/25">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      SEBI {sebiShort(type)}
      {number ? <span className="font-mono text-[10px] tracking-tight text-ink-3">{number}</span> : null}
    </span>
  );
}
