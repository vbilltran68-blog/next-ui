const path = require('path')

const envOptions = {
  NICK_NAME: process.env.NICK_NAME,
  TITLE: process.env.TITLE,
}

const nextConfig = {
  env: envOptions,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
    outputStyle: 'compressed',
    sourceMap: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig
