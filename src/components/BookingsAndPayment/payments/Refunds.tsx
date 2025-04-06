import React, { useState } from "react";

const Refunds: React.FC = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"Newest" | "Oldest">("Newest");

  const refunds = [
    { id: 1, sender: "Adenekan Aleem Ayomide", senderRole: "Student", receiver: "Bekwa Undie", receiverRole: "Blog Admin", method: "PayPal", status: "Refunded", date: "18/12/2024", amount: "$10,000" },
    { id: 2, sender: "Adenekan Aleem Ayomide", senderRole: "Student", receiver: "Bekwa Undie", receiverRole: "Blog Admin", method: "Credit Card", status: "Refunded", date: "17/12/2024", amount: "$5,500" },
    { id: 3, sender: "Adenekan Aleem Ayomide", senderRole: "Student", receiver: "Bekwa Undie", receiverRole: "Blog Admin", method: "Direct Deposit", status: "Refunded", date: "19/12/2024", amount: "$3,200" },
    { id: 4, sender: "Adenekan Aleem Ayomide", senderRole: "Student", receiver: "Bekwa Undie", receiverRole: "Blog Admin", method: "PayPal", status: "Refunded", date: "16/12/2024", amount: "$7,800" },
  ];

  // **Filter refunds based on search**
  const filteredRefunds = refunds
    .filter((refund) =>
      Object.values(refund).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => (sort === "Newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));

  return (
    <div className="">
      {/* <div className="flex border-b mb-4">
        {["Payments", "Withdrawals", "Refunds", "Deposits"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-gray-500 transition-all ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div> */}

      {/* Sort & Search */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="border bg-gray-100 rounded-md px-4 py-2 hover:bg-gray-200 transition"
          onClick={() => setSort(sort === "Newest" ? "Oldest" : "Newest")}
        >
          Sort: {sort}
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-2 w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full border-collapse min-w-[800px]">
          {/* Table Header */}
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b bg-gray-100">
              <th className="px-4 py-3">Sender</th>
              <th className="px-4 py-3">Receiver</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date Refunded</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredRefunds.map((refund, index) => (
              <tr key={refund.id} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                <td className="px-4 py-4">
                  <strong>{refund.sender}</strong>
                  <br />
                  <span className="text-sm text-gray-500">{refund.senderRole}</span>
                </td>
                <td className="px-4 py-4">
                  <strong>{refund.receiver}</strong>
                  <br />
                  <span className="text-sm text-gray-500">{refund.receiverRole}</span>
                </td>
                <td className="px-4 py-4 font-semibold">{refund.method}</td>
                <td className="px-4 py-4">
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
                    {refund.status}
                  </span>
                </td>
                <td className="px-4 py-4">{refund.date}</td>
                <td className="px-4 py-4 font-semibold">{refund.amount}</td>
              </tr>
            ))}

            {/* No Data Found */}
            {filteredRefunds.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No refunds found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Refunds;
