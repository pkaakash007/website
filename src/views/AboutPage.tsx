"use client";

import React from "react";
import AboutHero from "@/features/about/components/hero/AboutHero";
import AboutStory from "@/features/about/components/story/AboutStory";
import AboutCoreValues from "@/features/about/components/values/AboutCoreValues";
import AboutMilestonesStats from "@/features/about/components/stats/AboutMilestonesStats";
import AboutClientLogos from "@/features/about/components/clients/AboutClientLogos";
import AboutLeadershipTeam from "@/features/about/components/leadership/AboutLeadershipTeam";
import AboutSocialChannels from "@/features/about/components/social/AboutSocialChannels";
import AboutBriefingCTA from "@/features/about/components/cta/AboutBriefingCTA";

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">

      {/* 1. Hero: Strategic Value & Corporate Narrative */}
      <AboutHero />

      {/* 2. Origin & Operating Model */}
      <div id="story" className="scroll-mt-20">
        <AboutStory />
      </div>

      {/* 3. Core Operating Values */}
      <div id="values" className="scroll-mt-20">
        <AboutCoreValues />
      </div>

      {/* 4. Verified Milestones & Scale Telemetry */}
      <div id="stats" className="scroll-mt-20">
        <AboutMilestonesStats />
      </div>

      {/* 5. Verified Client Logos & Regional Partnerships */}
      <div id="clients" className="scroll-mt-20">
        <AboutClientLogos />
      </div>

      {/* 6. Multidisciplinary Leadership Team */}
      <div id="leadership" className="scroll-mt-20">
        <AboutLeadershipTeam />
      </div>

      {/* 7. Official Social Media & Publishing Channels */}
      <AboutSocialChannels />

      {/* 8. Strategic Partnership Briefing CTA */}
      <AboutBriefingCTA />
    </div>
  );
};

export default AboutPage;
