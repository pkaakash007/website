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

export const ErodeHQPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.erode;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Which is the best digital marketing company in Erode?",
      answer:
        "Real Result Marketing is widely recognized as the best digital marketing company in Erode. Headquartered directly on Perundurai Road near Collectorate, we provide ROI-focused Search Engine Optimization (SEO), high-converting Google Ads, Google Maps 3-pack local dominance, social media marketing, and custom enterprise software for Erode's leading textile, turmeric, manufacturing, and healthcare businesses.",
    },
    {
      question: "Where is the Real Result office located in Erode?",
      answer:
        "Our official headquarters and engineering lab is located at 148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011. You can visit us for in-person strategy sessions or reach our consulting team directly at +91 98420 12345.",
    },
    {
      question: "How does SEO help textile and turmeric exporters in Erode?",
      answer:
        "Our specialized export SEO targets international and nationwide commercial wholesale buyers searching on Google for textile manufacturing, fabric processing, yarn spinning, and turmeric export commodities. We ensure your business ranks #1, driving qualified bulk trade inquiries directly to your sales desk.",
    },
    {
      question: "What makes Real Result different from other digital marketing agencies in Erode?",
      answer:
        "Unlike generic agencies, Real Result combines senior in-house software engineers with elite SEO practitioners. We do not use third-party templates or automated spam. We write clean, high-speed custom code, execute scientific keyword targeting, and deliver transparent monthly ROI tracking with zero vanity metrics.",
    },
    {
      question: "Do you provide custom software and ERP development in Erode?",
      answer:
        "Yes. We build custom cloud ERP systems, factory batch-tracking portals, distributor billing software, and high-performance React/TypeScript business applications for Erode, Bhavani, and Perundurai manufacturers.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title="Best Digital Marketing Company in Erode | Top SEO Agency HQ - Real Result"
        description="Looking for the best digital marketing company in Erode? Real Result HQ provides #1 Google SEO, Google Ads, local Maps 3-pack ranking & custom software in Erode, TN."
        canonicalPath="/locations/erode"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
            "@id": "https://realresult.in/locations/erode#hq",
            name: "Real Result - Best Digital Marketing Company in Erode (Headquarters)",
            alternateName: "Real Result Marketing Erode HQ",
            url: "https://realresult.in/locations/erode",
            logo: SEO_CONFIG.logo,
            image: SEO_CONFIG.logo,
            telephone: SEO_CONFIG.telephone,
            email: SEO_CONFIG.email,
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "184",
              bestRating: "5",
              worstRating: "1",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: SEO_CONFIG.headquarters.streetAddress,
              addressLocality: "Erode",
              addressRegion: "Tamil Nadu",
              postalCode: "638011",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: loc.geo.latitude,
              longitude: loc.geo.longitude,
            },
            openingHours: "Mo-Sa 09:00-18:30",
            areaServed: [
              "Erode",
              "Perundurai",
              "Bhavani",
              "Gobichettipalayam",
              "Anthiyur",
              "Sathyamangalam",
              "Tamil Nadu",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Marketing & Custom Software Services in Erode",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Search Engine Optimization (SEO) in Erode",
                    description: "Top Google ranking strategies for local businesses, manufacturers, and exporters.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Ads & PPC Management in Erode",
                    description: "High-ROI paid search advertising delivering verified B2B leads.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Maps Local 3-Pack SEO",
                    description: "Local Business Profile optimization across Erode, Bhavani, and Perundurai.",
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
              { label: "Erode Headquarters" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-xs font-semibold text-gold-800">
              <Star className="w-3.5 h-3.5 fill-gold-600 text-gold-600" />
              <span>Official Headquarters &amp; Innovation Lab · Erode, Tamil Nadu</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Best Digital Marketing Company in{" "}
              <span className="text-gold-700">Erode</span>.
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Direct, on-ground growth consulting and technical development from our central Erode headquarters. We help Erode's leading textile mills, turmeric traders, manufacturing enterprises, hospitals, and retail brands dominate Google search, generate verified leads, and automate operations with custom software.
            </p>

            <DirectAnswerBox
              question="Why is Real Result the top digital marketing agency in Erode?"
              summary="Real Result Marketing is headquartered at 148/2, Perundurai Road, Erode. We deliver proven #1 Google search rankings, Google Maps 3-pack dominance, high-converting Google Ads campaigns, and custom software systems designed specifically for the Kongu region's manufacturing, textile, agro-commodity, and healthcare enterprises."
              takeaways={[
                "Physical Corporate Office: 148/2, Perundurai Road, Near Collectorate, Erode 638011",
                "Proven #1 Google Rankings across Erode, Perundurai, Bhavani, and Gobichettipalayam",
                "Complete in-house software engineering and performance marketing teams",
                "Dedicated regional phone and WhatsApp support desk (+91 98420 12345)",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("erode-hq-inquiry")}
                className="cursor-pointer"
              >
                Schedule In-Person Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Verified HQ Details Card ────────────────────────────────────── */}
      <section className="py-16 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Corporate Headquarters</span>
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Erode Headquarters Information
                </h2>
                <p className="text-sm text-secondary leading-relaxed">
                  Our central marketing laboratory and technical engineering hub, providing on-ground consulting for businesses across the Kongu corridor.
                </p>

                <div className="space-y-3 pt-2 text-sm text-secondary">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary block">Official Address:</strong>
                      148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011, India
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Direct Line:</strong>
                      +91 98420 12345
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Email:</strong>
                      hello@realresult.in
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
                  Headquarters Capabilities
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Why Erode Market Leaders Choose Real Result
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We combine enterprise-grade search algorithms with deep regional market knowledge to give your business an insurmountable competitive advantage.
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
                    <div className="text-2xl font-bold text-gold">#1</div>
                    <div className="text-xs text-gray-300">Google Rank for High-Intent Queries</div>
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
                Rank #1 on Google for high-intent search terms across Erode, Tamil Nadu, and international export markets.
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

      {/* ── 5. High-Converting CTA Banner ──────────────────────────────────── */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Erode Headquarters
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Partner with Erode's Leading Growth Agency?
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Visit our Erode office on Perundurai Road or request an on-ground growth audit and custom proposal from our senior strategists.
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
