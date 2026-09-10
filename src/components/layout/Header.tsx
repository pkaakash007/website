import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageCircle,
  Search,
} from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { openSpotlightSearch } from "@/components/common/MacOSSpotlightSearch";
import { getWhatsAppUrl, REAL_RESULT_CONFIG } from "@/config";

// ─── Dropdown Data Definitions (Apple.com Design System) ─────────────────────

export interface DropdownColItem {
  label: string;
  href?: string;
  isModal?: boolean;
  isWhatsApp?: boolean;
  isPhone?: boolean;
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
    footerLink?: { label: string; href: string };
  };
  col3: {
    title: string;
    items: DropdownColItem[];
    footerLink?: { label: string; href: string };
  };
}

export const DROPDOWN_DATA: Record<string, NavDropdownData> = {
  services: {
    col1: {
      title: "Digital Marketing (17 Services)",
      items: [
        { label: "Marketing Strategy", href: "/services/marketing-strategy" },
        { label: "Search Engine Optimization (SEO)", href: "/services/seo" },
        { label: "AI Search Optimization (AEO & GEO)", href: "/services/ai-search-optimization" },
        { label: "Local SEO", href: "/services/local-seo" },
        { label: "Paid Search & PPC", href: "/services/paid-search" },
        { label: "Paid Social & Video Ads", href: "/services/paid-social" },
        { label: "Social Media Management", href: "/services/social-media" },
        { label: "Content Marketing & Copywriting", href: "/services/content-marketing" },
      ],
      footerLink: { label: "Explore All 17 Digital Marketing Services", href: "/services/digital-marketing" },
    },
    col2: {
      title: "Calling & Messaging (5 Channels)",
      items: [
        { label: "Bulk Voice Call Services", href: "/services/bulk-voice-calls" },
        { label: "Real-Time AI Calling Services", href: "/services/real-time-ai-calling" },
        { label: "Bulk SMS Services", href: "/services/bulk-sms" },
        { label: "RCS Business Messaging", href: "/services/rcs-messaging" },
        { label: "WhatsApp Marketing & Messaging", href: "/services/whatsapp-marketing" },
        { label: "B2B Lead Generation & Funnels", href: "/services/lead-generation" },
        { label: "Conversion Rate Optimization (CRO)", href: "/services/conversion-optimization" },
      ],
      footerLink: { label: "Explore Calling & Messaging Hub", href: "/services/calling-messaging" },
    },
    col3: {
      title: "Websites, Apps & Software (12 Systems)",
      items: [
        { label: "Website Design & Development", href: "/services/website-development" },
        { label: "Ecommerce Development", href: "/services/ecommerce-development" },
        { label: "UI/UX & Product Design", href: "/services/ui-ux-design" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "Custom Software Development", href: "/services/custom-software" },
        { label: "CRM, ERP & Business Systems", href: "/services/crm-erp" },
        { label: "Workflow & Business Automation", href: "/services/workflow-automation" },
      ],
      footerLink: { label: "Explore All 34 Services", href: "/services" },
    },
  },

  about: {
    col1: {
      title: "Company",
      items: [
        { label: "About Real Result", href: "/about" },
        { label: "How We Work (5-Step Process)", href: "/how-we-work" },
        { label: "Industries & Business Types", href: "/industries" },
        { label: "Ways to Work Together", href: "/engagement" },
      ],
      footerLink: { label: "Explore Company Profile", href: "/about" },
    },
    col2: {
      title: "Work & Proof",
      items: [
        { label: "Our Work & Case Studies", href: "/work" },
        { label: "Real Result FAQs", href: "/faq" },
        { label: "Insights & Articles", href: "/insights" },
        { label: "Follow-Up After Enquiry", href: "/insights/after-the-enquiry" },
      ],
      footerLink: { label: "View Our Work", href: "/work" },
    },
    col3: {
      title: "Direct Action",
      items: [
        { label: "Let’s Talk Growth", href: "/contact" },
        { label: "Plan My Campaign", href: "/contact/?interest=calling-messaging" },
        { label: "Discuss My Project", href: "/contact/?interest=development" },
        { label: "Direct WhatsApp Line", isWhatsApp: true },
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
  { label: "Services", href: "/services", hasDropdown: true, dropdownKey: "services" },
  { label: "Growth Solutions", href: "/solutions", hasDropdown: false },
  { label: "Our Work", href: "/work", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: true, dropdownKey: "about" },
  { label: "Insights", href: "/insights", hasDropdown: false },
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
          className="shrink-0 flex items-center"
          onMouseEnter={() => handleNavMouseEnter(undefined)}
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
                    className="inline-flex items-center gap-1.5 transition-colors duration-150 px-3.5 py-2 rounded-lg cursor-pointer"
                    style={{
                      fontSize: "13.5px",
                      fontWeight: isActive(link.href) || isCurrentActive ? 600 : 500,
                      color:
                        isActive(link.href) || isCurrentActive
                          ? "#C5A059"
                          : "rgba(0,0,0,0.70)",
                      background:
                        isActive(link.href) || isCurrentActive
                          ? "rgba(197,160,89,0.08)"
                          : "transparent",
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
                className="transition-colors duration-150 px-3.5 py-2 rounded-lg"
                style={{
                  fontSize: "13.5px",
                  fontWeight: isActive(link.href) ? 600 : 500,
                  color: isActive(link.href) ? "#C5A059" : "rgba(0,0,0,0.70)",
                  background: isActive(link.href) ? "rgba(197,160,89,0.08)" : "transparent",
                  letterSpacing: "-0.005em",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Apple Spotlight Search Button */}
          <button
            type="button"
            onClick={openSpotlightSearch}
            onMouseEnter={() => handleNavMouseEnter(undefined)}
            className="p-2 rounded-lg transition-colors cursor-pointer ml-1 text-neutral-600 hover:text-black hover:bg-black/[0.05]"
            title="Spotlight Search"
            aria-label="Open Spotlight Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* CTA Button */}
          <Link
            to="/contact/"
            onMouseEnter={() => handleNavMouseEnter(undefined)}
            className="ml-2 inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] transition-colors rounded-full shadow-sm"
          >
            Let’s Talk Growth
          </Link>
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
                  {currentData.col2.footerLink && (
                    <div className="mt-5 pt-3.5 border-t border-neutral-100">
                      <Link
                        to={currentData.col2.footerLink.href}
                        onClick={closeDropdown}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-neutral-500 hover:text-[#0071e3] transition-colors"
                      >
                        <span>{currentData.col2.footerLink.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
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
                  {currentData.col3.footerLink && (
                    <div className="mt-5 pt-3.5 border-t border-neutral-100">
                      <Link
                        to={currentData.col3.footerLink.href}
                        onClick={closeDropdown}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-neutral-500 hover:text-[#0071e3] transition-colors"
                      >
                        <span>{currentData.col3.footerLink.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
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
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <BrandLogo size="sm" theme="light" />
        </Link>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={openSpotlightSearch}
            className="p-2 rounded-xl transition-colors cursor-pointer text-neutral-700 hover:text-black hover:bg-black/[0.06]"
            aria-label="Open Search"
          >
            <Search className="w-5 h-5" />
          </button>
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
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 rounded-2xl transition-colors"
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
              <Link
                to="/contact/"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] transition-colors rounded-xl shadow-sm"
              >
                Let’s Talk Growth
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
