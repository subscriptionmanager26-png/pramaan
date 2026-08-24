export type HomeTab = "twitter" | "substack" | "youtube" | "events" | "podcast";

export function parseHomeTab(value?: string): HomeTab {
  if (value === "substack" || value === "youtube" || value === "events" || value === "podcast") {
    return value;
  }
  return "twitter";
}
