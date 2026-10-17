import type { AgentMessage } from "@/lib/agent/types";

/** Completed agent turns that look like a portfolio review (tables/cards from the assistant). */
export function isPortfolioReviewMessage(message: AgentMessage): boolean {
  if (message.status !== "completed") return false;
  if (!message.blocks.length) return false;

  const blockHit = message.blocks.some((block) => {
    if (block.kind === "table") {
      const title = (block.title ?? "").toLowerCase();
      return title.includes("holding") || title.includes("portfolio");
    }
    if (block.kind === "card") {
      const title = block.title.toLowerCase();
      return title.includes("portfolio") || title.includes("summary");
    }
    if (block.kind === "chart") {
      const title = (block.title ?? "").toLowerCase();
      return title.includes("allocation") || title.includes("portfolio");
    }
    return false;
  });

  if (blockHit) return true;

  const prompt = message.text.toLowerCase();
  const promptHint =
    /portfolio|holding|review|rebalanc|cas\b|statement|zerodha|broker/.test(prompt) &&
    message.blocks.length >= 2;

  return promptHint;
}

export function portfolioReviewsFromMessages(messages: AgentMessage[]): AgentMessage[] {
  return messages.filter(isPortfolioReviewMessage).sort((a, b) => {
    const at = Date.parse(a.completedAt ?? a.createdAt);
    const bt = Date.parse(b.completedAt ?? b.createdAt);
    return bt - at;
  });
}
