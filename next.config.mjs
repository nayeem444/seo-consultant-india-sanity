/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: 'localhost' },
      { hostname: 'shahidshahmiri.com' },
      { hostname: 'secure.gravatar.com' },
      { hostname: 'marketinglad.co.in' },
      { hostname: 'www.customshow.com' },
      { hostname: 'marketinglad.io' },
      { hostname: 'www.fullfeel.io' },
      { hostname: 'blog.shahidshahmiri.com' },
    ],
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'http://blog.shahidshahmiri.com/',
        permanent: true,
      },
      {
        source: '/blog/affordable-seo-services',
        destination: 'https://blog.shahidshahmiri.com/affordable-seo-services/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },
};

export default config;
