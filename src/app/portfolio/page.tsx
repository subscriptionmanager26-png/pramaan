import type { Metadata } from "next";

import { PortfolioDashboard } from "@/components/portfolio/PortfolioDashboard";
import { Page, PageHeader } from "@/components/shell/Page";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Your current holdings and insights — update the book with Portfolio AI.",
};

export default function PortfolioPage() {
  return (
    <Page width="wide">
      <PageHeader
        title="Portfolio"
        description="Review your book, or switch to Edit — chat with AI on the left, live holdings artifact on the right."
      />
      <div className="mt-6 sm:mt-8">
        <PortfolioDashboard />
      </div>
    </Page>
  );
}
