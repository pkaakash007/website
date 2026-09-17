import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { ArrowRight } from "lucide-react";

export interface ServiceIOSCardItem {
  id: string;
  number: string;
  title: string;
  category: "web-apps" | "marketing-seo" | "branding-media" | "security-cloud";
  categoryLabel: string;
  image: string;
  simpleDesc: string;
  keyPoints: string[];
  bestFor: string;
  actionUrl: string;
}

export const ALL_IOS_SERVICES: ServiceIOSCardItem[] = [
  // ── 1. Web & Applications ──
  {
    id: "website-design",
    number: "01",
    title: "Website Design",
    category: "web-apps",
    categoryLabel: "Web & Apps",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Fast, modern websites that look great on mobile phones and bring you customer calls.",
    keyPoints: [
      "Loads fast on all mobile phones and laptops",
      "Direct 1-tap call and WhatsApp chat buttons",
      "Ready to show up on Google search results",
    ],
    bestFor: "Clinics, showrooms, factories, and service businesses",
    actionUrl: "/services/website-design",
  },
  {
    id: "ecommerce-platforms",
    number: "02",
    title: "Online Store & Ecommerce",
    category: "web-apps",
    categoryLabel: "Web & Apps",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Your own online shop where buyers order and pay with GPay, PhonePe, or Cash on Delivery.",
    keyPoints: [
      "Instant UPI, card, and Cash on Delivery payments",
      "New order alerts sent straight to your WhatsApp",
      "Easy mobile dashboard to update products and prices",
    ],
    bestFor: "Clothing brands, grocery stores, wholesalers, and retail shops",
    actionUrl: "/services/ecommerce-platforms",
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "iPhone & Android Apps",
    category: "web-apps",
    categoryLabel: "Web & Apps",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Custom mobile apps built for your brand and published live on the App Store and Play Store.",
    keyPoints: [
      "Published on Apple App Store & Google Play Store",
      "Send push messages and discounts to all users",
      "Fast, smooth, and works without freezing",
    ],
    bestFor: "Delivery businesses, customer booking, and member apps",
    actionUrl: "/services/mobile-app-development",
  },
  {
    id: "ui-ux-architecture",
    number: "04",
    title: "App & Screen Design",
    category: "web-apps",
    categoryLabel: "Web & Apps",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Clean, simple screen layouts that make your website or app easy for anyone to use.",
    keyPoints: [
      "See clickable screen previews before we build it",
      "Simple, modern Apple-style clean screens",
      "Designed so customers order without confusion",
    ],
    bestFor: "New software ideas, startups, and website revamps",
    actionUrl: "/services/ui-ux-architecture",
  },

  // ── 2. Digital Marketing & SEO ──
  {
    id: "performance-marketing",
    number: "05",
    title: "Google & Social Media Ads",
    category: "marketing-seo",
    categoryLabel: "Marketing & SEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Targeted advertisements that bring ready buyers straight to your phone, WhatsApp, and showroom.",
    keyPoints: [
      "Show up when people search to buy your product",
      "Target specific cities, districts, and pin codes",
      "Clear weekly reports of every phone call and lead",
    ],
    bestFor: "Businesses wanting steady customer calls every week",
    actionUrl: "/services/performance-marketing",
  },
  {
    id: "seo-geo-ai-search",
    number: "06",
    title: "Google Maps & Search Ranking",
    category: "marketing-seo",
    categoryLabel: "Marketing & SEO",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Get your business listed #1 on Google Maps and search results so nearby customers call you first.",
    keyPoints: [
      "Top 3 rank on Google Maps for local searches",
      "More directions, phone calls, and showroom visits",
      "Free long-term visits without paying for every click",
    ],
    bestFor: "Clinics, showrooms, restaurants, and local services",
    actionUrl: "/services/seo-geo-ai-search",
  },
  {
    id: "social-media-marketing",
    number: "07",
    title: "Instagram Reels & Posts",
    category: "marketing-seo",
    categoryLabel: "Marketing & SEO",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Trending Reels and creative posts that grow your followers and build customer trust in your area.",
    keyPoints: [
      "Eye-catching video Reels and photo posters",
      "Festival greeting designs and special offer cards",
      "Direct response to customer comments and messages",
    ],
    bestFor: "Fashion stores, restaurants, salons, and retail shops",
    actionUrl: "/services/social-media-marketing",
  },
  {
    id: "content-marketing-pr",
    number: "08",
    title: "Business Copywriting",
    category: "marketing-seo",
    categoryLabel: "Marketing & SEO",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Clear, persuasive English and Tamil words for your website, sales brochures, and company profiles.",
    keyPoints: [
      "Professional text that explains what you do simply",
      "Company profiles and product sales catalogs",
      "Fluent English and clean Tamil translations",
    ],
    bestFor: "Manufacturers, exporters, and corporate companies",
    actionUrl: "/services/content-marketing-pr",
  },

  // ── 3. Creative, Branding & Media ──
  {
    id: "brand-identity-logo",
    number: "09",
    title: "Logo & Brand Identity",
    category: "branding-media",
    categoryLabel: "Branding & Media",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Distinctive logo design and matching brand colors that make your business look trusted and established.",
    keyPoints: [
      "3 to 5 original custom logo choices",
      "Ready files for signboards, visiting cards, and bills",
      "100% full copyright ownership transferred to you",
    ],
    bestFor: "New startups, opening new shops, and brand makeovers",
    actionUrl: "/services/brand-identity-logo",
  },
  {
    id: "graphic-design-packaging",
    number: "10",
    title: "Product Packaging & Print",
    category: "branding-media",
    categoryLabel: "Branding & Media",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    simpleDesc: "Eye-catching box packaging, labels, brochures, and banners printed and sized ready for production.",
    keyPoints: [
      "Ready-to-print box and label master files",
      "Clear product details and attractive color schemes",
      "Quick adjustments and proofs within 48 hours",
    ],
    bestFor: "Food products, textiles, retail products, and exports",
    actionUrl: "/services/graphic-design-packaging",
  },
  {
    id: "video-editing-motion",
    number: "11",
    title: "Video Shooting & Editing",
    category: "branding-media",
    categoryLabel: "Branding & Media",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "High-quality video shooting and editing for customer testimonials, product demos, and factory tours.",
    keyPoints: [
      "Sharp 4K video recording with clear audio",
      "Subtitle text in Tamil and English",
      "Short videos ready for WhatsApp and Instagram",
    ],
    bestFor: "Product videos, factory visits, and client reviews",
    actionUrl: "/services/video-editing-motion",
  },
  {
    id: "ecommerce-photography",
    number: "12",
    title: "Product Photography",
    category: "branding-media",
    categoryLabel: "Branding & Media",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Clean, studio-lit photos of your items that make your products look premium on online stores and catalogs.",
    keyPoints: [
      "Pure white backgrounds ready for Amazon & online stores",
      "Attractive lifestyle lighting and close-up detail shots",
      "High-resolution files ready for print and web",
    ],
    bestFor: "Textiles, food items, leather, jewellery, and hardware",
    actionUrl: "/services/ecommerce-photography",
  },

  // ── 4. Security & Cloud ──
  {
    id: "cyber-security-cloud",
    number: "13",
    title: "Fast Hosting & Daily Backup",
    category: "security-cloud",
    categoryLabel: "Security & Cloud",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    simpleDesc: "Reliable cloud hosting with daily backups and safety locks to keep your website fast and never offline.",
    keyPoints: [
      "99.9% uptime so customers can always open your site",
      "Automatic daily backups so your data is never lost",
      "Free SSL security lock badge included",
    ],
    bestFor: "Online stores, school portals, and business websites",
    actionUrl: "/services/cyber-security-cloud",
  },
];

export const SERVICE_FILTER_TABS = [
  { id: "all", label: "All Services (13)" },
  { id: "web-apps", label: "Web & Apps" },
  { id: "marketing-seo", label: "Marketing & SEO" },
  { id: "branding-media", label: "Branding & Media" },
  { id: "security-cloud", label: "Security & Cloud" },
];

interface ServicesIOSCardsGridProps {
  selectedFilter?: string;
  onSelectFilter?: (filterId: string) => void;
}

export const ServicesIOSCardsGrid: React.FC<ServicesIOSCardsGridProps> = ({
  selectedFilter: propFilter,
  onSelectFilter,
}) => {
  const [internalFilter, setInternalFilter] = useState<string>("all");
  const activeFilter = propFilter ?? internalFilter;

  const handleFilterClick = (id: string) => {
    setInternalFilter(id);
    if (onSelectFilter) {
      onSelectFilter(id);
    }
  };

  const filteredServices =
    activeFilter === "all"
      ? ALL_IOS_SERVICES
      : ALL_IOS_SERVICES.filter((s) => s.category === activeFilter);

  return (
    <section id="services-cards" className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F7] scroll-mt-24">
      <Container size="wide">
        {/* iOS Segmented Filter Pill Track (Centered on Light Gray Canvas) */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="p-1 sm:p-1.5 rounded-full bg-[#E5E5EA]/85 backdrop-blur-md border border-black/[0.04] shadow-inner flex flex-wrap justify-center gap-1 max-w-full">
            {SERVICE_FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleFilterClick(tab.id)}
                  className={`cursor-pointer select-none px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#1D1D1F] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                      : "text-[#86868B] font-semibold hover:text-[#1D1D1F]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive 3-Column iOS Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-[28px] sm:rounded-[32px] bg-white border border-black/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* ── Top Full Cover Image ── */}
                <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = "true";
                        target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* ── Bottom Only White Covered UI: Service Name & Simple Explanation ── */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Service Name */}
                    <h3
                      className="text-xl sm:text-[22px] font-bold text-neutral-900 tracking-tight leading-snug mb-2.5"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {service.title}
                    </h3>

                    {/* Few words about the service for simple explanation and understanding */}
                    <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-relaxed font-normal">
                      {service.simpleDesc}
                    </p>
                  </div>

                  {/* iOS Card Action Row */}
                  <div className="pt-5 mt-6 border-t border-black/[0.06] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => openLeadModal(`Inquiry: ${service.title}`)}
                      className="cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-black text-white text-xs font-bold shadow-xs transition-all active:scale-[0.98]"
                    >
                      <span>Enquire</span>
                      <img
                        src="/brand/realresult-mark-transparent.png"
                        alt=""
                        className="w-3.5 h-3.5 object-contain filter drop-shadow-[0_0_3px_rgba(229,180,86,0.6)]"
                      />
                    </button>

                    <Link
                      to={service.actionUrl}
                      className="text-xs sm:text-[13px] font-semibold text-[#0071E3] hover:underline inline-flex items-center gap-1 group/link"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesIOSCardsGrid;
