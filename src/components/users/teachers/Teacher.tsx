import React, { useState } from "react";
import { ChevronDown, Download, Plus } from "lucide-react";
import TeachersApproved from "./TeachersApproved";
import TeachersPending from "./TeachersPending";
import TeachersRejected from "./TeachersRejected";

interface Teacher {
  id: number;
  name: string;
  status: string;
  lesson: string;
  location: string;
}

const teachersData: Teacher[] = [
  { id: 1, name: "Adenekan Aleem", status: "Pending", lesson: "Bead Maker", location: "online" },
  { id: 2, name: "Ayomide Otedola", status: "Approved", lesson: "Driving", location: "online" },
  { id: 3, name: "Olamide Baddo", status: "Rejected", lesson: "Mathematics", location: "online" },
  { id: 4, name: "John Doe", status: "Pending", lesson: "Physics", location: "offline" },
  { id: 5, name: "Jane Smith", status: "Approved", lesson: "Chemistry", location: "online" },
];

const Teacher: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Pending");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  // Filter and sort teachers
  const filteredTeachers = teachersData
    .filter((teacher) => teacher.status === selectedTab)
    .filter((teacher) => teacher.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));

  // Determine which component to render
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Approved":
        return <TeachersApproved />;
      case "Rejected":
        return <TeachersRejected />;
      default:
        return <TeachersPending />;
    }
  };

  return (
    <div className="w-full bg-white  rounded-lg p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
            <Plus size={16} className="mr-2" /> Create New Teacher
          </button>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
            <Download size={16} className="mr-2" /> Download {selectedTab} Teachers
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b flex space-x-6 text-gray-600">
        {["Pending", "Approved", "Rejected"].map((tab) => (
          <span
            key={tab}
            className={`pb-2 cursor-pointer ${
              selectedTab === tab ? "border-b-2 border-black font-semibold" : ""
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            Teacher {tab}
          </span>
        ))}
      </div>

      {/* Search & Sort */}
      {/* <div className="flex justify-between items-center mt-4 mb-2">
        <input
          type="text"
          placeholder="Search"
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}

      {/* Dynamic Component Rendering */}
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default Teacher;
