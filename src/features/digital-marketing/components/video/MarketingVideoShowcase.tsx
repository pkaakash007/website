import React, { useState, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { getWhatsAppUrl } from "@/config";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const MarketingVideoShowcase: React.FC = () => {
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

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0C] text-white relative overflow-hidden border-b border-gray-800">
      {/* Apple Ambient Backlight Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-gold-500/20 via-blue-600/15 to-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        {/* Header Badge & Title in Clean Indian English */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-gold-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Clear 4K Video Marketing & Campaign Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-4">
            See How Smooth Video Ads Drive Customer Calls Every Single Day
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            In today's market, customers prefer watching a 15-second clear video over reading long texts. See how our high-definition video campaigns attract verified inquiries for businesses across Tamil Nadu.
          </p>
        </div>

        {/* ========================================================
            iPhone 16 Pro Style Premium 4K Video Frame
           ======================================================== */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[36px] p-2 sm:p-3.5 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-[0_25px_70px_rgba(0,0,0,0.7)] border border-gray-700/60">
            {/* Apple iPhone Inner Bezel Screen */}
            <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden bg-black aspect-video flex items-center justify-center group">
              
              {/* Dynamic Island / Top Status Pill */}
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 backdrop-blur-xl border border-white/10 text-[11px] text-gray-300 shadow-md pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white tracking-wide">4K ULTRA HD</span>
                <span className="text-gray-500">•</span>
                <span>60 FPS SMOOTH</span>
              </div>

              {/* High-Resolution HTML5 Video Element */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              >
                {/* Clean, high-bitrate royalty-free agency & digital growth video stream */}
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                  type="video/mp4"
                />
                Your browser does not support high-definition video playback.
              </video>

              {/* Subtle Gradient Overlay for Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Floating Player Controls Bar */}
              <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-6 z-20 flex items-center justify-between pointer-events-auto">
                {/* Left: Play/Pause and Mute Controls */}
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-gray-300" /> : <Volume2 className="w-4 h-4 text-white" />}
                  </button>

                  <span className="text-[11px] text-gray-300 font-medium px-1 hidden sm:inline">
                    Live Marketing Reel
                  </span>
                </div>

                {/* Right: Fullscreen and WhatsApp Instant Trigger */}
                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppUrl("Hello Real Result, I saw your 4K video showcase. I want video ads for my business.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Ask on WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </a>

                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-full bg-black/60 hover:bg-white/20 backdrop-blur-md text-white border border-white/15 transition-colors cursor-pointer"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Under-Video 3 Key Proof Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm flex items-start gap-3">
              <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">4K Crisp Quality</h4>
                <p className="text-xs text-gray-400 mt-0.5">Clear visuals shot and rendered for high engagement on mobile feeds.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Phone Calls</h4>
                <p className="text-xs text-gray-400 mt-0.5">Video ads built with bold click-to-call buttons for local customers.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Verified Reporting</h4>
                <p className="text-xs text-gray-400 mt-0.5">Track every rupee spent with transparent weekly video analytics.</p>
              </div>
            </div>
          </div>

          {/* Consultation Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => openLeadModal("4K Video Marketing Consultation")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-black font-bold text-sm transition-all shadow-lg hover:shadow-gold-500/25 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get 4K Video Ads For Your Business</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingVideoShowcase;
