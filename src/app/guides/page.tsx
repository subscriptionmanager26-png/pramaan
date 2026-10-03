import type { Metadata } from "next";
import Link from "next/link";
import { Page, SectionHeading } from "@/components/shell/Page";
import { formatRelative } from "@/lib/utils";
import { guides } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
};

export default function GuidesPage() {
  const explainers = guides.filter((g) => g.kind === "guide");
  const tools = guides.filter((g) => g.kind === "tool");

  return (
    <Page width="dash">
      <div className="flex gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex gap-1 border-b border-line">
            <span className="relative px-3 py-3 text-[13.5px] font-semibold text-ink">
              All
              <span className="absolute inset-x-2 bottom-0 h-0.5 bg-accent" />
            </span>
          </div>

          <section className="mt-2">
            <div className="divide-y divide-line">
              {explainers.map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block py-5">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-3">Guide</p>
                  <h2 className="text-headline mt-1 text-ink">{guide.title}</h2>
                  <p className="mt-2 max-w-2xl text-[14px] leading-6 text-ink-2">{guide.summary}</p>
                  <p className="text-meta mt-2">
                    {guide.readMinutes ? `${guide.readMinutes} min · ` : null}
                    {formatRelative(guide.publishedAt)}
                  </p>
                </Link>
              ))}
              {tools.map((tool) => (
                <Link key={tool.slug} href={`/guides/${tool.slug}`} className="block py-5">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-accent">Tool</p>
                  <h2 className="text-headline mt-1 text-ink">{tool.title}</h2>
                  <p className="mt-2 max-w-2xl text-[14px] leading-6 text-ink-2">{tool.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="hidden w-72 shrink-0 xl:block">
          <div className="sticky top-20 space-y-6">
            <section>
              <SectionHeading title="No login needed" />
              <p className="text-meta mt-3 leading-5">
                Short explainers and checklists. Use them freely.
              </p>
            </section>
          </div>
        </aside>
      </div>
    </Page>
  );
}
