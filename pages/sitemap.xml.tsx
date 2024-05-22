

type SitemapLocation = {
  url: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: Date;
};

const baseUrl = "https://shahidshahmiri.com"; // Ensure this is set in your environment

// Define default URLs
const defaultUrls: SitemapLocation[] = [
  {
    url: '',
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(), // or a custom date: '2023-06-12T00:00:00.000Z',
  },
  {
    url: '/contact',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  },
  {
    url: '/blog',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  },
  {
    url: '/case-study',
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(),
  },
  {
    url: '/case-study/prospeo',
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(),
  },
  {
    url: '/case-study/leadgen',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  },
  {
    url: '/case-study/apexure',
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(),
  },
  

];

const createSitemap = (locations: SitemapLocation[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations
        .map((location) => {
          return `<url>
                    <loc>${baseUrl}${location.url}</loc>
                    <priority>${location.priority}</priority>
                    ${
                      location.lastmod
                        ? `<lastmod>${location.lastmod.toISOString()}</lastmod>`
                        : ''
                    }
                  </url>`;
        })
        .join('')}
  </urlset>
  `;
};

export default function SiteMap() {
  // This function does not need to return anything for sitemap generation
  return null;
}



  export async function getServerSideProps({ res }) {
    // Fetch posts data from WordPress
    const response = await fetch('http://marketinglad.co.in/wp-json/wp/v2/posts');
    const posts = await response.json();

  // Generate sitemap locations for blog posts
  const postUrls: SitemapLocation[] = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(post.modified), // Use the post modified date
  }));

  // Combine all URLs
  const allLocations = [...defaultUrls, ...postUrls];

  // Set response to XML
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(allLocations));
  res.end();

  return {
    props: {},
  };
}
