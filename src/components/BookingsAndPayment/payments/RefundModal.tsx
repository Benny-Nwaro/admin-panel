import React from "react";

interface RefundModalProps {
  onClose: () => void;
}

const RefundModal: React.FC<RefundModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 text-center">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Issue Refund</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-xl">&times;</button>
        </div>

        {/* Message */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Transaction Cannot Be Refunded</h3>
          <p className="text-gray-600 mt-2 italic">
            This transaction occurred over a year ago and can no longer be refunded.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button 
            onClick={onClose} 
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundModal;
