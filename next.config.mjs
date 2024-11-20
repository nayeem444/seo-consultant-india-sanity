/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    domains: [ 'localhost','shahidshahmiri.com','secure.gravatar.com','marketinglad.co.in','www.customshow.com' ,'marketinglad.io' ,'www.fullfeel.io' ,'blog.shahidshahmiri.com' ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    // Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'http://blog.shahidshahmiri.com/',// Replace with your new URL
        permanent: true, // Set to true for a 308 permanent redirect, false for a 307 temporary redirect
      },
      {
        source: '/blog/affordable-seo-services',
        destination: 'https://blog.shahidshahmiri.com/affordable-seo-services/ ', // Replace with your new URL
        permanent: true, // Set to true for a 308 permanent redirect, false for a 307 temporary redirect
      }
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;
