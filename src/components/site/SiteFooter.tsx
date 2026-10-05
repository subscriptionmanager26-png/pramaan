import Link from "next/link";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[14px] leading-6 text-ink-2">
            Hand-built company research memos — tagged by company and industry.
          </p>
        </div>
        <div>
          <p className="text-meta uppercase tracking-[0.14em] text-ink-3">Explore</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/research" className="text-[14px] font-medium text-ink hover:text-accent">
                All Research
              </Link>
            </li>
            <li>
              <Link href="/ai" className="text-[14px] font-medium text-ink hover:text-accent">
                Ask AI
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-meta sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Pramaan</p>
          <p>Not investment advice. Verify with licensed professionals.</p>
        </div>
      </div>
    </footer>
  );
}
