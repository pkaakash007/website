import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles,
  ArrowUpRight,
  Compass,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { SERVICES_BY_SLUG, DedicatedService } from "@/data/websiteContent";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!slug || !SERVICES_BY_SLUG[slug]) {
    return <Navigate to="/services/" replace />;
  }

  const service: DedicatedService = SERVICES_BY_SLUG[slug];

  const hubLink = service.category === "digital-marketing"
    ? { label: "Digital Marketing", href: "/services/digital-marketing/" }
    : service.category === "calling-messaging"
    ? { label: "Calling & Messaging", href: "/services/calling-messaging/" }
    : { label: "Websites, Apps & Software", href: "/services/development/" };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={service.seoTitle}
        description={service.metaDescription}
        canonicalPath={service.url}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.h1,
          description: service.heroBody,
          provider: {
            "@type": "Organization",
            name: "Real Result",
            url: "https://realresult.in",
          },
          areaServed: "Worldwide",
        }}
      />

      {/* ── BREADCRUMBS & HERO ── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to={hubLink.href} className="hover:text-white transition-colors">{hubLink.label}</Link>
            <span>/</span>
            <span className="text-white font-medium">{service.h1}</span>
          </nav>

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            {service.eyebrow}
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            {service.h1}
          </h1>

          {/* Display Hook */}
          {service.displayHook && (
            <p className="text-xl sm:text-2xl font-semibold text-blue-200/90 mb-6">
              {service.displayHook}
            </p>
          )}

          {/* Body */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-10 font-normal">
            {service.heroBody}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={service.primaryCtaDestination}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/30 transition-all hover:scale-[1.02]"
            >
              {service.primaryButton}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {service.secondaryLink && (
              <a
                href="#scope"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-neutral-200 border border-white/15 backdrop-blur-sm transition-all"
              >
                {service.secondaryLink}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM & CONTEXT SECTION ── */}
      {service.problemH2 && (
        <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-3 block">
                The Core Friction Point
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-4">
                {service.problemH2}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                {service.problemBody}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── 3. BENEFITS: "What can this help your business do?" ── */}
      {service.benefits.length > 0 && (
        <section className="py-16 md:py-24 bg-[#F5F5F7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                Expected Outcomes
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                {service.benefitsH2}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-black/[0.06] shadow-sm flex flex-col justify-between"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-[#0071E3] flex items-center justify-center font-bold text-xs mb-5">
                    0{i + 1}
                  </div>
                  <p className="text-base font-semibold text-neutral-800 leading-snug">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. SCOPE: "What can the service include?" (Anchor: #scope) ── */}
      <section id="scope" className="py-16 md:py-24 bg-white border-y border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Deliverables &amp; Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              {service.scopeH2}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.scope.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#F9F9FB] border border-black/[0.05] hover:border-[#0071E3]/30 transition-all flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0071E3] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-neutral-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. APPROACH: "How does Real Result approach the work?" ── */}
      {service.approachBody && (
        <section className="py-16 md:py-24 bg-[#0D0D12] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.04] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-4 text-[#0071E3]">
                <Compass className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Execution Philosophy
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
                {service.approachH2}
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                {service.approachBody}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── 6. QUESTIONS BEFORE YOU START (FAQ ACCORDION) ── */}
      {service.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                Clarity First
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                Questions before you start
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 hover:text-[#0071E3] transition-colors"
                    >
                      <span className="text-base sm:text-lg">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-neutral-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. RELATED SERVICES ── */}
      {service.relatedServices.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-t border-black/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                Connected Growth
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900">
                Related services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.relatedServices.map((rel, i) => (
                <Link
                  key={i}
                  to={rel.href}
                  className="p-5 rounded-2xl bg-[#F9F9FB] border border-black/[0.06] hover:border-[#0071E3] hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-neutral-900 group-hover:text-[#0071E3] transition-colors">
                    {rel.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#0071E3] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. FINAL CONTACT CTA BANNER ── */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/15 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block mb-4">
            Next Move
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            {service.finalContactH2 || `Ready to move forward with ${service.h1}?`}
          </h2>
          <div className="flex justify-center">
            <Link
              to={service.primaryCtaDestination}
              className="px-8 py-4 rounded-full text-base font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-xl shadow-[#0071E3]/30 transition-all hover:scale-[1.02] inline-flex items-center gap-2"
            >
              {service.finalContactButton || "Let’s Talk Growth"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
