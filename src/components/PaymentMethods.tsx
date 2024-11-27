import React, { useState } from "react";
import CreditCardForm from "./CreditCardForm";
import BankTransfer from "./BankTransfer";
import PayPalFundingCard from "./PayPalFundingCard";
import GiftCard from "./GiftCard";

interface PaymentMethod {
  id: number;
  icon: React.ReactNode;
  name: string;
  component: React.ReactNode; // Links to corresponding components
}

const PaymentMethods: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  const methods: PaymentMethod[] = [
    {
      id: 1,
      icon: <i className="fas fa-credit-card"></i>,
      name: "Credit/Debit Card",
      component: <CreditCardForm />,
    },
    {
      id: 2,
      icon: <i className="fas fa-university"></i>,
      name: "Bank Transfer",
      component: <BankTransfer />,
    },
    {
      id: 3,
      icon: <i className="fab fa-paypal"></i>,
      name: "PayPal",
      component: <PayPalFundingCard />,
    },
    {
      id: 4,
      icon: <i className="fas fa-gift"></i>,
      name: "Gift Card",
      component: <GiftCard />,
    },
  ];

  return (
    <div className="flex flex-row w-full bg-white shadow-md rounded-lg p-4 ">
      {/* Payment Methods List */}
      <div className="w-full md:w-1/3">
        {methods.map((method) => (
          <div
            key={method.id}
            className={`flex justify-between p-5 rounded-lg cursor-pointer ${
              selectedMethod === method.id
                ? "bg-blue-50 border-l-4 border-blue-500"
                : "hover:bg-blue-50"
            }`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <div className="flex items-center gap-3">
              {method.icon}
              <span
                className={`text-lg font-medium ${
                  selectedMethod === method.id
                    ? "text-blue-700"
                    : "text-gray-800"
                }`}
              >
                {method.name}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Selected Payment Method Details */}
      <div className="w-full h-full mt-4  md:mt-0 md:w-2/3 md:ml-4">
        {selectedMethod !== null ? (
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            {methods.find((method) => method.id === selectedMethod)?.component}
          </div>
        ) : (
          <div className="p-4 bg-gray-50 rounded-lg text-gray-600">
            Please select a payment method.
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
