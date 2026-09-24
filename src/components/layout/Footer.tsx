import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { SEO_CONFIG } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import { ArrowRight, ArrowUp, Phone, Mail, MapPin } from "lucide-react";

// ─── Social Media Icons (Pixel-Perfect Clean Vectors) ──────────────────────────

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
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

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// ─── Link Definitions (Exact Mirror of User Reference) ───────────────────────

const servicesLinks = [
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "SEO", href: "/digital-marketing/seo" },
  { label: "Google Ads", href: "/digital-marketing/google-ads" },
  { label: "Social Media Marketing", href: "/digital-marketing/social-media-marketing" },
  { label: "Web & App Development", href: "/application-development" },
  { label: "Business Software", href: "/application-development/custom-software-development" },
  { label: "Content & Branding", href: "/digital-marketing/content-marketing" },
];

const industriesLinks = [
  { label: "Real Estate", href: "/industries" },
  { label: "Education", href: "/industries" },
  { label: "Healthcare", href: "/industries" },
  { label: "Manufacturing", href: "/industries" },
  { label: "Retail & E-commerce", href: "/industries" },
  { label: "Local Businesses", href: "/industries" },
  { label: "Startups & SMEs", href: "/industries" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Case Studies", href: "/services" },
  { label: "Careers", href: "/contact" },
  { label: "Contact", href: "/contact" },
];

const locationsLinks = [
  { label: "Erode", href: "/locations/erode" },
  { label: "Coimbatore", href: "/locations/coimbatore" },
  { label: "Chennai", href: "/locations/chennai" },
  { label: "Trichy", href: "/locations/trichy" },
  { label: "Salem", href: "/locations/salem" },
  { label: "Madurai", href: "/locations/madurai" },
  { label: "Tiruppur", href: "/locations/tiruppur" },
  { label: "Namakkal", href: "/locations/namakkal" },
];

// ─── Main Footer Component ────────────────────────────────────────────────────

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#111111] pt-14 pb-10 border-t border-[#EAEAEA] font-sans">
      <Container size="wide">
        
        {/* ── 1. Top Row: Brand Logo | Editorial Header | CTA Button ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-11">
          
          {/* Logo */}
          <div className="lg:col-span-3 flex items-center">
            <BrandLogo size="lg" theme="light" />
          </div>

          {/* Middle Narrative (separated by clean vertical divider line) */}
          <div className="lg:col-span-6 lg:border-l lg:border-[#EAEAEA] lg:pl-10 space-y-1.5">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#8E6D2E] uppercase block font-sans">
              STRATEGY &nbsp;·&nbsp; TECHNOLOGY &nbsp;·&nbsp; GROWTH
            </span>
            <h2 className="text-2xl sm:text-[28px] lg:text-[31px] font-serif font-normal text-[#111827] tracking-tight leading-tight">
              Helping brands grow with purpose.
            </h2>
            <p className="text-xs sm:text-[13.5px] text-[#6B7280] font-normal leading-normal">
              Digital marketing, technology and creativity — all under one roof.
            </p>
          </div>

          {/* Right CTA Button and Microcopy (Right-Aligned, Caption Centered) */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => openLeadModal("footer-cta")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-[13.5px] font-medium text-[#1A1815] bg-gradient-to-r from-[#C8974F] to-[#AB7831] hover:from-[#BD8C44] hover:to-[#9E6C26] shadow-xs hover:shadow transition-all cursor-pointer select-none group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#1A1815]" />
              </button>
              <span className="text-xs text-[#71717A] mt-2 font-normal text-center">
                No obligations. Just a conversation.
              </span>
            </div>
          </div>
        </div>

        {/* ── 2. Middle Grid: 5 Linking Columns with Thin Vertical Dividers ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 pt-10 pb-12 border-t border-[#EAEAEA]">
          
          {/* Column 1: SERVICES */}
          <div className="lg:pr-8 space-y-4">
            <h3 className="text-[11.5px] font-bold text-[#111111] tracking-[0.14em] uppercase">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-[13px] text-[#4B5563] hover:text-[#111827] transition-colors leading-relaxed inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: INDUSTRIES */}
          <div className="lg:border-l lg:border-[#EAEAEA] lg:px-8 space-y-4">
            <h3 className="text-[11.5px] font-bold text-[#111111] tracking-[0.14em] uppercase">
              INDUSTRIES
            </h3>
            <ul className="space-y-3">
              {industriesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-[13px] text-[#4B5563] hover:text-[#111827] transition-colors leading-relaxed inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="lg:border-l lg:border-[#EAEAEA] lg:px-8 space-y-4">
            <h3 className="text-[11.5px] font-bold text-[#111111] tracking-[0.14em] uppercase">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-[13px] text-[#4B5563] hover:text-[#111827] transition-colors leading-relaxed inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: LOCATIONS */}
          <div className="lg:border-l lg:border-[#EAEAEA] lg:px-8 space-y-4">
            <h3 className="text-[11.5px] font-bold text-[#111111] tracking-[0.14em] uppercase">
              LOCATIONS
            </h3>
            <ul className="space-y-3">
              {locationsLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-[13px] text-[#4B5563] hover:text-[#111827] transition-colors leading-relaxed inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: CONTACT US */}
          <div className="col-span-2 md:col-span-1 lg:border-l lg:border-[#EAEAEA] lg:pl-8 space-y-4">
            <div>
              <h3 className="text-[11.5px] font-bold text-[#111111] tracking-[0.14em] uppercase">
                CONTACT US
              </h3>
              {/* Small gold line under CONTACT US heading */}
              <div className="w-8 h-[2px] bg-[#B88746] mt-1.5" />
            </div>

            <div className="space-y-3.5 text-xs sm:text-[13px] pt-1">
              {/* Phone */}
              <a
                href={`tel:${SEO_CONFIG.telephone}`}
                className="flex items-center gap-3 text-[#374151] hover:text-[#111827] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#FAF5EE] text-[#B88746] flex items-center justify-center shrink-0 border border-[#F1E6D4]/50 group-hover:bg-[#F3EAD9] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-normal">{SEO_CONFIG.displayPhone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SEO_CONFIG.email}`}
                className="flex items-center gap-3 text-[#374151] hover:text-[#111827] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#FAF5EE] text-[#B88746] flex items-center justify-center shrink-0 border border-[#F1E6D4]/50 group-hover:bg-[#F3EAD9] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-normal">{SEO_CONFIG.email}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-[#4B5563]">
                <div className="w-7 h-7 rounded-full bg-[#FAF5EE] text-[#B88746] flex items-center justify-center shrink-0 border border-[#F1E6D4]/50 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="leading-relaxed text-[#4B5563] text-xs sm:text-[13px]">
                  <p>{SEO_CONFIG.headquarters.streetAddress},</p>
                  <p>Near Collectorate,</p>
                  <p>{SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}</p>
                </div>
              </div>
            </div>

            {/* Social Media Circular Buttons (min 44px touch target) */}
            <div className="pt-4 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/realresult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#EDEDED] hover:bg-[#E2E2E2] text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/realresultmarketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#EDEDED] hover:bg-[#E2E2E2] text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@realresult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#EDEDED] hover:bg-[#E2E2E2] text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/realresult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#EDEDED] hover:bg-[#E2E2E2] text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ── 3. Bottom Strip: Copyright & Legal & Back to Top ── */}
        <div className="pt-8 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p className="font-normal">
            © 2026 Real Result. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Link to="/privacy-policy" className="hover:text-[#111827] transition-colors py-2 inline-block">
                Privacy Policy
              </Link>
              <span className="text-[#D1D5DB]">|</span>
              <Link to="/terms" className="hover:text-[#111827] transition-colors py-2 inline-block">
                Terms of Service
              </Link>
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="min-h-[44px] inline-flex items-center gap-2 py-2 px-1 text-xs text-[#4B5563] hover:text-[#111827] transition-colors cursor-pointer group select-none ml-2"
            >
              <span className="w-8 h-8 rounded-full border border-[#9CA3AF] group-hover:border-[#111827] flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-[#4B5563] group-hover:text-[#111827]" />
              </span>
              <span className="text-xs font-normal">Back to Top</span>
            </button>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
