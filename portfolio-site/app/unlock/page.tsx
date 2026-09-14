import type { Metadata } from "next";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { safeNext } from "@/lib/access";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Locked" },
  robots: { index: false, follow: false },
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const next = safeNext(
    typeof params.next === "string" ? params.next : undefined
  );
  const failed = params.error === "1";

  return (
    <main className="flex flex-1 items-center px-6 py-24">
      <div className="mx-auto w-full max-w-sm">
        <h1 className="font-display text-4xl leading-tight tracking-[-0.02em]">
          {site.name}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          This page is private. Everything meant to be shared has its own link.
        </p>

        <form action="/api/unlock" method="post" className="mt-8">
          <input type="hidden" name="next" value={next} />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-foreground"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            required
            aria-describedby={failed ? "unlock-error" : undefined}
            className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-base outline-none focus-visible:border-mark focus-visible:ring-2 focus-visible:ring-mark/40"
          />
          {failed ? (
            <p id="unlock-error" role="alert" className="mt-2 text-sm text-mark-text">
              That password is not right. Try again.
            </p>
          ) : null}
          <button
            type="submit"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-5 w-full bg-mark text-mark-ink hover:bg-mark-hover"
            )}
          >
            Unlock
          </button>
        </form>
      </div>
    </main>
  );
}
