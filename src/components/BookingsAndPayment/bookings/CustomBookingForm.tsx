import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import TimeSelectionGrid from "./TimeSelectionGrid";

const CustomBookingForm = () => {
  const [bookingType, setBookingType] = useState("Free Trial");
  const [client, setClient] = useState("");
  const [subject, setSubject] = useState("");
  const [tutor, setTutor] = useState("");
  const [lesson, setLesson] = useState("");
  const [location, setLocation] = useState("");
  const [packageType, setPackageType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [showTimeGrid, setShowTimeGrid] = useState(false);

  const inputClass =
    "w-full border-2 border-gray-300 px-5 py-3 text-lg rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  const isFormValid =
    client.trim() &&
    tutor.trim() &&
    lesson !== "Select a lesson" &&
    location !== "" &&
    packageType !== "" &&
    startDate !== "";

  return (
    <>
      {showTimeGrid && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 p-8 overflow-y-auto">
          <div className="relative bg-white rounded-3xl p-6 max-w-5xl mx-auto">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowTimeGrid(false)}
                className="text-gray-500 text-lg font-semibold hover:text-red-600"
              >
                Close
              </button>
            </div>
            <TimeSelectionGrid />
          </div>
        </div>
      )}

      <div className="p-10 bg-white rounded-xl max-w-5xl mx-auto shadow-lg">
        <h2 className="text-xl font-bold mb-8 text-center">CREATE CUSTOM BOOKING</h2>

        {/* Booking Type */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-center">
          <label className="font-semibold text-lg">Booking type</label>
          <div className="flex space-x-6 col-span-2">
            <label className="flex items-center space-x-2 text-lg">
              <input
                type="radio"
                name="bookingType"
                value="Free Trial"
                checked={bookingType === "Free Trial"}
                onChange={() => setBookingType("Free Trial")}
                className="accent-blue-600 w-5 h-5"
              />
              <span>Free Trial</span>
            </label>
            <label className="flex items-center space-x-2 text-lg">
              <input
                type="radio"
                name="bookingType"
                value="Subscription"
                checked={bookingType === "Subscription"}
                onChange={() => setBookingType("Subscription")}
                className="accent-blue-600 w-5 h-5"
              />
              <span>Subscription</span>
            </label>
          </div>
        </div>

        {/* Client */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-center">
          <label className="font-semibold text-lg">Client</label>
          <div className="relative col-span-2">
            <input
              type="text"
              placeholder="Add client information"
              className={inputClass}
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
            <FaUser className="absolute right-4 top-4 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Subject */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-center">
          <label className="font-semibold text-lg">Subject (Optional)</label>
          <input
            type="text"
            placeholder="Enter Subject"
            className={`col-span-2 ${inputClass}`}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Tutor */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-center">
          <label className="font-semibold text-lg">Tutor</label>
          <input
            type="text"
            placeholder="Enter tutor name"
            className={`col-span-2 ${inputClass}`}
            value={tutor}
            onChange={(e) => setTutor(e.target.value)}
          />
        </div>

        {/* Lesson */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-center">
          <label className="font-semibold text-lg">Lesson name</label>
          <div className="relative col-span-2">
            <select
              className={inputClass}
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
            >
              <option>Select a lesson</option>
              <option>Piano Lessons</option>
              <option>Guitar Lessons</option>
            </select>
            <FaSearch className="absolute right-4 top-4 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-center">
          <label className="font-semibold text-lg">Location</label>
          <select
            className={`col-span-2 ${inputClass}`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Select a location</option>
            <option>Online</option>
            <option>In-Person</option>
          </select>
        </div>

        {/* Package */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-center">
          <label className="font-semibold text-lg">Lesson package</label>
          <select
            className={`col-span-2 ${inputClass}`}
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
          >
            <option>Select a package</option>
            <option>Basic</option>
            <option>Premium</option>
          </select>
        </div>

        {/* Start Date */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-center">
          <label className="font-semibold text-lg">Start Date/Time</label>
          <div className="flex col-span-2 space-x-4">
            <div className="relative w-1/2">
              <input
                type="date"
                className={inputClass}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowTimeGrid(true)}
              className="w-1/2 border-2 border-gray-300 px-5 py-3 text-lg rounded-md bg-white hover:border-blue-500"
            >
              Select times
            </button>
          </div>
        </div>

        {/* Proceed */}
        <div className="mt-8 flex justify-center">
          <button
            className={`w-1/4 text-white text-lg font-semibold px-6 py-4 rounded-full transition duration-200 ${
              isFormValid
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomBookingForm;
