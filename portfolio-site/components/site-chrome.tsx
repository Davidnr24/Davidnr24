import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";
import type { NavLink } from "@/lib/nav";

const SITE_URL = "https://www.david-navarro.dev";

type Props = {
  nav: NavLink[];
  home: string;
  ctaLabel: string;
  ctaHref: string;
  /** Description used in the Person structured data for this front door. */
  description: string;
  children: React.ReactNode;
};

/**
 * Header, footer and structured data for one front door. Each door passes its
 * own navigation, so a visitor sent to /resume never sees the contracting
 * pages and vice versa.
 */
export function SiteChrome({
  nav,
  home,
  ctaLabel,
  ctaHref,
  description,
  children,
}: Props) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Navarro",
    alternateName: "Davidnr24",
    url: `${SITE_URL}${home}`,
    image: `${SITE_URL}/profile.png`,
    jobTitle: "Senior DevOps / Platform Engineer",
    description,
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
  };

  return (
    <>
      <SiteHeader nav={nav} home={home} ctaLabel={ctaLabel} ctaHref={ctaHref} />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
    </>
  );
}
