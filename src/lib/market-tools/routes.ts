export function etfPath(symbol: string) {
  const ticker = String(symbol ?? "").trim().toUpperCase();
  return ticker ? `/etf/${encodeURIComponent(ticker)}` : "/resources#tools";
}

export function fundPath(schemeCode: string) {
  const id = String(schemeCode ?? "").trim();
  return id ? `/fund/${encodeURIComponent(id)}` : "/resources#tools";
}
