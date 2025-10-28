// sitemap-generator.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Replace with your domain name
const domain = 'https://neves.nu';

(async () => {
  // Define all your public routes here
  const routes = [
    '/',
    '/traskulpturer',
    '/tradfallning',
    '/utbildning',
    '/om-oss',
  
  ];

  // Create a stream and pipe it to sitemap.xml in /public
  const sitemap = new SitemapStream({ hostname: domain });
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  // Add each route
  routes.forEach((url) => {
    sitemap.write({ url, changefreq: 'weekly', priority: 0.8 });
  });

  sitemap.end();
  await streamToPromise(sitemap);

  console.log('✅ Sitemap generated at public/sitemap.xml');
})();
