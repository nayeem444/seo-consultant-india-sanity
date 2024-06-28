const baseUrl = 'https://shahidshahmiri.com';

function generateSiteMap() {
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
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
