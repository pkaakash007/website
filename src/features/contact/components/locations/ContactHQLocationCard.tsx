import React from "react";
import { Container } from "@/components/layout/Container";
import LocationDeskCard from "./LocationDeskCard";
import { GOOGLE_MAPS_URL, SEO_CONFIG, TAMIL_NADU_LOCATIONS } from "@/config/seo";

// One verified office (matches the Google Business Profile) plus the markets
// we serve from it. Service areas deliberately carry no street address:
// invented "regional desk" addresses create NAP conflicts that hurt local SEO.
const SERVICE_AREAS = ["namakkal", "karur", "salem", "erode"] as const;

export const ContactHQLocationCard: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1D1D1F] tracking-tight leading-tight">
            Visit Our Office or Meet Us in Your City
          </h2>
          <p className="text-base text-[#86868B] leading-relaxed">
            Our team works from Paramathi Velur, between Namakkal and Karur, and travels across the Kongu region for
            strategy meetings, site visits and shoots.
          </p>
        </div>

        <div className="mb-6">
          <LocationDeskCard
            city="Real Result Marketing, Paramathi Velur"
            status={`Open Monday–Saturday, 9:00 am – 6:30 pm · ${SEO_CONFIG.displayPhone}`}
            address={SEO_CONFIG.displayAddress}
            notes="Walk in for strategy sessions, website and SEO audits, or a quick chat about your business. Please call ahead so the right person is available."
            isHQ
            mapLink={GOOGLE_MAPS_URL}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((key) => {
            const loc = TAMIL_NADU_LOCATIONS[key];
            return (
              <LocationDeskCard
                key={key}
                city={loc.city}
                status={`${loc.distanceFromOffice} from our office`}
                notes={`We meet ${loc.city} clients in person and serve ${loc.areas.slice(0, 3).join(", ")} and nearby towns.`}
                isHQ={false}
                pageLink={`/locations/${loc.slug}/`}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ContactHQLocationCard;
