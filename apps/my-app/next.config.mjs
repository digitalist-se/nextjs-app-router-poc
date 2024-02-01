/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/utils"],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
