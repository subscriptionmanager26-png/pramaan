import Link from "next/link";
import { Page } from "@/components/shell/Page";

export default function NotFound() {
  return (
    <Page width="content" className="py-16 text-center">
      <h1 className="text-display text-ink">Page not found</h1>
      <p className="mt-3 text-[14px] text-ink-2">That URL is not part of Pramaan.</p>
      <Link
        href="/news"
        className="mt-8 inline-flex rounded-lg bg-accent px-4 py-2.5 text-[13.5px] font-medium text-white"
      >
        Go to News
      </Link>
    </Page>
  );
}
