import Image from "next/image";
import React from "react";

interface Chat {
  id: number;
  users: { name: string; avatar: string }[];
  message: string;
  time: string;
  isActive: boolean;
}

const chats: Chat[] = [
  {
    id: 1,
    users: [
      { name: "Eleanor Pena", avatar: "/avatars/user1.jpg" },
      { name: "Remi Martins", avatar: "/avatars/user2.jpg" },
    ],
    message: "Hello, I have a question about a product's compatibility with my devi...",
    time: "12:45 PM",
    isActive: false,
  },
  {
    id: 2,
    users: [
      { name: "Darrell Steward", avatar: "/avatars/user3.jpg" },
      { name: "Bekwa Undie", avatar: "/avatars/user4.jpg" },
    ],
    message: "Hello, I'm having trouble navigating the site and finding the information I...",
    time: "Yesterday",
    isActive: true,
  },
  {
    id: 3,
    users: [
      { name: "Ronald Richards", avatar: "/avatars/user5.jpg" },
      { name: "Andy Cole", avatar: "/avatars/user6.jpg" },
    ],
    message: "Hey, I think there's a mistake on my billing statement. Can you take a lo...",
    time: "13/05/2024",
    isActive: false,
  },
];

const ChatList: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4">
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search by Surname or Email"
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">🔍</span>
      </div>

      {/* Chat List */}
      <div className="space-y-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
              chat.isActive ? "bg-blue-100 border-l-4 border-blue-500" : "bg-white"
            } hover:bg-gray-100 transition`}
          >
            {/* User Avatars */}
            <div className="flex -space-x-2">
              {chat.users.map((user, index) => (
                <Image
                  key={index}
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border border-white"
                />
              ))}
            </div>

            {/* Chat Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                {chat.users.map((user) => user.name).join(" & ")}
              </h3>
              <p className="text-sm text-gray-500 truncate">{chat.message}</p>
            </div>

            {/* Time */}
            <span className="text-sm font-medium text-blue-500">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
