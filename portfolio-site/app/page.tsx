import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Index" },
  robots: { index: false, follow: false },
};

/**
 * Private index. Every other part of the site is a front door aimed at one
 * audience, and this is the only page that lists all of them. Protected by a
 * password in proxy.ts so a visitor who lands on the bare domain does not see
 * the other pitches.
 */
const doors = [
  {
    href: "/resume",
    label: "Resume",
    detail:
      "For full-time roles. Senior DevOps / Platform Engineer, the stack, the history. No contracting, no agency.",
  },
  {
    href: "/freelance",
    label: "Freelance",
    detail:
      "For contract buyers. Same background, framed around results and engagements, with the numbers attached.",
  },
  {
    href: "/agency",
    label: "Agency",
    detail:
      "For coaches and small businesses. Automation and AI work, in English and Spanish.",
  },
];

export default function Index() {
  return (
    <main className="flex-1 px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="font-display text-4xl leading-tight tracking-[-0.02em]">
          {site.name}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Three front doors, one per audience. Send the link that matches the
          conversation. Each one stands on its own and does not link to the
          others.
        </p>

        <ul className="mt-12 divide-y divide-border/70 border-y border-border">
          {doors.map((d) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className="group flex items-center justify-between gap-6 py-6"
              >
                <span>
                  <span className="block text-lg font-semibold tracking-tight">
                    {d.label}
                  </span>
                  <span className="mt-1 block max-w-md text-sm text-muted-foreground">
                    {d.detail}
                  </span>
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-mark-text"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-muted-foreground">
          {site.email} <span className="text-mark-text">/</span> {site.domain}
        </p>
      </div>
    </main>
  );
}
