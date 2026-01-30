import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true
  experimental: {
    // @ts-expect-error — allowedDevOrigins is supported at runtime
    allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.25:3000"],
  },
};

export default nextConfig;
