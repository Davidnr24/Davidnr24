/**
 * One Vercel project serves two domains. Which one a request arrived on
 * decides what it can see, so the split lives here rather than being spelled
 * out in each place that needs it.
 *
 *   david-navarro.dev      David: the resume and freelance doors
 *   agency.navarlabs.dev   Navar Labs: the automation offer, EN and ES
 *
 * Preview deployments on *.vercel.app behave like the personal host and can
 * still reach /agency/* directly, so a branch can be checked before it ships.
 */
export const PERSONAL_ORIGIN = "https://www.david-navarro.dev";
export const AGENCY_HOST = "agency.navarlabs.dev";
export const AGENCY_ORIGIN = `https://${AGENCY_HOST}`;

/** Clean hostname, no port, lowercased. */
export function hostnameOf(host: string | null | undefined): string {
  return (host ?? "").toLowerCase().split(":")[0];
}

export function isAgencyHost(host: string | null | undefined): boolean {
  return hostnameOf(host) === AGENCY_HOST;
}

/** True only for the live personal domain, not for preview deployments. */
export function isPersonalHost(host: string | null | undefined): boolean {
  const name = hostnameOf(host);
  return name === "david-navarro.dev" || name === "www.david-navarro.dev";
}

/**
 * The agency domain's public paths, mapped onto the routes that render them.
 * Kept here so the proxy, the sitemap and the canonicals cannot drift apart.
 */
export const AGENCY_ROUTES: { path: string; route: string; lang: "en" | "es" }[] =
  [
    { path: "/automation", route: "/agency/automation", lang: "en" },
    { path: "/automatizacion", route: "/agency/automatizacion", lang: "es" },
  ];
