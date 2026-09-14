import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ACCESS_COOKIE, accessToken } from "./lib/access";
import {
  AGENCY_ORIGIN,
  AGENCY_ROUTES,
  LABS_ORIGIN,
  isAgencyHost,
  isLabsHost,
  isPersonalHost,
} from "./lib/hosts";

// Next 16 renamed the middleware convention to proxy. See
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md
//
// Two jobs:
//
// 1. Host routing. One project, two domains. agency.navarlabs.dev serves the
//    automation pages at /automation and /automatizacion; david-navarro.dev
//    serves everything else and sends any /agency path to the other domain so
//    the same page never answers on both.
//
// 2. The password on the private index, which lists the front doors and is
//    for David rather than for visitors.

/** Pages that exist only for David. */
const PROTECTED = new Set(["/"]);

function isAsset(pathname: string): boolean {
  return pathname.startsWith("/_next") || pathname.includes(".");
}

export async function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const url = request.nextUrl;
  const { pathname } = url;

  // Analytics ingest is proxied in next.config.ts; never intercept it.
  if (pathname.startsWith("/ingest")) return NextResponse.next();

  if (isAgencyHost(host)) return agency(request, pathname);
  if (isLabsHost(host)) return labs(request, pathname);

  // On the live personal domain the agency pages live elsewhere. Previews keep
  // serving them in place so a branch can be checked before it ships.
  if (isPersonalHost(host)) {
    const moved = movedToAgency(pathname);
    if (moved) return NextResponse.redirect(`${AGENCY_ORIGIN}${moved}`, 308);
  }

  if (!PROTECTED.has(pathname)) return NextResponse.next();
  return unlock(request, pathname);
}

/** Maps the agency domain's public paths onto the routes behind them. */
function agency(request: NextRequest, pathname: string) {
  if (isAsset(pathname)) return NextResponse.next();

  const url = request.nextUrl;

  // One canonical home: the English page.
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/automation", url), 308);
  }

  const match = AGENCY_ROUTES.find((r) => r.path === pathname);
  if (match) {
    const rewritten = url.clone();
    rewritten.pathname = match.route;
    return NextResponse.rewrite(rewritten);
  }

  // Internal paths must not answer on this domain, including the personal
  // pages and the /agency/* routes the rewrite targets. Rewriting to Next's
  // own not-found route returns a real 404 rather than a soft redirect.
  const notFound = url.clone();
  notFound.pathname = "/_not-found";
  return NextResponse.rewrite(notFound, { status: 404 });
}

/** The navarlabs.dev root serves one page and nothing else. */
function labs(request: NextRequest, pathname: string) {
  if (isAsset(pathname)) return NextResponse.next();

  const url = request.nextUrl;
  // www redirects to the bare domain, so there is one address for the index.
  if (hostOnly(request) === `www.${new URL(LABS_ORIGIN).host}`) {
    return NextResponse.redirect(new URL(pathname, LABS_ORIGIN), 308);
  }
  if (pathname === "/") {
    const rewritten = url.clone();
    rewritten.pathname = "/navarlabs";
    return NextResponse.rewrite(rewritten);
  }
  const notFound = url.clone();
  notFound.pathname = "/_not-found";
  return NextResponse.rewrite(notFound, { status: 404 });
}

function hostOnly(request: NextRequest): string {
  return (request.headers.get("host") ?? "").toLowerCase().split(":")[0];
}

/** Personal-domain paths that now belong to the agency domain. */
function movedToAgency(pathname: string): string | null {
  const byRoute = AGENCY_ROUTES.find((r) => r.route === pathname);
  if (byRoute) return byRoute.path;
  const byPath = AGENCY_ROUTES.find((r) => r.path === pathname);
  if (byPath) return byPath.path;
  if (pathname === "/agency" || pathname.startsWith("/agency/")) {
    return "/automation";
  }
  return null;
}

async function unlock(request: NextRequest, pathname: string) {
  const expected = process.env.SITE_PASSWORD;

  // Nothing configured: open locally so development is not blocked. In
  // production fall through to the unlock page, which can never be satisfied,
  // so a missing variable cannot quietly publish the index.
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
  // Everything except Next's own assets. The function above lets static files
  // and the ingest proxy straight through.
  matcher: ["/((?!_next/static|_next/image).*)"],
};
