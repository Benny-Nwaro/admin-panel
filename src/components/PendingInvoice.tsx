import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js
import InvoiceCard from "./InvoiceCard";

interface Invoice {
  id: number;
  title: string;
  tutor: string;
  packageName: string;
  dayTime: string;
  startEndDate: string;
  amount: string;
  tutorImage: string;
}

const dummyInvoices: Invoice[] = [
  {
    id: 1,
    title: "Xylophone",
    tutor: "Wade Warren",
    packageName: "Monthly (4 lessons)",
    dayTime: "Tuesdays / 14:30–15:00",
    startEndDate: "20-05-2024 / 21-06-2024",
    amount: "$12",
    tutorImage: "/tutor.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Piano",
    tutor: "Wade Warren",
    packageName: "Monthly (4 lessons)",
    dayTime: "Mondays / 10:30–11:00",
    startEndDate: "20-06-2024 / 21-07-2024",
    amount: "$15",
    tutorImage: "/tutor.jpg",
  },
];

const dummyData = {
  user: {
    name: "Wade Warren",
    avatar: "https://via.placeholder.com/50",
    verified: true,
  },
  invoice: {
    number: "HDS4893434",
    issueDate: "12 July, 2024",
    amount: "$12 USD",
    tax: "$0 USD",
    total: "$12 USD",
  },
  lessonDetails: {
    name: "Xylophone",
    location: "Online",
    package: "Monthly (4 lessons)",
    frequency: "Weekly",
    days: "Tuesdays",
    dates: ["01/08/2024", "08/08/2024", "15/08/2024", "22/08/2024"],
    duration: "30 Minutes",
    startTime: "14:30",
    endTime: "15:00",
  },
};

const PendingInvoices: React.FC = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleViewInvoice = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };

  const closeOverlay = () => {
    setSelectedInvoice(null);
  };

  return (
    <div className="w-full bg-white p-6 rounded-3xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Pending invoices</h2>
        <div className="flex items-center space-x-2">
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            {dummyInvoices.length}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm text-gray-600">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left px-4">Title</th>
              <th className="py-3 text-left px-4">Tutor</th>
              <th className="py-3 text-left px-4">Package</th>
              <th className="py-3 text-left px-4">Day/Time</th>
              <th className="py-3 text-left px-4">Start/End date</th>
              <th className="py-3 text-left px-4">Amount</th>
              <th className="py-3 text-left px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyInvoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b hover:bg-gray-50 transition-all duration-200"
              >
                <td className="py-4 px-4">
                  <span>{invoice.title}</span>
                </td>
                <td className="py-4 px-4 flex items-center space-x-4">
                  <Image
                    src={invoice.tutorImage}
                    alt={invoice.tutor}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span>{invoice.tutor}</span>
                </td>
                <td className="py-4 px-4">{invoice.packageName}</td>
                <td className="py-4 px-4">{invoice.dayTime}</td>
                <td className="py-4 px-4">{invoice.startEndDate}</td>
                <td className="py-4 px-4">{invoice.amount}</td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => handleViewInvoice(invoice)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                  >
                    View invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overlay */}
      {selectedInvoice && (
        <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-3xl ">
            <button
              onClick={closeOverlay}
              className="absolute top-3  text-gray-600 rounded-full p-2 hover:bg-gray-300"
            >
              ✕
            </button>
            <InvoiceCard
              user={{
                name: selectedInvoice.tutor,
                avatar: dummyData.user.avatar,
                verified: dummyData.user.verified,
              }}
              invoice={dummyData.invoice}
              lessonDetails={{
                ...dummyData.lessonDetails,
                name: selectedInvoice.title,
                package: selectedInvoice.packageName,
                days: selectedInvoice.dayTime.split(" / ")[0],
                startTime: selectedInvoice.dayTime.split(" / ")[1].split("–")[0],
                endTime: selectedInvoice.dayTime.split(" / ")[1].split("–")[1],
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingInvoices;
