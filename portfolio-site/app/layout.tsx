import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import { CtaTracker } from "@/components/cta-tracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CtaTracker />
        {children}
      </body>
    </html>
  );
}
