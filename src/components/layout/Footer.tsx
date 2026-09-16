import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { SEO_CONFIG } from "@/config/seo";

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

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-neutral-900 pt-16 pb-12 border-t border-neutral-200 relative">
      <Container size="wide">
        {/* 4-Column Internal Linking Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-neutral-200">
          {/* Column 1: Entity & Contact */}
          <div className="space-y-5">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block cursor-pointer"
              title="Go to Top / Home"
            >
              <BrandLogo size="lg" theme="light" />
            </Link>
            <p className="text-xs text-neutral-600 leading-relaxed font-normal">
              Delivering full-funnel search engine optimization, Generative Engine Optimization (GEO), Google Ads, and enterprise software engineering for Tamil Nadu businesses.
            </p>

            <div className="space-y-2 pt-2 text-xs text-neutral-700 font-normal leading-relaxed">
              <p>
                {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}
              </p>
              <p>
                Phone:{" "}
                <a href={`tel:${SEO_CONFIG.telephone}`} className="text-black font-medium hover:underline">
                  {SEO_CONFIG.displayPhone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${SEO_CONFIG.email}`} className="text-black font-medium hover:underline">
                  {SEO_CONFIG.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Digital Marketing & SEO */}
          <div>
            <h3 className="text-xs font-semibold text-[#0E2036] uppercase tracking-wider mb-4">
              Digital Marketing &amp; SEO
            </h3>
            <ul className="space-y-2.5">
              {marketingSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-neutral-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Software & Web Development */}
          <div>
            <h3 className="text-xs font-semibold text-[#0E2036] uppercase tracking-wider mb-4">
              Software &amp; Technology
            </h3>
            <ul className="space-y-2.5">
              {softwareSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-neutral-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tamil Nadu Locations */}
          <div>
            <h3 className="text-xs font-semibold text-[#0E2036] uppercase tracking-wider mb-4">
              Tamil Nadu Locations
            </h3>
            <ul className="space-y-2.5">
              {locationSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-neutral-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources & Hub Links */}
        <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-neutral-600 font-normal">
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/services" className="hover:text-black transition-colors">
              Client Case Studies
            </Link>
            <Link to="/digital-marketing" className="hover:text-black transition-colors">
              Resources &amp; Guides
            </Link>
            <Link to="/faq" className="hover:text-black transition-colors">
              FAQ
            </Link>
            <Link to="/industries" className="hover:text-black transition-colors">
              Industries
            </Link>
            <Link to="/about" className="hover:text-black transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-black transition-colors">
              Contact Erode HQ
            </Link>
          </div>

          <div className="text-neutral-400 text-xs">
            Entity: Real Result Marketing &amp; Technology (Erode, Tamil Nadu)
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-normal">
          <p>
            © {new Date().getFullYear()} {SEO_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-black transition-colors">
              Security &amp; NDAs
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

