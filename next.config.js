/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Performance optimizations
  swcMinify: true,
  
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // Base path for GitHub Pages (replace with your repo name)
  basePath: '/personal-blog-portfolio',
  assetPrefix: '/personal-blog-portfolio/',
  
  // Production optimizations
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig


