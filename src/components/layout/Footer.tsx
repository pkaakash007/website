import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  MessageSquare,
  Code2,
  Building2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "./Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/common/Button";
import { REAL_RESULT_CONFIG } from "@/config";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-neutral-900 border-t border-black/[0.08] relative">
      {/* Top Pre-Footer Callout */}
      <div className="bg-[#0D0D11] text-white py-16 px-4">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/10 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block mb-3">
                {REAL_RESULT_CONFIG.tagline}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                Ready to give your next customer a reason to choose you?
              </h2>
              <p className="text-sm text-neutral-400">
                Digital marketing, customer communication, and supporting technology for your next business goal.
              </p>
            </div>
            <div className="shrink-0">
              <Button
                variant="primary"
                size="lg"
                href="/contact/"
                className="bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/25 px-8 py-3.5 text-base font-semibold rounded-full"
              >
                Let’s Talk Growth <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* 4-Column Directory Matrix */}
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-black/[0.08]">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-6">
            <BrandLogo size="lg" theme="light" />
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Real Result helps businesses attract the right audience, turn interest into enquiries, and keep customers connected through digital marketing and targeted communication.
            </p>

            <div className="space-y-3 pt-2 text-xs text-neutral-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                <span>{REAL_RESULT_CONFIG.location.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0071E3] shrink-0" />
                <a href={`tel:${REAL_RESULT_CONFIG.contact.phone}`} className="hover:text-black transition-colors font-medium">
                  {REAL_RESULT_CONFIG.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0071E3] shrink-0" />
                <a href={`mailto:${REAL_RESULT_CONFIG.contact.email}`} className="hover:text-black transition-colors font-medium">
                  {REAL_RESULT_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services Hubs & Highlights */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-4 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#0071E3]" />
              <span>Core Services</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/" className="text-sm font-semibold text-neutral-900 hover:text-[#0071E3] transition-colors">
                  All Services Overview
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing/" className="text-sm font-semibold text-neutral-900 hover:text-[#0071E3] transition-colors">
                  Digital Marketing Hub (17 Services)
                </Link>
              </li>
              <li>
                <Link to="/services/calling-messaging/" className="text-sm font-semibold text-neutral-900 hover:text-[#0071E3] transition-colors">
                  Calling &amp; Messaging Hub
                </Link>
              </li>
              <li>
                <Link to="/services/development/" className="text-sm font-semibold text-neutral-900 hover:text-[#0071E3] transition-colors">
                  Websites, Apps &amp; Software Hub
                </Link>
              </li>
              <li className="pt-2 border-t border-neutral-100">
                <Link to="/services/seo/" className="text-xs text-neutral-600 hover:text-black transition-colors">
                  Search Engine Optimization (SEO)
                </Link>
              </li>
              <li>
                <Link to="/services/ai-search-optimization/" className="text-xs text-neutral-600 hover:text-black transition-colors">
                  AI Search Optimization (AEO &amp; GEO)
                </Link>
              </li>
              <li>
                <Link to="/services/paid-search/" className="text-xs text-neutral-600 hover:text-black transition-colors">
                  Paid Search &amp; PPC
                </Link>
              </li>
              <li>
                <Link to="/services/real-time-ai-calling/" className="text-xs text-neutral-600 hover:text-black transition-colors">
                  Real-Time AI Calling Services
                </Link>
              </li>
              <li>
                <Link to="/services/whatsapp-marketing/" className="text-xs text-neutral-600 hover:text-black transition-colors">
                  WhatsApp Marketing &amp; Messaging
                </Link>
              </li>
              <li>
                <Link to="/services/website-development/" className="text-xs text-neutral-600 hover:text-black transition-colors">
                  Website Design &amp; Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Growth Solutions */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-4 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#0071E3]" />
              <span>Company &amp; Strategy</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link to="/solutions/" className="text-sm font-semibold text-neutral-900 hover:text-[#0071E3] transition-colors">
                  Growth Solutions
                </Link>
              </li>
              <li>
                <Link to="/about/" className="text-sm text-neutral-600 hover:text-black transition-colors">
                  About Real Result
                </Link>
              </li>
              <li>
                <Link to="/how-we-work/" className="text-sm text-neutral-600 hover:text-black transition-colors">
                  How We Work (5-Step Process)
                </Link>
              </li>
              <li>
                <Link to="/industries/" className="text-sm text-neutral-600 hover:text-black transition-colors">
                  Industries &amp; Business Types
                </Link>
              </li>
              <li>
                <Link to="/work/" className="text-sm text-neutral-600 hover:text-black transition-colors">
                  Our Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link to="/engagement/" className="text-sm text-neutral-600 hover:text-black transition-colors">
                  Ways to Work Together
                </Link>
              </li>
              <li>
                <Link to="/contact/?goal=acquisition" className="text-xs text-neutral-500 hover:text-black transition-colors">
                  Customer Acquisition Path
                </Link>
              </li>
              <li>
                <Link to="/contact/?goal=conversion" className="text-xs text-neutral-500 hover:text-black transition-colors">
                  Conversion Journey Focus
                </Link>
              </li>
              <li>
                <Link to="/contact/?goal=follow-up" className="text-xs text-neutral-500 hover:text-black transition-colors">
                  Enquiry Follow-Up Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Compliance */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-4 uppercase tracking-wider">
              <MessageSquare className="w-4 h-4 text-[#0071E3]" />
              <span>Resources &amp; Support</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link to="/insights/" className="text-sm font-semibold text-neutral-900 hover:text-[#0071E3] transition-colors">
                  Insights &amp; Practical Reads
                </Link>
              </li>
              <li>
                <Link to="/insights/after-the-enquiry/" className="text-xs text-neutral-600 hover:text-black transition-colors">
                  Article: What Happens After an Enquiry?
                </Link>
              </li>
              <li>
                <Link to="/faq/" className="text-sm text-neutral-600 hover:text-black transition-colors">
                  Real Result FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-sm text-neutral-600 hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-3 border-t border-neutral-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>Policies</span>
                </div>
                <div className="space-y-1.5">
                  <div>
                    <Link to="/privacy-policy/" className="text-xs text-neutral-500 hover:text-black transition-colors">
                      Privacy Policy
                    </Link>
                  </div>
                  <div>
                    <Link to="/terms/" className="text-xs text-neutral-500 hover:text-black transition-colors">
                      Website Terms
                    </Link>
                  </div>
                  <div>
                    <Link to="/cookie-policy/" className="text-xs text-neutral-500 hover:text-black transition-colors">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear} Real Result. All rights reserved. Main line: <span className="text-neutral-700 font-medium">Get noticed. Get chosen. Keep growing.</span>
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy/" className="hover:text-black transition-colors">Privacy</Link>
            <Link to="/terms/" className="hover:text-black transition-colors">Terms</Link>
            <Link to="/cookie-policy/" className="hover:text-black transition-colors">Cookies</Link>
            <Link to="/faq/" className="hover:text-black transition-colors">Help</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
