import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummary";

const reviews = [
  {
    name: "Jane Cooper",
    role: "Student",
    date: "Jan 20, 2024",
    message: "These teeth goalposts boys 2 first-order. Seems calculator could catching dunder later rundown manage. Put ask disband knowledge right kpis price me let’s seat. Shower staircase problem low re-inventing. Feature policy.",
    rating: 5,
  },
  {
    name: "Jenny Wilson",
    role: "Design Manager",
    date: "Nov 13, 2023",
    message: "Deploy teeth of red-flag yet hour view happenings then also. Problem territories our build close marginalised about.",
    rating: 4,
  },
];

const Reviews: React.FC = () => {
  return (
    <div className="w-full mx-auto space-y-6">
      <ReviewSummary />
      
      <div className="flex justify-between items-center">
        <select className="p-2 border rounded-lg text-gray-700">
          <option>Sort by</option>
        </select>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
