import type { NextConfig } from "next";

const getImageRemotePatterns = () => {
  const patterns: Array<{
    protocol: 'http' | 'https'
    hostname: string
    port?: string
    pathname?: string
  }> = [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '3001',
      pathname: '/api/media/**',
    },
    {
      protocol: 'https',
      hostname: '*.public.blob.vercel-storage.com',
    },
  ]

  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    patterns.push({
      protocol: 'https',
      hostname: process.env.RAILWAY_PUBLIC_DOMAIN,
      pathname: '/api/media/**',
    })
  }

  return patterns
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getImageRemotePatterns(),
    unoptimized: true,
  },
};

export default nextConfig;
