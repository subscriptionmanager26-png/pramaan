import type { Advisor } from "@/lib/agent/advisors";

export function AdvisorAvatar({
  advisor,
  size = "md",
  dimmed = false,
}: {
  advisor: Advisor;
  size?: "sm" | "md" | "lg";
  dimmed?: boolean;
}) {
  const box =
    size === "lg" ? "h-12 w-12 text-[13px]" : size === "sm" ? "h-8 w-8 text-[10px]" : "h-9 w-9 text-[11px]";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl border border-black/10 font-semibold tracking-wide text-white shadow-[2px_2px_0_rgba(11,11,11,0.12)] ${box} ${
        dimmed ? "opacity-50 grayscale" : ""
      }`}
      style={{ backgroundColor: advisor.accent }}
      aria-hidden
    >
      {advisor.monogram}
    </span>
  );
}
