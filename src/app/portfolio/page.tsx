import type { Metadata } from "next";

import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { Page, PageHeader } from "@/components/shell/Page";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio reviews from your AI assistant — saved from chat for later.",
};

export default function PortfolioPage() {
  return (
    <Page width="content">
      <PageHeader
        title="Portfolio"
        description="AI portfolio reviews from chat, plus a link to live holdings tracking on the main app during the Pramaan migration."
      />
      <div className="mt-8">
        <PortfolioSection />
      </div>
    </Page>
  );
}
