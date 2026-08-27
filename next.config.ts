import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  poweredByHeader: false,
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, max-age=0, must-revalidate",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/products/audit-management-system",
        destination: "/products",
        permanent: false,
      },
      {
        source: "/products/enviroment-health-safety",
        destination: "/products/safetrack",
        permanent: true,
      },
      {
        source: "/products/batch-manufacturing-records",
        destination: "/products/ebmr",
        permanent: true,
      },
      {
        source: "/careers/:jobId",
        destination: "/careers",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
