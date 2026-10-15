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

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4";

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

export const SEO_CONFIG: SEOConfig = {
  siteName: "Real Result Marketing",
  legalName: "Real Result Marketing & Technology Solutions Private Limited",
  url: "https://realresult.in",
  domain: "realresult.in",
  logo: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  description:
    "Real Result Marketing is the best digital marketing agency and custom software development company in Tamil Nadu, India. Headquartered in Paramathi Velur, Namakkal with regional operations across Salem, Erode, and Coimbatore. Delivering ROI-focused SEO, GEO, Google Ads, web applications, and enterprise AI software.",
  telephone: "+918111033390",
  displayPhone: "+91 81110 33390",
  email: "realresult.dev@gmail.com",
  headquarters: {
    streetAddress: "Paramathi Velur",
    addressLocality: "Paramathi Velur, Namakkal",
    addressRegion: "Tamil Nadu",
    postalCode: "638182",
    addressCountry: "IN",
    geo: {
      latitude: 11.1111972,
      longitude: 78.0058805,
    },
  },
  socialProfiles: [
    GOOGLE_MAPS_URL,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.x,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.medium,
    SOCIAL_LINKS.reddit,
    SOCIAL_LINKS.quora,
  ],
  serviceAreas: [
    "Erode",
    "Namakkal",
    "Paramathi Velur",
    "Salem",
    "Coimbatore",
    "Kongu Region, Tamil Nadu",
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
    title: "Best Digital Marketing Company in Erode | Top SEO Agency & Marketing Company - Real Result",
    description:
      "Looking for the best digital marketing company in Erode? Real Result is the #1 digital marketing agency in Erode providing top Google SEO, Google Ads, local Google Maps 3-pack ranking & custom software.",
    industries: ["Textile Processing & Machinery", "Turmeric & Agro-Commodities", "Automotive Ancillaries", "Healthcare & Hospitals"],
    localContext:
      "As our central operations and engineering laboratory, our Erode team provides direct, on-ground consulting for Kongu region businesses transitioning from traditional channels to high-intent search, Google Ads, and automated enterprise software.",
    postalCode: "638011",
    geo: { latitude: 11.341, longitude: 77.7172 },
  },
  namakkal: {
    slug: "namakkal",
    city: "Namakkal",
    region: "Central Kongu Region, Tamil Nadu",
    title: "Best Digital Marketing Company in Namakkal | Top SEO Agency & Web Company - Real Result",
    description:
      "Looking for the best digital marketing company in Namakkal? Real Result is the leading digital marketing agency in Namakkal delivering #1 Google SEO rankings, Google Ads, local Maps 3-pack optimization & custom software in Namakkal & Paramathi Velur.",
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
    geo: { latitude: 11.1111972, longitude: 78.0058805 },
    mapUrl: GOOGLE_MAPS_URL,
    address: "Paramathi Velur, Namakkal District, Tamil Nadu 638182, India",
  },
  "paramathi-velur": {
    slug: "paramathi-velur",
    city: "Paramathi Velur",
    region: "Namakkal District, Tamil Nadu",
    title: "Best Digital Marketing Company in Paramathi Velur | Top SEO Agency & Marketing Company - Real Result",
    description:
      "Looking for the best digital marketing company in Paramathi Velur? Real Result delivers top Google SEO rankings, Google Ads, local Maps 3-pack optimization, and custom web design in Paramathi Velur, Namakkal.",
    industries: [
      "Poultry & Agro-Commodities",
      "Fleet Transport & Logistics",
      "Retail, Showrooms & Local Services",
      "Healthcare, Hospitals & Clinics",
    ],
    localContext:
      "Paramathi Velur is the official registered office of Real Result Marketing. Located along the Cauvery belt connecting Namakkal, Karur, and Erode, we provide direct on-ground strategy, local Google Maps ranking, and high-ROI digital marketing.",
    postalCode: "638182",
    geo: { latitude: 11.1111972, longitude: 78.0058805 },
    mapUrl: GOOGLE_MAPS_URL,
    address: "Paramathi Velur, Namakkal District, Tamil Nadu 638182, India",
  },
  salem: {
    slug: "salem",
    city: "Salem",
    region: "Central-Western Tamil Nadu",
    title: "Best Digital Marketing Company in Salem | Top SEO Agency & Marketing Company - Real Result",
    description:
      "Looking for the best digital marketing company in Salem? Real Result delivers #1 Google SEO rankings, Google Ads, social media marketing, local search, and custom web software in Salem, TN.",
    industries: ["Steel & Metallurgical Manufacturing", "Sago & Starch Processing", "Retail & Gold Jewelry", "Silver Artistry"],
    localContext:
      "Serving Salem's industrial and retail corridors with high-intent B2B search visibility, localized Google Maps optimization, and modernized billing/inventory web platforms.",
    postalCode: "636001",
    geo: { latitude: 11.6643, longitude: 78.146 },
  },
  coimbatore: {
    slug: "coimbatore",
    city: "Coimbatore",
    region: "Western Tamil Nadu",
    title: "Best Digital Marketing Agency in Coimbatore | Top SEO Company & Marketing Agency - Real Result",
    description:
      "Leading digital marketing agency and custom software development company in Coimbatore, Tamil Nadu. Dominating Google Search, local SEO, precision B2B PPC, and engineering custom SaaS applications.",
    industries: ["Foundry & Precision Engineering", "Pumps & Motors Manufacturing", "Textile Machinery", "SaaS & HealthTech", "Higher Education"],
    localContext:
      "Coimbatore is the industrial engine of Tamil Nadu. We empower Coimbatore manufacturers, exporters, and startups to outrank global competitors on Google Search and AI answer engines while automating operations with bespoke software.",
    postalCode: "641018",
    geo: { latitude: 11.0168, longitude: 76.9558 },
  },
};
