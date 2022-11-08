const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/getting-started',
        permanent: false
      },
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: false
      }
    ];
  }
};

module.exports = withContentlayer(nextConfig);
