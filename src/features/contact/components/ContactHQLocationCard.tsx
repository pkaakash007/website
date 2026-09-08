import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { MapPin, Navigation, ExternalLink, Building2 } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const ContactHQLocationCard: React.FC = () => {
  const hubs = [
    {
      city: "Erode Headquarters",
      status: "Central Operations & Engineering Lab",
      address: `${SEO_CONFIG.headquarters.streetAddress}, ${SEO_CONFIG.headquarters.addressLocality}, ${SEO_CONFIG.headquarters.addressRegion} ${SEO_CONFIG.headquarters.postalCode}`,
      notes: "Direct executive meetings, technical architecture whiteboard sessions, and centralized campaign operations.",
      isHQ: true,
      mapLink: "https://maps.google.com/?q=Erode,Tamil+Nadu",
    },
    {
      city: "Coimbatore Regional Desk",
      status: "Industrial & Foundry Client Coordination",
      address: "Avinashi Road / Peelamedu Tech Corridor, Coimbatore, Tamil Nadu",
      notes: "On-site consulting for precision engineering, pump manufacturers, and Coimbatore SaaS startups.",
      isHQ: false,
      mapLink: "https://maps.google.com/?q=Coimbatore,Tamil+Nadu",
    },
    {
      city: "Chennai Metro Desk",
      status: "Enterprise & Export Port Coordination",
      address: "OMR IT Expressway / Guindy Industrial Estate, Chennai, Tamil Nadu",
      notes: "Direct liaison for automotive manufacturers, deep-tech platforms, and international export port logistics.",
      isHQ: false,
      mapLink: "https://maps.google.com/?q=Chennai,Tamil+Nadu",
    },
    {
      city: "Tiruppur Export Desk",
      status: "Knitwear & Apparel Export Liaison",
      address: "Avinashi Road Apparel Park, Tiruppur, Tamil Nadu",
      notes: "Specialized B2B buyer lead funnels and custom ERP coordination for apparel buying houses.",
      isHQ: false,
      mapLink: "https://maps.google.com/?q=Tiruppur,Tamil+Nadu",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-4">
          <Badge variant="gold">TAMIL NADU REGIONAL FOOTPRINT</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            Our Regional Meeting & Operations Desks
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Conveniently situated across Tamil Nadu’s key industrial belts for in-person strategy briefings and quarterly business reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl border transition-all flex flex-col justify-between ${
                hub.isHQ
                  ? "bg-canvas border-gold/70 shadow-card"
                  : "bg-white border-border shadow-subtle hover:shadow-card"
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gold-700">
                    <Building2 className="w-5 h-5" />
                  </div>
                  {hub.isHQ && (
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-gold text-black font-bold">
                      Corporate HQ
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-primary">
                  {hub.city}
                </h3>

                <span className="text-[11px] font-mono text-gold-800 font-semibold block">
                  {hub.status}
                </span>

                <p className="text-xs text-secondary leading-relaxed">
                  {hub.address}
                </p>

                <p className="text-xs text-muted border-t border-border pt-3 leading-relaxed">
                  {hub.notes}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-border">
                <a
                  href={hub.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-gold-700 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactHQLocationCard;
