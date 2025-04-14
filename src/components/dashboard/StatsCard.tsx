import React from "react";
import tutor from "../../app/assets/images/tutor.png"
import course from "../../app/assets/images/course.png"
import Image from "next/image";

interface StatsCardProps {
  bgColor?: string;
  title?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ bgColor, title}) => {
  const userImageData = title?.includes("Tutors") || title?.includes("Students")? [tutor.src, tutor.src, tutor.src, tutor.src] : [course.src, course.src, course.src, course.src];
  // const courseImageData = [course.src, course.src, course.src, course.src]
  return (
    <div className={`relative w-full max-w-sm ${bgColor} rounded-2xl p-6 h-48 text-white shadow-lg`}>
      {/* Avatars */}
      <div className="flex -space-x-3">
        {userImageData.map(
          (src, index) => (
            <Image
            key={index}
            src={src}
            alt={`Avatar ${index + 1}`}
            width={40}
            height={40}
            className="w-10 h-10 border-2 border-white rounded-full"
          />
          
          )
        )}
      </div>

      {/* Title */}
      <h2 className="mt-4 text-lg font-bold">
        <span className="border-b-2 border-white">{title}</span>
      </h2>

      {/* Stats */}
      <div className="absolute top-6 right-6 text-right">
        <h3 className="text-4xl font-extrabold">642+</h3>
        <p className="flex items-center gap-1 text-lg font-semibold">
          +23.40% <span>📈</span>
        </p>
      </div>

      {/* Wavy Line */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C50,10 300,150 400,50 L400,100 L0,100 Z"
          fill="white"
          fillOpacity="0.3"
        />
      </svg>
    </div>
  );
};

export default StatsCard;
