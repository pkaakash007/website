import React from "react";

interface ValueProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export const ValueItemCard: React.FC<ValueProps> = ({ icon: Icon, title, desc }) => {
  return (
    <div className="p-8 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-gold-700">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-primary">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ValueItemCard;
