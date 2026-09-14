import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { AGENCY_ORIGIN, LABS_ORIGIN, LABS_STUDIO_URL } from "@/lib/hosts";

export const metadata: Metadata = {
  metadataBase: new URL(LABS_ORIGIN),
  title: { absolute: "Navar Labs" },
  description:
    "Software studio. Products, an automation agency for small businesses, and consultancy for teams that need precision.",
  alternates: { canonical: "/" },
  // navarlabs.com is the studio's own site and should own the brand in search.
  // This page is a short index of what runs on the .dev domain.
  robots: { index: false, follow: true },
};

const entries = [
  {
    href: "https://dwmt.navarlabs.dev",
    label: "DWMT",
    detail:
      "An AI date coach that measures how well someone fits what you said you want. Talk out your dates, get an honest read.",
    meta: "Product",
  },
  {
    href: `${AGENCY_ORIGIN}/automation`,
    label: "Agency",
    detail:
      "Automation and AI for coaches and small businesses. Client onboarding, notes and follow-ups that run themselves. The consultation is free.",
    meta: "Service",
  },
  {
    href: LABS_STUDIO_URL,
    label: "The studio",
    detail:
      "TaalPal, the consultancy work, and everything else we do. The full site lives on navarlabs.com.",
    meta: "navarlabs.com",
  },
];

export default function NavarLabs() {
  return (
    <main className="flex flex-1 items-center px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-2xl">
        <header>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl">
            Navar Labs
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            A software studio. We build our own products, automate the
            repetitive work out of small businesses, and take on engineering
            for teams in domains where precision matters.
          </p>
        </header>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {entries.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                className="group flex items-start justify-between gap-6 py-6"
              >
                <span>
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-2xl leading-tight">
                      {e.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {e.meta}
                    </span>
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-relaxed text-muted-foreground">
                    {e.detail}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-mark-text"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-14 flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Navar Labs</span>
          <span aria-hidden className="inline-block size-2 bg-mark" />
        </footer>
      </div>
    </main>
  );
}
