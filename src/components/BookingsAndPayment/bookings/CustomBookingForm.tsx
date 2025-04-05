import { useState } from "react";
import { FaSearch, FaUser, FaCalendarAlt } from "react-icons/fa";

const CustomBookingForm = () => {
  const [bookingType, setBookingType] = useState("Free Trial");
  const [client, setClient] = useState("");
  const [subject, setSubject] = useState("");
  const [tutor, setTutor] = useState("");
  const [lesson, setLesson] = useState("");
  const [location, setLocation] = useState("");
  const [packageType, setPackageType] = useState("");
  const [startDate, setStartDate] = useState("");

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-lg font-bold mb-4">CREATE CUSTOM BOOKING</h2>

      {/* Booking Type */}
      <div className="mb-4">
        <label className="block font-semibold">Booking type</label>
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="bookingType"
              value="Free Trial"
              checked={bookingType === "Free Trial"}
              onChange={() => setBookingType("Free Trial")}
              className="accent-blue-500"
            />
            <span>Free Trial</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="bookingType"
              value="Subscription"
              checked={bookingType === "Subscription"}
              onChange={() => setBookingType("Subscription")}
              className="accent-blue-500"
            />
            <span>Subscription</span>
          </label>
        </div>
      </div>

      {/* Client Field */}
      <div className="mb-4 relative">
        <label className="block font-semibold">Client</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Add client information"
            className="w-full border px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <FaUser className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="block font-semibold">Subject (Optional)</label>
        <input
          type="text"
          placeholder="Enter Subject"
          className="w-full border px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      {/* Tutor Field */}
      <div className="mb-4 relative">
        <label className="block font-semibold">Tutor</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter tutor name"
            className="w-full border px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
            value={tutor}
            onChange={(e) => setTutor(e.target.value)}
          />
        </div>
      </div>

      {/* Lesson Name */}
      <div className="mb-4 relative">
        <label className="block font-semibold">Lesson name</label>
        <div className="relative">
          <select
            className="w-full border px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
          >
            <option>Select a lesson</option>
            <option>Piano Lessons</option>
            <option>Guitar Lessons</option>
          </select>
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Location Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Location</label>
        <select
          className="w-full border px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option>Select a location</option>
          <option>Online</option>
          <option>In-Person</option>
        </select>
      </div>

      {/* Lesson Package Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Lesson package</label>
        <select
          className="w-full border px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
        >
          <option>Select a package</option>
          <option>Basic</option>
          <option>Premium</option>
        </select>
      </div>

      {/* Start Date & Time */}
      <div className="mb-4">
        <label className="block font-semibold">Start Date/Time</label>
        <div className="flex space-x-2">
          <div className="relative w-1/2">
            <input
              type="date"
              className="w-full border px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button className="w-1/2 border px-4 py-2 rounded-md bg-gray-100">
            Select times
          </button>
        </div>
      </div>

      {/* Proceed Button */}
      <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Proceed
      </button>
    </div>
  );
};

export default CustomBookingForm;
