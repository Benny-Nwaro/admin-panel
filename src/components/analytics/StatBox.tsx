import React from "react";

interface StatBoxProps {
  label: string;
  value: string | number;
}

const StatBox: React.FC<StatBoxProps> = ({ label, value }) => (
  <div className="p-3 sm:p-4 bg-gray-100 text-black rounded-lg text-left shadow-sm">
    <h3 className="text-sm sm:text-lg font-semibold text-gray-700">{label}</h3>
    <p className="text-xl sm:text-2xl font-bold text-black mt-1">{value}</p>
  </div>
);

export default StatBox;