import { getAllPosts, getClient } from 'lib/sanity.client';

type SitemapLocation = {
  url: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: Date;
};

const defaultUrls: SitemapLocation[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(), // This can be set to the build date if static or removed if not needed
  },
  // Uncomment or add more URLs as needed
  // { url: '/about', changefreq: 'monthly', priority: 0.7 },
  // { url: '/blog', changefreq: 'weekly', priority: 0.8 },
];

const createSitemap = (locations: SitemapLocation[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL; // Ensure this is set in your environment
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${locations
      .map(location => {
        return `<url>
                  <loc>${baseUrl}${location.url}</loc>
                  <priority>${location.priority}</priority>
                  ${location.lastmod ? `<lastmod>${location.lastmod.toISOString()}</lastmod>` : ''}
                </url>`;
      })
      .join('')}
</urlset>
`;
};

export async function getServerSideProps({ res }) {
  try {
    const client = getClient();
    const [posts = []] = await Promise.all([getAllPosts(client)]).catch(error => {
      console.error('Error fetching posts:', error);
      return [[]]; // Return an empty array if there is an error
    });

    const postUrls: SitemapLocation[] = posts
      .filter(({ slug = '' }) => slug)
      .map(post => ({
        url: `/posts/${post.slug}`,
        priority: 0.5,
        lastmod: new Date(post._updatedAt),
      }));

    const locations = [...defaultUrls, ...postUrls];

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(locations));
    res.end();
  } catch (error) {
    console.error('Sitemap generation failed:', error);
    res.status(500).send('Internal Server Error');
  }

  return {
    props: {},
  };
}

// Placeholder for default function to avoid Next.js errors
export default function SiteMap() {
  // This function is not used but is required by Next.js for this page
}
