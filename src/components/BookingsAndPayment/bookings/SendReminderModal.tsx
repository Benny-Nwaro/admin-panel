import React, { useState } from "react";

interface SendReminderModalProps {
  email: string;
  onClose: () => void;
  onSend: (message: string) => void;
}

const SendReminderModal: React.FC<SendReminderModalProps> = ({ email, onClose, onSend }) => {
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Send Reminder</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-xl">&times;</button>
        </div>

        {/* Email Notice */}
        <p className="text-sm text-gray-700 mt-3">
          A reminder for this invoice will be sent to <span className="font-semibold">{email}</span>
        </p>

        {/* Message Input */}
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">Reminder message (optional)</label>
          <textarea
            className="w-full mt-2 p-3 border rounded-md focus:ring focus:ring-blue-300 text-sm"
            placeholder="Enter your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button 
            onClick={onClose} 
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
            Cancel
          </button>
          <button 
            onClick={() => onSend(message)} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Send Reminder
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendReminderModal;
