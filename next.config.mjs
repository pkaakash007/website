/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export served by the Cloudflare worker (see wrangler.jsonc).
  output: "export",
  // Every page is emitted as /path/index.html and canonical URLs end in "/".
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Pin the workspace root (a stray lockfile in the user folder confuses detection).
  turbopack: {
    root: import.meta.dirname,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
