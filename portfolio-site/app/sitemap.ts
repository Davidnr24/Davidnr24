import type { MetadataRoute } from "next";

const BASE = "https://www.david-navarro.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const coachingAlternates = {
    languages: {
      en: `${BASE}/automation`,
      es: `${BASE}/automatizacion`,
    },
  };
  return [
    { url: `${BASE}`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/freelance`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    {
      url: `${BASE}/automation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: coachingAlternates,
    },
    {
      url: `${BASE}/automatizacion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: coachingAlternates,
    },
    { url: `${BASE}/career`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/skills`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/personal`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
