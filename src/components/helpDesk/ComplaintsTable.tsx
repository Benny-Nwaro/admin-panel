import React from "react";

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
];

const ComplaintsTable: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">COMPLAINTS</h2>

      <div className="bg-white shadow-lg rounded-lg p-4">
        {/* Table Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold">All Complaints</h3>
          <div className="flex space-x-2">
            <button className="border px-3 py-1 rounded-lg text-gray-700">
              Sort ⌄
            </button>
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-1 rounded-lg focus:outline-none"
            />
          </div>
        </div>

        {/* Table */}
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
              {complaintsData.map((complaint, index) => (
                <tr
                  key={complaint.id}
                  className={`border-t text-sm ${
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
                    <button className="text-gray-600 hover:text-gray-800">
                      ⋮
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

export default ComplaintsTable;
