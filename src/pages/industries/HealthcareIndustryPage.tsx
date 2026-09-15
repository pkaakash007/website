import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { openLeadModal } from "@/components/common/LeadModal";
import { getWhatsAppUrl } from "@/config";
import {
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/features/industries/data/industriesData";

const healthcareData = INDUSTRIES_DATA["healthcare"];

export const HealthcareIndustryPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-neutral-900">
      <SEOHead
        title="Best Digital Marketing Agency for Healthcare in India | Real Result"
        description="Our Digital Marketing Agency for Healthcare Industry increases your patient discovery online. Full-funnel digital marketing for hospitals, medical clinics, doctors & dermatology centers."
        canonicalPath="/industries/healthcare"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: "Real Result Healthcare Digital Marketing Agency",
          description:
            "Patient-centric digital marketing, doctor reputation management, local clinic SEO, and ethical healthcare marketing.",
          url: "https://realresult.in/industries/healthcare",
          medicalSpecialty: "Digital Marketing For Hospital, Medical, Doctors & Dermatology Clinics",
        }}
      />

      {/* ── 1. Hero Section (White Editorial Layout with Right Image Blend) ── */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-neutral-200 bg-white text-neutral-900 overflow-hidden">
        {/* Right side visible image with smooth white gradient fade to the left */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
              alt="Doctor consulting patient in modern healthcare clinic"
              className="w-full h-full object-cover object-center lg:object-right opacity-90 sm:opacity-100"
            />
            {/* Smooth white gradient fading the image into the left white text area */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 lg:via-white/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent lg:hidden" />
          </div>
          {/* Solid white shading on the left to guarantee crystal clear text readability */}
          <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 bg-gradient-to-r from-white via-white to-transparent" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-5xl font-normal text-[#0E2036] leading-tight">
              Digital Marketing Agency for Healthcare in India
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Elevate your hospital, clinic, or medical practice with ethical patient acquisition. We engineer high-intent symptom and treatment search dominance, doctor reputation moats, and frictionless WhatsApp appointment scheduling.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                onClick={() => openLeadModal("Healthcare Growth Audit")}
                className="bg-black hover:bg-neutral-800 text-white px-6 py-3 text-sm font-medium"
              >
                Book a Free Call
              </Button>
            </div>

            {/* Benchmarks Inline */}
            <div className="pt-6 border-t border-neutral-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {healthcareData.keyMetrics.map((metric, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-normal text-[#0E2036]">
                      {metric.value}
                    </div>
                    <div className="text-xs text-neutral-500 font-normal">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Healthcare Partners */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-neutral-600 font-normal">
              <span className="text-neutral-500">Practices We Scale:</span>
              {["Hospitals", "Dermatology", "Dental Centers", "IVF & Fertility", "Diagnostic Chains", "Doctors"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-neutral-100/90 text-neutral-800 border border-neutral-200/60 font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Strategic Pillars ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
        <Container size="wide">
          <div className="max-w-3xl mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-normal text-[#0E2036] leading-tight">
              Role of Digital Marketing in Healthcare
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed font-normal">
              Healthcare providers cannot rely on traditional word-of-mouth alone. Today, over 85% of patients evaluate doctors and hospital credentials online before booking a consultation. Our strategic framework ensures your medical practice commands authority, trust, and patient engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareData.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="border-t border-neutral-200 pt-5 space-y-2.5"
              >
                <span className="text-xs text-neutral-400 font-medium tracking-wide block">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-medium text-[#0E2036] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. Sub-Verticals We Serve ── */}
      {healthcareData.subVerticals && healthcareData.subVerticals.length > 0 && (
        <section className="py-16 sm:py-24 bg-neutral-50/50 border-b border-neutral-200">
          <Container size="wide">
            <div className="max-w-3xl mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0E2036]">
                Healthcare Segments We Scale
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-normal">
                Dedicated patient acquisition protocols customized for each medical specialty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthcareData.subVerticals.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-xl p-6 space-y-2"
                >
                  <h3 className="text-base font-medium text-[#0E2036]">{sub.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">{sub.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 4. Frequently Asked Questions ── */}
      {healthcareData.faqs && healthcareData.faqs.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
          <Container size="default">
            <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0E2036]">
                Healthcare Marketing FAQs
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-normal">
                Common questions about medical ethics, patient acquisition, and local healthcare rankings.
              </p>
            </div>

            <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-y border-neutral-200">
              {healthcareData.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-center justify-between gap-4 font-medium text-[#0E2036] text-sm sm:text-base hover:text-black transition-colors cursor-pointer py-1"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pt-2.5 pb-2 text-sm text-neutral-600 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ── 5. Bottom Consultation CTA ── */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <Container size="default">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#0E2036]">
              Ready to Accelerate Your Healthcare Practice?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Book an initial patient growth consultation with our specialized healthcare digital team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                onClick={() => openLeadModal("Healthcare Practice Consultation")}
                className="bg-black hover:bg-neutral-800 text-white px-7 py-3 text-sm font-medium"
              >
                Book a Free Call
              </Button>
              <Link to="/industries">
                <Button
                  variant="outline"
                  className="border-neutral-300 text-neutral-800 hover:bg-white px-5 py-3 text-sm font-medium"
                >
                  View All Industries
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HealthcareIndustryPage;
