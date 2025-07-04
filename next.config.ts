import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["gousteel.com"], // 添加允许的域名
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
