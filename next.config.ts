import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [{
      source: '/dashboard/:path*',
      headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
    }]
  },
  async redirects() {
    return [{
      // The Supply & Technical model merged into Technical Support.
      source: '/partnermodellen/supply-technical',
      destination: '/partnermodellen/technical-support',
      permanent: true,
    }]
  },
};

export default nextConfig;
