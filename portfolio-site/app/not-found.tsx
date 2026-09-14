import Link from "next/link";

import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center px-6 py-24">
      <div className="mx-auto w-full max-w-lg">
        <p className="font-mono text-sm text-mark-text">404</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-[-0.02em]">
          That page isn&rsquo;t here.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          It may have moved. The résumé lives at{" "}
          <Link
            href="/resume"
            className="text-mark-text underline-offset-4 hover:underline"
          >
            /resume
          </Link>
          , contract work at{" "}
          <Link
            href="/freelance"
            className="text-mark-text underline-offset-4 hover:underline"
          >
            /freelance
          </Link>
          , and the automation pages at{" "}
          <a
            href="https://agency.navarlabs.dev/automation"
            className="text-mark-text underline-offset-4 hover:underline"
          >
            agency.navarlabs.dev
          </a>
          .
        </p>
        <p className="mt-8 text-sm text-muted-foreground">{site.email}</p>
      </div>
    </main>
  );
}
