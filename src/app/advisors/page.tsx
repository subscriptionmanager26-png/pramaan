import type { Metadata } from "next";
import { AdvisorsExplorer } from "@/components/advisors/AdvisorsExplorer";
import { Page, PageHeader } from "@/components/shell/Page";
import { sebiAdvisors } from "@/lib/advisors";

export const metadata: Metadata = {
  title: "Advisors",
};

export default function AdvisorsPage() {
  return (
    <Page>
      <PageHeader
        title="Advisors"
        description={`${sebiAdvisors.length.toLocaleString("en-IN")} advisors on the desk. Filter by type or global scope. Contact them directly. No login on Pramaan.`}
      />
      <AdvisorsExplorer />
    </Page>
  );
}
