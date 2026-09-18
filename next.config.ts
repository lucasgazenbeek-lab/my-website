import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 coerces any quality outside this list to the nearest allowed
    // value, and the default list is [75] only. The CAD drawings need 90:
    // at 75 the thin line work closes up.
    qualities: [75, 90],
  },
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
