import React, { useState } from "react";

type Tab = "Teachers" | "Students";

const TabsSwitcher = ({ onChange }: { onChange?: (tab: Tab) => void }) => {
  const [activeTab, setActiveTab] = useState<Tab>("Teachers");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <div className="flex items-center space-x-8 border-b border-gray-100 w-fit mb-8">
      {(["Teachers", "Students"] as Tab[]).map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`text-lg font-semibold transition-colors duration-200 ${
            activeTab === tab
              ? "text-gray-900 border-b-4 border-gray-800 pb-1"
              : "text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabsSwitcher;
