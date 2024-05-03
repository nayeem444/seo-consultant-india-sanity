
import { LoaderFunction, Response } from "@remix-run/node";
import { getClient } from "lib/sanity.client";
import { postSlugsQuery } from "../lib/sanity.queries"; // Assuming your queries are in a module named "~/queries"

// Define the loader function
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if the request is for the sitemap
  if (pathname === '/sitemap.xml') {
    // Fetch blog post slugs from Sanity CMS
    const client = getClient();
    const slugs = await client.fetch(postSlugsQuery); // Execute the query to get post slugs

    // Render XML response for blog posts
    const baseUrl = "https://shahidshahmiri.com/blog"; // Adjust the base URL according to your blog's URL structure
    const sourceXML = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs.map((slug) => `<url>
          <loc>${baseUrl}/${slug}</loc>
        </url>`).join('')}
      </urlset>`;

    return new Response(sourceXML, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "x-content-type-options": "nosniff",
        "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      },
    });
  } else {
    // Generate sitemap for pages using the existing code
    const locations = [
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
    ];

    const baseUrl = "https://shahidshahmiri.com/"; // Adjust the base URL according to your website's URL structure

    const sourceXML = `<?xml version="1.0" encoding="UTF-8"?>
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

    return new Response(sourceXML, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "x-content-type-options": "nosniff",
        "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      },
    });
  }
};
