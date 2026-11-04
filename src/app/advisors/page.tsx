import type { Metadata } from "next";
import { AdvisorsExplorer } from "@/components/advisors/AdvisorsExplorer";
import { Page, PageHeader } from "@/components/shell/Page";

export const metadata: Metadata = {
  title: "Advisors",
};

export default function AdvisorsPage() {
  return (
    <Page>
      <PageHeader title="Advisors" />
      <AdvisorsExplorer />
    </Page>
  );
}
