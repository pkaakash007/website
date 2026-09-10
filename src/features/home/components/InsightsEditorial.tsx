
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight, BookOpen } from "lucide-react";

const INSIGHTS_LIST = [
  {
    num: "01",
    title: "THE FUTURE OF MEDIA",
    href: "/insights",
  },
  {
    num: "02",
    title: "PERFORMANCE MARKETING",
    href: "/insights",
  },
  {
    num: "03",
    title: "AI + CUSTOMER CONVERSATIONS",
    href: "/insights",
  },
  {
    num: "04",
    title: "BRAND STRATEGY",
    href: "/insights",
  },
];

export default function InsightsEditorial() {
  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest font-bold text-primary">
              PERSPECTIVES
            </p>

            <h2 className="text-4xl sm:text-6xl font-black text-primary tracking-tight uppercase leading-[1.03]">
              EDITORIAL <span className="text-gold-700">DISPATCHES</span>.
            </h2>
          </div>

          <Link to="/insights"
            className="text-xs font-mono font-bold uppercase tracking-wider text-primary hover:text-gold-700 flex items-center gap-1.5 transition-colors"
          >
            <span>All Articles</span>
            <ArrowUpRight className="w-4 h-4 text-gold-600" />
          </Link>
        </div>

        {/* Magazine-Style Editorial List (Large Typography, Zero Clutter) */}
        <div className="divide-y divide-border border-y border-border">
          {INSIGHTS_LIST.map((item) => (
            <Link key={item.num}
              to={item.href}
              className="py-8 sm:py-12 flex items-center justify-between group transition-all duration-300 hover:px-4"
            >
              <div className="flex items-baseline gap-6 sm:gap-12">
                <span className="text-sm sm:text-lg font-mono font-bold text-gold-700 group-hover:text-gold-800">
                  {item.num}
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary uppercase tracking-tight group-hover:text-gold-800 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
