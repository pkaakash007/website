import React from "react";
import { Container } from "@/components/layout/Container";
import LeaderBioCard from "./LeaderBioCard";

export const AboutLeadershipTeam: React.FC = () => {
  const leaders = [
    {
      number: "01",
      discipline: "Engineering",
      role: "Lead Solutions Architect",
      bio: "5+ years designing responsive web applications, high-performance databases, and custom mobile software platforms.",
      focus: "Custom Web & App Architecture",
    },
    {
      number: "02",
      discipline: "Growth & Search",
      role: "Director of Performance Search",
      bio: "Specializes in high-intent search campaigns, local Google Business SEO, and data-driven ad strategy across Tamil Nadu.",
      focus: "SEO & High-Intent Google Ads",
    },
    {
      number: "03",
      discipline: "Infrastructure",
      role: "Head of Cloud Infrastructure",
      bio: "Focuses on sub-second mobile page loads, automated deployment pipelines, cloud uptime, and server security.",
      focus: "Cloud Hosting & Sub-Second Speed",
    },
    {
      number: "04",
      discipline: "Design & UX",
      role: "Creative Director & UX Architect",
      bio: "Crafts clean, responsive website interfaces designed to give visitors a clear path to contact your business.",
      focus: "Conversion UI & Brand Identity",
    },
  ];

  return (
    <section id="leadership" className="py-20 sm:py-28 bg-white border-b border-black/[0.06] scroll-mt-20">
      <Container size="wide">
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
            Discipline Leads
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1D1F] tracking-tight leading-tight">
            Practitioner Leadership
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed font-normal">
            Directly managed by experienced engineering and digital marketing specialists who actively oversee every client engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-black/[0.08] divide-y md:divide-y-0 md:divide-x divide-black/[0.08] bg-white overflow-hidden shadow-xs">
          {leaders.map((leader) => (
            <LeaderBioCard
              key={leader.number}
              number={leader.number}
              discipline={leader.discipline}
              role={leader.role}
              bio={leader.bio}
              focus={leader.focus}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutLeadershipTeam;
