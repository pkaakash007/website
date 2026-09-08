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
    badge: "Major Page",
    isPrimary: true,
  },
  {
    title: "Application Development",
    description: "Custom web applications, React/TypeScript platforms, mobile apps & enterprise ERP",
    href: "/application-development",
    icon: Code2,
    badge: "Major Page",
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

const majorNavLinks = [
  { label: "Home", href: "/" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Application Development", href: "/application-development" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const secondaryLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tamil Nadu", href: "/locations/tamil-nadu" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
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
          {/* Desktop Navigation: 5 Major Pages First-Class */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* 1. Home */}
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === "/"
                  ? "bg-gold-50 text-gold-900 border border-gold-300"
                  : "text-primary hover:text-gold-700 hover:bg-gold-50/60"
              }`}
            >
              Home
            </Link>

            {/* 2. Digital Marketing */}
            <Link
              to="/digital-marketing"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname.startsWith("/digital-marketing")
                  ? "bg-gold-50 text-gold-900 border border-gold-300"
                  : "text-primary hover:text-gold-700 hover:bg-gold-50/60"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-gold-600" />
              <span>Digital Marketing</span>
            </Link>

            {/* 3. Application Development */}
            <Link
              to="/application-development"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname.startsWith("/application-development") || pathname.startsWith("/software-development")
                  ? "bg-gold-50 text-gold-900 border border-gold-300"
                  : "text-primary hover:text-gold-700 hover:bg-gold-50/60"
              }`}
            >
              <Code2 className="w-4 h-4 text-gold-600" />
              <span>Application Development</span>
            </Link>

            {/* 4. About */}
            <Link
              to="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === "/about"
                  ? "bg-gold-50 text-gold-900 border border-gold-300"
                  : "text-primary hover:text-gold-700 hover:bg-gold-50/60"
              }`}
            >
              About
            </Link>

            {/* 5. Contact */}
            <Link
              to="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === "/contact"
                  ? "bg-gold-50 text-gold-900 border border-gold-300"
                  : "text-primary hover:text-gold-700 hover:bg-gold-50/60"
              }`}
            >
              Contact
            </Link>

            {/* More / Capabilities Dropdown */}
            <div
              className="relative ml-1"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                  solutionsOpen ? "text-primary bg-surface font-semibold" : "text-muted hover:text-primary hover:bg-surface"
                }`}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown */}
              {solutionsOpen && (
                <div className="absolute top-full right-0 pt-2 w-[340px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl border border-border p-4 shadow-xl">
                    <div className="text-xs font-semibold text-secondary px-2 pb-2 border-b border-border/80 flex items-center justify-between">
                      <span>Explore Real Result</span>
                    </div>

                    <div className="mt-2 space-y-1">
                      {secondaryLinks.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-center justify-between p-2.5 rounded-xl text-xs font-medium text-primary hover:bg-surface hover:text-gold-700 transition-colors"
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-muted" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="gold"
              size="sm"
              withArrow
              onClick={() => openLeadModal("header-cta")}
              className="font-semibold text-xs px-5 py-2.5 shadow-sm cursor-pointer"
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
              className="text-xs px-3.5 py-1.5 font-semibold cursor-pointer"
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
            {/* Top 5 Major Pages */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gold-800 mb-2 px-2">
                Major Pages
              </div>
              <Link
                to="/"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-bold text-primary text-sm">1. Home Page</div>
                <ArrowRight className="w-4 h-4 text-gold-700" />
              </Link>
              <Link
                to="/digital-marketing"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-gold-50 border border-gold-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-gold-700" />
                  <div className="font-bold text-primary text-sm">2. Digital Marketing</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gold-700" />
              </Link>
              <Link
                to="/application-development"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-blue-700" />
                  <div className="font-bold text-primary text-sm">3. Application Development</div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </Link>
              <Link
                to="/about"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-bold text-primary text-sm">4. About</div>
                <ArrowRight className="w-4 h-4 text-gold-700" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-bold text-primary text-sm">5. Contact</div>
                <ArrowRight className="w-4 h-4 text-gold-700" />
              </Link>
            </div>

            {/* Secondary Hubs */}
            <div className="pt-2 border-t border-border">
              <div className="text-xs font-semibold text-muted mb-2 px-2">
                Additional Hubs
              </div>
              <div className="grid grid-cols-2 gap-2">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="p-3 text-center rounded-xl bg-white border border-border text-xs font-medium text-primary hover:bg-surface"
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
