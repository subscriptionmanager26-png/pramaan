"use client";

import { useMemo, useState } from "react";
import { CreatorCard } from "@/components/CreatorCard";
import { FilterChip, FilterChipRow, UnderlineTabs } from "@/components/ui/UnderlineTabs";
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
      <UnderlineTabs
        tabs={filters.map((f) => ({
          id: f.id,
          label: f.label,
          count: f.id === type ? list.length : undefined,
        }))}
        active={type}
        onChange={(id) => setType(id as (typeof filters)[number]["id"])}
      />
      <div className="mt-2 divide-y divide-line sm:mt-4 sm:grid sm:grid-cols-2 sm:gap-3 sm:divide-y-0 lg:grid-cols-3">
        {list.map((c) => (
          <div key={c.slug} className="sm:contents">
            <div className="sm:hidden">
              <CreatorCard creator={c} variant="row" />
            </div>
            <div className="hidden sm:block">
              <CreatorCard creator={c} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Compact filter chips if a denser control is needed elsewhere */
export function CreatorsFilterChips({
  type,
  onChange,
}: {
  type: (typeof filters)[number]["id"];
  onChange: (id: (typeof filters)[number]["id"]) => void;
}) {
  return (
    <FilterChipRow>
      {filters.map((f) => (
        <FilterChip key={f.id} active={type === f.id} onClick={() => onChange(f.id)}>
          {f.label}
        </FilterChip>
      ))}
    </FilterChipRow>
  );
}
