import React from "react";

interface ReviewProps {
  name: string;
  role: string;
  date: string;
  message: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, role, date, message, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col w-full">
      <p className="text-gray-500 text-sm">{date}</p>
      <div className="flex items-center gap-4 mt-2">
        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 mt-4 text-sm">{message}</p>
      <div className="mt-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
            ⭐
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
