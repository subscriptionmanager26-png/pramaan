"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { DashTab } from "@/lib/dash";

const tabs: { id: DashTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "twitter", label: "Twitter" },
  { id: "substack", label: "Substack" },
  { id: "youtube", label: "YouTube" },
  { id: "events", label: "Events" },
];

export function DashTabs({ active }: { active: DashTab }) {
  const pathname = usePathname();
  const params = useSearchParams();

  function hrefFor(id: DashTab) {
    const next = new URLSearchParams(params.toString());
    if (id === "all") next.delete("tab");
    else next.set("tab", id);
    const q = next.toString();
    return q ? `${pathname}?${q}` : pathname;
  }

  return (
    <div className="flex items-center justify-between gap-3 border-b border-line">
      <nav className="flex flex-1 gap-1 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <Link
              key={tab.id}
              href={hrefFor(tab.id)}
              className={`relative shrink-0 px-3 py-3 text-[13.5px] whitespace-nowrap ${
                selected ? "font-semibold text-ink" : "font-medium text-ink-3 hover:text-ink"
              }`}
            >
              {tab.label}
              {selected ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-accent" /> : null}
            </Link>
          );
        })}
      </nav>
      <span className="hidden shrink-0 pr-1 text-xs font-medium text-ink-3 sm:inline">Latest</span>
    </div>
  );
}
