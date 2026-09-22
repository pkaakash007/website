import React from "react";
import { Container } from "@/components/layout/Container";
import LeaderBioCard from "./LeaderBioCard";

export const AboutLeadershipTeam: React.FC = () => {
  const leaders = [
    {
      role: "Lead Solutions Architect",
      discipline: "Software Engineering & Cloud Architecture",
      bio: "5+ years designing responsive web applications, high-performance databases, and custom mobile software platforms.",
    },
    {
      role: "Director of Performance Search",
      discipline: "SEO & Search Engine Marketing",
      bio: "Specializes in high-intent search campaigns, local Google Business SEO, and data-driven ad strategy across Tamil Nadu.",
    },
    {
      role: "Head of Cloud Infrastructure",
      discipline: "DevOps & Cloud Systems",
      bio: "Focuses on fast page loads, automated deployment pipelines, cloud uptime, and server security.",
    },
    {
      role: "Creative Director & UX Architect",
      discipline: "User Experience & Brand Systems",
      bio: "Crafts clean, responsive website interfaces designed to give visitors a clear path to contact your business.",
    },
  ];

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-white border-b border-black/[0.06] scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-black/[0.05] text-[#86868B]">
            Core Directors
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1D1D1F] tracking-[-0.025em] leading-tight">
            Our Leadership Team
          </h2>
          <p className="text-base text-[#86868B] leading-relaxed">
            Directly managed by experienced engineering and digital marketing specialists who actively oversee every client project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, idx) => (
            <LeaderBioCard
              key={idx}
              role={leader.role}
              discipline={leader.discipline}
              bio={leader.bio}
              number={String(idx + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutLeadershipTeam;

