import React from "react";

const StudentLocation: React.FC = () => {
  return (
    <div className="max-w-3xl mt-5 pb-10 p-6 bg-white rounded-xl shadow-lg mx-auto">
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-800 mb-4 text-center sm:text-left">
        Student Location
      </h2>

      <div className="flex flex-col lg:flex-row mt-10 gap-8">
        {/* Left Column */}
        <div className="flex flex-col items-start lg:pt-16 text-center lg:text-left">
          <h2 className="text-sm font-light text-gray-800">Location</h2>
        </div>

        {/* Right Column */}
        <div className="w-full lg:ml-8">
          <h3 className="text-sm font-medium text-gray-600 mb-6 text-center lg:text-left">
            Add/Update your Location
          </h3>

          {/* Form */}
          <form className="space-y-4">
            {/* Country */}
            <div>
              <select
                className="w-full h-14 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Country</option>
                <option value="nigeria">Nigeria</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
              </select>
            </div>

            {/* State */}
            <div>
              <select
                className="w-full h-14 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">State</option>
                <option value="abuja">Abuja</option>
                <option value="lagos">Lagos</option>
                <option value="kaduna">Kaduna</option>
              </select>
            </div>

            {/* State/Province */}
            <div>
              <select
                className="w-full h-14 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">State/Province</option>
              </select>
            </div>

            {/* City */}
            <div>
              <select
                className="w-full h-14 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">City</option>
              </select>
            </div>

            {/* Apartment, Suite */}
            <div>
              <input
                type="text"
                placeholder="Apartment, Suite, etc."
                className="w-full h-14 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Address */}
            <div>
              <input
                type="text"
                placeholder="Address"
                className="w-full h-14 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Update Location Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="w-full lg:w-1/3 px-4 py-5 bg-blue-500 text-white font-medium text-sm rounded-full shadow hover:bg-blue-600 transition"
              >
                Update Location
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLocation;
