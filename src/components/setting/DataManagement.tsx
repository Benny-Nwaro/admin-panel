import React from "react";
import { FiDownload, FiAlertCircle } from "react-icons/fi";
import ProfileVisibility from "./ProfileVisibility";
import ActivityStatus from "./ActivityStatus";


const DataManagement: React.FC = () => {
  return (
    <div className=" space-y-5">
      <ProfileVisibility/>
      <ActivityStatus/>
       <div className=" mx-auto p-6 bg-white rounded-3xl shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Data Management</h2>
      <hr className="border-gray-200 my-6" />
      {/* Download Personal Data Section */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600 text-nowrap text-sm">Download Personal Data</span>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow hover:bg-blue-600 transition">
          Download Data
          <FiDownload />
        </button>
      </div>

      {/* Delete Account Section */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-sm">Delete Account</span>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-full shadow hover:bg-red-600 transition">
          Delete Account
          <FiAlertCircle />
        </button>
      </div>
    </div>
    </div>
   
  );
};

export default DataManagement;
