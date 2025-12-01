/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "assets.framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent-assets.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent-images.com",
      },
    ],
  },
};

export default nextConfig;
