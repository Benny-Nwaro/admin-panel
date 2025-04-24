import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";

type SortKey = "sender" | "receiver" | "method" | "status" | "date" | "amount";

const Refunds: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date");

  const refunds = [
    {
      id: 1,
      sender: "Adenekan Aleem Ayomide",
      senderRole: "Student",
      receiver: "Bekwa Undie",
      receiverRole: "Blog Admin",
      method: "PayPal",
      status: "Refunded",
      date: "18/12/2024",
      amount: "$10,000",
    },
    {
      id: 2,
      sender: "Adenekan Aleem Ayomide",
      senderRole: "Student",
      receiver: "Bekwa Undie",
      receiverRole: "Blog Admin",
      method: "Credit Card",
      status: "Refunded",
      date: "17/12/2024",
      amount: "$5,500",
    },
    {
      id: 3,
      sender: "Adenekan Aleem Ayomide",
      senderRole: "Student",
      receiver: "Bekwa Undie",
      receiverRole: "Blog Admin",
      method: "Direct Deposit",
      status: "Refunded",
      date: "19/12/2024",
      amount: "$3,200",
    },
    {
      id: 4,
      sender: "Adenekan Aleem Ayomide",
      senderRole: "Student",
      receiver: "Bekwa Undie",
      receiverRole: "Blog Admin",
      method: "PayPal",
      status: "Refunded",
      date: "16/12/2024",
      amount: "$7,800",
    },
  ];

  const filteredRefunds = useMemo(() => {
    return refunds
      .filter((r) =>
        [r.sender, r.receiver, r.method, r.status].some((field) =>
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
    <div className="overflow-x-auto border rounded-lg w-full">
      {/* Search and Sort Controls */}
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
      <table className="w-full border-collapse min-w-[800px]">
        <thead>
          <tr className="text-left text-gray-500 text-sm border-b bg-gray-100">
            <th className="px-4 py-3">#</th> {/* <-- Row number header */}
            <th className="px-4 py-3">Sender</th>
            <th className="px-4 py-3">Receiver</th>
            <th className="px-4 py-3">Method</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Date Refunded</th>
            <th className="px-4 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredRefunds.map((refund, index) => (
            <tr
              key={refund.id}
              className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
            >
              <td className="px-4 py-4 font-medium">{index + 1}</td> {/* Row number */}
              <td className="px-4 py-4">
                <strong>{refund.sender}</strong>
                <br />
                <span className="text-sm text-gray-500">
                  {refund.senderRole}
                </span>
              </td>
              <td className="px-4 py-4">
                <strong>{refund.receiver}</strong>
                <br />
                <span className="text-sm text-gray-500">
                  {refund.receiverRole}
                </span>
              </td>
              <td className="px-4 py-4 font-semibold">{refund.method}</td>
              <td className="px-4 py-4">
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                  {refund.status}
                </span>
              </td>
              <td className="px-4 py-4">{refund.date}</td>
              <td className="px-4 py-4 font-semibold">{refund.amount}</td>
            </tr>
          ))}
          {filteredRefunds.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-6 text-gray-500">
                No refunds found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Refunds;
