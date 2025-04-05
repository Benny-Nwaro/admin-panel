import React, { useState } from "react";
import Image from "next/image";
import Announcements from "./Announcements";
import Reviews from "./Reviews";

interface CourseDetailsProps {
  title: string;
  description: string;
  targetAudience: string;
  learningObjectives: string;
  announcements: string;
  categories: string;
  price: string;
  instructor: {
    name: string;
    profileImage: string;
    tagline: string;
  };
}

const CourseOverview: React.FC<CourseDetailsProps> = ({
  title,
  description,
  targetAudience,
  learningObjectives,
  announcements,
  categories,
  price,
  instructor,
}) => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg h-fit">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
           {/* Reject Button */}
           <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Reject Course
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        {["Overview", "Announcements", "Reviews"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Details */}
     {activeTab == "Overview" && 
      <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <span className="text-gray-600">Title</span>
        <input
          type="text"
          value={title}
          readOnly
          className="col-span-2 p-2 border rounded-md bg-gray-100"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <span className="text-gray-600">Description</span>
        <input
          type="text"
          value={description}
          readOnly
          className="col-span-2 p-2 border rounded-md bg-gray-100"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <span className="text-gray-600">Who is this course for</span>
        <input
          type="text"
          value={targetAudience}
          readOnly
          className="col-span-2 p-2 border rounded-md bg-gray-100"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <span className="text-gray-600">Learning objectives</span>
        <input
          type="text"
          value={learningObjectives}
          readOnly
          className="col-span-2 p-2 border rounded-md bg-gray-100"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <span className="text-gray-600">Announcements</span>
        <input
          type="text"
          value={announcements}
          readOnly
          className="col-span-2 p-2 border rounded-md bg-gray-100"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <span className="text-gray-600">Categories</span>
        <input
          type="text"
          value={categories}
          readOnly
          className="col-span-2 p-2 border rounded-md bg-gray-100"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <span className="text-gray-600">Price</span>
        <input
          type="text"
          value={price}
          readOnly
          className="col-span-2 p-2 border rounded-md bg-gray-100"
        />
      </div>

      {/* Instructor */}
      <div className="grid grid-cols-3 gap-4 items-center">
        <span className="text-gray-600">Instructor</span>
        <div className="col-span-2 flex items-center space-x-4 border p-3 rounded-md bg-gray-100">
          <Image
            src={instructor.profileImage}
            alt={instructor.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{instructor.name}</p>
            <p className="text-sm text-gray-600">{instructor.tagline}</p>
          </div>
        </div>
      </div>
    </div>
    }:{
      activeTab == "Announcements" && 
      <Announcements/>
    }:{
      activeTab == "Reviews" && 
      <Reviews/>
    }
    </div>
  );
};

export default CourseOverview;
