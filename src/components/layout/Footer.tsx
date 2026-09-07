import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { REAL_RESULT_CONFIG, getWhatsAppUrl } from "@/config";

const marketingLinks = [
  { label: "Performance Marketing", href: "/marketing" },
  { label: "High-Intent SEO", href: "/marketing" },
  { label: "Paid Search & PPC", href: "/marketing" },
  { label: "Paid Social & Video", href: "/marketing" },
  { label: "Programmatic Media Buying", href: "/marketing" },
  { label: "Television & Broadcast Media", href: "/marketing" },
  { label: "Outdoor Advertising & DOOH", href: "/marketing" },
  { label: "Radio, Transit & Cinema", href: "/marketing" },
  { label: "Influencer & Creator Marketing", href: "/marketing" },
  { label: "Attribution & DNI Analytics", href: "/marketing" },
];

const supportingDivisions = [
  {
    title: "AI Communication",
    href: "/ai-communication",
    links: [
      { label: "Regional AI Telecalling", href: "/ai-communication" },
      { label: "Automated Bulk IVR", href: "/ai-communication" },
      { label: "WhatsApp Business API", href: "/ai-communication" },
      { label: "RCS & Enterprise SMS", href: "/ai-communication" },
      { label: "Voice AI Agents", href: "/ai-communication" },
      { label: "Cloud CPaaS Telephony", href: "/ai-communication" },
    ],
  },
  {
    title: "Technology & Software",
    href: "/technology",
    links: [
      { label: "Custom Software Engineering", href: "/technology" },
      { label: "Web Applications & React", href: "/technology" },
      { label: "Mobile App Development", href: "/technology" },
      { label: "SaaS Platform Engineering", href: "/technology" },
      { label: "AI & Machine Learning", href: "/technology" },
      { label: "Cloud Architecture & DevOps", href: "/technology" },
    ],
  },
  {
    title: "Human Resources",
    href: "/human-resources",
    links: [
      { label: "Executive Search", href: "/human-resources" },
      { label: "Specialized Technical Talent", href: "/human-resources" },
      { label: "Leadership Recruitment", href: "/human-resources" },
      { label: "Workforce Strategy", href: "/human-resources" },
      { label: "People Operations", href: "/human-resources" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-12 border-t border-charcoal-border relative overflow-hidden">
      {/* Decorative gold ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        {/* Top Highlight Banner */}
        <div className="pb-16 mb-16 border-b border-charcoal-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Marketing That Moves
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Make your brand impossible to ignore.
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-2 leading-relaxed">
              Real Result is a premium marketing, media and growth company powered by intelligent communication and enterprise technology.
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
              Plan Your Campaign
            </Button>
            <a
              href={getWhatsAppUrl("marketing")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>WhatsApp Strategy</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-charcoal-border">
          {/* Brand Identity Column */}
          <div className="lg:col-span-2 space-y-6">
            <BrandLogo size="lg" theme="dark" />
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-sm">
              Delivering full-funnel marketing campaigns, multichannel media buying, conversational AI telecalling, and custom technology solutions for forward-moving businesses.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-charcoal-muted">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>{REAL_RESULT_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-charcoal-muted">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{REAL_RESULT_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-charcoal-muted">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{REAL_RESULT_CONFIG.whatsapp.displayNumber}</span>
              </div>
            </div>
          </div>

          {/* Marketing & Media Column (Primary - Highlighted) */}
          <div className="bg-charcoal-surface/60 p-5 rounded-2xl border border-gold/20">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gold mb-4 font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Marketing & Media</span>
            </div>
            <ul className="space-y-2.5">
              {marketingLinks.map((link, idx) => (
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

          {/* Supporting Divisions */}
          {supportingDivisions.slice(0, 2).map((division, idx) => (
            <div key={idx} className="p-2">
              <div className="text-xs font-mono uppercase tracking-widest text-white/80 mb-4 font-bold">
                {division.title}
              </div>
              <ul className="space-y-2.5">
                {division.links.map((link, lIdx) => (
                  <li key={lIdx}>
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
          ))}
        </div>

        {/* HR & Company Links */}
        <div className="py-8 border-b border-charcoal-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-charcoal-muted">
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/human-resources" className="hover:text-gold transition-colors font-medium">
              Human Resources & Talent Search
            </Link>
            <Link to="/industries" className="hover:text-gold transition-colors font-medium">
              Industries Served
            </Link>
            <Link to="/insights" className="hover:text-gold transition-colors font-medium">
              Strategic Insights
            </Link>
            <Link to="/about" className="hover:text-gold transition-colors font-medium">
              About Real Result
            </Link>
            <Link to="/contact" className="hover:text-gold transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          <div className="text-gold/80 font-mono text-[11px]">
            Positioning: Marketing First • Media Powered • Tech Enabled
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
          <p>
            © {new Date().getFullYear()} Real Result. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
