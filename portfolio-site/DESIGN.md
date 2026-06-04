# DESIGN.md — Portfolio Site

Source of truth for visual design decisions. Read this before writing any styling/UI code. If a change would diverge from this file, flag it before coding.

> **Status: scaffold-stage placeholder.** Token values below are the shadcn `neutral` defaults that ship with the project (see `app/globals.css`). A proper pass with `frontend-design` and `ui-ux-pro-max` will replace them.

## Voice / direction

- Senior DevOps/Platform Engineer. Looks credible to hiring managers and to companies considering David for contract work.
- Calm and confident, not flashy. Animations should be subtle (fade/slide on scroll, micro-interactions) — not a portfolio that tries to act like a creative agency.
- High-contrast, fast, accessible. Site Lighthouse should be ≥ 95 across the board.

## Color tokens

Defined as CSS variables in `app/globals.css` (shadcn `neutral` palette, `cssVariables: true`). Use the Tailwind utility classes that map to them — `bg-background`, `text-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, etc. Don't hardcode hex values in components.

Light + dark mode both supported out of the box.

## Typography

- `next/font` (Geist Sans, Geist Mono) — already wired in `app/layout.tsx` from create-next-app.
- Type scale: TBD during design pass. Default to Tailwind's scale until then (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-4xl`, `text-6xl` for hero).

## Spacing & layout

- Tailwind default 4px scale.
- Max content width: `max-w-6xl` for marketing pages, `max-w-3xl` for prose. Center with `mx-auto`.
- Horizontal padding: `px-6 md:px-8`.

## Radii / elevation

- Radius scale comes from shadcn (`--radius: 0.625rem`). Use `rounded-lg`, `rounded-xl`.
- Elevation: prefer subtle borders (`border border-border`) over heavy shadows. One soft shadow tier (`shadow-sm`) is enough.

## Motion

- Library: `motion` (formerly Framer Motion). Import `motion/react` in client components or `motion/react-client` to reduce JS.
- Use cases: hero entrance, on-scroll reveal of sections, project card hover. Avoid parallax and anything that hijacks scroll.
- Respect `prefers-reduced-motion` — wrap animated components or disable transitions when the user opts out.

## Accessibility minimums

- WCAG AA contrast on all text.
- All interactive elements keyboard-reachable; visible focus rings (shadcn defaults handle this).
- Real `<a>` and `<button>` semantics — no clickable `<div>`s.
- Alt text on every image; decorative images use `alt=""`.
