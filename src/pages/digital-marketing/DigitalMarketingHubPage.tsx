import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  TrendingUp,
  Search,
  MapPin,
  Sparkles,
  Bot,
  MousePointerClick,
  Share2,
  FileText,
  Percent,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Award,
} from "lucide-react";

const marketingClusters = [
  {
    title: "Search Engine Optimization (SEO)",
    href: "/digital-marketing/seo",
    icon: Search,
    desc: "Technical SEO, Core Web Vitals, programmatic architecture, and authoritative backlink acquisition built to secure sustained top rankings across Tamil Nadu and national search auctions.",
    badge: "Core Foundation",
  },
  {
    title: "Local SEO & Google Business Profile",
    href: "/digital-marketing/local-seo",
    icon: MapPin,
    desc: "Dominate Google Maps local 3-pack rankings across Erode, Coimbatore, Chennai, and target Tamil Nadu districts with localized citation building, geo-tagged reviews, and proximity signals.",
    badge: "Local Dominance",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    href: "/digital-marketing/geo",
    icon: Sparkles,
    desc: "Optimize brand citations, entity consistency, and factual datasets to ensure your business is recommended by ChatGPT Search, Perplexity, Google AI Mode, and Claude.",
    badge: "Next-Gen Search",
  },
  {
    title: "AI Search Optimization (AIO)",
    href: "/digital-marketing/aio",
    icon: Bot,
    desc: "Structured direct answers, table summaries, and microdata schema specifically formatted for inclusion in Google AI Overviews and algorithmic synthesis modules.",
    badge: "AI Overviews",
  },
  {
    title: "Google Ads & Precision PPC",
    href: "/digital-marketing/google-ads",
    icon: MousePointerClick,
    desc: "High-intent transactional Google search campaigns, display retargeting, and YouTube video ads engineered to maximize ROAS with zero wasted ad spend.",
    badge: "Paid Acquisition",
  },
  {
    title: "Performance Social Media Marketing",
    href: "/digital-marketing/social-media-marketing",
    icon: Share2,
    desc: "Full-funnel Meta (Instagram/Facebook) and LinkedIn paid advertising delivering qualified commercial leads, brand engagement, and localized creator collaborations.",
    badge: "Brand & Leads",
  },
  {
    title: "Content Marketing & Digital PR",
    href: "/digital-marketing/content-marketing",
    icon: FileText,
    desc: "Topical authority pillar content, thought leadership whitepapers, and regional media mentions that establish unbeatable entity authority and organic link equity.",
    badge: "Authority",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    href: "/digital-marketing/conversion-rate-optimization",
    icon: Percent,
    desc: "Transform website visitors into qualified phone inquiries and booked orders through behavioral heatmap analysis, A/B testing, and friction-free lead capture workflows.",
    badge: "Revenue Multiplier",
  },
];

const faqs = [
  {
    q: "What makes Real Result Marketing the best digital marketing agency in Tamil Nadu?",
    a: "Real Result Marketing combines technical engineering rigor with full-funnel search and media buying. Rather than vanity metrics like impressions, we focus on measurable revenue, top-of-funnel organic search dominance, AI search discoverability (GEO/AIO), and high-intent commercial leads tailored to Tamil Nadu's industrial, export, and retail sectors.",
  },
  {
    q: "How does Generative Engine Optimization (GEO) differ from traditional SEO?",
    a: "Traditional SEO focuses on keyword ranking in blue search result links. GEO (Generative Engine Optimization) structures your company's factual credentials, service definitions, case studies, and digital citations so that AI search engines (like ChatGPT Search, Perplexity, and Google AI Overviews) synthesize and cite your brand as an authoritative recommendation.",
  },
  {
    q: "Which Tamil Nadu cities does Real Result Marketing provide on-ground consulting for?",
    a: "Our corporate headquarters and primary engineering lab is in Erode, Tamil Nadu. We provide direct consulting, localized search strategies, and client reviews across Erode, Coimbatore, Chennai, Tiruppur, Salem, Madurai, Trichy, Tirunelveli, and statewide industrial corridors.",
  },
  {
    q: "What is the typical timeframe to see measurable results from SEO?",
    a: "Local SEO and Google Business Profile improvements often yield measurable phone calls and map visits within 30 to 60 days. Comprehensive organic search engine optimization and programmatic topic clusters typically demonstrate significant domain authority gains and commercial lead growth within 3 to 6 months.",
  },
];

export const DigitalMarketingHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Best Digital Marketing Agency in Tamil Nadu | Real Result Marketing"
        description="Real Result Marketing is the leading digital marketing agency in Tamil Nadu, India. Headquartered in Erode, delivering data-backed SEO, GEO, Local SEO, Google Ads, and custom growth funnels."
        canonicalPath="/digital-marketing"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digital Marketing Services Tamil Nadu",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Digital Marketing & SEO",
          areaServed: "Tamil Nadu, India",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Marketing Capabilities",
            itemListElement: marketingClusters.map((c) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: c.title,
                description: c.desc,
              },
            })),
          },
        }}
      />

      {/* Hero */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border relative">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Digital Marketing" }]} />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <TrendingUp className="w-3.5 h-3.5 text-gold-600" />
              <span>Primary Growth Division · Tamil Nadu, India</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.08]">
              Digital Marketing Agency in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Dominate traditional search results, AI-generated answers, and paid media funnels. Real Result Marketing builds defensible search visibility, local market authority, and high-converting customer acquisition systems for forward-moving businesses.
            </p>

            {/* Direct Answer Box for AI & Search Snippets */}
            <DirectAnswerBox
              question="What is Real Result Marketing's Digital Marketing Model?"
              summary="Real Result Marketing is an established digital marketing agency based in Erode, Tamil Nadu, delivering full-spectrum SEO, Generative Engine Optimization (GEO), Google Ads, and local search dominance for manufacturing, export, healthcare, and retail businesses across Coimbatore, Chennai, and statewide. We replace vendor fragmentation with engineered, high-intent revenue growth."
              takeaways={[
                "Engineered for Google Search & AI Overviews (ChatGPT, Perplexity, Gemini)",
                "Tamil Nadu regional dominance across Erode, Coimbatore, Chennai & Tiruppur",
                "Strict white-hat methodology with zero black-hat or doorway shortcuts",
                "Full-funnel integration with custom software and conversion optimization",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("digital-marketing-hub-hero")}
                className="cursor-pointer"
              >
                Request Strategic Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/case-studies"
              >
                Explore Client Results
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Specialized Service Clusters */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <Badge variant="gold">SPECIALIZED SERVICE PILLARS</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
              Eight Pillars of Modern Search & Performance
            </h2>
            <p className="text-base text-secondary">
              Each capability is executed by specialized practitioners with deep expertise in technical search, algorithmic updates, and paid media unit economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingClusters.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <Link
                  key={cluster.href}
                  to={cluster.href}
                  className="group p-6 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-surface group-hover:bg-gold-50 border border-border flex items-center justify-center text-primary group-hover:text-gold-700 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface text-secondary font-medium">
                        {cluster.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-primary group-hover:text-gold-700 transition-colors">
                      {cluster.title}
                    </h3>

                    <p className="text-xs text-secondary leading-relaxed line-clamp-4">
                      {cluster.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-gold-700">
                    <span>Explore Methodology</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Regional Focus: Tamil Nadu Hubs */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="outline">LOCAL TAMIL NADU RELEVANCE</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                Grounded in Tamil Nadu. Competing on the Global Stage.
              </h2>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                We understand the unique commercial dynamics of Tamil Nadu—from Tiruppur's knitwear export chains and Coimbatore's pump and precision foundries to Erode's agro-industrial centers and Chennai's technology hubs.
              </p>
              <p className="text-sm text-secondary leading-relaxed">
                Our campaigns blend English, Tamil-English transliterated query behaviors, and international B2B buyer intent to capture traffic that actually converts into invoices.
              </p>
              <div className="pt-2">
                <Button variant="outline" size="md" href="/locations/tamil-nadu">
                  View All Tamil Nadu Locations
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { city: "Erode (HQ)", desc: "Corporate Lab & Agro-Textiles", href: "/locations/erode" },
                { city: "Coimbatore", desc: "Foundries, Pumps & SaaS", href: "/locations/coimbatore" },
                { city: "Chennai", desc: "Automotive, Tech & Ports", href: "/locations/chennai" },
                { city: "Tiruppur", desc: "Apparel Exports & Knitwear", href: "/locations/tiruppur" },
                { city: "Salem", desc: "Steel, Starch & Retail", href: "/locations/salem" },
                { city: "Madurai", desc: "Food, Culture & Commercial", href: "/locations/madurai" },
              ].map((loc) => (
                <Link
                  key={loc.href}
                  to={loc.href}
                  className="p-5 rounded-2xl bg-canvas border border-border hover:border-gold/40 hover:bg-surface transition-all group"
                >
                  <div className="text-sm font-bold text-primary group-hover:text-gold-700">
                    {loc.city}
                  </div>
                  <div className="text-[11px] text-muted mt-1 leading-snug">
                    {loc.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <Badge variant="gold">FREQUENTLY ASKED QUESTIONS</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Digital Marketing in Tamil Nadu: Common Inquiries
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-border shadow-subtle space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-primary">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="gold">START GROWING TODAY</Badge>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Outrank Competitors Across Tamil Nadu?
            </h2>
            <p className="text-charcoal-muted text-base leading-relaxed">
              Schedule a comprehensive digital marketing audit with our senior strategists in Erode. We'll analyze your search visibility, technical bottlenecks, and growth opportunities.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("digital-marketing-hub-bottom-cta")}
                className="cursor-pointer"
              >
                Schedule Marketing Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Contact Erode HQ
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DigitalMarketingHubPage;
