"use client";
import React, { useState } from "react";
import LiveClassModal from "./LiveClassModal";

interface Lesson {
  id: number;
  student: string;
  lessonTitle: string;
  lessonType: string;
  teacher: string;
  mode: string;
  status: string;
  date: string;
  duration: string;
}

const lessons: Lesson[] = [
  { id: 1, student: "Adenekan Aleem", lessonTitle: "Private Lessons", lessonType: "Intermediate Piano Lessons", teacher: "Bekwa Undie", mode: "Virtual", status: "Live", date: "18 / 12 / 2024", duration: "per hour" },
  { id: 2, student: "Adenekan Aleem", lessonTitle: "Private Lessons", lessonType: "Intermediate Piano Lessons", teacher: "Bekwa Undie", mode: "Virtual", status: "Live", date: "18 / 12 / 2024", duration: "per hour" },
  { id: 3, student: "Adenekan Aleem", lessonTitle: "Private Lessons", lessonType: "Intermediate Piano Lessons", teacher: "Bekwa Undie", mode: "Virtual", status: "Live", date: "18 / 12 / 2024", duration: "per hour" },
  { id: 4, student: "Adenekan Aleem", lessonTitle: "Private Lessons", lessonType: "Intermediate Piano Lessons", teacher: "Bekwa Undie", mode: "Virtual", status: "Live", date: "18 / 12 / 2024", duration: "per hour" },
  { id: 5, student: "Adenekan Aleem", lessonTitle: "Private Lessons", lessonType: "Intermediate Piano Lessons", teacher: "Bekwa Undie", mode: "Virtual", status: "Live", date: "18 / 12 / 2024", duration: "per hour" }
];

const LessonTable: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  return (
    <div className="w-full  max-md:overflow-x-scroll">
      {/* Table Container with Horizontal Scrolling */}
      <div className="w-full overflow-x-auto ">
        <table className="w-full sm:min-w-full border-collapse text-sm sm:text-base ">
          {/* Table Header */}
          <thead>
            <tr className="bg-white text-black text-left">
              <th className="p-2 sm:p-4">Students</th>
              <th className="p-2 sm:p-4">Lessons</th>
              <th className="p-2 sm:p-4 hidden sm:table-cell">Teacher</th>
              <th className="p-2 sm:p-4">Status</th>
              <th className="p-2 sm:p-4 hidden md:table-cell">Date Created</th>
              <th className="p-2 sm:p-4 hidden md:table-cell">Duration</th>
              <th className="p-2 sm:p-4"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="max-md:w-full">
            {lessons.map((lesson, index) => (
              <tr
                key={lesson.id}
                className={`${index % 2 === 0 ? "bg-blue-200 text-black" : "bg-white text-black"} text-left`}
              >
                <td className="p-2 sm:p-4 font-bold">
                  <span className="block sm:hidden">{lesson.id}</span>
                  <span className="hidden sm:block">{lesson.id} {lesson.student}</span>
                </td>
                <td className="p-2 sm:p-4">
                  <span className="font-bold block">{lesson.lessonTitle}</span>
                  <span className="text-xs sm:text-sm block">{lesson.lessonType}</span>
                </td>
                <td className="p-2 sm:p-4 hidden sm:table-cell">
                  <span className="font-bold block">{lesson.teacher}</span>
                  <span className="text-xs sm:text-sm block">{lesson.mode}</span>
                </td>
                <td className="p-2 sm:p-4">
                  <span className="bg-green-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
                    {lesson.status}
                  </span>
                </td>
                <td className="p-2 sm:p-4 hidden md:table-cell">{lesson.date}</td>
                <td className="p-2 sm:p-4 hidden md:table-cell">{lesson.duration}</td>
                <td className="p-2 sm:p-4">
                  <button
                    onClick={() => openModal(lesson)}
                    className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm"
                  >
                    Details →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* LiveClassModal */}
      {selectedLesson && (
        <LiveClassModal
          isOpen={isModalOpen}
          onClose={closeModal}
          elapsedTime="28:20"
          timeLeft="11:40"
          studentName={selectedLesson.student}
          teacherName={selectedLesson.teacher}
          lesson={selectedLesson.lessonType}
          category={selectedLesson.lessonTitle}
          type={selectedLesson.mode}
          duration={selectedLesson.duration}
        />
      )}
    </div>
  );
};

export default LessonTable;