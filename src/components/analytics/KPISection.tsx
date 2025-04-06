import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { FaUsers, FaExchangeAlt, FaDollarSign, FaChartLine } from "react-icons/fa";

const data = Array.from({ length: 50 }, () => ({
  value: Math.floor(Math.random() * 100),
}));

const kpis = [
  { title: "Total Reach", value: "50,000", color: "bg-teal-500", icon: <FaUsers size={24} /> },
  { title: "Conversions", value: "1,200", color: "bg-[#71357B]", icon: <FaExchangeAlt size={24} /> },
  { title: "Marketing Spend", value: "$5,000", color: "bg-purple-800", icon: <FaDollarSign size={24} /> },
  { title: "ROI", value: "240%", color: "bg-orange-500", icon: <FaChartLine size={24} /> },
];

const KPISection: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Performance Indicators (KPIs)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className={`rounded-xl p-4 text-white ${kpi.color} relative shadow-lg`}>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={data}>
                <Bar dataKey="value" fill="rgba(255,255,255,0.5)" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-2xl font-bold">{kpi.value}</div>
            <div className="text-sm opacity-80">{kpi.title}</div>
            <div className="absolute bottom-4 right-4 p-2 bg-white rounded-full text-gray-800">
              {kpi.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPISection;
