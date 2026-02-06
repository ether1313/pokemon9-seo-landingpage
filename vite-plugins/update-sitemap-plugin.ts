import type { Plugin } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Vite plugin to automatically update lastmod dates in sitemap.xml
 * Runs during build process
 */
export function updateSitemapPlugin(): Plugin {
  return {
    name: 'update-sitemap',
    buildStart() {
      const sitemapPath = resolve(__dirname, '..', 'public', 'sitemap.xml');
      const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

      try {
        // Read the sitemap file
        let sitemap = readFileSync(sitemapPath, 'utf8');
        
        // Replace all lastmod dates with current date
        sitemap = sitemap.replace(/<lastmod>[\d-]+<\/lastmod>/g, `<lastmod>${currentDate}</lastmod>`);
        
        // Write back to file
        writeFileSync(sitemapPath, sitemap, 'utf8');
        
        console.log(`✅ Sitemap lastmod dates updated to: ${currentDate}`);
      } catch (error) {
        console.warn('⚠️  Could not update sitemap:', error);
      }
    },
  };
}
