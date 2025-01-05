import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['c.saavncdn.com', 'www.freepnglogos.com', 'res.cloudinary.com'], // Add the external domain here
  },
};

export default nextConfig;