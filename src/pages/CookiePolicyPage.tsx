import React from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";

export const CookiePolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title="Cookie Policy | Real Result"
        description="Learn about the cookies and choices available to you on the Real Result website."
        canonicalPath="/cookie-policy/"
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Cookie Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <Cookie className="w-3.5 h-3.5" />
            Cookie Choices
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            The cookies and similar tools used on this website, and the choices available to you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-8 font-normal">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device to ensure core site navigation, remember preferences, and analyze anonymized site traffic patterns.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">2. Essential Cookies</h2>
            <p>
              Essential cookies are required for security, network management, and accessibility. You can set your browser to block these, but parts of the site may not function properly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">3. Managing Your Choices</h2>
            <p>
              You may manage or disable cookies at any time through your browser settings. For questions about our cookie usage, email{" "}
              <a href="mailto:hello@realresult.in" className="text-[#0071E3] underline">
                hello@realresult.in
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
