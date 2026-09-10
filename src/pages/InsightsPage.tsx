import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { INSIGHTS_CONTENT } from "@/data/websiteContent";

export const InsightsPage: React.FC = () => {
  const content = INSIGHTS_CONTENT;
  const [selectedCat, setSelectedCat] = useState("All Insights");

  const articles = [
    {
      slug: "after-the-enquiry",
      category: "Getting Chosen",
      title: "Your next enquiry is only the beginning.",
      desc: "Five questions to ask about what happens between first interest and a useful sales conversation.",
      readTime: "4 min read",
      href: "/insights/after-the-enquiry/",
    },
    {
      slug: "search-intent-over-volume",
      category: "Getting Found",
      title: "Why search intent beats keyword volume every time.",
      desc: "Understanding buyer urgency and query specificity to attract customers who actually purchase.",
      readTime: "5 min read",
      href: "/services/seo/",
    },
    {
      slug: "conversational-ai-handoff",
      category: "Calling & Messaging",
      title: "The anatomy of an effective AI voice handoff.",
      desc: "How real-time conversational voice agents qualify inbound callers and bridge them to human specialists.",
      readTime: "6 min read",
      href: "/services/real-time-ai-calling/",
    },
  ];

  const filteredArticles = selectedCat === "All Insights"
    ? articles
    : articles.filter(a => a.category === selectedCat);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "Marketing & Business Growth Insights | Real Result"}
        description={content.seo.meta_description || "Explore practical ideas for improving customer journeys, marketing decisions, and business workflows from Real Result."}
        canonicalPath="/insights/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Insights</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            {content.eyebrow}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {content.h1}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl font-normal">
            {content.body}
          </p>
        </div>
      </section>

      {/* Category Pills & Featured Article */}
      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {content.categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCat === cat
                    ? "bg-[#0071E3] text-white shadow-sm"
                    : "bg-[#F5F5F7] text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] hover:border-[#0071E3] hover:shadow-xl transition-all mb-12 group">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#0071E3]">
                  Featured Insight
                </span>
                <span className="text-xs font-medium text-neutral-400">
                  {content.featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 mb-4 group-hover:text-[#0071E3] transition-colors">
                {content.featuredArticle.title}
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 font-normal">
                {content.featuredArticle.desc}
              </p>

              <Link
                to={content.featuredArticle.href}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/25 transition-all hover:scale-[1.02]"
              >
                Read the Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* More Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art, idx) => (
              <Link
                key={idx}
                to={art.href}
                className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] hover:border-[#0071E3] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-[#0071E3]">
                      {art.category}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#0071E3] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs font-semibold text-[#0071E3]">
                  <span>Read insight</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {content.finalContact.h2}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 font-normal">
            {content.finalContact.body}
          </p>
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

export default InsightsPage;
