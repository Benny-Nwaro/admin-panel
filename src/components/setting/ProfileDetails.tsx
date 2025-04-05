import Image from "next/image";
import React, { useState } from "react";

const flags: Record<string, { name: string; image: string }> = {
  NIG: {
    name: "Nigeria",
    image: "https://flagcdn.com/w320/ng.png",
  },
  USA: {
    name: "United States",
    image: "https://flagcdn.com/w320/us.png",
  },
  UK: {
    name: "United Kingdom",
    image: "https://flagcdn.com/w320/gb.png",
  },
  // Add more countries as needed
};

const ProfileDetails: React.FC = () => {
  const [isTourGuide, setIsTourGuide] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("NIG");

  const handleSaveChanges = () => {
    alert("Profile changes saved!");
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const flag = flags[selectedCountry];

  return (
    <div className=" bg-white rounded-3xl shadow-lg p-6 font-sans mx-auto lg:p-10">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6 lg:text-2xl">
        Profile Details
      </h2>

      <div className="flex flex-row  lg:space-x-10">
        {/* Left Labels */}
        <div className="flex flex-col w-full lg:w-1/3 ">
          <label className="text-gray-600 text-sm mt-10">Profile Photo</label>
          <label className="text-gray-600 text-sm mt-32">Email Address</label>
          <label className="text-gray-600 text-sm mt-10">Full Name</label>
          <label className="text-gray-600 text-sm mt-10">Country Code</label>
          <label className="text-gray-600 text-sm mt-10">Tour Guide</label>
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full lg:w-2/3 space-y-8">
          {/* Profile Photo */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-full shadow hover:bg-blue-600 transition">
              Change Profile Photo
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Address */}
            <div>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                defaultValue="undiebekwa@gmail.com"
              />
            </div>

            {/* Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                defaultValue="Bekwa"
              />
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                defaultValue="Undie"
              />
            </div>

            {/* Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 appearance-none"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {Object.keys(flags).map((code) => (
                    <option key={code} value={code}>
                      {flags[code].name}
                    </option>
                  ))}
                </select>
                {flag && (
                  <Image
                    src={flag.image}
                    alt={flag.name}
                    className="absolute top-2 right-4 w-6 h-4"
                  />
                )}
              </div>
              <input
                type="text"
                className="col-span-2 border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                defaultValue="7065051560"
              />
            </div>

            {/* Tour Guide */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="tour-guide"
                className="w-5 h-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                checked={isTourGuide}
                onChange={() => setIsTourGuide(!isTourGuide)}
              />
              <label
                htmlFor="tour-guide"
                className="ml-2 text-gray-800 text-sm select-none"
              >
                Enable Tour Guide
              </label>
            </div>

            {/* Save Changes */}
            <button
              type="button"
              onClick={handleSaveChanges}
              className="w-full lg:w-1/3 px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-full shadow hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
