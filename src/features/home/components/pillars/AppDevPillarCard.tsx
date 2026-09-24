import React from "react";
import { Link } from "react-router-dom";
import { Code2, CheckCircle2, ArrowRight } from "lucide-react";
import { AppleLogo } from "@/components/common/PlatformLogos";

export const AppDevPillarCard: React.FC = () => {
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
            <p className="ae-eyebrow mb-1">Division 02</p>
            <h3 className="text-[22px] font-bold text-[#0F0F0E] tracking-[-0.025em] leading-tight group-hover:text-[rgba(15,15,14,0.70)] transition-colors">
              Application Development
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[rgba(0,0,0,0.05)] flex items-center justify-center shrink-0">
            <Code2 className="w-4 h-4 text-[rgba(15,15,14,0.60)]" />
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-xl aspect-[16/10]">
          <picture>
            <source
              type="image/avif"
              srcSet="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&fm=avif&w=400&q=75 400w, https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&fm=avif&w=600&q=75 600w"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
            <source
              type="image/webp"
              srcSet="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&fm=webp&w=400&q=75 400w, https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&fm=webp&w=600&q=75 600w"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
            <img
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=75"
              srcSet="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=400&q=75 400w, https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=75 600w"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="Application Development"
              width={600}
              height={375}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover image-warm-filter transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </picture>
        </div>

        <p className="text-[15px] text-[rgba(15,15,14,0.55)] leading-[1.65]">
          We build custom mobile apps, websites, business ERP systems and SaaS platforms for companies that need reliable, scalable digital tools to run their operations.
        </p>

        {/* Feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {[
            "iOS & Android Apps",
            "React Web Applications",
            "Custom ERP & Inventory",
            "100% Source Code Handover",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-[13px] font-medium text-[rgba(15,15,14,0.65)]">
              {f === "iOS & Android Apps" ? (
                <AppleLogo className="w-3.5 h-3.5 fill-current text-black shrink-0" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-[rgba(15,15,14,0.30)] shrink-0" />
              )}
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 mt-6 ae-divider flex items-center justify-between">
        <Link
          to="/application-development"
          className="ae-btn ae-btn-primary text-[13px] px-5 py-2.5 flex items-center gap-1.5 group/btn"
        >
          <span>Explore App Dev</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
        <span className="text-[12px] font-medium text-[rgba(15,15,14,0.40)]">99.98% SLA</span>
      </div>
    </div>
  );
};

export default AppDevPillarCard;
