import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import AboutHero from "@/features/about/components/hero/AboutHero";
import AboutStory from "@/features/about/components/story/AboutStory";
import AboutCoreValues from "@/features/about/components/values/AboutCoreValues";
import AboutMilestonesStats from "@/features/about/components/stats/AboutMilestonesStats";
import AboutLeadershipTeam from "@/features/about/components/leadership/AboutLeadershipTeam";
import AboutBriefingCTA from "@/features/about/components/cta/AboutBriefingCTA";

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="About Real Result | Unified Digital Marketing & Software Engineering"
        description="Learn about Real Result Marketing & Technology Solutions. Headquartered in Erode, Tamil Nadu, providing unified digital marketing, SEO, and custom software engineering for scaling businesses."
        canonicalPath="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Real Result Marketing & Technology",
          url: "https://realresult.in/about",
          description:
            "Corporate background, executive leadership, core operating values, and engineering standards of Real Result in Erode, Tamil Nadu, India.",
        }}
      />

      {/* 1. Hero: Strategic Value & Corporate Narrative */}
      <AboutHero />

      {/* 2. Origin & Operating Model */}
      <AboutStory />

      {/* 3. Core Operating Values */}
      <AboutCoreValues />

      {/* 4. Verified Milestones & Scale Telemetry */}
      <AboutMilestonesStats />

      {/* 5. Multidisciplinary Leadership Team */}
      <AboutLeadershipTeam />

      {/* 6. Strategic Partnership Briefing CTA */}
      <AboutBriefingCTA />
    </div>
  );
};

export default AboutPage;
