import { site } from "@/content/site";

/** One domain now, so no host sniffing. */
export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: https://www.${site.domain}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
