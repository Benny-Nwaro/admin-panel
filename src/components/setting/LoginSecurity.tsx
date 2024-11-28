"use client";
import React, { useState } from "react";

const LoginSecurity: React.FC = () => {
  const [is2FAEnabled, set2FAEnabled] = useState(false);
  const [authMethod, setAuthMethod] = useState<"app" | "sms">("sms");

  return (
    <div className=" mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">

      {/* Two-Factor Authentication Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Two Factor Authentication</h3>

        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-700">Enabled</span>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="toggle-checkbox w-10 h-5 rounded-full bg-gray-300 focus:ring focus:ring-blue-300"
              checked={is2FAEnabled}
              onChange={(e) => set2FAEnabled(e.target.checked)}
            />
          </label>
        </div>

        <div className="mb-4">
          <h4 className="text-gray-700 font-medium mb-2">Choose an authentication method</h4>
          <p className="text-sm text-gray-500 mb-4">
            In addition to your username and password, you’ll have to enter a code (delivered via app or SMS) to sign
            in to your account.
          </p>
          <div className="space-y-3">
            {/* Authentication App Option */}
            <label
              className={`flex items-start p-4 border rounded-lg cursor-pointer ${
                authMethod === "app" ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="authMethod"
                value="app"
                checked={authMethod === "app"}
                onChange={() => setAuthMethod("app")}
                className="mt-1 mr-3"
              />
              <div>
                <p className="text-gray-700 font-medium">Authentication App</p>
                <p className="text-sm text-gray-500">
                  Get codes from an app like Authy, 1Password, Microsoft Authenticator, or Google Authenticator.
                </p>
              </div>
            </label>

            {/* SMS Option */}
            <label
              className={`flex items-start p-4 border rounded-lg cursor-pointer ${
                authMethod === "sms" ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="authMethod"
                value="sms"
                checked={authMethod === "sms"}
                onChange={() => setAuthMethod("sms")}
                className="mt-1 mr-3"
              />
              <div>
                <p className="text-gray-700 font-medium">SMS</p>
                <p className="text-sm text-gray-500">Receive a unique code via SMS</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition mt-6"
        onClick={() => alert("Next button clicked!")}
      >
        Next
      </button>
    </div>
  );
};

export default LoginSecurity;
