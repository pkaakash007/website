import React from "react";
import { Container } from "@/components/layout/Container";
import LocationDeskCard from "./LocationDeskCard";

export const ContactHQLocationCard: React.FC = () => {
  const primaryHQ = {
    city: "Real Result Marketing (Namakkal)",
    status: "Official Registered Office",
    address: "Paramathi Velur, Namakkal District, Tamil Nadu 638182, India",
    notes: "Official registered office on Google Maps for executive strategy sessions, digital audits, and on-ground client consultations.",
    isHQ: true,
    mapLink:
      "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4",
  };

  const regionalDesks = [
    {
      city: "Erode Operations Desk",
      status: "Central Operations & Engineering Lab",
      address: "Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011",
      notes: "Direct executive meetings, technical architecture whiteboard sessions, and centralized campaign operations.",
      isHQ: false,
      mapLink: "https://maps.google.com/?q=Erode,Tamil+Nadu",
    },
    {
      city: "Salem Regional Desk",
      status: "Industrial Corridors & Retail Growth",
      address: "Junction Main Road / Fairlands, Salem, Tamil Nadu 636001",
      notes: "Dedicated client strategy for steel manufacturers, sago processors, gold showrooms, and regional retailers.",
      isHQ: false,
      mapLink: "https://maps.google.com/?q=Salem,Tamil+Nadu",
    },
    {
      city: "Coimbatore Regional Desk",
      status: "Industrial & Foundry Client Coordination",
      address: "Avinashi Road / Peelamedu Tech Corridor, Coimbatore, Tamil Nadu 641018",
      notes: "On-site consulting for precision engineering, pump manufacturers, and Coimbatore SaaS startups.",
      isHQ: false,
      mapLink: "https://maps.google.com/?q=Coimbatore,Tamil+Nadu",
    },
    {
      city: "Paramathi Velur Desk",
      status: "Cauvery Belt & Agro-Logistics Coordination",
      address: "Paramathi Velur, Namakkal District, Tamil Nadu 638182",
      notes: "Direct support for poultry farms, transport fleet operators, agro-exporters, and local trade enterprises.",
      isHQ: false,
      mapLink:
        "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1D1D1F] tracking-tight leading-tight">
            Our Regional Meeting &amp; Operations Desks
          </h2>
          <p className="text-base text-[#86868B] leading-relaxed">
            Conveniently situated across Tamil Nadu’s key industrial belts for in-person strategy briefings and quarterly business reviews.
          </p>
        </div>

        {/* 1. Featured Registered Office */}
        <div className="mb-6">
          <LocationDeskCard {...primaryHQ} />
        </div>

        {/* 2. Regional Coordination Desks (Balanced 4-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regionalDesks.map((hub, idx) => (
            <LocationDeskCard key={idx} {...hub} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactHQLocationCard;
