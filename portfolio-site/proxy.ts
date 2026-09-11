import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next 16 renamed the middleware convention to proxy. See
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md
//
// The two index pages are for David, not for visitors: they list every front
// door, and the whole point of the front doors is that each audience only sees
// its own. Everything else on the site stays public.

const PROTECTED = new Set(["/", "/agency"]);

const UNAUTHORIZED = {
  status: 401,
  headers: {
    "WWW-Authenticate": 'Basic realm="david-navarro.dev", charset="UTF-8"',
    "Cache-Control": "no-store",
  },
} as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!PROTECTED.has(pathname)) return NextResponse.next();

  const expected = process.env.SITE_PASSWORD;

  // No password configured: open locally so dev is not blocked, closed in
  // production so a missing env var cannot silently publish these pages.
  if (!expected) {
    if (process.env.NODE_ENV !== "production") return NextResponse.next();
    return new NextResponse("Index unavailable.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice("Basic ".length));
      // Any username works. The password is the whole secret.
      const password = decoded.slice(decoded.indexOf(":") + 1);
      if (password === expected) return NextResponse.next();
    } catch {
      // Malformed header falls through to the challenge below.
    }
  }

  return new NextResponse("Authentication required.", UNAUTHORIZED);
}

export const config = {
  matcher: ["/", "/agency"],
};
