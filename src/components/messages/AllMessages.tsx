import React, { useState } from "react";
import Payment from "./Payment";
import ChatComponent from "./MessageBox";
import Image from "next/image";

type Message = {
  id: number;
  name: string;
  avatar?: string;
  message: string;
  time: string;
  unreadCount?: number;
};

type Conversation = {
  id: number;
  messages: {
    text: string;
    sender: "me" | "other";
    time: string;
  }[];
};

const messages: Message[] = [
  {
    id: 1,
    name: "Eleanor Pena",
    avatar: "https://pics.craiyon.com/2023-11-30/PgMqmeWHQOyJU1V4FRG4YA.webp",
    message: "Hello, I have a question about a product's compatibility with my device. Can you assist?",
    time: "12:45 PM",
    unreadCount: 1,
  },
  {
    id: 2,
    name: "Darrell Steward",
    avatar: "https://binkleysrestaurant.com/libs/ace/assets/avatars/profile-pic.jpg",
    message: "I'm having trouble navigating the site and finding the information I need.",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Ronald Richards",
    avatar: "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-600nw-542759665.jpg",
    message: "Hey, I think there's a mistake on my billing statement. Can you take a look at it?",
    time: "13/05/2024",
  },
];

const conversations: Conversation[] = [
  {
    id: 1,
    messages: [
      { text: "Hi, can you help me with a product?", sender: "other", time: "12:40 PM" },
      { text: "Sure! What do you need assistance with?", sender: "me", time: "12:41 PM" },
      { text: "Is it compatible with my device?", sender: "other", time: "12:45 PM" },
    ],
  },
  {
    id: 2,
    messages: [
      { text: "I'm having trouble navigating the site.", sender: "other", time: "11:00 AM" },
      { text: "Let me help you with that.", sender: "me", time: "11:05 AM" },
    ],
  },
  {
    id: 3,
    messages: [
      { text: "Hey, I think there's a mistake on my billing statement. Can you take a look at it?", sender: "other", time: "2:15 PM" },
      { text: "Let me check that for you.", sender: "me", time: "2:20 PM" },
    ],
  },
];

const MessageList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "pending">("personal");
  const [activeConversationId, setActiveConversationId] = useState<number | null>(null);

  const activeConversation = conversations.find((conv) => conv.id === activeConversationId);

  const handleSendMessage = (text: string) => {
    if (activeConversationId !== null) {
      console.log(`Message sent to conversation ${activeConversationId}:`, text);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar and Message List */}
      <div className="lg:w-1/3 bg-white shadow-lg p-4 rounded-lg overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <select className="border border-gray-300 rounded-md p-2 w-full max-w-xs text-sm">
            <option>All Messages</option>
          </select>
          <button className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-between items-center mb-4">
          <button
            className={`w-1/2 py-2 text-sm font-semibold ${
              activeTab === "personal" ? "bg-black text-white" : "text-black bg-gray-200"
            } rounded-l-full`}
            onClick={() => setActiveTab("personal")}
          >
            PERSONAL
          </button>
          <button
            className={`w-1/2 py-2 text-sm font-semibold ${
              activeTab === "pending" ? "bg-black text-white" : "text-black bg-gray-200"
            } rounded-r-full`}
            onClick={() => setActiveTab("pending")}
          >
            PENDING PAYMENT <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">6</span>
          </button>
        </div>

        {/* Message List or Payment Component */}
        {activeTab === "pending" ? (
          <Payment />
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => setActiveConversationId(msg.id)}
                className={`p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ${
                  activeConversationId === msg.id ? "bg-gray-200" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {msg.avatar ? (
                    <Image src={msg.avatar} alt={msg.name} className="w-10 h-10 rounded-full" />
                  ) : (
                    <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
                      <span className="text-gray-600">{msg.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold truncate" title={msg.name}>
                      {msg.name}
                    </h3>
                    <p className="text-sm text-gray-600 truncate" title={msg.message}>
                      {msg.message}
                    </p>
                  </div>
                  <div className="text-xs text-gray-500">{msg.time}</div>
                  {msg.unreadCount && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {msg.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chat Component */}
      {activeConversation ? (
        <div className="lg:w-2/3  shadow-lg p-4 rounded-lg overflow-y-auto">
          <ChatComponent
            user={{
              name: messages.find((msg) => msg.id === activeConversationId)?.name || "User",
              avatar: messages.find((msg) => msg.id === activeConversationId)?.avatar || "",
              role: "Piano tutor",
            }}
            messages={activeConversation.messages.map((msg, index) => ({
              id: index.toString(),
              sender: msg.sender === "me" ? "You" : "Other",
              avatar:
                msg.sender === "me"
                  ? "SA"
                  : messages.find((msgData) => msgData.id === activeConversationId)?.avatar || "",
              content: msg.text,
              timestamp: msg.time,
              type: msg.sender === "me" ? "outgoing" : "incoming",
            }))}
            onSendMessage={handleSendMessage}
          />
        </div>
      ): <div className=" p-72"> 
        <button className="flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium text-sm rounded-full  shadow-md hover:shadow-lg transition-all">
     Select a contacct to start chat
    </button>
    </div>}

    </div>
  )
};

export default MessageList;
