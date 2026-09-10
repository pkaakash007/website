import React from "react";
import { Mail, PhoneCall, MapPin, Clock, MessageCircle } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const ContactDirectChannels: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-8 rounded-2xl bg-white border border-border shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-primary">
          Official Direct Channels
        </h2>

        <div className="space-y-5 text-sm text-secondary">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gold-700 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-primary">Corporate Headquarters</div>
              <div className="text-xs text-secondary mt-1 leading-relaxed">
                {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gold-700 shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-primary">Direct Telephone Line</div>
              <a
                href={`tel:${SEO_CONFIG.telephone}`}
                className="text-sm text-primary font-semibold hover:text-gold-700 mt-0.5 block"
              >
                {SEO_CONFIG.displayPhone}
              </a>
              <div className="text-xs text-muted mt-0.5">Monday – Saturday: 09:00 AM – 06:30 PM IST</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gold-700 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-primary">Priority Email Desks</div>
              <a
                href={`mailto:${SEO_CONFIG.email}`}
                className="text-sm text-primary font-medium hover:text-gold-700 mt-0.5 block"
              >
                {SEO_CONFIG.email}
              </a>
              <div className="text-xs text-muted">campaigns@realresult.in</div>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-primary">Instant WhatsApp Desk</div>
              <a
                href="https://wa.me/919842012345?text=Hello%20Real%20Result%20Team,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-700 font-semibold hover:underline mt-0.5 block"
              >
                +91 98420 12345 (Direct Strategist Response)
              </a>
              <div className="text-xs text-muted">Typical response time: Under 15 minutes during IST business hours</div>
            </div>
          </div>

          {/* SLA */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gold-700 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-primary">Enterprise Turnaround Commitment</div>
              <div className="text-xs text-secondary mt-0.5">
                Formal proposal & scoping documents delivered within 24 to 48 business hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDirectChannels;
