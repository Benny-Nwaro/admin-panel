import React from "react";

const KeywordInput: React.FC = () => {
  return (
    <div className="w-full bg-black text-white p-2">
      {/* Top text */}
      <p className="text-sm text-gray-300">
        Paste keywords, or{" "}
        <span className="text-red-500 font-semibold cursor-pointer hover:underline">
          Import from <span className="text-blue-500">CSV</span>
        </span>
      </p>

      {/* Input Box */}
      <textarea
        className="w-full h-40 p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500"
        placeholder="Type here..."
      />
    </div>
  );
};

export default KeywordInput;
