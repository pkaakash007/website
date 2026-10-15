import React from "react";
import { SEO_CONFIG, SOCIAL_LINKS } from "@/config/seo";

export const ContactDirectChannels: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-7 sm:p-9 space-y-7">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
          Direct Channels
        </span>
        <h2 className="text-2xl font-semibold text-[#111827] tracking-tight">
          Get in Touch
        </h2>
        <p className="text-sm text-[#6B7280] mt-1.5 leading-relaxed">
          Reach out by phone, WhatsApp, or email. You are also welcome to visit us at our office in Paramathi Velur.
        </p>
      </div>

      {/* Contact Points List */}
      <div className="divide-y divide-neutral-100 space-y-5 pt-1">
        
        {/* 1. Office Location */}
        <div className="pt-5 first:pt-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
            Office Location
          </span>
          <p className="text-sm font-medium text-[#111827] leading-snug">
            Paramathi Velur, Namakkal District, Tamil Nadu 638182
          </p>
          <div className="mt-2 flex items-center gap-3 text-xs font-medium">
            <a
              href={SOCIAL_LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0071E3] hover:underline"
            >
              Google Maps &rarr;
            </a>
            <span className="text-neutral-300">&bull;</span>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=11.1111972,78.0058805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-black hover:underline"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>

        {/* 2. Phone */}
        <div className="pt-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
            Phone
          </span>
          <a
            href={`tel:${SEO_CONFIG.telephone}`}
            className="text-base font-semibold text-[#111827] hover:text-[#0071E3] transition-colors block leading-tight"
          >
            {SEO_CONFIG.displayPhone}
          </a>
          <p className="text-xs text-[#6B7280] mt-1 font-normal">
            Monday &ndash; Saturday, 9:00 AM &ndash; 6:30 PM IST
          </p>
        </div>

        {/* 3. WhatsApp */}
        <div className="pt-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
            WhatsApp
          </span>
          <a
            href="https://wa.me/918111033390?text=Hello%20Real%20Result%20Team,%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#111827] hover:text-[#0071E3] transition-colors inline-block"
          >
            +91 81110 33390 &rarr;
          </a>
          <p className="text-xs text-[#6B7280] mt-1 font-normal">
            Direct chat for new project inquiries
          </p>
        </div>

        {/* 4. Email */}
        <div className="pt-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
            Email
          </span>
          <a
            href={`mailto:${SEO_CONFIG.email}`}
            className="text-sm font-semibold text-[#111827] hover:text-[#0071E3] transition-colors block leading-tight"
          >
            {SEO_CONFIG.email}
          </a>
          <p className="text-xs text-[#6B7280] mt-1 font-normal">
            Proposals: campaigns@realresult.in
          </p>
        </div>

        {/* 5. Social Links */}
        <div className="pt-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
            Social Profiles
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-neutral-600">
            {[
              { name: "LinkedIn", href: SOCIAL_LINKS.linkedin },
              { name: "Instagram", href: SOCIAL_LINKS.instagram },
              { name: "YouTube", href: SOCIAL_LINKS.youtube },
              { name: "X (Twitter)", href: SOCIAL_LINKS.x },
              { name: "Facebook", href: SOCIAL_LINKS.facebook },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black hover:underline transition-colors"
              >
                {s.name} &rarr;
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactDirectChannels;
