import React from "react";

interface LiveClassProps {
  isOpen: boolean;
  onClose: () => void;
  elapsedTime: string;
  timeLeft: string;
  studentName: string;
  teacherName: string;
  lesson: string;
  category: string;
  type: string;
  duration: string;
}

const LiveClassModal: React.FC<LiveClassProps> = ({
  isOpen,
  onClose,
  elapsedTime,
  timeLeft,
  studentName,
  teacherName,
  lesson,
  category,
  type,
  duration
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-lg p-6 text-black relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-black hover:text-gray-500" onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold mb-4">Live Class</h2>

        {/* Time Section */}
        <div className="bg-blue-100 rounded-xl flex justify-between items-center p-5 mb-6">
          <div className="text-center">
            <p className="text-black text-sm">Time elapsed</p>
            <p className="text-2xl font-bold">{elapsedTime}</p>
          </div>
          <div className="text-center">
            <p className="text-black text-sm">Time left</p>
            <p className="text-2xl font-bold">{timeLeft}</p>
          </div>
        </div>

        {/* Lesson Details */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-black">Student name</span>
            <span className="font-semibold">{studentName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Teacher name</span>
            <span className="font-semibold">{teacherName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Lesson</span>
            <span className="font-semibold">{lesson}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Lesson category</span>
            <span className="font-semibold">{category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Lesson type</span>
            <span className="font-semibold">{type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Lesson duration</span>
            <span className="font-semibold">{duration}</span>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6 text-center">
          <button
            className="border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveClassModal;
