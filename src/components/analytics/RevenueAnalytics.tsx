import { AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { FaArrowUp } from "react-icons/fa";

const data = [
  { month: "Jan", income: 10, expense: 50 },
  { month: "Feb", income: 20, expense: 40 },
  { month: "Mar", income: 50, expense: 30 },
  { month: "Apr", income: 90, expense: 60 },
  { month: "May", income: 150, expense: 90 },
  { month: "Jun", income: 200, expense: 120 },
  { month: "Jul", income: 250, expense: 150 },
  { month: "Aug", income: 180, expense: 140 },
  { month: "Sep", income: 210, expense: 160 },
  { month: "Oct", income: 280, expense: 190 },
  { month: "Nov", income: 300, expense: 220 },
  { month: "Dec", income: 320, expense: 250 },
];

const RevenueAnalytics = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Revenue Analytics</h2>
          <p className="text-3xl font-bold">$415,260</p>
          <span className="text-green-600 font-semibold flex items-center">
            +23.40% <FaArrowUp className="ml-1" />
          </span>
        </div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
          Jan 2024 - Jun 2024
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" className="text-gray-500" />
          <YAxis className="text-gray-500" />
          <CartesianGrid strokeDasharray="3 3" className="text-gray-200" />
          <Tooltip contentStyle={{ background: "#1e40af", color: "#fff", borderRadius: "8px" }} />
          <Area type="monotone" dataKey="income" stroke="#2563eb" fill="url(#incomeGradient)" />
          <Area type="monotone" dataKey="expense" stroke="#f43f5e" fill="url(#expenseGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueAnalytics;
