import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is the crucial line that enables static exports
  output: 'export',
  
};

export default nextConfig;
