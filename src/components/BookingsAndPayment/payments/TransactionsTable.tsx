import React, { useState, useMemo } from "react";
import PaymentDetailsModal from "./PaymentDetailsModal";
import { Search } from "lucide-react";

type Deposit = {
  id: number;
  sender: string;
  senderRole: string;
  receiver: string;
  receiverRole: string;
  method: string;
  status: "Pending" | "Success" | "Failed";
  dateCreated: string;
  amount: string;
};

const deposits: Deposit[] = [
  { id: 1, sender: "Adenekan Aleem Ayomide", senderRole: "Student", receiver: "Bekwa Undie", receiverRole: "Blog Admin", method: "PayPal", status: "Pending", dateCreated: "18 / 12 / 2024", amount: "$10000" },
  { id: 2, sender: "Adenekan Aleem Ayomide", senderRole: "Student", receiver: "Bekwa Undie", receiverRole: "Blog Admin", method: "Credit Card", status: "Success", dateCreated: "18 / 12 / 2024", amount: "$10000" },
  { id: 3, sender: "Adenekan Aleem Ayomide", senderRole: "Student", receiver: "Bekwa Undie", receiverRole: "Blog Admin", method: "Direct Deposit", status: "Failed", dateCreated: "18 / 12 / 2024", amount: "$10000" },
  { id: 4, sender: "Adenekan Aleem Ayomide", senderRole: "Student", receiver: "Bekwa Undie", receiverRole: "Blog Admin", method: "PayPal", status: "Failed", dateCreated: "18 / 12 / 2024", amount: "$10000" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-400 text-white";
    case "Success":
      return "bg-green-500 text-white";
    case "Failed":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-400 text-white";
  }
};

type SortKey = keyof Deposit;

const TransactionsTable: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [selectedDeposit, setSelectedDeposit] = useState<Deposit | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("sender");

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const openPaymentModal = (deposit: Deposit) => {
    setSelectedDeposit(deposit);
  };

  const closePaymentModal = () => {
    setSelectedDeposit(null);
  };

  const filteredDeposits = useMemo(() => {
    return deposits
      .filter((d) =>
        [d.sender, d.receiver, d.method, d.status].some((field) =>
          field.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
  }, [searchQuery, sortKey]);

  return (
    <div className="overflow-x-auto border rounded-lg w-full">
     {/* Search and Sort Controls */}
      <div className="flex justify-end items-center gap-4 p-4 flex-wrap">
      <div className="relative w-full sm:w-72">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-400 rounded-full w-full outline-blue-500"
        />
      </div>

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
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-500 text-sm border-b bg-gray-100">
            <th className="px-4 py-3">#</th> {/* <-- New Column */}
            <th className="px-4 py-3">Sender</th>
            <th className="px-4 py-3">Receiver</th>
            <th className="px-4 py-3">Method</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Date Created</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDeposits.map((deposit, index) => (
            <tr
              key={deposit.id}
              className={`border-b hover:bg-gray-50 cursor-pointer ${
                deposit.id % 2 !== 0 ? "bg-blue-50" : "bg-white"
              }`}
              onClick={() => openPaymentModal(deposit)}
            >
              <td className="px-4 py-4 font-medium">{index + 1}</td> {/* <-- Row Number */}
              <td className="px-4 py-4">
                <div className="font-semibold">{deposit.sender}</div>
                <div className="text-gray-500 text-sm">{deposit.senderRole}</div>
              </td>
              <td className="px-4 py-4">
                <div className="font-semibold">{deposit.receiver}</div>
                <div className="text-gray-500 text-sm">{deposit.receiverRole}</div>
              </td>
              <td className="px-4 py-4 font-medium">{deposit.method}</td>
              <td className="px-4 py-4">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(deposit.status)}`}>
                  {deposit.status}
                </span>
              </td>
              <td className="px-4 py-4">{deposit.dateCreated}</td>
              <td className="px-4 py-4 font-medium">{deposit.amount}</td>
              <td className="px-4 py-4 relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(deposit.id);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md"
                >
                  Actions ⌄
                </button>
                {openDropdown === deposit.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                    <ul className="text-sm text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mark as Paid</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Issue Refunds</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cancel</li>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDeposit && <PaymentDetailsModal onClose={closePaymentModal} />}
    </div>
  );
};

export default TransactionsTable;
