import React, { useState } from "react";

interface NotificationCategory {
  label: string;
  options: { name: string; enabled: boolean }[];
  enabled: boolean;
}

const NotificationSettings: React.FC = () => {
  const [categories, setCategories] = useState<NotificationCategory[]>([
    {
      label: "Email Notifications",
      enabled: true,
      options: [
        { name: "Class/Course Updates", enabled: true },
        { name: "Enrollment Confirmations", enabled: true },
        { name: "Payment Receipts", enabled: true },
        { name: "Feedback and Reviews", enabled: false },
        { name: "Class Reminders", enabled: false },
        { name: "Important Announcements", enabled: false },
      ],
    },
    {
      label: "SMS Notifications",
      enabled: true,
      options: [
        { name: "Class Reminders", enabled: true },
        { name: "Important Announcements", enabled: false },
        { name: "Enrollment Confirmations", enabled: true },
        { name: "Payment Receipts", enabled: true },
        { name: "Feedback and Reviews", enabled: false },
      ],
    },
    {
      label: "Push Notifications",
      enabled: false,
      options: [
        { name: "Assignment Deadlines", enabled: false },
        { name: "New Messages", enabled: false },
        { name: "System Alerts", enabled: false },
        { name: "Course Updates", enabled: false },
        { name: "Enrollment Confirmations", enabled: false },
        { name: "Payment Receipts", enabled: false },
        { name: "Feedback and Reviews", enabled: false },
        { name: "Class Reminders", enabled: false },
        { name: "Important Announcements", enabled: false },
      ],
    },
  ]);

  const toggleCategory = (index: number) => {
    setCategories((prev) =>
      prev.map((category, i) =>
        i === index ? { ...category, enabled: !category.enabled } : category
      )
    );
  };

  const toggleOption = (categoryIndex: number, optionIndex: number) => {
    setCategories((prev) =>
      prev.map((category, i) =>
        i === categoryIndex
          ? {
              ...category,
              options: category.options.map((option, j) =>
                j === optionIndex ? { ...option, enabled: !option.enabled } : option
              ),
            }
          : category
      )
    );
  };

  const saveChanges = () => {
    console.log("Updated Notification Settings:", categories);
    alert("Changes saved successfully!");
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-3xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Notification Settings</h2>

      {categories.map((category, categoryIndex) => (
        <div key={category.label} className="flex flex-row space-x-28 mb-6">
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-4 -mt-40">
            <div
              onClick={() => toggleCategory(categoryIndex)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition ${
                category.enabled ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  category.enabled ? "translate-x-5" : "translate-x-1"
                }`}
              ></span>
            </div>
            <label className="text-lg font-semibold text-gray-700">
              {category.label}
            </label>
          </div>

          {/* Options */}
          <div className={`space-y-3 ${!category.enabled ? "opacity-50" : ""}`}>
            {category.options.map((option, optionIndex) => (
              <div key={option.name} className="flex items-center gap-3">
                <div
                  onClick={() =>
                    category.enabled && toggleOption(categoryIndex, optionIndex)
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition ${
                    option.enabled ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      option.enabled ? "translate-x-5" : "translate-x-1"
                    }`}
                  ></span>
                </div>
                <label className="text-gray-700">{option.name}</label>
                
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Save Changes Button */}
      <button
        onClick={saveChanges}
        className="w-1/3 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default NotificationSettings;
