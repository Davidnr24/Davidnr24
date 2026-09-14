import type { Metadata } from "next";

import { LABS_ORIGIN } from "@/lib/hosts";

const DESCRIPTION =
  "A software development company. We design, build and run web and mobile applications, and the infrastructure underneath them.";

// The root layout carries David's personal identity: his name, his keywords,
// his OG card. None of it belongs on a company page, and inherited values
// would make a shared link preview as his resume, so every field is overridden
// here rather than left to merge.
export const metadata: Metadata = {
  metadataBase: new URL(LABS_ORIGIN),
  title: { absolute: "Navar Labs" },
  description: DESCRIPTION,
  applicationName: "Navar Labs",
  authors: [{ name: "Navar Labs" }],
  creator: "Navar Labs",
  publisher: "Navar Labs",
  keywords: [
    "Navar Labs",
    "software development company",
    "web application development",
    "mobile application development",
    "automation",
    "cloud infrastructure",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Navar Labs",
    title: "Navar Labs",
    description: DESCRIPTION,
    url: "/",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Navar Labs",
    description: DESCRIPTION,
    images: [],
  },
};

const work = [
  {
    title: "Web and mobile applications",
    body: "Built end to end, from the first sketch to something running in production with real users on it.",
  },
  {
    title: "Automation and AI",
    body: "The repetitive work inside a business handed over to software, so the people there can do the part that actually needs them.",
  },
  {
    title: "Cloud and platform engineering",
    body: "The infrastructure, pipelines and monitoring that keep all of it up, on AWS and Kubernetes.",
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
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            A software development company. We design, build and run web and
            mobile applications, and the infrastructure underneath them.
          </p>
        </header>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {work.map((w) => (
            <li key={w.title} className="py-6">
              <h2 className="font-display text-2xl leading-tight">
                {w.title}
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {w.body}
              </p>
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
