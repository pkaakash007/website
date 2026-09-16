import React from "react";
import { SEO_CONFIG } from "@/config/seo";

export const ContactDirectChannels: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-900">
      <div className="border-b border-neutral-200 pb-4">
        <h2 className="text-2xl font-bold text-black tracking-tight">
          Direct Contact Channels
        </h2>
        <p className="text-sm text-neutral-600 mt-1 font-normal">
          Direct communication pathways with our team in Erode.
        </p>
      </div>

      <div className="space-y-6 text-sm">
        {/* Address */}
        <div>
          <h3 className="font-bold text-black text-base">
            Corporate Headquarters
          </h3>
          <p className="text-neutral-700 mt-1 leading-relaxed">
            {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}, Tamil Nadu, India
          </p>
        </div>

        {/* Telephone */}
        <div>
          <h3 className="font-bold text-black text-base">
            Phone
          </h3>
          <a
            href={`tel:${SEO_CONFIG.telephone}`}
            className="text-black font-semibold hover:underline mt-0.5 block"
          >
            {SEO_CONFIG.displayPhone}
          </a>
          <p className="text-xs text-neutral-600 mt-0.5">
            Monday – Saturday: 9:00 AM – 6:30 PM IST
          </p>
        </div>

        {/* Email */}
        <div>
          <h3 className="font-bold text-black text-base">
            Email
          </h3>
          <a
            href={`mailto:${SEO_CONFIG.email}`}
            className="text-black font-semibold hover:underline mt-0.5 block"
          >
            {SEO_CONFIG.email}
          </a>
          <p className="text-xs text-neutral-600 mt-0.5">campaigns@realresult.in</p>
        </div>

        {/* WhatsApp Direct */}
        <div>
          <h3 className="font-bold text-black text-base">
            WhatsApp
          </h3>
          <a
            href="https://wa.me/919842012345?text=Hello%20Real%20Result%20Team,%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold hover:underline mt-0.5 block"
          >
            +91 98420 12345
          </a>
          <p className="text-xs text-neutral-600 mt-0.5">
            Direct response during IST business hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDirectChannels;

