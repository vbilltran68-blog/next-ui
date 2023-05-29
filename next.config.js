/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
    outputStyle: 'compressed',
    sourceMap: false,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
};

module.exports = nextConfig;
