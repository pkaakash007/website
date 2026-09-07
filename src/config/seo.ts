export interface SEOConfig {
  siteName: string;
  legalName: string;
  url: string;
  domain: string;
  logo: string;
  description: string;
  telephone: string;
  displayPhone: string;
  email: string;
  headquarters: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    geo: {
      latitude: number;
      longitude: number;
    };
  };
  socialProfiles: string[];
  serviceAreas: string[];
  businessHours: string;
}

export const SEO_CONFIG: SEOConfig = {
  siteName: "Real Result Marketing",
  legalName: "Real Result Marketing & Technology Solutions Private Limited",
  url: "https://realresult.in",
  domain: "realresult.in",
  logo: "https://realresult.in/brand/realresult-logo.jpeg",
  description:
    "Real Result Marketing is a premier digital marketing agency and custom software development company in Tamil Nadu, India. Headquartered in Erode with active client operations in Coimbatore, Chennai, Tiruppur, and statewide. Delivering ROI-focused SEO, GEO, Google Ads, web applications, and enterprise AI software.",
  telephone: "+919842012345",
  displayPhone: "+91 98420 12345",
  email: "hello@realresult.in",
  headquarters: {
    streetAddress: "148/2, Perundurai Road, Near Collectorate",
    addressLocality: "Erode",
    addressRegion: "Tamil Nadu",
    postalCode: "638011",
    addressCountry: "IN",
    geo: {
      latitude: 11.341,
      longitude: 77.7172,
    },
  },
  socialProfiles: [
    "https://www.linkedin.com/company/realresultmarketing",
    "https://twitter.com/realresultmktg",
    "https://www.facebook.com/realresultmarketing",
    "https://www.instagram.com/realresultmarketing",
    "https://www.youtube.com/@realresultmarketing",
  ],
  serviceAreas: [
    "Tamil Nadu",
    "Erode",
    "Coimbatore",
    "Chennai",
    "Tiruppur",
    "Salem",
    "Madurai",
    "Tiruchirappalli",
    "Tirunelveli",
    "Namakkal",
    "India",
  ],
  businessHours: "Mo-Sa 09:00-18:30",
};

export interface LocationMeta {
  slug: string;
  city: string;
  region: string;
  title: string;
  description: string;
  industries: string[];
  localContext: string;
  postalCode: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  mapUrl?: string;
  address?: string;
}

export const TAMIL_NADU_LOCATIONS: Record<string, LocationMeta> = {
  erode: {
    slug: "erode",
    city: "Erode",
    region: "Kongu Region, Tamil Nadu",
    title: "Digital Marketing Agency & Software Company in Erode | Real Result HQ",
    description:
      "Real Result Marketing Headquarters in Erode, Tamil Nadu. Providing top-tier SEO, Google Ads, custom ERP/web development, and AI software for textile, turmeric, and manufacturing enterprises.",
    industries: ["Textile Processing & Machinery", "Turmeric & Agro-Commodities", "Automotive Ancillaries", "Healthcare & Hospitals"],
    localContext:
      "As our corporate headquarters, our Erode engineering and marketing lab provides direct, on-ground consulting for Kongu region businesses transitioning from traditional channels to high-intent global search and automated enterprise software.",
    postalCode: "638011",
    geo: { latitude: 11.341, longitude: 77.7172 },
  },
  coimbatore: {
    slug: "coimbatore",
    city: "Coimbatore",
    region: "Western Tamil Nadu",
    title: "Best Digital Marketing Agency & SEO Company in Coimbatore | Real Result",
    description:
      "Leading digital marketing agency and custom software development company in Coimbatore, Tamil Nadu. Dominating Google Search, local SEO, precision B2B PPC, and engineering custom SaaS applications.",
    industries: ["Foundry & Precision Engineering", "Pumps & Motors Manufacturing", "Textile Machinery", "SaaS & HealthTech", "Higher Education"],
    localContext:
      "Coimbatore is the industrial engine of Tamil Nadu. We empower Coimbatore manufacturers, exporters, and startups to outrank global competitors on Google Search and AI answer engines while automating operations with bespoke software.",
    postalCode: "641018",
    geo: { latitude: 11.0168, longitude: 76.9558 },
  },
  chennai: {
    slug: "chennai",
    city: "Chennai",
    region: "Northern Coastal Tamil Nadu",
    title: "Enterprise Digital Marketing & Software Development Company Chennai",
    description:
      "Enterprise digital marketing, SEO, and cloud software development solutions in Chennai, Tamil Nadu. Full-funnel growth, programmatic GEO/AIO, and high-performance React & Python engineering.",
    industries: ["Automotive & EV Manufacturing", "SaaS & Enterprise Tech", "FinTech & Banking", "Logistics & Ports", "Multispecialty Healthcare"],
    localContext:
      "Chennai represents India's automotive and SaaS capital. Our dedicated enterprise team deploys advanced technical SEO architectures, full-funnel paid search, and high-scale cloud software platforms for multinational corporations and high-growth scale-ups.",
    postalCode: "600001",
    geo: { latitude: 13.0827, longitude: 80.2707 },
  },
  tiruppur: {
    slug: "tiruppur",
    city: "Tiruppur",
    region: "Kongu Region, Tamil Nadu",
    title: "Digital Marketing & Apparel ERP Software Company in Tiruppur",
    description:
      "Specialized digital marketing, international export SEO, and custom factory ERP software development for Tiruppur knitwear and apparel exporters.",
    industries: ["Apparel & Knitwear Exports", "Cotton Yarn & Spinning", "Dyeing & Effluent Tech", "Packaging & Accessories"],
    localContext:
      "Tiruppur produces over 90% of India's cotton knitwear exports. We engineer global export SEO campaigns targeting European and US retail buyers while building custom production and order tracking software tailored to garment houses.",
    postalCode: "641604",
    geo: { latitude: 11.1085, longitude: 77.3411 },
  },
  salem: {
    slug: "salem",
    city: "Salem",
    region: "Central-Western Tamil Nadu",
    title: "Digital Marketing Agency & Web Development Company in Salem",
    description:
      "Results-driven digital marketing, local SEO, and business software engineering for Salem's steel, sago, textile, and retail enterprises.",
    industries: ["Steel & Metallurgical Manufacturing", "Sago & Starch Processing", "Retail & Gold Jewelry", "Silver Artistry"],
    localContext:
      "Serving Salem's industrial corridors with high-intent B2B search visibility, localized Google Maps optimization, and modernized billing/inventory web platforms.",
    postalCode: "636001",
    geo: { latitude: 11.6643, longitude: 78.146 },
  },
  madurai: {
    slug: "madurai",
    city: "Madurai",
    region: "Southern Tamil Nadu",
    title: "Digital Marketing Agency & Software Company in Madurai",
    description:
      "Leading digital marketing agency in Madurai providing SEO, social media marketing, local search, and custom application development for South Tamil Nadu businesses.",
    industries: ["Agribusiness & Food Processing", "Textile & Handloom", "Automotive Components", "Tourism & Healthcare"],
    localContext:
      "Madurai is the cultural and commercial hub of Southern Tamil Nadu. We assist family-owned enterprises and modern brands in establishing commanding online presence and automating retail/distributor operations.",
    postalCode: "625001",
    geo: { latitude: 9.9252, longitude: 78.1198 },
  },
  trichy: {
    slug: "trichy",
    city: "Tiruchirappalli (Trichy)",
    region: "Central Tamil Nadu",
    title: "Digital Marketing & Software Development Company in Trichy",
    description:
      "Expert SEO, performance marketing, and software engineering services in Trichy. Helping fabrication, engineering, education, and retail leaders accelerate growth.",
    industries: ["Heavy Fabrication & Boilers", "Engineering Ancillaries", "Educational Institutions", "Consumer Retail"],
    localContext:
      "Strategically located in Central Tamil Nadu, our Trichy client solutions focus on technical search rankings for engineering equipment, student acquisition funnels, and enterprise database systems.",
    postalCode: "620001",
    geo: { latitude: 10.7905, longitude: 78.7047 },
  },
  tirunelveli: {
    slug: "tirunelveli",
    city: "Tirunelveli",
    region: "Deep South Tamil Nadu",
    title: "Digital Marketing Agency & Tech Solutions in Tirunelveli",
    description:
      "Empowering Tirunelveli and Thoothukudi businesses with professional SEO, social media advertising, and custom web/mobile software development.",
    industries: ["Renewable Energy & Wind Power", "Port Logistics & Maritime", "Food Products & Sweets", "Education"],
    localContext:
      "Bringing enterprise-grade search strategy, regional language marketing, and mobile application engineering to businesses expanding across the southern districts.",
    postalCode: "627001",
    geo: { latitude: 8.7139, longitude: 77.7567 },
  },
  namakkal: {
    slug: "namakkal",
    city: "Namakkal",
    region: "Central Kongu Region, Tamil Nadu",
    title: "Digital Marketing Agency & Software Company in Namakkal | Real Result",
    description:
      "Results-driven digital marketing agency, local SEO, Google Ads, and custom business software engineering in Namakkal and Paramathi Velur for poultry, transport, agro, and manufacturing sectors.",
    industries: [
      "Poultry & Egg Production Logistics",
      "Commercial Truck Body Building & Fleet Logistics",
      "Agro-Processing & Farming Technology",
      "Industrial Fabrication & Machinery",
      "Educational Institutions & Healthcare",
    ],
    localContext:
      "Namakkal is India's egg capital and commercial transport powerhouse. We deliver high-intent B2B SEO, Google Maps 3-pack dominance, and automated fleet/hatchery ERP software for businesses across Namakkal, Paramathi Velur, Tiruchengode, and Rasipuram.",
    postalCode: "638182",
    geo: { latitude: 11.1112509, longitude: 78.0057796 },
    mapUrl: "https://maps.app.goo.gl/Be2565mN74uVgZ7p9",
    address: "Paramathi Velur, Namakkal District, Tamil Nadu 638182, India",
  },
};
