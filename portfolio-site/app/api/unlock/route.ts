import { NextResponse } from "next/server";

import { ACCESS_COOKIE, accessToken, safeNext } from "@/lib/access";

/** Thirty days. Long enough that David is not retyping it every visit. */
const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST(request: Request) {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  const next = safeNext(String(form.get("next") ?? "/"));
  const expected = process.env.SITE_PASSWORD;

  if (!expected || password !== expected) {
    const back = new URL(next, request.url);
    back.searchParams.set("error", "1");
    return NextResponse.redirect(back, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(next, request.url), {
    status: 303,
  });
  response.cookies.set({
    name: ACCESS_COOKIE,
    value: await accessToken(expected),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
  return response;
}
