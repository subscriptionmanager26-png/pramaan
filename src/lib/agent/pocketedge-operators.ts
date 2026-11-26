/** Emails allowed to run one-time Zerodha MCP server OAuth from pocketedge.in. */
export function isPocketedgeOperator(email: string | null | undefined) {
  if (!email) return false;
  const raw =
    process.env.POCKETEDGE_OPERATOR_EMAILS?.trim() ||
    process.env.OPERATOR_EMAILS?.trim() ||
    "prosperaslack@gmail.com";
  const list = raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return list.includes(email.trim().toLowerCase());
}