import React from "react";

interface ProfileCardProps {
  name: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  classCategory: string;
  verificationStatus: boolean;
  profileImage?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  gender,
  dateOfBirth,
  classCategory,
  verificationStatus,
  profileImage,
}) => {
  return (
    <div className="max-w-sm  bg-white rounded-2xl shadow-md p-4 font-sans ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-700">
          Personal Information
        </h3>
        <button
          className="text-blue-500 text-sm hover:underline"
          onClick={() => alert("Modify button clicked!")}
        >
          Modify ✏️
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-4">
        <img
          src={
            profileImage ||
            "https://via.placeholder.com/100?text=Avatar" /* Dummy Avatar */
          }
          alt={`${name}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-gray-100 shadow-sm mb-3"
        />
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      </div>

      {/* Verification Status */}
      <div className="flex items-end justify-end mb-4">
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
      <div className="space-y-4 text-gray-700 ">
        <div className="flex flex-col justify-between items-start shadow-md rounded-2xl p-3">
          <span className="text-sm">Email Address:</span>
          <p className="text-lg font-bold">{email}</p>
        </div>
        <div className="flex flex-col justify-between items-start shadow-md rounded-2xl p-3">
          <span className="text-sm">Gender:</span>
          <span className="text-lg font-bold">{gender}</span>
        </div>
        <div className="flex flex-col justify-between items-start shadow-md rounded-2xl p-3">
          <span className="text-sm">Date of Birth:</span>
          <span className="text-lg font-bold">{dateOfBirth}</span>
        </div>
        <div className="flex flex-col justify-between items-start shadow-md rounded-2xl p-3">
          <span className="text-sm">Class Category:</span>
          <span className="text-lg font-bold">{classCategory}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
