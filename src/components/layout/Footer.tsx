import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Code2,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
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
    <footer className="bg-white text-neutral-900 pt-16 pb-12 border-t border-black/[0.08] relative">
      <Container size="wide">
        {/* 4-Column Internal Linking Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-black/[0.08]">
          {/* Column 1: Entity & Contact */}
          <div className="space-y-6">
            <BrandLogo size="lg" theme="light" />
            <p className="text-[12.5px] text-neutral-500 leading-relaxed">
              Delivering full-funnel search engine optimization, Generative Engine Optimization (GEO), Google Ads, and enterprise software engineering for Tamil Nadu businesses.
            </p>

            <div className="space-y-3 pt-2 text-xs text-neutral-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                <span>{SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0071E3] shrink-0" />
                <a href={`tel:${SEO_CONFIG.telephone}`} className="hover:text-black transition-colors">{SEO_CONFIG.displayPhone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0071E3] shrink-0" />
                <a href={`mailto:${SEO_CONFIG.email}`} className="hover:text-black transition-colors">{SEO_CONFIG.email}</a>
              </div>
            </div>
          </div>

          {/* Column 2: Digital Marketing & SEO */}
          <div>
            <div className="flex items-center gap-2 text-[11.5px] font-bold text-neutral-900 mb-4 uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-[#007AFF]" />
              <span>Digital Marketing &amp; SEO</span>
            </div>
            <ul className="space-y-2.5">
              {marketingSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-[12.5px] text-neutral-500 hover:text-black hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Software & Web Development */}
          <div>
            <div className="flex items-center gap-2 text-[11.5px] font-bold text-neutral-900 mb-4 uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5 text-[#5856D6]" />
              <span>Software &amp; Technology</span>
            </div>
            <ul className="space-y-2.5">
              {softwareSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-[12.5px] text-neutral-500 hover:text-black hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tamil Nadu Locations */}
          <div>
            <div className="flex items-center gap-2 text-[11.5px] font-bold text-neutral-900 mb-4 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#FF2D55]" />
              <span>Tamil Nadu Locations</span>
            </div>
            <ul className="space-y-2.5">
              {locationSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-[12.5px] text-neutral-500 hover:text-black hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources & Hub Links */}
        <div className="py-8 border-b border-black/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12.5px] text-neutral-500">
          <div className="flex flex-wrap items-center gap-6">
            {[
              ["Client Case Studies", "/case-studies"],
              ["Resources & Guides", "/resources"],
              ["FAQ", "/faq"],
              ["Industries", "/industries"],
              ["About", "/about"],
              ["Contact Erode HQ", "/contact"],
            ].map(([label, href]) => (
              <Link key={href} to={href} className="hover:text-black transition-colors font-medium">
                {label}
              </Link>
            ))}
            <Link to="/review" className="hover:text-black transition-colors font-semibold inline-flex items-center gap-1.5 text-neutral-700">
              <span className="text-[#FBBC04]">★★★★★</span>
              <span>Google Review</span>
            </Link>
          </div>

          <div className="text-neutral-400 text-[11px] font-medium">
            Entity: Real Result Marketing (Erode, Tamil Nadu)
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="text-[12px] text-neutral-400">
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
