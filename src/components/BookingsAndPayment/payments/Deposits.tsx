import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";

type SortKey = "sender" | "receiver" | "method" | "status" | "date" | "amount";


interface Deposit {
  id: number;
  sender: string;
  receiver: string;
  method: string;
  status: string;
  date: string;
  amount: string;
}

const Deposits: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<"sender" | "receiver" | "method" | "status" | "date" | "amount">("date");

  const deposits: Deposit[] = [
    { id: 1, sender: "Adenekan Aleem", receiver: "Bekwa Undie", method: "PayPal", status: "Completed", date: "18/12/2024", amount: "$10,000" },
    { id: 2, sender: "Tolu Ade", receiver: "John Doe", method: "Bank Transfer", status: "Completed", date: "20/12/2024", amount: "$5,000" },
    { id: 3, sender: "Ada Obasi", receiver: "Micheal J", method: "Credit Card", status: "Pending", date: "15/12/2024", amount: "$7,500" },
    { id: 4, sender: "Chika Obi", receiver: "Emily Rose", method: "Direct Deposit", status: "Completed", date: "22/12/2024", amount: "$2,500" },
  ];

  // Filter and sort the deposits
  const filteredDeposits = useMemo(() => {
    return deposits
      .filter((deposit) =>
        [deposit.sender, deposit.receiver, deposit.method, deposit.status, deposit.date, deposit.amount].some((field) =>
          field.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .sort((a, b) => {
        let aVal: string | number = a[sortKey];
        let bVal: string | number = b[sortKey];
      
        if (sortKey === "date") {
          aVal = new Date(a.date.split("/").reverse().join("-")).getTime();
          bVal = new Date(b.date.split("/").reverse().join("-")).getTime();
        } else if (sortKey === "amount") {
          aVal = parseFloat(a.amount.replace(/[$,]/g, ""));
          bVal = parseFloat(b.amount.replace(/[$,]/g, ""));
        }
      
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
      });
      
  }, [searchQuery, sortKey]);

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
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg mt-4">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b bg-gray-100">
              <th className="px-4 py-2">#</th> {/* New header for row numbers */}
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
            {filteredDeposits.map((deposit, index) => (
              <tr key={deposit.id} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                <td className="px-4 py-4 font-medium">{index + 1}</td> {/* Row number */}
                <td className="px-4 py-4">{deposit.sender}</td>
                <td className="px-4 py-4">{deposit.receiver}</td>
                <td className="px-4 py-4">{deposit.method}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${deposit.status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
                    {deposit.status}
                  </span>
                </td>
                <td className="px-4 py-4">{deposit.date}</td>
                <td className="px-4 py-4 font-semibold">{deposit.amount}</td>
              </tr>
            ))}
            {filteredDeposits.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
                  No deposits found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deposits;
