"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { FaqSection } from "@/components/seo/FaqSection";
import { LocalMarketSections } from "@/components/seo/LocalMarketSections";
import { openLeadModal } from "@/components/common/LeadModal";
import { GOOGLE_MAPS_URL, SEO_CONFIG, TAMIL_NADU_LOCATIONS } from "@/config/seo";
import { LOCATION_FAQS } from "@/content/locationFaqs";
import { Bus, Globe2, MapPin, Navigation, Search, ShoppingBag, Target } from "lucide-react";

const PLAYBOOKS = [
  {
    icon: Globe2,
    title: "Home-textile exporters",
    body: "Export-ready websites with product, capacity and certification pages, B2B SEO for searches such as “bed linen manufacturer India”, LinkedIn outreach to importers, and content that AI assistants can quote when buyers ask for suppliers.",
  },
  {
    icon: Bus,
    title: "Bus & coach body builders",
    body: "Project galleries, model pages and Google Ads aimed at fleet owners, schools and tour operators looking for bus bodies, plus Google Maps visibility for service and repair enquiries.",
  },
  {
    icon: ShoppingBag,
    title: "Shops, showrooms & clinics",
    body: "Google Business Profile optimisation, review building and Instagram campaigns so people in Karur find you first when they search for a nearby jeweller, textile showroom, hospital or clinic.",
  },
];

const SERVICES = [
  {
    icon: Search,
    title: "SEO & AI search",
    body: "Rank on Google for the searches your buyers make, and get mentioned in ChatGPT, Perplexity and Google AI Overviews answers.",
  },
  {
    icon: MapPin,
    title: "Google Maps & local SEO",
    body: "Show up in the Maps top results across Karur, Vengamedu, Thanthonimalai and Kulithalai, with call and WhatsApp buttons.",
  },
  {
    icon: Target,
    title: "Google & Meta ads",
    body: "Search, Performance Max, Instagram and Facebook campaigns with conversion tracking, so every rupee is measured against enquiries.",
  },
];

export const KarurPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.karur;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-neutral-50 via-white to-white border-b border-neutral-200">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Areas We Serve", href: "/locations/tamil-nadu/" },
              { label: "Karur" },
            ]}
          />

          <div className="max-w-4xl mx-auto text-center space-y-6 mt-6">
            <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{loc.distanceFromOffice} from our Paramathi Velur office</span>
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
              Best Digital Marketing Agency in <span className="text-[#0071E3]">Karur</span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              SEO, Google Ads, Google Maps ranking, social media and websites for Karur&apos;s textile exporters, bus
              body builders, shops and clinics, run by a local team just across the Cauvery.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" withArrow onClick={() => openLeadModal("karur-hero")}>
                Get a Free Growth Audit
              </Button>
              <a
                href={`tel:${SEO_CONFIG.telephone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-800 text-sm font-semibold hover:bg-neutral-100 transition-all"
              >
                Call {SEO_CONFIG.displayPhone}
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-800 text-sm font-semibold hover:bg-neutral-100 transition-all"
              >
                <Navigation className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>Directions to our office</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Answer box — written to be quotable by AI Overviews / answer engines */}
      <section className="py-12 bg-white">
        <Container size="wide">
          <DirectAnswerBox
            question="Who provides digital marketing services in Karur?"
            summary="Real Result Marketing provides digital marketing services in Karur from its office in Paramathi Velur, about 20 km away. The team handles SEO, Google Ads, Google Maps (local SEO), social media marketing, AI search optimisation and website development, and works with Karur home-textile exporters, bus body builders, retailers, schools and clinics."
            takeaways={[
              "Local team, about 20 km from Karur town",
              "Export-focused SEO for Karur home-textile manufacturers",
              "Google Maps ranking for shops, showrooms and clinics",
              "Fixed monthly quotes and weekly reports",
            ]}
          />
        </Container>
      </section>

      {/* Core services */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900">Digital Marketing Services in Karur</h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Planned around the enquiries and sales you want, not vanity metrics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs">
                <Icon className="w-8 h-8 text-[#0071E3] mb-4" aria-hidden="true" />
                <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry playbooks */}
      <section className="py-16 bg-white">
        <Container size="wide">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900">How We Grow Karur Businesses</h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
              Karur earns a large share of India&apos;s home-textile exports and is one of the country&apos;s biggest
              bus body-building centres. Each of these businesses wins customers differently online, so we plan each
              one differently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLAYBOOKS.map(({ icon: Icon, title, body }) => (
              <article key={title} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <Icon className="w-8 h-8 text-[#0071E3] mb-4" aria-hidden="true" />
                <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <LocalMarketSections loc={loc} />

      <FaqSection faqs={LOCATION_FAQS.karur} title="Karur Digital Marketing FAQs" />
    </div>
  );
};

export default KarurPage;
