import React from "react";

interface ValueProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export const ValueItemCard: React.FC<ValueProps> = ({ icon: Icon, title, desc }) => {
  return (
    <div className="p-7 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div className="space-y-4">
        <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-gold-700">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-primary">
          {title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ValueItemCard;
