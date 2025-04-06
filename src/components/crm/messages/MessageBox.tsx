import Image from "next/image";
import React from "react";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  status?: string; // e.g., "Read", "Delivered"
  type: "incoming" | "outgoing";
}

interface User {
  name: string;
  avatar: string;
  role: string;
}

interface ChatComponentProps {
  user: User;
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ user, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = React.useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage(""); // Clear input after sending
    }
  };

  return (
    <div style={{backgroundColor:"#DBDCF0"}} className="min-h-screen  flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src={user?.avatar} alt={user?.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{user?.name}</h3>
            <p className="text-xs text-gray-600">{user?.role}</p>
          </div>
        </div>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
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
              d="M12 6v6m0 4h.01"
            />
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-6 overflow-y-auto flex flex-col justify-end">
        {messages?.map((message) => (
          <div
            key={message.id}
            className={`max-w-md ${
              message.type === "incoming" ? "self-start" : "self-end"
            }`}
          >
            <div
              className={`p-4 rounded-lg shadow-sm flex items-start space-x-2 ${
                message.type === "incoming" ? "bg-white" : "bg-blue-500 text-white"
              }`}
            >
              {message.type === "incoming" && (
                <Image
                  src={message.avatar}
                  alt={message.sender}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div className="flex flex-col">
                <p className="text-sm">{message.content}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                  {message.status && (
                    <span
                      className={`text-xs ${
                        message.status === "Read"
                          ? "text-green-500"
                          : "text-yellow-400"
                      }`}
                    >
                      {message.status}
                    </span>
                  )}
                </div>
              </div>
              {message.type === "outgoing" && (
                <Image
                  src={message.avatar}
                  alt={message.sender}
                  className="w-8 h-8 rounded-full"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="bg-white p-4 flex items-center space-x-4 border-t">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
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
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 10.828a2 2 0 10-2.828-2.828z"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Write a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
