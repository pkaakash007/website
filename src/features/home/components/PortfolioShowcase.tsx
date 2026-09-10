import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  ArrowRight,
  ExternalLink,
  Lock,
  Globe,
  Monitor,
  Database,
  ShoppingCart,
  Sparkles,
  Layers,
  Palette,
  Megaphone,
} from "lucide-react";

// ─── Data Definitions ────────────────────────────────────────────────────────

const MAIN_TABS = [
  { id: "website",   label: "Website Design",     icon: <Globe className="w-3.5 h-3.5" /> },
  { id: "marketing", label: "Digital Marketing",  icon: <Megaphone className="w-3.5 h-3.5" /> },
  { id: "design",    label: "Graphic Design",     icon: <Palette className="w-3.5 h-3.5" /> },
];

const SUB_TABS: Record<string, string[]> = {
  website: [
    "Static Website",
    "Dynamic Website",
    "Enterprise Solutions",
    "E-commerce Website",
  ],
  marketing: [
    "Google Ads",
    "Facebook Ads",
    "Instagram Ads",
    "SEO & GEO",
    "Google Map",
    "Content Writing",
  ],
  design: [
    "Package Design",
    "Logo Design",
    "Ads Poster",
    "Catalogue",
    "Website Banner",
  ],
};

export interface WebsitePortfolioItem {
  id: string;
  client: string;
  sub: "Static Website" | "Dynamic Website" | "Enterprise Solutions" | "E-commerce Website";
  url: string;
  industry: string;
  topicTitle: string;
  topicLink: string;
  tagline: string;
  badge: string;
  brandColor: string;
  bgGradient: string;
  stats: { label: string; value: string }[];
  features: string[];
  image?: string;
}

const WEBSITE_PORTFOLIO: WebsitePortfolioItem[] = [
  // ── 1. Static Websites ──────────────────────────────────────────────────
  {
    id: "vm",
    client: "Vmmeditech Healthcare",
    sub: "Static Website",
    url: "www.vmmeditech.in",
    industry: "Medical Equipment",
    topicTitle: "Static Web Development",
    topicLink: "/application-development",
    tagline: "ICU & Hospital Critical Equipment Catalog",
    badge: "ISO 13485 Certified",
    brandColor: "#0284C7",
    bgGradient: "from-[#0A2540] via-[#0369A1] to-[#0284C7]",
    stats: [
      { label: "Page Speed", value: "0.6s" },
      { label: "Catalog", value: "250+ Devices" },
    ],
    features: ["WhatsApp Lead Integration", "Fast Static HTML5", "Mobile Optimized"],
  },
  {
    id: "ap",
    client: "Anitha Packers & Movers",
    sub: "Static Website",
    url: "www.anithapackers.com",
    industry: "Logistics & Moving",
    topicTitle: "Static Web Development",
    topicLink: "/application-development",
    tagline: "Household & Corporate Relocation Specialist",
    badge: "12,000+ Safe Moves",
    brandColor: "#EA580C",
    bgGradient: "from-[#1F0D03] via-[#C2410C] to-[#EA580C]",
    stats: [
      { label: "TN Google Rank", value: "#1" },
      { label: "Lead Growth", value: "+180%" },
    ],
    features: ["Instant Fare Estimator", "Click-to-Call Lead Form", "Local SEO Optimized"],
  },
  {
    id: "gs",
    client: "Greensprout International School",
    sub: "Static Website",
    url: "www.greensproutschool.edu.in",
    industry: "Education & Academy",
    topicTitle: "Static Web Development",
    topicLink: "/application-development",
    tagline: "CBSE Holistic Curriculum & Academy Portal",
    badge: "Admissions Open 2025-26",
    brandColor: "#059669",
    bgGradient: "from-[#042017] via-[#047857] to-[#059669]",
    stats: [
      { label: "Admissions", value: "950+ Enrolled" },
      { label: "Performance", value: "100/100" },
    ],
    features: ["Online Admission Form", "Virtual Campus Tour", "Fast Cloudflare CDN"],
  },
  {
    id: "kk",
    client: "KKR Multitech Engineers",
    sub: "Static Website",
    url: "www.kkrmultitech.com",
    industry: "Industrial Manufacturing",
    topicTitle: "Static Web Development",
    topicLink: "/application-development",
    tagline: "5-Axis CNC & Sheet Metal Engineering Solutions",
    badge: "Tier-1 Auto Supplier",
    brandColor: "#475569",
    bgGradient: "from-[#0F172A] via-[#334155] to-[#475569]",
    stats: [
      { label: "Machinery", value: "30+ CNC Units" },
      { label: "Tolerance", value: "±0.005mm" },
    ],
    features: ["Digital Machinery Catalog", "B2B PDF Spec Sheets", "Direct RFQ Submission"],
  },
  {
    id: "mp",
    client: "MP3H Nutrition & Fitness",
    sub: "Static Website",
    url: "www.mp3hfitness.com",
    industry: "Health & Wellness",
    topicTitle: "Static Web Development",
    topicLink: "/application-development",
    tagline: "Personalized Diet & 90-Day Transformation Hub",
    badge: "800+ Transformed",
    brandColor: "#7C3AED",
    bgGradient: "from-[#180A2E] via-[#6D28D9] to-[#7C3AED]",
    stats: [
      { label: "Client Retain", value: "94%" },
      { label: "Load Speed", value: "0.5s" },
    ],
    features: ["Transformation Slider", "WhatsApp Consult Funnel", "Video Reviews"],
  },
  {
    id: "acc",
    client: "Accumed RCM Solutions",
    sub: "Static Website",
    url: "www.accumedrcm.com",
    industry: "US Healthcare BPO",
    topicTitle: "Static Web Development",
    topicLink: "/application-development",
    tagline: "US Healthcare Revenue Cycle & Medical Coding",
    badge: "HIPAA Compliant",
    brandColor: "#0D9488",
    bgGradient: "from-[#04201E] via-[#0F766E] to-[#0D9488]",
    stats: [
      { label: "Clean Claims", value: "99.4%" },
      { label: "Turnaround", value: "24 Hours" },
    ],
    features: ["HIPAA Security Standard", "Interactive Audit Scheduler", "Global BPO Showcase"],
  },

  // ── 2. Dynamic Websites ─────────────────────────────────────────────────
  {
    id: "dyn1",
    client: "TamilStar Media & Events",
    sub: "Dynamic Website",
    url: "www.tamilstarevents.com",
    industry: "Entertainment & Media",
    topicTitle: "Dynamic Web Applications",
    topicLink: "/application-development",
    tagline: "Concert Ticketing & Dynamic News CMS Portal",
    badge: "Live Event Engine",
    brandColor: "#E11D48",
    bgGradient: "from-[#2A0512] via-[#BE123C] to-[#E11D48]",
    stats: [
      { label: "Tickets Sold", value: "45,000+" },
      { label: "Dynamic CMS", value: "Real-time" },
    ],
    features: ["Live Seat Booking Engine", "Dynamic CMS Press Portal", "Instant QR Code Passes"],
  },
  {
    id: "dyn2",
    client: "Erode Real Estate Hub",
    sub: "Dynamic Website",
    url: "www.eroderealestate.in",
    industry: "Real Estate MLS",
    topicTitle: "Dynamic Web Applications",
    topicLink: "/application-development",
    tagline: "MLS Property Search & Real-Time Filter Portal",
    badge: "2,500+ Verified Properties",
    brandColor: "#2563EB",
    bgGradient: "from-[#0B1A40] via-[#1D4ED8] to-[#2563EB]",
    stats: [
      { label: "Active Listings", value: "2,500+" },
      { label: "Inquiries", value: "850/mo" },
    ],
    features: ["Multi-Attribute Filters", "Owner Dashboard & Uploads", "Interactive Map View"],
  },
  {
    id: "dyn3",
    client: "CareClinic Appointments",
    sub: "Dynamic Website",
    url: "www.careclinicportal.com",
    industry: "Healthcare Appointments",
    topicTitle: "Dynamic Web Applications",
    topicLink: "/application-development",
    tagline: "Doctor Slot Availability & Scheduling Portal",
    badge: "Live Doctor Calendar",
    brandColor: "#0284C7",
    bgGradient: "from-[#032845] via-[#0369A1] to-[#0284C7]",
    stats: [
      { label: "Specialists", value: "40+ Doctors" },
      { label: "Bookings", value: "12,000+" },
    ],
    features: ["Dynamic Slot Availability", "Automated WhatsApp Bot", "Patient Health Records"],
  },
  {
    id: "dyn4",
    client: "Kongu Trade & B2B Hub",
    sub: "Dynamic Website",
    url: "www.kongutraders.com",
    industry: "Textile & Agro B2B",
    topicTitle: "Dynamic Web Applications",
    topicLink: "/application-development",
    tagline: "B2B Merchant Marketplace & Tender Portal",
    badge: "3,200+ Suppliers",
    brandColor: "#D97706",
    bgGradient: "from-[#261303] via-[#B45309] to-[#D97706]",
    stats: [
      { label: "Verified Sellers", value: "3,200+" },
      { label: "Monthly RFQs", value: "4,800+" },
    ],
    features: ["Multi-Vendor User Accounts", "Bulk Tender Posting", "Buyer-Seller Inquiries"],
  },
  {
    id: "dyn5",
    client: "EduLearn Academy LMS",
    sub: "Dynamic Website",
    url: "www.edulearnlms.in",
    industry: "EdTech & Learning",
    topicTitle: "Dynamic Web Applications",
    topicLink: "/application-development",
    tagline: "Video Course Streaming & Progress Portal",
    badge: "LMS Learning Engine",
    brandColor: "#4F46E5",
    bgGradient: "from-[#100E3D] via-[#4338CA] to-[#4F46E5]",
    stats: [
      { label: "Students", value: "18,000+" },
      { label: "Lessons", value: "650+ Videos" },
    ],
    features: ["Video DRM Streaming", "Automated Certificates", "Student Progress Dashboard"],
  },
  {
    id: "dyn6",
    client: "Kongu Motors Dealership",
    sub: "Dynamic Website",
    url: "www.kongumotors.com",
    industry: "Automobile Showroom",
    topicTitle: "Dynamic Web Applications",
    topicLink: "/application-development",
    tagline: "Multi-Brand Vehicle Inventory & EMI Calculator",
    badge: "Live Vehicle Stock",
    brandColor: "#DC2626",
    bgGradient: "from-[#2B0909] via-[#B91C1C] to-[#DC2626]",
    stats: [
      { label: "Showroom Stock", value: "120+ Vehicles" },
      { label: "Test Drives", value: "240/mo" },
    ],
    features: ["Dynamic EMI Calculator", "Online Test Drive Booking", "Live Stock Availability"],
  },

  // ── 3. Enterprise Solutions ──────────────────────────────────────────────
  {
    id: "ent1",
    client: "TexERP Mill Management",
    sub: "Enterprise Solutions",
    url: "erp.texmillenterprises.com",
    industry: "Textile Manufacturing",
    topicTitle: "Enterprise Solutions & Cloud ERP",
    topicLink: "/application-development",
    tagline: "Loom Telemetry, Yarn Inventory & GST Billing",
    badge: "Enterprise Cloud ERP",
    brandColor: "#334155",
    bgGradient: "from-[#090D16] via-[#1E293B] to-[#334155]",
    stats: [
      { label: "Looms Monitored", value: "120 Units" },
      { label: "Uptime", value: "99.98%" },
    ],
    features: ["Live Sensor Telemetry", "Automated E-way Bill & GST", "Multi-Shift Attendance"],
  },
  {
    id: "ent2",
    client: "OmniLogistics Fleet OS",
    sub: "Enterprise Solutions",
    url: "dispatch.omnilogistics.in",
    industry: "Supply Chain & Freight",
    topicTitle: "Enterprise Solutions & Cloud ERP",
    topicLink: "/application-development",
    tagline: "Real-Time Fleet Telemetry & Dispatch ERP",
    badge: "Supply Chain ERP",
    brandColor: "#0E7490",
    bgGradient: "from-[#041F29] via-[#155E75] to-[#0E7490]",
    stats: [
      { label: "Active Trucks", value: "480 Vehicles" },
      { label: "On-Time Rate", value: "99.2%" },
    ],
    features: ["Live GPS Map Dispatching", "Fastag & Fuel Auto Logs", "Consignor Client Portal"],
  },
  {
    id: "ent3",
    client: "HospitalCore Clinical ERP",
    sub: "Enterprise Solutions",
    url: "core.carehospitalgroup.in",
    industry: "Hospital Chain HIS",
    topicTitle: "Enterprise Solutions & Cloud ERP",
    topicLink: "/application-development",
    tagline: "Hospital Information System & Clinical Cloud",
    badge: "NABH Hospital HIS",
    brandColor: "#0F766E",
    bgGradient: "from-[#031C1A] via-[#115E59] to-[#0F766E]",
    stats: [
      { label: "Beds Managed", value: "350 Beds" },
      { label: "Patient Records", value: "150K+" },
    ],
    features: ["Doctor Rounds Mobile Sync", "Pharmacy Barcode POS", "Cashless TPA Workflow"],
  },
  {
    id: "ent4",
    client: "AgroSupply Cold Storage",
    sub: "Enterprise Solutions",
    url: "procure.agrosupplycloud.com",
    industry: "Agri-Procurement",
    topicTitle: "Enterprise Solutions & Cloud ERP",
    topicLink: "/application-development",
    tagline: "Automated Weighbridge & Mandi Settlement ERP",
    badge: "Agro Supply Chain",
    brandColor: "#15803D",
    bgGradient: "from-[#051F0D] via-[#166534] to-[#15803D]",
    stats: [
      { label: "Season Tonnage", value: "42,000 Tons" },
      { label: "Farmer Payouts", value: "Instant NEFT" },
    ],
    features: ["Digital Weighbridge IoT Sync", "Automated NEFT Vouchers", "Cold Chamber IoT Logs"],
  },
  {
    id: "ent5",
    client: "FinServe NBFC Core",
    sub: "Enterprise Solutions",
    url: "app.finservemicro.com",
    industry: "Fintech & Lending",
    topicTitle: "Enterprise Solutions & Cloud ERP",
    topicLink: "/application-development",
    tagline: "Loan Origination & Field EMI Collection OS",
    badge: "RBI NBFC Compliant",
    brandColor: "#6B21A8",
    bgGradient: "from-[#1D0633] via-[#581C87] to-[#6B21A8]",
    stats: [
      { label: "Loan Book", value: "₹45 Crore" },
      { label: "Collection Rate", value: "99.4%" },
    ],
    features: ["Aadhaar eKYC Integration", "Field Officer Offline Sync", "Real-Time Risk Dashboard"],
  },
  {
    id: "ent6",
    client: "RetailChain Cloud ERP",
    sub: "Enterprise Solutions",
    url: "hq.superstoreindia.com",
    industry: "Retail Supermarkets",
    topicTitle: "Enterprise Solutions & Cloud ERP",
    topicLink: "/application-development",
    tagline: "Central Warehouse Sync & High-Speed POS",
    badge: "Multi-Store Cloud",
    brandColor: "#1F2937",
    bgGradient: "from-[#0B0F17] via-[#111827] to-[#1F2937]",
    stats: [
      { label: "Branches", value: "22 Outlets" },
      { label: "POS Latency", value: "0.15s" },
    ],
    features: ["Central Warehouse Replenish", "Unified Barcode POS", "Real-Time Sales Telemetry"],
  },

  // ── 4. E-Commerce Websites ──────────────────────────────────────────────
  {
    id: "ec1",
    client: "Sree Amman Silk Sarees",
    sub: "E-commerce Website",
    url: "www.sreeammansilks.com",
    industry: "Handloom Ethnic Fashion",
    topicTitle: "E-Commerce Solutions",
    topicLink: "/application-development",
    tagline: "Pure Kanchipuram Silks Direct Online Store",
    badge: "Direct Weaver Store",
    brandColor: "#9D174D",
    bgGradient: "from-[#2A051C] via-[#831843] to-[#9D174D]",
    stats: [
      { label: "Orders Shipped", value: "28K+" },
      { label: "UPI Rate", value: "82%" },
    ],
    features: ["High-Res Fabric Zoom", "Razorpay UPI Instant Checkout", "WhatsApp Cart Recovery"],
  },
  {
    id: "ec2",
    client: "Nilgiris Pure Organics",
    sub: "E-commerce Website",
    url: "www.nilgirisorganics.in",
    industry: "Farm Fresh Grocery",
    topicTitle: "E-Commerce Solutions",
    topicLink: "/application-development",
    tagline: "Nilgiris Tea, Honey & Spices Direct Store",
    badge: "Fresh Grocery Store",
    brandColor: "#166534",
    bgGradient: "from-[#051C0C] via-[#14532D] to-[#166534]",
    stats: [
      { label: "Subscribers", value: "3,400+" },
      { label: "Delivery", value: "24h Fresh" },
    ],
    features: ["Weekly Subscription Engine", "Pincode Delivery Check", "Cold-Chain Packaging"],
  },
  {
    id: "ec3",
    client: "Kongu Spark Electricals B2B",
    sub: "E-commerce Website",
    url: "www.konguspark.com",
    industry: "Industrial Electricals",
    topicTitle: "E-Commerce Solutions",
    topicLink: "/application-development",
    tagline: "Industrial Cables & Switchgear B2B Wholesale",
    badge: "B2B Wholesale Store",
    brandColor: "#1E293B",
    bgGradient: "from-[#080E1A] via-[#0F172A] to-[#1E293B]",
    stats: [
      { label: "B2B Clients", value: "1,200+" },
      { label: "SKUs", value: "8,500+" },
    ],
    features: ["Volume Tiered Pricing", "Datasheet Downloads", "GST Credit Auto Invoicing"],
  },
];

// Digital Marketing & Graphic Design Items
interface GeneralPortfolioItem {
  id: string;
  client: string;
  category: "marketing" | "design";
  sub: string;
  image: string;
  tagline: string;
  metrics: string;
}

const GENERAL_PORTFOLIO: GeneralPortfolioItem[] = [
  // Digital Marketing
  { id: "dm1", client: "Ticvic Technologies", category: "marketing", sub: "Content Writing", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80", tagline: "B2B Enterprise Technical Whitepapers", metrics: "+240% Organic Inbound" },
  { id: "dm2", client: "Erode Bakery & Cafe", category: "marketing", sub: "Google Ads", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", tagline: "Hyper-Local Search & Google Map Ads", metrics: "₹8.40 Cost Per Lead" },
  { id: "dm3", client: "Textile Hub Tamil Nadu", category: "marketing", sub: "Facebook Ads", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80", tagline: "Pan-India B2B Wholesaler Generation", metrics: "6.2x ROAS Return" },
  { id: "dm4", client: "Clinic Care Erode", category: "marketing", sub: "SEO & GEO", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", tagline: "Google Map 3-Pack & AI Search Ranking", metrics: "Rank #1 for 18 Keywords" },
  { id: "dm5", client: "Pepy Fishing Gears", category: "marketing", sub: "Instagram Ads", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", tagline: "Viral Video Ads & D2C Conversions", metrics: "3.2M Impressions" },
  { id: "dm6", client: "Kongu Organic Farms", category: "marketing", sub: "Google Map", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80", tagline: "Local GMB Verification & Review Boost", metrics: "4.9★ (380 Reviews)" },

  // Graphic Design
  { id: "gd1", client: "Farms Craft Organic", category: "design", sub: "Package Design", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80", tagline: "Biodegradable Food Pouch & Labeling", metrics: "Export Packaging Grade" },
  { id: "gd2", client: "Nilgiris Green Leaf Tea", category: "design", sub: "Package Design", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80", tagline: "Luxury Matte Tin Canister Typography", metrics: "Award Winning Design" },
  { id: "gd3", client: "Sree Textiles & Silks", category: "design", sub: "Logo Design", image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=600&q=80", tagline: "Minimalist Peacock Loom Brand Mark", metrics: "Full Vector Identity" },
  { id: "gd4", client: "Erode Shopping Fest", category: "design", sub: "Ads Poster", image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&q=80", tagline: "High-Contrast Billboard & Social Creatives", metrics: "Multi-Format Assets" },
  { id: "gd5", client: "Nilgiris Natural Honey", category: "design", sub: "Catalogue", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", tagline: "24-Page Premium B2B Export Brochure", metrics: "Print Ready CMYK" },
  { id: "gd6", client: "Two Leaf One Bud Tea", category: "design", sub: "Website Banner", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", tagline: "Retina Web Headers & Promotional Strips", metrics: "Web & Mobile Ready" },
];

const getWebsitePreviewImage = (site: WebsitePortfolioItem): string => {
  if (site.image) return site.image;
  switch (site.sub) {
    case "Static Website":
      if (site.industry.includes("Medical") || site.industry.includes("Healthcare"))
        return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80";
      if (site.industry.includes("Logistics") || site.industry.includes("Moving"))
        return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80";
      if (site.industry.includes("Education") || site.industry.includes("School"))
        return "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80";
      if (site.industry.includes("Manufacturing") || site.industry.includes("Industrial"))
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80";
      if (site.industry.includes("Textile") || site.industry.includes("Silk"))
        return "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80";
      return "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80";
    case "Dynamic Website":
      if (site.industry.includes("Real Estate"))
        return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
      if (site.industry.includes("Healthcare") || site.industry.includes("Clinic"))
        return "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80";
      if (site.industry.includes("Automobile"))
        return "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80";
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
    case "Enterprise Solutions":
      if (site.industry.includes("Textile") || site.industry.includes("Manufacturing"))
        return "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
      return "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80";
    case "E-commerce Website":
      if (site.industry.includes("Silk") || site.industry.includes("Fashion"))
        return "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80";
      if (site.industry.includes("Grocery") || site.industry.includes("Organics"))
        return "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80";
      return "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80";
    default:
      return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
  }
};

// ─── Component ───────────────────────────────────────────────────────────────

export const PortfolioShowcase: React.FC = () => {
  const [mainTab, setMainTab] = useState<string>("website");
  const [subTab, setSubTab] = useState<string>("Static Website");

  const handleMainTab = (id: string) => {
    setMainTab(id);
    setSubTab(SUB_TABS[id][0]);
  };

  const filteredWebsites = WEBSITE_PORTFOLIO.filter(
    (item) => item.sub === subTab
  ).slice(0, 3);

  const filteredGeneral = GENERAL_PORTFOLIO.filter(
    (item) => item.category === mainTab && item.sub === subTab
  ).slice(0, 3);

  return (
    <section
      id="portfolio"
      className="pt-4 lg:pt-6 pb-20 lg:pb-28 scroll-mt-20"
      style={{ background: "#F2F2F7" }}
    >
      <Container size="wide">

        {/* Section header */}
        <div className="text-center mb-10">
          <h2 style={{
            fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#000000", lineHeight: 1.1,
            marginBottom: "12px",
          }}>
            Our Live Work Portfolio
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(60,60,67,0.70)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>
            Explore actual websites, dynamic applications, and enterprise systems we engineered for businesses across Tamil Nadu.
          </p>
        </div>

        {/* ── Main Category Tabs (Apple Segmented Control) ── */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex p-1.5 rounded-full bg-black/[0.06] border border-black/[0.06] shadow-sm">
            {MAIN_TABS.map((tab) => {
              const isActive = mainTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleMainTab(tab.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none"
                  style={{
                    background: isActive ? "#000000" : "transparent",
                    color: isActive ? "#FFFFFF" : "rgba(60,60,67,0.70)",
                    boxShadow: isActive ? "0 2px 10px rgba(0,0,0,0.18)" : "none",
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Sub-Category Filter Tabs (Apple Segmented Pill Track) ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1 rounded-full bg-black/[0.04] border border-black/[0.05] gap-1 max-w-full">
            {SUB_TABS[mainTab].map((sub) => {
              const isActive = subTab === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSubTab(sub)}
                  className="px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none"
                  style={{
                    background: isActive ? "#FFFFFF" : "transparent",
                    color: isActive ? "#000000" : "rgba(60,60,67,0.65)",
                    boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)" : "none",
                  }}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 1. Website Design Grid: Real Browser Mockups & Navigation Links ── */}
        {mainTab === "website" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebsites.map((site) => (
              <div
                key={site.id}
                className="group flex flex-col rounded-[22px] bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* ── Browser Chrome Header Bar ── */}
                <div className="bg-[#1E293B] px-3.5 py-2.5 flex items-center justify-between border-b border-white/[0.08]">
                  {/* macOS Window Controls */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                  </div>

                  {/* Browser Address Bar with Lock Icon & Real URL */}
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#0F172A]/90 border border-white/[0.1] text-[10.5px] font-mono text-slate-300 max-w-[210px] truncate shadow-inner">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">https://{site.url}</span>
                  </div>

                  {/* External icon */}
                  <button
                    onClick={() => openLeadModal(`Live URL Preview: ${site.client} (${site.url})`)}
                    title={`Visit ${site.url}`}
                    className="cursor-pointer text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* ── Real Website Interface Viewport ── */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 group">
                  <img
                    src={getWebsitePreviewImage(site)}
                    alt={site.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle glass & dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />


                  {/* Mini Website Hero Banner & Stats Overlay */}
                  <div className="absolute bottom-2.5 inset-x-3 text-white pointer-events-none z-10">
                    <h4 className="text-[12.5px] font-bold leading-snug line-clamp-1 text-white drop-shadow-sm mb-1">
                      {site.tagline}
                    </h4>
                    <div className="flex items-center gap-1.5">
                      {site.stats.map((s, sIdx) => (
                        <span key={sIdx} className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded px-1.5 py-0.5 text-[9px] text-white/90 border border-white/10">
                          <span className="text-white/60">{s.label}:</span>
                          <span className="font-bold text-white">{s.value}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Card Body & Navigation Links ── */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Title & Industry */}
                    <div className="mb-2">
                      <h3 className="text-[16px] font-bold text-black tracking-tight leading-snug">
                        {site.client}
                      </h3>
                      <p className="text-[12px] text-neutral-500 font-medium mt-0.5">
                        {site.industry}
                      </p>
                    </div>
                  </div>

                  {/* ── Action Button ── */}
                  <div className="pt-3.5 border-t border-neutral-100 mt-2">
                    {/* Action button */}
                    <button
                      onClick={() => openLeadModal(`Build a website like ${site.client}`)}
                      className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-neutral-100 hover:bg-[#000000] text-neutral-800 hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
                    >
                      Build Similar Site
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── 2. Digital Marketing & Graphic Design Grids ── */}
        {mainTab !== "website" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGeneral.map((item) => (
              <div
                key={item.id}
                onClick={() => openLeadModal(`${item.category === "marketing" ? "Digital Marketing" : "Graphic Design"}: ${item.client} (${item.sub})`)}
                className="group cursor-pointer flex flex-col rounded-[22px] bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Visual Image container */}
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white text-[10.5px] font-semibold">
                    {item.sub}
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-[16px] font-bold text-black tracking-tight">
                      {item.client}
                    </h3>
                    <p className="text-[13px] text-neutral-600 font-medium mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between">
                    <span className="text-[11.5px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {item.metrics}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#007AFF] group-hover:translate-x-0.5 transition-transform">
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}



      </Container>
    </section>
  );
};

export default PortfolioShowcase;
