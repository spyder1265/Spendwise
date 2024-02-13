/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      { hostname: "flowbite.s3.amazonaws.com" },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "wallpaperaccess.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
