/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // distDir: 'build',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
        '/': { page: '/' },
    };
  },
  images: {
    // loader: 'akamai',
    // path:'',
    domains: ['images.unsplash.com'],
  }
};

module.exports = nextConfig
