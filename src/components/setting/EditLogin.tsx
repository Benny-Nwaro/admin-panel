import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginSecurity from "./LoginSecurity";

const EditLogin: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showFactText, setShowFactText] = useState(false);
  const [factText, setFactText] = useState(""); // Initialize factText as empty

  const toggleShowPasswords = () => setShowPasswords((prev) => !prev);

  const toggleTwoFactor = () => {
    setTwoFactorEnabled((prev) => !prev);
    if (!twoFactorEnabled) {
      setFactText("Two-Factor Authentication adds extra security.");
    } else {
      setFactText(""); // Clear fact text when disabled
    }
    setShowFactText(!twoFactorEnabled);
  };

  const handleChangePassword = () => {
    if (newPassword === currentPassword) {
      alert("New password must be different from the current password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password changed successfully!");
    // You could also add logic to actually change the password here.
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-3xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login & Security</h2>

      {/* Change Password Section */}
      <div className="mb-4">
        <h3 className="text-lg font-light mb-4">Change Password</h3>
        <div className="relative mb-4">
          <label className="block text-sm font-medium mb-1">Current Password</label>
          <input
            type={showPasswords ? "text" : "password"}
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-2/4 transform -translate-y-2/4 cursor-pointer text-gray-500"
            onClick={toggleShowPasswords}
          >
            {showPasswords ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <div className="relative mb-2">
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type={showPasswords ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-2/4 transform -translate-y-2/4 cursor-pointer text-gray-500"
            onClick={toggleShowPasswords}
          >
            {showPasswords ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <div className="relative mb-4">
          <label className="block text-sm font-medium mb-1">Confirm New Password</label>
          <input
            type={showPasswords ? "text" : "password"}
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-2/4 transform -translate-y-2/4 cursor-pointer text-gray-500"
            onClick={toggleShowPasswords}
          >
            {showPasswords ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleChangePassword}>Change Password</button>
      </div>

      {/* Two-Factor Authentication */}
      <div className="flex items-center space-x-4 mb-6">
        <h3 className="text-lg font-semibold">Two Factor Authentication</h3>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={twoFactorEnabled}
            onChange={toggleTwoFactor}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-300 peer-checked:bg-blue-600 peer-checked:before:translate-x-5 before:content-[''] before:absolute before:top-[3px] before:left-[3px] before:bg-white before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
        </label>
        <span className="text-sm text-gray-700">
          {twoFactorEnabled ? "Enabled" : "Disabled"}
        </span>
        {showFactText && (
          <span className="text-sm text-gray-700">
            {factText}
          </span>
        )}
      </div>

      {/* Render LoginSecurity Component */}
      {twoFactorEnabled && (
        <div className="mt-4">
          <LoginSecurity />
        </div>
      )}
    </div>
  );
};

export default EditLogin;