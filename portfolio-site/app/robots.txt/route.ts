import { headers } from "next/headers";

import {
  AGENCY_ORIGIN,
  LABS_ORIGIN,
  PERSONAL_ORIGIN,
  isAgencyHost,
  isLabsHost,
} from "@/lib/hosts";

/** Host aware, so each domain points crawlers at its own sitemap. */
export async function GET() {
  const host = (await headers()).get("host");

  const origin = isLabsHost(host)
    ? LABS_ORIGIN
    : isAgencyHost(host)
      ? AGENCY_ORIGIN
      : PERSONAL_ORIGIN;

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
