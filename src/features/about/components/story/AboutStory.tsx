import React from "react";
import { Container } from "@/components/layout/Container";

export const AboutStory: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Where Quality Meets Commercial Performance
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Founded in Erode, Tamil Nadu, Real Result was created with a clear focus: digital growth must deliver measurable commercial value to local and growing businesses.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              We eliminate the gap between marketing and technical execution. Every website we design is optimized to convert visitors into inquiries, and every ad campaign we manage is built to bring verified phone calls and orders directly to your business.
            </p>

            <div className="pt-4 space-y-4 border-t border-neutral-200">
              <div className="flex items-start gap-2.5">
                <span className="text-neutral-400 select-none mt-0.5">•</span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Single Direct Contact</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">One dedicated project manager who handles all your website, software, and marketing needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-neutral-400 select-none mt-0.5">•</span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Transparent Milestone Scoping</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Clear upfront pricing with no hidden monthly fees and 100% source code ownership.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="pb-4 border-b border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Erode Central Hub</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Our central office in Erode serves as our primary engineering hub and briefing space for businesses across Tamil Nadu.
                </p>
              </div>

              <div className="pb-4 border-b border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Statewide Presence</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Active client relationships across Coimbatore, Chennai, Tiruppur, Salem, Madurai, Trichy, and regional commercial hubs.
                </p>
              </div>

              <div className="sm:col-span-2 pb-4 border-b border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Quality Standards</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Websites built for mobile speed, full data security compliance, and clean Google search guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;

