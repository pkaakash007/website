import React from "react";
import { SEO_CONFIG } from "@/config/seo";
import { Building2, Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";

export const ContactDirectChannels: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
          Direct Access
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
          Direct Contact Channels
        </h2>
        <p className="text-sm text-[#86868B]">
          Direct communication pathways with our team in Erode.
        </p>
      </div>

      <div className="space-y-3.5">
        {/* 1. Corporate Headquarters */}
        <div className="bg-white rounded-[20px] p-5 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all group">
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Building2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1D1D1F]">
                  Corporate Headquarters
                </h3>
                <span className="text-[11px] text-neutral-400">
                  Central Engineering Lab
                </span>
              </div>
            </div>
            <span className="text-xs font-medium text-neutral-500">
              HQ Erode
            </span>
          </div>
          <p className="text-xs text-[#86868B] leading-relaxed pl-13">
            {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}, India
          </p>
          <div className="pl-13 pt-2">
            <a
              href="https://maps.google.com/?q=Erode,Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071E3] hover:text-[#0077ED] transition-colors"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. Telephone */}
        <div className="bg-white rounded-[20px] p-5 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all group">
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#34C759]/10 text-[#34C759] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1D1D1F]">
                  Telephone Desk
                </h3>
                <a
                  href={`tel:${SEO_CONFIG.telephone}`}
                  className="text-xs font-semibold text-[#1D1D1F] hover:text-[#0071E3] transition-colors block"
                >
                  {SEO_CONFIG.displayPhone}
                </a>
              </div>
            </div>
            <span className="text-xs font-medium text-emerald-600">
              Available
            </span>
          </div>
          <p className="text-xs text-[#86868B] pl-13">
            Monday – Saturday: 9:00 AM – 6:30 PM IST
          </p>
        </div>

        {/* 3. Email Inquiries */}
        <div className="bg-white rounded-[20px] p-5 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all group">
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF9500]/10 text-[#FF9500] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Mail className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1D1D1F]">
                  Email Inquiries
                </h3>
                <a
                  href={`mailto:${SEO_CONFIG.email}`}
                  className="text-xs font-semibold text-[#1D1D1F] hover:text-[#0071E3] transition-colors block"
                >
                  {SEO_CONFIG.email}
                </a>
              </div>
            </div>
            <span className="text-xs font-medium text-neutral-500">
              &lt; 4h SLA
            </span>
          </div>
          <p className="text-xs text-[#86868B] pl-13">
            Campaign briefs: <span className="text-neutral-700 font-medium">campaigns@realresult.in</span>
          </p>
        </div>

        {/* 4. WhatsApp Direct */}
        <div className="bg-white rounded-[20px] p-5 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all group">
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <MessageSquare className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1D1D1F]">
                  WhatsApp Channel
                </h3>
                <a
                  href="https://wa.me/919842012345?text=Hello%20Real%20Result%20Team,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#1D1D1F] hover:text-[#128C7E] transition-colors block"
                >
                  +91 98420 12345
                </a>
              </div>
            </div>
            <span className="text-xs font-medium text-emerald-600">
              Instant Chat
            </span>
          </div>
          <p className="text-xs text-[#86868B] pl-13">
            Direct executive messaging during IST business hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDirectChannels;
