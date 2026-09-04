import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'i.pinimg.com',
      'res.cloudinary.com',
      'static.vecteezy.com',
      'encrypted-tbn0.gstatic.com',
      'media.istockphoto.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
