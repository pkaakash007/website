import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { CLIENT_LOGOS, CLIENT_CATEGORIES, ClientLogoItem } from "../../data/clientLogosData";

export const AboutClientLogos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeClient, setActiveClient] = useState<ClientLogoItem | null>(null);

  const filteredClients = useMemo(() => {
    if (selectedCategory === "All") return CLIENT_LOGOS;
    return CLIENT_LOGOS.filter((client) => client.tag === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="clients" className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-black/[0.06] scroll-mt-20">
      <Container size="wide">
        {/* ── Section Header ── */}
        <div className="max-w-2xl space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1D1F] tracking-tight leading-tight">
            Businesses &amp; Brands We Work With
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Every logo below belongs to a genuine business partner. From supermarkets and manufacturing units to schools, healthcare foundations, and real estate promoters across Tamil Nadu, these are the teams that rely on Real Result for websites, software, and targeted growth.
          </p>
        </div>

        {/* ── Category Filter Pills ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CLIENT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1D1D1F] text-white shadow-xs"
                    : "bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-black/[0.06]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Client Logo Grid (Clean Floating Logos, No Background Box) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4.5">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              onClick={() => setActiveClient(client)}
              className="group relative flex flex-col justify-between p-3.5 bg-white hover:bg-white rounded-2xl border border-black/[0.04] hover:border-black/[0.12] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer select-none"
            >
              {/* Logo Frame (Transparent, No Background Box) */}
              <div className="w-full h-20 sm:h-24 flex items-center justify-center p-2 overflow-hidden">
                <img
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  className="max-h-12 sm:max-h-14 max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Client Name & Sector */}
              <div className="mt-2 w-full text-center border-t border-black/[0.04] pt-2">
                <h3 className="text-xs font-semibold text-[#1D1D1F] tracking-tight truncate group-hover:text-[#0071E3] transition-colors" title={client.name}>
                  {client.name}
                </h3>
                <p className="text-[11px] text-[#86868B] truncate mt-0.5" title={client.category}>
                  {client.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Natural Human Trust Strip ── */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-3xl border border-black/[0.07] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-[#1D1D1F]">
              <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
              <span>Direct Accountability &amp; 100% Client Ownership</span>
            </div>
            <p className="text-sm text-neutral-600 max-w-xl">
              We don&apos;t use sub-contractors or lock you into proprietary platforms. You work directly with our engineering and marketing managers based in Erode.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/portfolio"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 active:scale-95 rounded-xl transition-all cursor-pointer"
            >
              View Case Studies
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── Client Detail Modal (Human & Informative) ── */}
        {activeClient && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
            onClick={() => setActiveClient(null)}
          >
            <div
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveClient(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Modal Logo */}
              <div className="w-full h-36 bg-[#FAFAFC] rounded-2xl border border-black/[0.04] flex items-center justify-center p-4">
                <img
                  src={activeClient.logoUrl}
                  alt={activeClient.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>

              {/* Modal Details */}
              <div className="space-y-2">
                <div className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-[#0071E3]">
                  {activeClient.tagLabel}
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1F]">
                  {activeClient.name}
                </h3>
                <p className="text-xs text-neutral-500 font-medium flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                  {activeClient.category}
                </p>
                {activeClient.description && (
                  <p className="text-sm text-neutral-700 pt-2 border-t border-black/[0.04] leading-relaxed">
                    {activeClient.description}
                  </p>
                )}
              </div>

              {/* CTA in Modal */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-xl transition-all"
                  onClick={() => setActiveClient(null)}
                >
                  Start a Similar Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default AboutClientLogos;
