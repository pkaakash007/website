import React from "react";

interface LeaderProps {
  role: string;
  discipline: string;
  icon: React.ElementType;
  bio: string;
}

export const LeaderBioCard: React.FC<LeaderProps> = ({
  role,
  discipline,
  icon: Icon,
  bio,
}) => {
  return (
    <div className="p-7 rounded-2xl bg-canvas border border-border hover:border-gold/50 transition-colors flex flex-col justify-between">
      <div className="space-y-4">
        <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center text-gold-700 shadow-sm">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary">
            {role}
          </h3>
          <span className="text-xs font-semibold text-[#8E6D2E] block mt-0.5">
            {discipline}
          </span>
        </div>
        <p className="text-sm text-secondary leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default LeaderBioCard;
