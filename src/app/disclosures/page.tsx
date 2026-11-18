import type { Metadata } from "next";
import Link from "next/link";

import { disclosureDocs } from "@/lib/legal/disclosures";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/disclosures",
  title: "Legal & policies",
  description:
    "Privacy, terms, and how PocketEdge operates as an information platform, not as a broker or advisor.",
});

export default function DisclosuresIndexPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-section text-ink">Legal &amp; policies</h1>
      <ul className="mt-10 space-y-3">
        {disclosureDocs.map((doc) => (
          <li key={doc.id}>
            <Link
              href={doc.href}
              className="block rounded-2xl border border-line bg-white px-5 py-4 transition hover:border-accent/40"
            >
              <p className="text-[15px] font-semibold text-ink">{doc.title}</p>
              <p className="mt-1 text-[14px] text-ink-2">{doc.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
