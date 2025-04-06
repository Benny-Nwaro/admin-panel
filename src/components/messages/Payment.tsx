import Image from "next/image";
import React, { useState } from "react";


const Payment: React.FC = () => {
  const chatItems = Array(6).fill({
    name: "Darrell Steward",
    role: "Piano Tutor",
    price: "$45",
    avatar: "https://binkleysrestaurant.com/libs/ace/assets/avatars/profile-pic.jpg", // Replace with actual avatar URL
  });

  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All Roles");

  // Filtered chat items based on search term and role
  const filteredItems = chatItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterRole === "All Roles" || item.role === filterRole)
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-lg mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Role Filter */}
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-1/2"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="All Roles">All Roles</option>
          <option value="Piano Tutor">Piano Tutor</option>
          <option value="Piano Tutor">Coding Tutor</option>

          {/* Add more roles here if needed */}
        </select>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-full max-w-lg space-y-4">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg shadow-sm transition ${
              selectedItem === index ? "bg-blue-100 border-2 border-blue-500" : "bg-white"
            } hover:shadow-md cursor-pointer`}
            onClick={() => setSelectedItem(selectedItem === index ? null : index)}
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-xs text-gray-600">{item.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                {item.price}
              </p>
              <button
                className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => alert(`Viewing details for ${item.name}`)}
              >
                View
              </button>
            </div>
          </div>
        ))}

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
