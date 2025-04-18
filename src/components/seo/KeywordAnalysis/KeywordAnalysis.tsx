import React from "react";

const KeywordAnalysis: React.FC = () => {
  return (
    <div className="flex flex-nowrap items-center justify-between w-full bg-white p-4 overflow-x-scroll max-md:flex-row max-md:space-x-12 ">
      {/* Left Section */}
      <div className="text-nowrap">
        <h2 className="text-lg font-bold text-gray-900">KEYWORD ANALYSIS</h2>
        <p className="text-gray-500 text-sm">
          Track keywords to get regular ranking updates
        </p>
      </div>

      {/* Right Section - Button */}
      <button className="bg-blue-500 text-white px-4 py-2 text-nowrap rounded-md text-sm font-semibold shadow hover:bg-blue-600 transition">
        Add Domain
      </button>
    </div>
  );
};

export default KeywordAnalysis;
