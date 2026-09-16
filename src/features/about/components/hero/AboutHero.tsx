import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import AboutHeroSketch from "./AboutHeroSketch";

export const AboutHero: React.FC = () => {
  return (
    <section className="pt-24 pb-14 sm:pt-32 sm:pb-16 bg-white border-b border-neutral-200">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              Clear, Direct Digital Growth for Your Business
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              We are a digital agency based in Erode, Tamil Nadu. We build mobile-friendly websites, custom applications, and run targeted ad campaigns that generate real customer calls and business inquiries.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0071e3] hover:bg-[#0077ED] active:scale-95 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <span>Our Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 active:scale-95 rounded-xl transition-all cursor-pointer"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

          {/* Right Column: Hand-drawn Human Sketch Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AboutHeroSketch />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;


