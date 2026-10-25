import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { SEO_CONFIG, SOCIAL_LINKS } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import { ChevronRight } from "lucide-react";

// ─── Pixel-Perfect Brand Social Icons ─────────────────────────────────────────

const XIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" strokeWidth="2" />
    <circle cx="18" cy="6" r="1.2" fill="url(#ig-grad)" />
  </svg>
);

// ─── 5 Navigation Column Data ─────────────────────────────────────────────────

const servicesLinks = [
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Search Engine Optimization (SEO)", href: "/digital-marketing/seo" },
  { label: "Generative Engine Optimization (GEO)", href: "/digital-marketing/geo" },
  { label: "Google Ads & PPC", href: "/digital-marketing/google-ads" },
  { label: "Social Media Marketing", href: "/digital-marketing/social-media-marketing" },
  { label: "Web & App Development", href: "/application-development" },
  { label: "Custom Enterprise ERP", href: "/services/crm-erp" },
  { label: "AI Voice & Telephony", href: "/services/ai-solutions" },
  { label: "Content & Brand Identity", href: "/digital-marketing/content-marketing" },
];

const industriesLinks = [
  { label: "Real Estate & Housing", href: "/industries/real-estate" },
  { label: "Education & Institutions", href: "/industries/education" },
  { label: "Healthcare & Clinics", href: "/industries/healthcare" },
  { label: "Textile & Manufacturing", href: "/industries/b2b" },
  { label: "Retail & Supermarkets", href: "/industries/ecommerce" },
  { label: "Solar & Energy Solutions", href: "/industries/ev" },
  { label: "Startups & Local SMEs", href: "/industries" },
  { label: "Client Knowledge Base", href: "/about#clients" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Story", href: "/about" },
  { label: "Client Partners", href: "/about" },
  { label: "Customer Stories & Work", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

const locationsLinks = [
  { label: "Erode Headquarters", href: "/locations/erode" },
  { label: "Namakkal Office", href: "/locations/namakkal" },
  { label: "Paramathi Velur Desk", href: "/locations/paramathi-velur" },
  { label: "Salem Regional Office", href: "/locations/salem" },
  { label: "Coimbatore Tech Center", href: "/locations/coimbatore" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#111111] font-sans border-t border-[#EAEAEA] select-none">
      
      {/* ── 1. Top Section: "Ready to do your best work?" ── */}
      <div className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center border-b border-black/[0.06] px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1D1D1F] tracking-tight leading-tight">
          Ready to do your best work?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-[#555558] mt-2 mb-8 font-normal">
          Let&apos;s get you started.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E42525] hover:bg-[#CE1E1E] text-white text-sm sm:text-[14px] font-bold uppercase tracking-[0.16em] rounded-xs shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <span>LET&apos;S START YOURS</span>
          <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
        </Link>
      </div>

      <Container size="wide">
        {/* ── 2. Five Navigation Columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pt-12 sm:pt-16 pb-12 sm:pb-16">
          
          {/* Column 1: Services */}
          <div>
            <h3 className="text-lg sm:text-[19px] font-semibold text-[#111827] mb-5 tracking-tight">
              Services &amp; Solutions
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-sm sm:text-[15px] text-[#4B5563] hover:text-[#111827] font-medium transition-colors leading-relaxed inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h3 className="text-lg sm:text-[19px] font-semibold text-[#111827] mb-5 tracking-tight">
              Industries
            </h3>
            <ul className="space-y-3">
              {industriesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-sm sm:text-[15px] text-[#4B5563] hover:text-[#111827] font-medium transition-colors leading-relaxed inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Community */}
          <div>
            <h3 className="text-lg sm:text-[19px] font-semibold text-[#111827] mb-5 tracking-tight">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-sm sm:text-[15px] text-[#4B5563] hover:text-[#111827] font-medium transition-colors leading-relaxed inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations */}
          <div>
            <h3 className="text-lg sm:text-[19px] font-semibold text-[#111827] mb-5 tracking-tight">
              Locations &amp; Hubs
            </h3>
            <ul className="space-y-3">
              {locationsLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-sm sm:text-[15px] text-[#4B5563] hover:text-[#111827] font-medium transition-colors leading-relaxed inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Sales */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-lg sm:text-[19px] font-semibold text-[#111827] mb-5 tracking-tight">
              Contact Sales
            </h3>

            {/* Phone */}
            <div>
              <span className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                Phone
              </span>
              <a
                href={`tel:${SEO_CONFIG.telephone}`}
                className="block text-base sm:text-[17px] text-[#111827] hover:text-[#0071E3] transition-colors font-semibold leading-snug"
              >
                {SEO_CONFIG.displayPhone}
              </a>
            </div>

            {/* Email */}
            <div>
              <span className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                Email
              </span>
              <a
                href={`mailto:${SEO_CONFIG.email}`}
                className="block text-sm sm:text-[15px] text-[#111827] hover:text-[#0071E3] transition-colors font-semibold leading-snug"
              >
                {SEO_CONFIG.email}
              </a>
            </div>

            {/* Office Location */}
            <div>
              <span className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                Office Location
              </span>
              <p className="text-sm sm:text-[15px] text-[#374151] font-normal leading-relaxed">
                Paramathi Velur, Namakkal District, Tamil Nadu 638182
              </p>
              <a
                href={SOCIAL_LINKS.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#0071E3] hover:text-[#005bb5] mt-1.5"
              >
                <span>Find on Google Maps</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>

            {/* Quick Support & Concierge Action Links with dashed line */}
            <div className="pt-3 border-t border-dashed border-neutral-300 space-y-2.5">
              <div>
                <button
                  type="button"
                  onClick={() => openLeadModal("footer-support")}
                  className="inline-flex items-center gap-1 text-sm sm:text-[15px] font-medium text-[#0071E3] hover:text-[#005bb5] hover:underline cursor-pointer"
                >
                  <span>Support</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => openLeadModal("footer-concierge")}
                  className="inline-flex items-center gap-1 text-sm sm:text-[15px] font-medium text-[#0071E3] hover:text-[#005bb5] hover:underline cursor-pointer"
                >
                  <span>Talk to Concierge</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ── 3. Centered Social Media Icons ── */}
        <div className="pt-8 pb-10 border-t border-black/[0.08] flex items-center justify-center gap-6">
          <a
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            title="Real Result on X"
            className="w-9 h-9 flex items-center justify-center text-black hover:scale-115 transition-transform cursor-pointer"
          >
            <XIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Real Result on Facebook"
            className="w-9 h-9 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="Real Result on YouTube"
            className="w-9 h-9 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          >
            <YoutubeIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="Real Result on LinkedIn"
            className="w-9 h-9 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Real Result on Instagram"
            className="w-9 h-9 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
      </Container>

      {/* ── 4. Dark Navy / Midnight Bottom Strip ── */}
      <div className="bg-[#0B0C1E] text-white py-9 border-t border-black/20 text-center px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          {/* Centered Brand Mark */}
          <div className="mb-3 hover:scale-105 transition-transform duration-200">
            <BrandLogo size="lg" theme="dark" href="/" />
          </div>

          {/* Copyright notice */}
          <p className="text-xs sm:text-sm text-neutral-300 font-normal tracking-wide leading-relaxed">
            &copy; 2026, Real Result Marketing &amp; Technology Solutions Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
