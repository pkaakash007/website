import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export const MarketingPillarCard: React.FC = () => {
  return (
    <div
      className="flex flex-col group transition-all duration-200"
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "32px",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)",
      }}
    >
      <div className="space-y-6 flex-1">
        {/* Card header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="ae-eyebrow mb-1">Division 01</p>
            <h3 className="text-[22px] font-bold text-[#0F0F0E] tracking-[-0.025em] leading-tight group-hover:text-[rgba(15,15,14,0.70)] transition-colors">
              Digital Marketing &amp; Growth
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[rgba(0,0,0,0.05)] flex items-center justify-center shrink-0">
            <TrendingUp className="w-4.5 h-4.5 text-[rgba(15,15,14,0.60)]" />
          </div>
        </div>

        {/* Image — no rounded frame, slight inset */}
        <div className="overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Digital Marketing Growth"
            className="w-full h-56 sm:h-64 object-cover image-warm-filter transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <p className="text-[15px] text-[rgba(15,15,14,0.55)] leading-[1.65]">
          We help shops, factories, clinics and schools across Tamil Nadu get real customer calls and WhatsApp leads through Google, Facebook, Instagram, SEO, GEO and AIO.
        </p>

        {/* Feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {[
            "Google Ads & PPC",
            "SEO · GEO · AIO",
            "Facebook & Instagram Ads",
            "Google Maps Local Pack",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-[13px] font-medium text-[rgba(15,15,14,0.65)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 mt-6 ae-divider flex items-center justify-between">
        <Link
          to="/digital-marketing"
          className="ae-btn ae-btn-primary text-[13px] px-5 py-2.5 flex items-center gap-1.5 group/btn"
        >
          <span>Explore Marketing</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
        <span className="text-[12px] font-medium text-[rgba(15,15,14,0.40)]">4.8× Avg ROAS</span>
      </div>
    </div>
  );
};

export default MarketingPillarCard;
