import React, { useState, useRef } from "react";
import { openLeadModal } from "@/components/common/LeadModal";
import { Button } from "@/components/common/Button";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
} from "lucide-react";
import {
  GoogleAdsIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "../services/MarketingServicesSimple";

// --- Dedicated Official Vector Icons for AI Search Platforms ---

export const ChatGptIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#10A37F" />
    <path
      d="M36.7 20.3a7.4 7.4 0 0 0-.6-5.8 7.7 7.7 0 0 0-6.9-4 7.6 7.6 0 0 0-1.7.3 7.5 7.5 0 0 0-5.5-2.5 7.7 7.7 0 0 0-7.3 5.4 7.6 7.6 0 0 0-4.1 3 7.5 7.5 0 0 0-.7 6.9 7.4 7.4 0 0 0 .6 5.8 7.7 7.7 0 0 0 6.9 4 7.6 7.6 0 0 0 1.7-.3 7.5 7.5 0 0 0 5.5 2.5 7.7 7.7 0 0 0 7.3-5.4 7.6 7.6 0 0 0 4.1-3 7.5 7.5 0 0 0 .7-6.9zm-12.1 14.3a5.2 5.2 0 0 1-3.4-1.2l.2-.1 5.7-3.3a1.1 1.1 0 0 0 .6-1V20.9l2.4 1.3v6.7a5.2 5.2 0 0 1-5.5 5.7zm-9.9-4.3a5.2 5.2 0 0 1-.8-3.5l.2.1 5.7 3.3a1.1 1.1 0 0 0 1.1 0l7-4.1v2.8l-5.8 3.3a5.2 5.2 0 0 1-7.4-1.9zm-1.9-11.4a5.2 5.2 0 0 1 2.7-2.4v6.9a1.1 1.1 0 0 0 .6 1l7 4-2.4 1.4-5.8-3.3a5.2 5.2 0 0 1-2.1-7.6zm15.9 4l-7-4 2.4-1.4 5.8 3.3a5.2 5.2 0 0 1 2.1 7.6 5.2 5.2 0 0 1-2.7 2.4v-6.9a1.1 1.1 0 0 0-.6-1zm4.6 5.3l-.2-.1-5.7-3.3a1.1 1.1 0 0 0-1.1 0l-7 4.1v-2.8l5.8-3.3a5.2 5.2 0 0 1 7.4 1.9 5.2 5.2 0 0 1 .8 3.5zm-14-2.5l3.1-1.8 3.1 1.8v3.6l-3.1 1.8-3.1-1.8v-3.6z"
      fill="white"
    />
  </svg>
);

export const ClaudeIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#D97757" />
    <path
      d="M24 10C24.7 10 25.3 10.6 25.3 11.3V19.6L31.2 13.7C31.7 13.2 32.5 13.2 33 13.7C33.5 14.2 33.5 15 33 15.5L27.1 21.4H35.4C36.1 21.4 36.7 22 36.7 22.7C36.7 23.4 36.1 24 35.4 24H27.1L33 29.9C33.5 30.4 33.5 31.2 33 31.7C32.5 32.2 31.7 32.2 31.2 31.7L25.3 25.8V34.1C25.3 34.8 24.7 35.4 24 35.4C23.3 35.4 22.7 34.8 22.7 34.1V25.8L16.8 31.7C16.3 32.2 15.5 32.2 15 31.7C14.5 31.2 14.5 30.4 15 29.9L20.9 24H12.6C11.9 24 11.3 23.4 11.3 22.7C11.3 22 11.9 21.4 12.6 21.4H20.9L15 15.5C14.5 15 14.5 14.2 15 13.7C15.5 13.2 16.3 13.2 16.8 13.7L22.7 19.6V11.3C22.7 10.6 23.3 10 24 10Z"
      fill="white"
    />
  </svg>
);

export const PerplexityIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#20B8CD" />
    <path
      d="M24 10V21.5M24 26.5V38M14 24H21.5M26.5 24H34M17 17L22 22M26 26L31 31M31 17L26 22M22 26L17 31"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="3" fill="white" />
  </svg>
);

/**
 * MarketingHero — Full-Bleed Background Video & Cinematic Stage
 * Features a full-screen background video placement, crisp dark-mode typography,
 * interactive 4K video reel player, and US/Global enterprise partner badges.
 */
export const MarketingHero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-neutral-950 text-white flex flex-col justify-between border-b border-white/10">
      {/* ── FULL-BLEED BACKGROUND VIDEO PLACEMENT ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2000&q=80"
          className="w-full h-full object-cover scale-105 filter brightness-90"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Dual-Tone Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-neutral-950/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* ── TOP CONTENT: VALUE PROPOSITION & POSITIONING ── */}
      <div className="pt-[74px] sm:pt-[78px] pb-5 px-6 sm:px-10 text-center max-w-4xl mx-auto w-full relative z-10">


        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md"
          style={{ letterSpacing: "-0.035em" }}
        >
          Digital Marketing &amp; Creative Ads.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#38BDF8]">
            Built to Grow Your Business.
          </span>
        </h1>

        {/* Action CTAs */}
        <div className="flex items-center justify-center mb-6">
          <button
            type="button"
            onClick={() => openLeadModal("us-marketing-hero")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.3)] transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Book a Free Call</span>
          </button>
        </div>


      </div>

      {/* ========================================================
          FLAGSHIP VISUAL STAGE: 4K Video Reel Player & Commercial Ads
         ======================================================== */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Card: Instagram & Meta Reels Ads */}
          <div className="lg:col-span-3 flex flex-col rounded-[26px] bg-neutral-900/80 backdrop-blur-xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-white/30 transition-all duration-300">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
                alt="Instagram & Meta Reels Ads Campaign"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Bottom Details Overlay */}
              <div className="absolute bottom-3 inset-x-3 text-white">
                <p className="text-[13px] font-bold leading-tight text-white">
                  Instagram &amp; Meta Reels Ads
                </p>
                <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
                  Fashion, retail, local brands &amp; WhatsApp orders
                </p>
              </div>
            </div>
          </div>

          {/* Center Card: Brand Commercials & Video Shoots */}
          <div className="lg:col-span-6 flex flex-col rounded-[28px] sm:rounded-[32px] p-2.5 sm:p-3 bg-gradient-to-b from-neutral-800/90 via-neutral-900/90 to-black/95 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] text-white relative">
            {/* Bezel Screen Container */}
            <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden bg-black aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group h-full">
              
              {/* Video Element */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&w=1200&q=80"
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                  type="video/mp4"
                />
                Your browser does not support high-definition video playback.
              </video>

              {/* Dark Gradient Overlay for readable controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Center Play/Pause Micro Interaction on Hover */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/55 hover:bg-black/80 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white translate-x-0.5" />}
              </button>

              {/* Floating Bottom Controls */}
              <div className="absolute bottom-3 inset-x-3 sm:inset-x-4 z-20 flex items-center justify-between pointer-events-auto">
                {/* Left: Play/Pause and Mute Controls */}
                <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs">
                  <button
                    onClick={togglePlay}
                    className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-neutral-300" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
                  </button>

                  <span className="text-[11px] text-neutral-200 font-medium hidden sm:inline pl-1 border-l border-white/15">
                    Brand Commercials &amp; Factory Ad Shoots
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Card: Google Search & Maps Ads */}
          <div className="lg:col-span-3 flex flex-col rounded-[26px] bg-neutral-900/80 backdrop-blur-xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-white/30 transition-all duration-300">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                alt="Google Search & Maps Ads Campaign"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Bottom Details Overlay */}
              <div className="absolute bottom-3 inset-x-3 text-white">
                <p className="text-[13px] font-bold leading-tight text-white">
                  Google Search &amp; Maps Ads
                </p>
                <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
                  Doctors, clinics, real estate &amp; local enquiries
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Official Advertising & Search Channels Hub ── */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 relative z-10">
        <div className="py-6">
          <div className="text-center max-w-xl mx-auto mb-6">
            <p className="text-[12px] font-bold text-white/70 uppercase tracking-wider">
              Official Media &amp; Search Channels
            </p>
          </div>

          {/* Official Channel Grid - Open Borderless Layout */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { name: "Google Ads", icon: <GoogleAdsIcon className="w-7 h-7 shrink-0" /> },
              { name: "LinkedIn Ads", icon: <LinkedInIcon className="w-7 h-7 shrink-0" /> },
              { name: "Meta Ads", icon: <InstagramIcon className="w-7 h-7 shrink-0" /> },
              { name: "YouTube Ads", icon: <YouTubeIcon className="w-7 h-7 shrink-0" /> },
              { name: "ChatGPT Search", icon: <ChatGptIcon className="w-7 h-7 shrink-0" /> },
              { name: "Claude AI", icon: <ClaudeIcon className="w-7 h-7 shrink-0" /> },
              { name: "Perplexity AI", icon: <PerplexityIcon className="w-7 h-7 shrink-0" /> },
            ].map((chan, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center py-2 transition-transform hover:scale-105 group"
              >
                <div className="mb-2">{chan.icon}</div>
                <span className="text-[12px] font-semibold text-white/90 leading-tight">{chan.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingHero;
