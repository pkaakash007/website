export interface WhatsAppConfig {
  number: string;
  defaultMessage: string;
  contextMessages: {
    marketing: string;
    aiCommunication: string;
    technology: string;
    humanResources: string;
    general: string;
  };
}

export interface DivisionConfig {
  id: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  href: string;
  badge: string;
  isPrimary: boolean;
}

export const REAL_RESULT_CONFIG = {
  brandName: "Real Result Marketing",
  shortName: "Real Result",
  tagline: "Marketing That Moves — Powered by Engineering",
  subheadline: "Strategic SEO, GEO, performance media, and custom enterprise software development built to move Tamil Nadu businesses forward.",
  positioning: "A premier digital marketing, search authority, and custom software development company headquartered in Erode, Tamil Nadu, serving Coimbatore, Chennai, and statewide enterprises.",
  
  // Real Business Coordinates in Erode, Tamil Nadu, India
  location: {
    headquarters: "Erode, Tamil Nadu, India",
    address: "148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011",
    region: "Tamil Nadu",
    country: "India",
    pinCode: "638011",
  },

  // Centralized WhatsApp configuration (Tamil Nadu, India format: +91)
  whatsapp: {
    number: "919842012345",
    displayNumber: "+91 98420 12345",
    defaultMessage: "Hello Real Result Marketing team, I would like to discuss growing my business.",
    contextMessages: {
      marketing: "Hello Real Result team, I would like to discuss digital marketing, SEO & Google Ads for our business.",
      aiCommunication: "Hello Real Result team, I would like to explore Generative Engine Optimization (GEO) & AI Search.",
      technology: "Hello Real Result team, I would like to discuss a custom web or software development project.",
      humanResources: "Hello Real Result team, I would like to discuss executive recruitment and staffing.",
      general: "Hello Real Result team, I would like to explore your integrated marketing and technology services.",
    },
  },
  
  contact: {
    email: "hello@realresult.in",
    supportEmail: "campaigns@realresult.in",
    phone: "+91 98420 12345",
    address: "148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011",
  },

  divisions: [
    {
      id: "digital-marketing",
      name: "Digital Marketing & SEO",
      eyebrow: "PRIMARY GROWTH DIVISION",
      headline: "Make your brand impossible to ignore across Google and AI Search.",
      description: "From search intent to qualified revenue. Technical SEO, Generative Engine Optimization (GEO), Google Ads, local Google Maps domination, and conversion rate optimization.",
      href: "/digital-marketing",
      badge: "Digital Marketing",
      isPrimary: true,
    },
    {
      id: "software-development",
      name: "Software & App Development",
      eyebrow: "ENGINEERING FOUNDATION",
      headline: "Enterprise software that powers your business scale.",
      description: "Custom software engineering, scalable cloud architecture, SaaS platforms, high-performance web applications, and enterprise AI integrations.",
      href: "/software-development",
      badge: "Software Engineering",
      isPrimary: true,
    },
    {
      id: "locations",
      name: "Tamil Nadu Hubs",
      eyebrow: "REGIONAL DOMINANCE",
      headline: "Serving enterprise corridors across Tamil Nadu.",
      description: "Dedicated client advisory and engineering deployment across Erode (HQ), Coimbatore, Chennai, Tiruppur, Salem, Namakkal, Madurai, Trichy, and Tirunelveli.",
      href: "/locations/tamil-nadu",
      badge: "Tamil Nadu Network",
      isPrimary: false,
    },
    {
      id: "human-resources",
      name: "Human Resources",
      eyebrow: "HUMAN CAPITAL",
      headline: "Behind every growing business: elite talent.",
      description: "Executive search, specialized technical recruitment, leadership advisory, and high-impact workforce operations.",
      href: "/human-resources",
      badge: "Talent Acquisition",
      isPrimary: false,
    },
  ] as DivisionConfig[],
};

export function getWhatsAppUrl(
  contextOrMessage: "marketing" | "aiCommunication" | "technology" | "humanResources" | "general" | string = "general"
): string {
  const contextMsg =
    REAL_RESULT_CONFIG.whatsapp.contextMessages[contextOrMessage as keyof typeof REAL_RESULT_CONFIG.whatsapp.contextMessages];
  const message = contextMsg || (contextOrMessage && contextOrMessage !== "general" ? contextOrMessage : REAL_RESULT_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${REAL_RESULT_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
