import type { Metadata } from "next";
import { AdvisorsExplorer } from "@/components/advisors/AdvisorsExplorer";
import { pageMetadata } from "@/lib/seo/metadata";
import { Page, PageHeader } from "@/components/shell/Page";

export const metadata: Metadata = pageMetadata({
  path: "/advisors",
  title: "Advisors",
  description:
    "Browse SEBI-registered research analysts, RIAs, and PMS managers, including global investing and advisory listings.",
});

export default function AdvisorsPage() {
  return (
    <Page>
      <PageHeader title="Advisors" />
      <AdvisorsExplorer />
    </Page>
  );
}
