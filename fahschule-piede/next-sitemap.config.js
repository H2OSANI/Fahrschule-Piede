{import('next-sitemap').IConfig}
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://fahrschule-piede.de',
    generateRobotsTxt: true,
    outDir: './out' // (optional)
    // ...other options
  }