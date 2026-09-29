import Link from "next/link";

import { cta, type CtaName } from "@/lib/analytics";
import { site } from "@/content/site";

const links: {
  label: string;
  href: string;
  external: boolean;
  name: CtaName;
}[] = [
  { label: "Email", href: `mailto:${site.email}`, external: false, name: "email" },
  { label: "LinkedIn", href: site.linkedin, external: true, name: "linkedin" },
  { label: "GitHub", href: site.github, external: true, name: "github" },
  { label: "Résumé", href: site.resumeHref, external: true, name: "resume" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.role} <span className="text-mark-text">/</span>{" "}
            {site.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) =>
            l.external ? (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  {...cta(l.name, "footer")}
                >
                  {l.label}
                </a>
              </li>
            ) : (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  {...cta(l.name, "footer")}
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 text-sm text-muted-foreground/70">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span aria-hidden className="inline-block size-2 bg-mark" />
      </div>
    </footer>
  );
}
