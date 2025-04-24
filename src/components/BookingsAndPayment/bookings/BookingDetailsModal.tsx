import React from "react";

interface BookingDetailsProps {
  lesson: {
    name: string;
    location: string;
    status: "Completed" | "Pending" | "Canceled";
    package: string;
    frequency: string;
    days: string;
    dates: string[];
    duration: string;
    rating: number;
    createdAt: string;
  };
  student: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  teacher: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  onClose: () => void;
}

const BookingDetailsModal: React.FC<BookingDetailsProps> = ({ lesson, student, teacher, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Booking Details</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>

        {/* LESSON DETAILS */}
        <div className="mt-2 p-4 border-2 rounded-lg">
          <h3 className="font-bold mb-2">LESSON DETAILS</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Lesson Name:</p> <p className="font-semibold">{lesson.name}</p>
            <p>Lesson Location:</p> <p className="font-semibold">{lesson.location}</p>
            <p>Booking Status:</p>
            <p>
              <span className={`px-3 py-1 text-white rounded-full text-xs ${lesson.status === "Completed" ? "bg-green-500" : lesson.status === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}>
                {lesson.status}
              </span>
            </p>
            <p>Package:</p> <p className="font-semibold">{lesson.package}</p>
            <p>Lesson Frequency:</p> <p className="font-semibold">{lesson.frequency}</p>
            <p>Lesson Days:</p> <p className="font-semibold">{lesson.days}</p>
            <p>Lesson Dates:</p> <p className="font-semibold">{lesson.dates.join(", ")}</p>
            <p>Duration:</p> <p className="font-semibold">{lesson.duration}</p>
            <p>Ratings:</p> <p className="font-semibold">{lesson.rating}</p>
            <p>Booking Created At:</p> <p className="font-semibold">{lesson.createdAt}</p>
          </div>
        </div>

        {/* STUDENT DETAILS */}
        <div className="mt-2 p-4 border-2 rounded-lg">
          <h3 className="font-bold mb-2">STUDENT DETAILS</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Full Name:</p> <p className="font-semibold">{student.name}</p>
            <p>Email:</p> <p className="font-semibold">{student.email}</p>
            <p>Phone Number:</p> <p className="font-semibold">{student.phone}</p>
            <p>Address:</p> <p className="font-semibold">{student.address}</p>
          </div>
        </div>

        {/* TEACHER DETAILS */}
        <div className="mt-2 p-4 border-2 rounded-lg">
          <h3 className="font-bold mb-2">TEACHER DETAILS</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Full Name:</p> <p className="font-semibold">{teacher.name}</p>
            <p>Email:</p> <p className="font-semibold">{teacher.email}</p>
            <p>Phone Number:</p> <p className="font-semibold">{teacher.phone}</p>
            <p>Address:</p> <p className="font-semibold">{teacher.address}</p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-3 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Mark as paid</button>
          <div className="space-x-3">
            <button onClick={onClose} className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white">Cancel</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Send Invoice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
