import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://david-navarro.dev"),
  title: {
    default: "David Navarro · Senior DevOps / Platform Engineer",
    template: "%s · David Navarro",
  },
  description:
    "Senior DevOps / Platform Engineer based in Charlotte, NC. AWS, Kubernetes, Terraform, CI/CD. Available for full-time roles and freelance DevOps contracting.",
  openGraph: {
    title: "David Navarro · Senior DevOps / Platform Engineer",
    description:
      "Infrastructure that keeps software running. AWS, Kubernetes, Terraform, CI/CD.",
    url: "https://david-navarro.dev",
    siteName: "David Navarro",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
