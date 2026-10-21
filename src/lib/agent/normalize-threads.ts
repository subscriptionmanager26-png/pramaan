import type { ThreadSummary } from "@/lib/agent/threads-from-messages";

/** Coerce Personal Agents / message-index rows into a safe sidebar shape. */
export function normalizeThreadSummaries(raw: unknown): ThreadSummary[] {
  if (!Array.isArray(raw)) return [];
  const out: ThreadSummary[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const row = item as Record<string, unknown>;
    const id = row.id;
    if (typeof id !== "string" || !id) continue;
    out.push({
      id,
      title: typeof row.title === "string" && row.title.trim() ? row.title : "New chat",
      updatedAt:
        typeof row.updatedAt === "string" && row.updatedAt
          ? row.updatedAt
          : new Date(0).toISOString(),
      working: Boolean(row.working),
    });
  }
  return out;
}
