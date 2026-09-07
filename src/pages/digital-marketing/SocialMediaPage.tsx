import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { Share2, Users, Target, BarChart2 } from "lucide-react";

export const SocialMediaPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Performance Social Media Marketing in Tamil Nadu | Real Result"
        description="Targeted Meta (Instagram & Facebook) and LinkedIn paid social advertising campaigns designed for high lead conversion and brand authority across Tamil Nadu."
        canonicalPath="/digital-marketing/social-media-marketing"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Social Media Marketing Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Paid Social & Community Marketing",
          areaServed: "Tamil Nadu, India",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "Social Media Marketing" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Share2 className="w-3.5 h-3.5 text-gold-600" />
              <span>Full-Funnel Paid Social & Brand Authority</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Social Media Marketing in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Transform social engagement into qualified revenue. We combine creative storytelling, Tamil Nadu regional cultural nuances, and data-driven Meta and LinkedIn audience targeting to build brand loyalty and predictable commercial lead pipelines.
            </p>

            <DirectAnswerBox
              question="What is Real Result's Social Media Strategy for Tamil Nadu businesses?"
              summary="We develop creative assets tailored to Tamil Nadu's diverse consumer and business landscapes. From LinkedIn thought leadership campaigns for Coimbatore and Chennai manufacturing and IT firms to high-velocity Instagram and Facebook direct-response funnels for retail and consumer brands, our performance social strategy turns impressions into measurable customer inquiries."
              takeaways={[
                "B2B LinkedIn lead generation targeting executive decision-makers",
                "High-converting Meta (Instagram & Facebook) catalog and lead ad funnels",
                "Authentic Tamil Nadu regional creative direction and video production",
                "Multi-touch attribution tracking to measure true customer acquisition cost (CAC)",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("social-media-campaign")}
                className="cursor-pointer"
              >
                Plan Social Campaign
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SocialMediaPage;
