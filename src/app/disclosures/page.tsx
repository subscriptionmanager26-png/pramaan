import type { Metadata } from "next";
import Link from "next/link";

import { disclosureDocs } from "@/lib/legal/disclosures";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Legal & policies",
  description:
    "Privacy, terms, and how PocketEdge operates as an information platform — not as a broker or advisor.",
  alternates: { canonical: `${siteUrl()}/disclosures` },
};

export default function DisclosuresIndexPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-section text-ink">Legal &amp; policies</h1>
      <p className="mt-3 text-[15px] leading-6 text-ink-2">
        Privacy, terms, and how PocketEdge operates as an information platform — not as a broker or advisor.
      </p>
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
