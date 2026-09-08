import React from "react";
import { Link } from "react-router-dom";
import { Code2, ArrowRight, CheckCircle2 } from "lucide-react";

export const AppDevPillarCard: React.FC = () => {
  return (
    <div className="p-8 sm:p-10 rounded-4xl bg-white border border-border hover:border-blue-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-blue-700 font-bold tracking-wider">
                Division 02
              </span>
              <h3 className="text-2xl font-bold text-primary group-hover:text-blue-700 transition-colors">
                Application Development
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 font-bold">
            Web & Mobile
          </span>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border shadow-subtle group/img">
          <img
            src="/images/application-development-hero.jpg"
            alt="Application Development and Mobile Engineering"
            className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
            <div className="text-white">
              <span className="text-xs font-mono uppercase text-blue-300 font-bold">
                Cross-Platform & Cloud
              </span>
              <p className="text-sm font-semibold text-white/90">
                iOS & Android Apps · React Portals · SaaS Systems
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-secondary leading-relaxed">
          Engineered for enterprise scale and zero downtime. We build cross-platform mobile apps, bespoke business management ERPs, multi-tenant cloud SaaS, and AI-powered operational tools.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-border/80">
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>iOS & Android Apps (React Native / Flutter)</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>High-Performance React & TypeScript Web Apps</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Custom ERP & Manufacturing Inventory</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>100% Source Code & IP Handover</span>
          </div>
        </div>
      </div>

      <div className="pt-8 mt-6 border-t border-border flex items-center justify-between">
        <Link
          to="/application-development"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-blue-700 transition-colors"
        >
          <span>Explore Application Suite</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-xs font-mono text-blue-800 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
          99.98% SLA
        </span>
      </div>
    </div>
  );
};

export default AppDevPillarCard;
