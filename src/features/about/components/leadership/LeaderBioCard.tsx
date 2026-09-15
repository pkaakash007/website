import React from "react";

interface LeaderProps {
  role: string;
  discipline: string;
  bio: string;
  number?: string;
}

export const LeaderBioCard: React.FC<LeaderProps> = ({
  role,
  discipline,
  bio,
  number,
}) => {
  return (
    <div className="py-2 pb-6 border-b border-neutral-200 flex flex-col justify-between font-sans">
      <div className="space-y-2">
        {number && (
          <div className="text-xs font-semibold text-neutral-400 tracking-wide">
            {number}
          </div>
        )}
        <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
          {discipline}
        </div>
        <h3 className="text-lg font-bold text-neutral-900 tracking-tight leading-snug">
          {role}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed font-normal pt-1">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default LeaderBioCard;

