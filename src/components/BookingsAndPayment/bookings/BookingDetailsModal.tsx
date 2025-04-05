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
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Booking Details</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>

        {/* LESSON DETAILS */}
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="font-bold mb-2">LESSON DETAILS</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Lesson name: <span className="font-semibold">{lesson.name}</span></p>
            <p>Lesson location: <span className="font-semibold">{lesson.location}</span></p>
            <p>Booking Status: 
              <span className={`ml-2 px-3 py-1 text-white rounded-full text-xs ${lesson.status === "Completed" ? "bg-green-500" : lesson.status === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}>
                {lesson.status}
              </span>
            </p>
            <p>Package: <span className="font-semibold">{lesson.package}</span></p>
            <p>Lesson frequency: <span className="font-semibold">{lesson.frequency}</span></p>
            <p>Lesson days: <span className="font-semibold">{lesson.days}</span></p>
            <p>Lesson dates: <span className="font-semibold">{lesson.dates.join(", ")}</span></p>
            <p>Duration: <span className="font-semibold">{lesson.duration}</span></p>
            <p>Ratings: <span className="font-semibold">{lesson.rating}</span></p>
            <p>Booking Created At: <span className="font-semibold">{lesson.createdAt}</span></p>
          </div>
        </div>

        {/* STUDENT DETAILS */}
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="font-bold mb-2">STUDENT DETAILS</h3>
          <p>Full Name: <span className="font-semibold">{student.name}</span></p>
          <p>Email: <span className="font-semibold">{student.email}</span></p>
          <p>Phone Number: <span className="font-semibold">{student.phone}</span></p>
          <p>Address: <span className="font-semibold">{student.address}</span></p>
        </div>

        {/* TEACHER DETAILS */}
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="font-bold mb-2">TEACHER DETAILS</h3>
          <p>Full Name: <span className="font-semibold">{teacher.name}</span></p>
          <p>Email: <span className="font-semibold">{teacher.email}</span></p>
          <p>Phone Number: <span className="font-semibold">{teacher.phone}</span></p>
          <p>Address: <span className="font-semibold">{teacher.address}</span></p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Mark as paid</button>
          <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Invoice</button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
