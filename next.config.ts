import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* GitHub Pages Configuration */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my-profile",
};

export default nextConfig;
