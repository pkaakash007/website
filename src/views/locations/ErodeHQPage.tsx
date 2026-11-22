"use client";

import React, { useState } from "react";
import { Link } from "@/utils/router-adapter";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { TAMIL_NADU_LOCATIONS, SEO_CONFIG } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
  Navigation,
  Building2,
  TrendingUp,
  Globe2,
  Phone,
  Mail,
  Clock,
  Award,
  Compass,
  Search,
  Target,
  Share2,
  Code2,
  ChevronDown,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { LOCATION_FAQS } from "@/content/locationFaqs";

export const ErodeHQPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.erode;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = LOCATION_FAQS["erode"];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── 1. Hero Section ────────────────────────────────────────────────── */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Erode" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-xs font-semibold text-gold-800">
              <Star className="w-3.5 h-3.5 fill-gold-600 text-gold-600" />
              <span>Serving Erode from our Paramathi Velur office</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing Agency in{" "}
              <span className="text-gold-700">Erode</span>.
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              On-ground consulting, digital marketing and web development for Erode businesses, about 45 km from our Paramathi Velur office. We help textile mills, turmeric traders, manufacturers, hospitals and retail brands get found on Google, win more enquiries and run smoother operations with custom software.
            </p>

            <DirectAnswerBox
              question="Why do Erode businesses choose Real Result for digital marketing?"
              summary="Real Result Marketing serves Erode from our office in Paramathi Velur, Namakkal district. We provide SEO, Google Maps (local SEO), Google Ads, websites and custom software for the Kongu region's textile, agro-commodity, manufacturing and healthcare businesses, and we meet Erode clients in person."
              takeaways={[
                "Office: Padamudipalayam, Paramathi Velur 638182 (about 45 km from Erode)",
                "Local search campaigns across Erode, Perundurai, Bhavani and Gobichettipalayam",
                "Complete in-house software engineering and performance marketing teams",
                "Phone and WhatsApp support on +91 81110 33390",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("erode-inquiry")}
                className="cursor-pointer"
              >
                Schedule In-Person Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Contact Details Card ─────────────────────────────────────────── */}
      <section className="py-16 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Office</span>
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Contact Real Result for Erode Projects
                </h2>
                <p className="text-sm text-secondary leading-relaxed">
                  Our team works from Paramathi Velur and travels to Erode for strategy meetings, site visits and shoots.
                </p>

                <div className="space-y-3 pt-2 text-sm text-secondary">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary block">Office Address:</strong>
                      {SEO_CONFIG.displayAddress}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Direct Line:</strong>
                      +91 81110 33390
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Email:</strong>
                      realresult.dev@gmail.com
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Business Hours:</strong>
                      Monday – Saturday: 09:00 AM – 06:30 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-charcoal text-white border border-charcoal-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Our Capabilities
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Why Erode Market Leaders Choose Real Result
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We combine technical search expertise with deep knowledge of the Kongu market and its buyers.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">100%</div>
                    <div className="text-xs text-gray-300">In-House Engineering & Strategy</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">10x</div>
                    <div className="text-xs text-gray-300">Target Return on Marketing Spend</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">GEO</div>
                    <div className="text-xs text-gray-300">Visibility in Google &amp; AI Search Answers</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">500+</div>
                    <div className="text-xs text-gray-300">Commercial Inquiries Generated Monthly</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-border flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-gold" />
                  Kongu Region Search Authority
                </span>
                <span className="font-mono text-gold-400">realresult.in</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Core Services ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Full-Suite Digital Marketing Services in Erode
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Everything required to outshine competitors, capture Google search dominance, and build a high-growth brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Search Engine Optimization (SEO)
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Rank on Google for the high-intent searches your buyers make across Erode, Tamil Nadu and international export markets.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Google Maps 3-Pack Local SEO
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Dominate local searches in Erode, Perundurai, and Bhavani to capture incoming calls and walk-in buyers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Google Ads &amp; High-ROI PPC
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                High-intent paid search campaigns delivering verified buyer inquiries with ultra-low cost per acquisition.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Social Media Marketing (SMM)
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Build brand authority and engage potential customers with high-production reels and targeted Instagram/Meta ads.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                High-Speed Web Development
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Fast, responsive corporate websites and e-commerce stores engineered for maximum conversions and SEO.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Custom ERP &amp; Business Software
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Custom cloud software replacing manual spreadsheets for textile mills, agro-processors, and distributors.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Frequently Asked Questions (FAQ) Section ──────────────────── */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Digital Marketing in Erode: FAQs
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Direct answers to help you choose the best digital marketing agency in Erode.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-primary hover:text-gold-800 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-gold-600 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {(
                  <div hidden={!(openFaq === idx)} className="px-6 pb-6 pt-1 text-sm sm:text-base text-secondary leading-relaxed border-t border-border/50 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. High-Converting CTA Banner ──────────────────────────────────── */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Erode Digital Marketing
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Grow Your Erode Business Online?
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Book a free growth audit. We will review your website, Google Maps listing and ads, then share a clear plan and a fixed quote.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("erode-cta")}
                className="cursor-pointer"
              >
                Request Free Erode Growth Audit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ErodeHQPage;
