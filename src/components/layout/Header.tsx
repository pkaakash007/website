import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  Bot,
  Code2,
  MapPin,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
} from "lucide-react";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";

const solutions = [
  {
    title: "Digital Marketing & SEO",
    description: "Technical SEO, Local Maps 3-Pack, Google Ads PPC & Full-Funnel Performance",
    href: "/digital-marketing",
    icon: TrendingUp,
    badge: "Primary Growth",
    isPrimary: true,
  },
  {
    title: "Software & Web Development",
    description: "Custom web applications, React/TypeScript platforms, mobile apps & enterprise ERP",
    href: "/software-development",
    icon: Code2,
    badge: "Engineering",
    isPrimary: true,
  },
  {
    title: "Generative Engine Optimization (GEO)",
    description: "Optimize brand citations & entity discoverability for ChatGPT, Perplexity & AI Overviews",
    href: "/digital-marketing/geo",
    icon: Sparkles,
    badge: "AI Search",
    isPrimary: false,
  },
  {
    title: "Tamil Nadu Hub Network",
    description: "Erode Headquarters, Coimbatore, Chennai, Tiruppur, Salem, Namakkal, Madurai, Trichy, Tirunelveli",
    href: "/locations/tamil-nadu",
    icon: MapPin,
    badge: "Regional Footprint",
    isPrimary: false,
  },
];

const navLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tamil Nadu", href: "/locations/tamil-nadu" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-subtle py-2.5"
          : "bg-canvas/90 backdrop-blur-md border-b border-border/70 py-3.5"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Official Supplied Brand Logo */}
          <BrandLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Digital Marketing Link */}
            <Link
              to="/digital-marketing"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname.startsWith("/digital-marketing")
                  ? "bg-gold-50 text-gold-800 border border-gold-300"
                  : "text-primary hover:text-gold-700 hover:bg-gold-50/60"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-gold-600" />
              <span>Digital Marketing</span>
            </Link>

            {/* Software Development Link */}
            <Link
              to="/software-development"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname.startsWith("/software-development")
                  ? "bg-gold-50 text-gold-800 border border-gold-300"
                  : "text-primary hover:text-gold-700 hover:bg-gold-50/60"
              }`}
            >
              <Code2 className="w-4 h-4 text-gold-600" />
              <span>Software & Apps</span>
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                  solutionsOpen ? "text-primary bg-surface font-semibold" : "text-secondary hover:text-primary hover:bg-surface"
                }`}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
              >
                <span>Capabilities</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>

              {/* Solutions Mega Menu */}
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-3xl border border-border p-4 shadow-floating">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted px-3 pb-2 border-b border-border/80 flex items-center justify-between">
                      <span>Enterprise Capabilities</span>
                      <span className="text-gold-600 font-semibold">Real Result Marketing</span>
                    </div>

                    <div className="mt-2 space-y-1.5">
                      {solutions.map((item) => {
                        const Icon = item.icon;
                        const isMkt = item.isPrimary;
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={`flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 group ${
                              isMkt
                                ? "bg-gold-50/70 border border-gold-200/80 hover:bg-gold-100/70 hover:border-gold-300"
                                : "hover:bg-surface border border-transparent"
                            }`}
                          >
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isMkt
                                  ? "bg-gold text-black shadow-gold-subtle"
                                  : "bg-surface text-secondary group-hover:text-primary group-hover:bg-white"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-primary">
                                  {item.title}
                                </span>
                                <span
                                  className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full ${
                                    isMkt
                                      ? "bg-gold text-black font-bold"
                                      : "bg-surface border border-border text-muted"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs text-secondary mt-0.5 leading-relaxed line-clamp-1">
                                {item.description}
                              </p>
                            </div>
                            <ArrowRight
                              className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${
                                isMkt ? "text-gold-700" : "text-muted group-hover:text-primary"
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-border flex items-center justify-between px-3 text-xs">
                      <span className="text-muted">Explore our Tamil Nadu city footprint</span>
                      <Link
                        to="/locations/tamil-nadu"
                        onClick={() => setSolutionsOpen(false)}
                        className="text-gold-700 hover:text-gold-800 font-semibold flex items-center gap-1"
                      >
                        All Regional Hubs
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-surface font-semibold"
                    : "text-secondary hover:text-primary hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="gold"
              size="sm"
              withArrow
              onClick={() => openLeadModal("header-cta")}
              className="font-bold tracking-tight text-xs uppercase px-5 py-2.5 shadow-gold-subtle cursor-pointer"
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="gold"
              size="sm"
              onClick={() => openLeadModal("mobile-header-cta")}
              className="text-xs px-3 py-1.5 font-bold uppercase tracking-wider cursor-pointer"
            >
              Consultation
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-primary hover:bg-surface transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-canvas/98 backdrop-blur-xl border-t border-border z-50 overflow-y-auto px-4 py-6">
          <div className="space-y-6 max-w-lg mx-auto">
            {/* Primary Divisions */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-gold-700 font-bold mb-2 px-2">
                Core Divisions
              </div>
              <Link
                to="/digital-marketing"
                className="flex items-center justify-between p-4 rounded-2xl bg-gold-50 border border-gold-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold text-black flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-base">Digital Marketing & SEO</div>
                    <div className="text-xs text-secondary">Search, Google Ads, Local SEO, GEO</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gold-700" />
              </Link>

              <Link
                to="/software-development"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-surface text-primary flex items-center justify-center font-bold">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-base">Software & Apps</div>
                    <div className="text-xs text-secondary">Web, Mobile, SaaS & Enterprise AI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted" />
              </Link>
            </div>

            {/* General Navigation */}
            <div className="pt-2 border-t border-border">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="p-3 text-center rounded-xl bg-white border border-border text-sm font-medium text-primary hover:bg-surface"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-4">
              <Button
                variant="gold"
                size="lg"
                className="w-full cursor-pointer"
                withArrow
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadModal("mobile-menu-cta");
                }}
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
