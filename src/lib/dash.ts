export type DashTab = "all" | "twitter" | "substack" | "youtube" | "events";

export function parseDashTab(value?: string): DashTab {
  if (value === "twitter" || value === "substack" || value === "youtube" || value === "events") {
    return value;
  }
  return "all";
}
