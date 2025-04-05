import React from "react";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  category: "info" | "warning" | "danger" | "neutral";
  date?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Call your performance activities replied",
    message:
      "Our keep anyway post can’t strategy light about then. Low fastworks based mint hard shark.",
    time: "4h",
    category: "danger",
  },
  {
    id: 2,
    title: "Initiative meaningful hammer savvy get",
    message:
      "Crack sky well incompetent just crack businesses hands like lunch. Shelf-ware info plan algorithm own keep with.",
    time: "4h",
    category: "danger",
  },
  {
    id: 3,
    title: "Ping join seems hammer community",
    message:
      "Cross to pivot kimono should offline vendor board floor baked. Supervisor deploy sexy where management ballpark loop.",
    time: "15h",
    category: "info",
  },
  {
    id: 4,
    title: "Or in stakeholder break just",
    message:
      "Fastworks stakeholder eager cob high-level info bells red-flag finish. Field stop contribution users you’re value-added crank.",
    time: "10/6/13",
    category: "warning",
  },
];

const categoryColors: Record<Notification["category"], string> = {
  info: "bg-blue-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
  neutral: "bg-gray-500",
};

const Notifications: React.FC = () => {
  return (
    <div className="lg:w-full p-4 bg-white shadow-xl rounded-lg max-md:flex-col max-md:mt-20">
      {/* Header Section */}
      <div className="flex lg:justify-between lg:items-center mb-4 border-b pb-2 max-md:flex-col max-md:justify-start">
        <h2 className="text-lg font-bold max-md:text-left">NOTIFICATIONS</h2>
        <div className="flex self-end space-x-2 max-md:flex-col max-md:self-start">
          <select className="border px-3 py-2 rounded-lg">
            <option>Sort</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2 rounded-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
            Mark all as read
          </button>
        </div>
      </div>
      
      {/* Tabs Section */}
      <div className="flex border-b mb-4">
        <button className="px-4 py-2 font-semibold border-b-2 border-black">All</button>
        <button className="px-4 py-2 text-gray-500">Unread</button>
      </div>
      
      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start space-x-4 border-b pb-4"
          >
            <span
              className={`w-6 h-6 rounded-full flex-shrink-0 ${categoryColors[notification.category]}`}
            ></span>
            <div>
              <h3 className="font-semibold text-gray-900">{notification.title}</h3>
              <p className="text-gray-600 text-sm">{notification.message}</p>
              <span className="text-xs text-blue-500">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
