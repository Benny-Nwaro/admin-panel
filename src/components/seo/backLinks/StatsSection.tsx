import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
};

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg lg:p-6 max-md:p-2 flex flex-col items-center justify-center w-60 max-md:text-sm max-md:text-nowrap max-md:w-fit">
      <span className="text-gray-500 text-sm uppercase">{title}</span>
      <span className="text-3xl font-bold text-gray-800 max-md:text-lg ">{value}</span>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="flex gap-4 lg:justify-center max-md:justify-between items-center p-4 overflow-x-scroll max-md:text-sm">
      <StatCard title="Domain Authority" value={97} />
      <StatCard title="Referring Domains" value="31,529" />
      <StatCard title="Backlinks" value="4,234,432" />
    </div>
  );
};

export default StatsSection;
