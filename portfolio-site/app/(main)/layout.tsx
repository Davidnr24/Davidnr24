import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";

const SITE_URL = "https://www.david-navarro.dev";
const DEFAULT_DESCRIPTION =
  "Senior DevOps / Platform Engineer based in Charlotte, NC. AWS, Kubernetes, Terraform, and CI/CD. Available for full-time roles and freelance DevOps and Platform Engineering contracts.";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Navarro",
    alternateName: "Davidnr24",
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    jobTitle: "Senior DevOps / Platform Engineer",
    description: DEFAULT_DESCRIPTION,
    email: `mailto:${site.email}`,
    nationality: { "@type": "Country", name: "Spain" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    knowsLanguage: ["en", "es"],
    knowsAbout: [
      "DevOps",
      "Platform Engineering",
      "Amazon Web Services",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Site Reliability Engineering",
      "Internal Developer Platforms",
      "Cloud Architecture",
    ],
    worksFor: { "@type": "Organization", name: "Agero" },
    sameAs: [site.linkedin, site.github],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior DevOps / Platform Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Charlotte, NC",
      },
      skills:
        "AWS, Kubernetes, Terraform, CI/CD, DevOps, Platform Engineering, Site Reliability Engineering",
    },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "David Navarro",
    alternateName: "David Navarro · Senior DevOps / Platform Engineer",
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: { "@type": "Person", name: "David Navarro" },
  };

  return (
    <>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
    </>
  );
}
