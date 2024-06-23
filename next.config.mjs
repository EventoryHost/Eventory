/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "img.daisyui.com",
      },
      {
        hostname: "d1u34m45xfa3ar.cloudfront.net",
      }
    ],
  },
};

export default nextConfig;
