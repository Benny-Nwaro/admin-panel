import React, { useState } from "react";

const Deposits: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Deposits");

  const tabs = ["Payments", "Deposits", "Refunds", "Deposits"];

  return (
    <div className="p-6">

      {/* Search & Sort Controls */}
      <div className="flex justify-end mt-4 space-x-4">
        <select className="border rounded px-3 py-2 text-gray-600">
          <option>Sort</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-3 py-2 text-gray-600"
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
            <tr>
              <td colSpan={6} className="px-4 py-3 bg-blue-100 text-gray-700 rounded-lg">
                No Current Deposits
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deposits;
