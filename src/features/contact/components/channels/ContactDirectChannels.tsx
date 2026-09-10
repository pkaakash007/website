import React from "react";
import { SEO_CONFIG } from "@/config/seo";
import {
  BrandHQIcon,
  BrandPhoneIcon,
  BrandEmailIcon,
  BrandWhatsAppIcon,
  BrandTurnaroundIcon,
} from "@/components/brand/BrandChannelIcons";

export const ContactDirectChannels: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-8 sm:p-9 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-6">
        <div className="border-b border-black/[0.06] pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
            Official Direct Channels
          </h2>
          <p className="text-xs sm:text-[13px] text-[#86868B] mt-1 font-normal">
            Direct communication pathways with our executive leadership in Erode.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          {/* Address */}
          <div className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl transition-all duration-200 hover:bg-black/[0.02]">
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0A192F 0%, #0F2744 50%, #06101E 100%)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                boxShadow: "0 4px 14px rgba(10, 25, 47, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
              }}
            >
              <BrandHQIcon size={22} />
            </div>
            <div>
              <div className="font-semibold text-[#1D1D1F] text-[15px] tracking-tight">
                Corporate Headquarters
              </div>
              <div className="text-xs sm:text-[13px] text-[#6E6E73] mt-1 leading-relaxed">
                {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Telephone */}
          <div className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl transition-all duration-200 hover:bg-black/[0.02]">
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0A192F 0%, #0F2744 50%, #06101E 100%)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                boxShadow: "0 4px 14px rgba(10, 25, 47, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
              }}
            >
              <BrandPhoneIcon size={22} />
            </div>
            <div>
              <div className="font-semibold text-[#1D1D1F] text-[15px] tracking-tight">
                Direct Telephone Line
              </div>
              <a
                href={`tel:${SEO_CONFIG.telephone}`}
                className="text-sm font-semibold text-[#0071E3] hover:underline mt-0.5 block tracking-tight"
              >
                {SEO_CONFIG.displayPhone}
              </a>
              <div className="text-xs text-[#86868B] mt-0.5">
                Monday – Saturday: 09:00 AM – 06:30 PM IST
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl transition-all duration-200 hover:bg-black/[0.02]">
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0A192F 0%, #0F2744 50%, #06101E 100%)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                boxShadow: "0 4px 14px rgba(10, 25, 47, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
              }}
            >
              <BrandEmailIcon size={22} />
            </div>
            <div>
              <div className="font-semibold text-[#1D1D1F] text-[15px] tracking-tight">
                Priority Email Desks
              </div>
              <a
                href={`mailto:${SEO_CONFIG.email}`}
                className="text-sm font-medium text-[#1D1D1F] hover:text-[#0071E3] mt-0.5 block tracking-tight"
              >
                {SEO_CONFIG.email}
              </a>
              <div className="text-xs text-[#86868B]">campaigns@realresult.in</div>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl transition-all duration-200 hover:bg-black/[0.02]">
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #062419 0%, #0B3827 50%, #041710 100%)",
                border: "1px solid rgba(37, 211, 102, 0.35)",
                boxShadow: "0 4px 14px rgba(18, 140, 126, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
              }}
            >
              <BrandWhatsAppIcon size={22} />
            </div>
            <div>
              <div className="font-semibold text-[#1D1D1F] text-[15px] tracking-tight">
                Instant WhatsApp Desk
              </div>
              <a
                href="https://wa.me/919842012345?text=Hello%20Real%20Result%20Team,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#00875A] font-semibold hover:underline mt-0.5 block tracking-tight"
              >
                +91 98420 12345 (Direct Strategist Response)
              </a>
              <div className="text-xs text-[#86868B]">
                Typical response time: Under 15 minutes during IST business hours
              </div>
            </div>
          </div>

          {/* SLA Turnaround */}
          <div className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl transition-all duration-200 hover:bg-black/[0.02]">
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0A192F 0%, #0F2744 50%, #06101E 100%)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                boxShadow: "0 4px 14px rgba(10, 25, 47, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
              }}
            >
              <BrandTurnaroundIcon size={22} />
            </div>
            <div>
              <div className="font-semibold text-[#1D1D1F] text-[15px] tracking-tight">
                Enterprise Turnaround Commitment
              </div>
              <div className="text-xs sm:text-[13px] text-[#6E6E73] mt-1 leading-relaxed">
                Formal proposal & scoping documents delivered within 24 to 48 business hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDirectChannels;
