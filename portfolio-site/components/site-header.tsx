"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";

import { primaryNav } from "@/lib/nav";
import { site } from "@/content/site";
import { buildHireMeMailto } from "@/lib/mailto";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground hover:text-foreground/80"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
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
            href={buildHireMeMailto()}
            className={cn(
              buttonVariants({ size: "sm" }),
              "group/hire relative overflow-hidden shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md",
            )}
            aria-label="Hire me (opens an email draft)"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/hire:translate-x-full"
            />
            <Briefcase className="size-3.5" aria-hidden />
            <span>Hire me</span>
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
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
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-3">
            {primaryNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-medium",
                      active
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
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
