"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { UnderlineTabs } from "@/components/ui/UnderlineTabs";

const tabs = [
  { id: "all", label: "All" },
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
    <UnderlineTabs
      tabs={tabs.map((tab) => ({
        ...tab,
        count: counts?.[tab.id],
      }))}
      active={current}
      onChange={setType}
    />
  );
}
