import React, { useState } from "react";
import { ChevronDown, Eye, Trash, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

interface Teacher {
  id: number;
  name: string;
  status: "Rejected";
  lesson: string;
  location: string;
}

const initialTeachers: Teacher[] = [
  { id: 1, name: "Adenekan Aleem", status: "Rejected", lesson: "Bead Maker", location: "Online" },
  { id: 2, name: "Ayomide Otedola", status: "Rejected", lesson: "Driving", location: "Online" },
  { id: 3, name: "Olamide Baddo", status: "Rejected", lesson: "Mathematics", location: "Offline" },
  { id: 4, name: "Tunde Ednut", status: "Rejected", lesson: "Music", location: "Online" },
  { id: 5, name: "Davido Adeleke", status: "Rejected", lesson: "Singing", location: "Offline" },
];

const TeachersRejected: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  // Filtering
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase()) ||
    teacher.lesson.toLowerCase().includes(search.toLowerCase()) ||
    teacher.location.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
  const paginatedTeachers = filteredTeachers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleDelete = (id: number) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const toggleDropdown = (id: number) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg p-6 shadow">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Teachers Rejected</h2>

      {/* Search */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg shadow focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-sm">
              <th className="p-3">#</th>
              <th className="p-3">Teacher</th>
              <th className="p-3">Status</th>
              <th className="p-3">Lesson</th>
              <th className="p-3">Location</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTeachers.length > 0 ? (
              paginatedTeachers.map((teacher) => (
                <tr key={teacher.id} className="border-t even:bg-blue-50">
                  <td className="p-3">{teacher.id}</td>
                  <td className="p-3 font-semibold">{teacher.name}</td>
                  <td className="p-3">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
                      {teacher.status}
                    </span>
                  </td>
                  <td className="p-3">{teacher.lesson}</td>
                  <td className="p-3 font-semibold">{teacher.location}</td>
                  <td className="p-3 relative">
                    <button
                      onClick={() => toggleDropdown(teacher.id)}
                      className="bg-blue-500 text-white px-4 py-1 rounded-lg flex items-center space-x-2 relative"
                    >
                      <span>Actions</span> <ChevronDown size={14} />
                    </button>

                    {dropdownOpen === teacher.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                        <button
                          className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100"
                          onClick={() => alert(`Viewing ${teacher.name}`)}
                        >
                          <Eye size={14} className="mr-2" /> View Details
                        </button>
                        <button
                          className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 text-red-600"
                          onClick={() => handleDelete(teacher.id)}
                        >
                          <Trash size={14} className="mr-2" /> Delete
                        </button>
                        <button
                          className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 text-green-600"
                          onClick={() => alert(`${teacher.name} Restored!`)}
                        >
                          <RotateCcw size={14} className="mr-2" /> Restore
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No matching results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-blue-600 font-semibold">
        <p>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredTeachers.length)} of {filteredTeachers.length} entries
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg border ${currentPage === 1 ? "opacity-50" : ""}`}
          >
            <ChevronLeft size={14} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg border ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg border ${currentPage === totalPages ? "opacity-50" : ""}`}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachersRejected;
