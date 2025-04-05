import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", backlinks: 90, domains: 70 },
  { month: "Feb", backlinks: 50, domains: 40 },
  { month: "Mar", backlinks: 80, domains: 60 },
  { month: "Apr", backlinks: 150, domains: 110 },
  { month: "May", backlinks: 200, domains: 160 },
  { month: "Jun", backlinks: 220, domains: 180 },
  { month: "Jul", backlinks: 180, domains: 140 },
  { month: "Aug", backlinks: 240, domains: 200 },
  { month: "Sep", backlinks: 270, domains: 230 },
  { month: "Oct", backlinks: 250, domains: 210 },
  { month: "Nov", backlinks: 290, domains: 250 },
  { month: "Dec", backlinks: 320, domains: 270 },
];

const BacklinksChart: React.FC = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        BACKLINKS OVER TIME
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBacklinks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFBB28" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFBB28" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDomains" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF6384" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF6384" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="backlinks"
            stroke="#FFBB28"
            fillOpacity={1}
            fill="url(#colorBacklinks)"
          />
          <Area
            type="monotone"
            dataKey="domains"
            stroke="#FF6384"
            fillOpacity={1}
            fill="url(#colorDomains)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BacklinksChart;
