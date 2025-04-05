import React, { useState } from "react";

const CreateFAQModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [question, setQuestion] = useState("");
  const [userType, setUserType] = useState("Student");
  const [answer, setAnswer] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Create New FAQ</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            ✖
          </button>
        </div>

        {/* Form */}
        <div className="mt-4">
          {/* Title & User Type */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-600 text-sm mb-1">Title</label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
                placeholder="Question"
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
              {/* Toolbar (Minimal) */}
              <div className="flex space-x-3 text-gray-500 mb-2">
                <button className="hover:text-gray-800">B</button>
                <button className="hover:text-gray-800">I</button>
                <button className="hover:text-gray-800">U</button>
                <button className="hover:text-gray-800">🔗</button>
                <button className="hover:text-gray-800">📑</button>
              </div>
              {/* Text Area */}
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full h-20 resize-none border-none focus:outline-none"
                placeholder="Write FAQ Answer"
              ></textarea>
              {/* Upload Image Button */}
              <button className="absolute top-3 right-3 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-lg hover:bg-blue-200">
                Upload Image
              </button>
            </div>
          </div>

          {/* Add FAQ Button */}
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600">
            ✅ <span>Add FAQ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFAQModal;
