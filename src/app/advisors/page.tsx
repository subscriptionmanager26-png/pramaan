import type { Metadata } from "next";
import Link from "next/link";
import { Page, PageHeader } from "@/components/shell/Page";
import { advisors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advisors",
};

export default function AdvisorsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Licensed professionals"
        title="Advisors for global investing"
        description="Name, license, start year, and social links — contact them directly. No login on Pramaan."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {advisors.map((advisor) => (
          <article
            key={advisor.slug}
            className="rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-[4px_4px_0_rgba(11,11,11,0.08)]"
          >
            <Link href={`/advisors/${advisor.slug}`} className="text-[1.25rem] font-bold tracking-tight text-ink hover:text-accent">
              {advisor.name}
            </Link>
            <dl className="mt-4 space-y-3 text-[14px]">
              <div>
                <dt className="text-meta uppercase tracking-[0.12em]">License</dt>
                <dd className="mt-1 font-medium text-ink">{advisor.license}</dd>
              </div>
              <div>
                <dt className="text-meta uppercase tracking-[0.12em]">Started in</dt>
                <dd className="mt-1 font-medium text-ink">{advisor.startedIn}</dd>
              </div>
            </dl>
            <div className="mt-4 flex flex-wrap gap-3">
              {advisor.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-semibold text-accent hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}
