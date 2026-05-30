import type { NextConfig } from "next";

const isPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Only switch to static-export when building for GitHub Pages.
  // Locally, `pnpm dev` still runs as a normal Next.js dev server.
  ...(isPagesBuild
    ? {
        output: "export",
        basePath: "/pvp-web-v2",
        trailingSlash: true,
      }
    : {}),
  images: {
    // GitHub Pages can't run Next.js's image-optimization server, so serve originals.
    unoptimized: isPagesBuild,
  },
};

export default nextConfig;
