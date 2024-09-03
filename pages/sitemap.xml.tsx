import { GetServerSideProps } from 'next';
import { getAllSlugs } from '../lib/pages'; // Adjust the import path as necessary

const baseUrl = 'https://shahidshahmiri.com';

const staticPages = [
  '',
  '/contact',
  '/blog',
  '/case-study',
  '/case-study/prospeo',
  '/case-study/leadgen',
  '/case-study/apexure'
];

async function generateSiteMap() {
  // Get dynamic slugs
  const dynamicSlugs = await getAllSlugs();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
  </url>`
    )
    .join('')}
  ${dynamicSlugs
    .map((slug) => `
  <url>
    <loc>${baseUrl}/${slug}</loc>
  </url>`
    )
    .join('')}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = await generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

// Default export to prevent next.js errors
const SiteMap: React.FC = () => null;
export default SiteMap;