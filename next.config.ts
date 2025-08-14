import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is the crucial line that enables static exports
  output: 'export',

  // The two lines below are for deploying to a subdirectory on GitHub Pages
  // The name of your GitHub repository is 'portfolio'
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
