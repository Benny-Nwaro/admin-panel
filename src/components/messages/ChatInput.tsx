import React, { useState } from "react";

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Handle message input change
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  // Handle file upload change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle send message
  const handleSendMessage = () => {
    if (message.trim() || selectedFile) {
      console.log("Sending message:", message, "File:", selectedFile);
      setMessage(""); // Clear message input after sending
      setSelectedFile(null); // Clear selected file after sending
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-t">
      {/* Attachment Icon */}
      <label htmlFor="file-upload" className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V10m-6 2h6m-6 0L6 18m6-8L6 4m6 8h6"
          />
        </svg>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* Image Upload Icon */}
      <label htmlFor="image-upload" className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5h18M12 10l4 4-4 4m0-8l-4 4 4 4"
          />
        </svg>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* Message Input */}
      <input
        type="text"
        className="flex-1 p-2 border rounded-lg mx-2 text-sm"
        placeholder="Write a message..."
        value={message}
        onChange={handleMessageChange}
      />

      {/* Send Button */}
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 14l8-8 8 8M4 6h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;
