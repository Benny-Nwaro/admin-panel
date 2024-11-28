import React, { useState } from "react";
import DataManagement from "./DataManagement";
import ProfileSetting from "./ProfileSetting";
import EditLogin from "./EditLogin";
import NotificationSettings from "./NotificationSettings";
import ActivityStatus from "./ActivityStatus";

const SettingsMenu: React.FC = () => {
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "ProfileSetting":
        return <ProfileSetting />;
      case "EditLogin":
        return <EditLogin />;
      case "Privacy":
        return <DataManagement />;
      case "NotificationSettings":
        return <NotificationSettings />;
      case "ActivityStatus":
        return <ActivityStatus />;
      default:
        return (
          <div className="flex w-full items-center justify-center h-full">
            <p className="text-gray-500 text-lg">
              Select a setting from the menu to view details.
            </p>
          </div>
        );
    }
  };

  return (
    <div className={`flex h-full w-full p-4 ${theme === "Dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      {/* Sidebar */}
      <div className="w-full h-full sm:w-1/3 lg:w-2/4 p-6 mr-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search Settings"
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          {[
            { id: "ProfileSetting", label: "Account Settings", icon: "M5.121 17.804A6.978 6.978 0 0111 15a6.978 6.978 0 015.879 2.804M21 21H3m6-10a6 6 0 116 0m-6 0v6m0-6h6" },
            { id: "EditLogin", label: "Login & Security", icon: "M12 15v-3m0 3V9m0 6h0m0 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { id: "Privacy", label: "Privacy", icon: "M15 17h5l-1.405-1.405M9 5h.01M4.055 9.117C3.37 10.746 3 12.447 3 14c0 3.86 3.134 7 7 7s7-3.14 7-7c0-1.553-.37-3.254-1.055-4.883M15 17H5" },
            { id: "NotificationSettings", label: "Notification Settings", icon: "M15 17h5l-1.405-1.405M9 5h.01M4.055 9.117C3.37 10.746 3 12.447 3 14c0 3.86 3.134 7 7 7s7-3.14 7-7c0-1.553-.37-3.254-1.055-4.883M15 17H5" },
          ].map((menu) => (
            <div
              key={menu.id}
              className={`flex items-center justify-between cursor-pointer rounded-lg px-4 py-2 transition ${
                activeComponent === menu.id
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveComponent(menu.id)}
            >
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={menu.icon}
                  />
                </svg>
                <span className="font-medium">{menu.label}</span>
              </div>
            </div>
          ))}

          {/* Theme Toggle */}
          <div
            className="flex items-center justify-between cursor-pointer rounded-lg px-4 py-2 transition hover:bg-gray-100"
            onClick={toggleTheme}
          >
            <div className="flex items-center gap-4">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 4H8c-1.104 0-2 .896-2 2v4m12-4h-2c-1.104 0-2 .896-2 2v4m0 0H6m12 0v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8m16 0h-8m4 4h4"
                />
              </svg>
              <span className="font-medium">Display</span>
            </div>
            <span className="text-sm">{theme} </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full p-8">{renderComponent()}</div>
    </div>
  );
};

export default SettingsMenu;
