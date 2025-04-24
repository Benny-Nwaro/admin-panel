import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import BookingDetailsModal from "./BookingDetailsModal";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const times = Array.from({ length: 10 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour === 0 ? 12 : hour}: ${minute} ${hour < 12 ? "AM" : "PM"}`;
});

const TimeSelectionGrid = () => {
  const [selectedSlots, setSelectedSlots] = useState<{ [key: string]: boolean }>({});
  const [showModal, setShowModal] = useState(false);

  const toggleSlot = (day: string, time: string) => {
    const key = `${day}-${time}`;
    setSelectedSlots((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const lesson = {
    name: "Piano Basics",
    location: "Abuja",
    status: "Pending" as const,
    package: "Beginner",
    frequency: "Weekly",
    days: Object.keys(selectedSlots)
      .filter((key) => selectedSlots[key])
      .map((key) => key.split("-")[0])
      .join(", "),
    dates: Object.keys(selectedSlots).filter((key) => selectedSlots[key]),
    duration: "1 hour",
    rating: 4.5,
    createdAt: new Date().toLocaleDateString(),
  };

  const student = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+2348012345678",
    address: "Wuse 2, Abuja",
  };

  const teacher = {
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+2348098765432",
    address: "Gwarimpa, Abuja",
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <>
      {!showModal && (
        <div className="p-6 bg-white max-w-5xl mx-auto">
          <h2 className="text-lg font-bold mb-4">Select times</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border-2 border-gray-300"></th>
                  {days.map((day) => (
                    <th key={day} className="p-3 border-2 border-gray-300 text-center">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {times.map((time) => (
                  <tr key={time} className="text-center">
                    <td className="p-2 border-2 border-gray-300">{time}</td>
                    {days.map((day) => {
                      const key = `${day}-${time}`;
                      return (
                        <td
                          key={key}
                          className={`p-4 border-2 border-gray-300 cursor-pointer ${
                            selectedSlots[key] ? "bg-[#F5AA00] text-white" : "bg-white"
                          }`}
                          onClick={() => toggleSlot(day, time)}
                        >
                          {selectedSlots[key] && (
                            <FaCheck className="mx-auto bg-white text-[#F5AA00] rounded-full" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 flex items-center justify-center"
            >
              <FaCheck className="mr-2" /> Submit
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <BookingDetailsModal
          lesson={lesson}
          student={student}
          teacher={teacher}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default TimeSelectionGrid;
