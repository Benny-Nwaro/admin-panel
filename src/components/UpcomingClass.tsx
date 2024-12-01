import React, { useEffect, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import ToDoList from "./ToDoList"; // Assuming ToDoList is imported from the correct path

interface ClassCardProps {
  tutorName: string;
  className: string;
  date: string;
  time: string;
  venue: string;
  joined: boolean;
  imageUrl: string;
  onJoin: () => void;
  onReschedule: () => void;
}

const ClassCard: React.FC<ClassCardProps> = ({
  tutorName,
  className,
  date,
  time,
  venue,
  imageUrl,
  joined,
  onJoin,
  onReschedule,
}) => {
  const [isJoin, setIsJoin] = useState(true);
  const [isReschedule, setIsReschedule] = useState(true);

  useEffect(() => {
    joined ? setIsJoin(false) : setIsReschedule(false);
  }, [joined]);

  return (
    <div
      className="flex flex-col space-x-10 bg-white px-6 py-5 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
      onClick={joined ? onJoin : undefined} // Trigger onJoin when the class is joined
    >
      <div className="flex items-center justify-between">
        {/* Tutor and Class Info */}
        <div className="flex items-center gap-4">
          <img
            src={imageUrl}
            alt={`${tutorName}'s avatar`}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">
              Tutor: <span className="font-semibold">{tutorName}</span>
            </p>
            <p className="text-sm text-gray-700">
              Class: <span className="font-semibold">{className}</span>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            hidden={isJoin}
            onClick={onJoin}
            className="flex items-center gap-2 bg-blue-100 text-blue-500 font-bold text-xs px-4 py-2 rounded-full hover:bg-blue-200 transition"
          >
            <BsCameraVideo size={16} />
            Join Class
          </button>
          <button
            hidden={isReschedule}
            onClick={onReschedule}
            className="flex items-center gap-2 bg-blue-100 text-blue-500 font-bold text-xs px-4 py-2 rounded-full hover:bg-blue-200 transition"
          >
            <FiRefreshCw size={16} />
            Reschedule
          </button>
          <AiOutlineMessage className="text-blue-500 text-xl cursor-pointer" />
        </div>
      </div>

      {/* Date, Time, Venue */}
      <div className="flex justify-between mx-10 px-10 text-center">
        <div>
          <p className="text-xs font-semibold text-gray-500">Date</p>
          <p className="text-sm font-bold text-gray-700">{date}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500">Time</p>
          <p className="text-sm font-bold text-gray-700 ">{time}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500">Venue</p>
          <p className="text-sm font-bold text-gray-700 ">{venue}</p>
        </div>
      </div>
    </div>
  );
};

const UpcomingClasses: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const dummyData = [
    {
      tutorName: "Matt Samuel",
      className: "Piano 101",
      date: "20 May, 2024",
      time: "08:30–09:12am",
      venue: "Online",
      joined: true,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXxBP-uJ9G3KpSS-Yk9qHpd-wF7H9UqqWMA&s",
    },
    {
      tutorName: "Matt Samuel",
      className: "Piano 101",
      date: "20 May, 2024",
      time: "08:30–09:12am",
      venue: "Online",
      joined: false,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXxBP-uJ9G3KpSS-Yk9qHpd-wF7H9UqqWMA&s",
    },
    {
      tutorName: "Matt Samuel",
      className: "Piano 101",
      date: "20 May, 2024",
      time: "08:30–09:12am",
      venue: "Online",
      joined: false,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXxBP-uJ9G3KpSS-Yk9qHpd-wF7H9UqqWMA&s",
    },
  ];

  const handleJoin = () => {
    setOverlayVisible(true); // Display the ToDoList overlay
  };

  const closeOverlay = () => {
    setOverlayVisible(false); // Close the overlay when the close button is clicked
  };

  return (
    <div className="w-full">
      {/* Main Container */}
      <div className="w-full mx-auto bg-gray-100 rounded-3xl shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Upcoming Classes</h2>
          <button className="text-blue-500 font-bold text-sm hover:underline">
            See All
          </button>
        </div>

        {/* Class Cards */}
        <div className="space-y-6">
          {dummyData.map((classData, index) => (
            <ClassCard
              key={index}
              tutorName={classData.tutorName}
              className={classData.className}
              date={classData.date}
              time={classData.time}
              venue={classData.venue}
              imageUrl={classData.imageUrl}
              joined={classData.joined}
              onJoin={handleJoin} // Pass handleJoin function to onJoin prop
              onReschedule={() => alert("Reschedule clicked")}
            />
          ))}
        </div>
      </div>
      {overlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="relative bg-white p-6 rounded-lg max-w-lg w-full">
            <button
              onClick={closeOverlay}
              className="absolute top-2 right-2 text-red-500 text-xl"
            >
              X
            </button>
            <ToDoList /> {/* Render ToDoList component as overlay */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingClasses;
