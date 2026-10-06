import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Page } from "@/components/shell/Page";
import {
  categoryFullLabel,
  categoryLabel,
  getSebiAdvisor,
  sebiAdvisors,
} from "@/lib/advisors";

export function generateStaticParams() {
  return sebiAdvisors
    .filter((a) => a.globalAdvisory)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const advisor = getSebiAdvisor(slug);
  return { title: advisor?.name ?? "Advisor" };
}

export default async function AdvisorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const advisor = getSebiAdvisor(slug);
  if (!advisor) notFound();

  const links = [
    advisor.website ? { label: "Website", href: advisor.website } : null,
    advisor.twitter ? { label: "X / Twitter", href: advisor.twitter } : null,
    advisor.substack ? { label: "Substack", href: advisor.substack } : null,
    advisor.email ? { label: "Email", href: `mailto:${advisor.email}` } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <Page width="content">
      <Link href="/advisors" className="text-[13px] font-semibold text-accent hover:underline">
        ← All advisors
      </Link>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-paper-2 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
          {advisor.isAif ? "AIF / IFSC" : categoryLabel(advisor.category)}
        </span>
        {advisor.globalAdvisory ? (
          <span className="rounded-md bg-accent px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
            Global advisory
          </span>
        ) : null}
        {advisor.globalInvesting && !advisor.globalAdvisory ? (
          <span className="rounded-md bg-sky px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
            Global investing
          </span>
        ) : null}
      </div>

      <h1 className="text-section mt-4 text-ink">{advisor.name}</h1>
      <p className="text-meta mt-2 font-mono">{advisor.registration}</p>
      <p className="mt-3 text-[15px] text-ink-2">
        {categoryFullLabel(advisor.category)}
        {advisor.entityType ? ` · ${advisor.entityType}` : ""}
      </p>

      <dl className="mt-8 space-y-6 rounded-2xl border border-line bg-white p-6">
        {advisor.contactPerson ? (
          <div>
            <dt className="text-meta uppercase tracking-[0.12em]">Contact</dt>
            <dd className="mt-1.5 text-[16px] font-medium text-ink">{advisor.contactPerson}</dd>
          </div>
        ) : null}
        {advisor.phone ? (
          <div>
            <dt className="text-meta uppercase tracking-[0.12em]">Phone</dt>
            <dd className="mt-1.5 text-[16px] font-medium text-ink">{advisor.phone}</dd>
          </div>
        ) : null}
        {advisor.email ? (
          <div>
            <dt className="text-meta uppercase tracking-[0.12em]">Email</dt>
            <dd className="mt-1.5 text-[16px] font-medium text-ink">
              <a href={`mailto:${advisor.email}`} className="text-accent hover:underline">
                {advisor.email}
              </a>
            </dd>
          </div>
        ) : null}
        {links.length ? (
          <div>
            <dt className="text-meta uppercase tracking-[0.12em]">Links</dt>
            <dd className="mt-3 flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={l.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="btn-ghost"
                >
                  {l.label}
                </a>
              ))}
            </dd>
          </div>
        ) : null}
      </dl>
    </Page>
  );
}
