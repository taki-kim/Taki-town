/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // HTTP 프로토콜 허용
        hostname: "**", // 모든 도메인 허용
      },
      {
        protocol: "https", // HTTPS 프로토콜 허용
        hostname: "**", // 모든 도메인 허용
      },
    ],
  },
};

export default nextConfig;
