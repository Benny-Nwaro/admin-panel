import React, { useState } from "react";
import { FaBell, FaCheckDouble, FaSort, FaSearch } from "react-icons/fa";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  category: "info" | "warning" | "danger" | "neutral";
  date?: string;
  isRead?: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Call your performance activities replied",
    message:
      "Our keep anyway post can’t strategy light about then. Low fastworks based mint hard shark.",
    time: "4h",
    category: "danger",
    isRead: false,
  },
  {
    id: 2,
    title: "Initiative meaningful hammer savvy get",
    message:
      "Crack sky well incompetent just crack businesses hands like lunch. Shelf-ware info plan algorithm own keep with.",
    time: "4h",
    category: "danger",
    isRead: true,
  },
  {
    id: 3,
    title: "Ping join seems hammer community",
    message:
      "Cross to pivot kimono should offline vendor board floor baked. Supervisor deploy sexy where management ballpark loop.",
    time: "15h",
    category: "info",
    isRead: false,
  },
  {
    id: 4,
    title: "Or in stakeholder break just",
    message:
      "Fastworks stakeholder eager cob high-level info bells red-flag finish. Field stop contribution users you’re value-added crank.",
    time: "10/6/13",
    category: "warning",
    isRead: true,
  },
];

const categoryColors: Record<Notification["category"], string> = {
  info: "bg-blue-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
  neutral: "bg-gray-500",
};

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selectedTab, setSelectedTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const filteredNotifications = notifications
    .filter((n) => {
      if (selectedTab === "unread") {
        return !n.isRead;
      }
      return true;
    })
    .filter((n) =>
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleTabClick = (tab: "all" | "unread") => {
    setSelectedTab(tab);
  };

  return (
    <div className="lg:w-full p-4 bg-white shadow-xl rounded-lg max-md:mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 border-b pb-2 max-md:flex-col max-md:items-start">
        <h2 className="text-lg font-bold flex items-center max-md:mb-2">
          <FaBell className="mr-2" /> Notifications
          {unreadCount > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">{unreadCount}</span>
          )}
        </h2>
        <div className="flex max-md:flex-col max-md:space-y-2">
        <div className="flex items-center space-x-2 max-md:w-full">
          <select className="border px-3 py-2 rounded-md text-sm flex-grow sm:flex-none">
            <option>
              <FaSort className="mr-2" /> Sort
            </option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <div className="relative flex-grow sm:flex-none">
            <input
              type="text"
              placeholder="Search notifications"
              className="border px-3 py-2 rounded-md w-full text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
        <button
            onClick={markAllAsRead}
            className="bg-blue-500 text-white px-3 py-2 rounded-md font-semibold text-sm flex items-center sm:flex-none"
            disabled={notifications.every((n) => n.isRead)}
          >
            <FaCheckDouble className="mr-2" /> Mark all as read
          </button>
        </div>
        </div>
   
      </div>

      {/* Tabs Section */}
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${
            selectedTab === "all" ? "border-black text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabClick("all")}
        >
          All ({notifications.length})
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${
            selectedTab === "unread" ? "border-black text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabClick("unread")}
        >
          Unread ({unreadCount})
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <p className="text-gray-500">No notifications here.</p>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start space-x-4 border-b pb-4 ${
                notification.isRead ? "bg-gray-50" : ""
              } hover:bg-gray-100 transition-colors cursor-pointer`}
              onClick={() => markAsRead(notification.id)}
            >
              <span
                className={`w-6 h-6 rounded-full flex-shrink-0 ${categoryColors[notification.category]}`}
              ></span>
              <div>
                <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                <p className="text-gray-600 text-sm">{notification.message}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-blue-500">{notification.time}</span>
                  {!notification.isRead && (
                    <span className="text-xs text-gray-400">(Unread)</span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;