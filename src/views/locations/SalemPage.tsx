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
  Factory,
  Gem,
  TrendingUp,
  Globe2,
  Layers,
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
} from "lucide-react";
import { LOCATION_FAQS } from "@/content/locationFaqs";

export const SalemPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.salem;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = LOCATION_FAQS["salem"];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── 1. Hero Section ────────────────────────────────────────────────── */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Salem Operations" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-xs font-semibold text-gold-800">
              <Star className="w-3.5 h-3.5 fill-gold-600 text-gold-600" />
              <span>Rated Top Digital Marketing Agency in Salem &amp; Kongu Region</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Best Digital Marketing Company in{" "}
              <span className="text-gold-700">Salem</span>.
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Dominate Google search rankings, capture verified commercial buyers, and scale your revenue. Real Result delivers top-tier SEO, high-ROI Google Ads, local Google Maps 3-pack domination, and custom software systems engineered for Salem's steel fabricators, sago producers, silver artisans, textile houses, and retail leaders.
            </p>

            <DirectAnswerBox
              question="Why choose Real Result as your digital marketing partner in Salem?"
              summary="Real Result Marketing serves Salem from its office in Paramathi Velur, Namakkal district. The team provides SEO, Google Maps (local SEO), Google Ads, websites and custom business software, combining knowledge of Salem's industrial and retail clusters with campaigns measured against real enquiries and sales."
              takeaways={[
                "B2B search visibility for Salem industrial, steel, and agro-processing clusters",
                "Google Maps 3-pack dominance across Salem city and commercial zones",
                "Custom web and inventory software replacing manual spreadsheets",
                "In-person meetings from our Paramathi Velur office (about 70 km)",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("salem-inquiry")}
                className="cursor-pointer"
              >
                Connect with Salem Growth Team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Verified Salem Presence & Statistics ────────────────────────── */}
      <section className="py-16 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Regional Coverage</span>
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Real Result — Salem Regional Operations
                </h2>
                <p className="text-sm text-secondary leading-relaxed">
                  Serving enterprises across Salem, Omalur, Attur, Sankari, and Mettur with tailored digital marketing and high-performance business applications.
                </p>

                <div className="space-y-3 pt-2 text-sm text-secondary">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary block">Serving District:</strong>
                      Salem District &amp; Surrounding Industrial Corridors, Tamil Nadu 636001
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Client Desk:</strong>
                      +91 81110 33390
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Email Inquiries:</strong>
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
                  Salem Performance Benchmarks
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Why Salem Enterprises Trust Real Result
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We don't rely on guesswork. We build scientific SEO pipelines, laser-targeted PPC campaigns, and fast software platforms that convert inquiries into closed deals.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">GEO</div>
                    <div className="text-xs text-gray-300">Visibility in Google &amp; AI Search Answers</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">300%+</div>
                    <div className="text-xs text-gray-300">Average Organic Lead Growth</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">Top 3</div>
                    <div className="text-xs text-gray-300">Google Maps 3-Pack Placement</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">100%</div>
                    <div className="text-xs text-gray-300">ROI-Focused Strategy</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-border flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-gold" />
                  Verified Kongu Region Agency
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
              Growth Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Full-Spectrum Digital Marketing Services in Salem
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              End-to-end digital capabilities designed to expand your brand authority and drive verified B2B and retail inquiries.
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
                Rank on Page 1 of Google for high-intent B2B search terms across Salem, Tamil Nadu, and nationwide markets.
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
                Dominate local searches in Salem city. We optimize your Google Business Profile to capture walk-ins and phone calls.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Google Ads &amp; Performance PPC
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Targeted paid search campaigns designed to generate high-value sales calls and WhatsApp inquiries with maximum ROI.
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
                Engage Salem's consumers and business owners with creative reels, Meta Ads, and brand-building campaigns on Instagram and Facebook.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Modern Web &amp; E-Commerce Development
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Ultra-fast, mobile-friendly websites with SEO baked into every page to turn visitors into paying customers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Custom ERP &amp; Billing Software
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Bespoke cloud software replacing manual spreadsheets for inventory, multi-branch billing, and distributor tracking.
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
              Digital Marketing in Salem: FAQs
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Everything you need to know about partnering with the leading digital marketing agency in Salem.
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
              Salem Regional Consulting
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Outrank Competitors in Salem?
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Schedule a strategy call with our senior consultants for a tailored organic search audit and competitive growth roadmap.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("salem-cta")}
                className="cursor-pointer"
              >
                Request Free Salem Growth Proposal
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SalemPage;
