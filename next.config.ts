import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [{
      source: '/dashboard/:path*',
      headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
    }]
  },
};

export default nextConfig;
