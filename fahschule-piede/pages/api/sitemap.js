export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>http://fahrschule-piede.de/</loc>
      <lastmod>2022-10-26</lastmod>
      <changefreq>daily</changefreq>
    </url>
    <url>
      <loc>http://fahrschule-piede.de/oeffnungszeiten</loc>
      <lastmod>2022-10-26</lastmod>
      <changefreq>daily</changefreq>
    </url>
    <url>
      <loc>http://fahrschule-piede.de/fuehrerscheine</loc>
      <lastmod>2022-10-26</lastmod>
      <changefreq>daily</changefreq>
    </url>
    <url>
      <loc>http://fahrschule-piede.de/kontakt</loc>
      <lastmod>2022-10-26</lastmod>
      <changefreq>daily</changefreq>
    </url>
    </urlset>`

    res.end(xml)
}