"use client";

import React, { useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import type { ReactQuillProps } from "react-quill";
import type Quill from "quill";

// Dynamically import ReactQuill
const ReactQuill = dynamic<ReactQuillProps>(
  () => import("react-quill").then((mod) => mod.default),
  { ssr: false }
);

// Import styles
import "react-quill/dist/quill.snow.css";

const CreateFAQModal: React.FC<{
  onClose: () => void;
  onAddFAQ: (faq: {
    question: string;
    userType: string;
    answer: string;
  }) => void;
}> = ({ onClose, onAddFAQ }) => {
  const [question, setQuestion] = useState("");
  const [userType, setUserType] = useState("Student");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(""); // State for error message

  const quillRef = useRef<{ getEditor: () => Quill } | null>(null);


  const handleAddFAQ = () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }
    if (!answer.trim()) {
      setError("Please provide an answer.");
      return;
    }
    setError(""); // Clear any previous error
    onAddFAQ({ question, userType, answer });
    onClose();
    setQuestion("");
    setAnswer("");
  };

  const handleEditorChange = useCallback((value: string) => {
    setAnswer(value);
  }, []);

  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const editor = quillRef.current?.getEditor?.();
          const range = editor?.getSelection(true);
          editor?.insertEmbed(range?.index || 0, "image", reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[700px] max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Create New FAQ</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-lg"
          >
            ✖
          </button>
        </div>

        {/* Form */}
        <div className="mt-4">
          {/* Title & User Type */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-600 text-sm mb-1">
                Title
              </label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
                placeholder="Question"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-600 text-sm mb-1">
                User Type
              </label>
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
        

          {/* Answer with ReactQuill */}
          <div className="mb-4">

            <label className="block text-gray-600 text-sm mb-1">
              Answer
            </label>
         
         
            <div className="relative">
            <ReactQuill
              value={answer}
              onChange={handleEditorChange}
              theme="snow"
              placeholder="Write FAQ Answer"
              modules={quillModules}
              style={{ minHeight: "200px" }}  // Adjust the minHeight as needed
            />
            <button
              onClick={handleImageUpload}
              type="button"
              className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-lg hover:bg-blue-200"
              >
              Upload Image
              </button>

            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          {/* Submit Button */}
          
          <button
            onClick={handleAddFAQ}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600"
          >
            <span>Add FAQ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFAQModal;
