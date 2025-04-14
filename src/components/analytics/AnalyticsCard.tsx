import React from "react";

interface AnalyticsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ icon, value, label, color }) => {
  return (
    <div className={`p-4 sm:p-6 rounded-lg shadow-lg ${color} text-white flex flex-col`}>
      <div className="flex space-x-1 mb-2 sm:mb-4 w-full items-end overflow-hidden">
        {Array.from({ length: 70 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gray-300 rounded-full"
            style={{ height: `${Math.random() * 50 + 20}px` }}
          ></div>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <h3 className="text-xl sm:text-3xl font-bold">{value}</h3>
          <p className="text-xs sm:text-sm">{label}</p>
        </div>
        <div className="text-3xl sm:text-4xl">{icon}</div>
      </div>
    </div>
  );
};

export default AnalyticsCard;