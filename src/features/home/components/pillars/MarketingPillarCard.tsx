import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export const MarketingPillarCard: React.FC = () => {
  return (
    <div className="p-8 sm:p-10 rounded-4xl bg-white border border-border hover:border-gold/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 text-gold-700 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-gold-700 font-bold tracking-wider">
                Division 01
              </span>
              <h3 className="text-2xl font-bold text-primary group-hover:text-gold-700 transition-colors">
                Digital Marketing & Growth
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-gold-50 text-gold-900 border border-gold-200 font-bold">
            SEO & Ads
          </span>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border shadow-subtle group/img">
          <img
            src="/images/digital-marketing-hero.jpg"
            alt="Digital Marketing and Search Engine Growth"
            className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
            <div className="text-white">
              <span className="text-xs font-mono uppercase text-gold-300 font-bold">
                Full-Funnel Organic & Paid
              </span>
              <p className="text-sm font-semibold text-white/90">
                SEO · GEO AI Search · Google Ads · Social Performance
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-secondary leading-relaxed">
          Transform online search traffic into booked commercial inquiries. We engineer top rankings across Google Search auctions, optimize brand citations for AI engines (ChatGPT & Perplexity), and build high-intent paid funnels.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-border/80">
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

      <div className="pt-8 mt-6 border-t border-border flex items-center justify-between">
        <Link
          to="/digital-marketing"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-gold-700 transition-colors"
        >
          <span>Explore Digital Marketing Hub</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-xs font-mono text-gold-800 font-bold bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200">
          4.8x Avg ROAS
        </span>
      </div>
    </div>
  );
};

export default MarketingPillarCard;
