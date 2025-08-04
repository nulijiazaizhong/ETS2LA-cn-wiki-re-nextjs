import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['tc.ets2la.cn'],
  },
};

export default nextConfig;
