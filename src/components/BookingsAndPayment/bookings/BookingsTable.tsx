import { useState } from "react";
import CustomBookingForm from "./CustomBookingForm";
import SendReminderModal from "./SendReminderModal";

type Booking = {
  id: number;
  email: string;
  student: string;
  lesson: string;
  subLesson: string;
  teacher: string;
  status: "Pending Payment" | "Completed" | "Rejected";
  date: string;
  amount: string;
};

const initialBookings: Booking[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  email: `student${i + 1}@email.com`,
  student: `Student ${i + 1}`,
  lesson: "Private Lessons",
  subLesson: "Intermediate Piano Lessons",
  teacher: "Bekwa Undie",
  status: i % 3 === 0 ? "Pending Payment" : i % 3 === 1 ? "Completed" : "Rejected",
  date: "18 / 12 / 2024",
  amount: "per hour",
}));

const statusColors: Record<Booking["status"], string> = {
  "Pending Payment": "bg-yellow-400 text-white",
  "Completed": "bg-green-500 text-white",
  "Rejected": "bg-red-500 text-white",
};

const BookingsTable = () => {
  const [search, setSearch] = useState("");
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCustomBookingForm, setShowCustomBookingForm] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [reminderEmail, setReminderEmail] = useState<string | null>(null);

  const bookingsPerPage = 5;

  const handleSort = () => {
    const sortedBookings = [...bookings].sort((a, b) =>
      sortOrder === "asc"
        ? a.student.localeCompare(b.student)
        : b.student.localeCompare(a.student)
    );
    setBookings(sortedBookings);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleDelete = (id: number) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const handleEdit = (booking: Booking) => {
    setEditingBooking(booking);
    setShowDropdown(null);
  };

  const handleCreateBooking = () => {
    setShowCustomBookingForm(true);
  };

  const handleSendReminder = (message: string) => {
    console.log(`Sending reminder to ${reminderEmail}:`, message);
    // Add API logic here
    setShowReminderModal(false);
    setReminderEmail(null);
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.student.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);
  const currentBookings = filteredBookings.slice(
    (currentPage - 1) * bookingsPerPage,
    currentPage * bookingsPerPage
  );

  if (showCustomBookingForm) {
    return (
      <div className="p-6 bg-white rounded-lg">
        <span
          className="hover:text-blue-500 hover:cursor-pointer font-bold"
          onClick={() => setShowCustomBookingForm(false)}
        >
          Go back
        </span>
        <CustomBookingForm />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">ALL BOOKINGS</h2>
        <div className="flex space-x-2">
          <button className="border px-3 py-2 rounded-md" onClick={handleSort}>
            Sort {sortOrder === "asc" ? "↑" : "↓"}
          </button>
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleCreateBooking}
          >
            Create Custom Booking
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600">
              <th className="p-3">#</th>
              <th className="p-3">Students</th>
              <th className="p-3">Lessons</th>
              <th className="p-3">Teacher</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.map((booking) => (
              <tr key={booking.id} className="border-b even:bg-blue-50">
                <td className="p-3">{booking.id}</td>
                <td className="p-3 font-semibold">
                  {editingBooking?.id === booking.id ? (
                    <input
                      className="border px-2 py-1 rounded"
                      value={editingBooking.student}
                      onChange={(e) =>
                        setEditingBooking({ ...editingBooking, student: e.target.value })
                      }
                    />
                  ) : (
                    booking.student
                  )}
                </td>
                <td className="p-3">
                  <span className="font-semibold">{booking.lesson}</span>
                  <br />
                  <span className="text-sm text-gray-500">{booking.subLesson}</span>
                </td>
                <td className="p-3">{booking.teacher}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[booking.status]}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="p-3">{booking.date}</td>
                <td className="p-3">{booking.amount}</td>
                <td className="p-3 relative">
                  <button
                    className="border px-2 py-1 rounded bg-blue-500 text-white"
                    onClick={() =>
                      setShowDropdown(showDropdown === booking.id ? null : booking.id)
                    }
                  >
                    Actions ▼
                  </button>

                  {showDropdown === booking.id && (
                    <div className="absolute right-0 mt-1 bg-white border rounded shadow-lg z-10">
                      <button
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                        onClick={() => handleDelete(booking.id)}
                      >
                        Cancel booking
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 w-full text-left"
                        onClick={() => {
                          if (booking.email) {
                            setReminderEmail(booking.email);
                            setShowReminderModal(true);
                          } else {
                            console.error("Booking email is missing");
                          }
                          setShowDropdown(null);
                        }}
                      >
                        Send Reminder
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-100 w-full text-left"
                        onClick={() => handleEdit(booking)}
                      >
                        Mark as Paid
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-100 w-full text-left"
                        onClick={() => alert("Payment accepted")}
                      >
                        Accept Payment
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-yellow-600 hover:bg-gray-100 w-full text-left"
                        onClick={() => alert("Teacher reassigned")}
                      >
                        Re-assign Teacher
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 w-full text-left"
                        onClick={() => handleEdit(booking)}
                      >
                        Issue Refund
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          disabled={currentPage === 1}
          className="px-3 py-2 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          className="px-3 py-2 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {showReminderModal && reminderEmail && (
        <SendReminderModal
          email={reminderEmail}
          onClose={() => {
            setShowReminderModal(false);
            setReminderEmail(null);
          }}
          onSend={handleSendReminder}
        />
      )}
    </div>
  );
};

export default BookingsTable;
