import React, { useState } from "react";
import PaymentDetailsModal from "./PaymentDetailsModal";

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

const TransactionsTable: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [selectedDeposit, setSelectedDeposit] = useState<Deposit | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Function to open the modal with the selected deposit details
  const openPaymentModal = (deposit: Deposit) => {
    setSelectedDeposit(deposit);
  };

  // Function to close the modal
  const closePaymentModal = () => {
    setSelectedDeposit(null);
  };

  return (
    <div className="overflow-x-auto border rounded-lg w-full">
      <table className="w-full border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="text-left text-gray-500 text-sm border-b bg-gray-100">
            <th className="px-4 py-3">Sender</th>
            <th className="px-4 py-3">Receiver</th>
            <th className="px-4 py-3">Method</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Date Created</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {deposits.map((deposit) => (
            <tr key={deposit.id} className="border-b hover:bg-gray-50 cursor-pointer" onClick={() => openPaymentModal(deposit)}>
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
                {/* Actions Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click event
                    toggleDropdown(deposit.id);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md"
                >
                  Actions ⌄
                </button>

                {/* Dropdown Menu */}
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

      {/* Payment Details Modal */}
      {selectedDeposit && (
        <PaymentDetailsModal  onClose={closePaymentModal} />
      )}
    </div>
  );
};

export default TransactionsTable;
