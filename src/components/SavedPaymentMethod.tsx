import React, { useState } from "react";
import MasterCard from './MasterCard';
import CreditCardForm from './CreditCardForm';
import PaypalModal from './PaypalModal';
import AddPaypalAccount from './AddPaypalAccount';

interface PaymentMethod {
  id: number;
  type: "Credit/Debit Card" | "Linked Account";
  provider: string;
  details: string;
  expirationDate?: string;
  isDefault: boolean;
  status?: "Active" | "Expired";
  modal?: React.ReactNode;
}

const initialPaymentMethods: PaymentMethod[] = [
  { id: 1, type: "Credit/Debit Card", provider: "American Express", details: "ending in 7830", expirationDate: "06/24", isDefault: true },
  { id: 2, type: "Credit/Debit Card", provider: "Visa", details: "ending in 0000", expirationDate: "06/24", isDefault: false, modal: <CreditCardForm /> },
  { id: 3, type: "Credit/Debit Card", provider: "Mastercard", details: "ending in 4902", expirationDate: "06/24", isDefault: false, status: "Expired", modal: <MasterCard /> },
  { id: 4, type: "Linked Account", provider: "PayPal", details: "undiebekwa@gmail.com", isDefault: false, modal: <AddPaypalAccount /> },
];

const PaymentMethodCard: React.FC<{
  method: PaymentMethod;
  onClick: () => void;
  onSetDefault: () => void;
  onDelete: () => void;
}> = ({ method, onClick, onSetDefault, onDelete }) => (
  <div
    className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer ${
      method.status === "Expired" ? "bg-red-100 border-red-300" : "bg-gray-50 border-gray-200"
    } shadow-sm mb-4 hover:shadow-md hover:bg-gray-100`}
    onClick={onClick}
  >
    <div>
      <div className="font-semibold">{method.provider}</div>
      <div className="text-sm text-gray-600">{method.details}</div>
      {method.expirationDate && <div className="text-sm text-gray-500">Exp. Date: {method.expirationDate}</div>}
      {method.status === "Expired" && <span className="text-xs text-red-600 font-semibold">Expired</span>}
    </div>
    <div className="flex items-center space-x-2">
      {method.isDefault ? (
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Default</span>
      ) : (
        <button
          className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full hover:bg-green-200"
          onClick={(e) => {
            e.stopPropagation();
            onSetDefault();
          }}
        >
          Set as Default
        </button>
      )}
      <button
        className="text-red-500 hover:text-red-700 focus:outline-none"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        🗑
      </button>
    </div>
  </div>
);

const SavedPaymentMethod: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(initialPaymentMethods);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [showPaypalModal, setShowPaypalModal] = useState(false); // State to toggle the PayPal modal

  const handleSetDefault = (id: number) => {
    setPaymentMethods((prev) =>
      prev.map((method) =>
        method.id === id
          ? { ...method, isDefault: true }
          : { ...method, isDefault: false }
      )
    );
  };

  const handleDelete = (id: number) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
  };

  const handleSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Saved Payment Methods</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setShowPaypalModal(true)} // Show the PayPal modal on click
        >
          Add New Payment Method
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Credit/Debit Cards</h3>
        {paymentMethods
          .filter((method) => method.type === "Credit/Debit Card")
          .map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              onClick={() => handleSelect(method)}
              onSetDefault={() => handleSetDefault(method.id)}
              onDelete={() => handleDelete(method.id)}
            />
          ))}

        <h3 className="text-lg font-semibold mt-6 mb-4">Linked Accounts</h3>
        {paymentMethods
          .filter((method) => method.type === "Linked Account")
          .map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              onClick={() => handleSelect(method)}
              onSetDefault={() => handleSetDefault(method.id)}
              onDelete={() => handleDelete(method.id)}
            />
          ))}
      </div>

      {/* Render the PayPal Modal */}
      {showPaypalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <PaypalModal />
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setShowPaypalModal(false)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for selected payment method */}
      {selectedMethod && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            {selectedMethod.modal}
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setSelectedMethod(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedPaymentMethod;
