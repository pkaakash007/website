import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  Smartphone,
  Globe,
  Server,
  Cloud,
  MessageSquare,
  Shield,
  ArrowRight,
} from "lucide-react";

export const appDevDisciplines = [
  {
    id: "mobile",
    title: "Mobile Apps",
    badge: "iOS & Android",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    headline: "Custom iPhone & Android apps built for your business",
    description:
      "We design and build easy-to-use mobile apps, test them on all devices, and handle publishing on Google Play Store and Apple App Store.",
    points: [
      "Publishing on Google Play Store & Apple App Store included",
      "UPI, card payments & instant WhatsApp notifications",
      "100% full source code ownership handed over to you",
    ],
    cta: "Build a Mobile App",
  },
  {
    id: "web",
    title: "Websites & Portals",
    badge: "Fast & Responsive",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    headline: "Fast business websites and custom web portals",
    description:
      "We create clean, modern websites that load instantly on mobile phones and computers to help you get more customer inquiries.",
    points: [
      "Loads in under 1 second on mobile phones & 4G/5G",
      "Direct WhatsApp chat and lead inquiry forms",
      "Easy admin panel so your team can update content anytime",
    ],
    cta: "Build a Website",
  },
  {
    id: "erp",
    title: "Billing & ERP",
    badge: "Factory & Operations",
    icon: Server,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    headline: "Software for your factory, warehouse, and billing",
    description:
      "Replace confusing Excel sheets with a simple software system that tracks your stock, customer orders, worker shifts, and GST bills in one place.",
    points: [
      "Live warehouse stock tracking with low-inventory alerts",
      "1-click GST invoices, purchase orders & ledger reports",
      "Works smoothly on desktop, tablets, and mobile phones",
    ],
    cta: "Build Custom ERP",
  },
  {
    id: "saas",
    title: "SaaS Software",
    badge: "Subscription Product",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    headline: "Turn your business idea into a software subscription",
    description:
      "We build complete online software where your customers can sign up, create accounts, and pay monthly or annual subscriptions automatically.",
    points: [
      "Automated monthly and yearly subscription billing",
      "Separate secure accounts for every business customer",
      "Admin dashboard to track active users and revenue",
    ],
    cta: "Launch a SaaS Product",
  },
  {
    id: "ai",
    title: "WhatsApp & AI",
    badge: "24/7 Automation",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    headline: "Automate customer replies 24/7 on WhatsApp",
    description:
      "Set up smart WhatsApp assistants that answer customer questions instantly, take orders, and send updates even when your office is closed.",
    points: [
      "Instant 24/7 automatic answers for common customer questions",
      "Automatic bill & document scanning with zero manual typing",
      "Smooth handoff to your staff whenever a customer asks",
    ],
    cta: "Automate on WhatsApp",
  },
  {
    id: "cloud",
    title: "Cloud & Security",
    badge: "AWS & Daily Backups",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    headline: "Secure cloud hosting with automatic daily backups",
    description:
      "We host your apps on secure Amazon AWS and Google Cloud servers so your software is always fast, protected from crashes, and never loses data.",
    points: [
      "99.9% uptime so your apps and website never go down",
      "Automatic daily backups for complete safety of your data",
      "Free SSL security certificate and DDoS hacker protection",
    ],
    cta: "Setup Cloud Hosting",
  },
];

export const AppDevServicesGrid: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("mobile");
  const activeItem =
    appDevDisciplines.find((d) => d.id === activeId) || appDevDisciplines[0];

  return (
    <section
      id="app-services"
      className="py-16 sm:py-24 bg-transparent border-b border-neutral-200/60 font-sans"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E2036] tracking-tight leading-tight">
            Software solutions tailored to your business
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal mt-2 leading-relaxed">
            Click on any service below to see how it works and what you get.
          </p>
        </div>

        {/* Clean Floating Tab Switcher (Matching Reference Style) */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none">
          {appDevDisciplines.map((item) => {
            const isSelected = item.id === activeId;
            const IconComp = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                  isSelected
                    ? "bg-white border border-neutral-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-[#0E2036]"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70"
                }`}
              >
                <IconComp
                  className={`w-4 h-4 transition-colors ${
                    isSelected ? "text-[#0E2036]" : "text-neutral-500"
                  }`}
                />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* 100% Transparent Showcase (No Outer Box/Modal Background) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Image (Left) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-neutral-100 border border-neutral-200/60 shadow-xs">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2.5">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2036] tracking-tight leading-snug">
                {activeItem.headline}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {activeItem.description}
              </p>
            </div>

            {/* 3 Simple Bullet Points */}
            <div className="space-y-3 pt-4 border-t border-neutral-200/60">
              {activeItem.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E2036] mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openLeadModal(`Application Development: ${activeItem.title}`)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0E2036] hover:bg-[#162e4c] text-white text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.01] active:scale-[0.99] group"
              >
                <span>{activeItem.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#DCC195]" />
              </button>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default AppDevServicesGrid;



