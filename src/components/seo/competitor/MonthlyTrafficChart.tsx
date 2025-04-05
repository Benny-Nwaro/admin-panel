import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", value1: 150, value2: 300, value3: 100, value4: 80, value5: 150 },
  { name: "Feb", value1: 170, value2: 270, value3: 120, value4: 90, value5: 140 },
  { name: "Mar", value1: 180, value2: 250, value3: 130, value4: 100, value5: 135 },
  { name: "Apr", value1: 200, value2: 230, value3: 150, value4: 110, value5: 130 },
  { name: "May", value1: 220, value2: 210, value3: 160, value4: 120, value5: 125 },
  { name: "Jun", value1: 250, value2: 200, value3: 170, value4: 130, value5: 120 },
  { name: "Jul", value1: 270, value2: 190, value3: 180, value4: 140, value5: 110 },
  { name: "Aug", value1: 260, value2: 195, value3: 185, value4: 150, value5: 100 },
  { name: "Sep", value1: 250, value2: 200, value3: 190, value4: 160, value5: 90 },
  { name: "Oct", value1: 230, value2: 210, value3: 195, value4: 170, value5: 80 },
  { name: "Nov", value1: 200, value2: 220, value3: 200, value4: 180, value5: 70 },
  { name: "Dec", value1: 180, value2: 230, value3: 210, value4: 190, value5: 60 },
];

const colors = ["#4CAF50", "#FF0000", "#2196F3", "#FFA500", "#008080"];

const MonthlyTrafficChart: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Traffic</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          {Object.keys(data[0])
            .filter((key) => key !== "name")
            .map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index]}
                strokeWidth={2}
                dot={{ r: 5 }}
              />
            ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyTrafficChart;
