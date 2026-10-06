import type { Metadata } from "next";
import Link from "next/link";
import { Page, PageHeader } from "@/components/shell/Page";
import { formatRelative } from "@/lib/utils";
import { guides } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
};

export default function GuidesPage() {
  const explainers = guides.filter((g) => g.kind === "guide");

  return (
    <Page>
      <PageHeader
        title="Guides"
        description="Short explainers. Placeholder lorem copy until real guides are connected."
      />

      <div className="mt-4">
        <Link href="/tools" className="text-[13px] font-semibold text-accent hover:underline">
          Looking for tools? →
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {explainers.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group block overflow-hidden rounded-2xl border border-line bg-white"
          >
            <div className="aspect-[16/9] overflow-hidden bg-paper-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={guide.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-headline text-ink group-hover:text-accent">{guide.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-ink-2">{guide.summary}</p>
              <p className="text-meta mt-3">
                {guide.readMinutes ? `${guide.readMinutes} min · ` : null}
                {formatRelative(guide.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}
