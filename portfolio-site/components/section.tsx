import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Section header: the title runs the full width under a heavy rule, with any
 * supporting line pushed to the opposite edge. Deliberately not a narrow left
 * column with a list beside it, which read as a template.
 */
export function Section({
  id,
  heading,
  lede,
  className,
  children,
}: {
  id: string;
  heading: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={cn("mt-24 sm:mt-32", className)}
    >
      <div className="flex flex-col gap-3 border-b-2 border-foreground pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <h2
          id={id}
          className="max-w-3xl text-balance font-display text-4xl leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-6xl"
        >
          {heading}
        </h2>
        {lede ? (
          <p className="max-w-xs shrink-0 text-sm leading-relaxed text-muted-foreground sm:text-right">
            {lede}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

/** Container for IndexRow. Hairlines between, nothing around. */
export function IndexRows({ children }: { children: React.ReactNode }) {
  return <ul className="divide-y divide-border">{children}</ul>;
}

/**
 * One item on a 12 column grid: a mark on the left, the title in display type,
 * and the body running wide on the right. The row tints on hover, so the whole
 * band reads as one object without needing a border around it.
 */
export function IndexRow({
  icon: Icon,
  mark,
  title,
  aside,
  children,
}: {
  icon?: LucideIcon;
  /** Anything custom in the mark slot, eg. a brand logo or a numeral. */
  mark?: React.ReactNode;
  title: React.ReactNode;
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const hasMark = Boolean(mark || Icon);

  return (
    <li className="group grid grid-cols-1 items-start gap-x-8 gap-y-3 py-8 transition-colors hover:bg-mark-soft sm:-mx-4 sm:grid-cols-12 sm:px-4 sm:py-9">
      {hasMark ? (
        <div className="flex items-center sm:col-span-1 sm:justify-start sm:pt-1">
          {mark ?? (Icon ? (
            <Icon
              className="size-7 text-mark-text transition-transform group-hover:scale-110"
              strokeWidth={1.5}
              aria-hidden
            />
          ) : null)}
        </div>
      ) : null}
      <div className={hasMark ? "sm:col-span-4" : "sm:col-span-5"}>
        <h3 className="font-display text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
          {title}
        </h3>
        {aside ? (
          <p className="mt-1 text-sm text-muted-foreground">{aside}</p>
        ) : null}
      </div>
      {children ? (
        <div className="text-base leading-relaxed text-muted-foreground sm:col-span-7 sm:text-lg">
          {children}
        </div>
      ) : null}
    </li>
  );
}

/**
 * Kept for the places that only need a compact two-line entry, such as
 * certifications and education, where a display-size title would shout.
 */
export function Rows({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("divide-y divide-border/70", className)}>{children}</ul>
  );
}

export function Row({
  lead,
  aside,
  children,
  className,
}: {
  lead: React.ReactNode;
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("py-6", className)}>
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="text-base font-semibold tracking-tight">{lead}</h3>
        {aside ? (
          <span className="shrink-0 text-sm text-muted-foreground">{aside}</span>
        ) : null}
      </div>
      {children ? (
        <div className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {children}
        </div>
      ) : null}
    </li>
  );
}
