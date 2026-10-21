import type { Metadata } from "next";

import { PortfolioDashboard } from "@/components/portfolio/PortfolioDashboard";
import { Page, PageHeader } from "@/components/shell/Page";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio dashboard — allocation, performance, and holdings. Ask questions in AI chat.",
};

export default function PortfolioPage() {
  return (
    <Page width="dash">
      <PageHeader
        title="Portfolio"
        description="A fixed dashboard for how you're invested. For reviews, statements, and what-if questions, use the AI assistant."
      />
      <div className="mt-8">
        <PortfolioDashboard />
      </div>
    </Page>
  );
}
