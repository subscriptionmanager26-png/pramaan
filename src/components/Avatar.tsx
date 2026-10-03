import type { Creator } from "@/lib/types";

export function Avatar({
  creator,
  size = "md",
}: {
  creator: Pick<Creator, "initials" | "color" | "name">;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  const dim =
    size === "xs"
      ? "h-5 w-5 text-[8px]"
      : size === "sm"
        ? "h-8 w-8 text-[10px]"
        : size === "lg"
          ? "h-16 w-16 text-xl"
          : size === "xl"
            ? "h-24 w-24 text-3xl"
            : "h-10 w-10 text-sm";
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
