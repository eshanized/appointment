/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/appointment',
  assetPrefix: '/appointment/',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;