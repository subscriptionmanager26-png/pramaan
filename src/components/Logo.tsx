import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Pramaan home">
      <span
        className="relative inline-flex h-6 w-6 items-center justify-center"
        aria-hidden
      >
        <span className="absolute h-4 w-4 rounded-full border-[2.5px] border-accent" />
        <span className="absolute h-4 w-4 translate-x-1.5 rounded-full border-[2.5px] border-ink/90" />
      </span>
      <span className="text-[1.15rem] font-bold tracking-[-0.04em] text-ink">pramaan</span>
    </Link>
  );
}
