import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI",
  description: "Ask Pramaan AI about markets, news, and research.",
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return children;
}
