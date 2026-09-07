
import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { Compass, ArrowRight } from "lucide-react";

interface MediaTile {
  name: string;
  category: string;
  image: string;
}

const MEDIA_TILES: MediaTile[] = [
  {
    name: "TV",
    category: "Broadcast & Connected TV",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "DIGITAL",
    category: "Programmatic Display & Web",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "SOCIAL",
    category: "Paid Feeds & Vertical Video",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "OUTDOOR",
    category: "Metropolitan DOOH & Billboards",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "CINEMA",
    category: "Dolby 7.1 Pre-Show Immersion",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "RADIO",
    category: "Broadcast FM & Digital Podcasts",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "SEARCH",
    category: "High-Intent Google PPC",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "INFLUENCER",
    category: "Top Creator Amplification",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function MediaVisualStrip() {
  return (
    <section className="py-24 sm:py-36 bg-canvas border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gold-400 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle">
              <Compass className="w-3.5 h-3.5 text-gold-600" />
              <span>OMNICHANNEL MEDIA REACH</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary uppercase leading-[1.03]">
              BE EVERYWHERE YOUR <br />
              <span className="font-serif italic text-gold-700 font-normal lowercase">
                audience
              </span>{" "}
              LOOKS.
            </h2>
          </div>

          <div>
            <Button
              variant="gold"
              size="md"
              withArrow
              onClick={() => openLeadModal("media-buying-session")}
              className="text-xs font-bold uppercase tracking-wider px-6 py-3.5 shadow-gold-subtle"
            >
              Plan Media Buying
            </Button>
          </div>
        </div>

        {/* Horizontal Visual Media Strip (Large Visual Tiles, Zero Paragraphs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {MEDIA_TILES.map((tile) => (
            <div
              key={tile.name}
              onClick={() => openLeadModal(`media-channel-${tile.name.toLowerCase()}`)}
              className="group relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-charcoal border border-border cursor-pointer shadow-subtle transition-all duration-300 hover:shadow-card"
            >
              {/* Image with subtle zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
                style={{ backgroundImage: `url('${tile.image}')` }}
              />
              {/* Dark gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Tile Content (Minimal, Bold, Clean) */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-gold-300 opacity-80 group-hover:opacity-100">
                  CHANNEL
                </span>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-gold-200 transition-colors">
                    {tile.name}
                  </h3>
                  <p className="text-[11px] font-mono text-gray-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tile.category}
                  </p>
                </div>
              </div>

              {/* Gold underline appearing on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
