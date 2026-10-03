"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { newsTopicTabs, type NewsTopic } from "@/lib/news";

export function NewsTopicBar({ active }: { active: NewsTopic }) {
  const pathname = usePathname();
  const params = useSearchParams();

  function hrefFor(topic: NewsTopic) {
    const next = new URLSearchParams(params.toString());
    next.set("view", "global");
    if (topic === "latest") next.delete("topic");
    else next.set("topic", topic);
    return `${pathname}?${next.toString()}`;
  }

  return (
    <nav className="flex gap-4 overflow-x-auto border-b border-line scrollbar-none">
      {newsTopicTabs.map((tab) => {
        const on = active === tab.id;
        return (
          <Link
            key={tab.id}
            href={hrefFor(tab.id)}
            className={`relative shrink-0 py-2.5 text-[13.5px] whitespace-nowrap ${
              on ? "font-semibold text-ink" : "font-medium text-ink-3 hover:text-ink"
            }`}
          >
            {tab.label}
            {on ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" /> : null}
          </Link>
        );
      })}
    </nav>
  );
}
