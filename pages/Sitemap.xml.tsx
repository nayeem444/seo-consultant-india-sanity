import { getAllPosts, getClient } from 'lib/sanity.client';

type SitemapLocation = {
  url: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: Date;
};

// Manually add routes to the sitemap
const defaultUrls: SitemapLocation[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(), // or a custom date: '2023-06-12T00:00:00.000Z',
  },
  {
    url: '/posts',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  },
];

const createSitemap = (locations: SitemapLocation[]) => {
  const baseUrl = "https://www.seoconsultantindia.in"; // Ensure this is set in your environment
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" class="bg-gray-100">\n`;

  sitemap += locations
    .map((location) => {
      return `
        <div class="mb-4">
          <div class="text-blue-500 hover:underline">${baseUrl}${location.url}</div>
          <div class="text-sm text-gray-500">Priority: ${location.priority}</div>
          <div class="text-sm text-gray-500">
            Last Modified: ${location.lastmod ? location.lastmod.toISOString() : 'Not specified'}
          </div>
        </div>\n`;
    })
    .join('');

  sitemap += `</urlset>`;
  
  return sitemap;
};


export default function SiteMap() {
  // This function does not need to return anything for sitemap generation
}

export async function getServerSideProps({ res }) {
  const client = getClient();

  // Get list of Post urls
  const posts = await getAllPosts(client);
  const postUrls: SitemapLocation[] = posts
    .filter(({ slug = '' }) => slug)
    .map((post) => ({
      url: `/posts/${post.slug}`,
      priority: 0.5,
      lastmod: new Date(post._updatedAt),
    }));

  // Combine the default urls with dynamic post urls
  const locations = [...defaultUrls, ...postUrls];

  // Set response to XML
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(locations));
  res.end();

  return {
    props: {},
  };
}
