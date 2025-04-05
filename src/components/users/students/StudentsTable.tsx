import React from "react";

interface Student {
  id: number;
  name: string;
  status: "Accepted" | "Completed";
  lessons: number;
  dateCreated: string;
}

const students: Student[] = [
  { id: 1, name: "Adeniyi Joshua", status: "Accepted", lessons: 1, dateCreated: "12/03/2024" },
  { id: 2, name: "Akanji Daniel", status: "Completed", lessons: 0, dateCreated: "12/03/2024" },
  { id: 3, name: "Mike Ross", status: "Completed", lessons: 10, dateCreated: "12/03/2024" },
  { id: 4, name: "Akanji Daniel", status: "Completed", lessons: 0, dateCreated: "12/03/2024" },
];

const StudentsTable: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-lg font-semibold">All Students</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
            ➕ Create New Student
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            ⬇️ Download Students Data
          </button>
        </div>
      </div>

      {/* Search and Sort */}
      <div className="flex justify-between items-center mt-4 mb-2">
        <div className="relative">
          <select className="border p-2 rounded-md">
            <option>Sort</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded-md w-52"
        />
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Students</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Lessons</th>
            <th className="p-3 text-left">Date Created</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className={`border-t ${index % 2 === 0 ? "bg-blue-50" : "bg-white"}`}>
              <td className="p-3">{student.id}</td>
              <td className="p-3">{student.name}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full text-white text-sm ${student.status === "Accepted" ? "bg-yellow-500" : "bg-green-500"}`}>
                  {student.status}
                </span>
              </td>
              <td className="p-3">{student.lessons}</td>
              <td className="p-3">{student.dateCreated}</td>
              <td className="p-3">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md">Actions ⬇️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">Showing 1 to 4 of 4 entries</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md">{"<"}</button>
          <button className="px-3 py-1 border rounded-md bg-blue-500 text-white">1</button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">3</button>
          <button className="px-3 py-1 border rounded-md">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default StudentsTable;
