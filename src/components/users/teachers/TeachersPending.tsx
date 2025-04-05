import React, { useState } from "react";
import { ChevronDown, Download, Plus } from "lucide-react";

interface Teacher {
  id: number;
  name: string;
  status: string;
  lesson: string;
  location: string;
}

const teachersData: Teacher[] = [
  { id: 1, name: "Adenekan Aleem", status: "Pending", lesson: "Bead Maker", location: "online" },
  { id: 2, name: "Ayomide Otedola", status: "Pending", lesson: "Driving", location: "online" },
  { id: 3, name: "Olamide Baddo", status: "Pending", lesson: "Mathematics", location: "online" },
  { id: 4, name: "John Doe", status: "Pending", lesson: "Physics", location: "offline" },
  { id: 5, name: "Jane Smith", status: "Pending", lesson: "Chemistry", location: "online" },
];

const TeachersPending: React.FC = () => {
  const [teachers] = useState<Teacher[]>(teachersData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 2;

  // Filtered and sorted teachers list
  const filteredTeachers = teachers
    .filter((teacher) => teacher.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));

  // Pagination logic
  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
  const paginatedTeachers = filteredTeachers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full mx-auto bg-white rounded-lg p-6 shadow-md">
      {/* Search & Sort */}
      <div className="flex justify-between items-center mt-4 mb-2">
        <button
          className="border px-4 py-2 rounded-lg flex items-center"
          onClick={() => setSortAsc(!sortAsc)}
        >
          Sort {sortAsc ? "A-Z" : "Z-A"} <ChevronDown size={16} className="ml-2" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg mt-2">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Teacher</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Lesson</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTeachers.length > 0 ? (
              paginatedTeachers.map((teacher) => (
                <tr key={teacher.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{teacher.id}</td>
                  <td className="py-3 px-4 font-semibold">{teacher.name}</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm">
                      {teacher.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{teacher.lesson}</td>
                  <td className="py-3 px-4">{teacher.location}</td>
                  <td className="py-3 px-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                      Actions <ChevronDown size={16} className="ml-2" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredTeachers.length)} of {filteredTeachers.length} entries
        </span>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 border rounded-lg"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded-lg ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 border rounded-lg"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachersPending;
