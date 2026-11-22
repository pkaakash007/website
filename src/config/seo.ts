/**
 * Single source of truth for business facts (NAP), brand profiles and the
 * service-area locations. Everything that renders an address, phone number,
 * schema.org entity, sitemap entry, llms.txt or Markdown-for-agents response
 * must read from here so the details stay identical everywhere — consistent
 * NAP is a core local-SEO ranking signal.
 *
 * This file must stay framework-free (no React, no Next imports): the
 * Cloudflare worker imports it too.
 */

export const SITE_URL = "https://realresult.in";

export interface FaqItem {
  question: string;
  answer: string;
}

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4";

export const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJCeVk0hrVqzsRp7foI1ppMUo";

export const SOCIAL_LINKS = {
  google: GOOGLE_MAPS_URL,
  instagram: "https://www.instagram.com/real_result_/",
  linkedin: "https://www.linkedin.com/in/real-result-50445a442/",
  youtube: "https://www.youtube.com/channel/UCicDHwdRdTSOdJSwpFXkuSg",
  x: "https://x.com/RealResult_in",
  facebook: "https://www.facebook.com/people/Real-Result-Marketing-Digital-Ads-Expert/61585261640135/",
  whatsapp: "https://wa.me/918111033390",
  reddit: "https://www.reddit.com/user/Real_Result_in/",
  medium: "https://medium.com/@realresult.dev",
  quora: "https://www.quora.com/profile/Real-Result-1",
};

export const SEO_CONFIG = {
  siteName: "Real Result Marketing",
  shortName: "Real Result",
  legalName: "Real Result Marketing & Technology Solutions Private Limited",
  url: SITE_URL,
  domain: "realresult.in",
  locale: "en_IN",
  language: "en-IN",
  /** Square brand mark used for schema.org `logo` (min 112x112 for Google). */
  logo: `${SITE_URL}/brand/real-result-marketing-logo-tamil-nadu.png`,
  logoWidth: 250,
  logoHeight: 213,
  /** 1200x630 social preview card. */
  ogImage: `${SITE_URL}/og-image.jpg`,
  description:
    "Real Result Marketing is a digital marketing agency in Paramathi Velur, Namakkal district, Tamil Nadu. We help businesses in Namakkal, Karur and Paramathi Velur win customers with SEO, Google Ads, Google Maps (local SEO), social media marketing, AI search optimisation (GEO/AIO) and website development.",
  telephone: "+918111033390",
  displayPhone: "+91 81110 33390",
  email: "realresult.dev@gmail.com",
  headquarters: {
    streetAddress: "High School Building, 12/32, Padamudipalayam",
    addressLocality: "Paramathi Velur",
    addressDistrict: "Namakkal",
    addressRegion: "Tamil Nadu",
    postalCode: "638182",
    addressCountry: "IN",
    geo: { latitude: 11.1111972, longitude: 78.0058805 },
  },
  /** One-line postal address for visible text. */
  displayAddress:
    "High School Building, 12/32, Padamudipalayam, Paramathi Velur, Namakkal District, Tamil Nadu 638182",
  businessHours: "Mo-Sa 09:00-18:30",
  openingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "09:00",
  closes: "18:30",
  priceRange: "₹₹",
  socialProfiles: [
    GOOGLE_MAPS_URL,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.x,
    SOCIAL_LINKS.medium,
    SOCIAL_LINKS.reddit,
    SOCIAL_LINKS.quora,
  ],
  /** Priority markets first. */
  serviceAreas: ["Namakkal", "Karur", "Paramathi Velur", "Salem", "Erode", "Coimbatore", "Tamil Nadu"],
};

export interface LocationMeta {
  slug: string;
  city: string;
  district: string;
  region: string;
  /** Primary markets get stronger internal linking and sitemap priority. */
  priority: "primary" | "secondary";
  title: string;
  description: string;
  industries: string[];
  localContext: string;
  /** Towns and neighbourhoods covered from this market. */
  areas: string[];
  postalCode: string;
  geo: { latitude: number; longitude: number };
  wikipedia: string;
  /** Approximate road distance from the Paramathi Velur office. */
  distanceFromOffice: string;
}

/**
 * Service-area markets. Only Paramathi Velur has a physical office; every
 * other entry is a market we serve from there, so location pages must never
 * publish a separate street address for them.
 */
export const TAMIL_NADU_LOCATIONS: Record<string, LocationMeta> = {
  namakkal: {
    slug: "namakkal",
    city: "Namakkal",
    district: "Namakkal",
    region: "Kongu Nadu, Tamil Nadu",
    priority: "primary",
    title: "Best Digital Marketing Agency in Namakkal | Real Result",
    description:
      "Real Result is a Namakkal digital marketing agency for SEO, Google Ads, Google Maps ranking, social media and websites. Local team in Paramathi Velur. Call +91 81110 33390.",
    industries: [
      "Poultry & egg production",
      "Truck & lorry body building",
      "Transport & logistics fleets",
      "Schools, colleges & coaching centres",
      "Hospitals & clinics",
      "Real estate & construction",
    ],
    localContext:
      "Namakkal is India's egg capital and one of the country's biggest lorry body-building and transport hubs. We help Namakkal businesses get found on Google Search, Google Maps and AI assistants when buyers search for them, and turn those searches into calls and WhatsApp enquiries.",
    areas: ["Namakkal Town", "Tiruchengode", "Rasipuram", "Mohanur", "Sendamangalam", "Komarapalayam", "Pallipalayam", "Paramathi Velur"],
    postalCode: "637001",
    geo: { latitude: 11.2189, longitude: 78.1674 },
    wikipedia: "https://en.wikipedia.org/wiki/Namakkal",
    distanceFromOffice: "about 25 km",
  },
  karur: {
    slug: "karur",
    city: "Karur",
    district: "Karur",
    region: "Kongu Nadu, Tamil Nadu",
    priority: "primary",
    title: "Best Digital Marketing Agency in Karur | Real Result",
    description:
      "Real Result is a Karur digital marketing agency for home-textile exporters, bus body builders and local businesses: SEO, Google Ads, Google Maps and websites. Call +91 81110 33390.",
    industries: [
      "Home textiles & export houses",
      "Bus & coach body building",
      "Mosquito-net & technical textiles",
      "Retail, jewellery & showrooms",
      "Hospitals & clinics",
      "Schools & colleges",
    ],
    localContext:
      "Karur is India's home-textile export capital and a major bus body-building centre, just across the Cauvery from our Paramathi Velur office. We help Karur manufacturers win export and B2B enquiries through Google and AI search, and help local shops and clinics rank on Google Maps.",
    areas: ["Karur Town", "Vengamedu", "Thanthonimalai", "Pasupathipalayam", "Kulithalai", "Aravakurichi", "Krishnarayapuram", "Pugalur", "Velayuthampalayam"],
    postalCode: "639001",
    geo: { latitude: 10.9601, longitude: 78.0766 },
    wikipedia: "https://en.wikipedia.org/wiki/Karur",
    distanceFromOffice: "about 20 km",
  },
  "paramathi-velur": {
    slug: "paramathi-velur",
    city: "Paramathi Velur",
    district: "Namakkal",
    region: "Namakkal District, Tamil Nadu",
    priority: "primary",
    title: "Best Digital Marketing Agency in Paramathi Velur | Real Result",
    description:
      "Real Result's office is in Paramathi Velur. We do SEO, Google Ads, Google Maps ranking, social media and websites for Paramathi Velur, Namakkal and Karur businesses. Visit or call us.",
    industries: [
      "Poultry & agro-commodities",
      "Betel leaf, banana & sugarcane trade",
      "Transport & logistics",
      "Retail, showrooms & local services",
      "Hospitals & clinics",
    ],
    localContext:
      "Paramathi Velur is home to the Real Result office, on the Cauvery between Namakkal and Karur. Local businesses can meet our team in person, and we run their Google Maps listing, search ads, social media and website from right here.",
    areas: ["Paramathi Velur Town", "Padamudipalayam", "Pothanur", "Jedarpalayam", "Pandamangalam", "Kabilarmalai", "Nanjai Edayar", "Mohanur"],
    postalCode: "638182",
    geo: { latitude: 11.1111972, longitude: 78.0058805 },
    wikipedia: "https://en.wikipedia.org/wiki/Paramathi-Velur",
    distanceFromOffice: "our office",
  },
  salem: {
    slug: "salem",
    city: "Salem",
    district: "Salem",
    region: "Kongu Nadu, Tamil Nadu",
    priority: "secondary",
    title: "Digital Marketing Agency in Salem | SEO & Google Ads | Real Result",
    description:
      "SEO, Google Ads, Google Maps ranking and websites for Salem businesses, from steel and sago units to retail and jewellery showrooms. Real Result, Tamil Nadu.",
    industries: ["Steel & metal fabrication", "Sago & starch processing", "Retail & gold jewellery", "Silver artistry", "Textiles & handlooms"],
    localContext:
      "We serve Salem's industrial and retail businesses with B2B search visibility, Google Maps optimisation and fast websites, managed from our Paramathi Velur office.",
    areas: ["Salem City", "Attur", "Omalur", "Mettur", "Edappadi", "Sankagiri"],
    postalCode: "636001",
    geo: { latitude: 11.6643, longitude: 78.146 },
    wikipedia: "https://en.wikipedia.org/wiki/Salem,_Tamil_Nadu",
    distanceFromOffice: "about 70 km",
  },
  erode: {
    slug: "erode",
    city: "Erode",
    district: "Erode",
    region: "Kongu Nadu, Tamil Nadu",
    priority: "secondary",
    title: "Digital Marketing Agency in Erode | SEO & Google Ads | Real Result",
    description:
      "SEO, Google Ads, Google Maps ranking and websites for Erode textile, turmeric and healthcare businesses. Real Result serves Erode from Paramathi Velur.",
    industries: ["Textile processing & machinery", "Turmeric & agro-commodities", "Automotive ancillaries", "Healthcare & hospitals"],
    localContext:
      "We help Erode businesses move from traditional channels to search, Google Ads and modern websites. Erode is an easy drive from our Paramathi Velur office.",
    areas: ["Erode City", "Perundurai", "Bhavani", "Gobichettipalayam", "Chennimalai", "Kodumudi"],
    postalCode: "638001",
    geo: { latitude: 11.341, longitude: 77.7172 },
    wikipedia: "https://en.wikipedia.org/wiki/Erode",
    distanceFromOffice: "about 45 km",
  },
  coimbatore: {
    slug: "coimbatore",
    city: "Coimbatore",
    district: "Coimbatore",
    region: "Western Tamil Nadu",
    priority: "secondary",
    title: "Digital Marketing Agency in Coimbatore | SEO & PPC | Real Result",
    description:
      "B2B SEO, Google Ads and websites for Coimbatore manufacturers, pump and foundry exporters, SaaS startups and colleges. Real Result, Tamil Nadu.",
    industries: ["Foundry & precision engineering", "Pumps & motors", "Textile machinery", "SaaS & HealthTech", "Higher education"],
    localContext:
      "We help Coimbatore manufacturers, exporters and startups get found on Google Search and AI answer engines by the buyers they want.",
    areas: ["Coimbatore City", "Tiruppur", "Pollachi", "Mettupalayam", "Sulur"],
    postalCode: "641018",
    geo: { latitude: 11.0168, longitude: 76.9558 },
    wikipedia: "https://en.wikipedia.org/wiki/Coimbatore",
    distanceFromOffice: "about 130 km",
  },
};

export const PRIMARY_LOCATIONS = Object.values(TAMIL_NADU_LOCATIONS).filter((l) => l.priority === "primary");
