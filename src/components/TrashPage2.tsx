import React from "react";

const trashItems = [
  { name: "Change Management Risk Analysis", type: "Course", deletedOn: "5/27/15", deletedBy: "Ayebatari Temitope", icon: "📖" },
  { name: "Change Orders", type: "Course", deletedOn: "8/30/14", deletedBy: "Ifeanyichukwu Okonkwo", icon: "📖" },
  { name: "Tracking System Changes", type: "Course", deletedOn: "5/27/15", deletedBy: "Ebiere Osuagwu", icon: "📖" },
  { name: "Ebiere Osuagwu", type: "Tutor", deletedOn: "8/30/14", deletedBy: "Titilayo Babatunde", icon: "👤" },
  { name: "Emmanuel Damilare", type: "Student", deletedOn: "5/27/15", deletedBy: "Uzodimma Samuel", icon: "🎓" },
  { name: "Shalewa Adeniyan", type: "Student", deletedOn: "8/30/14", deletedBy: "Remilekun Mogbadunade", icon: "🎓" },
];

const TrashPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header & Clear Trash Button */}
      <div className="flex justify-between items-center bg-black text-white p-4 rounded-t-lg">
        <h1 className="text-lg font-semibold">TRASH</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Clear all Trash
        </button>
      </div>

      {/* Info Notice */}
      <p className="bg-black text-gray-300 p-3 text-sm">
        Items shown below will be automatically deleted forever after 30 days.
      </p>

      {/* Search & Sort Controls */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md">
        <input
          type="text"
          placeholder="Search Trash"
          className="px-3 py-2 border rounded-lg text-gray-600 focus:outline-none w-1/3"
        />
        <div className="flex items-center space-x-4">
          <select className="px-3 py-2 border rounded-lg text-gray-600 focus:outline-none">
            <option>Sort</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border rounded-lg text-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse mt-4">
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
          {trashItems.map((item, index) => (
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
              <td className="p-3">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                  Actions ▼
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrashPage;
