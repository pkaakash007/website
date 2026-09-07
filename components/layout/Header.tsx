"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  Bot,
  Code2,
  Users,
  ArrowRight,
  Sparkles,
  Search,
  MessageSquare,
} from "lucide-react";
import Container from "./Container";
import BrandLogo from "../shared/BrandLogo";
import Button from "../shared/Button";
import { openLeadModal } from "../shared/LeadModal";

const solutions = [
  {
    title: "Marketing & Media",
    description: "Digital performance, TV, radio, print, OOH / DOOH, cinema & omnichannel attribution",
    href: "/marketing",
    icon: TrendingUp,
    badge: "Primary Growth",
    isPrimary: true,
  },
  {
    title: "AI Communication",
    description: "Regional AI telecalling, automated bulk IVR, WhatsApp Business API & CPaaS",
    href: "/ai-communication",
    icon: Bot,
    badge: "Conversational AI",
    isPrimary: false,
  },
  {
    title: "Technology & Software",
    description: "Custom software engineering, cloud systems, SaaS platforms, web & mobile apps",
    href: "/technology",
    icon: Code2,
    badge: "Engineering",
    isPrimary: false,
  },
  {
    title: "Human Resources",
    description: "Executive recruitment, specialized talent acquisition & workforce advisory",
    href: "/human-resources",
    icon: Users,
    badge: "Talent",
    isPrimary: false,
  },
];

const navLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-subtle py-2.5"
          : "bg-canvas/90 backdrop-blur-md border-b border-border/70 py-3.5"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Official Supplied Brand Logo */}
          <BrandLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Marketing Direct & Prominent Link */}
            <Link
              href="/marketing"
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === "/marketing"
                  ? "bg-gold-50 text-gold-800 border border-gold-300"
                  : "text-primary hover:text-gold-700 hover:bg-gold-50/60"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-gold-600" />
              <span>Marketing</span>
              <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-gold-200/60 text-gold-900 ml-0.5">
                Core
              </span>
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname.startsWith("/solutions") ||
                  pathname.startsWith("/ai-communication") ||
                  pathname.startsWith("/technology") ||
                  pathname.startsWith("/human-resources")
                    ? "text-primary bg-surface font-semibold"
                    : "text-secondary hover:text-primary hover:bg-surface"
                }`}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>

              {/* Solutions Mega Menu */}
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-3xl border border-border p-4 shadow-floating">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted px-3 pb-2 border-b border-border/80 flex items-center justify-between">
                      <span>Business Capabilities</span>
                      <span className="text-gold-600 font-semibold">Marketing-First Agency</span>
                    </div>

                    <div className="mt-2 space-y-1.5">
                      {solutions.map((item) => {
                        const Icon = item.icon;
                        const isMkt = item.isPrimary;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 group ${
                              isMkt
                                ? "bg-gold-50/70 border border-gold-200/80 hover:bg-gold-100/70 hover:border-gold-300"
                                : "hover:bg-surface border border-transparent"
                            }`}
                          >
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isMkt
                                  ? "bg-gold text-black shadow-gold-subtle"
                                  : "bg-surface text-secondary group-hover:text-primary group-hover:bg-white"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={`text-sm font-semibold ${isMkt ? "text-primary" : "text-primary"}`}>
                                  {item.title}
                                </span>
                                <span
                                  className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full ${
                                    isMkt
                                      ? "bg-gold text-black font-bold"
                                      : "bg-surface border border-border text-muted"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs text-secondary mt-0.5 leading-relaxed line-clamp-1">
                                {item.description}
                              </p>
                            </div>
                            <ArrowRight
                              className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${
                                isMkt ? "text-gold-700" : "text-muted group-hover:text-primary"
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-border flex items-center justify-between px-3 text-xs">
                      <span className="text-muted">Need a blended omnichannel strategy?</span>
                      <button
                        onClick={() => {
                          setSolutionsOpen(false);
                          openLeadModal("blended-strategy");
                        }}
                        className="text-gold-700 hover:text-gold-800 font-semibold flex items-center gap-1"
                      >
                        Plan Custom Campaign
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-surface font-semibold"
                    : "text-secondary hover:text-primary hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="gold"
              size="sm"
              withArrow
              onClick={() => openLeadModal("header-cta")}
              className="font-bold tracking-tight text-xs uppercase px-5 py-2.5 shadow-gold-subtle"
            >
              Start a Campaign
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="gold"
              size="sm"
              onClick={() => openLeadModal("mobile-header-cta")}
              className="text-xs px-3 py-1.5 font-bold uppercase tracking-wider"
            >
              Start a Campaign
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-primary hover:bg-surface transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-canvas/98 backdrop-blur-xl border-t border-border z-50 overflow-y-auto px-4 py-6">
          <div className="space-y-6 max-w-lg mx-auto">
            {/* Primary Marketing Focus */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-gold-700 font-bold mb-2 px-2">
                Primary Division
              </div>
              <Link
                href="/marketing"
                className="flex items-center justify-between p-4 rounded-2xl bg-gold-50 border border-gold-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold text-black flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-base">Marketing & Media</div>
                    <div className="text-xs text-secondary">Digital, TV, Radio, OOH, Attribution</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gold-700" />
              </Link>
            </div>

            {/* Supporting Divisions */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted font-bold mb-2 px-2">
                Supporting Capabilities
              </div>
              <div className="space-y-2">
                {solutions.slice(1).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-border hover:border-gold/40"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface text-secondary flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-primary text-sm">{item.title}</div>
                          <div className="text-xs text-muted line-clamp-1">{item.description}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* General Navigation */}
            <div className="pt-2 border-t border-border">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="p-3 text-center rounded-xl bg-white border border-border text-sm font-medium text-primary hover:bg-surface"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-4">
              <Button
                variant="gold"
                size="lg"
                className="w-full"
                withArrow
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadModal("mobile-menu-cta");
                }}
              >
                Plan Your Campaign
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
