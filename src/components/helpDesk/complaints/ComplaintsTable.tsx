import React, { useState } from "react";
import ComplaintDetails from "./ComplaintDetails"; // adjust path if needed

interface Complaint {
  id: number;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  status: "Resolved" | "Pending";
}

const complaintsData: Complaint[] = [
  {
    id: 1,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Resolved",
  },
  {
    id: 2,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Pending",
  },
  {
    id: 3,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Resolved",
  },
  {
    id: 4,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Pending",
  },
  {
    id: 1,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Resolved",
  },
  {
    id: 2,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Pending",
  },
  {
    id: 3,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Resolved",
  },
  {
    id: 4,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Pending",
  },
  {
    id: 1,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Resolved",
  },
  {
    id: 2,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Pending",
  },
  {
    id: 3,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Resolved",
  },
  {
    id: 4,
    name: "Adenekan Aleem Ayomide",
    phone: "+2347067935319",
    email: "adenekanaleem@gmail.com",
    subject: "Payment Declined Error",
    message: "I tried making payments and..",
    status: "Pending",
  }
];



const ComplaintsTable: React.FC = () => {
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
const [sortBy, setSortBy] = useState<string | null>(null);

  const handleComplaintClick = (complaint: Complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleCloseModal = () => {
    setSelectedComplaint(null);
  };

  const handleSortChange = (criteria: string) => {
    
    setSortBy(criteria);
    setSortMenuOpen(false);
    // implement actual sort logic here if needed
  };
  const handleResolve = () => {
    if (selectedComplaint) {
      setSelectedComplaint({
        ...selectedComplaint,
        status: "Resolved",
      });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">COMPLAINTS</h2>

      <div className="bg-white  rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold">All Complaints</h3>
          <div className="flex space-x-2">
          <div className="relative">
  <button
    className="border px-3 py-1 rounded-lg text-gray-700 flex items-center gap-1"
    onClick={() => setSortMenuOpen(!sortMenuOpen)}
  >
    Sort ⌄
  </button>

  {sortMenuOpen && (
    <div className="absolute mt-2 w-40 bg-white border shadow-md rounded-lg z-10">
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => handleSortChange("name")}
      >
        By Name
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => handleSortChange("status")}
      >
        By Status
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => handleSortChange("date")}
      >
        By Date
      </button>
    </div>
  )}
</div>
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-1 rounded-lg focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-left text-sm">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Email Address</th>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
            {[...complaintsData]
              .sort((a, b) => {
                if (sortBy === "name") {
                  return a.name.localeCompare(b.name);
                } else if (sortBy === "status") {
                  return a.status.localeCompare(b.status);
                } else if (sortBy === "date") {
                  // Assuming you eventually add a date field
                  return 0; // placeholder
                }
                return 0;
              })
              .map((complaint, index) => (
                <tr
                  key={complaint.id}
                  onClick={() => handleComplaintClick(complaint)}
                  className={`cursor-pointer border-t text-sm transition hover:bg-blue-200 ${
                    index % 2 === 0 ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2 font-bold">{complaint.id}</td>
                  <td className="px-4 py-2">{complaint.name}</td>
                  <td className="px-4 py-2">{complaint.phone}</td>
                  <td className="px-4 py-2 font-semibold">{complaint.email}</td>
                  <td className="px-4 py-2">{complaint.subject}</td>
                  <td className="px-4 py-2">{complaint.message}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-lg text-white text-xs font-semibold ${
                        complaint.status === "Resolved"
                          ? "bg-green-500"
                          : "bg-orange-400"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="text-gray-600 hover:text-gray-800"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent row click
                      }}
                    >
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Complaint Details */}
      {selectedComplaint && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className=" p-6 rounded-2xl shadow-lg w-full max-w-2xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
            <ComplaintDetails
              firstName={selectedComplaint.name.split(" ")[0]}
              lastName={selectedComplaint.name.split(" ").slice(1).join(" ")}
              email={selectedComplaint.email}
              phone={selectedComplaint.phone}
              subject={selectedComplaint.subject}
              description={selectedComplaint.message}
              status={selectedComplaint.status}
              onResolve={handleResolve}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintsTable;
