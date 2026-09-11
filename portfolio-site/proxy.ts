import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ACCESS_COOKIE, accessToken } from "./lib/access";

// Next 16 renamed the middleware convention to proxy. See
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md
//
// The two index pages are for David, not for visitors: they list every front
// door, and the point of the doors is that each audience sees only its own.
// Everything else on the site is public.
//
// This rewrites to a normal unlock page rather than answering 401 with a Basic
// auth challenge. A 401 makes the browser throw its own credential dialog,
// which it then re-offers on other pages of the same origin, and which a
// visitor can simply cancel. A form and a cookie behave predictably.

const PROTECTED = new Set(["/", "/agency"]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!PROTECTED.has(pathname)) return NextResponse.next();

  const expected = process.env.SITE_PASSWORD;

  // Nothing configured: open locally so development is not blocked. In
  // production fall through to the unlock page, which can never be satisfied,
  // so a missing variable cannot quietly publish these pages.
  if (!expected && process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(ACCESS_COOKIE)?.value;
  if (expected && cookie && cookie === (await accessToken(expected))) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/unlock";
  url.searchParams.set("next", pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/", "/agency"],
};
