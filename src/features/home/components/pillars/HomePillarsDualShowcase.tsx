import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { ArrowRight, Smartphone } from "lucide-react";

export const HomePillarsDualShowcase: React.FC = () => {
  return (
    <section id="pillars" className="py-20 sm:py-28 scroll-mt-20 overflow-hidden bg-[#FBFBFD] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.15] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Our Two Main Services
          </h2>
          
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed max-w-2xl mx-auto font-normal">
            Instead of hiring separate agencies, we do both: online marketing to bring you new customers, and custom website &amp; mobile app development.
          </p>
        </div>

        {/* ── DIVISION 01: Digital Marketing & Growth ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32">
          
          {/* Left: Content & Deliverables */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D1D1F] tracking-tight leading-[1.18] mb-3"
              style={{ letterSpacing: "-0.03em" }}
            >
              Get More Phone Calls &amp; WhatsApp Messages From Customers
            </h3>

            <p className="text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
              Online advertising that brings real buyers to your business.
            </p>

            <p className="text-sm sm:text-[15px] text-[#6E6E73] leading-relaxed mb-6">
              We run and manage your ads on Google, YouTube, Instagram, and Facebook. Every rupee you spend is tracked to real phone calls, WhatsApp inquiries, and customer visits.
            </p>

            {/* iOS Style CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href="/digital-marketing"
              >
                Explore Marketing Services
              </Button>
              <Link
                to="/services"
                className="text-sm font-semibold text-[#0071E3] hover:text-[#0051A8] flex items-center gap-1 group transition-colors"
              >
                <span>See Case Studies</span>
                <span className="font-bold group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right: Deliverables Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {[
              {
                title: "Google Search Ads",
                desc: "Appear at the top when customers search for your products or services on Google.",
              },
              {
                title: "Google Maps Ranking",
                desc: "Help local customers easily find your shop, showroom, office, or clinic on Google Maps.",
              },
              {
                title: "Instagram & Facebook Ads",
                desc: "Eye-catching photo and video ads targeted to buyers in your city and state.",
              },
              {
                title: "Call & WhatsApp Tracking",
                desc: "See exactly how many phone calls and WhatsApp messages come from your ads.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
              >
                <p className="text-[14px] font-semibold text-[#1D1D1F] leading-tight">
                  {f.title}
                </p>
                <p className="text-[12px] text-[#6E6E73] mt-2 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── DIVISION 02: Application Development ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Authentic Apple iOS Device Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-center">
            
            {/* iPhone Device Frame */}
            <div className="w-full max-w-[320px] sm:max-w-[340px] rounded-[50px] p-3 bg-[#1C1C1E] border-2 border-[#3A3A3C] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-white/20 relative">
              
              {/* Dynamic Island */}
              <div className="w-24 h-6 rounded-full bg-black mx-auto mb-2 flex items-center justify-between px-2.5 shadow-inner">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1C1C1E]" />
                <span className="w-2 h-2 rounded-full bg-blue-900/40" />
              </div>

              {/* iOS Screen Display */}
              <div className="rounded-[40px] bg-[#F2F2F7] overflow-hidden border border-black/5 text-neutral-900 p-4 space-y-3 select-none">
                
                {/* iOS Status Bar */}
                <div className="flex justify-between items-center text-[12px] font-semibold text-neutral-900 px-1 pt-0.5">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 text-neutral-900">
                    <svg className="w-3.5 h-2.5" viewBox="0 0 17 12" fill="currentColor">
                      <rect x="0" y="9" width="2.5" height="3" rx="0.5" />
                      <rect x="4.5" y="6" width="2.5" height="6" rx="0.5" />
                      <rect x="9" y="3" width="2.5" height="9" rx="0.5" />
                      <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
                    </svg>
                    <svg className="w-3 h-2.5" viewBox="0 0 16 12" fill="currentColor">
                      <path d="M8 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3.5-3a5 5 0 0 1 7 0l-1 1a3.5 3.5 0 0 0-5 0l-1-1zm-3-3a9 9 0 0 1 13 0l-1 1a7.5 7.5 0 0 0-11 0l-1-1z" />
                    </svg>
                    <div className="flex items-center gap-0.5">
                      <div className="w-5 h-2.5 rounded-[4px] border border-neutral-900 p-0.5 flex items-center">
                        <div className="h-full w-3.5 rounded-[2px] bg-[#34C759]" />
                      </div>
                      <div className="w-0.5 h-1 bg-neutral-900 rounded-r-xs" />
                    </div>
                  </div>
                </div>

                {/* iOS App Navigation Header */}
                <div className="pt-1">
                  <span className="text-[10px] font-bold text-[#0071E3] uppercase tracking-wider block">
                    Real Result Mobile
                  </span>
                  <h4 className="text-[17px] font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
                    Operations Dashboard
                  </h4>
                </div>

                {/* Inset Metric Card 1 */}
                <div className="p-3.5 rounded-2xl bg-white border border-black/[0.04] shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#86868B] font-medium">Pipeline Revenue</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px]">
                      +32.4%
                    </span>
                  </div>
                  <p className="text-xl font-extrabold text-[#1D1D1F] tracking-tight">
                    ₹24,80,000
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-[#6E6E73]">
                    <div className="p-2 rounded-xl bg-[#F5F5F7] text-center">
                      <span className="font-bold text-[#1D1D1F] block text-xs">0.4s</span>
                      <span>Avg Speed</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F5F5F7] text-center">
                      <span className="font-bold text-[#1D1D1F] block text-xs">99.9%</span>
                      <span>Uptime</span>
                    </div>
                  </div>
                </div>

                {/* Inset Grouped List 2 */}
                <div className="rounded-2xl bg-white border border-black/[0.04] shadow-2xs divide-y divide-black/[0.04] overflow-hidden text-[12px]">
                  <div className="px-3.5 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-3.5 h-3.5 text-[#1D1D1F] shrink-0" />
                      <span className="font-semibold text-[#1D1D1F]">Mobile Apps</span>
                    </div>
                    <span className="text-[#86868B] text-[11px] font-medium">Published</span>
                  </div>
                  <div className="px-3.5 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#0071E3]" />
                      <span className="font-semibold text-[#1D1D1F]">Full Source Handover</span>
                    </div>
                    <span className="text-[#86868B] text-[11px] font-medium">100% IP</span>
                  </div>
                  <div className="px-3.5 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FF9500]" />
                      <span className="font-semibold text-[#1D1D1F]">Serverless Cloud Backend</span>
                    </div>
                    <span className="text-[#86868B] text-[11px] font-medium">Live</span>
                  </div>
                </div>

                {/* iOS Home Indicator */}
                <div className="pt-2 pb-1 flex justify-center">
                  <div className="w-28 h-1 rounded-full bg-neutral-900/30" />
                </div>

              </div>

            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-4 p-3 rounded-2xl bg-white border border-black/[0.06] shadow-xs flex items-center justify-between text-xs text-neutral-700 w-full max-w-[340px]">
              <span className="font-semibold text-neutral-900">Code Ownership:</span>
              <span className="text-neutral-600 font-medium">You own 100% of the code &amp; design</span>
            </div>

          </div>

          {/* Right: Content & Deliverables */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D1D1F] tracking-tight leading-[1.18] mb-3"
              style={{ letterSpacing: "-0.03em" }}
            >
              Custom Websites &amp; Mobile Applications
            </h3>

            <p className="text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
              Easy-to-use software built specifically for your business.
            </p>

            <p className="text-sm sm:text-[15px] text-[#6E6E73] leading-relaxed mb-6">
              We build modern websites, business billing software, booking portals, and mobile apps for Android and iPhone. When we finish, you own 100% of the code.
            </p>

            {/* Clean Feature Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
              {[
                {
                  title: "Android & iPhone Apps",
                  desc: "Fast mobile apps published on the Google Play Store and Apple App Store.",
                  icon: <Smartphone className="w-3.5 h-3.5 text-[#1D1D1F] shrink-0" />,
                },
                {
                  title: "Modern Fast Websites",
                  desc: "Clean, mobile-friendly websites that load fast and look great on any device.",
                },
                {
                  title: "Business Portals & Software",
                  desc: "Custom systems for managing your billing, orders, staff, or customer bookings.",
                },
                {
                  title: "100% Code Ownership",
                  desc: "You own all code, files, and designs completely with zero restrictions.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    {"icon" in f && f.icon}
                    <p className="text-[13px] font-semibold text-[#1D1D1F] leading-tight">
                      {f.title}
                    </p>
                  </div>
                  <p className="text-[11.5px] text-[#6E6E73] leading-snug">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* iOS Style CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href="/application-development"
              >
                Explore Application Services
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomePillarsDualShowcase;
