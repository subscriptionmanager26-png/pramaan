"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { SourceIcon } from "./SourceIcon";
import type { SourceKind } from "@/lib/types";
import type { HomeTab } from "@/lib/home";

const tabs: { id: HomeTab; label: string; source?: SourceKind }[] = [
  { id: "twitter", label: "Tweets", source: "twitter" },
  { id: "substack", label: "Substack", source: "substack" },
  { id: "youtube", label: "YouTube", source: "youtube" },
  { id: "podcast", label: "Podcasts", source: "podcast" },
  { id: "events", label: "Events" },
];

export function HomeTabs({ active }: { active: HomeTab }) {
  const pathname = usePathname();
  const params = useSearchParams();

  function hrefFor(id: HomeTab) {
    const next = new URLSearchParams(params.toString());
    if (id === "twitter") next.delete("tab");
    else next.set("tab", id);
    const q = next.toString();
    return q ? `${pathname}?${q}` : pathname;
  }

  return (
    <div className="sticky top-16 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-2xl gap-0 overflow-x-auto px-2 sm:px-4" aria-label="Home channels">
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <Link
              key={tab.id}
              href={hrefFor(tab.id)}
              className={`relative flex min-w-[4.75rem] flex-1 items-center justify-center gap-1.5 px-3 py-3.5 text-sm whitespace-nowrap transition-colors ${
                selected ? "font-semibold text-navy" : "font-medium text-ink-3 hover:text-ink"
              }`}
            >
              {tab.source ? <SourceIcon kind={tab.source} className="hidden h-3.5 w-3.5 sm:block" /> : null}
              {tab.label}
              {selected ? <span className="absolute inset-x-3 bottom-0 h-0.5 bg-navy" /> : null}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
