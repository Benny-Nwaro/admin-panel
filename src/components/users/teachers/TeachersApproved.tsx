import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Search, Eye, Edit, Trash } from "lucide-react";

interface Teacher {
  id: number;
  name: string;
  status: string;
  lesson: string;
  location: string;
}

const teachersData: Teacher[] = [
  { id: 1, name: "Adenekan Aleem", status: "Approved", lesson: "Bead Maker", location: "online" },
  { id: 2, name: "Ayomide Otedola", status: "Approved", lesson: "Driving", location: "online" },
  { id: 3, name: "Olamide Baddo", status: "Approved", lesson: "Mathematics", location: "online" },
  { id: 4, name: "Simi Ogunleye", status: "Approved", lesson: "Music", location: "offline" },
  { id: 5, name: "Davido Adeleke", status: "Approved", lesson: "Vocal Training", location: "offline" },
];

const TeachersApproved: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const itemsPerPage = 3;

  // Filter teachers based on search query
  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedTeachers = filteredTeachers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full mx-auto bg-white rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Teachers Approved</h2>
        <div className="flex items-center space-x-4">
          <button className="border rounded-lg px-3 py-1 flex items-center space-x-1 text-gray-600">
            <span>Sort</span> <ChevronDown size={16} />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-3 py-1 pl-10 w-48 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute top-2 left-3 text-gray-500" size={16} />
          </div>
        </div>
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
            {selectedTeachers.length > 0 ? (
              selectedTeachers.map((teacher) => (
                <tr key={teacher.id} className="border-t bg-blue-50">
                  <td className="p-3">{teacher.id}</td>
                  <td className="p-3 font-semibold">{teacher.name}</td>
                  <td className="p-3">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">{teacher.status}</span>
                  </td>
                  <td className="p-3">{teacher.lesson}</td>
                  <td className="p-3 text-blue-500 font-semibold">{teacher.location}</td>
                  <td className="p-3 relative">
                    <button
                      className="bg-blue-500 text-white px-4 py-1 rounded-lg flex items-center space-x-2"
                      onClick={() => setDropdownOpen(dropdownOpen === teacher.id ? null : teacher.id)}
                    >
                      <span>Actions</span> <ChevronDown size={14} />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen === teacher.id && (
                      <div className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-10">
                        <button className="w-full px-4 py-2 text-left flex items-center hover:bg-gray-100">
                          <Eye size={16} className="mr-2 text-blue-500" /> View
                        </button>
                        <button className="w-full px-4 py-2 text-left flex items-center hover:bg-gray-100">
                          <Edit size={16} className="mr-2 text-green-500" /> Edit
                        </button>
                        <button className="w-full px-4 py-2 text-left flex items-center hover:bg-gray-100 text-red-500">
                          <Trash size={16} className="mr-2" /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredTeachers.length > itemsPerPage && (
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-500 text-sm">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredTeachers.length)} of {filteredTeachers.length} entries
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="border px-3 py-1 rounded-lg disabled:opacity-50"
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`border px-3 py-1 rounded-lg ${
                  currentPage === index + 1 ? "bg-blue-500 text-white" : "text-gray-600"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="border px-3 py-1 rounded-lg disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachersApproved;
