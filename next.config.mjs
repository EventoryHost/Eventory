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
        protocol: "https",
        hostname: "d1u34m45xfa3ar.cloudfront.net",
        pathname: "/website/**",
      },
      {
        protocol: "https",
        hostname: "eventory-bucket.s3.ap-south-1.amazonaws.com", // Add your S3 bucket hostname
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
