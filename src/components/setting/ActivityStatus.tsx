import React, { useState } from "react";

const ActivityStatus: React.FC = () => {
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [showLastActiveTime, setShowLastActiveTime] = useState(true);

  return (
    <div className="mx-auto p-6 bg-white rounded-3xl shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Activity Status</h2>
      <hr className="border-gray-200 my-6" />

      
      <div className="flex justify-between items-center  mb-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showOnlineStatus}
            onChange={() => setShowOnlineStatus(!showOnlineStatus)}
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
          <div
            className="w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-all absolute top-[2px] left-[2px]"
          ></div>
        </label>
        <span className="text-gray-600 text-sm">Show Online Status</span>

      </div>

      <div className="flex justify-between items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showLastActiveTime}
            onChange={() => setShowLastActiveTime(!showLastActiveTime)}
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
          <div
            className="w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-all absolute top-[2px] left-[2px]"
          ></div>
        </label>
        <span className="text-gray-600 text-sm">Show Last Active Time</span>
      </div>
    </div>
  );
};

export default ActivityStatus;
