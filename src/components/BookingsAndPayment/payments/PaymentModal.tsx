import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa"; // For the CVV info icon

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Take a payment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3">
          You’ll receive a deposit for this transaction.
        </p>

        {/* Form Fields */}
        <div className="mt-4 space-y-3">
          {/* Amount Input */}
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* Payment Method Dropdown */}
          <div className="relative">
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            >
              <option value="">Select Payment Method</option>
              <option value="Debit/Credit Card">Debit/Credit Card</option>
              <option value="Saved Card">Saved Card</option>
              <option value="Cash">Cash</option>
            </select>
          </div>

          {/* Debit/Credit Card Fields */}
          {paymentMethod === "Debit/Credit Card" && (
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-sm font-medium mb-2">Debit/Credit Card</h3>
              
              {/* Card Number */}
              <input
                type="text"
                placeholder="Card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 mb-2"
              />

              {/* Expiration and CVV */}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Expiration"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  className="w-1/2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                <div className="relative w-1/2">
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  />
                  <FaInfoCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Security Info */}
              <p className="text-xs text-gray-600 mt-2 flex items-center">
                ✅ Your card is fully encrypted by STRIPE and your details are safe.
              </p>
            </div>
          )}

          {/* Customer Note */}
          <textarea
            placeholder="Customer note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 h-24 resize-none"
          ></textarea>

          {/* Note Info */}
          <p className="text-xs text-gray-500">
            Your note will appear next to the payment details on your customer’s receipt.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-100"
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
