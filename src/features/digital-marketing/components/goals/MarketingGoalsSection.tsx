import React from "react";
import { Container } from "@/components/layout/Container";

interface GoalCard {
  id: string;
  title: string;
  icon: React.FC<{ className?: string }>;
}

// 1. Increasing Website Traffic (Bar graph with rising arrow)
const TrafficIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 14H54V24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M54 14L34 34L24 24L10 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 48H18V54H12V48Z" fill="currentColor" />
    <path d="M22 42H28V54H22V42Z" fill="currentColor" />
    <path d="M32 34H38V54H32V34Z" fill="currentColor" />
    <path d="M42 26H48V54H42V26Z" fill="currentColor" />
  </svg>
);

// 2. Building Conversion (Funnel with people)
const ConversionIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Users at top of funnel */}
    <circle cx="21" cy="12" r="3.5" />
    <path d="M15 22C15 19.8 17.7 18.5 21 18.5C24.3 18.5 27 19.8 27 22V23H15V22Z" />
    <circle cx="32" cy="10" r="3.5" />
    <path d="M26 20C26 17.8 28.7 16.5 32 16.5C35.3 16.5 38 17.8 38 20V23H26V20Z" />
    <circle cx="43" cy="12" r="3.5" />
    <path d="M37 22C37 19.8 39.7 18.5 43 18.5C46.3 18.5 49 19.8 49 22V23H37V22Z" />
    {/* Funnel structure */}
    <path d="M10 27L26 43V54H38V43L54 27H10ZM35 41.5V50H29V41.5L16.5 29H47.5L35 41.5Z" />
  </svg>
);

// 3. Brand Awareness (Tag labeled BRAND)
const BrandTagIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M52 14H28C26.4 14 24.9 14.6 23.8 15.8L10 30C8.7 31.3 8.7 33.5 10 34.8L23.8 49C24.9 50.1 26.4 50.8 28 50.8H52C54.6 50.8 56.8 48.6 56.8 46V18.8C56.8 16.2 54.6 14 52 14ZM48 24C46.3 24 45 22.7 45 21C45 19.3 46.3 18 48 18C49.7 18 51 19.3 51 21C51 22.7 49.7 24 48 24Z" />
    <text x="24" y="37.5" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">BRAND</text>
  </svg>
);

// 4. Positive Brand Association (Star Ribbon Medal Badge)
const StarMedalIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="23" r="15" />
    <polygon points="32,13 34.8,19.2 41.6,20 36.6,24.7 38,31.4 32,28.1 26,31.4 27.4,24.7 22.4,20 29.2,19.2" fill="#FFFFFF" />
    <path d="M22 35L17 53L27 47L32 53L27 38C28.6 38.6 30.2 39 32 39C33.8 39 35.4 38.6 37 38L32 53L37 47L47 53L42 35C45.7 32 48 27.8 48 23C48 14.2 40.8 7 32 7C23.2 7 16 14.2 16 23C16 27.8 18.3 32 22 35ZM32 11C38.6 11 44 16.4 44 23C44 29.6 38.6 35 32 35C25.4 35 20 29.6 20 23C20 16.4 25.4 11 32 11Z" />
  </svg>
);

// 5. Interaction with Key Audience (Group of people)
const AudienceIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Center Leader */}
    <circle cx="32" cy="18" r="6" />
    <path d="M32 31C25.4 31 18 34.3 18 39V43H46V39C46 34.3 38.6 31 32 31Z" />
    {/* Left User */}
    <circle cx="16" cy="24" r="5" />
    <path d="M16 35C12.3 35 6 37.3 6 41V44H14V40.5C14 38.3 16.5 36.7 19.2 35.6C18.1 35.2 17.1 35 16 35Z" />
    {/* Right User */}
    <circle cx="48" cy="24" r="5" />
    <path d="M48 35C46.9 35 45.9 35.2 44.8 35.6C47.5 36.7 50 38.3 50 40.5V44H58V41C58 37.3 51.7 35 48 35Z" />
  </svg>
);

// 6. Improving Communication (People with chat bubbles)
const CommunicationIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Chat bubbles */}
    <rect x="14" y="8" width="16" height="12" rx="4" />
    <polygon points="17,20 22,20 18,25" />
    <circle cx="18.5" cy="14" r="1.2" fill="#FFFFFF" />
    <circle cx="22" cy="14" r="1.2" fill="#FFFFFF" />
    <circle cx="25.5" cy="14" r="1.2" fill="#FFFFFF" />

    <rect x="34" y="8" width="16" height="12" rx="4" />
    <polygon points="42,20 47,20 46,25" />
    <circle cx="38.5" cy="14" r="1.2" fill="#FFFFFF" />
    <circle cx="42" cy="14" r="1.2" fill="#FFFFFF" />
    <circle cx="45.5" cy="14" r="1.2" fill="#FFFFFF" />

    {/* Users below */}
    <circle cx="18" cy="33" r="4.5" />
    <path d="M18 42C14.3 42 8 44 8 47.5V51H28V47.5C28 44 21.7 42 18 42Z" />

    <circle cx="46" cy="33" r="4.5" />
    <path d="M46 42C42.3 42 36 44 36 47.5V51H56V47.5C56 44 49.7 42 46 42Z" />

    <circle cx="32" cy="30" r="5" />
    <path d="M32 40C27.5 40 21 42 21 45.5V51H43V45.5C43 42 36.5 40 32 40Z" />
  </svg>
);

const GOALS_DATA: GoalCard[] = [
  {
    id: "traffic",
    title: "Increasing website traffic",
    icon: TrafficIcon,
  },
  {
    id: "conversion",
    title: "Building conversion",
    icon: ConversionIcon,
  },
  {
    id: "awareness",
    title: "Brand awareness",
    icon: BrandTagIcon,
  },
  {
    id: "association",
    title: "Positive brand association",
    icon: StarMedalIcon,
  },
  {
    id: "audience",
    title: "Interaction with key audience",
    icon: AudienceIcon,
  },
  {
    id: "communication",
    title: "Improving communication",
    icon: CommunicationIcon,
  },
];

export const MarketingGoalsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFA] border-t border-b border-neutral-200 relative overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Section Title & Paragraph */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2036] leading-tight tracking-tight">
              How Online Marketing Can Help You Meet Your Goal
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed font-normal pt-1">
              As a full-service growth agency in Coimbatore, we engineer hyper-targeted campaigns that connect with your exact audience, convert intent into paying clients, and scale bottom-line revenue.
            </p>
          </div>

          {/* RIGHT COLUMN: 3x2 Grid of Standard White Goal Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {GOALS_DATA.map((goal) => {
                const IconComponent = goal.icon;
                return (
                  <div
                    key={goal.id}
                    className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer"
                  >
                    {/* Brand Navy / Gold Accent Icon */}
                    <div className="text-[#0E2036] group-hover:text-[#C5A059] group-hover:scale-105 transition-all duration-300 flex items-center justify-center mb-3.5">
                      <IconComponent className="w-12 h-12 text-current" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-neutral-900 leading-snug group-hover:text-[#0E2036] transition-colors">
                      {goal.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingGoalsSection;
