import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Agency" },
  robots: { index: false, follow: false },
};

const doors = [
  {
    href: "/agency/automation",
    label: "Automation, English",
    detail: "The page to send to an English-speaking coach or small business.",
  },
  {
    href: "/agency/automatizacion",
    label: "Automatización, Spanish",
    detail: "Same page in Spanish. The one to send to Alfre's circle.",
  },
];

export default function AgencyIndex() {
  return (
    <main className="flex-1 px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="font-display text-4xl leading-tight tracking-[-0.02em]">
          Agency
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Automation and AI work for small businesses. Two language versions of
          the same offer. This index is private; the two pages below are the
          ones to share.
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
                  <span className="mt-1 block text-sm text-muted-foreground">
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
          <Link href="/" className="underline-offset-4 hover:underline">
            Back to the index
          </Link>{" "}
          <span className="text-mark-text">/</span> {site.domain}
        </p>
      </div>
    </main>
  );
}
