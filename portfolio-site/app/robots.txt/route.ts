import { headers } from "next/headers";

import {
  AGENCY_ORIGIN,
  PERSONAL_ORIGIN,
  isAgencyHost,
  isLabsHost,
} from "@/lib/hosts";

/** Host aware, so each domain points crawlers at its own sitemap. */
export async function GET() {
  const host = (await headers()).get("host");

  // The navarlabs.dev index is a hub, not a page to rank. navarlabs.com is
  // the studio's own site and owns the brand in search.
  if (isLabsHost(host)) {
    return new Response("User-agent: *\nDisallow: /\n", {
      headers: { "Content-Type": "text/plain" },
    });
  }

  const origin = isAgencyHost(host) ? AGENCY_ORIGIN : PERSONAL_ORIGIN;

  const body = [
    "User-agent: *",
    "Allow: /",
    // The private index and the unlock page have nothing to index.
    "Disallow: /unlock",
    "",
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
