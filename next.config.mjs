/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [{ hostname: "flowbite.s3.amazonaws.com" }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default config;
