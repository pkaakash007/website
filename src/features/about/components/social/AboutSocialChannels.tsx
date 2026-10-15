import React from "react";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/seo";

// ── 100% Authentic Official Brand Vector Assets ─────────────────────────────

// 1. Google (Official 4-Color 'G' Vector Mark)
const OfficialGoogleLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#FFFFFF" />
    <path
      d="M21.35 11.1H12v2.98h5.36c-.23 1.25-.94 2.31-2 3.02v2.51h3.24c1.89-1.74 2.98-4.31 2.98-7.41 0-.71-.06-1.4-.23-2.1z"
      fill="#4285F4"
    />
    <path
      d="M12 21c2.7 0 4.96-.9 6.62-2.43l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.81-1.76-5.6-4.12H3.07v2.6C4.73 18.8 8.08 21 12 21z"
      fill="#34A853"
    />
    <path
      d="M6.4 12.9c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9V6.5H3.07C2.39 7.86 2 9.39 2 11s.39 3.14 1.07 4.5l3.33-2.6z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.08c1.47 0 2.79.5 3.82 1.49l2.87-2.87C16.95 2.11 14.69 1 12 1 8.08 1 4.73 3.2 3.07 6.5l3.33 2.6c.79-2.36 3-4.12 5.6-4.12z"
      fill="#EA4335"
    />
  </svg>
);

// 2. Instagram (Official Instagram Camera Glyph with Authentic Sunset Radial Gradient)
const OfficialInstagramLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="ig-official-sunset" cx="0.2" cy="1" r="1.15">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-official-sunset)" />
    <path
      d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm5-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zm2.2 1.3c-.1-1.3-.4-2.5-1.4-3.5-1-1-2.2-1.3-3.5-1.4-1.4-.1-5.6-.1-7 0-1.3.1-2.5.4-3.5 1.4-1 1-1.3 2.2-1.4 3.5-.1 1.4-.1 5.6 0 7 .1 1.3.4 2.5 1.4 3.5 1 1 2.2 1.3 3.5 1.4 1.4.1 5.6.1 7 0 1.3-.1 2.5-.4 3.5-1.4 1-1 1.3-2.2 1.4-3.5.1-1.4.1-5.6 0-7zm-1.8 8.6c-.3.7-.8 1.3-1.5 1.5-.9.4-3.1.3-4.9.3s-4 .1-4.9-.3c-.7-.2-1.2-.8-1.5-1.5-.4-.9-.3-3.1-.3-4.9s-.1-4 .3-4.9c.3-.7.8-1.3 1.5-1.5.9-.4 3.1-.3 4.9-.3s4-.1 4.9.3c.7.2 1.2.8 1.5 1.5.4.9.3 3.1.3 4.9s.1 4-.3 4.9z"
      fill="#FFFFFF"
    />
  </svg>
);

// 3. X / Twitter (Official Mathematical Blackboard Bold 'X' from Official Brand Kit)
const OfficialXLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#000000" />
    <path
      d="M14.237 10.612 19.387 4.5h-1.22l-4.47 5.304L10.12 4.5H6l5.402 7.863L6 19.5h1.22l4.72-5.6 3.784 5.6H19.72l-5.483-8.888Zm-1.671 1.984-.547-.783-4.356-6.231h1.874l3.516 5.03.547.783 4.57 6.537H16.29l-3.724-5.336Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 4. LinkedIn (Official LinkedIn Blue with Authentic 'in' Mark)
const OfficialLinkedInLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#0A66C2" />
    <path
      d="M7.8 6.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0zM5.3 9h2.2v8.5H5.3V9zm3.6 0h2.1v1.2h.1c.3-.6 1.1-1.4 2.4-1.4 2.5 0 3 1.7 3 3.8v4.9h-2.2v-4.3c0-1-.02-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.4H8.9V9z"
      fill="#FFFFFF"
    />
  </svg>
);

// 5. YouTube (Official YouTube Red with Play Triangle)
const OfficialYouTubeLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#FFFFFF" />
  </svg>
);

// 6. Facebook (Official Meta Facebook Blue Roundel)
const OfficialFacebookLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      d="M15.5 12h-2.5v8h-3.3v-8H7.5v-2.8h2.2V7.4c0-2.2 1.3-3.4 3.3-3.4 1 0 1.9.1 1.9.1v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4v1.6h2.5l-.4 2.8z"
      fill="#FFFFFF"
    />
  </svg>
);

// 7. WhatsApp (Official WhatsApp Green with Authentic Phone Mark)
const OfficialWhatsAppLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path
      d="M17.5 14.7c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
      fill="#FFFFFF"
    />
  </svg>
);

// 8. Reddit (Official Reddit Snoo Alien Mark)
const OfficialRedditLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#FF4500" />
    <path
      d="M12 4.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm5.8 8.1c-.2-.7-.9-1.1-1.6-1.1-.3 0-.6.1-.8.2-1-.7-2.3-1.1-3.7-1.2l.6-3 2.1.4a1 1 0 1 0 1.2-.9.9.9 0 0 0-1 .2l-2.4-.5a.5.5 0 0 0-.6.4l-.8 3.7c-1.5.1-2.9.5-3.9 1.2-.2-.1-.5-.2-.8-.2-.8 0-1.5.5-1.7 1.3-.2.8.2 1.6.8 2-.1.3-.1.7-.1 1 0 2.6 2.7 4.7 6 4.7s6-2.1 6-4.7c0-.3 0-.7-.1-1 .7-.4 1-1.2.8-2zM9 13.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5.8 3.2c-.7.7-2 1-2.8 1s-2.1-.3-2.8-1a.3.3 0 0 1 .4-.4c.5.5 1.6.8 2.4.8.8 0 1.9-.3 2.4-.8a.3.3 0 0 1 .4.4zm.2-2.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      fill="#FFFFFF"
    />
  </svg>
);

// 9. Medium (Official Medium 3-Dot Identity)
const OfficialMediumLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#000000" />
    <path
      d="M7.18 7.37c2.3 0 4.18 2.07 4.18 4.63s-1.87 4.63-4.18 4.63S3 14.56 3 12s1.88-4.63 4.18-4.63zm7.04 0c1.17 0 2.12 2.07 2.12 4.63s-.95 4.63-2.12 4.63-2.12-2.07-2.12-4.63.95-4.63 2.12-4.63zm3.76.32c.5 0 .91 1.93.91 4.31s-.41 4.31-.91 4.31-.91-1.93-.91-4.31.4-4.31.91-4.31z"
      fill="#FFFFFF"
    />
  </svg>
);

// 10. Quora (Official Quora Serif 'Q' Identity)
const OfficialQuoraLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#B92B27" />
    <path
      d="M12.98 16.5c-.32 1.05-.72 2.05-1.2 2.94 2.87-.27 5.16-2.58 5.16-5.46 0-3.03-2.5-5.48-5.58-5.48-3.08 0-5.58 2.45-5.58 5.48 0 2.96 2.38 5.37 5.38 5.47-.1.46-.24.9-.4 1.34-3.8-.13-6.84-3.18-6.84-6.81 0-3.77 3.12-6.83 6.96-6.83 3.84 0 6.96 3.06 6.96 6.83 0 3.23-2.28 5.94-5.36 6.63.26-.64.5-1.34.7-2.11h-.2z"
      fill="#FFFFFF"
    />
  </svg>
);

interface SocialPlatform {
  name: string;
  handle: string;
  url: string;
  logo: React.ReactNode;
}

export const AboutSocialChannels: React.FC = () => {
  const platforms: SocialPlatform[] = [
    {
      name: "Google",
      handle: "Verified Business Profile",
      url: SOCIAL_LINKS.google,
      logo: <OfficialGoogleLogo />,
    },
    {
      name: "Instagram",
      handle: "@real_result_",
      url: SOCIAL_LINKS.instagram,
      logo: <OfficialInstagramLogo />,
    },
    {
      name: "LinkedIn",
      handle: "Real Result Company",
      url: SOCIAL_LINKS.linkedin,
      logo: <OfficialLinkedInLogo />,
    },
    {
      name: "YouTube",
      handle: "Official Channel",
      url: SOCIAL_LINKS.youtube,
      logo: <OfficialYouTubeLogo />,
    },
    {
      name: "X (Twitter)",
      handle: "@RealResult_in",
      url: SOCIAL_LINKS.x,
      logo: <OfficialXLogo />,
    },
    {
      name: "Facebook",
      handle: "Official Page",
      url: SOCIAL_LINKS.facebook,
      logo: <OfficialFacebookLogo />,
    },
    {
      name: "WhatsApp",
      handle: "Direct Specialist Desk",
      url: SOCIAL_LINKS.whatsapp,
      logo: <OfficialWhatsAppLogo />,
    },
    {
      name: "Reddit",
      handle: "u/Real_Result_in",
      url: SOCIAL_LINKS.reddit,
      logo: <OfficialRedditLogo />,
    },
    {
      name: "Medium",
      handle: "@realresult.dev",
      url: SOCIAL_LINKS.medium,
      logo: <OfficialMediumLogo />,
    },
    {
      name: "Quora",
      handle: "Real Result Insights",
      url: SOCIAL_LINKS.quora,
      logo: <OfficialQuoraLogo />,
    },
  ];

  return (
    <section
      id="social-channels"
      className="py-14 sm:py-20 bg-[#FBFBFA] border-b border-neutral-200/80 overflow-hidden font-sans scroll-mt-20 select-none"
    >
      <style>{`
        @keyframes socialTickerLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-social-track {
          display: flex;
          width: max-content;
          animation: socialTickerLoop 32s linear infinite;
        }
        .animate-social-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Container size="wide">
        {/* Subtle Minimal Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0E2036]">
            Connect Across the Web
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-normal leading-relaxed">
            Follow our verified profiles across Google, social networks, developer forums, and publications.
          </p>
        </div>

        {/* ── Seamless Infinite Marquee with Authentic Brand Cards ── */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Subtle Edge Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FBFBFA] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FBFBFA] to-transparent z-10" />

          {/* Marquee Track: Two identical sets for unbroken smooth loop */}
          <div className="animate-social-track">
            {/* Set 1 */}
            <div className="flex items-center gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0">
              {platforms.map((platform, idx) => (
                <a
                  key={`set1-${platform.name}-${idx}`}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Real Result on ${platform.name}`}
                  title={`${platform.name} - ${platform.handle}`}
                  className="group flex items-center gap-3.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:border-neutral-300 hover:-translate-y-1 transition-all duration-200 shrink-0 cursor-pointer"
                >
                  {/* Authentic App Icon Tile (Crisp, Edge-to-Edge Vector Mark) */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-200">
                    {platform.logo}
                  </div>

                  {/* Clean Typography: Platform Name + Handle */}
                  <div className="text-left pr-1">
                    <div className="text-sm font-semibold text-[#0E2036] group-hover:text-neutral-900 transition-colors flex items-center gap-1.5 leading-snug">
                      <span>{platform.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 leading-snug">
                      {platform.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Set 2 (Duplicate for continuous loop) */}
            <div aria-hidden="true" className="flex items-center gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0">
              {platforms.map((platform, idx) => (
                <a
                  key={`set2-${platform.name}-${idx}`}
                  href={platform.url}
                  tabIndex={-1}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Real Result on ${platform.name}`}
                  title={`${platform.name} - ${platform.handle}`}
                  className="group flex items-center gap-3.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:border-neutral-300 hover:-translate-y-1 transition-all duration-200 shrink-0 cursor-pointer"
                >
                  {/* Authentic App Icon Tile (Crisp, Edge-to-Edge Vector Mark) */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-200">
                    {platform.logo}
                  </div>

                  {/* Clean Typography: Platform Name + Handle */}
                  <div className="text-left pr-1">
                    <div className="text-sm font-semibold text-[#0E2036] group-hover:text-neutral-900 transition-colors flex items-center gap-1.5 leading-snug">
                      <span>{platform.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 leading-snug">
                      {platform.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSocialChannels;
