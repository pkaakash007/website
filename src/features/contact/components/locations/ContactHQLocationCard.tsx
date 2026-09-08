import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import LocationDeskCard from "./LocationDeskCard";
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
        <div className="max-w-3xl mb-14 space-y-3">
          <Badge variant="gold">Regional Desks</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Our Regional Meeting & Operations Desks
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Conveniently situated across Tamil Nadu’s key industrial belts for in-person strategy briefings and quarterly business reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => (
            <LocationDeskCard key={idx} {...hub} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactHQLocationCard;
