function getIstParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const pick = (type: string) => parts.find((part) => part.type === type)?.value;
  return {
    weekday: pick("weekday"),
    hour: Number(pick("hour")),
    minute: Number(pick("minute")),
  };
}

function isWeekday(weekday: string | undefined) {
  return weekday !== "Sat" && weekday !== "Sun";
}

function minutesSinceMidnight(hour: number, minute: number) {
  return hour * 60 + minute;
}

/** NSE-linked assets: Mon–Fri 09:00–16:00 IST. */
export function isInNseSession(date = new Date()) {
  const { weekday, hour, minute } = getIstParts(date);
  if (!weekday || !isWeekday(weekday)) return false;
  const mins = minutesSinceMidnight(hour, minute);
  return mins >= 9 * 60 && mins <= 16 * 60;
}

function isDocumentVisible() {
  if (typeof document === "undefined") return true;
  return !document.hidden;
}

const POLL_INTERVAL_MS: Record<string, number> = {
  etf: 15_000,
  bond: 15_000,
};

function isInSessionForAsset(assetType: string, date = new Date()) {
  if (!assetType || assetType === "fund") return true;
  return isInNseSession(date);
}

export function shouldPollMarket(
  assetType: string,
  { date = new Date(), visible = isDocumentVisible() } = {},
) {
  if (!visible) return false;
  if (!POLL_INTERVAL_MS[assetType]) return false;
  return isInSessionForAsset(assetType, date);
}
