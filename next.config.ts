import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.25:3000"],
  // reactStrictMode: true
};

export default nextConfig;
