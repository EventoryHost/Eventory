/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "res.cloudinary.com"],
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "d1u34m45xfa3ar.cloudfront.net",
        pathname: "/website/**",
      },
    ],
  },
};

export default nextConfig;
