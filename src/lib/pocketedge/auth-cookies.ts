/** Cookie defaults for shared auth across www / pramaan / studio on pocketedge.in. */

export function pocketedgeAuthCookieOptions(hostname?: string) {
  const host = hostname ?? "";
  const shared =
    host.endsWith("pocketedge.in") || host === "pocketedge.in"
      ? ".pocketedge.in"
      : undefined;
  return {
    path: "/",
    sameSite: "lax" as const,
    secure: shared ? true : process.env.NODE_ENV === "production",
    ...(shared ? { domain: shared } : {}),
  };
}
