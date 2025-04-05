import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Payment {
  id: number;
  invoiceStatus: "Pending" | "Paying" | "Paid";
  bookingStatus: "Pending" | "Completed" | "Rejected";
  lesson: string;
  dateCreated: string;
  amount: string;
}

const paymentsData: Payment[] = [
  { id: 1, invoiceStatus: "Pending", bookingStatus: "Pending", lesson: "Private Lessons", dateCreated: "18 / 12 / 2024", amount: "$4.30" },
  { id: 2, invoiceStatus: "Pending", bookingStatus: "Completed", lesson: "Private Lessons", dateCreated: "18 / 12 / 2024", amount: "$4.30" },
  { id: 3, invoiceStatus: "Pending", bookingStatus: "Rejected", lesson: "Private Lessons", dateCreated: "18 / 12 / 2024", amount: "$4.30" },
  { id: 4, invoiceStatus: "Paying", bookingStatus: "Completed", lesson: "Private Lessons", dateCreated: "18 / 12 / 2024", amount: "$4.30" },
  { id: 5, invoiceStatus: "Paid", bookingStatus: "Completed", lesson: "Private Lessons", dateCreated: "18 / 12 / 2024", amount: "$4.30" },
];

const getStatusClass = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-500";
    case "Paying":
      return "bg-blue-500";
    case "Paid":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

const PaymentDetails: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="w-full bg-white  rounded-lg p-6">
      {/* Header Section */}
      <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="border p-4 rounded-lg text-center bg-gray-50">
          <p className="text-gray-500 text-sm">Payment Method</p>
          <p className="font-semibold">PayPal</p>
        </div>
        <div className="border p-4 rounded-lg text-center bg-gray-50">
          <p className="text-gray-500 text-sm">Account Holder</p>
          <p className="font-semibold">Oluwaseun Adegunju</p>
        </div>
        <div className="border p-4 rounded-lg text-center bg-gray-50">
          <p className="text-gray-500 text-sm">PayPal Email</p>
          <p className="font-semibold">seunadegunju@yahoo.com</p>
        </div>
        <div className="border p-4 rounded-lg text-center bg-gray-50">
          <p className="text-gray-500 text-sm">Currency</p>
          <p className="font-semibold">USD</p>
        </div>
      </div>

      {/* Completed Classes */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <p className="text-gray-600">Completed Classes</p>
          <div className="text-3xl font-bold bg-white border rounded-lg px-4 py-2 shadow">320</div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition">
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-sm">
              <th className="p-3">#</th>
              <th className="p-3">Invoice Status</th>
              <th className="p-3">Booking Status</th>
              <th className="p-3">Lesson</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentsData.map((payment) => (
              <React.Fragment key={payment.id}>
                <tr className="border-t bg-blue-50 hover:bg-blue-100 transition">
                  <td className="p-3">{payment.id}</td>
                  <td className="p-3">
                    <span className={`text-white px-3 py-1 rounded-lg text-sm ${getStatusClass(payment.invoiceStatus)}`}>
                      {payment.invoiceStatus}
                    </span>
                  </td>
                  <td className="p-3">{payment.bookingStatus}</td>
                  <td className="p-3 font-semibold">{payment.lesson}</td>
                  <td className="p-3">{payment.dateCreated}</td>
                  <td className="p-3">{payment.amount}</td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleRow(payment.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg flex items-center space-x-2 transition"
                    >
                      <span>Details</span>
                      {expandedRow === payment.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </td>
                </tr>

                {/* Expanded Row Content */}
                {expandedRow === payment.id && (
                  <tr className="border-t bg-gray-50 transition-all">
                    <td colSpan={7} className="p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div className="mb-2 sm:mb-0">
                          <p className="text-gray-500 text-sm">Transaction ID</p>
                          <p className="font-semibold">TXN-{payment.id}12345</p>
                        </div>
                        <div className="mb-2 sm:mb-0">
                          <p className="text-gray-500 text-sm">Payment Gateway</p>
                          <p className="font-semibold">Stripe</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Status</p>
                          <p className="font-semibold">{payment.invoiceStatus}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetails;
