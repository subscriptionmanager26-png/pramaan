"use client";

import { useMemo, useState } from "react";
import { CreatorCard } from "@/components/CreatorCard";
import { creators } from "@/lib/data";
import type { SebiType } from "@/lib/types";

const filters: { id: "all" | SebiType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "RIA", label: "RIA" },
  { id: "RA", label: "Analysts" },
  { id: "PMS", label: "PMS" },
];

export function CreatorsExplorer() {
  const [type, setType] = useState<(typeof filters)[number]["id"]>("all");
  const list = useMemo(() => creators.filter((c) => type === "all" || c.sebi.type === type), [type]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setType(f.id)}
            className={`border-b-2 px-3 py-1.5 text-sm ${
              type === f.id ? "border-navy bg-navy text-white" : "border-line bg-white text-ink-2 hover:border-navy/30"
            }`}
          >
            {f.label} <span className="ml-1 text-xs opacity-70">{type === f.id ? list.length : ""}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <CreatorCard key={c.slug} creator={c} />
        ))}
      </div>
    </div>
  );
}
