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
    <div className="w-full">
      {/* Table Container with Horizontal Scrolling */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-white text-black text-left">
              <th className="p-4">Students</th>
              <th className="p-4">Lessons</th>
              <th className="p-4">Teacher</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date Created</th>
              <th className="p-4">Duration</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {lessons.map((lesson, index) => (
              <tr key={lesson.id} className={`${index % 2 === 0 ? "bg-blue-200 text-black" : "bg-white text-black"} text-left`}>
                <td className="p-4 font-bold">{lesson.id} {lesson.student}</td>
                <td className="p-4">
                  <span className="font-bold">{lesson.lessonTitle}</span><br />
                  <span className="text-sm">{lesson.lessonType}</span>
                </td>
                <td className="p-4">
                  <span className="font-bold">{lesson.teacher}</span><br />
                  <span className="text-sm">{lesson.mode}</span>
                </td>
                <td className="p-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">{lesson.status}</span>
                </td>
                <td className="p-4">{lesson.date}</td>
                <td className="p-4">{lesson.duration}</td>
                <td className="p-4">
                  <button
                    onClick={() => openModal(lesson)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
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
