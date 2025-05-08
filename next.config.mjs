/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@import "variables.scss";`, // 자동으로 삽입
  },
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
