import React from "react";
import { Image } from "@/components/common/Image";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { ContactForm } from "@/components/common/ContactForm";
import { getWhatsAppUrl } from "@/config";
import {
  TrendingUp,
  Search,
  MousePointerClick,
  Share2,
  Tv,
  Target,
  BarChart2,
  Radio,
  Building,
  Mail,
  Zap,
  CheckCircle2,
  Sparkles,
  MapPin,
  Film,
  Globe,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";


const digitalAcquisition = [
  {
    title: "High-Intent SEO & Technical Dominance",
    icon: Search,
    category: "Organic Demand",
    desc: "Target transactional customer searches with programmatic search indexing, schema markup, and authoritative editorial backlink moats.",
    points: ["Programmatic Search Indexing", "Intent Keyword Sculpting", "Site Speed & Core Web Vitals"],
  },
  {
    title: "Google PPC & Paid Search Auctions",
    icon: MousePointerClick,
    category: "Paid Intent",
    desc: "Capture active buyers at the exact moment of commercial search with negative keyword filtering, dynamic landing page alignment, and bidding algorithms.",
    points: ["Search Network Dominance", "Competitor Keyword Capture", "Negative Bid Optimization"],
  },
  {
    title: "Paid Social & High-Velocity Video",
    icon: Share2,
    category: "Social Scale",
    desc: "High-impact video ad variations across Meta, LinkedIn, and YouTube engineered to stop the scroll and build qualified interest.",
    points: ["Meta Dynamic Ads", "LinkedIn B2B Account Targeting", "YouTube Pre-Roll Campaigns"],
  },
  {
    title: "Programmatic Advertising & DSP Media",
    icon: Target,
    category: "Audience Network",
    desc: "Targeted cross-web display and video inventory buying across premium publisher networks using first-party audience segments.",
    points: ["Demand-Side Platform (DSP)", "Cross-Publisher Retargeting", "Brand Safety Filtering"],
  },
];

const mediaEcosystem = [
  {
    title: "Outdoor Advertising & DOOH Networks",
    icon: Building,
    desc: "High-visibility dynamic digital billboards located in prime city centers, highway corridors, airport concourses, and shopping districts.",
    reach: "Metropolitan Arterials",
  },
  {
    title: "Television & Connected TV (CTV)",
    icon: Tv,
    desc: "Linear broadcast television schedules coupled with unskippable high-definition streaming ads across major OTT and Smart TV networks.",
    reach: "Prime-Time Broadcast & OTT",
  },
  {
    title: "Radio & Digital Audio Broadcasts",
    icon: Radio,
    desc: "Engage captive morning and evening commuters across terrestrial FM radio, Spotify streaming, and podcast sponsorships.",
    reach: "Commuter Drive-Time",
  },
  {
    title: "Cinema & Multiplex Advertising",
    icon: Film,
    desc: "Deliver your brand story in high-definition surround sound to captive theater audiences before blockbuster releases.",
    reach: "Captive Big-Screen Audience",
  },
  {
    title: "Transit & Fleet Advertising",
    icon: Zap,
    desc: "Complete branded vehicle wraps on metro trains, public buses, and transit shelters providing ubiquitous physical exposure.",
    reach: "Public Transit Corridors",
  },
  {
    title: "Print & Business Publications",
    icon: Mail,
    desc: "Authoritative print full-page placements and advertorial features in national broadsheet newspapers and premier trade magazines.",
    reach: "Tier-1 Business Readers",
  },
];

const growthAndBrand = [
  {
    title: "Influencer & Creator Endorsements",
    icon: Users,
    desc: "Scouting, contracting, and managing verified creators whose audience aligns with your product to deliver credible endorsements.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    icon: TrendingUp,
    desc: "Systematic multivariate landing page split testing, frictionless lead forms, and psychological conversion design.",
  },
  {
    title: "Attribution & DNI Call Tracking",
    icon: BarChart2,
    desc: "Dynamic Number Insertion (DNI) technology and multi-touch server attribution connecting every call and sale to originating media.",
  },
  {
    title: "Digital PR & Editorial Features",
    icon: Globe,
    desc: "Securing authoritative tier-one news placements, thought leadership articles, and syndicated brand discourse.",
  },
];

export default function MarketingPage() {
  const whatsappMarketingUrl = getWhatsAppUrl("marketing");

  return (
    <div className="flex flex-col min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-border relative overflow-hidden">
        {/* Subtle gold glow */}
        <div className="absolute top-10 right-10 w-[500px] h-[350px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              PRIMARY GROWTH DIVISION • REAL RESULT
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary leading-[1.08]">
              Make your brand{" "}
              <span className="relative inline-block text-primary">
                impossible
                <span className="absolute bottom-1 left-0 w-full h-2 bg-gold/30 -z-10" />
              </span>{" "}
              to ignore.
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal max-w-2xl">
              From prime-time television and outdoor digital billboards to laser-targeted search funnels and multi-touch attribution. We synchronize high-impact visibility with verifiable commercial conversion.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Button variant="gold" size="lg" href="#inquiry" withArrow>
                Plan Your Campaign
              </Button>
              <a
                href={whatsappMarketingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-surface border border-border text-primary text-sm font-semibold transition-colors shadow-subtle"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Editorial Visual Hero Feature */}
      <section className="py-16 sm:py-20 bg-charcoal text-white border-b border-charcoal-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                Unified Media Buying
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                One narrative. Every screen and street in your market.
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Most agencies fracture attention by isolating digital ads from real-world media. Real Result plans television, billboards, search, social, and cinema under one synchronised campaign schedule with verified attribution.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-gold-300">
                <span>✦ Broadcast Reach</span>
                <span>✦ Digital Precision</span>
                <span>✦ Closed-Loop Attribution</span>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-charcoal-border">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-luminosity"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542314831-c6a4d2757597?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/90">
                <span className="bg-charcoal/80 px-3 py-1 rounded-full border border-charcoal-border">
                  Metropolitan Media Orchestration
                </span>
                <span className="text-gold">100% Attributed</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Digital Performance Acquisition Grid */}
      <section id="digital" className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-2xl mb-14">
            <Badge variant="gold">DIGITAL ACQUISITION</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight mt-3">
              High-Intent Search & Conversion Funnels
            </h2>
            <p className="text-sm text-secondary mt-2">
              Structured to capture buyers at commercial consideration and maximize pipeline conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalAcquisition.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/40 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-black transition-colors shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white border border-border text-muted">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/80 flex flex-wrap gap-2">
                    {item.points.map((pt, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-border text-primary"
                      >
                        ✦ {pt}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Broadcast, Outdoor & Media Grid */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-2xl mb-14">
            <Badge variant="gold">MASS MEDIA & BROADCAST</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight mt-3">
              High-Impact Outdoor & Broadcast Reach
            </h2>
            <p className="text-sm text-secondary mt-2">
              Commanding presence across television screens, public transit, arterial roadways, and cinemas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaEcosystem.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-border hover:border-gold/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-primary mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-gold-800">
                    <span>Coverage</span>
                    <span className="font-semibold">{item.reach}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Growth, Influencer & Attribution */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-2xl mb-14">
            <Badge variant="gold">GROWTH & INFLUENCE</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight mt-3">
              Influence, Attribution & Closed-Loop Analytics
            </h2>
            <p className="text-sm text-secondary mt-2">
              Transforming raw audience impressions into verified inquiries and customer revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthAndBrand.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-canvas border border-border hover:border-gold/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-primary mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Campaign Strategy Consultation Form */}
      <section id="inquiry" className="py-20 bg-canvas">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="gold">CAMPAIGN PLANNING</Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
                Plan Your Next Campaign
              </h2>
              <p className="text-sm text-secondary leading-relaxed">
                Connect with our senior media planners to structure a cross-channel campaign schedule tailored to your target geographic market and growth targets.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-gold/30 space-y-2">
                <div className="text-xs font-mono font-bold text-primary uppercase">
                  Fast Direct Contact
                </div>
                <p className="text-xs text-secondary">
                  Prefer instant messaging? Connect with our media desk on WhatsApp:
                </p>
                <a
                  href={whatsappMarketingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Campaign Desk →</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm defaultDivision="Marketing & Media" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
