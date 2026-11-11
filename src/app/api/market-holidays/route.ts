import { NextResponse } from "next/server";
import { loadMarketHolidays } from "@/lib/market-tools/nseHolidays";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET() {
  const payload = await loadMarketHolidays();
  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
