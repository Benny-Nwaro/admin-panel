import React, { useState } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { FaUsers, FaExchangeAlt, FaDollarSign, FaChartLine } from "react-icons/fa";
import MusicTable from "./MusicTable"; // Import MusicTable
import LanguageTable from "./LanguageTable";
import MathsStudentsAnalytics from "./MathsStudentsAnalytics";

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

const data = Array.from({ length: 50 }, () => ({
  value: Math.floor(Math.random() * 100),
}));

const kpis = [
  { title: "Total Music", value: "50,000", color: "bg-[#22168A]", icon: <FaUsers size={24} /> },
  { title: "Total Math", value: "1,200", color: "bg-[#448960]", icon: <FaExchangeAlt size={24} /> },
  { title: "Total Language", value: "$5,000", color: "bg-[#424F89]", icon: <FaDollarSign size={24} /> },
  { title: "ROI", value: "240%", color: "bg-[#ED7F71]", icon: <FaChartLine size={24} /> },
  { title: "ROI", value: "240%", color: "bg-[#055C6C]", icon: <FaChartLine size={24} /> },
];

const StudentsPage: React.FC = () => {
  const [showMusicTable, setShowMusicTable] = useState(true); // State to control MusicTable visibility
  const [showMathTable, setShowMathTable] = useState(false); // State to control MusicTable visibility
  const [showLanguageTable, setShowLanguageTable] = useState(false); // State to control MusicTable visibility



  const handleCardClick = (title: string) => {
    if (title === "Total Music") {
      setShowMusicTable(true);
    } else {
      setShowMusicTable(false); //  Hide MusicTable for other cards
    }
    if (title === "Total Math") {
      setShowMathTable(true);
    } else {
      setShowMathTable(false); //  Hide MusicTable for other cards
    }
    if (title === "Total Language") {
      setShowLanguageTable(true);
    } else {
      setShowLanguageTable(false); //  Hide MusicTable for other cards
    }
  };

  return (
    <div className="lg:w-full max-md:w-full ">

        <div>
          <div className="flex flex-row w-full space-x-4  overflow-x-scroll">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl p-4  w-full text-white relative shadow-lg transition-all duration-300 cursor-pointer",
                kpi.color,
                "hover:scale-[1.02] hover:shadow-xl"
              )}
              onClick={() => handleCardClick(kpi.title)} // Pass the title to the handler
            >
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
        <div className="flex flex-col space-y-8 justify-center max-md:mt-4">
          {showMusicTable && <MusicTable />} {/* Render MusicTable conditionally */}
          {showMathTable && <MathsStudentsAnalytics />} {/* Render MusicTable conditionally */}
          {showLanguageTable && <LanguageTable />} {/* Render MusicTable conditionally */}


        </div>
        </div>

     
    </div>
  );
};

export default StudentsPage;
