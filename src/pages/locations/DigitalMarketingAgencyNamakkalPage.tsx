import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { TAMIL_NADU_LOCATIONS, SEO_CONFIG, SOCIAL_LINKS, GOOGLE_MAPS_URL } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
  Navigation,
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
  ChevronDown,
  Star,
  ShieldCheck,
  Zap,
  Bot,
  Layers,
  Database,
  Building2,
  Truck,
  Egg,
  Store,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const DigitalMarketingAgencyNamakkalPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.namakkal;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Which is the best digital marketing agency in Namakkal?",
      answer:
        "Real Result Marketing is recognized as the best performance-driven digital marketing agency in Namakkal and Paramathi Velur. Unlike traditional agencies that focus on vanity metrics, we combine high-converting Meta and Google Ads, CRM sales automation, AI telecalling, and hyper-local SEO specifically tailored to Namakkal's real estate, poultry, transport fleet, and retail sectors.",
    },
    {
      question: "How do Meta and Google Ads drive real revenue for Namakkal businesses?",
      answer:
        "We eliminate wasted budget on boost posts. Our targeted Google Search campaigns capture high-intent buyers searching for specific services in Namakkal, while laser-focused Meta ad funnels target commercial property investors, poultry wholesale buyers, and local retail shoppers with custom landing pages and instant WhatsApp/CRM routing.",
    },
    {
      question: "Why is CRM and sales automation critical for marketing success?",
      answer:
        "Leads alone don't equal revenue. Without a structured CRM, up to 70% of inbound leads are dropped or contacted too late. Real Result sets up automated CRM pipelines that capture leads from clicks to close, trigger instant WhatsApp notifications, dispatch AI-assisted follow-ups, and track actual closed sales.",
    },
    {
      question: "Can Real Result help my Namakkal business rank in the Google Maps 3-Pack?",
      answer:
        "Yes. We execute comprehensive Local SEO including Google Business Profile primary category calibration, service area expansion (Namakkal, Paramathi Velur, Tiruchengode, Rasipuram), high-authority local citations, geotagged media, and review keyword injection to secure your place in the top 3 Google Maps results.",
    },
    {
      question: "Where is Real Result located in Namakkal?",
      answer:
        "Our regional operational facility is located in Paramathi Velur, Namakkal District, Tamil Nadu 638182. We provide direct on-ground strategy sessions, executive audits, and phone/WhatsApp support (+91 81110 33390) for businesses across the entire Namakkal district.",
    },
    {
      question: "How do I get started with Real Result in Namakkal?",
      answer:
        "You can request a free growth audit and competitor strategy proposal by clicking our consultation button, calling us directly at +91 81110 33390, or visiting our verified Google Business Profile in Paramathi Velur, Namakkal.",
    },
  ];

  const customSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Real Result Marketing",
      image: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
      "@id": "https://realresult.in",
      url: "https://realresult.in/digital-marketing-agency-namakkal",
      telephone: "+918111033390",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Paramathi Velur",
        addressLocality: "Namakkal",
        addressRegion: "TN",
        postalCode: "638182",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.1111972,
        longitude: 78.0058805,
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:30",
      },
      sameAs: [
        GOOGLE_MAPS_URL,
        "https://facebook.com/people/Real-Result-Marketing-Digital-Ads-Expert/61585261640135/",
        "https://instagram.com/real_result_/",
        "https://linkedin.com/in/real-result-50445a442/",
        "https://x.com/RealResult_in",
        "https://www.youtube.com/channel/UCicDHwdRdTSOdJSwpFXkuSg",
      ],
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Namakkal",
        },
        {
          "@type": "AdministrativeArea",
          name: "Paramathi Velur",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tiruchengode",
        },
        {
          "@type": "AdministrativeArea",
          name: "Rasipuram",
        },
      ],
      knowsAbout: [
        "Digital Marketing",
        "Performance Marketing",
        "Meta Ads Management",
        "Google Ads Optimization",
        "CRM Setup and Business Automation",
        "AI Telecalling and IVR Solutions",
        "Lead Generation",
        "Local SEO & Google Maps 3-Pack Optimization",
      ],
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
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title="Best Digital Marketing Agency in Namakkal | Real Result Marketing"
        description="Looking for real growth? Real Result Marketing delivers premium performance marketing, Meta/Google Ads, and advanced CRM sales automation for businesses across Namakkal."
        canonicalPath="/digital-marketing-agency-namakkal"
        schema={customSchema}
      />

      {/* ── 1. Hero Section ────────────────────────────────────────────────── */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Digital Marketing Agency in Namakkal" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-xs font-semibold text-gold-800">
              <Star className="w-3.5 h-3.5 fill-gold-600 text-gold-600" />
              <span>Performance Marketing &amp; Sales Automation • Namakkal, Tamil Nadu</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Performance-Driven Digital Marketing Agency in{" "}
              <span className="text-gold-700">Namakkal</span>
            </h1>

            <div className="space-y-4 text-base sm:text-xl text-secondary leading-relaxed font-normal">
              <p>
                Most local marketing agencies sell you empty promises like &ldquo;likes&rdquo; and &ldquo;followers.&rdquo; At <strong>Real Result Marketing</strong>, we build high-converting infrastructure designed to drive actual revenue. Headquartered in the Namakkal region, we bridge the gap between creative advertising and technical backend sales automation.
              </p>
              <p className="text-sm sm:text-lg text-secondary/90">
                Whether you operate a booming real estate firm in Namakkal town, an export manufacturing unit, or a retail showroom on Salem Road, we engineer the marketing systems that bring you qualified buyers.
              </p>
            </div>

            {/* Direct Answer Box for Google AI Overviews & Local Snippets */}
            <DirectAnswerBox
              question="Why choose Real Result as your digital marketing agency in Namakkal?"
              summary="Real Result Marketing is a performance-driven digital marketing agency located in the Namakkal region (Paramathi Velur). We engineer high-converting paid Meta & Google Ads, automated CRM funnels, AI telecalling, and hyper-local SEO specifically tailored for Namakkal's real estate, poultry, transport fleet, and Salem Road retail businesses."
              takeaways={[
                "Verified Regional Facility: Paramathi Velur, Namakkal District, Tamil Nadu 638182",
                "Proven Local Dominance: Namakkal, Paramathi Velur, Tiruchengode, & Rasipuram",
                "End-to-End Pipeline: Laser Ads + Custom CRM + Instant WhatsApp Alerts + AI Call Qualification",
                "Built for Local Industry: Real Estate, Poultry Farming, Truck Body Building & Retail Outlets",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("namakkal-hero-inquiry")}
                className="cursor-pointer"
              >
                Get Free Growth Audit &amp; Proposal
              </Button>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-semibold text-primary hover:bg-canvas hover:border-gold/50 transition-colors"
              >
                <Navigation className="w-4 h-4 text-gold-600" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted" />
              </a>
              <a
                href="tel:+918111033390"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-canvas border border-border text-sm font-semibold text-primary hover:border-gold/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-700" />
                <span>+91 81110 33390</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Core Growth Services for Namakkal Businesses ────────────────── */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              High-Converting Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Our Core Growth Services for Namakkal Businesses
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              We design and execute integrated revenue systems that turn online searches into booked client contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Paid Ads */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border shadow-card hover:border-gold/50 transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Meta &amp; Google Paid Advertising
              </h3>
              <p className="text-base text-secondary leading-relaxed">
                Stop wasting budget on unoptimized boosts. We run targeted Facebook, Instagram, and Google Search ad campaigns that speak directly to local intent.
              </p>
              <ul className="space-y-2.5 pt-2 text-sm font-medium text-primary">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Laser-targeted Google Search ads targeting commercial intent</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Meta Lead Ads connected directly to instant WhatsApp routing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Negative keyword sculpting to eliminate non-buying clicks</span>
                </li>
              </ul>
            </div>

            {/* Service 2: CRM & Sales Automation */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border shadow-card hover:border-gold/50 transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                CRM &amp; Sales Automation Integration
              </h3>
              <p className="text-base text-secondary leading-relaxed">
                We don&apos;t just dump leads into your inbox. We design custom CRM systems that track every lead from click to close, ensuring no revenue slips through the cracks.
              </p>
              <ul className="space-y-2.5 pt-2 text-sm font-medium text-primary">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Centralized pipeline tracking every inquiry and customer touchpoint</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Instant automated WhatsApp &amp; SMS confirmation alerts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Staff lead follow-up reminders with transparent conversion tracking</span>
                </li>
              </ul>
            </div>

            {/* Service 3: AI Telecalling & Smart IVR */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border shadow-card hover:border-gold/50 transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Bot className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                AI Telecalling &amp; Smart IVR Setups
              </h3>
              <p className="text-base text-secondary leading-relaxed">
                Save time and scale your outreach. Our advanced voice automation systems instantly qualify inquiries, keeping your sales funnel active 24/7.
              </p>
              <ul className="space-y-2.5 pt-2 text-sm font-medium text-primary">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Sub-30-second automated callback to inbound web leads</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Intelligent pre-qualification before routing to your sales team</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>24/7 after-hours automated inquiry capture &amp; calendar booking</span>
                </li>
              </ul>
            </div>

            {/* Service 4: Hyper-Local SEO */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border shadow-card hover:border-gold/50 transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Hyper-Local SEO Dominance
              </h3>
              <p className="text-base text-secondary leading-relaxed">
                Get discovered right when customers look for you. We optimize your local digital footprint to dominate Namakkal search queries.
              </p>
              <ul className="space-y-2.5 pt-2 text-sm font-medium text-primary">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Google Business Profile top ranking for Namakkal &amp; Velur</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Google Maps 3-Pack local customer call generation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Schema markup &amp; AI answer engine optimization (GEO/AIO)</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Why Namakkal Brands Trust Real Result ──────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                Local Market Intelligence
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight leading-tight">
                Why Namakkal Brands Trust Real Result
              </h2>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                Unlike agencies that operate strictly from remote tier-1 metros, we understand the local business landscape of the Namakkal district. We know what drives poultry logistics, how real estate buyers search in Tiruchengode, and how retail markets operate in Velur. We combine native local market understanding with world-class performance marketing tech.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-canvas border border-border space-y-2">
                  <div className="font-bold text-primary flex items-center gap-2">
                    <Egg className="w-4 h-4 text-gold-700" />
                    <span>Poultry &amp; Feed Logistics</span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    We know how institutional egg and wholesale poultry buyers evaluate suppliers on Google.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-canvas border border-border space-y-2">
                  <div className="font-bold text-primary flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gold-700" />
                    <span>Real Estate &amp; Construction</span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    High-ticket Meta campaigns targeted at NRIs, local businessmen, and industrial land buyers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-canvas border border-border space-y-2">
                  <div className="font-bold text-primary flex items-center gap-2">
                    <Truck className="w-4 h-4 text-gold-700" />
                    <span>Transport &amp; Body Building</span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    B2B search capture for lorry container fabrication, tanker manufacturing, and fleet contracts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-canvas border border-border space-y-2">
                  <div className="font-bold text-primary flex items-center gap-2">
                    <Store className="w-4 h-4 text-gold-700" />
                    <span>Salem Road Retail Showrooms</span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    Foot-traffic driving local map rankings, festive campaign blasts, and WhatsApp offer broadcasts.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Operational Facility Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-charcoal text-white border border-charcoal-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Google Business Profile</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Real Result Marketing — Regional Office
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Headquartered right here in the Paramathi Velur corridor of Namakkal District. We welcome face-to-face consultations and provide on-ground execution.
                </p>

                <div className="space-y-3 pt-2 text-xs text-gray-300 border-t border-charcoal-border">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Registered Address:</strong>
                      Paramathi Velur, Namakkal District, Tamil Nadu 638182
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Compass className="w-4 h-4 text-gold shrink-0" />
                    <div>
                      <strong className="text-white block">Coordinates:</strong>
                      11.1111972° N, 78.0058805° E
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    <div>
                      <strong className="text-white block">Direct Phone:</strong>
                      +91 81110 33390
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold shrink-0" />
                    <div>
                      <strong className="text-white block">Business Hours:</strong>
                      Monday – Saturday: 09:00 AM – 06:30 PM
                    </div>
                  </div>
                </div>

                {/* Embedded Interactive Google Map */}
                <div className="rounded-2xl overflow-hidden border border-charcoal-border aspect-[16/9] w-full my-2">
                  <iframe
                    src="https://maps.google.com/maps?q=11.1111972,78.0058805&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Real Result Marketing Google Maps Location"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-border flex flex-col gap-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold text-primary font-bold text-xs hover:bg-gold-400 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Navigate on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Strategic Industry Applications in Namakkal ─────────────────── */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Sector Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Tailored Marketing Playbooks for Namakkal&apos;s Economy
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              How we deploy Meta Ads, Google PPC, and sales automation for specific Namakkal business categories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sector 1: Real Estate */}
            <div className="p-8 rounded-3xl bg-white border border-border shadow-card hover:border-gold/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Namakkal Real Estate &amp; Builders
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Generate verified inquiries for villas, DTCP-approved plots, and commercial showroom spaces. We implement 3D virtual tour ads and instant CRM lead verification.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-intent Meta lead generation with WhatsApp routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>NRI and investor targeting across Kongu region</span>
                </li>
              </ul>
            </div>

            {/* Sector 2: Poultry & Agro */}
            <div className="p-8 rounded-3xl bg-white border border-border shadow-card hover:border-gold/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Egg className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Poultry Farms &amp; Feed Mills
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Connect directly with national egg wholesalers, feed dealers, and veterinary distributors across South India through targeted B2B Google Search and automated inquiry tracking.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>B2B wholesale buyer search funnels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Custom feed ERP portals and batch trackers</span>
                </li>
              </ul>
            </div>

            {/* Sector 3: Retail Showrooms */}
            <div className="p-8 rounded-3xl bg-white border border-border shadow-card hover:border-gold/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Salem Road Retail &amp; Commercial Outlets
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Drive consistent in-store foot traffic for jewelry showrooms, electronics retailers, and textile stores with geo-fenced Instagram ads and Google Maps 3-Pack optimization.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Local radius ad campaigns with WhatsApp offer claim</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Automated 5-star Google review collection</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4b. Featured Case Study: Namakkal Real Estate Meta Ads ───────── */}
      <section className="py-16 bg-white border-b border-border">
        <Container size="wide">
          <div className="p-8 sm:p-12 rounded-3xl bg-charcoal text-white border border-charcoal-border shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-4xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-xs font-mono font-bold text-gold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Local Case Study • Namakkal &amp; Tiruchengode</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                How We Generated 500+ High-Quality Real Estate Leads in Namakkal Using Meta Ads
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Traditional hoardings and newspaper ads delivered unmeasurable inquiries with 24-hour response delays. We engineered a full-funnel Meta Ads machine connected to an instant WhatsApp CRM qualification pipeline for a premier residential layout in Namakkal district.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-3xl font-bold text-gold">520+</div>
                  <div className="text-xs text-gray-300">Verified Buyer Inquiries</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-3xl font-bold text-gold">₹38 Cr+</div>
                  <div className="text-xs text-gray-300">Property Sales Pipeline</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-3xl font-bold text-gold">&lt; 15s</div>
                  <div className="text-xs text-gray-300">Automated WhatsApp Lead Routing</div>
                </div>
              </div>
              <blockquote className="p-5 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-200 italic leading-relaxed">
                &ldquo;Real Result Marketing completely transformed our lead generation. Their Meta Ads automation and CRM setup helped our real estate business grow rapidly in Namakkal.&rdquo;
                <footer className="text-xs text-gold-400 not-italic font-mono mt-2 font-semibold">
                  — M. Karthikeyan, Managing Director, Kongu Promoters
                </footer>
              </blockquote>
              <div className="pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-300 transition-colors"
                >
                  <span>Explore Full Real Estate Case Study in Our Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Review Optimization & Proof Section ─────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                Reputation Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Guided Review Strategy That Builds Google Search Authority
              </h2>
              <p className="text-sm sm:text-base text-secondary">
                Google doesn&apos;t just count star ratings—it parses the exact words inside client reviews to determine ranking relevance.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gold-50/60 border border-gold-200 space-y-4">
              <div className="flex items-center gap-2 text-gold-800 font-bold text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>What Satisfied Clients Write About Real Result:</span>
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-primary italic leading-relaxed">
                &ldquo;Real Result is the best digital marketing agency we have worked with. Their Meta Ads and CRM setup helped our business grow in Namakkal.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between text-xs text-secondary pt-2 border-t border-gold-200/60">
                <span className="flex items-center gap-1 font-semibold text-primary">
                  <Star className="w-3.5 h-3.5 fill-gold-600 text-gold-600" />
                  <span>4.9 / 5.0 Rating from 120+ Kongu Region Businesses</span>
                </span>
                <Link
                  to="/review"
                  className="font-bold text-gold-800 hover:text-gold-900 underline inline-flex items-center gap-1"
                >
                  <span>Write a Google Review</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Frequently Asked Questions (FAQ) ───────────────────────────── */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Namakkal Digital Marketing FAQs
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Everything you need to know about scaling your revenue with Real Result in Namakkal.
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
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-secondary leading-relaxed border-t border-border/50 bg-canvas">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. High-Converting CTA Banner ─────────────────────────────────── */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Namakkal &amp; Paramathi Velur Operations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Build High-Converting Marketing Infrastructure?
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Meet directly with our regional engineering and ads team for a complimentary local search audit, competitor breakdown, and custom sales automation roadmap.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("namakkal-footer-cta")}
                className="cursor-pointer"
              >
                Request Free Namakkal Growth Audit
              </Button>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-charcoal-border text-sm font-semibold text-white hover:border-gold transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span>Visit Google Maps Profile</span>
              </a>
              <a
                href="https://wa.me/918111033390"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-sm font-semibold text-white transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DigitalMarketingAgencyNamakkalPage;
