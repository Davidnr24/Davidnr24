import { site } from "@/content/site";

/**
 * The freelance copies of the inner pages are absent on purpose: they
 * canonicalise to the resume copies, so listing both would split the signal.
 * `/` is absent because it redirects to /resume.
 */
const ORIGIN = `https://www.${site.domain}`;

const entries: { path: string; priority: number }[] = [
  { path: "/resume", priority: 1 },
  { path: "/freelance", priority: 0.95 },
  { path: "/resume/career", priority: 0.85 },
  { path: "/resume/skills", priority: 0.8 },
  { path: "/resume/projects", priority: 0.8 },
  { path: "/resume/personal", priority: 0.6 },
];

export function GET() {
  const lastModified = new Date().toISOString();
  const urls = entries
    .map((e) =>
      [
        "  <url>",
        `    <loc>${ORIGIN}${e.path}</loc>`,
        `    <lastmod>${lastModified}</lastmod>`,
        "    <changefreq>monthly</changefreq>",
        `    <priority>${e.priority}</priority>`,
        "  </url>",
      ].join("\n")
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
