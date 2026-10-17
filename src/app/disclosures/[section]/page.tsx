import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  disclosureLegal,
  DISCLOSURE_SECTIONS,
  isDisclosureSection,
  type DisclosureSection,
} from "@/lib/legal/disclosures";
import { siteUrl } from "@/lib/site-url";

type Props = { params: Promise<{ section: string }> };

export function generateStaticParams() {
  return DISCLOSURE_SECTIONS.map((section) => ({ section }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  if (!isDisclosureSection(section)) return { title: "Legal" };
  const doc = disclosureLegal[section];
  return {
    title: doc.title,
    description: doc.sections[0]?.body.slice(0, 160),
    alternates: { canonical: `${siteUrl()}/disclosures/${section}` },
  };
}

export default async function DisclosureSectionPage({ params }: Props) {
  const { section: raw } = await params;
  if (!isDisclosureSection(raw)) notFound();
  const section = raw as DisclosureSection;
  const doc = disclosureLegal[section];

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/disclosures" className="text-[13px] font-medium text-ink-3 hover:text-accent">
        ← All disclosures
      </Link>
      <h1 className="mt-4 text-section text-ink">{doc.title}</h1>
      <p className="mt-2 text-meta text-ink-3">Last updated {doc.updated}</p>
      <div className="mt-10 space-y-8">
        {doc.sections.map((block) => (
          <section key={block.heading}>
            <h2 className="text-[17px] font-semibold text-ink">{block.heading}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{block.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
