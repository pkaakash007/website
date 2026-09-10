import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight, Phone } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F] justify-center items-center py-24 px-4 sm:px-6">
      <SEOHead
        title="Page Not Found | Real Result"
        description="Find your way to services, contact details, or the homepage of Real Result."
        canonicalPath="/404/"
      />

      <div className="max-w-md w-full bg-white p-8 sm:p-12 rounded-3xl border border-black/[0.06] shadow-xl text-center">
        <span className="text-5xl font-black text-[#0071E3] block mb-4">404</span>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-3">
          This page took a wrong turn.
        </h1>

        <p className="text-base text-neutral-600 mb-8 font-normal">
          Let’s get you back to something useful.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-3 px-6 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-md transition-all inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/services/"
            className="w-full py-3 px-6 rounded-full text-sm font-semibold bg-[#F5F5F7] hover:bg-neutral-200 text-neutral-800 transition-all inline-flex items-center justify-center gap-2"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact/"
            className="w-full py-3 px-6 rounded-full text-sm font-semibold border border-black/[0.08] hover:bg-neutral-50 text-neutral-700 transition-all inline-flex items-center justify-center gap-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
