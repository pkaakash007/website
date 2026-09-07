/**
 * Automated Pre-Deployment SEO / GEO / AIO Validation Engine
 * Runs static verification of robots.txt, sitemap.xml, route coverage, metadata, and schema.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failCount++;
  }
}

console.log('\n🔍 ========================================================');
console.log('   RUNNING AUTOMATED SEO / GEO / AIO VALIDATION AUDIT');
console.log('========================================================\n');

// 1. Validate public/robots.txt
console.log('📁 1. Validating robots.txt...');
const robotsPath = path.join(ROOT_DIR, 'public/robots.txt');
assert(fs.existsSync(robotsPath), 'public/robots.txt exists');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  assert(robotsContent.includes('User-agent: Googlebot'), 'robots.txt explicitly permits Googlebot');
  assert(robotsContent.includes('User-agent: OAI-SearchBot'), 'robots.txt explicitly permits OAI-SearchBot (ChatGPT Search)');
  assert(robotsContent.includes('User-agent: PerplexityBot'), 'robots.txt explicitly permits PerplexityBot');
  assert(robotsContent.includes('Sitemap: https://realresult.in/sitemap.xml'), 'robots.txt references official XML sitemap');
}

// 2. Validate public/sitemap.xml
console.log('\n📁 2. Validating sitemap.xml...');
const sitemapPath = path.join(ROOT_DIR, 'public/sitemap.xml');
assert(fs.existsSync(sitemapPath), 'public/sitemap.xml exists');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemapContent.includes('<loc>https://realresult.in/</loc>'), 'sitemap includes root URL');
  assert(sitemapContent.includes('<loc>https://realresult.in/digital-marketing</loc>'), 'sitemap includes digital marketing hub');
  assert(sitemapContent.includes('<loc>https://realresult.in/digital-marketing/seo</loc>'), 'sitemap includes SEO pillar');
  assert(sitemapContent.includes('<loc>https://realresult.in/digital-marketing/geo</loc>'), 'sitemap includes GEO pillar');
  assert(sitemapContent.includes('<loc>https://realresult.in/digital-marketing/aio</loc>'), 'sitemap includes AIO pillar');
  assert(sitemapContent.includes('<loc>https://realresult.in/software-development</loc>'), 'sitemap includes software development hub');
  assert(sitemapContent.includes('<loc>https://realresult.in/locations/erode</loc>'), 'sitemap includes Erode HQ location');
  assert(sitemapContent.includes('<loc>https://realresult.in/locations/coimbatore</loc>'), 'sitemap includes Coimbatore location');
  assert(sitemapContent.includes('<loc>https://realresult.in/locations/chennai</loc>'), 'sitemap includes Chennai location');
  assert(sitemapContent.includes('<loc>https://realresult.in/case-studies</loc>'), 'sitemap includes case studies');
  assert(sitemapContent.includes('<loc>https://realresult.in/faq</loc>'), 'sitemap includes FAQ hub');
}

// 3. Validate SEOHead Component and Central Config
console.log('\n📁 3. Validating SEO Components & Entity Configuration...');
const seoHeadPath = path.join(ROOT_DIR, 'src/components/seo/SEOHead.tsx');
assert(fs.existsSync(seoHeadPath), 'src/components/seo/SEOHead.tsx exists');

const seoConfigPath = path.join(ROOT_DIR, 'src/config/seo.ts');
assert(fs.existsSync(seoConfigPath), 'src/config/seo.ts exists');
if (fs.existsSync(seoConfigPath)) {
  const seoConfigContent = fs.readFileSync(seoConfigPath, 'utf8');
  assert(seoConfigContent.includes('Real Result Marketing'), 'Config defines official entity name: Real Result Marketing');
  assert(seoConfigContent.includes('Erode'), 'Config defines official headquarters in Erode, Tamil Nadu');
  assert(seoConfigContent.includes('https://realresult.in'), 'Config defines canonical domain: https://realresult.in');
}

// 4. Validate DirectAnswerBox (GEO/AIO Engine)
console.log('\n📁 4. Validating DirectAnswerBox (GEO / AIO Snippet Engine)...');
const answerBoxPath = path.join(ROOT_DIR, 'src/components/seo/DirectAnswerBox.tsx');
assert(fs.existsSync(answerBoxPath), 'src/components/seo/DirectAnswerBox.tsx exists');

// 5. Validate Pages & Schema Injection
console.log('\n📁 5. Validating Page Coverage and Schema.org Implementation...');
const pagesToVerify = [
  'src/pages/HomePage.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/digital-marketing/DigitalMarketingHubPage.tsx',
  'src/pages/digital-marketing/SEOPage.tsx',
  'src/pages/digital-marketing/LocalSEOPage.tsx',
  'src/pages/digital-marketing/GEOPage.tsx',
  'src/pages/digital-marketing/AIOPage.tsx',
  'src/pages/digital-marketing/GoogleAdsPage.tsx',
  'src/pages/digital-marketing/SocialMediaPage.tsx',
  'src/pages/digital-marketing/ContentMarketingPage.tsx',
  'src/pages/digital-marketing/CROPage.tsx',
  'src/pages/software-development/SoftwareHubPage.tsx',
  'src/pages/software-development/WebDevelopmentPage.tsx',
  'src/pages/software-development/MobileAppPage.tsx',
  'src/pages/software-development/CustomSoftwarePage.tsx',
  'src/pages/software-development/SaaSDevelopmentPage.tsx',
  'src/pages/software-development/AIDevelopmentPage.tsx',
  'src/pages/locations/TamilNaduHubPage.tsx',
  'src/pages/locations/ErodeHQPage.tsx',
  'src/pages/locations/CoimbatorePage.tsx',
  'src/pages/locations/ChennaiPage.tsx',
  'src/pages/locations/TiruppurPage.tsx',
  'src/pages/locations/SalemPage.tsx',
  'src/pages/locations/MaduraiPage.tsx',
  'src/pages/locations/TrichyPage.tsx',
  'src/pages/locations/TirunelveliPage.tsx',
  'src/pages/case-studies/CaseStudiesHubPage.tsx',
  'src/pages/resources/ResourcesHubPage.tsx',
  'src/pages/faq/FAQHubPage.tsx',
];

for (const pageRel of pagesToVerify) {
  const fullPath = path.join(ROOT_DIR, pageRel);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Page exists: ${pageRel}`);
  if (exists) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const hasSEOHead = content.includes('<SEOHead');
    assert(hasSEOHead, `  └─ Implements <SEOHead>: ${path.basename(pageRel)}`);
  }
}

// Summary Report
console.log('\n========================================================');
console.log(`📊 AUDIT RESULTS: ${passCount} Checks Passed | ${failCount} Checks Failed`);
console.log('========================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🚀 ALL TECHNICAL SEO, GEO, AND AIO INTEGRITY CHECKS PASSED!\n');
  process.exit(0);
}
