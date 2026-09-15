import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageCircle,
  Layers,
} from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { getWhatsAppUrl, REAL_RESULT_CONFIG } from "@/config";

const HeaderLinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
  </svg>
);

const HeaderInstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// ─── Dropdown Data Definitions (Apple.com Design System) ─────────────────────

export interface DropdownColItem {
  label: string;
  href?: string;
  isModal?: boolean;
  isWhatsApp?: boolean;
  isPhone?: boolean;
  badge?: string;
}

export interface NavDropdownData {
  col1: {
    title: string;
    items: DropdownColItem[];
    footerLink?: { label: string; href: string };
  };
  col2: {
    title: string;
    items: DropdownColItem[];
  };
  col3: {
    title: string;
    items: DropdownColItem[];
  };
}

export const DROPDOWN_DATA: Record<string, NavDropdownData> = {
  services: {
    col1: {
      title: "Explore Services",
      items: [
        { label: "Website Design", href: "/application-development" },
        { label: "Ecommerce Website", href: "/application-development" },
        { label: "Mobile App Development", href: "/application-development" },
        { label: "UI/UX Designing", href: "/application-development" },
        { label: "Digital Marketing", href: "/digital-marketing" },
        { label: "Search Engine Optimization", href: "/digital-marketing/seo" },
        { label: "Social Media Marketing", href: "/digital-marketing/social-media-marketing" },
        { label: "Video Editing & Production", href: "/services#video-editing" },
      ],
      footerLink: { label: "Explore All 12 Services", href: "/services" },
    },
    col2: {
      title: "Creative & Branding",
      items: [
        { label: "Logo Design & Branding", href: "/services#logo-design" },
        { label: "Graphic Design", href: "/services#graphic-design" },
        { label: "Ecommerce Photography", href: "/services#ecommerce-photography" },
        { label: "Cyber Security Audits", href: "/application-development" },
        { label: "Content Marketing & PR", href: "/digital-marketing/content-marketing" },
        { label: "Cloud & Backend Architecture", href: "/application-development" },
      ],
    },
    col3: {
      title: "Service Delivery",
      items: [
        { label: "Free Architecture Consultation", isModal: true },
        { label: "Sub-Second Speed SLA Guarantees", href: "/application-development" },
        { label: "Direct WhatsApp Engineering Desk", isWhatsApp: true },
        { label: "Verified Portfolio & Case Studies", href: "/services" },
      ],
    },
  },

  marketing: {
    col1: {
      title: "Explore Marketing",
      items: [
        { label: "Google Ads & PPC", href: "/digital-marketing" },
        { label: "Search Engine Optimization", href: "/digital-marketing/seo" },
        { label: "Social Media Marketing", href: "/digital-marketing/social-media-marketing" },
        { label: "Instagram & Meta Ads", href: "/digital-marketing" },
        { label: "Google Maps & Local SEO", href: "/digital-marketing/seo" },
        { label: "Content Marketing & PR", href: "/digital-marketing/content-marketing" },
        { label: "Conversion Optimization", href: "/digital-marketing" },
      ],
      footerLink: { label: "Explore Marketing Hub", href: "/digital-marketing" },
    },
    col2: {
      title: "Growth Channels",
      items: [
        { label: "Direct Phone Call Leads", href: "/digital-marketing" },
        { label: "WhatsApp Lead Generation", href: "/digital-marketing" },
        { label: "Tamil Nadu Geo-Targeting", href: "/digital-marketing#reach" },
        { label: "Ecommerce Ad Scaling", href: "/digital-marketing" },
        { label: "Short-Form Video & Reels Ads", href: "/services#video-editing" },
        { label: "Local Google 3-Pack Ranking", href: "/digital-marketing/seo" },
      ],
    },
    col3: {
      title: "Helpful Topics",
      items: [
        { label: "Free Website & SEO Audit", isModal: true },
        { label: "Transparent Weekly Ad Reporting", href: "/digital-marketing#faq" },
        { label: "Marketing FAQs & Timelines", href: "/digital-marketing#faq" },
        { label: "Chat with Marketing Strategist", isWhatsApp: true },
      ],
    },
  },

  "app-dev": {
    col1: {
      title: "Explore Engineering",
      items: [
        { label: "iOS Mobile Applications", href: "/application-development" },
        { label: "Android Mobile Applications", href: "/application-development" },
        { label: "Custom Web Applications", href: "/application-development" },
        { label: "Ecommerce Platforms", href: "/application-development" },
        { label: "UI/UX & Figma Prototypes", href: "/application-development" },
        { label: "Cloud APIs & Microservices", href: "/application-development" },
        { label: "Enterprise SaaS Platforms", href: "/application-development" },
      ],
      footerLink: { label: "Explore Application Engineering", href: "/application-development" },
    },
    col2: {
      title: "Platforms & Frameworks",
      items: [
        { label: "Apple iOS Ecosystem (Swift / SwiftUI)", href: "/application-development" },
        { label: "Android Ecosystem (Kotlin / Jetpack)", href: "/application-development" },
        { label: "React, Next.js & TypeScript Architecture", href: "/application-development" },
        { label: "UPI & Razorpay Payment Integrations", href: "/application-development" },
        { label: "App Store & Play Store Submissions", href: "/application-development" },
        { label: "Biometric Auth & Push Notifications", href: "/application-development" },
      ],
    },
    col3: {
      title: "Engineering Standards",
      items: [
        { label: "100% Client Source Code IP Ownership", href: "/about" },
        { label: "60fps Native UI & High Performance", href: "/application-development" },
        { label: "Interactive Modern Tech Stack", href: "/application-development" },
        { label: "Request Technical Quotation", isModal: true },
      ],
    },
  },

  about: {
    col1: {
      title: "Explore Real Result",
      items: [
        { label: "Company Story & Origins", href: "/about#story" },
        { label: "Executive Leadership Team", href: "/about#leadership" },
        { label: "Core Operating Values", href: "/about#values" },
        { label: "Scale & Verified Milestones", href: "/about#stats" },
        { label: "Global & Regional Presence", href: "/contact" },
      ],
      footerLink: { label: "Explore Company Profile", href: "/about" },
    },
    col2: {
      title: "Operating Principles",
      items: [
        { label: "Zero-Bullshit Transparent Metrics", href: "/about#values" },
        { label: "Engineering-First Quality Standards", href: "/about#values" },
        { label: "No Code Lock-In Policy", href: "/about#values" },
        { label: "Client Privacy & Security Protocols", href: "/about" },
        { label: "Careers & Engineering Culture", href: "/about" },
      ],
    },
    col3: {
      title: "Corporate Information",
      items: [
        { label: "Erode Global HQ & Regional Desks", href: "/contact" },
        { label: "Corporate GST & Registration", href: "/contact" },
        { label: "Schedule Strategic Partnership Briefing", isModal: true },
        { label: "Direct Founder Discussion Desk", isWhatsApp: true },
      ],
    },
  },

  contact: {
    col1: {
      title: "Get in Touch",
      items: [
        { label: "Direct WhatsApp Support", isWhatsApp: true },
        { label: "Phone Consultation Call", isPhone: true },
        { label: "Initiate Project Scoping", href: "/contact" },
        { label: "Erode Global Headquarters", href: "/contact" },
        { label: "Coimbatore Technology Desk", href: "/contact" },
        { label: "Chennai Regional Office", href: "/contact" },
      ],
      footerLink: { label: "Explore All Contact Channels", href: "/contact" },
    },
    col2: {
      title: "Direct Assistance",
      items: [
        { label: "Request a 15-Min Callback", isModal: true },
        { label: "Technical Support Desk", href: "/contact" },
        { label: "Billing & Accounts Inquiries", href: "/contact" },
        { label: "Career & Internship Inquiries", href: "/contact" },
      ],
    },
    col3: {
      title: "Office Hubs",
      items: [
        { label: "Perundurai Road, Erode (HQ)", href: "/contact" },
        { label: "Avinashi Road, Coimbatore", href: "/contact" },
        { label: "OMR IT Corridor, Chennai", href: "/contact" },
        { label: "Hours: Mon - Sat (9:00 AM - 7:00 PM)", href: "/contact" },
      ],
    },
  },

  industries: {
    col1: {
      title: "Explore Industries",
      items: [
        { label: "Healthcare Digital Marketing", href: "/industries/healthcare" },
        { label: "B2B Digital Marketing", href: "/industries/b2b" },
        { label: "Ecommerce & D2C Brands", href: "/industries/ecommerce" },
        { label: "Finance & BFSI Marketing", href: "/industries/finance" },
        { label: "Real Estate Digital Marketing", href: "/industries/real-estate" },
        { label: "Education Digital Marketing", href: "/industries/education" },
      ],
      footerLink: { label: "Explore All 12 Industry Playbooks", href: "/industries" },
    },
    col2: {
      title: "Specialized Verticals",
      items: [
        { label: "Skincare & Beauty Marketing", href: "/industries/skincare-beauty" },
        { label: "Electric Vehicles (EV)", href: "/industries/ev" },
        { label: "Automotive & Dealerships", href: "/industries/automotive" },
        { label: "FMCG Brand Marketing", href: "/industries/fmcg" },
        { label: "Home Decor & Furnishings", href: "/industries/home-decor" },
        { label: "Travel & Hospitality", href: "/industries/travel-tourism" },
      ],
    },
    col3: {
      title: "Vertical Practice",
      items: [
        { label: "Free Industry Strategy Consultation", isModal: true },
        { label: "Healthcare Growth & Compliance Audit", href: "/industries/healthcare" },
        { label: "Direct WhatsApp Specialist Desk", isWhatsApp: true },
        { label: "Explore All 12 Playbooks", href: "/industries" },
      ],
    },
  },
};

interface NavLinkConfig {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownKey?: string;
}

const NAV_LINKS: NavLinkConfig[] = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Services", href: "/services", hasDropdown: true, dropdownKey: "services" },
  { label: "Digital Marketing", href: "/digital-marketing", hasDropdown: true, dropdownKey: "marketing" },
  { label: "App Development", href: "/application-development", hasDropdown: true, dropdownKey: "app-dev" },
  { label: "Industry", href: "/industries", hasDropdown: true, dropdownKey: "industries" },
  { label: "About", href: "/about", hasDropdown: true, dropdownKey: "about" },
  { label: "Contact", href: "/contact", hasDropdown: true, dropdownKey: "contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const closeDropdown = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeDropdown();
    setMobileOpen(false);
  };

  // Close dropdown on scroll or Escape key
  useEffect(() => {
    if (!activeDropdown) return;

    const onScrollClose = () => closeDropdown();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdown();
    };

    window.addEventListener("scroll", onScrollClose, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScrollClose);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDropdown]);

  const handleNavMouseEnter = (dropdownKey?: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (dropdownKey) {
      setActiveDropdown(dropdownKey);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleNavMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const cancelCloseTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Helper for rendering custom links in dropdown
  const renderItemLink = (
    item: DropdownColItem,
    className: string,
    keySuffix: string
  ) => {
    if (item.isModal) {
      return (
        <button
          key={`${item.label}-${keySuffix}`}
          type="button"
          onClick={() => {
            closeDropdown();
            openLeadModal("header-dropdown");
          }}
          className={`${className} text-left cursor-pointer`}
        >
          {item.label}
        </button>
      );
    }

    if (item.isWhatsApp) {
      return (
        <a
          key={`${item.label}-${keySuffix}`}
          href={getWhatsAppUrl(
            `Hello ${REAL_RESULT_CONFIG.shortName} team, I would like to inquire regarding ${item.label}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeDropdown}
          className={`${className} inline-flex items-center gap-1.5`}
        >
          <span>{item.label}</span>
          <MessageCircle className="w-3 h-3 text-[#25D366] shrink-0" />
        </a>
      );
    }

    if (item.isPhone) {
      return (
        <a
          key={`${item.label}-${keySuffix}`}
          href={`tel:${REAL_RESULT_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
          onClick={closeDropdown}
          className={`${className} inline-flex items-center gap-1.5`}
        >
          <span>{item.label}</span>
          <Phone className="w-3 h-3 text-[#007AFF] shrink-0" />
        </a>
      );
    }

    return (
      <Link
        key={`${item.label}-${keySuffix}`}
        to={item.href || "/"}
        onClick={closeDropdown}
        className={className}
      >
        {item.label}
      </Link>
    );
  };

  const currentData = activeDropdown ? DROPDOWN_DATA[activeDropdown] : null;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      onMouseLeave={handleNavMouseLeave}
      style={{
        background: isScrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: isScrolled ? "1px solid rgba(197,160,89,0.18)" : "1px solid rgba(197,160,89,0.12)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.04)" : "none",
      }}
    >
      {/* ── Desktop Navigation Bar ── */}
      <div className="hidden lg:flex items-center justify-between px-8 xl:px-12 h-16">
        {/* LEFT: Logo */}
        <Link
          to="/"
          className="shrink-0 flex items-center cursor-pointer"
          onMouseEnter={() => handleNavMouseEnter(undefined)}
          onClick={handleScrollToTop}
          title="Go to Top / Home"
        >
          <BrandLogo size="md" theme="light" />
        </Link>

        {/* RIGHT: Nav links + Apple-Style Dropdown + CTA */}
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isCurrentActive = activeDropdown === link.dropdownKey;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.href}
                  className="py-2"
                  onMouseEnter={() => handleNavMouseEnter(link.dropdownKey)}
                  onMouseLeave={handleNavMouseLeave}
                >
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-1.5 transition-colors duration-150 px-3 py-2 cursor-pointer"
                    style={{
                      fontSize: "13.5px",
                      fontWeight: isActive(link.href) || isCurrentActive ? 600 : 500,
                      color:
                        isActive(link.href) || isCurrentActive
                          ? "#C5A059"
                          : "rgba(0,0,0,0.70)",
                      background: "transparent",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    <span>{link.label}</span>
                  </Link>
                </div>
              );
            }

            // Home or plain direct link (no dropdown)
            return (
              <Link
                key={link.href}
                to={link.href}
                onMouseEnter={() => handleNavMouseEnter(undefined)}
                onClick={link.href === "/" ? handleScrollToTop : undefined}
                className="transition-colors duration-150 px-3 py-2 cursor-pointer"
                style={{
                  fontSize: "13.5px",
                  fontWeight: isActive(link.href) ? 600 : 500,
                  color: isActive(link.href) ? "#C5A059" : "rgba(0,0,0,0.70)",
                  background: "transparent",
                  letterSpacing: "-0.005em",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* CTA Button */}
          <Button
            variant="primary"
            size="sm"
            onClick={() => openLeadModal("header-cta")}
            onMouseEnter={() => handleNavMouseEnter(undefined)}
            className="ml-1.5"
          >
            Free Consultation
          </Button>

          {/* Right Edge: Vertical Divider */}
          <div className="h-5 w-px bg-neutral-200/90 mx-1 xl:mx-2 shrink-0" />

          {/* Right Edge: Official Phone Number */}
          <a
            href={`tel:${REAL_RESULT_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
            onMouseEnter={() => handleNavMouseEnter(undefined)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12.5px] xl:text-[13px] font-semibold text-neutral-800 hover:text-[#0071e3] hover:bg-black/[0.04] transition-colors shrink-0 tracking-tight"
            title={`Call Real Result: ${REAL_RESULT_CONFIG.contact.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#0071e3] shrink-0" />
            <span className="whitespace-nowrap">{REAL_RESULT_CONFIG.contact.phone}</span>
          </a>

          {/* Right Edge: LinkedIn & Instagram Icons */}
          <div className="flex items-center gap-0.5 shrink-0" onMouseEnter={() => handleNavMouseEnter(undefined)}>
            <a
              href="https://www.linkedin.com/company/realresultmarketing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Real Result on LinkedIn"
              title="LinkedIn"
              className="p-1.5 rounded-lg text-neutral-700 hover:text-[#0A66C2] hover:bg-black/[0.04] transition-colors"
            >
              <HeaderLinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/realresultmarketing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Real Result on Instagram"
              title="Instagram"
              className="p-1.5 rounded-lg text-neutral-700 hover:text-[#E4405F] hover:bg-black/[0.04] transition-colors"
            >
              <HeaderInstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Apple.com 3-Column Navigation Dropdown Panel ── */}
      <div
        className={`hidden lg:block absolute top-full left-0 right-0 w-full z-50 transition-all duration-150 ease-out ${
          activeDropdown && currentData
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
      >
        {/* Full-width white background with Apple.com styling */}
        <div
          className="w-full border-b border-black/[0.08] shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
          style={{
            backgroundColor: "#FFFFFF",
            background: "#FFFFFF",
          }}
          onMouseEnter={cancelCloseTimeout}
          onMouseLeave={handleNavMouseLeave}
        >
          {currentData && (
            <div className="max-w-6xl mx-auto px-10 xl:px-16 pt-8 pb-10">
              <div className="grid grid-cols-12 gap-8 items-start">
                {/* ── Column 1: Explore Header & Prominent Bold Typography ── */}
                <div className="col-span-5 pr-8 border-r border-neutral-100">
                  <p className="text-[12px] font-semibold text-neutral-400 mb-3 tracking-normal">
                    {currentData.col1.title}
                  </p>
                  <div className="flex flex-col space-y-1">
                    {currentData.col1.items.map((item) =>
                      renderItemLink(
                        item,
                        "text-[21px] xl:text-[23px] font-bold text-neutral-900 hover:text-[#0071e3] transition-colors leading-[1.25] tracking-tight block py-0.5",
                        "col1"
                      )
                    )}
                  </div>
                  {currentData.col1.footerLink && (
                    <div className="mt-5 pt-3.5 border-t border-neutral-100">
                      <Link
                        to={currentData.col1.footerLink.href}
                        onClick={closeDropdown}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-neutral-500 hover:text-[#0071e3] transition-colors"
                      >
                        <span>{currentData.col1.footerLink.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* ── Column 2: Specific Categories / Capabilities ── */}
                <div className="col-span-4 px-4">
                  <p className="text-[12px] font-semibold text-neutral-400 mb-3 tracking-normal">
                    {currentData.col2.title}
                  </p>
                  <div className="flex flex-col space-y-2">
                    {currentData.col2.items.map((item) =>
                      renderItemLink(
                        item,
                        "text-[13.5px] font-semibold text-neutral-800 hover:text-[#0071e3] transition-colors block py-0.5",
                        "col2"
                      )
                    )}
                  </div>
                </div>

                {/* ── Column 3: Helpful Topics / Resources ── */}
                <div className="col-span-3 pl-4">
                  <p className="text-[12px] font-semibold text-neutral-400 mb-3 tracking-normal">
                    {currentData.col3.title}
                  </p>
                  <div className="flex flex-col space-y-2">
                    {currentData.col3.items.map((item) =>
                      renderItemLink(
                        item,
                        "text-[13.5px] font-medium text-neutral-600 hover:text-black transition-colors block py-0.5",
                        "col3"
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Ambient background scrim below dropdown */}
        <div
          className="w-full h-screen bg-black/20 backdrop-blur-[2px] transition-opacity duration-150 cursor-default"
          onMouseEnter={closeDropdown}
          onClick={closeDropdown}
        />
      </div>

      {/* ── Mobile Navigation Bar ── */}
      <div className="lg:hidden flex items-center justify-between px-5 h-14">
        <Link to="/" onClick={handleScrollToTop} className="cursor-pointer" title="Go to Top / Home">
          <BrandLogo size="sm" theme="light" />
        </Link>
        <div className="flex items-center gap-1">
          <a
            href={`tel:${REAL_RESULT_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="p-2 rounded-xl transition-colors cursor-pointer text-neutral-700 hover:text-[#0071e3] hover:bg-black/[0.06]"
            aria-label="Call Real Result"
            title={`Call ${REAL_RESULT_CONFIG.contact.phone}`}
          >
            <Phone className="w-4 h-4 text-[#0071e3]" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl cursor-pointer transition-colors"
            style={{ background: mobileOpen ? "rgba(0,0,0,0.06)" : "transparent" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-black" />
            ) : (
              <Menu className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer with Accordion Support for all 5 Dropdowns ── */}
      {mobileOpen && (
        <div
          className="lg:hidden max-h-[85vh] overflow-y-auto"
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            borderTop: "0.5px solid rgba(0,0,0,0.10)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown && link.dropdownKey) {
                const sectionData = DROPDOWN_DATA[link.dropdownKey];
                const isOpen = mobileOpenSection === link.dropdownKey;

                return (
                  <div key={link.href} className="space-y-1">
                    <button
                      onClick={() =>
                        setMobileOpenSection(isOpen ? null : link.dropdownKey!)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-colors text-left cursor-pointer"
                      style={{
                        fontSize: "15px",
                        fontWeight: isActive(link.href) || isOpen ? 600 : 500,
                        color:
                          isActive(link.href) || isOpen
                            ? "#000000"
                            : "rgba(0,0,0,0.70)",
                        background:
                          isActive(link.href) || isOpen
                            ? "rgba(0,0,0,0.055)"
                            : "transparent",
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-black" : "opacity-60"
                        }`}
                      />
                    </button>

                    {/* Mobile Section Accordion */}
                    {isOpen && sectionData && (
                      <div className="p-3 space-y-2 bg-neutral-50 rounded-2xl border border-neutral-200/70 my-1">
                        <div className="px-2 pt-1 pb-0.5">
                          <p className="text-[11px] font-bold text-neutral-400 tracking-wide uppercase">
                            {sectionData.col1.title}
                          </p>
                        </div>
                        <div className="space-y-1">
                          {sectionData.col1.items.map((item) => (
                            <div key={item.label}>
                              {renderItemLink(
                                item,
                                "block px-2.5 py-1.5 rounded-xl text-neutral-900 hover:bg-white text-[14px] font-semibold",
                                "mobile-col1"
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="px-2 pt-2 pb-0.5 border-t border-neutral-200/60">
                          <p className="text-[11px] font-bold text-neutral-400 tracking-wide uppercase">
                            {sectionData.col2.title}
                          </p>
                        </div>
                        <div className="space-y-1">
                          {sectionData.col2.items.map((item) => (
                            <div key={item.label}>
                              {renderItemLink(
                                item,
                                "block px-2.5 py-1.5 rounded-xl text-neutral-700 hover:bg-white text-[13px] font-medium",
                                "mobile-col2"
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-neutral-200/60">
                          <Link
                            to={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[12.5px] font-semibold text-[#0071e3]"
                          >
                            <span>Go to {link.label} Page</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Home or standard direct link
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={link.href === "/" ? handleScrollToTop : () => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 rounded-2xl transition-colors cursor-pointer"
                  style={{
                    fontSize: "15px",
                    fontWeight: isActive(link.href) ? 600 : 500,
                    color: isActive(link.href) ? "#000000" : "rgba(0,0,0,0.70)",
                    background: isActive(link.href)
                      ? "rgba(0,0,0,0.055)"
                      : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Consultation CTA */}
            <div className="pt-3 pb-1">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileOpen(false);
                  openLeadModal("mobile-header-cta");
                }}
                className="w-full"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile Phone & Social Channels Row */}
            <div className="pt-3 pb-2 mt-2 border-t border-neutral-200/80 flex items-center justify-between px-1">
              <a
                href={`tel:${REAL_RESULT_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#0071e3]"
              >
                <Phone className="w-3.5 h-3.5 text-[#0071e3]" />
                <span>{REAL_RESULT_CONFIG.contact.phone}</span>
              </a>

              <div className="flex items-center gap-1">
                <a
                  href="https://www.linkedin.com/company/realresultmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Real Result on LinkedIn"
                  className="p-2 rounded-lg text-neutral-700 hover:text-[#0A66C2] hover:bg-black/[0.05]"
                >
                  <HeaderLinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/realresultmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Real Result on Instagram"
                  className="p-2 rounded-lg text-neutral-700 hover:text-[#E4405F] hover:bg-black/[0.05]"
                >
                  <HeaderInstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
