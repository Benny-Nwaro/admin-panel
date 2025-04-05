import React from "react";

interface PaymentDetailsProps {
  onClose: () => void;
}

const PaymentDetailsModal: React.FC<PaymentDetailsProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Payment Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Payments Details */}
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-gray-800">PAYMENTS DETAILS</h3>
          <div className="mt-2 space-y-2 text-sm text-gray-600">
            <p><strong className="text-gray-800">Payment Method:</strong> PayPal</p>
            <p><strong className="text-gray-800">Amount:</strong> $10000</p>
            <p>
              <strong className="text-gray-800">Payment Status:</strong>
              <span className="ml-2 px-3 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">
                Pending
              </span>
            </p>
            <p><strong className="text-gray-800">Payment Date:</strong> 18 / 12 / 2024</p>
            <p><strong className="text-gray-800">Reference Number:</strong> 16353638926t718783772</p>
          </div>
        </div>

        {/* Sender Details */}
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-gray-800">SENDER DETAILS</h3>
          <div className="mt-2 space-y-2 text-sm text-gray-600">
            <p><strong className="text-gray-800">Full Name:</strong> Bekwa Undie</p>
            <p><strong className="text-gray-800">Email:</strong> Bekwaundie247@gmail.com</p>
            <p><strong className="text-gray-800">Phone Number:</strong> +2347012345678</p>
            <p><strong className="text-gray-800">Address:</strong> Canada, Calgary, 76 Westwinds Crescent Northeast</p>
          </div>
        </div>

        {/* Receiver Details */}
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-gray-800">RECEIVER DETAILS</h3>
          <div className="mt-2 space-y-2 text-sm text-gray-600">
            <p><strong className="text-gray-800">Full Name:</strong> Bekwa Undie</p>
            <p><strong className="text-gray-800">Email:</strong> Bekwaundie247@gmail.com</p>
            <p><strong className="text-gray-800">Phone Number:</strong> +2347012345678</p>
            <p><strong className="text-gray-800">Address:</strong> Canada, Calgary, 76 Westwinds Crescent Northeast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsModal;
