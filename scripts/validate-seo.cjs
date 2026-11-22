/**
 * Post-build SEO / GEO audit of the static export in ./out.
 * Run after `next build` (the deploy script does this automatically).
 * Exits non-zero on any error so a broken page can never be deployed.
 *
 * Checks every exported HTML page for:
 *   - exactly one <title> (≤ 70 chars) and a meta description (70–170 chars)
 *   - a self-referencing absolute canonical with trailing slash (indexable pages)
 *   - exactly one <h1>
 *   - valid JSON-LD; no AggregateRating/Review markup (self-serving reviews are ineligible)
 *   - no internal links to pages that don't exist (dead links)
 *   - no retired/incorrect business details (NAP consistency)
 *   - unique titles and descriptions across the site
 * And checks robots.txt, sitemap.xml and llms.txt for consistency.
 */
const fs = require("fs");
const path = require("path");

const OUT = path.resolve(__dirname, "..", "out");
const SITE = "https://realresult.in";
const FORBIDDEN_TEXT = [
  [/148\/2,?\s*Perundurai/i, "old Erode street address"],
  [/hello@realresult\.in/i, "unused email address"],
  [/\b637207\b/, "wrong postal code"],
  [/Salem Road, Namakkal, Tamil Nadu 637001/i, "non-existent Namakkal office"],
];

let errors = 0;
let warnings = 0;
const err = (page, msg) => (errors++, console.error(`  ✗ ${page}: ${msg}`));
const warn = (page, msg) => (warnings++, console.warn(`  ! ${page}: ${msg}`));

if (!fs.existsSync(OUT)) {
  console.error("✗ ./out not found — run `next build` first.");
  process.exit(1);
}

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

const files = walk(OUT);
const exists = new Set(files.map((f) => "/" + path.relative(OUT, f).split(path.sep).join("/")));
const pageExists = (p) => {
  const clean = decodeURI(p.split(/[?#]/)[0]);
  if (exists.has(clean)) return true;
  const withSlash = clean.endsWith("/") ? clean : clean + "/";
  return exists.has(withSlash + "index.html");
};

const htmlFiles = files.filter(
  (f) => f.endsWith("index.html") && !/[\\/]_next[\\/]/.test(f) && !/[\\/](404|_not-found)[\\/]/.test(f)
);

const titles = new Map();
const descriptions = new Map();
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

console.log(`\nSEO audit of ${htmlFiles.length} pages in ./out\n`);

for (const file of htmlFiles) {
  const rel = "/" + path.relative(OUT, path.dirname(file)).split(path.sep).join("/");
  const page = rel === "/" ? "/" : rel + "/";
  const html = fs.readFileSync(file, "utf8");
  const head = html.slice(0, html.indexOf("</head>") + 7);
  const noindex = /<meta name="robots" content="[^"]*noindex/i.test(head);

  // Title
  const titleTags = head.match(/<title>([^<]*)<\/title>/g) || [];
  if (titleTags.length !== 1) err(page, `expected 1 <title>, found ${titleTags.length}`);
  const title = decode((head.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  if (title.length > 70) warn(page, `title is ${title.length} chars (keep ≤ 70): "${title}"`);
  if (!noindex) {
    if (titles.has(title)) err(page, `duplicate title also used on ${titles.get(title)}`);
    titles.set(title, page);
  }

  // Description
  const desc = decode((head.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  if (!desc) err(page, "missing meta description");
  else if (desc.length < 70 || desc.length > 170) warn(page, `description is ${desc.length} chars (aim 120–160)`);
  if (!noindex && desc) {
    if (descriptions.has(desc)) err(page, `duplicate description also used on ${descriptions.get(desc)}`);
    descriptions.set(desc, page);
  }

  // Canonical
  const canonical = (head.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!noindex) {
    if (!canonical) err(page, "missing canonical");
    else if (canonical !== SITE + page) err(page, `canonical ${canonical} ≠ ${SITE + page}`);
  }

  // Open Graph
  if (!noindex && !/<meta property="og:image" content="https:\/\//.test(head)) err(page, "missing absolute og:image");

  // H1
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) err(page, `expected exactly 1 <h1>, found ${h1}`);

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!blocks.length) err(page, "no JSON-LD");
  for (const [, json] of blocks) {
    try {
      const data = JSON.parse(json);
      const text = JSON.stringify(data);
      if (/"AggregateRating"|"aggregateRating"|"@type":"Review"/.test(text))
        err(page, "contains AggregateRating/Review markup (self-serving reviews are not allowed)");
    } catch (e) {
      err(page, `invalid JSON-LD: ${e.message}`);
    }
  }

  // Internal links
  for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    if (href.startsWith(SITE)) err(page, `absolute internal link ${href} (use a relative path)`);
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    if (!pageExists(href)) err(page, `dead link → ${href}`);
    else if (!/\.[a-z0-9]+$/i.test(href.split(/[?#]/)[0]) && !href.split(/[?#]/)[0].endsWith("/"))
      warn(page, `link without trailing slash → ${href} (causes a redirect)`);
  }

  // Image src
  for (const [, src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    if (src.startsWith("/") && !src.startsWith("//") && !pageExists(src)) err(page, `missing image → ${src}`);
  }

  // NAP consistency
  for (const [re, label] of FORBIDDEN_TEXT) if (re.test(html)) err(page, `contains ${label}`);
}

// robots.txt
const robots = fs.existsSync(path.join(OUT, "robots.txt")) ? fs.readFileSync(path.join(OUT, "robots.txt"), "utf8") : "";
if (!robots) err("/robots.txt", "missing");
else {
  if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) err("/robots.txt", "no Sitemap line");
  if (/^Disallow:\s*\/\s*$/m.test(robots)) err("/robots.txt", "blocks the whole site");
}

// sitemap.xml
const sitemapPath = path.join(OUT, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) err("/sitemap.xml", "missing");
else {
  const locs = [...fs.readFileSync(sitemapPath, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    const p = loc.replace(SITE, "");
    if (!pageExists(p)) err("/sitemap.xml", `lists non-existent ${loc}`);
    if (!loc.endsWith("/")) err("/sitemap.xml", `URL without trailing slash ${loc}`);
  }
  for (const page of titles.values()) {
    if (!locs.includes(SITE + page)) err("/sitemap.xml", `indexable page missing from sitemap: ${page}`);
  }
  console.log(`\n  sitemap.xml: ${locs.length} URLs`);
}

// llms.txt
const llmsPath = path.join(OUT, "llms.txt");
if (!fs.existsSync(llmsPath)) err("/llms.txt", "missing");
else {
  for (const [, url] of fs.readFileSync(llmsPath, "utf8").matchAll(/\]\((https:\/\/realresult\.in[^)]*)\)/g)) {
    if (!pageExists(url.replace(SITE, "") || "/")) err("/llms.txt", `dead link ${url}`);
  }
}

console.log(`\n${errors ? "✗" : "✓"} ${htmlFiles.length} pages checked — ${errors} error(s), ${warnings} warning(s)\n`);
process.exit(errors ? 1 : 0);
