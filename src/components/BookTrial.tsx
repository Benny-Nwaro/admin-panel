import React from "react";

const BookTrial: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100">
      <button className="px-8 py-4 w-full rounded-lg text-white font-medium transition-transform duration-200 transform hover:scale-105 focus:outline-none bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 shadow-md">
        {/* Button Content */}
        <div className="flex items-center  justify-between px-6 py-3">
          <span className="text-sm italic font-light md:text-base">Interested in any subject?</span>
          <span className="text-lg font-extrabold md:text-base ">
            Book a free trial
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default BookTrial;
