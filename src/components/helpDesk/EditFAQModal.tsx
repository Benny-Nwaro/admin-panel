import React, { useState } from "react";

const EditFAQModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [question, setQuestion] = useState("What is your rate for lessons?");
  const [userType, setUserType] = useState("Student");
  const [answer, setAnswer] = useState(
    "We, to a great extent, do not have a fixed price for the lessons, as this is a platform for freelance teachers who dictate their rates. You can choose any category of your choice and your preferred location, your nearest teacher will appear, and you can book a trial."
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">Edit FAQ</h2>

        {/* Title & User Type */}
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">Title</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">User Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
            >
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
        </div>

        {/* Answer */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Answer</label>
          <div className="border rounded-lg p-3 relative">
            {/* Toolbar */}
            <div className="flex space-x-3 text-gray-500 mb-2">
              <button className="hover:text-gray-800 font-semibold">B</button>
              <button className="hover:text-gray-800 italic">I</button>
              <button className="hover:text-gray-800 underline">U</button>
              <button className="hover:text-gray-800">🔗</button>
              <button className="hover:text-gray-800">📑</button>
              <button className="hover:text-gray-800">🔠</button>
            </div>
            {/* Text Area */}
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full h-24 resize-none border-none focus:outline-none"
            ></textarea>
            {/* Upload Image Button */}
            <button className="absolute top-3 right-3 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-lg hover:bg-blue-200">
              Upload Image
            </button>
          </div>
        </div>

        {/* Update Button */}
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600">
          ✅ <span>Update</span>
        </button>
      </div>
    </div>
  );
};

export default EditFAQModal;
