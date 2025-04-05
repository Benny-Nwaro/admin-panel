import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
};

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center w-60">
      <span className="text-gray-500 text-sm uppercase">{title}</span>
      <span className="text-3xl font-bold text-gray-800">{value}</span>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center items-center p-4">
      <StatCard title="Domain Authority" value={97} />
      <StatCard title="Referring Domains" value="31,529" />
      <StatCard title="Backlinks" value="4,234,432" />
    </div>
  );
};

export default StatsSection;
