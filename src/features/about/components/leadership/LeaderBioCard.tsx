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
    <div className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 transition-colors flex flex-col justify-between">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-gold-700 shadow-subtle">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary">
            {role}
          </h3>
          <span className="text-xs font-mono text-gold-700 font-semibold block mt-0.5">
            {discipline}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default LeaderBioCard;
