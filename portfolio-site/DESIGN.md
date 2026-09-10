# DESIGN.md

Source of truth for how this site looks. Read it before touching any UI. If a change would break one of these rules, say so before writing the code.

## Who this is for

Two readers, one site:

1. A hiring manager or engineering lead deciding whether to interview David for a Senior DevOps / Platform role.
2. A small business owner (today: online coaches) deciding whether to pay David to automate their admin.

Both are skimming. Both have seen a hundred template portfolios. The site has to look like a person with taste built it, and it has to get out of the way of the content.

## Direction: engineer's notebook

The reference is the `/automation` landing page. Everything else moves toward it.

The feel is a well-typeset technical document: numbered sections, hairline rules, monospace labels, generous white space, one loud colour used sparingly, and one dark block per page for the thing that matters most. Think a printed engineering report or a good magazine feature, not a SaaS marketing site.

What that means in practice:

- Content sits in a two-column grid on desktop: a narrow left column for the section number and heading, a wide right column for the body. Stacks to one column on mobile.
- Sections are separated by a 1px rule and a number in mono, like `(02)`. Not by boxes.
- Lists are rows divided by hairlines. Cards are the exception, used only when items are genuinely parallel and need to be compared (a project grid).
- One dark block per page, black background, for the single most important thing: a case study, a headline number, a closing call to action.
- Hover states change colour or underline. They do not lift, glow, shimmer, blur, or rotate.
- Every page ends with the same closing: a short line, one primary action, the footer. No grey "Let's talk" box.

## Things that are banned

These are the tells that make the site look generated. Do not add them back.

- `rounded-2xl` bordered cards as the default container. Rows and rules instead.
- Gradient overlays, blur glows, shimmer sweeps, ping dots, icons that rotate on hover.
- Badge clouds. A list of 60 pills is not a skills section. Group and write a sentence.
- Uppercase tracked-out grey eyebrows above every heading. Use the mono section number instead.
- A grey rounded CTA box at the bottom of every page with a slightly different sentence in it.
- More than one accent colour. Emerald "Current" pills, amber status chips and the like are gone. Status is text.
- Em dashes and en dashes in any copy. See the humanizer rules.
- Stock phrases: "seamless", "elevate", "empower", "leverage", "passionate about".

## Colour

Tokens live in `app/globals.css` as CSS variables and are exposed through Tailwind's theme as `mark`, `mark-text`, `mark-soft` and so on (`bg-mark`, `text-mark-text`, `border-mark-border`). They are named `mark` because shadcn already owns `accent`. Never hardcode a hex value in a component.

Base palette stays near-monochrome. shadcn's neutral scale is fine for `background`, `foreground`, `muted`, `border`.

One accent: marker orange.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--mark` | `#ff9900` | `#ff9900` | fills, the marker underline, the section dot, the numbered step circles, the dark block's highlight text |
| `--mark-hover` | `#e68a00` | `#ffad33` | hover on accent-filled buttons |
| `--mark-ink` | `#231303` | `#231303` | text on top of an accent fill |
| `--mark-text` | `#9d5b00` | `#ffb84d` | accent used as text on the page background (WCAG AA) |
| `--mark-soft` | `rgb(255 153 0 / 0.10)` | `rgb(255 153 0 / 0.14)` | tinted backgrounds, the offset square behind the avatar |
| `--mark-border` | `rgb(255 153 0 / 0.35)` | `rgb(255 153 0 / 0.30)` | the step timeline rule |

Rules:

- Orange is never used for body text or long headings. It marks, it does not narrate.
- Plain `#ff9900` fails contrast as small text on white, so text uses `--mark-text`.
- The dark block is `bg-foreground text-background`. Orange reads well on it and is the only colour allowed inside it.

## Typography

Three faces, each with one job.

| Role | Face | Loaded as | Use |
|---|---|---|---|
| Display | Instrument Serif | `--font-display` | h1 and h2 only. Regular weight, tight leading, tracking slightly negative. Italic allowed for one emphasised word. |
| Text | Geist Sans | `--font-geist-sans` | body, h3 and below, buttons, nav |
| Label | Geist Mono | `--font-geist-mono` | section numbers, eyebrows, dates, metrics, the top rule, micro copy |

Scale (desktop / mobile):

- h1: `text-6xl` / `text-[2.6rem]`, `leading-[1.02]`, `tracking-[-0.02em]`, display face
- h2: `text-3xl` / `text-2xl`, `leading-tight`, display face
- h3: `text-base font-semibold tracking-tight`, text face
- body: `text-base` (mobile) to `text-lg` (desktop), `leading-relaxed`, max width `max-w-xl` for paragraphs
- label: `text-xs font-mono`, normal case, colour `muted-foreground` or `--mark-text`
- metric: `text-5xl font-mono font-semibold tracking-tight`, accent colour inside the dark block

The marker underline (`MarkerUnderline` in `components/marker-underline.tsx`) may be used on at most one word per page, in the h1.

## Spacing and layout

- Page container: `max-w-5xl mx-auto px-6`. Same on every page, including the standalone landings.
- Vertical rhythm between sections: `mt-20 sm:mt-24`, then `border-t pt-10`.
- Section grid: `grid-cols-1 sm:grid-cols-[1fr_2fr] gap-x-12 gap-y-8`.
- Rows inside a list: `py-5`, divided by `border-t border-border/70`.
- Dark block and final CTA: `rounded-xl p-7 sm:p-12`. This is the only place a large radius appears.
- Buttons: shadcn `size="lg"` on hero and final CTA, default elsewhere. Primary is accent fill with `--mark-ink` text. Secondary is `foreground` fill on the accent band, or `outline` on the page.

## Motion

- Library: `motion` (`motion/react`). Client components only.
- Allowed: a staggered fade-up on hero load (opacity and 12px of y, 0.5s, ease-out), a single fade-up on section reveal with `viewport={{ once: true }}`, colour transitions on hover at 150 to 200ms.
- Not allowed: hover lift, scale on cards, parallax, anything that animates width or height, decorative loops.
- Respect `prefers-reduced-motion`: use `useReducedMotion()` and skip the transform.

## Imagery

- Avatar: square with `rounded-xl`, offset accent-soft square behind it. Circle avatars are gone.
- Photos on the About page: full-bleed within the grid column, `rounded-xl`, no hover zoom, no gradient overlay.
- Icons: lucide, `strokeWidth={1.75}`, `size-4` inline with text or `size-5` at the start of a row. Never inside a bordered icon tile.

## Accessibility minimums

- WCAG AA contrast on all text, both themes. `--mark-text` exists for this reason.
- Every interactive element keyboard-reachable with a visible focus ring (shadcn default).
- Real `<a>` and `<button>`. No clickable `<div>`.
- Alt text on every meaningful image, `alt=""` on decorative ones.
- Body text never below 16px on mobile.

## Copy voice

Short sentences. First person. Say what was done and what it changed. Numbers over adjectives. Run every user-facing string through the humanizer rules before it ships, then grep for `—` and `–`.
