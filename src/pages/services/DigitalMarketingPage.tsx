import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Search,
  Target,
  Sparkles,
  Share2,
  FileText,
  Video,
  Award,
  Mail,
  Users,
  ShieldAlert,
  Filter,
  BarChart3,
  Smartphone,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { DIGITAL_MARKETING_HUB_CONTENT, DIGITAL_MARKETING_SERVICES } from "@/data/websiteContent";

const serviceIcons: Record<string, any> = {
  "marketing-strategy": Target,
  "seo": Search,
  "local-seo": Target,
  "paid-search": TrendingUp,
  "paid-social": Share2,
  "social-media": Share2,
  "content-marketing": FileText,
  "video-creative": Video,
  "branding": Award,
  "email-marketing": Mail,
  "influencer-affiliate": Users,
  "digital-pr-reputation": ShieldAlert,
  "lead-generation": Filter,
  "conversion-optimization": TrendingUp,
  "analytics": BarChart3,
  "app-marketing": Smartphone,
  "ai-search-optimization": Cpu,
};

export const DigitalMarketingPage: React.FC = () => {
  const content = DIGITAL_MARKETING_HUB_CONTENT;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "Digital Marketing Agency Services | Real Result"}
        description={content.seo.meta_description || "Real Result connects SEO, AI search, paid ads, social media, content, and conversion work around your marketing goals. Discuss your next campaign."}
        canonicalPath="/services/digital-marketing/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Digital Marketing</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            {content.eyebrow}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {content.h1}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8 font-normal">
            {content.body}
          </p>

          <Link
            to="/contact/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/30 transition-all hover:scale-[1.02]"
          >
            {content.primaryButton}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* What needs to work better? */}
      <section className="py-16 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-[#F9F9FB] border border-black/[0.06]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Strategic Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-4">
              {content.problem.h2}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {content.problem.body}
            </p>
          </div>
        </div>
      </section>

      {/* Explore our digital marketing services (17 Services Grid) */}
      <section className="py-20 md:py-28 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Full Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Explore our digital marketing services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((item, idx) => {
              const slug = item.href.replace(/^\/services\//, "").replace(/\/$/, "");
              const IconComp = serviceIcons[slug] || TrendingUp;
              return (
                <Link
                  key={idx}
                  to={item.href}
                  className="p-7 rounded-2xl bg-white border border-black/[0.06] hover:border-[#0071E3] hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0071E3] flex items-center justify-center mb-5 group-hover:bg-[#0071E3] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#0071E3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#0071E3]">
                    <span>Explore scope &amp; questions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How do the services work together? */}
      <section className="py-16 md:py-24 bg-white border-t border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-[#0D0D12] text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/15 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block mb-4">
              Integrated Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              {content.integration.h2}
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8 font-normal">
              {content.integration.body}
            </p>
            <Link
              to={content.integration.link.href}
              className="inline-flex items-center text-sm font-semibold text-[#0071E3] hover:text-[#0077ED] group"
            >
              <span>Explore {content.integration.link.label}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Contact */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            {content.finalContact.h2}
          </h2>
          <div className="flex justify-center">
            <Link
              to="/contact/"
              className="px-8 py-4 rounded-full text-base font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-xl shadow-[#0071E3]/30 transition-all hover:scale-[1.02] inline-flex items-center gap-2"
            >
              {content.finalContact.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
