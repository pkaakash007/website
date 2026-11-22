/**
 * Route registry — the one list of every indexable URL on realresult.in.
 *
 * Page titles, meta descriptions, breadcrumbs, schema types, the XML
 * sitemap, llms.txt and the worker's Markdown-for-agents index are all
 * generated from this table. Adding a page = add a row here + a page.tsx
 * that calls `metadataFor(path)` / `pageSchema(getRoute(path))`.
 *
 * Copy rules: titles ≤ 65 characters, descriptions 120–160 characters,
 * no ranking guarantees ("#1", "guaranteed page 1") — Google treats those
 * as misleading and they erode trust with buyers and AI answer engines.
 *
 * Framework-free on purpose: the worker and build scripts import it.
 */

export type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export interface RouteEntry {
  path: string;
  title: string;
  description: string;
  /** Short name used in breadcrumbs, menus and llms.txt. */
  breadcrumb: string;
  parent?: string;
  pageType?: PageType;
  /** Set for service pages — emits a schema.org Service node. */
  serviceType?: string;
  serviceName?: string;
  /** Key of TAMIL_NADU_LOCATIONS for city landing pages. */
  location?: string;
  image?: string;
  noindex?: boolean;
  sitemap?: { priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" };
  /** Group heading for llms.txt. */
  section: "Company" | "Locations" | "Digital Marketing" | "Services" | "Industries" | "Legal" | "Utility";
}

const r = (e: RouteEntry) => e;

export const ROUTES: RouteEntry[] = [
  /* ---------------------------------------------------------------- */
  r({
    path: "/",
    title: "Best Digital Marketing Agency in Namakkal & Karur | Real Result",
    description:
      "Real Result is a digital marketing agency in Paramathi Velur serving Namakkal, Karur and Tamil Nadu: SEO, Google Ads, Google Maps, social media, AI search and websites.",
    breadcrumb: "Home",
    sitemap: { priority: 1.0, changeFrequency: "weekly" },
    section: "Company",
  }),
  r({
    path: "/about/",
    title: "About Real Result | Digital Marketing Agency, Namakkal District",
    description:
      "Meet Real Result Marketing: a digital marketing and web development team based in Paramathi Velur, helping Namakkal, Karur and Kongu Nadu businesses grow online.",
    breadcrumb: "About",
    parent: "/",
    pageType: "AboutPage",
    sitemap: { priority: 0.8, changeFrequency: "monthly" },
    section: "Company",
  }),
  r({
    path: "/contact/",
    title: "Contact Real Result | Paramathi Velur, Namakkal | +91 81110 33390",
    description:
      "Call +91 81110 33390, WhatsApp or visit Real Result Marketing at Padamudipalayam, Paramathi Velur 638182. Free consultation for Namakkal and Karur businesses.",
    breadcrumb: "Contact",
    parent: "/",
    pageType: "ContactPage",
    sitemap: { priority: 0.9, changeFrequency: "monthly" },
    section: "Company",
  }),
  r({
    path: "/how-we-work/",
    title: "How We Work | Our Digital Marketing Process | Real Result",
    description:
      "Real Result’s five-step process for SEO, Google Ads and website projects: understand, define, create, launch and review, with agreed milestones, costs and measures.",
    breadcrumb: "How We Work",
    parent: "/",
    sitemap: { priority: 0.6, changeFrequency: "monthly" },
    section: "Company",
  }),
  r({
    path: "/portfolio/",
    title: "Portfolio & Client Work | Real Result Marketing",
    description:
      "Websites, campaigns and brand work Real Result has delivered for schools, real estate developers, supermarkets, manufacturers and local businesses in Tamil Nadu.",
    breadcrumb: "Portfolio",
    parent: "/",
    pageType: "CollectionPage",
    sitemap: { priority: 0.7, changeFrequency: "monthly" },
    section: "Company",
  }),

  /* ---------------------------------------------------------------- */
  /* Locations — Namakkal, Karur and Paramathi Velur are the priority. */
  r({
    path: "/locations/tamil-nadu/",
    title: "Digital Marketing Agency in Tamil Nadu | Areas We Serve | Real Result",
    description:
      "Real Result serves Namakkal, Karur, Paramathi Velur, Salem, Erode and Coimbatore from our Paramathi Velur office. Find SEO, Google Ads and web services for your city.",
    breadcrumb: "Areas We Serve",
    parent: "/",
    pageType: "CollectionPage",
    sitemap: { priority: 0.7, changeFrequency: "monthly" },
    section: "Locations",
  }),
  r({
    path: "/locations/namakkal/",
    title: "Best Digital Marketing Agency in Namakkal | SEO & Ads | Real Result",
    description:
      "Namakkal digital marketing agency for SEO, Google Ads, Google Maps ranking, social media and websites. Local team in Paramathi Velur. Call +91 81110 33390.",
    breadcrumb: "Namakkal",
    parent: "/locations/tamil-nadu/",
    location: "namakkal",
    serviceName: "Digital marketing services in Namakkal",
    serviceType: "Digital marketing",
    image: "/images/namakkal-fort-artistic-sketch.jpg",
    sitemap: { priority: 0.95, changeFrequency: "weekly" },
    section: "Locations",
  }),
  r({
    path: "/locations/karur/",
    title: "Best Digital Marketing Agency in Karur | SEO & Ads | Real Result",
    description:
      "Digital marketing in Karur for textile exporters, bus body builders, shops and clinics: SEO, Google Ads, Google Maps and websites. Call +91 81110 33390.",
    breadcrumb: "Karur",
    parent: "/locations/tamil-nadu/",
    location: "karur",
    serviceName: "Digital marketing services in Karur",
    serviceType: "Digital marketing",
    sitemap: { priority: 0.95, changeFrequency: "weekly" },
    section: "Locations",
  }),
  r({
    path: "/locations/paramathi-velur/",
    title: "Best Digital Marketing Agency in Paramathi Velur | Real Result",
    description:
      "Real Result's office is in Paramathi Velur. We do SEO, Google Ads, Google Maps ranking, social media and websites for Paramathi Velur, Namakkal and Karur businesses.",
    breadcrumb: "Paramathi Velur",
    parent: "/locations/tamil-nadu/",
    location: "paramathi-velur",
    serviceName: "Digital marketing services in Paramathi Velur",
    serviceType: "Digital marketing",
    sitemap: { priority: 0.95, changeFrequency: "weekly" },
    section: "Locations",
  }),
  r({
    path: "/locations/salem/",
    title: "Digital Marketing Agency in Salem | SEO & Google Ads | Real Result",
    description:
      "SEO, Google Ads, Google Maps ranking and websites for Salem businesses, from steel and sago units to retail and jewellery showrooms. Real Result, Tamil Nadu.",
    breadcrumb: "Salem",
    parent: "/locations/tamil-nadu/",
    location: "salem",
    serviceName: "Digital marketing services in Salem",
    serviceType: "Digital marketing",
    sitemap: { priority: 0.7, changeFrequency: "monthly" },
    section: "Locations",
  }),
  r({
    path: "/locations/erode/",
    title: "Digital Marketing Agency in Erode | SEO & Google Ads | Real Result",
    description:
      "SEO, Google Ads, Google Maps ranking and websites for Erode textile, turmeric and healthcare businesses. Real Result serves Erode from Paramathi Velur.",
    breadcrumb: "Erode",
    parent: "/locations/tamil-nadu/",
    location: "erode",
    serviceName: "Digital marketing services in Erode",
    serviceType: "Digital marketing",
    sitemap: { priority: 0.7, changeFrequency: "monthly" },
    section: "Locations",
  }),
  r({
    path: "/locations/coimbatore/",
    title: "Digital Marketing Agency in Coimbatore | SEO & PPC | Real Result",
    description:
      "B2B SEO, Google Ads and websites for Coimbatore manufacturers, pump and foundry exporters, SaaS startups and colleges. Real Result, Tamil Nadu.",
    breadcrumb: "Coimbatore",
    parent: "/locations/tamil-nadu/",
    location: "coimbatore",
    serviceName: "Digital marketing services in Coimbatore",
    serviceType: "Digital marketing",
    sitemap: { priority: 0.6, changeFrequency: "monthly" },
    section: "Locations",
  }),

  /* ---------------------------------------------------------------- */
  r({
    path: "/digital-marketing/",
    title: "Digital Marketing Services in Namakkal & Karur | Real Result",
    description:
      "SEO, AI search optimisation, Google Ads, social media and conversion optimisation, planned around your sales goals. Digital marketing for Namakkal, Karur and Tamil Nadu.",
    breadcrumb: "Digital Marketing",
    parent: "/",
    serviceType: "Digital marketing",
    serviceName: "Digital marketing services",
    sitemap: { priority: 0.9, changeFrequency: "weekly" },
    section: "Digital Marketing",
  }),
  r({
    path: "/digital-marketing/seo/",
    title: "SEO Company in Namakkal & Karur | SEO Services | Real Result",
    description:
      "Technical SEO, keyword research, on-page optimisation, content and link building for businesses in Namakkal, Karur and Tamil Nadu, with transparent monthly reports.",
    breadcrumb: "SEO",
    parent: "/digital-marketing/",
    serviceType: "Search engine optimization",
    serviceName: "SEO services",
    sitemap: { priority: 0.9, changeFrequency: "monthly" },
    section: "Digital Marketing",
  }),
  r({
    path: "/digital-marketing/local-seo/",
    title: "Local SEO & Google Maps Ranking in Namakkal & Karur | Real Result",
    description:
      "Get your business into the Google Maps 3-pack in Namakkal, Karur and Paramathi Velur: Google Business Profile optimisation, local citations, reviews and local pages.",
    breadcrumb: "Local SEO",
    parent: "/digital-marketing/",
    serviceType: "Local search engine optimization",
    serviceName: "Local SEO and Google Maps optimisation",
    sitemap: { priority: 0.9, changeFrequency: "monthly" },
    section: "Digital Marketing",
  }),
  r({
    path: "/digital-marketing/google-ads/",
    title: "Google Ads Agency in Namakkal & Karur | PPC Management | Real Result",
    description:
      "Google Search, Performance Max, Display and YouTube campaigns managed for leads and sales, with conversion tracking and weekly reporting. Serving Namakkal, Karur and TN.",
    breadcrumb: "Google Ads",
    parent: "/digital-marketing/",
    serviceType: "Pay-per-click advertising",
    serviceName: "Google Ads management",
    sitemap: { priority: 0.85, changeFrequency: "monthly" },
    section: "Digital Marketing",
  }),
  r({
    path: "/digital-marketing/social-media-marketing/",
    title: "Social Media Marketing Agency in Namakkal | Meta Ads | Real Result",
    description:
      "Instagram, Facebook and LinkedIn marketing: content calendars, Reels, Meta ads and WhatsApp lead funnels for businesses in Namakkal, Karur and Tamil Nadu.",
    breadcrumb: "Social Media Marketing",
    parent: "/digital-marketing/",
    serviceType: "Social media marketing",
    serviceName: "Social media marketing",
    sitemap: { priority: 0.8, changeFrequency: "monthly" },
    section: "Digital Marketing",
  }),
  r({
    path: "/digital-marketing/geo/",
    title: "Generative Engine Optimization (GEO) Agency | AI Search | Real Result",
    description:
      "Get your business named and cited in ChatGPT, Perplexity, Gemini and Google AI Mode answers with entity, content and structured-data work from Real Result.",
    breadcrumb: "GEO (AI Search)",
    parent: "/digital-marketing/",
    serviceType: "Generative engine optimization",
    serviceName: "Generative Engine Optimization (GEO)",
    sitemap: { priority: 0.8, changeFrequency: "monthly" },
    section: "Digital Marketing",
  }),
  r({
    path: "/digital-marketing/aio/",
    title: "Google AI Overviews (AIO) Optimisation Agency | Real Result",
    description:
      "Answer-first content, FAQ structure and schema markup that help your pages appear in Google AI Overviews and featured snippets. AIO services from Real Result.",
    breadcrumb: "AI Overviews (AIO)",
    parent: "/digital-marketing/",
    serviceType: "AI Overviews optimization",
    serviceName: "Google AI Overviews optimisation",
    sitemap: { priority: 0.75, changeFrequency: "monthly" },
    section: "Digital Marketing",
  }),
  r({
    path: "/digital-marketing/content-marketing/",
    title: "Content Marketing & Copywriting Agency | Real Result",
    description:
      "Website copy, blogs, case studies and bilingual Tamil–English content that ranks on Google, gets quoted by AI search and turns readers into enquiries.",
    breadcrumb: "Content Marketing",
    parent: "/digital-marketing/",
    serviceType: "Content marketing",
    serviceName: "Content marketing",
    sitemap: { priority: 0.7, changeFrequency: "monthly" },
    section: "Digital Marketing",
  }),
  r({
    path: "/digital-marketing/conversion-rate-optimization/",
    title: "Conversion Rate Optimisation (CRO) Services | Real Result",
    description:
      "Turn more website visitors into calls, WhatsApp chats and orders with UX audits, landing-page testing, faster pages and clearer offers. CRO by Real Result.",
    breadcrumb: "Conversion Optimisation",
    parent: "/digital-marketing/",
    serviceType: "Conversion rate optimization",
    serviceName: "Conversion rate optimisation",
    sitemap: { priority: 0.7, changeFrequency: "monthly" },
    section: "Digital Marketing",
  }),

  /* ---------------------------------------------------------------- */
  r({
    path: "/services/",
    title: "Digital Marketing, Web & App Services | Real Result",
    description:
      "All Real Result services: SEO, Google Ads, social media, websites, e-commerce, mobile apps, branding, video and product photography for Tamil Nadu businesses.",
    breadcrumb: "Services",
    parent: "/",
    pageType: "CollectionPage",
    sitemap: { priority: 0.85, changeFrequency: "monthly" },
    section: "Services",
  }),
  r({
    path: "/application-development/",
    title: "Custom Software & Web Application Development | Real Result",
    description:
      "Custom web applications, business software, ERP, poultry and logistics portals built with modern frameworks by Real Result in Paramathi Velur, Namakkal.",
    breadcrumb: "Application Development",
    parent: "/services/",
    serviceType: "Custom software development",
    serviceName: "Custom software and web application development",
    sitemap: { priority: 0.8, changeFrequency: "monthly" },
    section: "Services",
  }),
  ...(
    [
      ["website-design", "Website Design Company in Namakkal & Karur | Real Result", "Fast, mobile-friendly business websites designed to turn visitors into calls, WhatsApp chats and orders. Website design for Namakkal, Karur and Tamil Nadu.", "Website Design", "Web design"],
      ["ecommerce-platforms", "E-commerce Website Development | Online Stores | Real Result", "Online stores with UPI and card payments, WhatsApp order alerts and no marketplace commission. E-commerce development for Tamil Nadu brands.", "E-commerce Websites", "E-commerce development"],
      ["mobile-app-development", "Mobile App Development Company in Tamil Nadu | Real Result", "Android and iOS apps for businesses, from booking and delivery apps to internal tools, designed, built and published by Real Result.", "Mobile App Development", "Mobile application development"],
      ["ui-ux-architecture", "UI/UX Design Services | Figma Prototypes | Real Result", "User research, wireframes and Figma prototypes for websites and apps that are simple to use and built to convert. UI/UX design by Real Result.", "UI/UX Design", "User interface design"],
      ["performance-marketing", "Performance Marketing Agency | Google & Meta Ads | Real Result", "Google Ads and Meta ads run for measurable leads and sales, with conversion tracking, landing pages and weekly reporting. Performance marketing by Real Result.", "Performance Marketing", "Performance marketing"],
      ["seo-geo-ai-search", "SEO, GEO & AI Search Optimisation Services | Real Result", "Rank on Google, appear in the Google Maps 3-pack and get cited by ChatGPT and Perplexity with combined SEO, local SEO and GEO from Real Result.", "SEO, GEO & AI Search", "Search engine optimization"],
      ["content-marketing-pr", "Content Marketing & Digital PR Services | Real Result", "Articles, case studies, press coverage and brand mentions that build authority with buyers, Google and AI answer engines. Content and PR by Real Result.", "Content Marketing & PR", "Content marketing"],
      ["brand-identity-logo", "Logo Design & Brand Identity Services | Real Result", "Logo design, colour palettes, typography and brand guidelines that make your business look trustworthy and consistent everywhere. Branding by Real Result.", "Brand Identity & Logo", "Brand identity design"],
      ["graphic-design-packaging", "Packaging & Graphic Design Services | Real Result", "Product packaging, pouches, labels, brochures and print collateral designed for retail shelves and trade shows. Graphic design by Real Result.", "Graphic Design & Packaging", "Graphic design"],
      ["video-editing-motion", "Video Production & Editing Services | Reels & Ads | Real Result", "Ad films, Instagram Reels, factory tours, testimonials and motion graphics produced and edited for social media and YouTube by Real Result.", "Video Production & Editing", "Video production"],
      ["ecommerce-photography", "Product Photography Services for E-commerce | Real Result", "Studio product photos, catalogue and lifestyle shots sized for Amazon, Flipkart, Instagram and your own store. Product photography by Real Result.", "Product Photography", "Product photography"],
      ["cyber-security-cloud", "Website Hosting, Security & Maintenance | Real Result", "Managed cloud hosting, SSL, daily backups, firewall protection and updates that keep your business website fast, secure and online.", "Hosting & Security", "Website hosting and security"],
    ] as const
  ).map(([slug, title, description, breadcrumb, serviceType]) =>
    r({
      path: `/services/${slug}/`,
      title,
      description,
      breadcrumb,
      parent: "/services/",
      serviceType,
      serviceName: breadcrumb,
      sitemap: { priority: 0.75, changeFrequency: "monthly" },
      section: "Services",
    })
  ),

  /* ---------------------------------------------------------------- */
  r({
    path: "/industries/",
    title: "Industries We Serve | Digital Marketing by Industry | Real Result",
    description:
      "Digital marketing for poultry, textiles, transport, healthcare, education, real estate, retail and manufacturing businesses across Namakkal, Karur and Tamil Nadu.",
    breadcrumb: "Industries",
    parent: "/",
    pageType: "CollectionPage",
    sitemap: { priority: 0.7, changeFrequency: "monthly" },
    section: "Industries",
  }),
  ...(
    [
      ["healthcare", "Healthcare & Hospital Digital Marketing | Real Result", "Local SEO, Google Ads and websites for hospitals, clinics and doctors in Namakkal, Karur and Tamil Nadu, following medical advertising rules.", "Healthcare"],
      ["education", "Education Marketing for Schools & Colleges | Real Result", "Admission campaigns, Google search ads, social media and websites for schools, colleges and coaching centres in Namakkal, Karur and Tamil Nadu.", "Education"],
      ["real-estate", "Real Estate Digital Marketing Agency | Real Result", "Lead generation for plots, villas and apartments with Google Ads, Meta ads, project websites and WhatsApp follow-up, for Tamil Nadu builders and promoters.", "Real Estate"],
      ["b2b", "B2B & Manufacturing Digital Marketing | Real Result", "B2B SEO, LinkedIn and Google Ads for manufacturers, exporters and industrial suppliers in Namakkal, Karur and Tamil Nadu who want qualified enquiries.", "B2B & Manufacturing"],
      ["ecommerce", "E-commerce & D2C Marketing Agency | Real Result", "Google Shopping, Meta ads and store optimisation that grow online sales and return on ad spend for D2C brands and online retailers in India.", "E-commerce & D2C"],
      ["finance", "Finance & NBFC Digital Marketing | Real Result", "Compliant digital marketing, lead generation and search ads for NBFCs, chit funds, insurance agents and financial advisers in Tamil Nadu.", "Finance"],
      ["automotive", "Automotive Dealer Digital Marketing | Real Result", "Showroom visits, test drives and service bookings for car and two-wheeler dealers, garages and body builders in Namakkal, Karur and Tamil Nadu.", "Automotive"],
      ["ev", "EV & Solar Digital Marketing Agency | Real Result", "Lead generation and dealer-network marketing for electric vehicle brands, EV dealers and rooftop solar installers in Tamil Nadu.", "EV & Solar"],
      ["home-decor", "Furniture & Home Decor Marketing Agency | Real Result", "Instagram catalogue ads, Google Maps ranking and showroom campaigns for furniture, home textiles, decor and interior design businesses.", "Home Decor & Furniture"],
      ["skincare-beauty", "Beauty & Skincare Brand Marketing | Real Result", "Meta ads, influencer campaigns and content for skincare, cosmetics, salons and beauty brands that want steady online sales.", "Beauty & Skincare"],
      ["travel-tourism", "Travel & Tourism Digital Marketing | Real Result", "Direct-booking websites, Google travel ads and social content for hotels, resorts, tour operators and pilgrimage travel agencies.", "Travel & Tourism"],
    ] as const
  ).map(([slug, title, description, breadcrumb]) =>
    r({
      path: `/industries/${slug}/`,
      title,
      description,
      breadcrumb,
      parent: "/industries/",
      serviceType: "Digital marketing",
      serviceName: `Digital marketing for ${breadcrumb.toLowerCase()} businesses`,
      sitemap: { priority: 0.6, changeFrequency: "monthly" },
      section: "Industries",
    })
  ),

  /* ---------------------------------------------------------------- */
  r({
    path: "/privacy-policy/",
    title: "Privacy Policy | Real Result Marketing",
    description: "How Real Result Marketing collects, uses and protects the information you share through our website, enquiry forms, phone and WhatsApp.",
    breadcrumb: "Privacy Policy",
    parent: "/",
    sitemap: { priority: 0.2, changeFrequency: "yearly" },
    section: "Legal",
  }),
  r({
    path: "/terms/",
    title: "Terms of Service | Real Result Marketing",
    description: "Terms and conditions for digital marketing, website and software development services provided by Real Result Marketing, Paramathi Velur, Tamil Nadu.",
    breadcrumb: "Terms of Service",
    parent: "/",
    sitemap: { priority: 0.2, changeFrequency: "yearly" },
    section: "Legal",
  }),
  r({
    path: "/cookie-policy/",
    title: "Cookie Policy | Real Result Marketing",
    description: "Which cookies and measurement tools the Real Result website uses, why we use them, and how you can control or turn them off in your browser.",
    breadcrumb: "Cookie Policy",
    parent: "/",
    sitemap: { priority: 0.2, changeFrequency: "yearly" },
    section: "Legal",
  }),
  r({
    path: "/thank-you/",
    title: "Thank You | Real Result Marketing",
    description: "Thanks for contacting Real Result Marketing. Our team will review your details and get back to you shortly by phone, WhatsApp or email.",
    breadcrumb: "Thank You",
    parent: "/",
    noindex: true,
    section: "Utility",
  }),
];

const BY_PATH = new Map(ROUTES.map((route) => [route.path, route]));

export function normalizePath(path: string): string {
  const p = `/${path}`.replace(/\/+/g, "/").split(/[?#]/)[0];
  return p.endsWith("/") ? p : `${p}/`;
}

export function getRoute(path: string): RouteEntry {
  const route = BY_PATH.get(normalizePath(path));
  if (!route) throw new Error(`[routes] No route registered for "${path}". Add it to src/config/routes.ts.`);
  return route;
}

export const INDEXABLE_ROUTES = ROUTES.filter((route) => !route.noindex);

/**
 * Permanent redirects for retired or duplicate URLs (served as 301s by the
 * Cloudflare worker). Keys are matched without the trailing slash.
 */
export const REDIRECTS: Record<string, string> = {
  "/digital-marketing-agency-namakkal": "/locations/namakkal/",
  "/services/digital-marketing": "/digital-marketing/",
  "/services/social-media-marketing": "/digital-marketing/social-media-marketing/",
  "/services/seo": "/digital-marketing/seo/",
  "/services/local-seo": "/digital-marketing/local-seo/",
  "/services/website-development": "/services/website-design/",
  "/services/ui-ux-design": "/services/ui-ux-architecture/",
  "/services/branding": "/services/brand-identity-logo/",
  "/services/ai-search-optimization": "/digital-marketing/geo/",
  "/work": "/portfolio/",
  "/case-studies": "/portfolio/",
  "/software-development": "/application-development/",
  "/software-development/web-development": "/services/website-design/",
  "/software-development/mobile-app-development": "/services/mobile-app-development/",
  "/faq": "/contact/",
  "/privacy": "/privacy-policy/",
  "/legal": "/terms/",
  "/locations": "/locations/tamil-nadu/",
  "/namakkal": "/locations/namakkal/",
  "/karur": "/locations/karur/",
  "/paramathi-velur": "/locations/paramathi-velur/",
};
