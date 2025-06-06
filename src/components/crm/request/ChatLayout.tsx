"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Image, Paperclip, Search, ArrowLeftIcon } from "lucide-react";


interface Message {
  id: string;
  sender: "user" | "contact";
  text: string;
  timestamp: string;
  files?: File[];
}

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  avatar: string;
  status?: "Approved" | "Pending" | "Tutor";
}

const initialContacts: Contact[] = [
  {
    id: "1",
    name: "Dianne Russell & Kingsley Okafor",
    lastMessage: "Piano (5 classes)",
    lastMessageTime: "04:22 PM",
    avatar: "DR",
    status: "Approved",
  },
  {
    id: "2",
    name: "Guy Hawkins & Ashley James",
    lastMessage: "Hi there, I'm interested in learning more...",
    lastMessageTime: "04:22 PM",
    avatar: "GH",
    status: "Pending",
  },
  {
    id: "3",
    name: "Collins Ola & Ray Reddington",
    lastMessage: "Next digital driving hammer pivot. Win-win-win.",
    lastMessageTime: "Yesterday 15:35",
    avatar: "CO",
    status: "Tutor",
  },
];

const getAvatarColor = (initials: string) => {
  const colors = ["#9333ea", "#34c38f", "#ec4899", "#3b82f6", "#f59e0b"];
  const charCode = initials.charCodeAt(0) + initials.charCodeAt(initials.length - 1);
  return colors[charCode % colors.length];
};

const ChatLayout = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "contact",
      text:
        "Synergize needle fured deploy responsible. Leverage eco-system brainstorming downloaded down.",
      timestamp: "Yesterday 15:35",
    },
    {
      id: "2",
      sender: "user",
      text: "Next digital driving hammer pivot. Win-win-win.",
      timestamp: "Yesterday 15:35",
    },
  ]);
  const [currentContact, setCurrentContact] = useState<Contact>(initialContacts[2]);
  const [newMessageText, setNewMessageText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[] | undefined>();
  const [hidden, setHidden] = useState("hidden");
  const [sidebarHidden, setSidebarHidden] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessageText.trim() || selectedFiles?.length) {
      const newMessage: Message = {
        id: crypto.randomUUID(),
        sender: "user",
        text: newMessageText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        files: selectedFiles,
      };
      setMessages([...messages, newMessage]);
      setNewMessageText("");
      setSelectedFiles(undefined);
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (imageInputRef.current) imageInputRef.current.value = "";
    }
  };

  const handleContactClick = (contact: Contact) => {
    setCurrentContact(contact);
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: "contact",
        text: `Hello, this is a new conversation with ${contact.name}.`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setHidden("")
    setSidebarHidden("hidden")
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

  const handleBackButton = ()=>{
    setHidden("hidden")
    setSidebarHidden("")
  }

  return (
    <div className="flex h-full  max-md:h-screen max-md:mt-8 max-md:flex-col max-md:w-full bg-[#f1f1f9]">
      {/* Sidebar */}
      <div className={`w-1/4 bg-white lg:border-r p-4 max-md:w-full max-md:${sidebarHidden}`}>
        <div className="flex items-center gap-2 mb-6">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by Surname or Email"
            className="text-sm border-none focus:ring-0 p-0 w-full"
          />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-14rem)]">
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
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: getAvatarColor(contact.avatar) }}
                >
                  {contact.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-sm">{contact.name}</span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        contact.status === "Approved"
                          ? "bg-green-100 text-green-600"
                          : contact.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{contact.lastMessage}</p>
                  <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Chat */}
      <div className={`flex-1 flex flex-col  max-md:${hidden}`}>
      <span className="justify-start max-md:mt-4 w-full flex text-blue-600 font-bold text-xs bg-white lg:hidden" onClick={handleBackButton}><ArrowLeftIcon size={18}/> Go back</span>
        <div className="p-4 border-b bg-white flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
            style={{ backgroundColor: getAvatarColor(currentContact.avatar) }}
          >
            {currentContact.avatar}
          </div>
          <div>
            <h2 className="font-bold text-lg max-md:text-sm">{currentContact.name}</h2>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                currentContact.status === "Approved"
                  ? "bg-green-100 text-green-600"
                  : currentContact.status === "Pending"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              {currentContact.status}
            </span>
          </div>
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
                  className="w-10 h-10 max-md:px-3 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: getAvatarColor(currentContact.avatar) }}
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
                  <div className="mt-2 space-y-1">
                    {message.files.map((file, index) => (
                      <div key={index} className="text-xs text-blue-200">
                        📎 {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </div>
                    ))}
                  </div>
                )}
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-blue-200" : "text-gray-400"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
              {message.sender === "user" && (
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-pink-400">
                  BU
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t flex items-center gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple
          />
          <button
            className="lg:text-xl px-0 mx-0"
            onClick={() => fileInputRef.current?.click()}
            title="Attach File"
    
          >
            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>

          <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
            multiple
          />
          <button
            className="lg:text-xl px-0 mx-0"
            onClick={() => imageInputRef.current?.click()}
            title="Attach Image"
          >
            <Image className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>

          <input
            type="text"
            placeholder="Write a message..."
            value={newMessageText}
            onChange={(e) => setNewMessageText(e.target.value)}
            className="flex-1 bg-[#F1F1F9] px-4 py-2 rounded-full focus:outline-none text-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
          >
          <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />  
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
