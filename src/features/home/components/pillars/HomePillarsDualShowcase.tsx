import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { AppleLogo } from "@/components/common/PlatformLogos";

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
            Our Two Flagship Divisions
          </h2>
          
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed max-w-2xl mx-auto font-normal">
            Instead of hiring separate agencies for advertising and software engineering, Real Result unifies performance marketing with enterprise web &amp; mobile development.
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
              Drive Customer Phone Calls &amp; Direct WhatsApp Leads
            </h3>

            <p className="text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
              High-converting regional marketing campaigns across Tamil Nadu.
            </p>

            <p className="text-sm sm:text-[15px] text-[#6E6E73] leading-relaxed mb-6">
              We manage end-to-end advertising across Google Search, Shopping, YouTube, Instagram, and Facebook. Every rupee spent is tracked directly to real customer phone calls, WhatsApp messages, and showroom footfalls.
            </p>

            {/* Clean Feature Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
              {[
                {
                  title: "Google Search & PPC",
                  desc: "High-intent buyer searches in your district",
                },
                {
                  title: "Google Maps 3-Pack",
                  desc: "Top local rank for clinic & factory searches",
                },
                {
                  title: "Meta & Instagram Ads",
                  desc: "Regional Tamil & English targeted campaigns",
                },
                {
                  title: "Call & WhatsApp Tracking",
                  desc: "Real-time inquiry recording and verification",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
                >
                  <p className="text-[13px] font-semibold text-[#1D1D1F] leading-tight">
                    {f.title}
                  </p>
                  <p className="text-[11.5px] text-[#6E6E73] mt-1 leading-snug">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* iOS Style CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/digital-marketing"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-[#1D1D1F] text-white hover:bg-black transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Marketing Services</span>
                <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold text-[#0071E3] hover:text-[#0051A8] flex items-center gap-1 group transition-colors"
              >
                <span>See Case Studies</span>
                <span className="font-bold group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right: iOS Theme Live Campaign Performance Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-white border border-black/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.06)] p-6 sm:p-7 space-y-4">
              
              {/* iOS Card Header (Without Active Now pill) */}
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[14px] bg-gradient-to-br from-[#0071E3] to-[#5856D6] flex items-center justify-center text-white shadow-xs">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1D1D1F] leading-tight">
                      Campaign &amp; Lead Engine
                    </h4>
                    <p className="text-[11.5px] text-[#86868B] mt-0.5">
                      Tamil Nadu Regional Live Inbound
                    </p>
                  </div>
                </div>
              </div>

              {/* iOS Live Notification Card (Simulated Incoming Lead) */}
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-[#1D1D1F]">WhatsApp Business</span>
                  </div>
                  <span className="text-[11px] text-[#86868B]">Just now</span>
                </div>
                <p className="text-[13px] text-[#1D1D1F] leading-relaxed">
                  &ldquo;Hello, I saw your Google Search ad for industrial machinery in Erode. Can you share the model catalog &amp; pricing?&rdquo;
                </p>
                <div className="flex items-center gap-1.5 pt-1 text-[11px] font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Direct Buyer Inquiry · Immediate Notification</span>
                </div>
              </div>

              {/* iOS Stats Grid (3 Clean Pods) */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-[#1D1D1F] tracking-tight">
                    +340%
                  </p>
                  <p className="text-[11px] text-[#86868B] font-medium mt-0.5">
                    Lead Growth
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-[#1D1D1F] tracking-tight">
                    Top 3
                  </p>
                  <p className="text-[11px] text-[#86868B] font-medium mt-0.5">
                    Google Maps
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-[#1D1D1F] tracking-tight">
                    &lt; 5 min
                  </p>
                  <p className="text-[11px] text-[#86868B] font-medium mt-0.5">
                    Reply SLA
                  </p>
                </div>
              </div>

              {/* Clean Bottom Accreditation Pill */}
              <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1D1D1F]">
                  Official Partnerships:
                </span>
                <span className="text-[#6E6E73] font-medium">
                  Google Premier Partner · Meta Business Partner
                </span>
              </div>

            </div>
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
                      <AppleLogo className="w-3.5 h-3.5 fill-current text-black shrink-0" />
                      <span className="font-semibold text-[#1D1D1F]">App Store &amp; Play Store</span>
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
              <span className="font-semibold text-neutral-900">Code Handover:</span>
              <span className="text-neutral-600 font-medium">100% Full Source Code &amp; IP Ownership</span>
            </div>

          </div>

          {/* Right: Content & Deliverables */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D1D1F] tracking-tight leading-[1.18] mb-3"
              style={{ letterSpacing: "-0.03em" }}
            >
              Custom Web, Mobile &amp; Enterprise Software
            </h3>

            <p className="text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
              Reliable digital platforms built to run your daily operations.
            </p>

            <p className="text-sm sm:text-[15px] text-[#6E6E73] leading-relaxed mb-6">
              We build custom websites, business ERP systems, student admission portals, and mobile apps. Every application is built with modern tech stacks and delivered with complete source code ownership.
            </p>

            {/* Clean Feature Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
              {[
                {
                  title: "iOS & Android Apps",
                  desc: "Native performance published on stores",
                  icon: <AppleLogo className="w-3.5 h-3.5 fill-current text-black shrink-0" />,
                },
                {
                  title: "React Web Applications",
                  desc: "Fast, modern, SEO-friendly web frontends",
                },
                {
                  title: "Custom ERP & Portals",
                  desc: "Tailored to your specific factory/clinic flow",
                },
                {
                  title: "Complete IP Handover",
                  desc: "You own all code, designs, and data",
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
              <Link
                to="/application-development"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-[#1D1D1F] text-white hover:bg-black transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Application Services</span>
                <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold text-[#0071E3] hover:text-[#0051A8] flex items-center gap-1 group transition-colors"
              >
                <span>View Tech Stacks</span>
                <span className="font-bold group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomePillarsDualShowcase;
