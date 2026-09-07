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
  brandName: "Real Result",
  tagline: "Marketing That Moves",
  subheadline: "Strategy, media, performance and intelligent communication built to move businesses forward.",
  positioning: "A premium modern marketing, media and growth company that also provides technology, AI-powered communication and human-resource solutions.",
  
  // Centralized WhatsApp configuration
  whatsapp: {
    number: "18005557325",
    displayNumber: "+1 (800) 555-REAL",
    defaultMessage: "Hello Real Result team, I would like to discuss working together.",
    contextMessages: {
      marketing: "Hello Real Result team, I would like to discuss planning our marketing and media campaign.",
      aiCommunication: "Hello Real Result team, I would like to discuss AI communication, regional telecalling & CPaaS.",
      technology: "Hello Real Result team, I would like to discuss a custom technology / software project.",
      humanResources: "Hello Real Result team, I would like to discuss executive recruitment and workforce solutions.",
      general: "Hello Real Result team, I would like to explore your integrated solutions.",
    },
  },
  
  contact: {
    email: "campaigns@realresult.com",
    address: "Enterprise Media Hub, Suite 400",
  },

  divisions: [
    {
      id: "marketing",
      name: "Marketing & Media",
      eyebrow: "PRIMARY GROWTH DIVISION",
      headline: "Make your brand impossible to ignore.",
      description: "From attention to action. High-intent digital performance, television, radio, outdoor DOOH, cinema, and omnichannel attribution.",
      href: "/marketing",
      badge: "Marketing First",
      isPrimary: true,
    },
    {
      id: "ai-communication",
      name: "AI Communication",
      eyebrow: "INTELLIGENT ENGAGEMENT",
      headline: "Marketing gets attention. Communication keeps the conversation going.",
      description: "Regional language AI telecalling, automated bulk IVR, WhatsApp Business API, RCS, voice bots, and enterprise CPaaS.",
      href: "/ai-communication",
      badge: "AI Telephony",
      isPrimary: false,
    },
    {
      id: "technology",
      name: "Technology & Software",
      eyebrow: "ENGINEERING FOUNDATION",
      headline: "Technology that powers the experience.",
      description: "Custom software engineering, scalable cloud architecture, SaaS platforms, high-performance web and mobile applications.",
      href: "/technology",
      badge: "Engineering",
      isPrimary: false,
    },
    {
      id: "human-resources",
      name: "Human Resources",
      eyebrow: "HUMAN CAPITAL",
      headline: "Behind every growing business: people.",
      description: "Executive search, specialized technical recruitment, leadership advisory, and high-impact workforce operations.",
      href: "/human-resources",
      badge: "Talent",
      isPrimary: false,
    },
  ] as DivisionConfig[],
};

export function getWhatsAppUrl(
  context: "marketing" | "aiCommunication" | "technology" | "humanResources" | "general" = "general"
): string {
  const message = REAL_RESULT_CONFIG.whatsapp.contextMessages[context] || REAL_RESULT_CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${REAL_RESULT_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
