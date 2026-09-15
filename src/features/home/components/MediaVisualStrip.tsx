import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  InstagramLogo,
  YouTubeLogo,
  GoogleAdsLogo,
  FacebookLogo,
  LinkedInLogo,
  AmazonLogo,
  HotstarLogo,
  SpotifyLogo
} from "@/components/common/PlatformLogos";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Wifi,
  Battery,
  Play,
  Search,
  Phone,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  Bell,
  Home as HomeIcon,
  Compass,
  PlusCircle,
  Layers,
  MessageSquare,
  Repeat,
  Sparkles,
  Lock,
  Mic,
  Camera,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  User,
  ShoppingCart,
  MapPin,
  Tv,
  Music,
  Shuffle,
  SkipBack,
  SkipForward
} from "lucide-react";

interface AdPlatformSample {
  id: string;
  name: string;
  platformType: string;
  logo: React.ReactNode;
  brandName: string;
  headline: string;
  description: string;
  image: string;
  deliverables: string[];
}

const AD_PLATFORMS: AdPlatformSample[] = [
  {
    id: "instagram",
    name: "Instagram Ads",
    platformType: "Feed, Reels & Stories",
    logo: <InstagramLogo className="w-5 h-5" />,
    brandName: "mangataandgallo",
    headline: "Reach local buyers scrolling Instagram",
    description:
      "We create eye-catching photo and Reels video ads that bring you direct customer messages and sales inquiries.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    deliverables: [
      "Photo & Reels video ads made for your brand",
      "Direct Click-to-WhatsApp button for instant chats",
      "Targeted to people in your specific city or pin code",
    ],
  },
  {
    id: "youtube",
    name: "YouTube Ads",
    platformType: "In-Stream & Shorts Video",
    logo: <YouTubeLogo className="w-5 h-5" />,
    brandName: "Aura Dental Care",
    headline: "Show video commercials on YouTube",
    description:
      "Get your brand video in front of customers watching YouTube on mobile phones and Smart TVs in your area.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    deliverables: [
      "High-quality 15-second commercial video ads",
      "Direct booking and call button right on the screen",
      "Targeted by city, district, and viewer interests",
    ],
  },
  {
    id: "google",
    name: "Google Search Ads",
    platformType: "Top Page Search PPC",
    logo: <GoogleAdsLogo className="w-5 h-5" />,
    brandName: "Royal Homes & Villas",
    headline: "Be #1 when customers search on Google",
    description:
      "Show up right at the very top when people in your city search for your exact products or services.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    deliverables: [
      "Top #1 placement on Google Search results",
      "Direct Click-to-Call button for instant phone calls",
      "Only pay when interested customers click your ad",
    ],
  },
  {
    id: "facebook",
    name: "Facebook & WhatsApp Ads",
    platformType: "Click-to-Chat Funnels",
    logo: <FacebookLogo className="w-5 h-5" />,
    brandName: "Spice Route Grand Dining",
    headline: "Get direct inquiries on your WhatsApp",
    description:
      "Skip long website forms. Connect interested customers straight to your team's WhatsApp with one tap.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    deliverables: [
      "1-click WhatsApp message button on every ad",
      "Instant customer conversations and fast bookings",
      "Targeted to families and buyers in your local area",
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn B2B Ads",
    platformType: "Corporate & CXO Sponsored Content",
    logo: <LinkedInLogo className="w-5 h-5" />,
    brandName: "CloudPulse Enterprise Software",
    headline: "Reach business owners and decision makers",
    description:
      "Put your business proposals directly in front of company directors, managers, and factory owners.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    deliverables: [
      "Target by exact job title, industry & company size",
      "Sponsored product demos and case studies",
      "Direct B2B quotations and demo requests",
    ],
  },
  {
    id: "amazon",
    name: "Amazon & Prime Ads",
    platformType: "Sponsored Products & Prime Video",
    logo: <AmazonLogo className="w-5 h-5" />,
    brandName: "Kaveri Organics",
    headline: "Sell more products on Amazon",
    description:
      "Show your products right at the top of Amazon search when buyers are ready to order with 1-click.",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1000&q=80",
    deliverables: [
      "Top-of-search Amazon Sponsored Product placement",
      "Prime Video commercials and brand store design",
      "Higher orders with lower advertising costs",
    ],
  },
  {
    id: "hotstar",
    name: "JioHotstar / OTT Ads",
    platformType: "Live Cricket & Connected TV",
    logo: <HotstarLogo className="w-5 h-5" />,
    brandName: "Tata Tiago EV",
    headline: "Advertise during live cricket & movies",
    description:
      "Show your video ads to millions of viewers watching live sports matches and blockbuster OTT shows.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80",
    deliverables: [
      "Video commercials during live cricket match overs",
      "Big-screen Smart TV & mobile video distribution",
      "Interactive buttons for showroom visits and test drives",
    ],
  },
  {
    id: "spotify",
    name: "Spotify & Audio Ads",
    platformType: "Music Streaming & Podcast Sponsorships",
    logo: <SpotifyLogo className="w-5 h-5" />,
    brandName: "UrbanKicks Footwear",
    headline: "Reach listeners with audio commercials",
    description:
      "Speak directly to customers while they commute, workout, or listen to their favorite music and podcasts.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
    deliverables: [
      "30-second clear voice audio commercial spots",
      "Clickable promo cards with discount codes",
      "Targeted by playlist genre and listener location",
    ],
  },
];

export const MediaVisualStrip: React.FC = () => {
  const [activePlatformId, setActivePlatformId] = useState<string>("instagram");

  const current =
    AD_PLATFORMS.find((p) => p.id === activePlatformId) || AD_PLATFORMS[0];

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFA] border-t border-b border-neutral-200">
      <Container size="wide">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E2036] leading-tight">
            Where we run your ads
          </h2>
          <p className="text-base text-neutral-600 font-normal">
            We create, manage, and optimize high-converting campaigns across the apps your customers check every day.
          </p>
        </div>

        {/* Platform Tabs (Blended with Background & Wrap to prevent cut-off) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
          {AD_PLATFORMS.map((platform) => {
            const isSelected = platform.id === current.id;
            return (
              <button
                key={platform.id}
                type="button"
                onClick={() => setActivePlatformId(platform.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none shrink-0 ${
                  isSelected
                    ? "bg-white text-neutral-950 shadow-sm border border-neutral-300/80 ring-1 ring-black/[0.04]"
                    : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50 border border-transparent"
                }`}
              >
                <span className="shrink-0">{platform.logo}</span>
                <span className="tracking-tight">{platform.name}</span>
              </button>
            );
          })}
        </div>

        {/* Real Mobile Screenshot Showcase */}
        <div className="rounded-3xl border border-neutral-200/90 bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* LEFT: Clean Realistic Phone Screenshot Mockup */}
            <div className="lg:col-span-6 p-6 sm:p-10 bg-neutral-50/80 border-b lg:border-b-0 lg:border-r border-neutral-200/80 flex items-center justify-center min-h-[660px]">
              
              {/* Luxury Apple iPhone Chassis (Fixed dimensions for ALL tabs) */}
              <div className="w-[305px] sm:w-[325px] h-[600px] rounded-[48px] bg-neutral-950 p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/10 relative flex flex-col justify-between shrink-0 select-none">
                
                {/* Inner Screen */}
                <div className="w-full h-full rounded-[40px] bg-white overflow-hidden text-neutral-900 flex flex-col justify-between relative">
                  
                  {/* Top iOS Status Bar + Dynamic Island */}
                  <div className="pt-2.5 px-6 pb-1.5 flex items-center justify-between text-[11px] font-semibold text-neutral-900 bg-white shrink-0 z-10">
                    <span className="w-7">9:41</span>
                    <div className="w-24 h-4.5 bg-neutral-950 rounded-full mx-auto" />
                    <div className="w-7 flex items-center justify-end gap-1 text-neutral-900">
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>

                  {/* Screen Body Container (Fixed-height flex area) */}
                  <div className="flex-1 flex flex-col justify-between overflow-hidden bg-white">

                    {/* ── 1. INSTAGRAM POST SCREENSHOT ── */}
                    {current.id === "instagram" && (
                      <div className="flex-1 flex flex-col justify-between bg-white">
                        <div>
                          {/* Instagram App Header */}
                          <div className="px-3.5 py-1.5 border-b border-neutral-100 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[1.5px]">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-neutral-800">
                                  MG
                                </div>
                              </div>
                              <div>
                                <span className="text-xs font-bold text-neutral-900 block leading-tight">
                                  mangataandgallo
                                </span>
                                <span className="text-[10px] text-neutral-400 font-normal">Sponsored</span>
                              </div>
                            </div>
                            <MoreHorizontal className="w-4 h-4 text-neutral-500" />
                          </div>

                          {/* Main Ad Photo */}
                          <div className="relative w-full h-[250px] bg-neutral-100 overflow-hidden shrink-0">
                            <img
                              src={current.image}
                              alt="Instagram Real Ad"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Action CTA Bar */}
                          <div className="px-3.5 py-2 bg-[#FAFAFA] border-y border-neutral-100 flex items-center justify-between shrink-0">
                            <span className="text-xs font-bold text-[#0095F6]">
                              Learn More
                            </span>
                            <span className="text-[10px] text-neutral-400">mangataandgallo.com</span>
                          </div>

                          {/* Engagement Bar & Caption */}
                          <div className="p-3 space-y-1 bg-white shrink-0">
                            <div className="flex items-center justify-between text-neutral-800 mb-1">
                              <div className="flex items-center gap-3">
                                <Heart className="w-4.5 h-4.5 text-rose-500 fill-rose-500" />
                                <MessageCircle className="w-4.5 h-4.5" />
                                <Send className="w-4.5 h-4.5" />
                              </div>
                              <Bookmark className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-[11px] font-bold text-neutral-900 block">
                              Liked by alex.anyways18 and 1,240 others
                            </span>
                            <p className="text-[11px] text-neutral-800 leading-tight">
                              <span className="font-bold mr-1">mangataandgallo</span>
                              Stay on time and on trend with our newest seasonal arrivals! ✨
                            </p>
                          </div>
                        </div>

                        {/* Instagram Bottom App Bar */}
                        <div className="px-5 py-1.5 border-t border-neutral-100 flex items-center justify-between text-neutral-800 shrink-0">
                          <HomeIcon className="w-4.5 h-4.5" />
                          <Search className="w-4.5 h-4.5" />
                          <PlusCircle className="w-4.5 h-4.5" />
                          <Heart className="w-4.5 h-4.5" />
                          <div className="w-4.5 h-4.5 rounded-full bg-neutral-300 overflow-hidden border border-neutral-400" />
                        </div>
                      </div>
                    )}

                    {/* ── 2. YOUTUBE VIDEO AD SCREENSHOT (Full Authentic YouTube App UI) ── */}
                    {current.id === "youtube" && (
                      <div className="flex-1 flex flex-col justify-between bg-white text-neutral-900">
                        <div>
                          {/* YouTube App Top Header */}
                          <div className="px-3 py-1 flex items-center justify-between border-b border-neutral-100 shrink-0">
                            <div className="flex items-center gap-1.5">
                              <YouTubeLogo className="w-4 h-4" />
                              <span className="text-xs font-bold text-neutral-900 tracking-tighter">YouTube</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-700">
                              <Bell className="w-3.5 h-3.5" />
                              <Search className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* Video Player Viewport */}
                          <div className="relative w-full h-[175px] bg-neutral-900 overflow-hidden shrink-0">
                            <img
                              src={current.image}
                              alt="YouTube Video Ad"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                            {/* Ad Badge & Skip Button */}
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-yellow-400 text-black text-[10px] font-bold">
                              Ad · 0:15
                            </div>
                            <div className="absolute bottom-3 right-2 px-2.5 py-1 rounded bg-black/80 border border-white/20 text-[10px] font-semibold text-white flex items-center gap-1">
                              <span>Skip Ad</span>
                              <span className="text-neutral-400">›</span>
                            </div>

                            {/* Yellow Scrubber Line */}
                            <div className="absolute bottom-0 inset-x-0 h-1 bg-neutral-700">
                              <div className="h-full w-1/3 bg-yellow-400" />
                            </div>
                          </div>

                          {/* In-Stream Direct Ad Action Banner */}
                          <div className="px-3 py-2 bg-[#F2F6FC] border-b border-neutral-200/80 flex items-center justify-between">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="w-6 h-6 rounded-md bg-[#065FD4] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                                AD
                              </div>
                              <div className="min-w-0">
                                <span className="text-xs font-bold text-neutral-900 block truncate leading-tight">
                                  Aura Dental Care
                                </span>
                                <span className="text-[9px] text-neutral-500 truncate block">Sponsored · auradental.in</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => openLeadModal("YouTube Ad Direct Action")}
                              className="px-3 py-1 rounded-full bg-[#065FD4] hover:bg-[#004dc0] text-white text-[10px] font-semibold shrink-0 cursor-pointer shadow-xs"
                            >
                              Book Now
                            </button>
                          </div>

                          {/* Video Details */}
                          <div className="px-3 py-1.5 space-y-1.5">
                            <h4 className="text-[11px] font-bold text-neutral-900 leading-snug line-clamp-1">
                              Painless Dental Implants & Laser Surgery — Aura Clinic
                            </h4>
                            <div className="flex items-center gap-2 text-[9px] text-neutral-500">
                              <span>180K views</span>
                              <span>•</span>
                              <span>2 weeks ago</span>
                              <span>•</span>
                              <span className="text-neutral-700 font-medium">#DentalHealth</span>
                            </div>

                            {/* Engagement Action Pills */}
                            <div className="flex items-center gap-1.5 overflow-hidden pt-0.5">
                              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F2F2F2] text-[9px] font-medium text-neutral-800">
                                <ThumbsUp className="w-3 h-3" />
                                <span>12K</span>
                              </div>
                              <div className="px-2 py-1 rounded-full bg-[#F2F2F2] text-[9px] text-neutral-800">
                                <ThumbsDown className="w-3 h-3" />
                              </div>
                              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F2F2F2] text-[9px] font-medium text-neutral-800">
                                <Share2 className="w-3 h-3" />
                                <span>Share</span>
                              </div>
                              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F2F2F2] text-[9px] font-medium text-neutral-800">
                                <Download className="w-3 h-3" />
                                <span>Save</span>
                              </div>
                            </div>

                            {/* Channel Strip */}
                            <div className="flex items-center justify-between py-1 border-t border-neutral-100">
                              <div className="flex items-center gap-1.5">
                                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">
                                  A
                                </div>
                                <span className="text-[10px] font-semibold text-neutral-900">Aura Dental Hospital</span>
                              </div>
                              <span className="px-2.5 py-0.5 rounded-full bg-neutral-900 text-white text-[9px] font-semibold">
                                Subscribe
                              </span>
                            </div>

                            {/* Comments Teaser Card */}
                            <div className="p-1.5 bg-[#F4F4F5] rounded-lg text-[9px] text-neutral-700 flex items-center gap-1.5">
                              <span className="font-bold shrink-0">Comments 148:</span>
                              <span className="truncate">"Dr. Ramesh explained everything so well, zero pain!"</span>
                            </div>
                          </div>
                        </div>

                        {/* YouTube App Bottom Navigation Bar */}
                        <div className="px-4 py-1.5 border-t border-neutral-100 flex items-center justify-between text-neutral-800 shrink-0 text-[8px]">
                          <div className="flex flex-col items-center gap-0.5">
                            <HomeIcon className="w-3.5 h-3.5" />
                            <span>Home</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <Compass className="w-3.5 h-3.5 text-neutral-500" />
                            <span className="text-neutral-500">Shorts</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <PlusCircle className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <Layers className="w-3.5 h-3.5 text-neutral-500" />
                            <span className="text-neutral-500">Subscriptions</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-3.5 h-3.5 rounded-full bg-neutral-400" />
                            <span className="text-neutral-500">You</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── 3. GOOGLE SEARCH AD SCREENSHOT (Authentic Chrome Mobile Browser Page) ── */}
                    {current.id === "google" && (
                      <div className="flex-1 flex flex-col justify-between bg-white overflow-hidden text-neutral-900">
                        <div>
                          {/* Chrome Mobile Omnibox / Address Bar */}
                          <div className="bg-[#F1F3F4] px-2.5 py-1.5 flex items-center justify-between border-b border-neutral-200/90 shrink-0">
                            <div className="bg-white rounded-full px-2.5 py-1 flex items-center justify-between shadow-2xs border border-neutral-300/80 flex-1 mr-2 min-w-0">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                                <span className="text-[10px] text-neutral-700 font-medium truncate">
                                  google.com/search?q=luxury+villas
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-700 shrink-0">
                              <div className="w-4 h-4 rounded border border-neutral-600 flex items-center justify-center text-[8px] font-bold">
                                3
                              </div>
                              <MoreHorizontal className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* Google Search Bar in Page */}
                          <div className="p-2.5 bg-white border-b border-neutral-100">
                            <div className="p-1.5 rounded-full bg-white border border-neutral-200 shadow-xs flex items-center justify-between text-xs px-2.5">
                              <div className="flex items-center gap-2 text-neutral-700 min-w-0">
                                <span className="font-bold text-blue-500 shrink-0 text-sm">G</span>
                                <span className="text-[10px] text-neutral-900 font-medium truncate">
                                  luxury villas in coimbatore
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-neutral-500 shrink-0">
                                <Mic className="w-3 h-3" />
                                <Camera className="w-3 h-3" />
                                <Search className="w-3 h-3 text-blue-600" />
                              </div>
                            </div>

                            {/* Google SERP Navigation Tabs */}
                            <div className="flex items-center gap-4 text-[10px] pt-2 px-1 text-neutral-600 font-medium overflow-hidden">
                              <span className="text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5">All</span>
                              <span>Images</span>
                              <span>Maps</span>
                              <span>News</span>
                              <span>Videos</span>
                            </div>
                          </div>

                          {/* SERP Search Results Container */}
                          <div className="p-2.5 space-y-2 bg-[#F8F9FA] overflow-hidden">
                            {/* Sponsored Ad 1 */}
                            <div className="p-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-1">
                              <div className="flex items-center justify-between text-[9px]">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[7px]">
                                    RV
                                  </div>
                                  <div>
                                    <span className="font-bold text-neutral-900 block leading-tight">Sponsored</span>
                                    <span className="text-neutral-500 text-[8px]">https://www.royalvillas.in</span>
                                  </div>
                                </div>
                                <MoreHorizontal className="w-3 h-3 text-neutral-400" />
                              </div>

                              <h4 className="text-[11px] font-bold text-[#1A0DAB] leading-tight hover:underline cursor-pointer">
                                Royal Villas & Gated Communities — Free Site Visit Today
                              </h4>

                              <div className="flex items-center gap-1 text-[8px] text-neutral-600">
                                <span className="text-amber-500 font-bold">★ 4.9</span>
                                <span>(128 reviews)</span>
                                <span>•</span>
                                <span>4 BHK Gated Villas</span>
                              </div>

                              <p className="text-[9px] text-neutral-600 leading-tight">
                                Luxury gated community villas with clubhouse, private garden & 24/7 security. 100% Vaastu compliant.
                              </p>

                              {/* Sitelinks & Call Extension */}
                              <div className="pt-1 flex flex-wrap gap-1 border-t border-neutral-100">
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-50 text-[8px] font-semibold text-blue-700">
                                  <Phone className="w-2 h-2" />
                                  <span>Call +91 98765 43210</span>
                                </span>
                                <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-[8px] font-medium text-neutral-700">
                                  Floor Plans
                                </span>
                                <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-[8px] font-medium text-neutral-700">
                                  Price List
                                </span>
                              </div>
                            </div>

                            {/* Sponsored Ad 2 */}
                            <div className="p-2 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-1">
                              <div className="flex items-center gap-1 text-[8px]">
                                <span className="font-bold text-neutral-900">Sponsored</span>
                                <span className="text-neutral-400">·</span>
                                <span className="text-neutral-500 truncate">https://www.greenacrehomes.com</span>
                              </div>
                              <h4 className="text-[10px] font-bold text-[#1A0DAB] leading-tight">
                                GreenAcre Premium 3 & 4 BHK Independent Villas
                              </h4>
                              <p className="text-[9px] text-neutral-600 line-clamp-1">
                                Prime location with 30+ amenities, swimming pool & gym. Ready to occupy.
                              </p>
                              <div className="flex gap-1 text-[8px] text-blue-700 font-medium">
                                <span className="underline">Download Brochure</span>
                                <span>•</span>
                                <span className="underline">Site Location</span>
                              </div>
                            </div>

                            {/* Organic Result 3 */}
                            <div className="p-2 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-0.5">
                              <span className="text-[8px] text-neutral-500 truncate block">https://www.magicbricks.com › coimbatore</span>
                              <h5 className="text-[10px] font-semibold text-neutral-900 line-clamp-1">
                                Top 10 Luxury Gated Community Villas in Coimbatore
                              </h5>
                              <p className="text-[8px] text-neutral-500 line-clamp-1">Explore 500+ verified luxury villas with price trends.</p>
                            </div>
                          </div>
                        </div>

                        {/* Chrome Bottom Navigation Bar */}
                        <div className="px-4 py-1.5 bg-[#F1F3F4] border-t border-neutral-200 flex items-center justify-between text-neutral-700 shrink-0 text-xs">
                          <ChevronLeft className="w-4 h-4" />
                          <ChevronRight className="w-4 h-4 text-neutral-400" />
                          <Share2 className="w-3.5 h-3.5" />
                          <Layers className="w-3.5 h-3.5" />
                          <HomeIcon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    )}

                    {/* ── 4. FACEBOOK & WHATSAPP AD SCREENSHOT (Full Facebook Mobile App UI) ── */}
                    {current.id === "facebook" && (
                      <div className="flex-1 flex flex-col justify-between bg-white text-neutral-900 overflow-hidden">
                        <div>
                          {/* Facebook App Top Header */}
                          <div className="px-3.5 py-1.5 border-b border-neutral-100 flex items-center justify-between shrink-0">
                            <span className="text-base font-black text-[#1877F2] tracking-tighter">facebook</span>
                            <div className="flex items-center gap-2 text-neutral-700">
                              <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
                                <PlusCircle className="w-3.5 h-3.5" />
                              </div>
                              <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
                                <Search className="w-3.5 h-3.5" />
                              </div>
                              <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
                                <MessageCircle className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          </div>

                          {/* Post Card Header */}
                          <div className="px-3 py-1.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs shrink-0">
                                SR
                              </div>
                              <div>
                                <span className="text-xs font-bold text-neutral-900 block leading-tight">
                                  Spice Route Grand Dining
                                </span>
                                <span className="text-[9px] text-neutral-400 font-normal">Sponsored · 🌐</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-neutral-400">
                              <MoreHorizontal className="w-4 h-4" />
                              <X className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* Post Caption */}
                          <div className="px-3 py-1 text-[10px] text-neutral-800 leading-tight">
                            Weekend family buffet & private banquet bookings. Reserve table in 1-click on WhatsApp with 15% discount! 🍛
                          </div>

                          {/* Ad Image */}
                          <div className="relative w-full h-[175px] bg-neutral-100 overflow-hidden shrink-0">
                            <img
                              src={current.image}
                              alt="Facebook Real Ad"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* WhatsApp Callout Action Bar */}
                          <div className="p-2 bg-[#F0F2F5] border-t border-neutral-200 flex items-center justify-between">
                            <div>
                              <span className="text-[8px] text-neutral-500 uppercase block font-bold tracking-wider">WHATSAPP.COM</span>
                              <span className="text-[11px] font-bold text-neutral-900 block leading-tight">Reserve Table in 1 Click</span>
                              <span className="text-[8px] text-neutral-500">Fast confirmation</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => openLeadModal("Facebook WhatsApp Lead Action")}
                              className="px-3 py-1.5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white text-[10px] font-bold flex items-center gap-1 shadow-xs cursor-pointer"
                            >
                              <span>WhatsApp</span>
                            </button>
                          </div>

                          {/* Social Reactions Summary */}
                          <div className="px-3 py-1 border-t border-neutral-100 flex items-center justify-between text-neutral-500 text-[9px]">
                            <span>👍 ❤️ 😲 248 people</span>
                            <span>34 comments • 12 shares</span>
                          </div>

                          {/* Engagement Action Bar */}
                          <div className="px-2 py-1 border-t border-neutral-100 flex items-center justify-around text-neutral-600 text-[9px] font-medium">
                            <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> Like</span>
                            <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Comment</span>
                            <span className="flex items-center gap-1 text-emerald-700 font-bold"><Send className="w-3 h-3" /> WhatsApp</span>
                            <span className="flex items-center gap-1"><Share2 className="w-3 h-3" /> Share</span>
                          </div>

                          {/* Next Feed Preview Divider */}
                          <div className="h-1 bg-[#F0F2F5]" />
                          <div className="px-3 py-1 flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-neutral-300 shrink-0" />
                            <span className="text-[9px] text-neutral-500 font-medium">Suggested for you • Grand Sweets</span>
                          </div>
                        </div>

                        {/* Facebook Bottom Tab Bar */}
                        <div className="px-5 py-1.5 border-t border-neutral-100 flex items-center justify-between text-neutral-700 shrink-0">
                          <HomeIcon className="w-4 h-4 text-[#1877F2]" />
                          <Play className="w-4 h-4" />
                          <Compass className="w-4 h-4" />
                          <Bell className="w-4 h-4" />
                          <User className="w-4 h-4" />
                        </div>
                      </div>
                    )}

                    {/* ── 5. LINKEDIN B2B AD SCREENSHOT (Full LinkedIn Mobile App UI) ── */}
                    {current.id === "linkedin" && (
                      <div className="flex-1 flex flex-col justify-between bg-white text-neutral-900 overflow-hidden">
                        <div>
                          {/* LinkedIn Header */}
                          <div className="px-3 py-1.5 border-b border-neutral-100 flex items-center justify-between gap-2 shrink-0">
                            <div className="w-6 h-6 rounded-full bg-neutral-300 shrink-0" />
                            <div className="bg-[#EEF3F8] rounded-md px-2.5 py-1 flex items-center gap-1.5 flex-1 text-[10px] text-neutral-500">
                              <Search className="w-3 h-3" />
                              <span>Search</span>
                            </div>
                            <MessageCircle className="w-4 h-4 text-neutral-700 shrink-0" />
                          </div>

                          {/* Promoted Post Header */}
                          <div className="px-3 py-1.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-md bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs shrink-0">
                                CP
                              </div>
                              <div>
                                <span className="text-xs font-bold text-neutral-900 block leading-tight">
                                  CloudPulse Software
                                </span>
                                <span className="text-[9px] text-neutral-400 font-normal">14,200 followers · Promoted</span>
                              </div>
                            </div>
                            <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                          </div>

                          {/* Post Text */}
                          <div className="px-3 py-1 text-[10px] text-neutral-800 leading-tight">
                            Custom ERP & billing software tailored for Tamil Nadu factories. Cut manual errors by 40% and automate GST.
                          </div>

                          {/* Media Image */}
                          <div className="relative w-full h-[175px] bg-neutral-100 overflow-hidden shrink-0">
                            <img
                              src={current.image}
                              alt="LinkedIn Real Ad"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Action Bar */}
                          <div className="p-2 bg-[#F4F6F8] border-t border-neutral-200 flex items-center justify-between">
                            <div>
                              <span className="text-[8px] text-neutral-500 uppercase block font-bold tracking-wider">CLOUDPULSE.IN</span>
                              <span className="text-[11px] font-bold text-neutral-900 block leading-tight">Request Live Demo & Trial</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => openLeadModal("LinkedIn Demo Action")}
                              className="px-3 py-1.5 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white text-[10px] font-semibold cursor-pointer shadow-xs"
                            >
                              Book Demo
                            </button>
                          </div>

                          {/* Reactions Row */}
                          <div className="px-3 py-1 border-t border-neutral-100 flex items-center justify-between text-neutral-500 text-[9px]">
                            <span>👏 💡 ❤️ 142 reactions</span>
                            <span>28 comments • 12 reposts</span>
                          </div>

                          {/* Interaction Bar */}
                          <div className="px-2 py-1 border-t border-neutral-100 flex items-center justify-around text-neutral-600 text-[9px] font-medium">
                            <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> Like</span>
                            <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Comment</span>
                            <span className="flex items-center gap-1"><Repeat className="w-3 h-3" /> Repost</span>
                            <span className="flex items-center gap-1"><Send className="w-3 h-3" /> Send</span>
                          </div>

                          {/* Next Feed Preview */}
                          <div className="h-1 bg-[#ECEEF1]" />
                          <div className="px-3 py-1 flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-neutral-300 shrink-0" />
                            <span className="text-[9px] text-neutral-500 font-medium">Automotive Tamil Nadu • 2h ago</span>
                          </div>
                        </div>

                        {/* LinkedIn Bottom Navigation */}
                        <div className="px-5 py-1.5 border-t border-neutral-100 flex items-center justify-between text-neutral-700 shrink-0">
                          <HomeIcon className="w-4 h-4 text-[#0A66C2]" />
                          <User className="w-4 h-4" />
                          <PlusCircle className="w-4 h-4" />
                          <Bell className="w-4 h-4" />
                          <Layers className="w-4 h-4" />
                        </div>
                      </div>
                    )}

                    {/* ── 6. AMAZON SPONSORED PRODUCTS AD SCREENSHOT ── */}
                    {current.id === "amazon" && (
                      <div className="flex-1 flex flex-col justify-between bg-white text-neutral-900 overflow-hidden">
                        <div>
                          {/* Amazon App Top Search Header */}
                          <div className="bg-[#232F3E] p-2 flex items-center gap-2 shrink-0">
                            <div className="bg-white rounded-md px-2.5 py-1 flex items-center justify-between flex-1 shadow-xs">
                              <div className="flex items-center gap-1.5 text-neutral-500 text-[10px]">
                                <Search className="w-3 h-3 text-neutral-800" />
                                <span className="text-neutral-900 font-medium">cold pressed coconut oil</span>
                              </div>
                              <Camera className="w-3 h-3 text-neutral-400" />
                            </div>
                            <div className="relative text-white">
                              <ShoppingCart className="w-4.5 h-4.5" />
                              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FF9900] text-[#121212] font-black text-[8px] flex items-center justify-center">
                                2
                              </div>
                            </div>
                          </div>

                          {/* Delivery Address Pill */}
                          <div className="bg-[#37475A] text-white text-[9px] px-3 py-1 flex items-center gap-1.5 shrink-0">
                            <MapPin className="w-2.5 h-2.5 text-[#FF9900]" />
                            <span className="truncate">Deliver to Coimbatore 641001 — Express Prime</span>
                          </div>

                          {/* Sponsored Product Card */}
                          <div className="p-2.5 space-y-1.5">
                            <div className="flex items-center justify-between text-[8px]">
                              <span className="font-bold text-neutral-500 uppercase tracking-wider">Sponsored · Kaveri Organics</span>
                              <span className="px-1.5 py-0.5 rounded bg-neutral-900 text-white font-bold text-[7px]">Overall Pick</span>
                            </div>

                            {/* Product Photo */}
                            <div className="relative w-full h-[150px] bg-neutral-50 rounded-lg overflow-hidden border border-neutral-100">
                              <img
                                src={current.image}
                                alt="Amazon Sponsored Product"
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Product Info & Pricing */}
                            <div>
                              <h4 className="text-[10px] font-semibold text-neutral-900 line-clamp-2 leading-tight">
                                Kaveri Pure Cold-Pressed Virgin Coconut Oil (1 Litre) — 100% Raw & Organic
                              </h4>
                              <div className="flex items-center gap-1 text-[8px] text-amber-500 font-bold mt-0.5">
                                <span>★★★★★ 4.8</span>
                                <span className="text-neutral-500 font-normal">(2,410) • 5K+ bought</span>
                              </div>
                              <div className="flex items-baseline gap-1.5 mt-0.5">
                                <span className="text-xs font-black text-neutral-950">₹449</span>
                                <span className="text-[9px] text-neutral-400 line-through">₹599</span>
                                <span className="text-[8px] font-bold text-emerald-700">(25% off)</span>
                                <span className="text-[9px] font-black text-[#00A8E8] ml-auto">prime</span>
                              </div>
                              <span className="text-[8px] text-neutral-600 block">FREE Delivery Tomorrow by 11 AM</span>
                            </div>

                            {/* 1-Click Purchase Buttons */}
                            <div className="grid grid-cols-2 gap-1.5 pt-1">
                              <button
                                type="button"
                                onClick={() => openLeadModal("Amazon Ad Action")}
                                className="py-1.5 rounded-full bg-[#FFD814] hover:bg-[#f7ca00] text-neutral-950 font-bold text-[9px] cursor-pointer"
                              >
                                Add to Cart
                              </button>
                              <button
                                type="button"
                                onClick={() => openLeadModal("Amazon Ad Buy Now")}
                                className="py-1.5 rounded-full bg-[#FFA41C] hover:bg-[#fa8900] text-neutral-950 font-bold text-[9px] cursor-pointer"
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Amazon Bottom Navigation */}
                        <div className="px-5 py-1.5 border-t border-neutral-200 bg-[#F8F9FA] flex items-center justify-between text-neutral-700 shrink-0">
                          <HomeIcon className="w-4 h-4 text-neutral-950" />
                          <User className="w-4 h-4" />
                          <Bell className="w-4 h-4" />
                          <ShoppingCart className="w-4 h-4" />
                          <MoreHorizontal className="w-4 h-4" />
                        </div>
                      </div>
                    )}

                    {/* ── 7. JIOHOTSTAR / OTT LIVE CRICKET VIDEO AD ── */}
                    {current.id === "hotstar" && (
                      <div className="flex-1 flex flex-col justify-between bg-[#0C111B] text-white overflow-hidden">
                        <div>
                          {/* Hotstar Top Header */}
                          <div className="px-3 py-1 flex items-center justify-between text-[10px] text-neutral-300 border-b border-white/10 shrink-0">
                            <div className="flex items-center gap-1.5">
                              <HotstarLogo className="w-4 h-4" />
                              <span className="font-bold text-white tracking-wider">JioHotstar</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-red-600 text-white font-black text-[8px] animate-pulse">
                              LIVE
                            </span>
                          </div>

                          {/* Video Player Viewport */}
                          <div className="relative w-full h-[180px] bg-black overflow-hidden shrink-0">
                            <img
                              src={current.image}
                              alt="Hotstar OTT Live Video Ad"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

                            {/* Match Live Score Pill */}
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] font-bold text-white border border-white/10">
                              🏏 IND 192/3 (18.1)
                            </div>

                            {/* Ad Badge & Countdown */}
                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-amber-400 text-neutral-950 text-[8px] font-black">
                              Ad · 0:10
                            </div>

                            {/* In-Stream Interactive Brand Banner Overlay */}
                            <div className="absolute bottom-2 inset-x-2 p-2 rounded-lg bg-black/85 backdrop-blur-sm border border-white/20 flex items-center justify-between">
                              <div>
                                <span className="text-[10px] font-bold text-white block leading-tight">
                                  Tata Tiago EV — from ₹7.99 L*
                                </span>
                                <span className="text-[8px] text-neutral-400">Zero Emission • 315 km Range</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => openLeadModal("Hotstar OTT Commercial Action")}
                                className="px-2.5 py-1 rounded bg-[#00D2FF] hover:bg-[#00b4dc] text-neutral-950 text-[9px] font-bold cursor-pointer"
                              >
                                Test Drive ›
                              </button>
                            </div>

                            {/* Streaming Yellow Playback Bar */}
                            <div className="absolute bottom-0 inset-x-0 h-1 bg-neutral-800">
                              <div className="h-full w-2/5 bg-amber-400" />
                            </div>
                          </div>

                          {/* Match Stats & Sponsor Credits */}
                          <div className="p-3 space-y-1.5 bg-[#0C111B]">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="font-bold text-white">India vs Australia — 2nd T20I</span>
                              <span className="text-emerald-400 font-semibold">14.8M Viewers</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 border border-white/10 text-[9px] text-neutral-300">
                              <span className="font-bold text-amber-400 mr-1">Official EV Partner:</span>
                              Tata Motors Electric Mobility Commercial
                            </div>
                          </div>
                        </div>

                        {/* Hotstar Bottom Navigation */}
                        <div className="px-4 py-1.5 border-t border-white/10 bg-[#0C111B] flex items-center justify-between text-neutral-400 shrink-0 text-[8px]">
                          <div className="flex flex-col items-center gap-0.5">
                            <HomeIcon className="w-3.5 h-3.5" />
                            <span>Home</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <Tv className="w-3.5 h-3.5" />
                            <span>TV</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5 text-[#00D2FF]">
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Sports</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <User className="w-3.5 h-3.5" />
                            <span>My Space</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── 8. SPOTIFY & AUDIO COMPANION AD ── */}
                    {current.id === "spotify" && (
                      <div className="flex-1 flex flex-col justify-between bg-gradient-to-b from-[#1E3264] via-[#121212] to-[#121212] text-white overflow-hidden">
                        <div>
                          {/* Spotify Top Header */}
                          <div className="px-3 py-1.5 flex items-center justify-between text-neutral-300 shrink-0">
                            <ChevronLeft className="w-4 h-4" />
                            <div className="text-center">
                              <span className="text-[8px] text-neutral-400 uppercase tracking-wider block">Playing from Playlist</span>
                              <span className="text-[10px] font-bold text-white">Tamil Top Hits 2026</span>
                            </div>
                            <MoreHorizontal className="w-4 h-4" />
                          </div>

                          {/* Companion Album / Ad Visual */}
                          <div className="px-5 py-2">
                            <div className="relative w-full h-[155px] rounded-xl overflow-hidden shadow-2xl border border-white/10 mx-auto">
                              <img
                                src={current.image}
                                alt="Spotify Audio Ad Companion"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Audio Ad Info */}
                          <div className="px-5 py-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-bold text-white">Feel the Speed — UrbanKicks Pro</h4>
                                <span className="text-[9px] text-[#1DB954] font-semibold block">
                                  Sponsored by UrbanKicks
                                </span>
                              </div>
                              <Heart className="w-4 h-4 text-[#1DB954] fill-[#1DB954]" />
                            </div>

                            {/* Audio Scrubber */}
                            <div className="space-y-0.5 pt-1">
                              <div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden">
                                <div className="w-2/3 h-full bg-[#1DB954]" />
                              </div>
                              <div className="flex justify-between text-[8px] text-neutral-400 font-mono">
                                <span>0:18</span>
                                <span>0:30</span>
                              </div>
                            </div>

                            {/* Clickable Companion Promo Banner */}
                            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15 flex items-center justify-between">
                              <div>
                                <span className="text-[9px] font-bold text-white block">Festival Flat 20% Off</span>
                                <span className="text-[8px] text-neutral-300">Code: SPEED20</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => openLeadModal("Spotify Audio Ad Action")}
                                className="px-2.5 py-1 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black text-[9px] font-bold cursor-pointer"
                              >
                                Shop Now ›
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Spotify Bottom Navigation */}
                        <div className="px-6 py-1.5 border-t border-white/10 bg-[#121212] flex items-center justify-between text-neutral-400 shrink-0 text-[8px]">
                          <div className="flex flex-col items-center gap-0.5 text-white">
                            <HomeIcon className="w-3.5 h-3.5" />
                            <span>Home</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <Search className="w-3.5 h-3.5" />
                            <span>Search</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Your Library</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <SpotifyLogo className="w-3.5 h-3.5" />
                            <span>Premium</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Bottom iOS Home Indicator Bar (Fixed position in chassis) */}
                  <div className="py-1.5 bg-white shrink-0">
                    <div className="w-28 h-1 bg-neutral-900/30 rounded-full mx-auto" />
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT: Clear & Simple Value Breakdown (No cluttered boxes) */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                {/* Platform Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-800 w-fit">
                  <span className="shrink-0">{current.logo}</span>
                  <span>{current.name}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 leading-snug">
                    {current.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mt-2.5">
                    {current.description}
                  </p>
                </div>

                {/* 3 Simple Deliverables */}
                <div className="space-y-2.5 pt-2">
                  {current.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Action Trigger */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-neutral-900 block">
                    Want to run ads on {current.name}?
                  </span>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    We handle ad design, audience targeting, and daily results.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openLeadModal(`Launch ${current.name} Campaign`)}
                  className="px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shrink-0 text-center"
                >
                  Start Yours →
                </button>
              </div>

            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};

export default MediaVisualStrip;
