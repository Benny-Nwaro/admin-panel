import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Facebook", users: 45000 },
  { name: "X", users: 5000 },
  { name: "Instagram", users: 32000 },
  { name: "Youtube", users: 9000 },
  { name: "LinkedIn", users: 15000 },
  { name: "Pinterest", users: 10000 },
  { name: "Trustpilot", users: 17000 },
  { name: "Google", users: 25000 },
];

const SocialAnalyticsChart: React.FC = () => {
  return (
    <div className="p-6 h-fit w-full max-md:w-full max-md:px-3">
     
      <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="bg-gray-200 p-4 rounded-xl ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Impression</h2>
          <div className="bg-blue-500 text-black px-4 py-2 rounded-lg">Jan 2024 - Jun 2024</div>
        </div>
        <h3 className="text-3xl font-bold">244k <span className="text-gray-500 text-lg">(Total Impressions)</span></h3>
        <span className="text-green-600 bg-green-100 px-3 py-1 rounded-lg font-semibold">+23.40% 📈</span>
      </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="black" tick={{ fill: "black" }} />
            <YAxis stroke="black" tick={{ fill: "black" }} />
            <Tooltip contentStyle={{ backgroundColor: "#333", color: "black" }} />
            <Bar dataKey="users" fill="#3498db" barRadius={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SocialAnalyticsChart;
