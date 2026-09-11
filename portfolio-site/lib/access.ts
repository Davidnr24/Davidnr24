/** Cookie that marks a browser as having entered the site password. */
export const ACCESS_COOKIE = "site_access";

/**
 * Derives the cookie value from the password. The password itself never goes
 * into the cookie, so a stolen cookie does not hand over the password, and the
 * value changes automatically when the password is rotated.
 */
export async function accessToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`david-navarro.dev:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Only same-origin paths, so ?next= cannot be used as an open redirect. */
export function safeNext(value: string | null | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}
