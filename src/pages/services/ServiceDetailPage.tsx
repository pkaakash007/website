import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { getWhatsAppUrl } from "@/config";
import { DETAILED_SERVICES_MAP, DetailedServiceInfo } from "@/features/services/data/servicesDetailsData";
import { SERVICES_BY_SLUG } from "@/data/servicesData";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 1. Check in our new curated 13 services map
  const detailedService: DetailedServiceInfo | undefined = slug ? DETAILED_SERVICES_MAP[slug] : undefined;

  // 2. Fallback to legacy service map if applicable
  const legacyService = slug ? SERVICES_BY_SLUG[slug] : undefined;

  if (!detailedService && !legacyService) {
    return <Navigate to="/services" replace />;
  }

  // If matched our 13 core curated services, render the short & sweet executive layout
  if (detailedService) {
    const service = detailedService;
    const whatsappUrl = getWhatsAppUrl(`Hello Real Result team, I would like to discuss your ${service.title} service for my business.`);

    return (
      <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-[#0071E3] selection:text-white">
        <SEOHead
          title={`${service.title} | Real Result Services`}
          description={service.simpleDesc}
          canonicalPath={`/services/${service.id}`}
        />

        {/* ── Top Hero Section ── */}
        <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-black/[0.05]">
          <Container size="wide">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#86868B] mb-6">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-black transition-colors">Services</Link>
              <span>/</span>
              <span className="text-black font-semibold">{service.title}</span>
            </div>

            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              {/* H1 Title */}
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tight leading-[1.12] mb-5"
                style={{ letterSpacing: "-0.03em" }}
              >
                {service.title}
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
                {service.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
                <button
                  type="button"
                  onClick={() => openLeadModal(`Inquiry for ${service.title}`)}
                  className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#0E2036] via-[#142B47] to-[#0E2036] border border-[#C5A059]/50 hover:border-[#E5B456] text-white font-bold text-sm sm:text-base shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Discuss Your Project</span>
                  <img
                    src="/brand/realresult-mark-transparent.png"
                    alt=""
                    className="w-4 h-4 object-contain filter drop-shadow-[0_0_3px_rgba(229,180,86,0.6)]"
                  />
                </button>

                <a
                  href="tel:+918111033390"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white hover:bg-neutral-50 text-[#0E2036] border border-neutral-300 font-bold text-sm sm:text-base shadow-xs transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call +91 81110 33390</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 font-bold text-sm sm:text-base transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* ── Featured Visual Showcase ── */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/[0.08] shadow-2xl bg-neutral-100 group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = "true";
                      target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 text-left text-white">
                  <p className="text-xs uppercase tracking-widest text-white/80 font-semibold mb-1">
                    Featured Discipline
                  </p>
                  <p className="text-lg sm:text-2xl font-bold">
                    {service.title}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 1. WHY YOUR PRODUCT NEEDS THIS SERVICE ── */}
        <section className="py-16 sm:py-20 bg-white">
          <Container size="wide">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                  The Core Advantage
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
                  {service.whyYourProductNeedsThis.heading}
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto font-normal">
                  {service.whyYourProductNeedsThis.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.whyYourProductNeedsThis.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-[#F9F9FB] border border-black/[0.05] hover:border-[#0071E3]/30 transition-all shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center font-bold text-xs mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── 2. WHY YOU NEED THIS NOW ── */}
        <section className="py-16 sm:py-20 bg-[#F5F5F7] border-y border-black/[0.06]">
          <Container size="wide">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                  Real Business Impact
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  {service.whyYouNeedThisNow.heading}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.whyYouNeedThisNow.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── 3. WHAT YOU GET (DELIVERABLES CHECKLIST) ── */}
        <section className="py-16 sm:py-20 bg-white">
          <Container size="wide">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                  Complete Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  What you receive when you work with us
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whatYouGet.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#F9F9FB] border border-black/[0.05] flex items-start gap-3.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0071E3] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── 4. HOW WE DELIVER IT (3 SIMPLE STEPS) ── */}
        <section className="py-16 sm:py-20 bg-[#F5F5F7] border-t border-black/[0.06]">
          <Container size="wide">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                  Clear & Transparent
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  How we deliver your {service.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.howWeDeliver.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.06] shadow-sm relative"
                  >
                    <span className="text-2xl font-black text-[#0071E3] block mb-2 font-mono">
                      {step.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── 5. QUICK FAQS ── */}
        {service.faqs.length > 0 && (
          <section className="py-16 sm:py-20 bg-white border-t border-black/[0.06]">
            <Container size="default">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                    Got Questions?
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3.5">
                  {service.faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        className="bg-[#F9F9FB] rounded-2xl border border-black/[0.05] overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 hover:text-[#0071E3] transition-colors cursor-pointer"
                        >
                          <span className="text-sm sm:text-base">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-neutral-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-black/[0.04] pt-3 font-normal">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* ── 6. EXECUTIVE DARK FLOATING CTA CARD ── */}
        <section className="py-16 sm:py-20 bg-[#F5F5F7]">
          <Container size="wide">
            <div className="max-w-4xl mx-auto rounded-[32px] sm:rounded-[36px] lg:rounded-[40px] bg-[#16171A] border border-white/[0.08] shadow-[0_24px_50px_rgba(0,0,0,0.18)] px-6 py-14 sm:px-12 sm:py-18 text-center relative overflow-hidden">
              {/* Top Pill Tag */}
              <div className="inline-block px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/[0.06] text-neutral-400 text-[11px] font-semibold tracking-wider uppercase mb-5 select-none">
                ERODE, TAMIL NADU
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
                Ready to get started with<br className="hidden sm:inline" /> {service.title}?
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
                Talk directly with our team to discuss your project, get honest guidance, and receive a free quote.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
                <button
                  type="button"
                  onClick={() => openLeadModal(`Bottom CTA: ${service.title}`)}
                  className="group cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#0E2036] font-bold text-sm sm:text-[15px] shadow-sm transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Get a Free Quote</span>
                  <span className="inline-flex items-center gap-1 shrink-0 ml-1">
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
                    <img
                      src="/brand/realresult-mark-transparent.png"
                      alt=""
                      className="w-4 h-4 object-contain opacity-75"
                    />
                  </span>
                </button>

                <a
                  href="tel:+918111033390"
                  className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 text-white font-semibold text-sm sm:text-[15px] transition-all duration-200 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#E5B456]" />
                  <span>+91 81110 33390</span>
                </a>
              </div>

              {/* Back to All Services link */}
              <div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to All Services</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    );
  }

  // Fallback for any legacy slug
  return <Navigate to="/services" replace />;
};

export default ServiceDetailPage;
