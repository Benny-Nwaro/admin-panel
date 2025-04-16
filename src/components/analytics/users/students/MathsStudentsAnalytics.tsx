// components/MathsTeachersAnalytics.tsx
import React from "react";

const data = [
  { grade: "Kindergarten", online: 4, teacher: 5, student: 7, total: 16 },
  { grade: "Grade 1", online: 5, teacher: 1, student: 0, total: 6 },
  { grade: "Grade 2", online: 7, teacher: 2, student: 4, total: 13 },
  { grade: "Grade 3", online: 4, teacher: 3, student: 7, total: 14 },
  { grade: "Grade 4", online: 2, teacher: 1, student: 3, total: 6 },
  { grade: "Grade 5", online: 1, teacher: 1, student: 1, total: 3 },
  { grade: "Grade 6", online: 4, teacher: 2, student: 3, total: 9 },
  { grade: "Grade 7", online: 4, teacher: 5, student: 7, total: 16 },
  { grade: "Grade 8", online: 3, teacher: 2, student: 2, total: 7 },
  { grade: "Grade 9", online: 7, teacher: 0, student: 4, total: 11 },
  { grade: "Grade 10", online: 3, teacher: 6, student: 2, total: 11 },
  { grade: "Grade 11", online: 4, teacher: 0, student: 0, total: 4 },
  { grade: "Grade 12", online: 7, teacher: 2, student: 1, total: 10 },
];

const totals = {
  online: 55,
  teacher: 30,
  student: 41,
  total: 126,
};

const MathsStudentsAnalytics = () => {
  return (
    <div className=" text-black p-6 rounded-xl w-full mx-auto mt-12">
        <div className="flex flex-row justify-between">
            <h1 className="text-xl font-bold mb-4">MATHS STUDENTS ANALYTICS</h1>
            <div className="flex justify-between mb-4">
                <select className="bg-white text-black px-4 py-2 rounded">
                <option>Sort</option>
                </select>
                <input
                type="text"
                placeholder="Search"
                className="bg-white text-black px-4 py-2 rounded w-72 ml-3"
                />
            </div>
        </div>
      <div className="overflow-x-auto rounded-xl border border-red-400 ">
        <table className="min-w-full bg-white text-black rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold">
              <th className="py-3 px-4">Grades</th>
              <th className="py-3 px-4">Online</th>
              <th className="py-3 px-4">Teachers place</th>
              <th className="py-3 px-4">Students place</th>
              <th className="py-3 px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-green-100"}>
                <td className="py-2 px-4 font-medium">{row.grade}</td>
                <td className="py-2 px-4">{row.online}</td>
                <td className="py-2 px-4">{row.teacher}</td>
                <td className="py-2 px-4">{row.student}</td>
                <td className="py-2 px-4">{row.total}</td>
                </tr>
            ))}
          </tbody>
        </table>
        <div className="grid grid-cols-4 text-center bg-white text-black mt-4 p-4 gap-4">
          <div>
            <p className="text-sm">Total Online</p>
            <p className="text-2xl font-bold">{totals.online}</p>
          </div>
          <div>
            <p className="text-sm">Total Teachers place</p>
            <p className="text-2xl font-bold">{totals.teacher}</p>
          </div>
          <div>
            <p className="text-sm">Total Students place</p>
            <p className="text-2xl font-bold">{totals.student}</p>
          </div>
          <div>
            <p className="text-sm">Total</p>
            <p className="text-2xl font-bold">{totals.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathsStudentsAnalytics;
