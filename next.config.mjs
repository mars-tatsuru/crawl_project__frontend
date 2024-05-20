/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["test-koike.s3.ap-northeast-1.amazonaws.com"],
  },
};

export default nextConfig;
