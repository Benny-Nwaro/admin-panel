import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Define the type for the individual items in the data arrays
interface DataItem {
  name: string;
  value: number;
  color: string;
}

const data = {
  trafficSources: [
    { name: "Organic Search", value: 30, color: "#EF4444" },
    { name: "Paid Ads", value: 30, color: "#3B82F6" },
    { name: "Direct Traffic", value: 30, color: "#F59E0B" },
    { name: "Social Media", value: 30, color: "#FACC15" },
    { name: "Email Campaigns", value: 30, color: "#84CC16" },
  ],
  ageGroups: [
    { name: "18 - 24", value: 30, color: "#EF4444" },
    { name: "25 - 34", value: 30, color: "#3B82F6" },
    { name: "35 - 44", value: 30, color: "#F59E0B" },
    { name: "45+", value: 30, color: "#84CC16" },
  ],
  locations: [
    { name: "USA", value: 60, color: "#EF4444" },
    { name: "UK", value: 20, color: "#F59E0B" },
    { name: "Canada", value: 10, color: "#FACC15" },
    { name: "Others", value: 10, color: "#84CC16" },
  ],
};

interface ChartCardProps {
  title: string;
  data: DataItem[]; // Use the DataItem type here
}

const ChartCard = ({ title, data }: ChartCardProps) => {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-md w-full flex flex-col items-center">
      <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-4">{title}</h3>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
        <div className="w-full sm:w-auto max-w-[200px] h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm w-full sm:w-auto">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2 py-1">
              <span className="w-3 h-3 rounded-full" style={{ background: item.color }}></span>
              <span>{item.name}</span>
              <span className="ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Charts = () => {
  return (
    <div className="flex flex-row max-md:flex-col gap-4 justify-center p-2 sm:p-4">
      <ChartCard title="Traffic Sources" data={data.trafficSources} />
      <ChartCard title="Age Groups" data={data.ageGroups} />
      <ChartCard title="Geographic Locations" data={data.locations} />
    </div>
  );
};

export default Charts;