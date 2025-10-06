import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://assets.circleandclique.com/artifacts/**'), new URL('https://cdn.pixabay.com/**')],
    unoptimized: true
  }
};

export default nextConfig;
