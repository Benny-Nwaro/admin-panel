import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";

// Corrected SortKey to match the properties of the data
type SortKey = "sender" | "receiver" | "method" | "status" | "dateCreated" | "amount";

const WithDrawals: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("amount");

  const data = [
    {
      id: 1,
      sender: "John Doe",
      receiver: "Jane Smith",
      method: "Bank Transfer",
      status: "Completed",
      dateCreated: "2025-04-05",
      amount: "$500",
    },
    {
      id: 2,
      sender: "Alice",
      receiver: "Bob",
      method: "PayPal",
      status: "Pending",
      dateCreated: "2025-04-04",
      amount: "$200",
    },
  ];

  const filteredAndSortedData = useMemo(() => {
    return data
      .filter((item) =>
        [item.sender, item.receiver, item.method, item.status]
          .some((field) =>
            field.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
      .sort((a, b) => {
        let aVal: string | number = a[sortKey];
        let bVal: string | number = b[sortKey];

        // Special handling for 'dateCreated' and 'amount' properties
        if (sortKey === "dateCreated") {
          aVal = new Date(a.dateCreated).getTime();
          bVal = new Date(b.dateCreated).getTime();
        } else if (sortKey === "amount") {
          aVal = parseFloat(a.amount.replace(/[$,]/g, ""));
          bVal = parseFloat(b.amount.replace(/[$,]/g, ""));
        }

        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
      });
  }, [data, searchQuery, sortKey]);

  return (
    <div className="p-6">
      {/* Search & Sort Controls */}
      <div className="flex justify-end items-center gap-4 p-4 flex-wrap">
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search refunds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-400 rounded-full w-full outline-blue-500"
          />
        </div>

        {/* Sort Select & Toggle */}
        <div className="flex items-center gap-2">
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="border border-gray-300 rounded-md px-3 py-2 outline-blue-500"
          >
            <option value="sender">Sender</option>
            <option value="receiver">Receiver</option>
            <option value="method">Method</option>
            <option value="status">Status</option>
            <option value="dateCreated">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg mt-4 overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b bg-gray-100">
              <th className="px-4 py-3">#</th> {/* Row number header */}
              <th className="px-4 py-3">Sender</th>
              <th className="px-4 py-3">Receiver</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date Created</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map((userData, index) => (
              <tr
                key={userData.id}
                className={`border-b hover:bg-gray-50 cursor-pointer ${
                  userData.id % 2 !== 0 ? "bg-blue-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-4 font-medium">{index + 1}</td> {/* Row number */}
                <td className="px-4 py-4 font-semibold">{userData.sender}</td>
                <td className="px-4 py-4 font-semibold">{userData.receiver}</td>
                <td className="px-4 py-4 font-medium">{userData.method}</td>
                <td className="px-4 py-4">
                  <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                    {userData.status}
                  </span>
                </td>
                <td className="px-4 py-4">{userData.dateCreated}</td>
                <td className="px-4 py-4 font-medium">{userData.amount}</td>
              </tr>
            ))}
            {filteredAndSortedData.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithDrawals;
