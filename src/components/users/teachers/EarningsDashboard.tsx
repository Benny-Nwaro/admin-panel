import React from "react";
import { ChevronDown } from "lucide-react";

interface PaymentDetail {
  method: string;
  accountHolder: string;
  email: string;
  currency: string;
}

interface Earnings {
  total: string;
  monthly: string;
  pending: string;
}

interface ClassRecord {
  id: number;
  invoiceStatus: string;
  bookingStatus: string;
  lesson: string;
  date: string;
  amount: string;
}

const paymentDetails: PaymentDetail = {
  method: "PayPal",
  accountHolder: "Oluwaseun Adegunju",
  email: "seunadegunju@yahoo.com",
  currency: "USD",
};

const earnings: Earnings = {
  total: "$120,392.39",
  monthly: "$1,028.32",
  pending: "$300.00",
};

const classes: ClassRecord[] = [
  { id: 1, invoiceStatus: "Pending", bookingStatus: "Pending", lesson: "Private Lessons", date: "18 / 12 / 2024", amount: "$4.30" },
  { id: 2, invoiceStatus: "Pending", bookingStatus: "Completed", lesson: "Private Lessons", date: "18 / 12 / 2024", amount: "$4.30" },
  { id: 3, invoiceStatus: "Pending", bookingStatus: "Rejected", lesson: "Private Lessons", date: "18 / 12 / 2024", amount: "$4.30" },
  { id: 4, invoiceStatus: "Paid", bookingStatus: "Pending", lesson: "Private Lessons", date: "18 / 12 / 2024", amount: "$4.30" },
  { id: 5, invoiceStatus: "Paid", bookingStatus: "Completed", lesson: "Private Lessons", date: "18 / 12 / 2024", amount: "$4.30" },
];

const EarningsDashboard: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black min-h-screen p-6 text-white">
      {/* Left Panel: Earnings Summary */}
      <div className="bg-blue-900 text-white p-6 rounded-lg w-full lg:w-1/3 max-w-xs">
        <h2 className="text-lg font-semibold mb-4">Earnings Summary</h2>
        <p className="text-sm">Total Earnings to Date</p>
        <h1 className="text-3xl font-bold">{earnings.total}</h1>
        <p className="text-sm mt-4">Earnings this Month</p>
        <h2 className="text-2xl font-semibold">{earnings.monthly}</h2>
        <p className="text-sm mt-4">Pending Payments</p>
        <h2 className="text-2xl font-semibold text-red-500">{earnings.pending}</h2>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Edit Earnings</button>
      </div>

      {/* Right Panel: Payment Details & Completed Classes */}
      <div className="flex-1 bg-white text-black rounded-lg p-6 ml-0 lg:ml-6 mt-6 lg:mt-0">
        {/* Payment Details */}
        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100 p-4 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Payment Method</p>
            <h3 className="font-semibold">{paymentDetails.method}</h3>
          </div>
          <div>
            <p className="text-sm text-gray-600">Account Holder Name</p>
            <h3 className="font-semibold">{paymentDetails.accountHolder}</h3>
          </div>
          <div>
            <p className="text-sm text-gray-600">PayPal Email</p>
            <h3 className="font-semibold">{paymentDetails.email}</h3>
          </div>
          <div>
            <p className="text-sm text-gray-600">Currency</p>
            <h3 className="font-semibold">{paymentDetails.currency}</h3>
          </div>
        </div>

        {/* Completed Classes */}
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-lg font-semibold">Completed Classes</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Export</button>
        </div>
        <h1 className="text-4xl font-bold text-blue-500 mt-2">320</h1>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
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
              {classes.map((record) => (
                <tr key={record.id} className="border-t even:bg-blue-50">
                  <td className="p-3">{record.id}</td>
                  <td className="p-3 font-semibold">{record.invoiceStatus}</td>
                  <td className="p-3 font-semibold">{record.bookingStatus}</td>
                  <td className="p-3">{record.lesson}</td>
                  <td className="p-3">{record.date}</td>
                  <td className="p-3">{record.amount}</td>
                  <td className="p-3">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-lg flex items-center">
                      <span>Actions</span> <ChevronDown size={14} className="ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EarningsDashboard;
