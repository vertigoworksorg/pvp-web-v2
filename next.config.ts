import type { NextConfig } from "next";

// Static export for any static host (GitHub Pages, Cloudflare Pages, Netlify…).
const isStaticExport = process.env.STATIC_EXPORT === "true" || process.env.GITHUB_PAGES === "true";

// basePath is only needed when the site is served from a sub-path
// (e.g. GitHub Pages project sites at /pvp-web-v2). For a root/apex
// custom domain like pvp.com.pk, leave NEXT_PUBLIC_BASE_PATH unset.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Locally, `pnpm dev` still runs as a normal Next.js dev server.
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        ...(basePath ? { basePath } : {}),
      }
    : {}),
  images: {
    // Static hosts can't run Next.js's image-optimization server, so serve originals.
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
