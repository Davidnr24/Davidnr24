import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  src?: string;
  alt?: string;
};

/**
 * Initials-based placeholder avatar. Replace `src` with a real photo by
 * dropping a file into `public/` and passing its path.
 */
export function ProfileAvatar({ className, src, alt = "David Navarro" }: Props) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={cn(
          "size-28 rounded-full object-cover ring-1 ring-border",
          className
        )}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-foreground to-foreground/70 text-3xl font-semibold tracking-tight text-background ring-1 ring-border",
        className
      )}
    >
      DN
    </div>
  );
}
