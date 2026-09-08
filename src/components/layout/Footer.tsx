import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Code2,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { REAL_RESULT_CONFIG, getWhatsAppUrl } from "@/config";
import { SEO_CONFIG } from "@/config/seo";

const marketingSilo = [
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
    <footer className="bg-charcoal text-white pt-20 pb-12 border-t border-charcoal-border relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        {/* Top Banner */}
        <div className="pb-16 mb-16 border-b border-charcoal-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Tamil Nadu Search + AI Platform
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Make your business impossible to ignore across Google & AI Search.
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-2 leading-relaxed">
              Real Result Marketing is Tamil Nadu's premier digital marketing agency and custom software development company, headquartered in Erode.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="gold"
              size="md"
              withArrow
              onClick={() => openLeadModal("footer-cta")}
              className="cursor-pointer"
            >
              Request Consultation
            </Button>
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* 4-Column Internal Linking Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-charcoal-border">
          {/* Column 1: Entity & Contact */}
          <div className="space-y-6">
            <BrandLogo size="lg" theme="dark" />
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Delivering full-funnel search engine optimization, Generative Engine Optimization (GEO), Google Ads, and enterprise software engineering for Tamil Nadu businesses.
            </p>

            <div className="space-y-3 pt-2 text-xs text-charcoal-muted">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{SEO_CONFIG.displayPhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{SEO_CONFIG.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Digital Marketing & SEO */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold mb-4 font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Digital Marketing & SEO</span>
            </div>
            <ul className="space-y-2.5">
              {marketingSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-charcoal-muted hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Software & Web Development */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold mb-4 font-bold">
              <Code2 className="w-3.5 h-3.5" />
              <span>Software & Technology</span>
            </div>
            <ul className="space-y-2.5">
              {softwareSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-charcoal-muted hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tamil Nadu Locations */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold mb-4 font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Tamil Nadu Locations</span>
            </div>
            <ul className="space-y-2.5">
              {locationSilo.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-xs text-charcoal-muted hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources & Hub Links */}
        <div className="py-8 border-b border-charcoal-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-charcoal-muted">
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/case-studies" className="hover:text-gold transition-colors font-medium">
              Client Case Studies
            </Link>
            <Link to="/resources" className="hover:text-gold transition-colors font-medium">
              Knowledge Base & Guides
            </Link>
            <Link to="/faq" className="hover:text-gold transition-colors font-medium">
              Frequently Asked Questions (FAQ)
            </Link>
            <Link to="/industries" className="hover:text-gold transition-colors font-medium">
              Industries Served
            </Link>
            <Link to="/about" className="hover:text-gold transition-colors font-medium">
              About Real Result
            </Link>
            <Link to="/contact" className="hover:text-gold transition-colors font-medium">
              Contact Erode HQ
            </Link>
            <Link to="/review" className="hover:text-gold transition-colors font-semibold text-gold-400 inline-flex items-center gap-1">
              <span>★★★★★</span>
              <span>Review on Google</span>
            </Link>
          </div>

          <div className="text-gold/80 font-mono text-[11px]">
            Entity: Real Result Marketing (Erode, Tamil Nadu)
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
          <p>
            © {new Date().getFullYear()} {SEO_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Security & NDAs
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
