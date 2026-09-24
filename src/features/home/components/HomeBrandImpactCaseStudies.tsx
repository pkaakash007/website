import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";
import { openLeadModal } from "@/components/common/LeadModal";
import { AppleLogo, SpotifyLogo } from "@/components/common/PlatformLogos";

const NikeLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Nike">
    <path d="M21.7 8.3c-.6-.7-1.8-1-3.6-.9-2.3.2-5.4 1.4-9.3 3.6-2.9 1.6-4.9 3.2-6.1 4.7-.6.8-.9 1.6-.7 2.3.2.7.9 1.1 2.1 1.1 1.7 0 4.1-.9 7.2-2.7 4.2-2.4 7.7-5.1 10.4-8.1z" />
  </svg>
);

const CocaColaLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Coca-Cola">
    <circle cx="12" cy="12" r="11" fill="#F40009" />
    <path
      d="M6.5 11.5c1.8-1.2 4.2-1.5 6.8-.5 1.7.6 3.1.5 4.2-.2l-.6-1.1c-.9.5-2 .6-3.5 0-3.1-1.1-6.2-.8-8.2.8-.3.3-.4.7-.2.9.2.2.6.2 1.5.1zm11 2.2c-2 1.1-4.6 1.2-7.2.2-1.8-.7-3.4-.6-4.6.2l.6 1.1c1-.6 2.3-.7 3.8-.1 3 1.1 6.1.9 8.4-.5.4-.3.5-.7.3-.9-.2-.2-.6-.2-1.3 0z"
      fill="#FFFFFF"
    />
  </svg>
);

const PepsiLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Pepsi">
    <circle cx="12" cy="12" r="11" fill="#004B93" />
    <path
      d="M22.8 10.5C21.6 5.8 17.2 2.2 12 2.2 6.8 2.2 2.4 5.8 1.2 10.5c3.2-1.2 7.2-1.6 11.1-.3 4.2 1.4 7.5 1.2 10.5.3z"
      fill="#E32934"
    />
    <path
      d="M1.2 13.5c1.2 4.7 5.6 8.3 10.8 8.3s9.6-3.6 10.8-8.3c-3 1-6.3 1.1-10.5-.3-3.9-1.3-7.9-.9-11.1.3z"
      fill="#004B93"
    />
    <path
      d="M1.2 10.5c3.2-1.2 7.2-1.6 11.1-.3 4.2 1.4 7.5 1.2 10.5.3.3.9.4 1.9.4 2.9 0 .1 0 .3 0 .4-3 1-6.3 1.1-10.5-.3-3.9-1.3-7.9-.9-11.1.3 0-.1 0-.3 0-.4 0-1 .2-2 .4-2.9z"
      fill="#FFFFFF"
    />
  </svg>
);

interface BrandStory {
  id: string;
  brand: string;
  era: string;
  tagline: string;
  headline: string;
  image: string;
  story: string;
  logo: React.ReactNode;
  before: {
    stat: string;
    text: string;
  };
  after: {
    stat: string;
    text: string;
  };
  lesson: string;
}

const BRAND_STORIES: BrandStory[] = [
  {
    id: "nike",
    brand: "Nike",
    era: "1988",
    tagline: "Just Do It",
    logo: <NikeLogo className="w-4 h-4" />,
    headline: "How Nike 10x'd revenue from $877M to $9.2 Billion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    story:
      "In 1988, Nike was losing to Reebok. Instead of advertising shoe soles and technical features, they launched 'Just Do It'—celebrating the grit of everyday runners and athletes.",
    before: {
      stat: "$877M",
      text: "Revenue stuck trailing competitors",
    },
    after: {
      stat: "$9.2B",
      text: "10x revenue growth in 10 years",
    },
    lesson: "Customers don't buy technical specs—they buy who your brand helps them become.",
  },
  {
    id: "apple",
    brand: "Apple",
    era: "1984",
    tagline: "1984 Super Bowl",
    logo: <AppleLogo className="w-4 h-4" />,
    headline: "Creating the personal computer market with one ad",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    story:
      "Computers were seen as cold corporate machines owned only by big companies. Apple aired a single 60-second ad positioning Macintosh as a tool for creative individuals.",
    before: {
      stat: "0%",
      text: "Homes owning personal computers",
    },
    after: {
      stat: "$155M",
      text: "Macintoshes sold in first 100 days",
    },
    lesson: "A strong brand story can create an entirely new market overnight.",
  },
  {
    id: "coca-cola",
    brand: "Coca-Cola",
    era: "2014",
    tagline: "Share a Coke",
    logo: <CocaColaLogo className="w-4 h-4" />,
    headline: "Reversing a 10-year sales decline by printing names on bottles",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=80",
    story:
      "Soda sales were dropping as youth moved away from sugary drinks. Coca-Cola replaced its logo with 250 common names, turning everyday drinks into personal gifts.",
    before: {
      stat: "-1.2%",
      text: "Consecutive annual sales drop",
    },
    after: {
      stat: "+2.5%",
      text: "Sales surge with 250M+ bottles sold",
    },
    lesson: "Personalization turns an ordinary product into an emotional experience.",
  },
  {
    id: "pepsi",
    brand: "Pepsi",
    era: "1992",
    tagline: "The Taste Challenge",
    logo: <PepsiLogo className="w-4 h-4" />,
    headline: "Beating a 70-year market leader in grocery aisles",
    image: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&w=1200&q=80",
    story:
      "Coca-Cola dominated 70% of soda sales. Pepsi ran blind taste tests across shopping malls proving people preferred Pepsi, turning skepticism into record sales.",
    before: {
      stat: "70%+",
      text: "Competitor retail monopoly",
    },
    after: {
      stat: "#1",
      text: "Beat Coke in US supermarket sales",
    },
    lesson: "Direct, undeniable proof can break an entrenched competitor's hold.",
  },
  {
    id: "spotify",
    brand: "Spotify",
    era: "2020+",
    tagline: "Spotify Wrapped",
    logo: <SpotifyLogo className="w-4 h-4" />,
    headline: "Turning user data into a viral annual social phenomenon",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    story:
      "All streaming apps have the exact same songs for the same price. Spotify used listening data to create customized year-end cards that users proudly share online for free.",
    before: {
      stat: "0",
      text: "Organic sharing between subscribers",
    },
    after: {
      stat: "120M+",
      text: "Users sharing their Wrapped on social media",
    },
    lesson: "When you give customers a way to express themselves, they do your marketing for you.",
  },
];

export const HomeBrandImpactCaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFA] border-t border-b border-neutral-200 relative overflow-hidden">
      <Container size="wide" className="w-full relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E2036] leading-tight">
            Why marketing matters for your brand
          </h2>
          <p className="text-base text-neutral-600 font-normal">
            Real examples of how iconic storytelling and focused positioning created market monopolies.
          </p>
        </div>

        {/* Clean Segmented Tab List (Blended with Background & Wrap to prevent cut-off) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
          {BRAND_STORIES.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none shrink-0 ${
                  isSelected
                    ? "bg-white text-neutral-950 shadow-sm border border-neutral-300/80 ring-1 ring-black/[0.04]"
                    : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50 border border-transparent"
                }`}
              >
                <span className="shrink-0">{item.logo}</span>
                <span className="tracking-tight">{item.brand}</span>
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full transition-colors ${
                    isSelected
                      ? "bg-neutral-100 text-neutral-800 border border-neutral-200"
                      : "bg-neutral-200/60 text-neutral-700"
                  }`}
                >
                  {item.era}
                </span>
              </button>
            );
          })}
        </div>

        {/* iOS Frosted Glass Showcase Card */}
        <div className="relative rounded-3xl border border-neutral-200/90 bg-white/80 backdrop-blur-2xl overflow-hidden shadow-sm min-h-[400px] sm:min-h-[440px] lg:min-h-[460px]">
          {BRAND_STORIES.map((story, idx) => {
            const isVisible = idx === activeIndex;
            return (
              <div
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-12 items-stretch h-full w-full transition-all duration-300 ease-out ${
                  isVisible
                    ? "relative opacity-100 translate-y-0 z-10 pointer-events-auto"
                    : "absolute inset-0 opacity-0 translate-y-2 z-0 pointer-events-none"
                }`}
              >
                {/* Left: Clean Brand Visual with iOS Glass Badge */}
                <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] lg:min-h-[460px] bg-neutral-900 overflow-hidden">
                  {isVisible && (
                    <img
                      src={story.image}
                      alt={story.brand}
                      width={600}
                      height={460}
                      className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=720&q=75";
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Brand Heading Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {story.brand}
                    </h3>
                  </div>
                </div>

                {/* Right: Story & iOS Widget-Style Metrics */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4 sm:space-y-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-950 leading-snug tracking-tight">
                        {story.headline}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 mt-2.5 leading-relaxed font-normal">
                        {story.story}
                      </p>
                    </div>

                    {/* iOS Widget-Style Before & After Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                      <div className="p-4 rounded-2xl bg-neutral-50/90 backdrop-blur-sm border border-neutral-200/80 shadow-2xs">
                        <span className="text-[11px] font-semibold text-neutral-600 uppercase tracking-wider block">
                          Before
                        </span>
                        <div className="text-2xl sm:text-3xl font-bold text-neutral-800 mt-0.5">
                          {story.before.stat}
                        </div>
                        <p className="text-xs text-neutral-600 mt-0.5 font-normal">
                          {story.before.text}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-emerald-50/50 backdrop-blur-sm border border-amber-200/90 shadow-2xs">
                        <span className="text-[11px] font-semibold text-[#8E6D2E] uppercase tracking-wider block">
                          After Marketing
                        </span>
                        <div className="text-2xl sm:text-3xl font-bold text-neutral-950 mt-0.5">
                          {story.after.stat}
                        </div>
                        <p className="text-xs text-neutral-700 mt-0.5 font-medium">
                          {story.after.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lesson + Apple-Style Action Button */}
                  <div className="pt-4 sm:pt-5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="max-w-md">
                      <span className="text-[11px] font-semibold text-neutral-600 uppercase tracking-wider block">
                        Key Takeaway
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-800 font-medium mt-0.5 leading-snug">
                        "{story.lesson}"
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openLeadModal(`Marketing Strategy Inspired by ${story.brand}`)}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 active:scale-95 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 shadow-sm"
                    >
                      <span>Grow Your Brand</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default HomeBrandImpactCaseStudies;
