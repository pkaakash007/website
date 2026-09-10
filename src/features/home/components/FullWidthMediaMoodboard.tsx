import React from "react";
import { Container } from "@/components/layout/Container";

const MOODBOARD_PLACES = [
  { name: "BILLBOARD", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" },
  { name: "AIRPORT", image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80" },
  { name: "TRANSIT", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80" },
  { name: "CINEMA", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80" },
  { name: "MOBILE", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
  { name: "DESKTOP", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
  { name: "TV", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80" },
];

export default function FullWidthMediaMoodboard() {
  return (
    <section className="py-24 sm:py-36 bg-charcoal text-white relative overflow-hidden border-b border-charcoal-border">
      {/* Background Moodboard Grid with Soft Parallax Scale */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 opacity-25 pointer-events-none">
        {MOODBOARD_PLACES.map((place) => (
          <div
            key={place.name}
            className="relative h-full w-full bg-cover bg-center filter grayscale contrast-125 transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url('${place.image}')` }}
          />
        ))}
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/70" />

      {/* Gold directional top accent beam */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      <Container size="wide">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xs font-bold uppercase tracking-wider text-gold-300">
            THE ADVERTISING MOODBOARD
          </p>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.03]">
            ONE CAMPAIGN. <br />
            <span className="text-gold-300">MANY PLACES</span> TO BE SEEN.
          </h2>

          {/* Clean 7 Places Label Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
            {MOODBOARD_PLACES.map((item) => (
              <span
                key={item.name}
                className="px-4 py-2 rounded-full text-xs font-mono uppercase font-bold tracking-widest bg-white/10 hover:bg-gold hover:text-black border border-white/15 transition-all duration-200 cursor-default"
              >
                {item.name}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-normal leading-relaxed pt-2">
            Synchronized narrative presence engineered to meet your audience wherever they commute, stream, browse, or shop.
          </p>
        </div>
      </Container>
    </section>
  );
}
