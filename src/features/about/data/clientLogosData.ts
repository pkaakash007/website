export interface ClientLogoItem {
  id: string;
  name: string;
  category: string;
  tag: "All" | "Retail" | "Real Estate" | "Education" | "Manufacturing" | "Services";
  tagLabel: string;
  logoUrl: string;
  location?: string;
  description?: string;
}

export const CLIENT_LOGOS: ClientLogoItem[] = [
  {
    id: "pks-natural-foods",
    name: "PKS Natural Foods",
    category: "Traditional Foods (Since 1985)",
    tag: "Manufacturing",
    tagLabel: "Manufacturing",
    logoUrl: "/images/clients%20logo/clean/pks-natural-foods.png",
    location: "Tamil Nadu",
    description: "Cold-pressed traditional oils, pulses, and heritage spices."
  },
  {
    id: "nava-supermarket",
    name: "Nava Supermarket",
    category: "Retail & Supermarket Chain",
    tag: "Retail",
    tagLabel: "Retail & FMCG",
    logoUrl: "/images/clients%20logo/clean/nava-supermarket.png",
    location: "Tamil Nadu",
    description: "Modern retail supermarket with fresh groceries and essentials."
  },
  {
    id: "matha-supermarket",
    name: "Matha Supermarket",
    category: "World Food Specialist",
    tag: "Retail",
    tagLabel: "Retail & FMCG",
    logoUrl: "/images/clients%20logo/clean/matha-supermarket.png",
    location: "Tamil Nadu",
    description: "Supermarket chain specializing in diverse regional and world foods."
  },
  {
    id: "shree-velan",
    name: "Shree Velan",
    category: "Electronics, Mobiles & Furniture",
    tag: "Retail",
    tagLabel: "Retail & FMCG",
    logoUrl: "/images/clients%20logo/clean/shree-velan.png",
    location: "Tamil Nadu",
    description: "Multi-brand electronics, home appliances, and furniture showroom."
  },
  {
    id: "anikart",
    name: "Anikart Online",
    category: "E-Commerce & Digital Shopping",
    tag: "Retail",
    tagLabel: "Retail & FMCG",
    logoUrl: "/images/clients%20logo/clean/anikart.png",
    location: "Tamil Nadu",
    description: "Online shopping portal for regional consumers and products."
  },
  {
    id: "harsh-masala",
    name: "Harsh Masala",
    category: "FMCG, Spices & Tea Powder",
    tag: "Manufacturing",
    tagLabel: "Manufacturing",
    logoUrl: "/images/clients%20logo/clean/harsh-masala.png",
    location: "Tamil Nadu",
    description: "Authentic tea blends and aromatic culinary spice powders."
  },
  {
    id: "buddy-mattress",
    name: "Buddy Mattress",
    category: "Sleep Ergonomics & Mattresses",
    tag: "Manufacturing",
    tagLabel: "Manufacturing",
    logoUrl: "/images/clients%20logo/clean/buddy-mattress.png",
    location: "Tamil Nadu",
    description: "Direct-to-consumer ergonomic mattress and bedding manufacturer."
  },
  {
    id: "bb-waters",
    name: "BB Waters (Boopathi Brothers)",
    category: "Packaged Water & Beverages",
    tag: "Manufacturing",
    tagLabel: "Manufacturing",
    logoUrl: "/images/clients%20logo/clean/bb-waters.png",
    location: "Tamil Nadu",
    description: "Hygienic bottled drinking water and beverage production."
  },
  {
    id: "run-hitech-solar",
    name: "Run Hitech Solar",
    category: "Solar Energy & Infrastructure",
    tag: "Services",
    tagLabel: "Energy & Services",
    logoUrl: "/images/clients%20logo/clean/run-hitech-solar.png",
    location: "Tamil Nadu",
    description: "Industrial and rooftop solar power engineering installations."
  },
  {
    id: "national-traders",
    name: "National Traders",
    category: "Solar, UPS & Power Systems",
    tag: "Services",
    tagLabel: "Energy & Services",
    logoUrl: "/images/clients%20logo/clean/national-traders.png",
    location: "Tamil Nadu",
    description: "Industrial power solutions, commercial inverters, and battery backups."
  },
  {
    id: "property-paradise",
    name: "Property Paradise",
    category: "Real Estate & Housing Layouts",
    tag: "Real Estate",
    tagLabel: "Real Estate",
    logoUrl: "/images/clients%20logo/clean/property-paradise.png",
    location: "Tamil Nadu",
    description: "Prime residential plots, gated villas, and commercial land developments."
  },
  {
    id: "lotus-valley",
    name: "Lotus Valley Developers",
    category: "Gated Communities & Living",
    tag: "Real Estate",
    tagLabel: "Real Estate",
    logoUrl: "/images/clients%20logo/clean/lotus-valley.png",
    location: "Tamil Nadu",
    description: "Premium eco-friendly gated communities and villa plots."
  },
  {
    id: "sri-karthi-housing",
    name: "Sri Karthi Housing",
    category: "Housing, Plots & Properties",
    tag: "Real Estate",
    tagLabel: "Real Estate",
    logoUrl: "/images/clients%20logo/clean/sri-karthi-housing.png",
    location: "Tamil Nadu",
    description: "Trusted real estate promoter and custom housing layouts."
  },
  {
    id: "sk-elite-properties",
    name: "SK Elite Properties",
    category: "Commercial & Residential Realty",
    tag: "Real Estate",
    tagLabel: "Real Estate",
    logoUrl: "/images/clients%20logo/clean/sk-elite-properties.png",
    location: "Tamil Nadu",
    description: "Modern commercial spaces and residential property developments."
  },
  {
    id: "muthu-real-estate",
    name: "Muthu Real Estate",
    category: "Real Estate Consulting",
    tag: "Real Estate",
    tagLabel: "Real Estate",
    logoUrl: "/images/clients%20logo/clean/muthu-real-estate.png",
    location: "Tamil Nadu",
    description: "Regional property advisory, farmland sales, and housing layouts."
  },
  {
    id: "dgr-housing",
    name: "DGR Housing",
    category: "Property Development & Realty",
    tag: "Real Estate",
    tagLabel: "Real Estate",
    logoUrl: "/images/clients%20logo/clean/dgr-housing.png",
    location: "Tamil Nadu",
    description: "Residential layout planning and DTCP-approved property schemes."
  },
  {
    id: "sm-constructions",
    name: "SM Constructions",
    category: "Civil Engineering & Construction",
    tag: "Real Estate",
    tagLabel: "Real Estate",
    logoUrl: "/images/clients%20logo/clean/sm-constructions.png",
    location: "Tamil Nadu",
    description: "Turnkey residential and commercial civil building contractors."
  },
  {
    id: "veedu-veetumanai-santhai",
    name: "Veedu Veetumanai Santhai",
    category: "Property Marketplace",
    tag: "Real Estate",
    tagLabel: "Real Estate",
    logoUrl: "/images/clients%20logo/clean/veedu-veetumanai-santhai.png",
    location: "Tamil Nadu",
    description: "Direct real estate marketplace connecting buyers and plot owners."
  },
  {
    id: "vedhav-academy",
    name: "Vedhav Academy",
    category: "Academic Coaching & Tuitions",
    tag: "Education",
    tagLabel: "Education",
    logoUrl: "/images/clients%20logo/clean/vedhav-academy.png",
    location: "Tamil Nadu",
    description: "Specialized competitive exam preparation and foundation courses."
  },
  {
    id: "rosan-coaching",
    name: "Rosan Coaching Centre",
    category: "Coaching & Tuition Centre",
    tag: "Education",
    tagLabel: "Education",
    logoUrl: "/images/clients%20logo/clean/rosan-coaching.png",
    location: "Tamil Nadu",
    description: "Focused school curriculum coaching and competitive entrance prep."
  },
  {
    id: "kandhasamy-kandar-school",
    name: "Kandhasamy Kandar School",
    category: "Matriculation Hr. Sec. School",
    tag: "Education",
    tagLabel: "Education",
    logoUrl: "/images/clients%20logo/clean/kandhasamy-kandar-school.png",
    location: "Paramathi Velur, Namakkal",
    description: "Prestigious educational institution nurturing generations of students."
  },
  {
    id: "ssa-consulting",
    name: "SSA Career Consulting",
    category: "Education & Career Advisory",
    tag: "Education",
    tagLabel: "Education",
    logoUrl: "/images/clients%20logo/clean/ssa-consulting.png",
    location: "Tamil Nadu",
    description: "Higher education counseling, university admissions, and career guidance."
  },
  {
    id: "willow-foundation",
    name: "Willow Foundation",
    category: "Registered Public Charitable Trust",
    tag: "Services",
    tagLabel: "Energy & Services",
    logoUrl: "/images/clients%20logo/clean/willow-foundation.png",
    location: "Tamil Nadu",
    description: "Non-profit charitable trust driving community welfare and educational aid."
  },
  {
    id: "rishabam-foundation",
    name: "Rishabam Foundation",
    category: "Healthcare & Community Trust",
    tag: "Services",
    tagLabel: "Energy & Services",
    logoUrl: "/images/clients%20logo/clean/rishabam-foundation.png",
    location: "Tamil Nadu",
    description: "Social impact foundation supporting community health and rural wellness."
  },
  {
    id: "aasskaar",
    name: "Aasskaar",
    category: "Healthcare & Support Services",
    tag: "Services",
    tagLabel: "Energy & Services",
    logoUrl: "/images/clients%20logo/clean/aasskaar.png",
    location: "Tamil Nadu",
    description: "Compassionate patient support, elder care, and wellness services."
  },
  {
    id: "vasavi-yatra",
    name: "Vasavi Yatra & Tours",
    category: "Pilgrimage & Leisure Tourism",
    tag: "Services",
    tagLabel: "Energy & Services",
    logoUrl: "/images/clients%20logo/clean/vasavi-yatra.png",
    location: "Tamil Nadu",
    description: "Specialized spiritual pilgrimage travel packages and guided tour services."
  }
];

export const CLIENT_CATEGORIES = [
  { key: "All", label: "All Clients", count: 26 },
  { key: "Retail", label: "Retail & FMCG", count: 5 },
  { key: "Real Estate", label: "Real Estate & Housing", count: 8 },
  { key: "Education", label: "Education & Schools", count: 4 },
  { key: "Manufacturing", label: "Manufacturing & FMCG", count: 4 },
  { key: "Services", label: "Energy & Public Trusts", count: 5 },
] as const;
