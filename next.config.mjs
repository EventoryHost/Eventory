/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['eventory-web-prod.s3.ap-south-1.amazonaws.com',
      'eventory-bucket.s3.ap-south-1.amazonaws.com',
    ],
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
