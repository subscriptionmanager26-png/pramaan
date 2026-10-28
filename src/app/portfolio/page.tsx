import type { Metadata } from "next";

import { PortfolioDashboard } from "@/components/portfolio/PortfolioDashboard";
import { Page, PageHeader } from "@/components/shell/Page";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Your current holdings and insights — update the book with Portfolio AI.",
};

export default function PortfolioPage() {
  return (
    <Page width="dash">
      <PageHeader
        title="Portfolio"
        description="Review your book, or switch to Edit to import from a screenshot, PDF, or Zerodha — nothing saves until you confirm."
      />
      <div className="mt-8">
        <PortfolioDashboard />
      </div>
    </Page>
  );
}
