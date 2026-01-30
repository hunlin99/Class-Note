import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Use the prefix ONLY when building for GitHub Pages
  basePath: isProd ? '/Class-Note' : '',
  assetPrefix: isProd ? '/Class-Note' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;