/** Routes grouped under the Resources product tab (guides, tools, advisor directory). */
export function isResourcesRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    pathname === "/resources" ||
    pathname.startsWith("/resources/") ||
    pathname === "/guides" ||
    pathname.startsWith("/guides/") ||
    pathname === "/tools" ||
    pathname.startsWith("/tools/") ||
    pathname === "/advisors" ||
    pathname.startsWith("/advisors/") ||
    pathname.startsWith("/gold-tracker") ||
    pathname.startsWith("/etf-tracker") ||
    pathname.startsWith("/market-holidays")
  );
}