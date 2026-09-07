import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { ContactForm } from "@/components/common/ContactForm";
import { SEOHead } from "@/components/seo/SEOHead";
import { ShieldCheck, Target, Zap } from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="About Real Result Marketing | Erode HQ, Leadership & Vision"
        description="Learn about Real Result Marketing & Technology Solutions. Headquartered in Erode, Tamil Nadu, providing unified digital marketing, SEO, and custom software engineering."
        canonicalPath="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Real Result Marketing",
          url: "https://realresult.in/about",
          description:
            "Corporate history, leadership, and operational framework of Real Result Marketing in Erode, Tamil Nadu, India.",
        }}
      />

      {/* Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-border relative">
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <Badge variant="outline">ABOUT REAL RESULT</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Engineered to replace{" "}
              <span className="font-serif italic font-normal text-primary">vendor fragmentation</span>.
            </h1>
            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Modern enterprises waste valuable momentum managing disconnected agencies for engineering, advertising, telecom, and recruiting. Real Result consolidates all four critical capabilities into a single synchronized execution partner.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-canvas">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Singular Accountability</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                One dedicated enterprise executive, consolidated billing, and cross-functional teams that share accountability for end results rather than finger-pointing.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-gold-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Technical Rigor</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Whether developing low-latency regional AI voice models or deploying scalable React and cloud architectures, we adhere strictly to enterprise-grade standards.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Data Security & SLA</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Carrier-grade telephony compliance, TRAI/FCC DND enforcement, SOC2 readiness, and strict client data privacy protections backed by 99.98% SLAs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Delivery Infrastructure */}
      <section className="py-20 bg-white border-y border-border">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <Badge variant="gold">GLOBAL REACH</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Global Scale, Local Expertise
            </h2>
            <p className="text-secondary text-sm sm:text-base">
              Serving enterprises across North America, Europe, Asia-Pacific, and the Middle East with 24/7 technical monitoring and regional telecom interconnects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-6 rounded-2xl bg-canvas border border-border">
              <div className="text-3xl font-bold font-mono text-primary">10M+</div>
              <div className="text-xs text-secondary mt-1">Interactions Processed</div>
            </div>
            <div className="p-6 rounded-2xl bg-canvas border border-border">
              <div className="text-3xl font-bold font-mono text-primary">99.98%</div>
              <div className="text-xs text-secondary mt-1">Telephony Uptime SLA</div>
            </div>
            <div className="p-6 rounded-2xl bg-canvas border border-border">
              <div className="text-3xl font-bold font-mono text-primary">12+</div>
              <div className="text-xs text-secondary mt-1">Regional Voice Dialects</div>
            </div>
            <div className="p-6 rounded-2xl bg-canvas border border-border">
              <div className="text-3xl font-bold font-mono text-primary">4.2x</div>
              <div className="text-xs text-secondary mt-1">Avg Client Growth</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lead Form */}
      <section className="py-20 bg-canvas">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="default">PARTNERSHIP INQUIRY</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                Explore a Unified Partnership
              </h2>
              <p className="text-sm text-secondary leading-relaxed">
                Schedule a briefing with our executive leadership team to discuss how consolidating your engineering, marketing, voice telephony, and staffing accelerates your milestones.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm defaultDivision="Multiple Solutions" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
