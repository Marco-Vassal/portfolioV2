/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

const withVideos = require("next-videos");
module.exports = withVideos();
