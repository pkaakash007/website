import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { MapPin, Globe, ArrowRight, Building2 } from "lucide-react";

export const MarketingRegionalGlobalReach: React.FC = () => {
  const hubs = [
    {
      city: "Erode (Headquarters)",
      type: "Executive Growth Lab & Central Ops",
      specialization: "Agro-processing, Textiles, Engineering & Statewide Management",
      link: "/locations/erode",
    },
    {
      city: "Coimbatore",
      type: "Industrial Hub",
      specialization: "Pumps, Foundries, Precision Engineering, Medical Tech & SaaS",
      link: "/locations/coimbatore",
    },
    {
      city: "Chennai",
      type: "Enterprise & Metro Desk",
      specialization: "Automotive, Port Logistics, SaaS Exports & Deep-Tech Brands",
      link: "/locations/chennai",
    },
    {
      city: "Tiruppur",
      type: "Export Capital Hub",
      specialization: "Knitwear Global Exports, Garments & B2B Manufacturer Inquiries",
      link: "/locations/tiruppur",
    },
    {
      city: "Salem",
      type: "Manufacturing & Retail Desk",
      specialization: "Steel, Minerals, Sago Industry & Commercial Retail Chains",
      link: "/locations/salem",
    },
    {
      city: "Madurai & South TN",
      type: "Regional Growth Desk",
      specialization: "Food Products, Agro Exports & Multi-location Retail",
      link: "/locations/madurai",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="outline">REGIONAL TO GLOBAL</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
              Rooted in Tamil Nadu. Scaling Globally.
            </h2>
            <p className="text-base text-secondary leading-relaxed">
              We understand the specialized commercial DNA of Tamil Nadu’s manufacturing and export belts. We craft campaigns that capture regional buyer intent in Tamil Nadu while simultaneously securing high-ticket international export leads in the US, Europe, and Middle East.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-border space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-gold-700">
                Bilingual & Transliterated Query Mastery
              </span>
              <p className="text-xs text-secondary leading-relaxed">
                Our search architectures capture high-volume Tanglish (Tamil-English transliterated) search phrases alongside strict technical B2B industry taxonomy.
              </p>
            </div>
            <div>
              <Button variant="outline" size="md" href="/locations/tamil-nadu" withArrow>
                Explore Tamil Nadu Hub Network
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hubs.map((hub, idx) => (
              <Link
                key={idx}
                to={hub.link}
                className="p-6 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-subtle hover:shadow-card transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary font-bold text-base group-hover:text-gold-700 transition-colors">
                      <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>{hub.city}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold-700 transition-transform group-hover:translate-x-1" />
                  </div>
                  <span className="inline-block text-[11px] font-mono text-gold-800 bg-gold-50 px-2 py-0.5 rounded-md font-semibold">
                    {hub.type}
                  </span>
                  <p className="text-xs text-secondary leading-relaxed">
                    {hub.specialization}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingRegionalGlobalReach;
