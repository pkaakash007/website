import React from "react";
import { 
  Smartphone, 
  Search, 
  MapPin, 
  MessageSquare, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Check 
} from "lucide-react";

export const HomePillarsDualShowcase: React.FC = () => {
  return (
    <section id="pillars" className="py-20 sm:py-28 scroll-mt-20 bg-white border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2036] tracking-tight leading-tight mb-4">
            Our Two Main Services
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Instead of hiring separate agencies, we handle both: performance marketing to bring you real customers, and custom software engineering to build your web &amp; mobile apps.
          </p>
        </div>

        {/* ── Dual Pillars Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* ── PILLAR 01: Digital Marketing ── */}
          <div>
            {/* Title & Description */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E2036] tracking-tight leading-snug mb-3">
              Get More Phone Calls &amp; WhatsApp Inquiries
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              We manage targeted ad campaigns on Google, YouTube, Instagram, and Facebook. Every rupee spent is tracked directly to phone calls, messages, and customer visits.
            </p>

            {/* Deliverables / Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#0E2036] shrink-0 mt-0.5">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E2036]">Google Search &amp; Display Ads</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-normal">Appear at the top when high-intent buyers search for your products or services.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#0E2036] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E2036]">Google Maps &amp; Local SEO</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-normal">Help local customers easily locate your shop, showroom, office, or clinic.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#0E2036] shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E2036]">Instagram &amp; Facebook Targeted Ads</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-normal">Eye-catching photo and video campaigns aimed at ready buyers in your city.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#0E2036] shrink-0 mt-0.5">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E2036]">Call &amp; Lead Analytics</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-normal">Transparent tracking so you know exactly how many leads your budget produces.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PILLAR 02: Application Development ── */}
          <div>
            {/* Title & Description */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E2036] tracking-tight leading-snug mb-3">
              Custom Websites &amp; Mobile Applications
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              We design and engineer fast websites, mobile apps, and custom business portals tailored to your operations, with 100% full source code ownership.
            </p>

            {/* Deliverables / Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#0E2036] shrink-0 mt-0.5">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E2036]">iOS &amp; Android Native Mobile Apps</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-normal">Published to Google Play Store and Apple App Store with smooth user experience.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#0E2036] shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E2036]">High-Performance Websites</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-normal">Clean, fast-loading, mobile-friendly websites designed to convert visitors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#0E2036] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E2036]">Business Portals &amp; Billing Systems</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-normal">Custom software built for managing orders, inventory, bookings, and team operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#0E2036] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E2036]">100% Source Code &amp; IP Ownership</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-normal">You retain full ownership of all source code, assets, and design files with zero recurring lock-in.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomePillarsDualShowcase;
