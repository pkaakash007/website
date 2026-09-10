import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { REAL_RESULT_CONFIG } from "@/config";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title="Privacy Policy | Real Result"
        description="Learn how Real Result handles personal information through our website and customer enquiries."
        canonicalPath="/privacy-policy/"
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Compliance &amp; Governance
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            How Real Result handles personal information through this website and related enquiries.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-8 font-normal">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">1. Entity &amp; Contact</h2>
            <p>
              This website is operated by Real Result ("we", "us", "our"). If you have questions regarding this privacy policy or your personal data, you may reach us at{" "}
              <a href={`mailto:${REAL_RESULT_CONFIG.contact.email}`} className="text-[#0071E3] underline">
                {REAL_RESULT_CONFIG.contact.email}
              </a>{" "}
              or by writing to {REAL_RESULT_CONFIG.location.address}.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">2. Information Collected</h2>
            <p>
              We collect information that you choose to provide directly to us when submitting an enquiry, scheduling a consultation, or communicating via email, phone, or WhatsApp. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and contact details (email address, phone number).</li>
              <li>Business information (company name, current website URL, business goals).</li>
              <li>Project parameters (service interest, approximate budget, desired timeframe).</li>
              <li>Technical usage data (standard web logs, browser type, anonymous aggregate analytics).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">3. Purposes of Processing</h2>
            <p>
              We process personal information solely for legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding directly to your consultation requests and project enquiries.</li>
              <li>Preparing service proposals, statements of work, and campaign agreements.</li>
              <li>Delivering agreed digital marketing, calling/messaging, and development services.</li>
              <li>Maintaining security and improving the performance of our website.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">4. Service Providers &amp; Third Parties</h2>
            <p>
              We do not sell, rent, or trade personal information. We may share data with vetted service providers who assist us in hosting, CRM, communication delivery (such as telephony or messaging gateways), under strict confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">5. Data Retention &amp; Rights</h2>
            <p>
              We retain contact information only as long as necessary to fulfill the purposes for which it was collected or to comply with legal obligations. You have the right to request access to, correction of, or deletion of your personal data at any time by contacting{" "}
              <a href={`mailto:${REAL_RESULT_CONFIG.contact.email}`} className="text-[#0071E3] underline">
                {REAL_RESULT_CONFIG.contact.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
