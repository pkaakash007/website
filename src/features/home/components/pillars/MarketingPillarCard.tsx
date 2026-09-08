import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export const MarketingPillarCard: React.FC = () => {
  return (
    <div className="p-8 sm:p-10 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#FBF7EE] border border-[#E8D298] text-[#8E6D2E] flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#8E6D2E]">
                Division 01
              </span>
              <h3 className="text-2xl font-bold text-primary group-hover:text-gold-700 transition-colors">
                Digital Marketing & Growth
              </h3>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FBF7EE] text-[#8E6D2E] border border-[#E8D298]">
            SEO & Ads
          </span>
        </div>

        <div className="rounded-xl overflow-hidden border border-border">
          <img
            src="/images/digital-marketing-hero.jpg"
            alt="Digital Marketing and Search Engine Growth"
            className="w-full h-64 sm:h-72 object-cover"
          />
          <div className="p-3 bg-surface border-t border-border text-xs text-secondary flex items-center justify-between">
            <span className="font-semibold text-primary">Full-Funnel Organic & Paid</span>
            <span>SEO · GEO · Google Ads</span>
          </div>
        </div>

        <p className="text-sm text-secondary leading-relaxed">
          Transform online search traffic into booked commercial inquiries. We engineer top rankings across Google Search auctions, optimize brand citations for AI engines (ChatGPT & Perplexity), and build high-intent paid funnels.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>Technical SEO & Core Web Vitals</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>Generative Engine Optimization (GEO)</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>Google Ads PPC & Zero Ad Waste</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>Tamil Nadu Local Maps 3-Pack</span>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
        <Link
          to="/digital-marketing"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-gold-700 transition-colors"
        >
          <span>Explore Digital Marketing Hub</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-xs font-semibold text-[#8E6D2E] bg-[#FBF7EE] px-2.5 py-1 rounded-md border border-[#E8D298]">
          4.8x Avg ROAS
        </span>
      </div>
    </div>
  );
};

export default MarketingPillarCard;
