/**
 * Post-build: inline the CSS into the Google Ads landing page HTML and remove
 * the render-blocking <link rel="stylesheet">. The whole-site CSS is ~6 KB
 * gzipped, so inlining it lets the LP paint with zero render-blocking requests
 * (big Speed Index / FCP win). Scoped to the LP only — the rest of the site
 * keeps the shared cached stylesheet.
 *
 * Safe by design: if anything is missing it logs and exits 0, never failing the build.
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
const TARGETS = ['sell-house-fast-austin/index.html'];

function inline(htmlRelPath) {
  const htmlPath = path.join(OUT, htmlRelPath);
  if (!fs.existsSync(htmlPath)) {
    console.log(`[inline-css] skip: ${htmlRelPath} not found`);
    return;
  }
  let html = fs.readFileSync(htmlPath, 'utf8');
  const linkRe = /<link[^>]*rel="stylesheet"[^>]*href="(\/_next\/static\/css\/[^"]+\.css)"[^>]*>/g;
  let count = 0;

  html = html.replace(linkRe, (match, href) => {
    const cssPath = path.join(OUT, href.replace(/^\//, ''));
    if (!fs.existsSync(cssPath)) {
      console.log(`[inline-css] skip: css ${href} not found, leaving <link>`);
      return match;
    }
    const css = fs.readFileSync(cssPath, 'utf8');
    count += 1;
    return `<style>${css}</style>`;
  });

  if (count > 0) {
    fs.writeFileSync(htmlPath, html);
    console.log(`[inline-css] inlined ${count} stylesheet(s) into ${htmlRelPath}`);
  } else {
    console.log(`[inline-css] no stylesheet <link> found in ${htmlRelPath}`);
  }
}

TARGETS.forEach(inline);
