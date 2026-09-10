import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { THANK_YOU_CONTENT } from "@/data/websiteContent";
import { REAL_RESULT_CONFIG } from "@/config";

export const ThankYouPage: React.FC = () => {
  const content = THANK_YOU_CONTENT;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F] justify-center items-center py-24 px-4 sm:px-6">
      <SEOHead
        title={content.seo.seo_title || "Enquiry Received | Real Result"}
        description={content.seo.meta_description || "Your enquiry has been received by Real Result."}
        canonicalPath="/thank-you/"
      />

      <div className="max-w-xl w-full bg-white p-8 sm:p-12 rounded-3xl border border-black/[0.06] shadow-xl text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-4">
          {content.h1}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 font-normal">
          {content.body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            to="/services/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/25 transition-all inline-flex items-center justify-center gap-2"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold bg-[#F5F5F7] hover:bg-neutral-200 text-neutral-800 transition-all inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <p className="text-xs text-neutral-500">
          Need to add something? Email{" "}
          <a
            href={`mailto:${REAL_RESULT_CONFIG.contact.email}`}
            className="text-[#0071E3] hover:underline font-medium"
          >
            {REAL_RESULT_CONFIG.contact.email}
          </a>.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
