"use client";
import React, { useState, useEffect, useRef } from "react";

const initialTrashItems = [
  { name: "Change Management Risk Analysis", type: "Course", deletedOn: "5/27/15", deletedBy: "Ayebatari Temitope", icon: "📖" },
  { name: "Change Orders", type: "Course", deletedOn: "8/30/14", deletedBy: "Ifeanyichukwu Okonkwo", icon: "📖" },
  { name: "Tracking System Changes", type: "Course", deletedOn: "5/27/15", deletedBy: "Ebiere Osuagwu", icon: "📖" },
  { name: "Ebiere Osuagwu", type: "Tutor", deletedOn: "8/30/14", deletedBy: "Titilayo Babatunde", icon: "👤" },
  { name: "Emmanuel Damilare", type: "Student", deletedOn: "5/27/15", deletedBy: "Uzodimma Samuel", icon: "🎓" },
  { name: "Shalewa Adeniyan", type: "Student", deletedOn: "8/30/14", deletedBy: "Remilekun Mogbadunade", icon: "🎓" },
];

const TrashPage2: React.FC = () => {
  const [items, setItems] = useState(initialTrashItems);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
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

  const handleClearTrash = () => {
    if (window.confirm("Clear all trash?")) setItems([]);
  };

  const handleRestore = (index: number) => {
    alert(`Restored: ${items[index].name}`);
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const handleDelete = (index: number) => {
    if (window.confirm(`Delete permanently: ${items[index].name}?`)) {
      const updated = [...items];
      updated.splice(index, 1);
      setItems(updated);
    }
  };

  const filteredItems = items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "date") return new Date(b.deletedOn).getTime() - new Date(a.deletedOn).getTime();
      return 0;
    });

  return (
    <div className="w-full py-6">
      <h1 className="text-lg font-semibold">TRASH </h1>
      <div className="flex justify-between lg:items-center w-full max-md:items-start text-white p-4  rounded-t-lg">
        <button
          onClick={handleClearTrash}
          className="bg-red-600 text-white self-start px-4 py-2 rounded-lg hover:bg-red-500"
        >
          Clear all Trash
        </button>
      </div>

      <p className="text-gray-700 p-3 text-sm">
        Items shown below will be automatically deleted forever after 30 days.
      </p>

      <div className="flex lg:justify-between lg:items-center max-md:flex-col w-full max-md:space-y-3 bg-white p-4">
        <input
          type="text"
          placeholder="Search Trash"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded-lg text-black max-md:w-full focus:outline-blue-500 w-1/3"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border rounded-lg text-gray-600 max-md:w-1/3 focus:outline-none"
        >
          <option value="">Sort</option>
          <option value="name">By Name</option>
          <option value="date">By Date</option>
        </select>
      </div>
      <div className="w-full overflow-x-auto mt-4">
      <table className="w-full border-collapse min-w-max max-md:text-nowrap">
      <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Type</th>
            <th className="p-3">Deleted on</th>
            <th className="p-3">Deleted by</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-500">
                No items in trash.
              </td>
            </tr>
          ) : (
            filteredItems.map((item, index) => (
              <tr
                key={index}
                className={`border-t ${index % 2 === 0 ? "bg-blue-50" : "bg-white"}`}
              >
                <td className="p-3 flex items-center">
                  <span className="mr-2">{item.icon}</span> {item.name}
                </td>
                <td className="p-3">{item.type}</td>
                <td className="p-3">{item.deletedOn}</td>
                <td className="p-3">{item.deletedBy}</td>
                <td className="p-3 relative">
                  <button
                    onClick={() => setActiveDropdown(index === activeDropdown ? null : index)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                  >
                    Actions ▼
                  </button>

                  {activeDropdown === index && (
                    <div
                    ref={(el: HTMLDivElement | null) => {
                      dropdownRefs.current[index] = el;
                    }}
                                          className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10"
                    >
                      <button
                        onClick={() => handleRestore(index)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Restore
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>

      
    </div>
  );
};

export default TrashPage2;
