import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    host: "https://www.david-navarro.dev",
    sitemap: "https://www.david-navarro.dev/sitemap.xml",
  };
}
