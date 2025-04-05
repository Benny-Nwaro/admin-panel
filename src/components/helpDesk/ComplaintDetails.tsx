import React from "react";

interface ComplaintDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
  status: "Pending" | "Resolved";
  onResolve: () => void;
}

const ComplaintDetails: React.FC<ComplaintDetailsProps> = ({
  firstName,
  lastName,
  email,
  phone,
  subject,
  description,
  status,
  onResolve,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Complaints Details</h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === "Pending" ? "bg-yellow-400 text-white" : "bg-green-500 text-white"
          }`}
        >
          {status}
        </span>
      </div>

      {/* User Info */}
      <div className="grid grid-cols-2 gap-4 mt-4 border-b pb-4">
        <div>
          <p className="text-sm text-gray-500 font-semibold">First Name</p>
          <p className="text-md font-medium">{firstName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-semibold">Last Name</p>
          <p className="text-md font-medium">{lastName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-semibold">Email Address</p>
          <p className="text-md font-medium">{email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-semibold">Phone Number</p>
          <p className="text-md font-medium">{phone}</p>
        </div>
      </div>

      {/* Complaint Subject */}
      <div className="mt-4 border-b pb-4">
        <p className="text-sm text-gray-500 font-semibold">Subject</p>
        <p className="text-md font-medium">{subject}</p>
      </div>

      {/* Complaint Description */}
      <div className="mt-4">
        <p className="text-sm text-gray-500 font-semibold">Description</p>
        <p className="text-md text-gray-700">{description}</p>
      </div>

      {/* Action Button */}
      {status === "Pending" && (
        <button
          onClick={onResolve}
          className="mt-6 bg-green-600 text-white font-medium py-2 px-4 rounded-lg w-full hover:bg-green-700 transition"
        >
          Mark as Resolved
        </button>
      )}
    </div>
  );
};

export default ComplaintDetails;
