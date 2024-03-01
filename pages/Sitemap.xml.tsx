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
    lastmod: new Date(),
  },
  {
    url: '/posts',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  },
];

const createSitemap = (locations: SitemapLocation[]) => {
  const baseUrl = "https://www.seoconsultantindia.in";
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

const SiteMap = ({ locations }) => {
  return (
    <html>
      <head>
        <title>Site Map</title>
      </head>
      <body className="bg-gray-100">
        <div className="container mx-auto p-8">
          <h1 className="text-2xl font-bold text-center mb-8">Site Map</h1>
          <ul className="list-none">
            {locations.map((location, index) => (
              <li key={index} className="mb-4"><a href={location.url} className="text-blue-500 hover:underline">{location.url}</a></li>
            ))}
          </ul>
        </div>
      </body>
    </html>
  );
};

export default SiteMap;

export async function getServerSideProps({ res }) {
  const client = getClient();

  const posts = await getAllPosts(client);
  const postUrls = posts
    .filter(({ slug = '' }) => slug)
    .map((post) => ({
      url: `/posts/${post.slug}`,
      priority: 0.5,
      lastmod: new Date(post._updatedAt),
    }));

  const locations = [...defaultUrls, ...postUrls];

  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(locations));
  res.end();

  return {
    props: { locations },
  };
}
