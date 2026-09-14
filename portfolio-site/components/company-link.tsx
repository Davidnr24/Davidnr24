import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Props = {
  name: string;
  url?: string;
  /** Path under /public. Falls back to a wordmark when absent. */
  logo?: string;
};

/**
 * A company, as a link to its official site. Renders the logo when we have a
 * file for it and the name otherwise. See public/logos/README.md.
 */
export function CompanyLink({ name, url, logo }: Props) {
  const mark = logo ? (
    <Image
      src={logo}
      alt={name}
      width={120}
      height={24}
      className="h-5 w-auto object-contain"
    />
  ) : (
    <span className="font-display text-xl leading-none">{name}</span>
  );

  if (!url) return <span className="inline-flex items-center">{mark}</span>;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
    >
      {mark}
      <ArrowUpRight
        className="size-3.5 text-muted-foreground transition-colors group-hover:text-mark-text"
        aria-hidden
      />
    </a>
  );
}
