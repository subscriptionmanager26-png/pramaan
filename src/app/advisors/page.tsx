import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/shell/Page";
import { advisors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advisors",
};

export default function AdvisorsPage() {
  return (
    <Page width="dash">
      <div className="border-b border-line pb-1">
        <h1 className="px-1 pb-3 text-[15px] font-semibold text-ink">Advisors</h1>
      </div>

      <div className="divide-y divide-line">
        {advisors.map((advisor) => (
          <article key={advisor.slug} className="py-5">
            <Link href={`/advisors/${advisor.slug}`} className="text-headline text-ink hover:text-accent">
              {advisor.name}
            </Link>
            <dl className="mt-3 grid gap-2 text-[13.5px] sm:grid-cols-2">
              <div>
                <dt className="text-ink-3">License</dt>
                <dd className="mt-0.5 font-medium text-ink">{advisor.license}</dd>
              </div>
              <div>
                <dt className="text-ink-3">Started in</dt>
                <dd className="mt-0.5 font-medium text-ink">{advisor.startedIn}</dd>
              </div>
            </dl>
            <div className="mt-3 flex flex-wrap gap-3">
              {advisor.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-medium text-accent hover:underline"
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
