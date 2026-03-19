import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* GitHub Pages Configuration */
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory (e.g., github.com/username/project-name)
  // Uncomment the line below and replace "project-name" with your repo name
  // basePath: "/project-name",
};

export default nextConfig;
