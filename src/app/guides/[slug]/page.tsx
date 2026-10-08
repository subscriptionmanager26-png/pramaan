import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Page } from "@/components/shell/Page";
import { formatDate } from "@/lib/utils";
import { getGuide, guides } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return { title: guide?.title ?? "Guide" };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const backHref = guide.kind === "tool" ? "/tools" : "/guides";
  const backLabel = guide.kind === "tool" ? "All tools" : "All guides";
  const externalTool = guide.toolUrl?.startsWith("http");

  return (
    <Page width="content">
      <Link href={backHref} className="text-[13px] font-semibold text-accent hover:underline">
        ← {backLabel}
      </Link>
      <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
        {guide.topic ? `${guide.topic} · ` : null}
        {guide.kind === "tool" ? "Tool" : "Guide"}
      </p>
      <h1 className="text-section mt-2 text-ink">{guide.title}</h1>
      <p className="text-meta mt-3">
        {formatDate(guide.publishedAt)}
        {guide.readMinutes ? ` · ${guide.readMinutes} min read` : null}
      </p>
      <div className="mt-6 max-w-xl overflow-hidden rounded-2xl border border-line bg-paper-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={guide.image} alt="" className="aspect-[16/9] w-full object-cover" />
      </div>
      <p className="mt-6 text-[17px] leading-7 text-ink-2">{guide.summary}</p>

      {externalTool ? (
        <a
          href={guide.toolUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-6 inline-flex"
        >
          Open tool →
        </a>
      ) : null}

      {guide.sections?.length ? (
        <div className="mt-10 max-w-2xl space-y-10">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-headline text-ink">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-ink">
                {section.paragraphs.map((para) => (
                  <p key={para.slice(0, 48)}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : guide.kind === "tool" ? (
        <ol className="mt-8 max-w-2xl list-decimal space-y-3 pl-5 text-[15px] leading-7 text-ink">
          {guide.body.map((step) => (
            <li key={step.slice(0, 24)}>{step}</li>
          ))}
        </ol>
      ) : (
        <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-ink">
          {guide.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      )}

      <p className="text-meta mt-12 max-w-2xl border-t border-line pt-6">
        Educational only — not tax, legal, or investment advice. Rules and rates change; confirm
        with your bank, broker, or chartered accountant before you remit or file.
      </p>
    </Page>
  );
}
