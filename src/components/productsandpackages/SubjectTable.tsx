import React from "react";
import { FaPlus, FaEllipsisV } from "react-icons/fa";

const subjects = [
  {
    id: 1,
    title: "Piano Lesson",
    image: "/mnt/data/image.png",
    status: "Inactive",
    date: "12/03/2024",
  },
  {
    id: 2,
    title: "Mathematics",
    image: "/mnt/data/image.png",
    status: "Active",
    date: "12/03/2024",
  },
  {
    id: 3,
    title: "Driving Lessons",
    image: "/mnt/data/image.png",
    status: "Inactive",
    date: "12/03/2024",
  },
];

const SubjectTable = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">SUBJECTS</h2>
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 shadow">
          <FaPlus /> Add New Subject
        </button>
        <div className="flex gap-2">
          <select className="border px-4 py-2 rounded shadow-sm">
            <option>Sort</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="border px-4 py-2 rounded shadow-sm"
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Title</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr
                key={subject.id}
                className={`border-t ${index % 2 === 0 ? "bg-blue-50" : "bg-white"}`}
              >
                <td className="p-3">{subject.id}</td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={subject.image}
                    alt={subject.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <span className="font-semibold">{subject.title}</span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      subject.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {subject.status}
                  </span>
                </td>
                <td className="p-3">{subject.date}</td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded shadow flex items-center gap-2">
                    Actions <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectTable;
