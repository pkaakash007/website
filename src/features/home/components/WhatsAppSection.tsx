import React from "react";
import { Container } from "@/components/layout/Container";
import { getWhatsAppUrl, REAL_RESULT_CONFIG } from "@/config";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function WhatsAppSection() {
  const whatsappUrl = getWhatsAppUrl("marketing");

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] border-y border-[rgba(0,0,0,0.07)]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text content */}
          <div className="space-y-6">
            <h2 className="ae-h2">
              Talk to a Real Person.<br />
              Get Answers Right Now.
            </h2>

            <p className="ae-body max-w-md">
              No chatbots, no waiting. Send us a WhatsApp message and our team will personally reply to your question about ads, SEO, or website development — usually within minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ae-btn ae-btn-primary flex items-center gap-2.5 px-7 py-3.5 group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us Now</span>
                <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={`tel:${REAL_RESULT_CONFIG.contact.phone}`}
                className="ae-btn ae-btn-ghost flex items-center gap-2 px-6 py-3.5"
              >
                <span>📞 {REAL_RESULT_CONFIG.contact.phone}</span>
              </a>
            </div>

          </div>

          {/* Right: WhatsApp mock chat UI */}
          <div className="relative">
            <div className="ae-card p-0 overflow-hidden">
              {/* Chat header */}
              <div
                className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(0,0,0,0.07)]"
                style={{ background: "#F2F2F7" }}
              >
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0F0F0E]">Real Result · Support</p>
                  <p className="text-[11px] text-[rgba(15,15,14,0.45)]">Online · Replies within minutes</p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-5 space-y-3 bg-white min-h-[200px]">
                {/* Incoming */}
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[rgba(0,0,0,0.07)] shrink-0 mt-0.5" />
                  <div className="max-w-[72%]">
                    <div className="bg-[#FFFFFF] px-4 py-2.5 rounded-2xl rounded-tl-sm text-[13px] text-[rgba(15,15,14,0.70)] leading-[1.5]">
                      Hello! How can we help your business grow today? 🙏
                    </div>
                    <p className="text-[10px] text-[rgba(15,15,14,0.30)] mt-1 ml-1">09:32 AM · ✓✓</p>
                  </div>
                </div>

                {/* Outgoing */}
                <div className="flex gap-2.5 justify-end">
                  <div className="max-w-[72%]">
                    <div className="bg-[#0F0F0E] px-4 py-2.5 rounded-2xl rounded-tr-sm text-[13px] text-white leading-[1.5]">
                      I need more customers for my shop in Erode. Can you help?
                    </div>
                    <p className="text-[10px] text-[rgba(15,15,14,0.30)] mt-1 text-right mr-1">09:33 AM · ✓✓</p>
                  </div>
                </div>

                {/* Incoming reply */}
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[rgba(0,0,0,0.07)] shrink-0 mt-0.5" />
                  <div className="max-w-[80%]">
                    <div className="bg-[#FFFFFF] px-4 py-2.5 rounded-2xl rounded-tl-sm text-[13px] text-[rgba(15,15,14,0.70)] leading-[1.5]">
                      Yes! We run Google Ads and Facebook Ads from just ₹500/day. Let us call you and explain the plan for free. 📞
                    </div>
                    <p className="text-[10px] text-[rgba(15,15,14,0.30)] mt-1 ml-1">09:34 AM · ✓✓</p>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-t border-[rgba(0,0,0,0.07)] bg-[#FFFFFF]">
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-[13px] text-[rgba(15,15,14,0.35)] border border-[rgba(0,0,0,0.08)]">
                  Type your message…
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
