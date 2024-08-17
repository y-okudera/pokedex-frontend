/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ["page.tsx", "page.ts"],
  output: "standalone",
};

export default nextConfig;
