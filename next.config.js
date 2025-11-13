/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Performance optimizations
  swcMinify: true,
  
  // Production optimizations
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig


