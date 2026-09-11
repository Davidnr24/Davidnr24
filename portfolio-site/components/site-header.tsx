"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import type { NavLink } from "@/lib/nav";
import { site } from "@/content/site";
import { cta } from "@/lib/analytics";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  /** Links for this front door. See lib/nav.ts. */
  nav: NavLink[];
  /** Where the wordmark points, ie. this door's own home. */
  home: string;
  ctaLabel: string;
  ctaHref: string;
};

export function SiteHeader({ nav, home, ctaLabel, ctaHref }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === home ? pathname === home : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-6">
        <Link
          href={home}
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-mark-text"
        >
          <span aria-hidden className="inline-block size-2 bg-mark" />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "text-foreground underline decoration-mark decoration-2 underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={ctaHref}
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-mark text-mark-ink hover:bg-mark-hover"
            )}
            {...cta("email", "header")}
          >
            {ctaLabel}
          </a>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border/60 bg-background md:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col divide-y divide-border/70 px-6">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-3 text-sm",
                      active ? "text-foreground" : "text-muted-foreground"
                    )}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    {active ? (
                      <span aria-hidden className="inline-block size-2 bg-mark" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
