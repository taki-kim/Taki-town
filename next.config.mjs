/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@use "variables" as *;`,
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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
