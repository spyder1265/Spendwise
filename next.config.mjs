/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["firebasestorage.googleapis.com", "flowbite.s3.amazonaws.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default config;
