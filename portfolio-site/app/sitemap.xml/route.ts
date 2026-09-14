import { headers } from "next/headers";

import {
  AGENCY_ORIGIN,
  AGENCY_ROUTES,
  LABS_ORIGIN,
  PERSONAL_ORIGIN,
  isAgencyHost,
  isLabsHost,
} from "@/lib/hosts";

/**
 * One project serves two domains, so the sitemap has to answer differently
 * depending on which one asked. Next's static sitemap convention cannot read
 * the request, hence a route handler.
 *
 * The private index and the freelance copies of the inner pages are absent on
 * purpose: the first is password protected, the second canonicalise to the
 * resume copies.
 */
type Entry = { loc: string; priority: number; alternates?: [string, string][] };

function personal(): Entry[] {
  const p = (path: string, priority: number) => ({
    loc: `${PERSONAL_ORIGIN}${path}`,
    priority,
  });
  return [
    p("/resume", 1),
    p("/freelance", 0.95),
    p("/resume/career", 0.85),
    p("/resume/skills", 0.8),
    p("/resume/projects", 0.8),
    p("/resume/personal", 0.6),
  ];
}

function agency(): Entry[] {
  const alternates = AGENCY_ROUTES.map(
    (r) => [r.lang, `${AGENCY_ORIGIN}${r.path}`] as [string, string]
  );
  return AGENCY_ROUTES.map((r) => ({
    loc: `${AGENCY_ORIGIN}${r.path}`,
    priority: 1,
    alternates,
  }));
}

function xml(entries: Entry[], lastModified: string): string {
  const urls = entries
    .map((e) => {
      const links = (e.alternates ?? [])
        .map(
          ([lang, href]) =>
            `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`
        )
        .join("\n");
      return [
        "  <url>",
        `    <loc>${e.loc}</loc>`,
        links,
        `    <lastmod>${lastModified}</lastmod>`,
        "    <changefreq>monthly</changefreq>",
        `    <priority>${e.priority}</priority>`,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

export async function GET() {
  const host = (await headers()).get("host");
  const entries = isLabsHost(host)
    ? [{ loc: `${LABS_ORIGIN}/`, priority: 1 }]
    : isAgencyHost(host)
      ? agency()
      : personal();
  return new Response(xml(entries, new Date().toISOString()), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
