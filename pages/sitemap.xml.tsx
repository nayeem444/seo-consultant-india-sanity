const EXTERNAL_DATA_URL = 'http://marketinglad.co.in/wp-json/wp/v2/posts';

function generateSiteMap(posts) {
  const baseUrl = 'https://shahidshahmiri.com';

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
  </url>
  <url>
    <loc>${baseUrl}/case-study</loc>
  </url>
  <url>
    <loc>${baseUrl}/case-study/prospeo</loc>
  </url>
  <url>
    <loc>${baseUrl}/case-study/leadgen</loc>
  </url>
  <url>
    <loc>${baseUrl}/case-study/apexure</loc>
  </url>
  ${posts
    .map(({ id, slug, modified }) => {
      return `
        <url>
          <loc>${baseUrl}/blog/${slug}</loc>
          <lastmod>${new Date(modified).toISOString()}</lastmod>
        </url>
      `;
    })
    .join('')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}