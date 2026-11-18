import type { Metadata } from "next";

import { PortfolioDashboard } from "@/components/portfolio/PortfolioDashboard";
import { Page, PageHeader } from "@/components/shell/Page";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/portfolio",
  title: "Portfolio",
  description: "Track holdings, performance, and AI-assisted insights after you sign in on PocketEdge.",
});

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
