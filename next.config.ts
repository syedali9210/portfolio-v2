import type { NextConfig } from "next";

const config: NextConfig = {
  // Another package-lock.json sits in the user folder; pin the root to this project.
  turbopack: { root: __dirname },
  // Screenshots are full of small UI text: serve them at quality 90, not the default 75, and up to 4K wide.
  images: { qualities: [90], deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2560, 3840] },
};

export default config;
