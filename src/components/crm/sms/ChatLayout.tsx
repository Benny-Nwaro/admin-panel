"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Image, Paperclip } from "lucide-react";
import SmsModal from "./SmsModal";

interface Message {
  id: string;
  sender: "user" | "contact";
  text: string;
  timestamp: string;
  files?: File[]; // Optional files property
}

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  avatar: string;
}

const initialContacts: Contact[] = [
  {
    id: "1",
    name: "Ebiere Osuagwu",
    lastMessage: "Velit id dictum vitae nibh eu mauris penatibus risus cursus...",
    lastMessageTime: "04:22 PM",
    avatar: "EO",
  },
  {
    id: "2",
    name: "+23455474384",
    lastMessage: "Ut pellentesque non magna consequat aliquet duis...",
    lastMessageTime: "04:22 PM",
    avatar: "👤",
  },
  {
    id: "3",
    name: "Titi Omolara Emmanuel",
    lastMessage: "Pulvinar vestibulum tortor dignissim integer...",
    lastMessageTime: "04:22 PM",
    avatar: "TO",
  },
];

const ChatLayout = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "contact",
      text:
        "Synergize needle fured deploy responsible. Leverage eco-system brainstorming downloaded down. Web nor focus overflow 2 mindfulness ocean. Paradigm want customer mifflin per invested downloaded post pants. Hits move the issues don't pivot.",
      timestamp: "Yesterday 15:35",
    },
    {
      id: "2",
      sender: "user",
      text: "Next digital driving hammer pivot. Win-win-win.",
      timestamp: "Yesterday 15:35",
    },
    {
      id: "3",
      sender: "contact",
      text:
        "Synergize needle fured deploy responsible. Leverage eco-system brainstorming downloaded down. Web nor focus overflow 2 mindfulness ocean. Paradigm want customer mifflin per invested downloaded post pants. Hits move the issues don't pivot.",
      timestamp: "Yesterday 15:35",
    },
  ]);
  const [currentContact, setCurrentContact] = useState<Contact>(initialContacts[0]);
  const [newMessageText, setNewMessageText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[] | undefined>(); // State for selected files
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessageText.trim() || selectedFiles?.length) {
      const newMessage: Message = {
        id: crypto.randomUUID(),
        sender: "user",
        text: newMessageText,
        timestamp: new Date().toLocaleTimeString(),
        files: selectedFiles, // Include files in the message
      };
      setMessages([...messages, newMessage]);
      setNewMessageText(""); // Clear the input after sending
      setSelectedFiles(undefined); // Clear selected files
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear the file input
      }
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    }
  };

  const handleContactClick = (contact: Contact) => {
    setCurrentContact(contact);
    // In a real app, you'd fetch messages for this contact
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: "contact",
        text: `Hello, this is a new conversation with ${contact.name}.`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="flex h-full bg-[#f1f1f9]">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r p-4 max-md:w-full overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Send SMS</h2>
          <button onClick={() => setIsModalOpen(true)}  className="bg-blue-500 text-white text-sm px-3 py-1 rounded">
            New SMS
          </button>
        </div>
        <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-10rem)]">
          {initialContacts.map((contact) => {
            const isActive = contact.id === currentContact.id;
            return (
              <div
                key={contact.id}
                onClick={() => handleContactClick(contact)}
                className={`flex items-start gap-3 rounded-lg p-3 cursor-pointer ${
                  isActive
                    ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                  style={{
                    backgroundColor:
                      contact.avatar === "👤"
                        ? "#808080"
                        : contact.avatar === "EO"
                        ? "#34c38f"
                        : "#ec4899",
                  }}
                >
                  {contact.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{contact.name}</span>
                    <span className="text-xs text-gray-500">
                      {contact.lastMessageTime}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {contact.lastMessage}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-white">
          <h2 className="font-bold text-lg">{currentContact.name}</h2>
        </div>

        {/* Chat Window */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === "user" ? "justify-end" : ""
              }`}
            >
              {message.sender === "contact" && (
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                  style={{
                    backgroundColor:
                      currentContact.avatar === "👤"
                        ? "#808080"
                        : currentContact.avatar === "EO"
                        ? "#34c38f"
                        : "#ec4899",
                  }}
                >
                  {currentContact.avatar}
                </div>
              )}
              <div
                className={`p-4 rounded-lg shadow text-sm max-w-md ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <p>{message.text}</p>
                {message.files && (
                  <div className="mt-2">
                    {message.files.map((file, index) => (
                      <div key={index} className="text-xs text-blue-200">
                        Attachment: {file.name} ({file.size} bytes)
                      </div>
                    ))}
                  </div>
                )}
                <p
                  className={`text-xs ${
                    message.sender === "user" ? "text-blue-200" : "text-gray-400"
                  } mt-1`}
                >
                  {message.timestamp}
                </p>
              </div>
              {message.sender === "user" && (
                <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center font-bold text-white">
                  BU
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t flex items-center gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple // Allow selecting multiple files
          />
          <button
            className="text-xl"
            onClick={() => fileInputRef.current?.click()}
            title="Attach File"
          >
            <Paperclip size={24} />
          </button>

            <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            onChange={handleImageChange}
            style={{display: 'none'}}
            multiple
            />
          <button className="text-xl"  onClick={() => imageInputRef.current?.click()} title="Attach Image">
            <Image size={24}  />
          </button>
          <input
            type="text"
            placeholder="Write a message..."
            value={newMessageText}
            onChange={(e) => setNewMessageText(e.target.value)}
            className="flex-1 bg-[#F1F1F9] px-4 py-2 rounded-full focus:outline-none text-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button
            className="bg-black text-white p-2 rounded-full"
            onClick={handleSendMessage}
          >
            <Send size={24} />
          </button>
        </div>
      </div>
      <SmsModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default ChatLayout;
