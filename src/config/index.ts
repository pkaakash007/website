import { SEO_CONFIG, SOCIAL_LINKS } from "./seo";

export { SOCIAL_LINKS };

/** UI-facing brand config. Contact details are derived from SEO_CONFIG (single source of truth). */
export const REAL_RESULT_CONFIG = {
  brandName: SEO_CONFIG.shortName,
  shortName: SEO_CONFIG.shortName,
  tagline: "Get noticed. Get chosen. Keep growing.",
  location: {
    headquarters: "Paramathi Velur, Namakkal, Tamil Nadu, India",
    address: SEO_CONFIG.displayAddress,
    region: SEO_CONFIG.headquarters.addressRegion,
    country: "India",
    pinCode: SEO_CONFIG.headquarters.postalCode,
  },
  whatsapp: {
    number: SEO_CONFIG.telephone.replace(/\D/g, ""),
    displayNumber: SEO_CONFIG.displayPhone,
    defaultMessage: "Hello Real Result Marketing team, I would like to discuss growing my business.",
    contextMessages: {
      marketing: "Hello Real Result team, I would like to discuss digital marketing, SEO & Google Ads for our business.",
      aiCommunication: "Hello Real Result team, I would like to explore Generative Engine Optimization (GEO) & AI Search.",
      technology: "Hello Real Result team, I would like to discuss a custom web or software development project.",
      general: "Hello Real Result team, I would like to explore your marketing and technology services.",
    },
  },
  contact: {
    email: SEO_CONFIG.email,
    phone: SEO_CONFIG.displayPhone,
    address: SEO_CONFIG.displayAddress,
  },
  social: SOCIAL_LINKS,
};

type WhatsAppContext = keyof typeof REAL_RESULT_CONFIG.whatsapp.contextMessages;

/** Build a wa.me link from a known context key or a custom message. */
export function getWhatsAppUrl(contextOrMessage: WhatsAppContext | string = "general"): string {
  const messages = REAL_RESULT_CONFIG.whatsapp.contextMessages;
  const message =
    messages[contextOrMessage as WhatsAppContext] ??
    (contextOrMessage && contextOrMessage !== "general" ? contextOrMessage : REAL_RESULT_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${REAL_RESULT_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
