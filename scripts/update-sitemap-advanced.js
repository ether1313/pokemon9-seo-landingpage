// Advanced script to update sitemap.xml with automatic lastmod dates
// Can update all pages or specific pages
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

// Get command line arguments
const args = process.argv.slice(2);
const updateSpecific = args.length > 0 ? args[0] : null;

try {
  // Read the sitemap file
  let sitemap = readFileSync(sitemapPath, 'utf8');
  
  if (updateSpecific) {
    // Update only specific page
    const urlPattern = new RegExp(
      `(<url>\\s*<loc>${updateSpecific.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/loc>\\s*<lastmod>)[\\d-]+(<\\/lastmod>)`,
      'g'
    );
    
    if (sitemap.match(urlPattern)) {
      sitemap = sitemap.replace(urlPattern, `$1${currentDate}$2`);
      console.log(`✅ Updated lastmod for: ${updateSpecific}`);
    } else {
      console.log(`⚠️  URL not found in sitemap: ${updateSpecific}`);
    }
  } else {
    // Update all lastmod dates
    sitemap = sitemap.replace(/<lastmod>[\d-]+<\/lastmod>/g, `<lastmod>${currentDate}</lastmod>`);
    console.log(`✅ All lastmod dates updated to: ${currentDate}`);
  }
  
  // Write back to file
  writeFileSync(sitemapPath, sitemap, 'utf8');
  
  console.log(`📄 Sitemap saved: ${sitemapPath}`);
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}
