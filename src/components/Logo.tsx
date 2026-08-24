export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold tracking-tight ${className}`}>
      <span>pramaan</span>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
    </span>
  );
}
