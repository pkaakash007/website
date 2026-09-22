import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { SEO_CONFIG } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import { ArrowRight, ArrowUp, Phone, Mail, MapPin } from "lucide-react";

// ─── Social Media Icons ───────────────────────────────────────────────────────

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
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

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// ─── Link Definitions ─────────────────────────────────────────────────────────

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
    <footer className="bg-white text-neutral-900 pt-16 pb-12 border-t border-neutral-200/80 font-sans">
      <Container size="wide">
        
        {/* ── 1. Top Section: Logo | Brand Narrative | Consultation CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12">
          
          {/* Logo */}
          <div className="lg:col-span-3">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block cursor-pointer transition-opacity hover:opacity-85"
              title="Real Result Home"
            >
              <BrandLogo size="lg" theme="light" />
            </Link>
          </div>

          {/* Middle Narrative with vertical divider */}
          <div className="lg:col-span-6 lg:border-l lg:border-neutral-200/90 lg:pl-10 space-y-1.5">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block font-sans">
              STRATEGY &nbsp;·&nbsp; TECHNOLOGY &nbsp;·&nbsp; GROWTH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
              Helping brands grow with purpose.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
              Digital marketing, technology and creativity — all under one roof.
            </p>
          </div>

          {/* CTA Action Column */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
            <button
              type="button"
              onClick={() => openLeadModal("footer-cta")}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#C29048] to-[#AD7931] hover:from-[#B88746] hover:to-[#9E6C25] shadow-xs hover:shadow-md transition-all cursor-pointer group select-none"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <span className="text-xs text-neutral-500 mt-2 font-normal">
              No obligations. Just a conversation.
            </span>
          </div>
        </div>

        {/* ── 2. Middle Section: 5 Columns Linking Matrix ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 pt-12 pb-12 border-t border-neutral-200/90">
          
          {/* Column 1: SERVICES */}
          <div className="lg:pr-6 space-y-4">
            <h3 className="text-xs font-bold text-neutral-900 tracking-[0.14em] uppercase">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-[13.5px] text-neutral-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: INDUSTRIES */}
          <div className="lg:border-l lg:border-neutral-200/90 lg:px-6 space-y-4">
            <h3 className="text-xs font-bold text-neutral-900 tracking-[0.14em] uppercase">
              INDUSTRIES
            </h3>
            <ul className="space-y-3">
              {industriesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-[13.5px] text-neutral-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="lg:border-l lg:border-neutral-200/90 lg:px-6 space-y-4">
            <h3 className="text-xs font-bold text-neutral-900 tracking-[0.14em] uppercase">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-[13.5px] text-neutral-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: LOCATIONS */}
          <div className="lg:border-l lg:border-neutral-200/90 lg:px-6 space-y-4">
            <h3 className="text-xs font-bold text-neutral-900 tracking-[0.14em] uppercase">
              LOCATIONS
            </h3>
            <ul className="space-y-3">
              {locationsLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-[13.5px] text-neutral-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: CONTACT US */}
          <div className="col-span-2 md:col-span-1 lg:border-l lg:border-neutral-200/90 lg:pl-6 space-y-4">
            <h3 className="text-xs font-bold text-neutral-900 tracking-[0.14em] uppercase">
              CONTACT US
            </h3>

            <div className="space-y-3.5 text-xs sm:text-[13.5px]">
              {/* Phone */}
              <a
                href={`tel:${SEO_CONFIG.telephone}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-black transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F7F3EB] text-[#A67C37] flex items-center justify-center shrink-0 border border-[#EADFCF]/50 group-hover:bg-[#EEDFC6] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-normal">{SEO_CONFIG.displayPhone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SEO_CONFIG.email}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-black transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F7F3EB] text-[#A67C37] flex items-center justify-center shrink-0 border border-[#EADFCF]/50 group-hover:bg-[#EEDFC6] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-normal">{SEO_CONFIG.email}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-[#F7F3EB] text-[#A67C37] flex items-center justify-center shrink-0 border border-[#EADFCF]/50 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="leading-relaxed text-neutral-600">
                  <p>{SEO_CONFIG.headquarters.streetAddress},</p>
                  <p>Near Collectorate,</p>
                  <p>{SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}</p>
                </div>
              </div>
            </div>

            {/* Social Media Row */}
            <div className="pt-4 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/realresult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/realresultmarketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com/@realresult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/realresult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── 3. Bottom Strip: Copyright & Legal & Back to Top ── */}
        <div className="pt-8 border-t border-neutral-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="font-normal">
            © {new Date().getFullYear()} {SEO_CONFIG.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Link to="/privacy-policy" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <span className="text-neutral-300">|</span>
              <Link to="/terms" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-black transition-colors cursor-pointer group select-none"
            >
              <span className="w-7 h-7 rounded-full border border-neutral-300 group-hover:border-neutral-700 flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-neutral-700 group-hover:text-black" />
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
