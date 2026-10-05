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
  const tools = guides.filter((g) => g.kind === "tool");

  return (
    <Page>
      <PageHeader
        eyebrow="Learn"
        title="Guides & tools"
        description="Short explainers and checklists — no account required."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="text-[1.1rem] font-black italic tracking-tight text-ink">GUIDES</h2>
          <div className="mt-4 divide-y divide-line border-t border-line">
            {explainers.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block py-5">
                <h3 className="text-headline text-ink group-hover:text-accent">{guide.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-2">{guide.summary}</p>
                <p className="text-meta mt-3">
                  {guide.readMinutes ? `${guide.readMinutes} min · ` : null}
                  {formatRelative(guide.publishedAt)}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[1.1rem] font-black italic tracking-tight text-ink">TOOLS</h2>
          <div className="mt-4 space-y-4">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/guides/${tool.slug}`}
                className="block rounded-2xl border border-line bg-highlight/40 p-5 transition-transform hover:-translate-y-0.5"
              >
                <p className="text-meta uppercase tracking-[0.12em] text-ink">Tool</p>
                <h3 className="mt-2 text-headline text-ink">{tool.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-2">{tool.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
