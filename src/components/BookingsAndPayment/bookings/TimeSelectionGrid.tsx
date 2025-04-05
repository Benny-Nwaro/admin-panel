import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const times = Array.from({ length: 10 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour === 0 ? 12 : hour}: ${minute} ${hour < 12 ? "AM" : "PM"}`;
});

const TimeSelectionGrid = () => {
  const [selectedSlots, setSelectedSlots] = useState<{ [key: string]: boolean }>({});

  const toggleSlot = (day: string, time: string) => {
    const key = `${day}-${time}`;
    setSelectedSlots((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Select times</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-300"></th>
              {days.map((day) => (
                <th key={day} className="p-3 border border-gray-300 text-center">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time) => (
              <tr key={time} className="text-center">
                <td className="p-2 border border-gray-300">{time}</td>
                {days.map((day) => {
                  const key = `${day}-${time}`;
                  return (
                    <td
                      key={key}
                      className={`p-2 border border-gray-300 cursor-pointer ${
                        selectedSlots[key] ? "bg-orange-500 text-white" : "bg-white"
                      }`}
                      onClick={() => toggleSlot(day, time)}
                    >
                      {selectedSlots[key] && <FaCheck className="mx-auto" />}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center">
        <FaCheck className="mr-2" /> Submit
      </button>
    </div>
  );
};

export default TimeSelectionGrid;
