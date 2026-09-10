import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Search,
  Target,
  Sparkles,
  PhoneCall,
  RefreshCw,
  Code2,
  CheckCircle2,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { HOME_CONTENT } from "@/data/websiteContent";

export const HomePage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = HOME_CONTENT.slides;

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const icons = [Search, Target, Sparkles, PhoneCall, RefreshCw, Code2];

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title="Real Result | Digital Marketing & Growth Company"
        description="Grow your business with Real Result. Explore SEO, paid ads, social media, AI calling, SMS, RCS and WhatsApp marketing. Tell us your growth goal."
        canonicalPath="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Real Result",
          url: "https://realresult.in",
          description: "Digital marketing & growth company helping businesses get noticed, get chosen, and keep growing.",
        }}
      />

      {/* ── 1. HERO SLIDER SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,113,227,0.25),rgba(255,255,255,0))] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-[460px] md:min-h-[420px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {slides.map((slide, idx) => {
                if (idx !== activeSlide) return null;
                return (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="max-w-4xl"
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse" />
                      {slide.eyebrow}
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                      {slide.h1}
                    </h1>

                    <p className="text-base sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8 font-normal">
                      {slide.body}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to={slide.primaryButton.href}
                        className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/30 transition-all hover:scale-[1.02]"
                      >
                        {slide.primaryButton.label}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>

                      <Link
                        to={slide.secondaryLink.href}
                        className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-neutral-200 border border-white/15 backdrop-blur-sm transition-all"
                      >
                        {slide.secondaryLink.label}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Slider Controls Bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeSlide ? "w-8 bg-[#0071E3]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}: ${s.badge}`}
                />
              ))}
              <span className="ml-3 text-xs text-neutral-400 font-medium">
                {slides[activeSlide].badge}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 transition-colors"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                title={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CUSTOMER PROBLEM SECTION ── */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-3 block">
              The Growth Bottleneck
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-4">
              {HOME_CONTENT.problem.h2}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed font-normal">
              {HOME_CONTENT.problem.body}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {HOME_CONTENT.problem.points.map((point, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F9F9FB] border border-black/[0.05] hover:border-[#0071E3]/30 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs mb-4">
                  0{index + 1}
                </div>
                <p className="text-base font-medium text-neutral-800 leading-snug">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div>
            <Link
              to={HOME_CONTENT.problem.link.href}
              className="inline-flex items-center text-sm font-semibold text-[#0071E3] hover:text-[#0077ED] group"
            >
              <span>{HOME_CONTENT.problem.link.label}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. COMPACT SERVICES (6 CARDS) ── */}
      <section className="py-20 md:py-28 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                Focused Capability
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                {HOME_CONTENT.compactServices ? "The right services for your next stage." : ""}
              </h2>
            </div>
            <Link
              to="/services/"
              className="inline-flex items-center text-sm font-semibold text-[#0071E3] hover:text-[#0077ED] shrink-0"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_CONTENT.compactServices.map((card, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-black/[0.06] hover:border-black/[0.12] transition-all duration-200 hover:shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0071E3] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                        {card.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#0071E3] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <Link
                      to={card.href}
                      className="font-semibold text-[#0071E3] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {card.secondaryHref && (
                      <Link
                        to={card.secondaryHref}
                        className="text-neutral-500 hover:text-black transition-colors"
                      >
                        {card.secondaryLabel}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. APPROACH SECTION: Get noticed. Get chosen. Keep growing. ── */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/15 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block mb-3">
              The Real Result Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              {HOME_CONTENT.approach.h2}
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-normal">
              {HOME_CONTENT.approach.body}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {HOME_CONTENT.approach.steps.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#0071E3]/50 transition-all hover:bg-white/[0.07]"
              >
                <span className="text-4xl font-black text-neutral-600 block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.step}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div>
            <Link
              to={HOME_CONTENT.approach.link.href}
              className="inline-flex items-center text-sm font-semibold text-[#0071E3] hover:text-[#0077ED] group"
            >
              <span>{HOME_CONTENT.approach.link.label}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. PROOF & SELECTED WORK PREVIEW ── */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                Proof &amp; Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                {HOME_CONTENT.proof.h2}
              </h2>
              <p className="text-base text-neutral-600 mt-2 font-normal">
                {HOME_CONTENT.proof.body}
              </p>
            </div>
            <Link
              to={HOME_CONTENT.proof.link.href}
              className="inline-flex items-center text-sm font-semibold text-[#0071E3] hover:text-[#0077ED] shrink-0"
            >
              {HOME_CONTENT.proof.link.label} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] hover:shadow-md transition-all">
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-2">
                Verified Outcome
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Regional Enterprise Search &amp; Qualified Lead Flow
              </h3>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                Rebuilt search visibility, landing experiences, and follow-up routing for high-intent B2B and consumer services.
              </p>
              <div className="p-4 rounded-xl bg-white border border-black/[0.05] text-xs font-medium text-neutral-800 mb-6">
                <strong>Result:</strong> +180% increase in verified customer enquiries within 90 days.
              </div>
              <Link
                to="/work/"
                className="text-xs font-semibold text-[#0071E3] hover:underline inline-flex items-center gap-1"
              >
                <span>Read case summary</span> <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] hover:shadow-md transition-all">
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-2">
                Conversational AI Call Journey
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Automated Voice Qualification &amp; CRM Dispatch
              </h3>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                Real-time AI conversational agents listening, answering routine FAQs, qualifying inbound leads, and escalating high-priority briefs.
              </p>
              <div className="p-4 rounded-xl bg-white border border-black/[0.05] text-xs font-medium text-neutral-800 mb-6">
                <strong>Result:</strong> Zero dropped inbound calls and response time reduced to under 30 seconds.
              </div>
              <Link
                to="/work/"
                className="text-xs font-semibold text-[#0071E3] hover:underline inline-flex items-center gap-1"
              >
                <span>Read case summary</span> <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. QUICK ANSWERS (FAQ) ── */}
      <section className="py-20 md:py-24 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Straight Answers
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              Clear answers before the first conversation.
            </h2>
          </div>

          <div className="space-y-6">
            {HOME_CONTENT.quickAnswers.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-black/[0.06] shadow-sm"
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0071E3] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed pl-8 font-normal">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq/"
              className="text-sm font-semibold text-[#0071E3] hover:underline inline-flex items-center gap-1.5"
            >
              <span>View all 10 frequently asked questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CONTACT CTA BANNER ── */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/15 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block mb-4">
            Next Step
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {HOME_CONTENT.finalContact.h2}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 font-normal">
            {HOME_CONTENT.finalContact.body}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/"
              className="px-8 py-4 rounded-full text-base font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-xl shadow-[#0071E3]/30 transition-all hover:scale-[1.02] inline-flex items-center gap-2"
            >
              {HOME_CONTENT.finalContact.button} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-neutral-400 mt-6">
            {HOME_CONTENT.finalContact.microcopy}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
