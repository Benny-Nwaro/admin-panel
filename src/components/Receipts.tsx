import React, { useState } from "react";

interface Transaction {
  id: number;
  txnId: string;
  date: string;
  course: string;
  tutor: string;
  amount: string;
}

const transactions: Transaction[] = [
  { id: 1, txnId: "#234820823", date: "12/07/2024", course: "Piano", tutor: "John Doe", amount: "$20.00" },
  { id: 2, txnId: "#234820823", date: "12/07/2024", course: "Piano", tutor: "John Doe", amount: "$20.00" },
];

const Receipts: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});

  const handleRowClick = (id: number) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  const handleReceiptClick = (txnId: string) => {
    alert(`Viewing receipt for Transaction: ${txnId}`);
  };

  const toggleDropdown = (id: number) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="overflow-x-auto p-4 bg-blue-50 rounded-lg shadow-md">
      <table className="w-full text-left bg-white rounded-lg">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2">Txn ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Tutor</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr
              key={txn.id}
              onClick={() => handleRowClick(txn.id)}
              className={`cursor-pointer transition ${
                selectedRow === txn.id ? "bg-blue-200" : "hover:bg-blue-50"
              }`}
            >
              <td className="px-4 py-2">{txn.txnId}</td>
              <td className="px-4 py-2">{txn.date}</td>
              <td className="px-4 py-2">{txn.course}</td>
              <td className="px-4 py-2">{txn.tutor}</td>
              <td className="px-4 py-2">{txn.amount}</td>
              <td className="px-4 py-2 flex items-center space-x-2">
                {/* Receipt Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReceiptClick(txn.txnId);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <i className="fas fa-receipt"></i>
                </button>
                {/* Menu Icon */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(txn.id);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  {dropdownOpen[txn.id] && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                      <ul>
                        <li
                          onClick={() => alert("View Details")}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          View Details
                        </li>
                        <li
                          onClick={() => alert("Delete Transaction")}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Receipts;
