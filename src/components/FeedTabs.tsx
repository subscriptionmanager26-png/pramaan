"use client";

import { useRouter, useSearchParams } from "next/navigation";

const tabs = [
  { id: "all", label: "All work" },
  { id: "twitter", label: "Twitter" },
  { id: "substack", label: "Substack" },
  { id: "youtube", label: "YouTube" },
  { id: "podcast", label: "Podcasts" },
  { id: "event", label: "Events" },
];

export function FeedTabs({
  counts,
  basePath = "/",
}: {
  counts?: Record<string, number>;
  basePath?: string;
}) {
  const params = useSearchParams();
  const router = useRouter();
  const current = params.get("type") ?? "all";

  function setType(id: string) {
    router.push(id === "all" ? basePath : `${basePath}?type=${id}`);
  }

  return (
    <div className="flex gap-1 overflow-x-auto border-b border-line">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => setType(tab.id)}
          className={`whitespace-nowrap px-3 py-2.5 text-sm ${
            current === tab.id
              ? "border-b-2 border-navy font-medium text-navy"
              : "border-b-2 border-transparent text-ink-3 hover:text-ink"
          }`}
        >
          {tab.label}
          {counts?.[tab.id] !== undefined ? <span className="ml-1 text-xs text-ink-3">{counts[tab.id]}</span> : null}
        </button>
      ))}
    </div>
  );
}
