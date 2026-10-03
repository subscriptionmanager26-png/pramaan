"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function NewsViewToggle({ active }: { active: "foryou" | "global" }) {
  const pathname = usePathname();
  const params = useSearchParams();

  function hrefFor(view: "foryou" | "global") {
    const next = new URLSearchParams(params.toString());
    if (view === "foryou") next.delete("view");
    else next.set("view", "global");
    if (view === "foryou") next.delete("topic");
    const q = next.toString();
    return q ? `${pathname}?${q}` : pathname;
  }

  return (
    <nav className="flex flex-1 gap-1 overflow-x-auto scrollbar-none">
      {(
        [
          ["foryou", "For You"],
          ["global", "Global"],
        ] as const
      ).map(([id, label]) => {
        const on = active === id;
        return (
          <Link
            key={id}
            href={hrefFor(id)}
            className={`relative shrink-0 px-3 py-3 text-[13.5px] whitespace-nowrap ${
              on ? "font-semibold text-ink" : "font-medium text-ink-3 hover:text-ink"
            }`}
          >
            {label}
            {on ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-accent" /> : null}
          </Link>
        );
      })}
    </nav>
  );
}
