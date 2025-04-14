import React from "react";

const competitors = [
  { name: "wordstream.com", color: "bg-green-500" },
  { name: "hootsuite.com", color: "bg-red-500" },
  { name: "neilpatel.com", color: "bg-teal-500" },
  { name: "searchenginejournal.com", color: "bg-orange-500" },
  { name: "sproutsocial.com", color: "bg-orange-500" },
  { name: "hubspot.com", color: "bg-blue-500" },
];

const CompetitorAnalysis: React.FC = () => {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md overflow-x-scroll">
      <h2 className="text-lg font-bold text-gray-800">COMPETITOR ANALYSIS</h2>
      <p className="text-sm text-gray-500 mb-4">
        Here are the domains that rank for similar keywords
      </p>
      <div className="flex flex-wrap max-md:flex-nowrap text-nowrap items-center gap-2 overflow-x-scroll ">
        {competitors.map((competitor) => (
          <span
            key={competitor.name}
            className={`flex items-center text-white text-sm px-3 py-1 rounded-full ${competitor.color}`}
          >
            {competitor.name} <span className="ml-2 cursor-pointer">✕</span>
          </span>
        ))}
        <button className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600">
          Add Domain
        </button>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
