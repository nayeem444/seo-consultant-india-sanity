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
  return (
    <html>
      <head>
        <title>Site Map</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f8f8f8;
            }
            h1 {
              text-align: center;
              padding: 20px 0;
              background-color: #333;
              color: #fff;
              margin: 0;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            ul {
              list-style-type: none;
              padding: 0;
            }
            li {
              margin-bottom: 10px;
            }
            a {
              color: #333;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1>Site Map</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/posts">Posts</a></li>
            {/* Add other links here */}
          </ul>
        </div>
      </body>
    </html>
  );
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
