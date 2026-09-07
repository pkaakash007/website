
import React from "react";
import { Container } from "@/components/layout/Container";

const clients = [
  { name: "Apex Financial", symbol: "▲ APEX" },
  { name: "NovaTech Global", symbol: "◆ NOVATECH" },
  { name: "Stratos Capital", symbol: "❖ STRATOS" },
  { name: "Vertex Cloud", symbol: "⬡ VERTEX" },
  { name: "Pulse HealthTech", symbol: "✚ PULSE" },
  { name: "Lumina Enterprise", symbol: "◈ LUMINA" },
  { name: "Horizon Commerce", symbol: "◉ HORIZON" },
];

export default function TrustedLogos() {
  return (
    <section className="py-12 border-y border-border bg-white/50 backdrop-blur-2xs">
      <Container size="wide">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Trusted by modern leaders across financial, healthcare, retail & SaaS ecosystems
          </p>
        </div>

        {/* Enterprise Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-3 rounded-xl hover:bg-white hover:shadow-2xs transition-all border border-transparent hover:border-border cursor-default"
            >
              <span className="font-bold text-sm tracking-wider text-secondary hover:text-primary font-mono select-none">
                {client.symbol}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
