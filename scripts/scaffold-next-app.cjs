const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// 1. Prepend 'use client' to all files in src/pages
function ensureUseClient(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      ensureUseClient(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const trimmed = content.trim();
      if (!trimmed.startsWith('"use client"') && !trimmed.startsWith("'use client'")) {
        fs.writeFileSync(full, '"use client";\n\n' + content, 'utf8');
        console.log('✓ Added "use client" to:', path.relative(ROOT, full));
      }
    }
  }
}

console.log('1. Checking and updating client components...');
ensureUseClient(path.join(ROOT, 'src/views'));

// 2. Load routes from generate-prerender.cjs
const prerenderContent = fs.readFileSync(path.join(ROOT, 'scripts/generate-prerender.cjs'), 'utf8');
const routesMatch = prerenderContent.match(/const ROUTES = (\[[\s\S]*?\]);\s*\/\/\s*Pre-flight/);
if (!routesMatch) {
  console.error('Could not parse ROUTES from scripts/generate-prerender.cjs');
  process.exit(1);
}

// Evaluate ROUTES in safe sandbox
const ROUTES = eval(routesMatch[1]);
console.log(`2. Loaded ${ROUTES.length} routes from generate-prerender.cjs`);

// 3. Component mapping
function getComponentImport(routePath) {
  if (routePath === '/') return { importPath: '@/views/HomePage', compName: 'HomePage' };
  if (routePath === '/about') return { importPath: '@/views/AboutPage', compName: 'AboutPage' };
  if (routePath === '/contact') return { importPath: '@/views/ContactPage', compName: 'ContactPage' };
  if (routePath === '/services') return { importPath: '@/views/ServicesPage', compName: 'ServicesPage' };
  if (routePath === '/digital-marketing') return { importPath: '@/views/digital-marketing/DigitalMarketingHubPage', compName: 'DigitalMarketingHubPage' };
  if (routePath === '/digital-marketing/seo') return { importPath: '@/views/digital-marketing/SEOPage', compName: 'SEOPage' };
  if (routePath === '/digital-marketing/local-seo') return { importPath: '@/views/digital-marketing/LocalSEOPage', compName: 'LocalSEOPage' };
  if (routePath === '/digital-marketing/geo') return { importPath: '@/views/digital-marketing/GEOPage', compName: 'GEOPage' };
  if (routePath === '/digital-marketing/aio') return { importPath: '@/views/digital-marketing/AIOPage', compName: 'AIOPage' };
  if (routePath === '/digital-marketing/google-ads') return { importPath: '@/views/digital-marketing/GoogleAdsPage', compName: 'GoogleAdsPage' };
  if (routePath === '/digital-marketing/social-media-marketing') return { importPath: '@/views/digital-marketing/SocialMediaPage', compName: 'SocialMediaPage' };
  if (routePath === '/digital-marketing/content-marketing') return { importPath: '@/views/digital-marketing/ContentMarketingPage', compName: 'ContentMarketingPage' };
  if (routePath === '/digital-marketing/conversion-rate-optimization') return { importPath: '@/views/digital-marketing/CROPage', compName: 'CROPage' };
  if (routePath === '/application-development') return { importPath: '@/views/ApplicationDevelopmentPage', compName: 'ApplicationDevelopmentPage' };
  if (routePath === '/industries') return { importPath: '@/views/IndustriesPage', compName: 'IndustriesPage' };
  if (routePath === '/industries/healthcare') return { importPath: '@/views/industries/HealthcareIndustryPage', compName: 'HealthcareIndustryPage' };
  if (routePath.startsWith('/industries/')) return { importPath: '@/views/industries/IndustryDetailPage', compName: 'IndustryDetailPage' };
  if (routePath === '/services/digital-marketing') return { importPath: '@/views/digital-marketing/DigitalMarketingHubPage', compName: 'DigitalMarketingHubPage' };
  if (routePath.startsWith('/services/')) return { importPath: '@/views/services/ServiceDetailPage', compName: 'ServiceDetailPage' };
  if (routePath === '/locations/tamil-nadu') return { importPath: '@/views/locations/TamilNaduHubPage', compName: 'TamilNaduHubPage' };
  if (routePath === '/locations/namakkal') return { importPath: '@/views/locations/NamakkalPage', compName: 'NamakkalPage' };
  if (routePath === '/locations/salem') return { importPath: '@/views/locations/SalemPage', compName: 'SalemPage' };
  if (routePath === '/locations/erode') return { importPath: '@/views/locations/ErodeHQPage', compName: 'ErodeHQPage' };
  if (routePath === '/locations/coimbatore') return { importPath: '@/views/locations/CoimbatorePage', compName: 'CoimbatorePage' };
  if (routePath === '/locations/paramathi-velur') return { importPath: '@/views/locations/ParamathiVelurPage', compName: 'ParamathiVelurPage' };
  if (routePath === '/portfolio') return { importPath: '@/views/PortfolioPage', compName: 'PortfolioPage' };
  if (routePath === '/work') return { importPath: '@/views/WorkPage', compName: 'WorkPage' };
  if (routePath === '/how-we-work') return { importPath: '@/views/HowWeWorkPage', compName: 'HowWeWorkPage' };
  if (routePath === '/privacy-policy') return { importPath: '@/views/PrivacyPolicyPage', compName: 'PrivacyPolicyPage' };
  if (routePath === '/terms') return { importPath: '@/views/TermsPage', compName: 'TermsPage' };
  if (routePath === '/cookie-policy') return { importPath: '@/views/CookiePolicyPage', compName: 'CookiePolicyPage' };
  if (routePath === '/thank-you') return { importPath: '@/views/ThankYouPage', compName: 'ThankYouPage' };

  return { importPath: '@/views/NotFoundPage', compName: 'NotFoundPage' };
}

// 4. Generate page.tsx for every route
const APP_DIR = path.join(ROOT, 'src/app');

let count = 0;
for (const route of ROUTES) {
  const cleanPath = route.path.replace(/\/+$/, '') || '/';
  const targetDir = cleanPath === '/' ? APP_DIR : path.join(APP_DIR, cleanPath.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });

  const targetFile = path.join(targetDir, 'page.tsx');
  const { importPath, compName } = getComponentImport(route.path);
  const canonicalUrl = cleanPath === '/' ? 'https://realresult.in/' : `https://realresult.in${cleanPath}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": route.category.includes("Location") ? "LocalBusiness" : ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${canonicalUrl}#organization`,
    "name": "Real Result Marketing & Technology Solutions",
    "alternateName": [
      "Real Result",
      "Real Result Marketing",
      "Real Result in Tamil Nadu",
      route.title.split('|')[0].trim()
    ],
    "url": canonicalUrl,
    "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
    "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
    "telephone": "+91-8111033390",
    "email": "hello@realresult.in",
    "description": route.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": route.geo.placename.split(',')[0].trim(),
      "addressRegion": "Tamil Nadu",
      "postalCode": "637207",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": parseFloat(route.geo.position.split(';')[0]),
      "longitude": parseFloat(route.geo.position.split(';')[1])
    }
  };

  const slugProp = (compName === 'ServiceDetailPage' || compName === 'IndustryDetailPage')
    ? ` slug="${cleanPath.split('/').pop()}"`
    : '';

  const pageContent = `import type { Metadata } from "next";
import ${compName} from "${importPath}";

export const metadata: Metadata = {
  title: "${route.title}",
  description: "${route.description}",
  alternates: {
    canonical: "${canonicalUrl}",
  },
  openGraph: {
    title: "${route.title}",
    description: "${route.description}",
    url: "${canonicalUrl}",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${route.title}",
    description: "${route.description}",
  },
  other: {
    "geo.region": "${route.geo.region}",
    "geo.placename": "${route.geo.placename}",
    "geo.position": "${route.geo.position}",
    "ICBM": "${route.geo.position.replace(';', ', ')}",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(schema, null, 2)}) }}
      />
      <${compName}${slugProp} />
    </>
  );
}
`;

  fs.writeFileSync(targetFile, pageContent, 'utf8');
  count++;
}

console.log(`\n✅ Generated ${count} Next.js App Router page.tsx files inside src/app/!`);
