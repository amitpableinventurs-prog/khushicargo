// The GitHub Pages workflow sets PAGES_BASE_PATH (e.g. "/khushicargo") to build a static export that is
// served from the repository sub-path. Without it, `next dev` and `next start` behave as before.
const basePath = process.env.PAGES_BASE_PATH;

/** @type {import('next').NextConfig} */
const nextConfig =
  basePath === undefined
    ? {}
    : {
        output: "export",
        trailingSlash: true,
        basePath,
        env: { NEXT_PUBLIC_BASE_PATH: basePath },
      };

export default nextConfig;
