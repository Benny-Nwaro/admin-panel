import React from "react";

const ratings = [
  { stars: 5, percentage: 50 },
  { stars: 4, percentage: 34 },
  { stars: 3, percentage: 34 },
  { stars: 2, percentage: 34 },
  { stars: 1, percentage: 34 },
];

const ReviewSummary: React.FC = () => {
  return (
    <div className="flex  space-x-5 text-white py-6 max-w-2xl">
      {/* Left Section: Overall Rating */}
      <div className="flex bg-blue-500 rounded-2xl shadow-md  flex-col justify-center items-center w-60">
        <div className="text-3xl font-bold flex items-center gap-2">
          ⭐ 4.5
        </div>
        <p className="text-xl font-bold">(3.3k Reviews)</p>
      </div>

      {/* Right Section: Star Distribution */}
      <div className="flex flex-col justify-center flex-1 space-y-2">
        {ratings.map((rating, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Star Icons */}
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < rating.stars ? "text-yellow-400" : "text-gray-500"}
                >
                  ⭐
                </span>
              ))}
            </div>
            {/* Percentage */}
            <span className="text-black text-sm font-bold">{rating.percentage}%</span>
            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden relative">
              <div
                className="bg-yellow-400 h-full"
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSummary;
