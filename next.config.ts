import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is the crucial line that enables static exports
  output: 'export',

  // Disables Image Optimization API for static export
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
