
import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";

interface MediaTile {
  name: string;
  category: string;
  image: string;
}

const MEDIA_TILES: MediaTile[] = [
  {
    name: "Television",
    category: "Broadcast & Connected TV",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Digital",
    category: "Programmatic Display & Web",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Social",
    category: "Paid Feeds & Vertical Video",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Outdoor",
    category: "Metropolitan DOOH & Billboards",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Cinema",
    category: "Dolby 7.1 Pre-Show Immersion",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Radio",
    category: "Broadcast FM & Digital Podcasts",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Search",
    category: "High-Intent Google PPC",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Creator",
    category: "Top Creator Amplification",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function MediaVisualStrip() {
  return (
    <section className="py-20 lg:py-28 bg-canvas border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary">
              Be Everywhere Your Audience Looks
            </h2>
            <p className="text-base text-secondary leading-relaxed">
              From prime-time regional television to algorithmic Google Search and outdoor highway billboards, we plan, negotiate, and execute full-funnel media.
            </p>
          </div>

          <div>
            <Button
              variant="gold"
              size="md"
              onClick={() => openLeadModal("media-buying-session")}
              className="text-xs font-semibold px-6 py-3 cursor-pointer"
            >
              Plan Media Buying
            </Button>
          </div>
        </div>

        {/* Horizontal Visual Media Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {MEDIA_TILES.map((tile) => (
            <div
              key={tile.name}
              onClick={() => openLeadModal(`media-channel-${tile.name.toLowerCase()}`)}
              className="group relative h-[320px] sm:h-[380px] rounded-xl overflow-hidden bg-charcoal border border-border cursor-pointer shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105 opacity-75 group-hover:opacity-90"
                style={{ backgroundImage: `url('${tile.image}')` }}
              />
              {/* Dark gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Tile Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end z-10 text-white space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors">
                  {tile.name}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2">
                  {tile.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
