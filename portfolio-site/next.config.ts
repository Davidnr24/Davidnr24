import type { NextConfig } from "next";

// PostHog reverse proxy. Ingest traffic goes to /ingest on our own domain, so
// ad blockers that filter *.posthog.com don't drop it. Derived from the public
// host var so switching region (us to eu) needs no edit here. PostHog's assets
// host follows the convention https://us.i.posthog.com -> us-assets.i.posthog.com
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const POSTHOG_ASSETS_HOST = POSTHOG_HOST.replace(
  /\/\/([^.]+)\.i\.posthog\.com/,
  "//$1-assets.i.posthog.com"
);

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: `${POSTHOG_ASSETS_HOST}/static/:path*`,
      },
      {
        source: "/ingest/array/:path*",
        destination: `${POSTHOG_ASSETS_HOST}/array/:path*`,
      },
      {
        source: "/ingest/:path*",
        destination: `${POSTHOG_HOST}/:path*`,
      },
    ];
  },
  // PostHog's ingest endpoints are sensitive to an added trailing slash.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
