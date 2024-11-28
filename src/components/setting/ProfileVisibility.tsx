import React, { useState } from "react";

const ProfileVisibility: React.FC = () => {
  const [publicProfile, setPublicProfile] = useState({
    showName: true,
    showBio: true,
    showCourses: true,
    showPricing: true,
  });

  const [privateProfile, setPrivateProfile] = useState({
    makePrivate: false,
    limitToStudents: false,
  });

  const togglePublicOption = (key: keyof typeof publicProfile) => {
    setPublicProfile((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePrivateOption = (key: keyof typeof privateProfile) => {
    setPrivateProfile((prev) => ({ ...prev, [key]: !prev[key] }));
  };



  return (
    <div className="mx-auto  p-6 bg-white rounded-3xl shadow-md ">
      <h2 className="text-2xl font-bold mb-6">Profile Visibility</h2>

      {/* Public Profile Section */}
      <div className="flex flex-row space-x-28 mb-6 ">
        <h3 className="text-lg font-light mb-4">Public Profile</h3>
        <div className="space-y-3  ">
          {Object.keys(publicProfile).map((key) => (
            <div key={key} className="flex items-center hover:cursor-pointer">
              <input
                type="checkbox"
                checked={publicProfile[key as keyof typeof publicProfile]}
                onChange={() => togglePublicOption(key as keyof typeof publicProfile)}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                className="ml-3 text-gray-700"
                htmlFor={`public-${key}`}
              >
                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </label>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 my-6" />

      {/* Private Profile Section */}
      <div className="flex flex-row space-x-28 mb-6 ">
        <h3 className="text-lg font-light mb-4">Private Profile</h3>
        <div className="space-y-3">
          {Object.keys(privateProfile).map((key) => (
            <div key={key} className="flex items-center">
              <input
                type="checkbox"
                checked={privateProfile[key as keyof typeof privateProfile]}
                onChange={() => togglePrivateOption(key as keyof typeof privateProfile)}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                className="ml-3 text-gray-700"
                htmlFor={`private-${key}`}
              >
                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileVisibility;
