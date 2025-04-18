import { motion, AnimatePresence } from "framer-motion";
import { X, Clock } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ScheduleEmailModal = ({ open, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [time, setTime] = useState("09:00");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClickOutside]);

  const today = new Date();
  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const days = getDaysInMonth(currentYear, currentMonth);

  const formatDateTime = (date: Date, time: string) => {
    const [hours, minutes] = time.split(":");
    date.setHours(Number(hours), Number(minutes));
    return date.toLocaleString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSchedule = () => {
    if (!selectedDate || !time) {
      setError("Please select both date and time.");
      setMessage("");
      return;
    }

    const scheduledTime = formatDateTime(new Date(selectedDate), time);
    setMessage(`Email scheduled for ${scheduledTime}`);
    setError("");
    onClose();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            ref={modalRef}
            className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold mb-4">Schedule Send</h2>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <button onClick={handlePrevMonth}>&lt;</button>
                <span className="font-medium">
                  {new Date(currentYear, currentMonth).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button onClick={handleNextMonth}>&gt;</button>
              </div>

              <div className="grid grid-cols-7 text-sm gap-1 text-center mb-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <div key={d} className="font-medium text-gray-600">{d}</div>
                ))}
                {days.map((day) => (
                  <button
                    key={day.toDateString()}
                    className={`py-1 rounded-md ${
                      selectedDate?.toDateString() === day.toDateString()
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-100"
                    }`}
                    onClick={() => setSelectedDate(day)}
                  >
                    {day.getDate()}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center gap-2 mb-1 text-sm text-gray-700">
                <Clock className="w-4 h-4" />
                Send at:
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border px-3 py-2 rounded-md"
              >
                {["09:00", "10:00", "11:00", "12:00", "14:00", "16:00", "18:00"].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {message && <p className="text-green-600 text-sm mb-2">{message}</p>}

            <div className="flex justify-end gap-4 mt-6 w-2/3">
              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 py-2 rounded-full hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSchedule}
                className="flex-1 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScheduleEmailModal;
