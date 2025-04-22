"use client";
import React, { useState, useRef, useEffect } from "react";
import CreateFAQModal from "./CreateFAQModal";

const faqs = [
  { id: 1, question: "What is your rate for lessons?", userType: "Student", dateCreated: "18 / 12 / 2024" },
  { id: 2, question: "How do I book a lesson?", userType: "Student", dateCreated: "18 / 12 / 2024" },
  { id: 3, question: "How do I use Educify?", userType: "Teacher", dateCreated: "18 / 12 / 2024" },
  { id: 4, question: "Do you offer lesson packages?", userType: "Student", dateCreated: "18 / 12 / 2024" },
  { id: 5, question: "I am a student now, but would like to register as a teacher", userType: "Teacher", dateCreated: "18 / 12 / 2024" },
];

const FAQPage: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // const handleEdit = (id: number) => {
  //   alert(`Edit FAQ with ID ${id}`);
  // };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this FAQ?")) {
      alert(`Deleted FAQ with ID ${id}`);
    }
  };

  return (
    <div className="w-full mx-auto p-6 relative">
      {/* Modal */}
      {showModal && (
        <CreateFAQModal 
          onClose={() => setShowModal(false)}
          onAddFAQ={(faq) => {
            // handle the new FAQ here
            console.log("FAQ added:", faq);
          }}
        />
      )}

      {/* Header & Create Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">FAQs</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setShowModal(true)}
        >
          Create New FAQ
        </button>
      </div>

      {/* Search & Sort Controls */}
      <div className="bg-white p-4 rounded-lg flex justify-between items-center mb-4">
        <h2 className="font-semibold">All FAQs</h2>
        <div className="flex space-x-3">
          <select className="px-3 py-2 border rounded-lg text-gray-600 focus:outline-none">
            <option>Sort</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border rounded-lg w-full text-gray-600 focus:outline-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">User Type</th>
            <th className="p-3">Date Created</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((faq, index) => (
            <tr key={faq.id} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
              <td className="p-3 font-semibold">{faq.id}. {faq.question}</td>
              <td className="p-3">{faq.userType}</td>
              <td className="p-3">{faq.dateCreated}</td>
              <td className="p-3 relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                >
                  Actions ▼
                </button>
                {activeDropdown === index && (
                  <div
                    ref={(el) => { dropdownRefs.current[index] = el }}
                    className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10"
                  >
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(faq.id)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FAQPage;
