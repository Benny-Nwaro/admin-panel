import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  name: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  classCategory: string;
  verificationStatus: boolean;
  profileImage?: string;
  country?: string; // New prop for the country
}

const flags: Record<string, { name: string; image: string }> = {
  US: {
    name: "United States",
    image: "https://flagcdn.com/w320/us.png",
  },
  NG: {
    name: "Nigeria",
    image: "https://flagcdn.com/w320/ng.png",
  },
  GB: {
    name: "United Kingdom",
    image: "https://flagcdn.com/w320/gb.png",
  },
  // Add more countries as needed
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  gender,
  dateOfBirth,
  classCategory,
  verificationStatus,
  profileImage,
  country = "US", // Default country code
}) => {
  const flag = flags[country];

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 font-sans sm:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-700 sm:text-xl">
          Personal Information
        </h3>
        <button
          className="text-blue-500 text-sm sm:text-base hover:underline"
          onClick={() => alert("Modify button clicked!")}
        >
          Modify ✏️
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <Image
          src={
            profileImage ||
            "https://via.placeholder.com/100?text=Avatar" /* Dummy Avatar */
          }
          alt={`${name}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-gray-100 shadow-md mb-3"
        />
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">{name}</h2>
        {flag && (
          <div className="flex items-center mt-2">
            <Image
              src={flag.image}
              alt={flag.name}
              className="w-8 h-5 rounded shadow-sm"
            />
            <span className="ml-2 text-sm font-medium text-gray-600">
              {flag.name}
            </span>
          </div>
        )}
      </div>

      {/* Verification Status */}
      <div className="flex items-center justify-center mb-6">
        <span
          className={`text-sm font-medium ${
            verificationStatus ? "text-green-600" : "text-red-600"
          }`}
        >
          {verificationStatus ? "Verified" : "Not Verified"}
        </span>
        {verificationStatus && (
          <span className="ml-2 w-6 h-6 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
            ✔
          </span>
        )}
      </div>

      {/* Information Section */}
      <div className="space-y-4 text-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between shadow-md rounded-2xl p-3">
          <span className="text-sm">Email Address:</span>
          <p className="text-lg font-bold sm:ml-2 sm:text-right">{email}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between shadow-md rounded-2xl p-3">
          <span className="text-sm">Gender:</span>
          <span className="text-lg font-bold sm:ml-2 sm:text-right">
            {gender}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between shadow-md rounded-2xl p-3">
          <span className="text-sm">Date of Birth:</span>
          <span className="text-lg font-bold sm:ml-2 sm:text-right">
            {dateOfBirth}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between shadow-md rounded-2xl p-3">
          <span className="text-sm">Class Category:</span>
          <span className="text-lg font-bold sm:ml-2 sm:text-right">
            {classCategory}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
