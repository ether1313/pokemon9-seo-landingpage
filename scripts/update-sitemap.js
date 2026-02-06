// Script to automatically update lastmod dates in sitemap.xml
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

try {
  // Read the sitemap file
  let sitemap = readFileSync(sitemapPath, 'utf8');
  
  // Replace all lastmod dates with current date
  // Pattern: <lastmod>YYYY-MM-DD</lastmod>
  sitemap = sitemap.replace(/<lastmod>[\d-]+<\/lastmod>/g, `<lastmod>${currentDate}</lastmod>`);
  
  // Write back to file
  writeFileSync(sitemapPath, sitemap, 'utf8');
  
  console.log(`✅ Sitemap updated successfully!`);
  console.log(`📅 All lastmod dates set to: ${currentDate}`);
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}
