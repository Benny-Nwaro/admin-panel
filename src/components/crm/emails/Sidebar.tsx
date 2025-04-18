"use client";

import { useState } from "react";
import { Inbox, Star, Send, FileText, Trash2, Pencil } from "lucide-react";
import EmailModal from "./EmailModal";

const menu = [
  { label: "Inbox", count: 1253, icon: <Inbox size={18} /> },
  { label: "Starred", count: 245, icon: <Star size={18} /> },
  { label: "Sent", count: 24532, icon: <Send size={18} /> },
  { label: "Draft", count: 9, icon: <FileText size={18} /> },
  { label: "Bin", count: 9, icon: <Trash2 size={18} /> },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-[250px] bg-white p-5 border-r max-md:w-full">
        <h2 className="text-lg font-semibold mb-6">Emails</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 mb-6"
        >
          <Pencil size={16} /> Compose mail
        </button>

        <ul className="flex flex-col lg:space-y-6 text-sm max-md:flex-row overflow-auto text-nowrap max-md:w-full max-md:space-x-4">
          {menu.map((item) => {
            const isActive = item.label === activeTab;

            return (
              <li
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`flex items-center justify-between cursor-pointer p-2 rounded-lg ${
                  isActive ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <span className="text-xs font-medium">{String(item.count).padStart(2, "0")}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Compose Email Modal */}
{/* Compose Email Modal */}
<EmailModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* <ScheduleEmailModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </>
  );
}
