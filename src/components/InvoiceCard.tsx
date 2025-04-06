import Image from "next/image";
import React from "react";

interface InvoiceCardProps {
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  invoice: {
    number: string;
    issueDate: string;
    amount: string;
    tax: string;
    total: string;
  };
  lessonDetails: {
    name: string;
    location: string;
    package: string;
    frequency: string;
    days: string;
    dates: string[];
    duration: string;
    startTime: string;
    endTime: string;
  };
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({
  user,
  invoice,
  lessonDetails,
}) => {
  return (
    <div className="mx-auto bg-white rounded-3xl shadow-lg font-sans p-6 w-full max-w-7xl">
      {/* Header */}
      

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        
        {/* Invoice Details Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center bg-blue-500 text-white px-6 py-4 rounded-t-3xl">
        <Image
          className="w-12 h-12 rounded-full mr-4"
          src={user.avatar}
          alt={`${user.name}'s avatar`}
        />
        <div>
          <h3 className="text-lg font-bold">{user.name}</h3>
          {user.verified && (
            <div className="flex items-center text-sm text-blue-200">
              Verified
              <span className="w-3 h-3 bg-green-400 rounded-full ml-2"></span>
            </div>
          )}
        </div>
      </div>
          <h4 className="text-lg font-bold mb-4">Invoice Details</h4>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Invoice Number</span>
            <span>{invoice.number}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Issue Date</span>
            <span>{invoice.issueDate}</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="font-bold text-gray-700 mb-2">Payment Summary</h5>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Amount</span>
              <span>{invoice.amount}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Tax</span>
              <span>{invoice.tax}</span>
            </div>
            <div className="flex justify-between text-blue-500 font-bold">
              <span>Total</span>
              <span>{invoice.total}</span>
            </div>
            
          </div>
        </div>

        {/* Lesson Details Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-2xl shadow-sm">
          <h4 className="text-lg font-bold mb-4">Lesson Details</h4>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Lesson Name</span>
            <span>{lessonDetails.name}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Lesson Location</span>
            <span>{lessonDetails.location}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Package</span>
            <span>{lessonDetails.package}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Frequency</span>
            <span>{lessonDetails.frequency}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Lesson Days</span>
            <span>{lessonDetails.days}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Dates</span>
            <span>{lessonDetails.dates.join(", ")}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Duration</span>
            <span>{lessonDetails.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Time</span>
            <span>
              {lessonDetails.startTime} - {lessonDetails.endTime}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <button className="flex justify-self-center text-center px-20 w-1/3 mt-6 py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold rounded-full hover:from-red-500 hover:to-pink-500">
        Pay Invoice
      </button>
    </div>
  );
};

export default InvoiceCard;
