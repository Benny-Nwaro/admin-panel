import React from "react";

interface SidebarProps {
  onTabClick: (tab: string) => void;
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onTabClick, activeTab }) => {
  const tabs = ["Contacts", "Frequently called", "Import"];

  return (
    <div className="w-full sm:w-1/5 bg-white border-b sm:border-r sm:border-b-0 p-4 space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold">Calls</h2>
      <div className="space-y-2">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => onTabClick(tab)}
            className={`w-full p-2 rounded-md cursor-pointer text-left hover:bg-gray-100 transition-colors ${
              activeTab === tab ? "bg-blue-100 font-semibold text-blue-500" : ""
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;