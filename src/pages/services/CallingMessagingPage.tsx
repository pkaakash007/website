import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Bot,
  MessageSquare,
  Smartphone,
  MessageCircle,
  Radio,
  Sliders,
  CheckCircle2,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { CALLING_MESSAGING_HUB_CONTENT } from "@/data/websiteContent";

const channelIcons: Record<string, any> = {
  "bulk-voice-calls": Phone,
  "real-time-ai-calling": Bot,
  "bulk-sms": MessageSquare,
  "rcs-messaging": Smartphone,
  "whatsapp-marketing": MessageCircle,
};

export const CallingMessagingPage: React.FC = () => {
  const content = CALLING_MESSAGING_HUB_CONTENT;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "Voice, AI Calling, SMS, RCS & WhatsApp | Real Result"}
        description={content.seo.meta_description || "Plan bulk voice calls, real-time AI calling, bulk SMS, RCS, and WhatsApp campaigns with Real Result. Connect your message to a useful next step."}
        canonicalPath="/services/calling-messaging/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Calling &amp; Messaging</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            {content.eyebrow}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {content.h1}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8 font-normal">
            {content.body}
          </p>

          <Link
            to="/contact/?interest=calling-messaging"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/30 transition-all hover:scale-[1.02]"
          >
            {content.primaryButton}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Which channel fits the job? (5 Channels) */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Omnichannel Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Which channel fits the job?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((item, idx) => {
              const slug = item.href.replace(/^\/services\//, "").replace(/\/$/, "");
              const IconComp = channelIcons[slug] || Phone;
              return (
                <Link
                  key={idx}
                  to={item.href}
                  className="p-8 rounded-2xl bg-[#F9F9FB] border border-black/[0.06] hover:border-[#0071E3] hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.05] text-[#0071E3] flex items-center justify-center mb-6 group-hover:bg-[#0071E3] group-hover:text-white transition-colors shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#0071E3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#0071E3]">
                    <span>View channel specs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Broadcasting or conversation? */}
      <section className="py-20 md:py-28 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Strategic Classification
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              {content.comparison.h2}
            </h2>
          </div>

          <div className="space-y-4">
            {content.comparison.items.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0071E3] flex items-center justify-center font-bold text-xs">
                    0{i + 1}
                  </div>
                  <span className="text-lg font-bold text-neutral-900">{c.channel}</span>
                </div>
                <p className="text-sm text-neutral-600 sm:text-right max-w-md font-normal">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What does a campaign include? & Connected Marketing */}
      <section className="py-20 md:py-28 bg-white border-y border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-3 block">
                Full Scope
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {content.campaignScope.h2}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {content.campaignScope.body}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-3 block">
                Integrated Follow-Up
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {content.marketingConnection.h2}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {content.marketingConnection.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {content.finalContact.h2}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 font-normal">
            {content.finalContact.body}
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact/?interest=calling-messaging"
              className="px-8 py-4 rounded-full text-base font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-xl shadow-[#0071E3]/30 transition-all hover:scale-[1.02] inline-flex items-center gap-2"
            >
              {content.finalContact.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallingMessagingPage;
