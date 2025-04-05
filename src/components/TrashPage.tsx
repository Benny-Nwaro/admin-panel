import React from "react";

const TrashPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold text-gray-900">TRASH</h1>
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <select className="px-3 py-2 border rounded-lg text-gray-600 focus:outline-none">
            <option>Sort</option>
          </select>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border rounded-lg text-gray-600 focus:outline-none"
          />
          {/* Clear Trash Button */}
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Clear all Trash
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center h-64 border rounded-lg">
        <p className="text-lg font-semibold text-gray-800">No trashed items</p>
        <p className="text-gray-500 text-sm">
          You can find anything that has been deleted here
        </p>
      </div>
    </div>
  );
};

export default TrashPage;
