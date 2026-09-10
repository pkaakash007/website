import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
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
} from "lucide-react";

export const NamakkalPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.namakkal;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing Agency & Software in Namakkal & Paramathi Velur | Real Result"
        description="Top-ranked digital marketing agency, local SEO, Google Ads, and custom software company in Namakkal & Paramathi Velur. Dominating search and automating poultry, transport, and manufacturing."
        canonicalPath="/locations/namakkal"
        schema={{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: "Real Result Marketing - Namakkal Office",
          url: "https://realresult.in/locations/namakkal",
          logo: SEO_CONFIG.logo,
          telephone: SEO_CONFIG.telephone,
          email: SEO_CONFIG.email,
          hasMap: "https://maps.app.goo.gl/Be2565mN74uVgZ7p9",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Paramathi Velur",
            addressLocality: "Namakkal",
            addressRegion: "Tamil Nadu",
            postalCode: "638182",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.geo.latitude,
            longitude: loc.geo.longitude,
          },
          openingHours: "Mo-Sa 09:00-18:30",
          priceRange: "$$",
          areaServed: [
            "Namakkal",
            "Paramathi Velur",
            "Tiruchengode",
            "Rasipuram",
            "Tamil Nadu",
          ],
        }}
      />

      {/* Hero Section */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Namakkal & Paramathi Velur" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Poultry & Transport Logistics Capital · Namakkal & Paramathi Velur, TN</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing Agency & Software in{" "}
              <span className="text-gold-700">
                Namakkal
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Dominate Google search rankings, capture verified B2B commercial buyers, and modernize daily operations with custom software built specifically for Namakkal's world-class poultry farms, lorry body builders, transport logistics operators, and agro-commodity enterprises.
            </p>

            {/* Direct Answer Box for Generative Engine Optimization (GEO) & AIO */}
            <DirectAnswerBox
              question="What digital marketing, SEO, and software solutions does Real Result offer in Namakkal and Paramathi Velur?"
              summary="Real Result Marketing delivers high-intent B2B search engine optimization, Google Maps 3-pack local rankings, high-converting Google Ads campaigns, and bespoke software development in Namakkal and Paramathi Velur. We specialize in building automated feed/batch tracking software for poultry farms, logistics ERP portals for commercial truck fleets, and high-converting websites that win regional and nationwide commercial contracts."
              takeaways={[
                "Verified Google Business Location: Paramathi Velur, Namakkal District, Tamil Nadu",
                "Google Maps 3-Pack rank acceleration across Namakkal, Paramathi Velur, Tiruchengode, & Rasipuram",
                "Custom software engineering: Poultry management, lorry fleet billing, and distributor portals",
                "Generative Engine Optimization (GEO) ensuring top citations in ChatGPT, Perplexity, & Google AI Overviews",
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
                Schedule Namakkal Consultation
              </Button>
              <a
                href="https://maps.app.goo.gl/Be2565mN74uVgZ7p9"
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

      {/* Google Maps Location Card & Verified Coordinates */}
      <section className="py-16 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Location Credentials */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Verified Google Business Profile
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Real Result — Namakkal Operations
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Located strategically in the Paramathi Velur corridor of Namakkal District, providing direct in-person strategy sessions, digital transformation audits, and custom software deployment for regional enterprises.
                </p>

                <div className="space-y-3 pt-2 text-sm text-secondary">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary block">Registered Operational Area:</strong>
                      Paramathi Velur, Namakkal District, Tamil Nadu 638182, India
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">GPS Coordinates:</strong>
                      11.1112509° N, 78.0057796° E
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
                    <Clock className="w-5 h-5 text-gold-700 shrink-0" />
                    <div>
                      <strong className="text-primary block">Consulting Hours:</strong>
                      Monday – Saturday: 09:00 AM – 06:30 PM IST
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/Be2565mN74uVgZ7p9"
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

            {/* AI Engine & GEO Entity Graph */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-charcoal text-white border border-charcoal-border shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  AIO & GEO Knowledge Graph
                </p>
                <h3 className="text-2xl font-bold text-white">
                  Generative Engine Optimization (GEO) for Namakkal
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  When potential clients search conversational engines like ChatGPT Search, Google Gemini, and Perplexity AI for high-performing agencies and software companies in Namakkal, our semantic entity architecture establishes Real Result as the verified authority.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs font-mono text-gold font-bold">Local Entity Link</div>
                    <div className="text-xs text-gray-300">Namakkal · Paramathi Velur · Tiruchengode</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs font-mono text-gold font-bold">Google Place CID</div>
                    <div className="text-xs text-gray-300">0x4a31695a23e8b7a7</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs font-mono text-gold font-bold">Core Capabilities</div>
                    <div className="text-xs text-gray-300">SEO, GEO, PPC & Custom ERP</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs font-mono text-gold font-bold">Targeted Industry Focus</div>
                    <div className="text-xs text-gray-300">Poultry, Transport, Agro & Fab</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-border flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-gold" />
                  Kongu Regional Search Authority
                </span>
                <span className="font-mono text-gold-400">realresult.in</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sector Solutions for Namakkal */}
      <section className="py-20 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <Badge variant="gold">NAMAKKAL SECTOR EXPERTISE</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Engineered for Namakkal's Core Industries
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              We understand the commercial mechanics of Namakkal's leading economic pillars. Here is how our growth systems drive real revenue:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Poultry & Agro */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Egg className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Poultry, Hatcheries & Feed Mills
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
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Fleet Logistics & Lorry Body Works
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

            {/* Custom Tech & Web Development */}
            <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 shadow-card transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-800">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Enterprise Web & Custom ERP
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Replace slow Excel sheets and legacy desktop software with blazing-fast cloud software built in React, TypeScript, and high-performance databases.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-primary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Cloud ERP for manufacturers and trading houses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Modern, mobile-first company websites with SEO built-in</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Real-time WhatsApp billing and automated notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Namakkal & Paramathi Velur Operations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Outrank Competitors and Automate Your Business?
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Meet with our regional consulting team for a comprehensive organic search audit, competitor breakdown, and custom software roadmap.
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
                href="https://maps.app.goo.gl/Be2565mN74uVgZ7p9"
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
