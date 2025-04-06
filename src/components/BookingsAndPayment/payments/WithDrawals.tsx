import React, { useState } from "react";

const WithDrawals: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Withdrawals");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<string | undefined>("");

  const tabs = ["Payments", "Withdrawals", "Refunds", "Deposits"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  // Example data - you can replace this with your dynamic data
  const data = [
    { sender: "John Doe", receiver: "Jane Smith", method: "Bank Transfer", status: "Completed", dateCreated: "2025-04-05", amount: "$500" },
    { sender: "Alice", receiver: "Bob", method: "PayPal", status: "Pending", dateCreated: "2025-04-04", amount: "$200" },
    // More items here
  ];

  const filteredData = data.filter(item => {
    return item.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.receiver.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.amount.localeCompare(b.amount); // You can customize sorting logic
    } else if (sortOrder === "desc") {
      return b.amount.localeCompare(a.amount);
    }
    return 0;
  });

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Sort Controls */}
      <div className="flex justify-end mt-4 space-x-4">
        <select 
          className="border rounded px-3 py-2 text-gray-600" 
          value={sortOrder} 
          onChange={handleSortChange}
        >
          <option value="">Sort</option>
          <option value="asc">Amount Ascending</option>
          <option value="desc">Amount Descending</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-3 py-2 text-gray-600"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Table */}
      <div className="border rounded-lg mt-4">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="px-4 py-2">Sender</th>
              <th className="px-4 py-2">Receiver</th>
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date Created</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-3 bg-blue-100 text-gray-700 rounded-lg">
                  No Current {activeTab}
                </td>
              </tr>
            ) : (
              sortedData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{item.sender}</td>
                  <td className="px-4 py-2">{item.receiver}</td>
                  <td className="px-4 py-2">{item.method}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2">{item.dateCreated}</td>
                  <td className="px-4 py-2">{item.amount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithDrawals;
