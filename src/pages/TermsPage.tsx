import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { REAL_RESULT_CONFIG } from "@/config";

export const TermsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title="Website Terms | Real Result"
        description="Terms and conditions for using the Real Result website and reviewing information."
        canonicalPath="/terms/"
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Website Terms</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <FileText className="w-3.5 h-3.5" />
            Terms of Use
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Website Terms
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Terms for using the Real Result website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-8 font-normal">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">1. Site Operator &amp; Applicability</h2>
            <p>
              These Terms apply to your use of this website operated by Real Result. By browsing or using this website, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">2. Use of Site Content</h2>
            <p>
              All text, graphic layouts, concept demonstrations, and intellectual property on this site are owned by or licensed to Real Result. You may view and reference this content for personal or internal evaluation of our services. No content may be reproduced or mirrored without express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">3. Enquiries &amp; Formal Agreements</h2>
            <p>
              Submitting an enquiry through our contact forms or communicating via email/WhatsApp does not create a formal client engagement or binding contract. All services, deliverables, warranties, and commercial terms are governed exclusively by signed proposals and statements of work (SOWs).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">4. Limitation of Liability</h2>
            <p>
              Website information is provided for general informational purposes. We do not warrant that all content is error-free or that service positions or search results are guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
