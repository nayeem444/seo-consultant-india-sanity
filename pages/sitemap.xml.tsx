import { getClient } from 'lib/sanity.client';

type SitemapLocation = {
  url: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: Date;
};

const baseUrl = "https://shahidshahmiri.com/"; // Ensure this is set in your environment

// Define default URLs
const defaultUrls: SitemapLocation[] = [
  {
    url: '',
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(), // or a custom date: '2023-06-12T00:00:00.000Z',
  },
  {
    url: 'contact',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  },

  {url: 'blog',
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date(),
},
{
  url: 'case-study',
  changefreq: 'weekly',
  priority: 0.5,
  lastmod: new Date(),
},
{
  url: 'case-study/prospeo',
  changefreq: 'weekly',
  priority: 0.5,
  lastmod: new Date(),
},
{
  url: 'case-study/leadgen',
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date(),
},
{
  url: 'case-study/apexure',
  changefreq: 'weekly',
  priority: 0.5,
  lastmod: new Date(),
},

  // Add other static page URLs here
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
  // Fetch posts data from Sanity CMS
  const client = getClient();

  // Fetch posts
  const posts = await client.fetch(`*[_type == "post"]`);

  // Generate sitemap locations for posts
  const postUrls: SitemapLocation[] = posts.map((post) => ({
    url: `blog/${post.slug.current}`,
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(post._updatedAt), // Assuming Sanity CMS provides a last updated date
  }));

  // Fetch pages data
  const pages = await client.fetch(`*[_type == "page"]{slug}`);

  // Generate sitemap locations for pages
  const pageUrls: SitemapLocation[] = pages.map((page) => ({
    url: page.slug.current === 'home' ? '' : page.slug.current, // Adjust if home page slug is different
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(), // You need to adjust this based on the last modified date of each page
  }));

  // Combine all URLs
  const allLocations = [...defaultUrls, ...postUrls, ...pageUrls];

  // Set response to XML
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(allLocations));
  res.end();

  return {
    props: {},
  };
}


// import { getClient } from 'lib/sanity.client';

// type SitemapLocation = {
//   url: string;
//   changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
//   priority: number;
//   lastmod?: Date;
// };

// // Manually add routes to the sitemap
// const defaultUrls: SitemapLocation[] = [
//   {
//     url: '',
//     changefreq: 'daily',
//     priority: 1,
//     lastmod: new Date(), // or a custom date: '2023-06-12T00:00:00.000Z',
//   },
//   {
//     url: 'contact',
//     changefreq: 'weekly',
//     priority: 0.7,
//     lastmod: new Date(),
//   },
//   {
   
// ];

// const createSitemap = (locations: SitemapLocation[]) => {
//   const baseUrl = "https://shahidshahmiri.com/"; // Ensure this is set in your environment
//   return `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${locations
//         .map((location) => {
//           return `<url>
//                     <loc>${baseUrl}${location.url}</loc>
//                     <priority>${location.priority}</priority>
//                     ${
//                       location.lastmod
//                         ? `<lastmod>${location.lastmod.toISOString()}</lastmod>`
//                         : ''
//                     }
//                   </url>`;
//         })
//         .join('')}
//   </urlset>
//   `;
// };

// export default function SiteMap() {
//   // This function does not need to return anything for sitemap generation
//   return null;
// }

// export async function getServerSideProps({ res }) {
//   // Get list of default URLs
//   const locations = defaultUrls;

//   // Set response to XML
//   res.setHeader('Content-Type', 'text/xml');
//   res.write(createSitemap(locations));
//   res.end();

//   return {
//     props: {},
//   };
// }
