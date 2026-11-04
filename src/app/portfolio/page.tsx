import type { Metadata } from "next";

import { PortfolioDashboard } from "@/components/portfolio/PortfolioDashboard";
import { Page, PageHeader } from "@/components/shell/Page";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Your current holdings and insights.",
};

export default function PortfolioPage() {
  return (
    <Page width="wide" className="!py-5 sm:!py-10">
      <PageHeader title="Portfolio" />
      <div className="mt-4 sm:mt-8">
        <PortfolioDashboard />
      </div>
    </Page>
  );
}
