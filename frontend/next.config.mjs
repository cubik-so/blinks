/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/actions.json",
        destination: "/api/actions.json",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        port: "",
        pathname: "*/**",
      },
    ],
  },
};

export default nextConfig;
