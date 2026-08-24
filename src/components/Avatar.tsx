import type { Creator } from "@/lib/types";

export function Avatar({
  creator,
  size = "md",
}: {
  creator: Pick<Creator, "initials" | "color" | "name">;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const dim =
    size === "sm"
      ? "h-9 w-9 text-xs"
      : size === "lg"
        ? "h-16 w-16 text-xl"
        : size === "xl"
          ? "h-24 w-24 text-3xl"
          : "h-11 w-11 text-sm";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white ${dim}`}
      style={{ background: creator.color }}
      aria-hidden="true"
    >
      {creator.initials}
    </span>
  );
}
