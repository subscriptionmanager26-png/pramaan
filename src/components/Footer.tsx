import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-navy text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <Logo className="text-lg font-semibold" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
            Public work from SEBI-registered voices — Twitter, Substack, YouTube, and podcasts. Events are listed here;
            sign-up stays with the host.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/discover" className="hover:text-white">
            Discover
          </Link>
          <Link href="/news" className="hover:text-white">
            News
          </Link>
          <Link href="/portfolio" className="hover:text-white">
            Portfolio
          </Link>
          <Link href="/for-advisors" className="hover:text-white">
            For advisors
          </Link>
        </div>
      </div>
    </footer>
  );
}
