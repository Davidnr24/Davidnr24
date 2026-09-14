import type { MetadataRoute } from "next";

const BASE = "https://www.david-navarro.dev";

// The private index at / and the agency index are deliberately absent: both
// are password protected and exist only for navigating between front doors.
// The freelance copies of career/skills/projects/personal are absent too, as
// they canonicalise to the resume copies.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const agencyAlternates = {
    languages: {
      en: `${BASE}/agency/automation`,
      es: `${BASE}/agency/automatizacion`,
    },
  };

  return [
    { url: `${BASE}/resume`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/freelance`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    {
      url: `${BASE}/agency/automation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: agencyAlternates,
    },
    {
      url: `${BASE}/agency/automatizacion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: agencyAlternates,
    },
    { url: `${BASE}/resume/career`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resume/skills`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resume/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resume/personal`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
