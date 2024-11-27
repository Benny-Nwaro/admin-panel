import React, { useState } from "react";
import MasterCard from "./MasterCard";
import AddPaypalAccount from "./AddPaypalAccount";

const PaypalModal: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
  };

  const handleClose = () => {
    setSelectedMethod(null); // Reset the selection to show the main modal
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
      {/* Conditional Rendering */}
      {!selectedMethod ? (
        <div>
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Add a new payment method
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              &times;
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 mb-6 text-center sm:text-left">
            Select a payment method to add to your account
          </p>

          {/* Payment Method Options */}
          <div className="space-y-4">
            {/* Credit/Debit Card Option */}
            <button
              onClick={() => handleSelectMethod("Credit/Debit Card")}
              className="flex items-center justify-between w-full p-4 border rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl text-gray-600">💳</div>
                <span className="text-sm sm:text-base font-medium">
                  Credit/Debit Card
                </span>
              </div>
              <div className="text-gray-400">›</div>
            </button>

            {/* PayPal Option */}
            <button
              onClick={() => handleSelectMethod("PayPal")}
              className="flex items-center justify-between w-full p-4 border rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl text-gray-600">💻</div>
                <span className="text-sm sm:text-base font-medium">PayPal</span>
              </div>
              <div className="text-gray-400">›</div>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Render the selected component */}
          {selectedMethod === "Credit/Debit Card" && (
            <MasterCard onClose={handleClose} />
          )}
          {selectedMethod === "PayPal" && <AddPaypalAccount onClose={handleClose} />}
        </div>
      )}
    </div>
  );
};

export default PaypalModal;
