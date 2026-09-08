import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface StepProps {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  link: string;
}

export const EcosystemStepCard: React.FC<StepProps> = ({
  num,
  title,
  subtitle,
  desc,
  icon: Icon,
  link,
}) => {
  return (
    <Link
      to={link}
      className="p-7 rounded-2xl bg-canvas border border-border hover:border-gold/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gold-700">
            {num}
          </span>
          <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-primary group-hover:text-gold-700 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-primary group-hover:text-gold-700 transition-colors">
            {title}
          </h3>
          <span className="text-xs font-semibold text-[#8E6D2E] block mt-0.5">
            {subtitle}
          </span>
        </div>

        <p className="text-sm text-secondary leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-border flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-gold-700">
        <span>Explore Stage</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default EcosystemStepCard;
