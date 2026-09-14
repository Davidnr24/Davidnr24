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
  // The site reorganised into audience-specific front doors. Keep the old
  // paths working for anything already shared or indexed.
  //
  // The automation paths are deliberately absent: they now live on
  // agency.navarlabs.dev and proxy.ts routes them per host. A redirect here
  // would win over the proxy and trap them on this domain.
  async redirects() {
    return [
      { source: "/career", destination: "/resume/career", permanent: true },
      { source: "/skills", destination: "/resume/skills", permanent: true },
      { source: "/projects", destination: "/resume/projects", permanent: true },
      { source: "/personal", destination: "/resume/personal", permanent: true },
    ];
  },
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
