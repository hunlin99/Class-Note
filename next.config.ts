import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // This is the key line
  basePath: '/Class-Note',
  assetPrefix: '/Class-Note',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  // If your repo is NOT hunlin99.github.io, you need the line below:
  // basePath: '/Class-Note',
};

export default nextConfig;
