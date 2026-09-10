/**
 * Hand-drawn orange stroke under one word in a headline. DESIGN.md allows it
 * once per page, in the h1. Wrap the word in a `relative inline-block` span.
 */
export function MarkerUnderline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 12"
      className="absolute -bottom-1.5 left-0 h-2.5 w-full sm:-bottom-2.5 sm:h-3"
      preserveAspectRatio="none"
    >
      <path
        d="M4 8.5 C 45 3.5, 95 2.5, 132 5 C 165 7, 195 6.5, 216 4"
        fill="none"
        stroke="var(--mark)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
