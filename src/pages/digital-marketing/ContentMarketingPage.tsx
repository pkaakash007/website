import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { FileText, Award, BookOpen, PenTool } from "lucide-react";

export const ContentMarketingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Content Marketing & Digital PR Agency in Tamil Nadu | Real Result"
        description="Build unbeatable topical authority and organic link equity with expert-led content marketing, case studies, whitepapers, and regional digital PR across Tamil Nadu."
        canonicalPath="/digital-marketing/content-marketing"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Content Marketing & Digital PR Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Content Strategy & PR",
          areaServed: "Tamil Nadu, India",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "Content Marketing & Digital PR" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <FileText className="w-3.5 h-3.5 text-gold-600" />
              <span>Topical Authority & Thought Leadership</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Content Marketing & Digital PR in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              High-value content assets that earn authoritative citations, educate commercial buyers, and satisfy Google's strict E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) standards.
            </p>

            <DirectAnswerBox
              question="Why is authoritative content vital for modern search visibility?"
              summary="Generic, low-quality AI content is penalized by modern search engines and ignored by decision-makers. Real Result Marketing creates original, evidence-based pillar articles, technical whitepapers, and customer case studies grounded in real-world engineering and commercial insights, earning natural editorial backlinks from top industry publications."
              takeaways={[
                "Comprehensive topic cluster models to establish category dominance",
                "Strict E-E-A-T adherence with verified subject-matter experts",
                "Authentic Digital PR outreach to regional and national business media",
                "Optimized for human readability and LLM citation retrieval",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("content-marketing-strategy")}
                className="cursor-pointer"
              >
                Develop Content Strategy
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContentMarketingPage;
