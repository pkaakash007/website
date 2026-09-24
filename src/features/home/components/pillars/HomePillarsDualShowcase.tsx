import React from "react";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Search, 
  MapPin, 
  MessageSquare, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Layers,
  ChevronRight 
} from "lucide-react";

export const HomePillarsDualShowcase: React.FC = () => {
  return (
    <section id="pillars" className="py-20 sm:py-28 scroll-mt-20 bg-[#F5F5F7]/70 border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header (Apple Minimalist) ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1d1d1f] tracking-[-0.03em] leading-tight mb-3">
            Our Two Main Services
          </h2>
          <p className="text-base sm:text-[17px] text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Instead of hiring separate agencies, we handle both: performance marketing to bring you real customers, and custom software engineering to build your web &amp; mobile apps.
          </p>
        </div>

        {/* ── Dual Pillars Grid (iOS Inset Grouped Cards) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ── PILLAR 01: Digital Marketing ── */}
          <div className="flex flex-col justify-between bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              {/* Title & Description */}
              <h3 className="text-2xl sm:text-[26px] font-semibold text-[#1d1d1f] tracking-[-0.02em] leading-snug mb-2">
                Get More Qualified Leads &amp; Sales
              </h3>
              <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed mb-6">
                We manage targeted ad campaigns on Google, YouTube, Instagram, and Facebook. Every rupee spent is tracked directly to qualified leads, customer conversions, and sales.
              </p>

              {/* iOS Inset Grouped Table */}
              <div className="bg-[#F5F5F7] rounded-2xl p-1.5 border border-black/[0.04]">
                <div className="divide-y divide-black/[0.05]">
                  
                  {/* Item 1 */}
                  <div className="group flex items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-white/90 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-[12px] bg-[#007AFF] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Search className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
                        Google Search &amp; Display Ads
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-600 leading-normal">
                        Appear at the top when high-intent buyers search for your products or services.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#c7c7cc] shrink-0 self-center hidden sm:block group-hover:text-neutral-600 transition-colors" />
                  </div>

                  {/* Item 2 */}
                  <div className="group flex items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-white/90 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-[12px] bg-[#34C759] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
                        Google Maps &amp; Local SEO
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-600 leading-normal">
                        Help local customers easily locate your shop, showroom, office, or clinic.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#c7c7cc] shrink-0 self-center hidden sm:block group-hover:text-neutral-600 transition-colors" />
                  </div>

                  {/* Item 3 */}
                  <div className="group flex items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-white/90 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-[12px] bg-[#AF52DE] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <MessageSquare className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
                        Instagram &amp; Facebook Targeted Ads
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-600 leading-normal">
                        Eye-catching photo and video campaigns aimed at ready buyers in your city.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#c7c7cc] shrink-0 self-center hidden sm:block group-hover:text-neutral-600 transition-colors" />
                  </div>

                  {/* Item 4 */}
                  <div className="group flex items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-white/90 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-[12px] bg-[#FF9500] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <BarChart3 className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
                        Call &amp; Lead Analytics
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-600 leading-normal">
                        Transparent tracking so you know exactly how many leads your budget produces.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#c7c7cc] shrink-0 self-center hidden sm:block group-hover:text-neutral-600 transition-colors" />
                  </div>

                </div>
              </div>
            </div>

            {/* Apple Card Footer Action */}
            <div className="pt-6 mt-6 border-t border-black/[0.04]">
              <Link 
                to="/digital-marketing" 
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0071e3] hover:underline"
              >
                <span>View all marketing services</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── PILLAR 02: Application Development ── */}
          <div className="flex flex-col justify-between bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              {/* Title & Description */}
              <h3 className="text-2xl sm:text-[26px] font-semibold text-[#1d1d1f] tracking-[-0.02em] leading-snug mb-2">
                Custom Websites &amp; Mobile Applications
              </h3>
              <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed mb-6">
                We design and engineer fast websites, mobile apps, and custom business portals tailored to your operations, with 100% full source code ownership.
              </p>

              {/* iOS Inset Grouped Table */}
              <div className="bg-[#F5F5F7] rounded-2xl p-1.5 border border-black/[0.04]">
                <div className="divide-y divide-black/[0.05]">
                  
                  {/* Item 1 */}
                  <div className="group flex items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-white/90 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-[12px] bg-[#007AFF] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Smartphone className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
                        iOS &amp; Android Native Mobile Apps
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-600 leading-normal">
                        Published to Google Play Store and Apple App Store with smooth user experience.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#c7c7cc] shrink-0 self-center hidden sm:block group-hover:text-neutral-600 transition-colors" />
                  </div>

                  {/* Item 2 */}
                  <div className="group flex items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-white/90 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-[12px] bg-[#30B0C7] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Globe className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
                        High-Performance Websites
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-600 leading-normal">
                        Clean, fast-loading, mobile-friendly websites designed to convert visitors.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#c7c7cc] shrink-0 self-center hidden sm:block group-hover:text-neutral-600 transition-colors" />
                  </div>

                  {/* Item 3 */}
                  <div className="group flex items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-white/90 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-[12px] bg-[#5856D6] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Layers className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
                        Business Portals &amp; Billing Systems
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-600 leading-normal">
                        Custom software built for managing orders, inventory, bookings, and team operations.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#c7c7cc] shrink-0 self-center hidden sm:block group-hover:text-neutral-600 transition-colors" />
                  </div>

                  {/* Item 4 */}
                  <div className="group flex items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-white/90 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-[12px] bg-[#34C759] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
                        100% Source Code &amp; IP Ownership
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-600 leading-normal">
                        You retain full ownership of all source code, assets, and design files with zero recurring lock-in.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#c7c7cc] shrink-0 self-center hidden sm:block group-hover:text-neutral-600 transition-colors" />
                  </div>

                </div>
              </div>
            </div>

            {/* Apple Card Footer Action */}
            <div className="pt-6 mt-6 border-t border-black/[0.04]">
              <Link 
                to="/application-development" 
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0071e3] hover:underline"
              >
                <span>View development stack</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomePillarsDualShowcase;
