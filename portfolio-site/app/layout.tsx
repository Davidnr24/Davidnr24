import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.david-navarro.dev";
const DEFAULT_TITLE = "David Navarro · Senior DevOps / Platform Engineer";
const DEFAULT_DESCRIPTION =
  "Senior DevOps / Platform Engineer based in Charlotte, NC. AWS, Kubernetes, Terraform, and CI/CD. Available for full-time roles and freelance DevOps and Platform Engineering contracts.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · David Navarro",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "David Navarro",
  authors: [{ name: "David Navarro", url: SITE_URL }],
  creator: "David Navarro",
  publisher: "David Navarro",
  keywords: [
    "David Navarro",
    "Senior DevOps Engineer",
    "Platform Engineer",
    "AWS contractor",
    "Terraform consultant",
    "Kubernetes engineer",
    "CI/CD",
    "freelance DevOps",
    "freelance Platform Engineer",
    "Charlotte NC",
    "Madrid",
    "bilingual engineer",
    "Spanish English DevOps",
    "AWS Solutions Architect",
    "CKA",
    "Terraform Associate",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "David Navarro",
    locale: "en_US",
    type: "profile",
    firstName: "David",
    lastName: "Navarro",
    username: "Davidnr24",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
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
      </body>
    </html>
  );
}
