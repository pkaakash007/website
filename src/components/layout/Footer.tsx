import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { SEO_CONFIG } from "@/config/seo";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";

const marketingSilo = [
  { label: "All 12 Core Services", href: "/services" },
  { label: "Digital Marketing Overview", href: "/digital-marketing" },
  { label: "Search Engine Optimization (SEO)", href: "/digital-marketing/seo" },
  { label: "Local SEO & Google Maps 3-Pack", href: "/digital-marketing/local-seo" },
  { label: "Generative Engine Optimization (GEO)", href: "/digital-marketing/geo" },
  { label: "AI Search Optimization (AIO)", href: "/digital-marketing/aio" },
  { label: "Google Ads & PPC Management", href: "/digital-marketing/google-ads" },
  { label: "Performance Social Media Marketing", href: "/digital-marketing/social-media-marketing" },
  { label: "Content Marketing & Digital PR", href: "/digital-marketing/content-marketing" },
  { label: "Conversion Rate Optimization (CRO)", href: "/digital-marketing/conversion-rate-optimization" },
];

const softwareSilo = [
  { label: "Application Development Overview", href: "/application-development" },
  { label: "Our Portfolio (Client Case Studies)", href: "/portfolio" },
  { label: "Custom Web Application Development", href: "/application-development/web-development" },
  { label: "Mobile App Development (iOS/Android)", href: "/application-development/mobile-app-development" },
  { label: "Custom Business ERP Software", href: "/application-development/custom-software-development" },
  { label: "Multi-Tenant SaaS Engineering", href: "/application-development/saas-development" },
  { label: "Enterprise AI & LLM Applications", href: "/application-development/ai-development" },
];

const locationSilo = [
  { label: "Tamil Nadu Network Hub", href: "/locations/tamil-nadu" },
  { label: "Erode Headquarters (HQ)", href: "/locations/erode" },
  { label: "Coimbatore Industrial Hub", href: "/locations/coimbatore" },
  { label: "Chennai Metropolitan Metro", href: "/locations/chennai" },
  { label: "Tiruppur Knitwear & Export Hub", href: "/locations/tiruppur" },
  { label: "Salem Steel & Commercial Hub", href: "/locations/salem" },
  { label: "Madurai Southern Commercial Hub", href: "/locations/madurai" },
  { label: "Trichy Engineering Hub", href: "/locations/trichy" },
  { label: "Tirunelveli Regional Hub", href: "/locations/tirunelveli" },
  { label: "Namakkal Poultry & Logistics Hub", href: "/locations/namakkal" },
];

const quickDirectory = [
  { label: "Client Case Studies", href: "/services" },
  { label: "Resources & Guides", href: "/digital-marketing" },
  { label: "FAQ", href: "/faq" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Contact Erode HQ", href: "/contact" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F5F7] text-neutral-900 pt-16 pb-12 border-t border-black/[0.08] relative font-sans">
      <Container size="wide">
        {/* macOS Top Status Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-10 mb-12 border-b border-black/[0.06] gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block cursor-pointer transition-opacity hover:opacity-80"
              title="Real Result Home"
            >
              <BrandLogo size="lg" theme="light" />
            </Link>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-black/[0.04] text-neutral-500 border border-black/[0.04]">
              v2.6 · macOS Engine
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse" />
              All 10 Regional Desks Operational
            </span>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-neutral-600 hover:text-[#1D1D1F] bg-white/80 hover:bg-white border border-black/[0.06] shadow-2xs transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* 4-Column Directory Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-black/[0.06]">
          {/* Column 1: Entity & Inset Contact Card */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider">
              Engineering &amp; Growth
            </h3>
            <p className="text-xs text-[#86868B] leading-relaxed">
              Delivering full-funnel search engine optimization, Generative Engine Optimization (GEO), Google Ads, and enterprise software engineering for Tamil Nadu businesses.
            </p>

            {/* macOS Inset Headquarters Card */}
            <div className="bg-white/90 backdrop-blur-xl rounded-[20px] p-4 border border-black/[0.06] shadow-[0_2px_10px_rgba(0,0,0,0.03)] space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-black/[0.05]">
                <div className="w-6 h-6 rounded-lg bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-[#1D1D1F]">
                  Central Engineering Lab
                </span>
              </div>
              <p className="text-xs text-[#86868B] leading-relaxed">
                {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}
              </p>
              <div className="pt-1 flex flex-col gap-1.5 text-xs">
                <a
                  href={`tel:${SEO_CONFIG.telephone}`}
                  className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#0071E3] font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#34C759]" />
                  <span>{SEO_CONFIG.displayPhone}</span>
                </a>
                <a
                  href={`mailto:${SEO_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#0071E3] font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF9500]" />
                  <span>{SEO_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Digital Marketing & SEO */}
          <div>
            <h3 className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-4">
              Digital Marketing &amp; SEO
            </h3>
            <ul className="space-y-2.5">
              {marketingSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-[#86868B] hover:text-[#1D1D1F] hover:translate-x-0.5 transition-all duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Software & Technology */}
          <div>
            <h3 className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-4">
              Software &amp; Technology
            </h3>
            <ul className="space-y-2.5">
              {softwareSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-[#86868B] hover:text-[#1D1D1F] hover:translate-x-0.5 transition-all duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tamil Nadu Locations */}
          <div>
            <h3 className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-4">
              Tamil Nadu Locations
            </h3>
            <ul className="space-y-2.5">
              {locationSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-[#86868B] hover:text-[#1D1D1F] hover:translate-x-0.5 transition-all duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Directory Strip (macOS Pills) */}
        <div className="py-6 border-b border-black/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#86868B]">
          <div className="flex flex-wrap items-center gap-2">
            {quickDirectory.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                className="px-3 py-1 rounded-full bg-white/70 hover:bg-white text-neutral-700 hover:text-[#1D1D1F] border border-black/[0.05] shadow-2xs transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="text-[11px] font-mono text-neutral-400">
            Entity: Real Result Marketing &amp; Technology (Erode, Tamil Nadu)
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <p>
            © {new Date().getFullYear()} {SEO_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#1D1D1F] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-[#1D1D1F] transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-[#1D1D1F] transition-colors">
              Security &amp; NDAs
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
