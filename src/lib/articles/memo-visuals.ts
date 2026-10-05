import type { SeriesChartBlock } from "./types";

export function seriesChart(
  title: string,
  caption: string,
  categories: string[],
  series: { name: string; values: number[]; color: string }[],
): SeriesChartBlock {
  return { type: "seriesChart", title, caption, categories, series };
}
