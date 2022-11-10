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
    domains: [
      'p1.music.126.net'
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

module.exports = nextConfig
