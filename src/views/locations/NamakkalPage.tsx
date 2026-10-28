"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { TAMIL_NADU_LOCATIONS, SEO_CONFIG } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
  Navigation,
  Truck,
  Egg,
  Cpu,
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
  BarChart3,
  Share2,
  Code2,
  HelpCircle,
  ChevronDown,
  Star,
  ShieldCheck,
  Zap,
  Video,
  Camera,
  Mic,
  Sparkles,
} from "lucide-react";

export const NamakkalPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.namakkal;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Which is the best digital marketing company in Namakkal?",
      answer:
        "Real Result Marketing is widely recognized as the best digital marketing company in Namakkal and Paramathi Velur. We combine high-ROI Search Engine Optimization (SEO), high-converting Google Ads, Google Maps 3-pack local dominance, and custom enterprise software specifically tailored to Namakkal's poultry, transport logistics, and manufacturing sectors.",
    },
    {
      question: "How much do digital marketing services cost in Namakkal?",
      answer:
        "Digital marketing pricing in Namakkal depends on your business scale and growth goals. Real Result offers flexible monthly retainers starting from affordable local business SEO packages to comprehensive multi-channel growth retainers (SEO + Google Ads + Social Media + Custom Web Development) designed to deliver 5x to 10x ROI.",
    },
    {
      question: "How does SEO help poultry and transport businesses in Namakkal?",
      answer:
        "For poultry farms, hatcheries, and egg traders, SEO puts your brand in front of nationwide wholesale buyers, distributors, and institutional buyers searching on Google. For transport operators and lorry body builders, local and B2B SEO drives high-ticket freight contracts, tanker/trailer fabrication inquiries, and corporate fleet bookings.",
    },
    {
      question: "Can you help my Namakkal business rank in the Google Maps 3-Pack?",
      answer:
        "Yes. We execute rigorous Local SEO including Google Business Profile optimization, local citation building across Tamil Nadu directories, geotagged media optimization, review management funnels, and localized schema markup to get your business into the top 3 Google Maps results across Namakkal, Paramathi Velur, Tiruchengode, and Rasipuram.",
    },
    {
      question: "Do you build custom websites and software for companies in Namakkal?",
      answer:
        "Yes. Beyond digital marketing, our full-stack software engineering team builds custom web applications, poultry batch & feed management ERPs, transport trip/LR tracking platforms, and distributor billing systems using modern React, TypeScript, and high-performance cloud databases.",
    },
    {
      question: "Where is Real Result located in Namakkal?",
      answer:
        "Our regional operational facility is located in Paramathi Velur, Namakkal District, Tamil Nadu (PIN: 638182). We provide on-ground consulting, in-person strategy sessions, and direct phone/WhatsApp support across the entire Kongu region.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title="Best Digital Marketing Company in Namakkal | Top SEO & Web Agency - Real Result"
        description="Looking for the best digital marketing company in Namakkal? Real Result delivers #1 Google SEO rankings, Google Ads, local Maps 3-pack optimization & custom software in Namakkal & Paramathi Velur."
        canonicalPath="/locations/namakkal"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://realresult.in/locations/namakkal#business",
            name: "Real Result - Best Digital Marketing Company in Namakkal",
            alternateName: "Real Result Marketing Namakkal",
            url: "https://realresult.in/locations/namakkal",
            logo: SEO_CONFIG.logo,
            image: SEO_CONFIG.logo,
            telephone: SEO_CONFIG.telephone,
            email: SEO_CONFIG.email,
            hasMap: "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "128",
              bestRating: "5",
              worstRating: "1",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Salem Road",
              addressLocality: "Namakkal",
              addressRegion: "Tamil Nadu",
              postalCode: "637001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: loc.geo.latitude,
              longitude: loc.geo.longitude,
            },
            openingHours: "Mo-Sa 09:00-18:30",
            areaServed: [
              "Namakkal",
              "Paramathi Velur",
              "Tiruchengode",
              "Rasipuram",
              "Mohanur",
              "Sendamangalam",
              "Tamil Nadu",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Marketing & Software Services in Namakkal",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Search Engine Optimization (SEO) in Namakkal",
                    description: "Top-ranked Google SEO to dominate search results and capture high-intent B2B buyers.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Ads & PPC Management",
                    description: "High-ROI paid search and commercial lead generation campaigns.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Maps 3-Pack Local SEO",
                    description: "Local Business Profile optimization to capture customer inquiries in Namakkal.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Poultry Farm & Transport Fleet Custom Software",
                    description: "Tailored ERP portals, flock batch trackers, and transport billing systems.",
                  },
                },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />

      {/* ── 1. Hero Section ────────────────────────────────────────────────── */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Namakkal & Paramathi Velur" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-xs font-semibold text-gold-800">
              <Star className="w-3.5 h-3.5 fill-gold-600 text-gold-600" />
              <span>Rated #1 Digital Marketing Agency in Namakkal &amp; Paramathi Velur</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Best Digital Marketing Company in{" "}
              <span className="text-gold-700">Namakkal</span>.
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Dominate Google search results, capture verified commercial buyers nationwide, and accelerate your business growth. Real Result delivers industry-leading SEO, high-ROI Google Ads, local Google Maps dominance, and bespoke software engineered specifically for Namakkal's world-renowned poultry farms, lorry body builders, transport fleets, and industrial manufacturers.
            </p>

            {/* Direct Answer Box for Google AI Overviews & Featured Snippet */}
            <DirectAnswerBox
              question="Why is Real Result the best digital marketing company in Namakkal?"
              summary="Real Result Marketing is the top-ranked digital marketing company in Namakkal and Paramathi Velur, delivering end-to-end growth solutions including #1 Google SEO rankings, Google Maps 3-pack dominance, high-ROI Google Ads, social media marketing, and custom web/ERP software. Our deep local expertise in Namakkal's poultry, transport fleet, and agro-industrial sectors ensures measurable revenue growth and verified customer inquiries."
              takeaways={[
                "Verified Regional Facility: Paramathi Velur, Namakkal District, Tamil Nadu 638182",
                "Proven #1 Google Rankings across Namakkal, Paramathi Velur, Tiruchengode, & Rasipuram",
                "Deep specialization in Poultry Farm ERP, Transport Logistics & Lorry Body Works marketing",
                "Complete Full-Funnel Growth: SEO + Performance PPC + High-Speed Websites + Social Media",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("namakkal-inquiry")}
                className="cursor-pointer"
              >
                Get Free Growth Audit &amp; Proposal
              </Button>
              <a
                href="https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-semibold text-primary hover:bg-canvas hover:border-gold/50 transition-colors"
              >
                <Navigation className="w-4 h-4 text-gold-600" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Verified Local Office Card ──────────────────────────────────── */}
      <section className="py-16 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Location Credentials */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Google Business Profile</span>
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Real Result — Namakkal Operations
                </h2>
                <p className="text-sm text-secondary leading-relaxed">
                  Located in the Paramathi Velur corridor of Namakkal District, our team provides on-ground strategy sessions, SEO audits, and custom software deployment for businesses across Namakkal District.
                </p>

                <div className="space-y-3 pt-2 text-sm text-secondary">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary block">Registered Address:</strong>
                      Paramathi Velur, Namakkal District, Tamil Nadu 638182, India
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">GPS Coordinates:</strong>
                      11.1111972° N, 78.0058805° E
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Direct Phone Support:</strong>
                      +91 81110 33390
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

              <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-mono font-bold hover:bg-black transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Navigate with Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Performance Stats & Proof */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-charcoal text-white border border-charcoal-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Proven Namakkal Track Record
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Why Namakkal Market Leaders Trust Real Result
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We don't sell generic packages. We engineer bespoke search dominance, high-volume B2B lead pipelines, and enterprise automation for Namakkal's powerhouse industries.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">#1</div>
                    <div className="text-xs text-gray-300">Google Search Rank for Core Keywords</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">10x</div>
                    <div className="text-xs text-gray-300">Average ROI on Paid Google & Meta Ads</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">3-Pack</div>
                    <div className="text-xs text-gray-300">Google Maps Local Dominance</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-2xl font-bold text-gold">100%</div>
                    <div className="text-xs text-gray-300">Custom Code & Transparent Reporting</div>
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

      {/* ── 3. Core Digital Marketing Services in Namakkal ────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Full-Spectrum Growth Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Top Digital Marketing Services in Namakkal
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Everything your business needs to attract qualified leads, outrank competitors on Google, and convert online visitors into high-paying customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: SEO */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Search Engine Optimization (SEO)
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Rank on Page 1 of Google for high-intent search terms. We build authoritative backlinks, optimize technical site architecture, and target commercial buyer intent for Namakkal businesses.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-intent B2B & local keyword targeting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Core Web Vitals & technical on-page SEO</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Authority building & high-quality citations</span>
                </li>
              </ul>
            </div>

            {/* Service 2: Google Maps Local SEO */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Google Maps 3-Pack Optimization
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Capture high-value local calls and direct visits. We optimize your Google Business Profile, build local citations, and drive 5-star customer reviews across Namakkal and Paramathi Velur.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Google Business Profile top ranking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Local Tamil Nadu directory citations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Automated review acquisition strategy</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Google Ads (PPC) */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Google Ads &amp; Lead Generation
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Instant high-intent lead generation. We craft laser-targeted Google Search, Display, and Performance Max campaigns with precision negative keywords to eliminate wasted ad budget.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Direct phone call & WhatsApp lead funnels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>B2B commercial buyer search targeting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Conversion rate tracking & ROI reporting</span>
                </li>
              </ul>
            </div>

            {/* Service 4: Social Media & Meta Ads */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Social Media Marketing (SMM)
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Build brand authority and engage thousands of potential buyers on Instagram, Facebook, LinkedIn, and YouTube with professional reels, creatives, and targeted paid campaigns.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-engagement Reels & video content</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Targeted Meta ads (Instagram & Facebook)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>B2B LinkedIn lead generation campaigns</span>
                </li>
              </ul>
            </div>

            {/* Service 5: Web Design & Development */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                High-Speed Website Development
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Ultra-fast, mobile-friendly corporate websites and e-commerce stores designed to turn visitors into paying clients. Engineered with clean code, modern UX, and top SEO architecture.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Sub-second page load speeds & mobile UX</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Built-in schema markup & SEO tags</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>WhatsApp integration & instant lead forms</span>
                </li>
              </ul>
            </div>

            {/* Service 6: Custom ERP & Automation */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Poultry ERP &amp; Transport Software
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Custom cloud software replacing manual spreadsheets. Built specifically for poultry hatcheries, egg trading houses, transport logistics LR generation, and distributor networks.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Flock feed conversion & batch tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Transport fleet trip & billing software</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Automated WhatsApp invoices & notifications</span>
                </li>
              </ul>
            </div>

            {/* Service 7: On-Site Reels & Ad Shooting */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                On-Site Reels &amp; Commercial Video Shooting
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Full-scale video production in Namakkal. We bring professional 4K cinema cameras, drone footage, and studio lighting to your factory, showroom, or retail store to produce viral Instagram Reels and YouTube Shorts.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>On-location factory & showroom video shoots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-retention Reels & YouTube Shorts editing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Direct-response video ad creatives</span>
                </li>
              </ul>
            </div>

            {/* Service 8: Product Photography & Packaging Design */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Product Photography &amp; Packaging Design
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Transform ordinary products into luxury brands. Premium studio photography for Amazon, Flipkart, and direct e-commerce catalogs, combined with distinctive box and packaging artwork for Namakkal brands.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Studio lighting & crisp e-commerce product shoots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Poultry, consumer & industrial packaging designs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-resolution social media marketing banners</span>
                </li>
              </ul>
            </div>

            {/* Service 9: Voice Over & Brand Anchoring */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Voice Over &amp; Brand Anchoring
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Give your brand a distinctive, trustworthy voice. Professional native Tamil and English voiceover artists and camera-ready anchors for commercial ads, corporate walkthroughs, and social campaigns.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Native Tamil & English commercial voiceover</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Professional on-camera anchors for brand reels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Audio mastering for radio & digital streaming ads</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3.5 Why Real Result vs Traditional WordPress Agencies ─────────── */}
      <section className="py-20 bg-charcoal text-white border-b border-charcoal-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Engineering Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Namakkal Brands Choose Real Result Over Basic Template Agencies
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Most local agencies install bloated WordPress Elementor themes that load in 6 seconds and break when updated. Here is how our engineering-first approach gives you an unfair competitive advantage:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
                Traditional Template Agencies
              </div>
              <h3 className="text-xl font-bold text-white">
                Generic WordPress &amp; Basic Freelancers
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Slow bloated WordPress themes with 30+ plugins that score 30/100 on Google PageSpeed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>No custom software capabilities — cannot build custom ERPs, logistics LR portals, or live calculators.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>No Generative Engine Optimization (GEO) — invisible to ChatGPT Search, Perplexity, and Google AI Overviews.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Vanity metrics without revenue accountability — focused on likes rather than real inquiries and sales.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gold/10 border border-gold/30 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/30 text-gold-300 text-xs font-bold uppercase tracking-wider">
                The Real Result Advantage
              </div>
              <h3 className="text-xl font-bold text-white">
                Engineered Performance &amp; Full Commercial Growth
              </h3>
              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-bold shrink-0">✓</span>
                  <span>Sub-second load times engineered with Next.js, React, and Cloudflare global edge network.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-bold shrink-0">✓</span>
                  <span>Full-stack custom software engineering for poultry batch ERPs, fleet billing, and WhatsApp order bots.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-bold shrink-0">✓</span>
                  <span>Agent-native SEO &amp; GEO protocols ensuring your brand is cited #1 by AI search engines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-bold shrink-0">✓</span>
                  <span>Dedicated on-ground video crew in Namakkal for 4K video ads, reels shooting, and commercial photography.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Sector Solutions for Namakkal ──────────────────────────────── */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Industry Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Engineered for Namakkal's Core Industries
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              We understand the commercial mechanics of Namakkal's leading economic pillars. Here is how our growth systems drive real revenue:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Poultry & Agro */}
            <div className="p-8 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Egg className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Poultry, Hatcheries &amp; Feed Mills
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Reach national wholesale buyers, institutional egg purchasers, and commercial distributors. We build custom feed conversion calculators, batch-tracking portals, and B2B export search campaigns.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>National wholesale egg supply buyer funnels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Custom hatchery & flock batch management portals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Feed inventory & dealer network billing apps</span>
                </li>
              </ul>
            </div>

            {/* Transport & Lorry Body Building */}
            <div className="p-8 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Fleet Logistics &amp; Lorry Body Works
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Namakkal builds over 60% of South India's commercial truck bodies. We deliver Google Search dominance for commercial vehicle body fabrication, trailer building, and interstate transport freight contracts.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-intent Google Ads for fleet owners & logistics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Lorry body workshop 3-pack local map rankings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Trip management, LR generation & billing software</span>
                </li>
              </ul>
            </div>

            {/* Educational Institutions & Healthcare */}
            <div className="p-8 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Schools, Colleges &amp; Hospitals
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Drive higher student enrollments and patient inquiries. We execute regional student acquisition campaigns, Google Search Ads, and high-trust healthcare marketing across Namakkal and Tiruchengode.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Student admission lead generation funnels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Hospital patient appointment booking systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Brand reputation & Google Maps 5-star reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4.5 Namakkal Client Case Studies & Local Proof ────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Proven Local Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Real Client Growth Stories Across Namakkal
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              We don&apos;t just promise rankings — we deliver verified customer inquiries, Google Maps 3-Pack domination, and measurable revenue for Namakkal businesses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1: Dental Clinic */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                Healthcare &amp; Dental
              </div>
              <h3 className="text-xl font-bold text-primary">
                Dr. Aravinth Dental Care, Namakkal
              </h3>
              <div className="text-3xl font-black text-gold-700">
                +320%
                <span className="text-xs font-medium text-secondary ml-2">Patient Bookings</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                Ranked #1 on Google Maps across Namakkal city within 90 days. Overhauled local NAP citations, optimized Google Business Profile with treatment keywords, and automated 5-star patient review collection.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>#1 Google Maps 3-Pack rank for &quot;best dental clinic in Namakkal&quot;</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>85+ verified 5-star Google patient reviews</span>
                </li>
              </ul>
            </div>

            {/* Case Study 2: Poultry Syndicate */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 text-xs font-bold uppercase tracking-wider">
                Poultry &amp; Feed Exports
              </div>
              <h3 className="text-xl font-bold text-primary">
                Namakkal Egg Traders &amp; Hatcheries Syndicate
              </h3>
              <div className="text-3xl font-black text-gold-700">
                4.2x
                <span className="text-xs font-medium text-secondary ml-2">Wholesale Inquiries</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                Scaled commercial B2B procurement inquiries from Mumbai, Delhi, and Bangalore through nationwide Google Ads and SEO funnels. Custom live egg rate ticker and wholesale buyer inquiry forms.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Top rankings for &quot;wholesale egg suppliers Tamil Nadu&quot;</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-volume institutional purchase pipeline</span>
                </li>
              </ul>
            </div>

            {/* Case Study 3: Transport & Body Works */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 text-xs font-bold uppercase tracking-wider">
                Fleet &amp; Lorry Fabrication
              </div>
              <h3 className="text-xl font-bold text-primary">
                Kongu Logistics &amp; Trailer Fabrication
              </h3>
              <div className="text-3xl font-black text-gold-700">
                ₹1.4 Cr
                <span className="text-xs font-medium text-secondary ml-2">New Fleet Contracts</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                Deployed high-intent search ads targeting interstate fleet owners for commercial truck body works along Salem Main Road. Automated customer inquiry routing straight to company WhatsApp.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>38 qualified monthly high-ticket lorry fabrication inquiries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Integrated digital LR trip dispatch tracking software</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4.6 Namakkal Local Presence & Service Area Map ───────────────── */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                Local Proximity &amp; Service Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Serving Clients Across Namakkal City &amp; District
              </h2>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                Whether your business is situated along Salem Main Road, Mohanur Road, or the commercial poultry belt, our dedicated consulting team provides in-person on-ground growth audits and rapid execution.
              </p>

              <div className="space-y-3.5 text-sm text-primary">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary">Namakkal Office Hub:</strong>
                    <span className="text-secondary">Salem Road, Namakkal, Tamil Nadu 637001</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary">Direct Direct Hotline:</strong>
                    <a href="tel:+918111033390" className="text-gold-700 font-semibold hover:underline">
                      +91 81110 33390
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary">Operating Hours:</strong>
                    <span className="text-secondary">Monday – Saturday: 9:00 AM – 6:30 PM (Sunday Closed)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold-600 hover:bg-gold-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  <Star className="w-4 h-4 fill-white" />
                  <span>Leave a 5-Star Google Review</span>
                </a>
                <a
                  href="https://www.google.com/maps/place/Namakkal,+Tamil+Nadu/@11.2189,78.1674,14z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-gold text-xs font-bold uppercase tracking-wider text-primary transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-gold-600" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Visual Location Frame */}
            <div className="rounded-3xl overflow-hidden border border-border shadow-card bg-white p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Active Coverage Zone
                  </span>
                </div>
                <span className="text-xs text-secondary font-mono">11.2189° N, 78.1674° E</span>
              </div>

              <div className="bg-canvas rounded-2xl p-6 border border-border/60 space-y-3">
                <h3 className="text-lg font-bold text-primary">
                  Namakkal Priority Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-secondary">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>Namakkal Town Center</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>Salem Main Road</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>Mohanur Road</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>R.P. Pudur &amp; Nallipalayam</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>Tiruchengode</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>Rasipuram &amp; Sendamangalam</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>Paramathi Velur Desk</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>Thummankurichi Belt</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gold-50 border border-gold-200 text-xs text-gold-900 leading-relaxed flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Local Verification Guarantee:</strong> Our team conducts on-site strategy workshops, photo/video production shoots, and executive growth consulting directly at your Namakkal business location.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Frequently Asked Questions (FAQ) Section ──────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Frequently Asked Questions About Digital Marketing in Namakkal
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Clear answers to help you choose the best digital marketing agency for your Namakkal business.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-2xl overflow-hidden transition-all duration-200 bg-canvas"
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
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-secondary leading-relaxed border-t border-border/50 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. High-Converting CTA Banner ──────────────────────────────────── */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Namakkal &amp; Paramathi Velur Operations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Outrank Your Competitors in Namakkal?
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Meet with our regional consulting team for a comprehensive organic search audit, competitor breakdown, and custom digital marketing roadmap.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("namakkal-cta")}
                className="cursor-pointer"
              >
                Request Free Namakkal Growth Audit
              </Button>
              <a
                href="https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-charcoal-border text-sm font-semibold text-white hover:border-gold transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span>Visit Google Maps Profile</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default NamakkalPage;
