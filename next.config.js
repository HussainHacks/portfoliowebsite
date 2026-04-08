/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure images work correctly on Netlify
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
