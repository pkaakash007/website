import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import RegionalHubCard from "./RegionalHubCard";

export const MarketingRegionalGlobalReach: React.FC = () => {
  const hubs = [
    {
      city: "Erode (Headquarters)",
      type: "Executive Growth Lab & Central Ops",
      specialization: "Agro-processing, Textiles, Engineering & Statewide Management",
      link: "/contact",
    },
    {
      city: "Coimbatore",
      type: "Industrial Hub",
      specialization: "Pumps, Foundries, Precision Engineering, Medical Tech & SaaS",
      link: "/contact",
    },
    {
      city: "Chennai",
      type: "Enterprise & Metro Desk",
      specialization: "Automotive, Port Logistics, SaaS Exports & Deep-Tech Brands",
      link: "/contact",
    },
    {
      city: "Tiruppur",
      type: "Export Capital Hub",
      specialization: "Knitwear Global Exports, Garments & B2B Manufacturer Inquiries",
      link: "/contact",
    },
    {
      city: "Salem",
      type: "Manufacturing & Retail Desk",
      specialization: "Steel, Minerals, Sago Industry & Commercial Retail Chains",
      link: "/contact",
    },
    {
      city: "Madurai & South TN",
      type: "Regional Growth Desk",
      specialization: "Food Products, Agro Exports & Multi-location Retail",
      link: "/contact",
    },
  ];

  return (
    <section className="py-20 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-mono uppercase tracking-widest font-bold text-gold-800">
              TAMIL NADU COVERAGE
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Rooted in Tamil Nadu. Helping You Get Customers Everywhere.
            </h2>
            <p className="text-base text-secondary leading-relaxed">
              We are located right here in Tamil Nadu. Whether you want customers from your own city (Erode, Coimbatore, Tiruppur, Salem, Chennai, Madurai) or you want buyers from all over India and abroad, our local team handles everything for you.
            </p>
            <div className="p-4 rounded-xl bg-white border border-border space-y-1.5">
              <span className="text-xs font-semibold text-[#8E6D2E]">
                Tamil & English Campaign Support
              </span>
              <p className="text-xs text-secondary leading-relaxed">
                We design ad posters and write messages in both Tamil and English so local customers feel comfortable calling and asking for quotes.
              </p>
            </div>
            <div>
              <Button variant="outline" size="md" href="/contact">
                Contact Our Nearest Desk
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hubs.map((hub, idx) => (
              <RegionalHubCard key={idx} {...hub} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingRegionalGlobalReach;
