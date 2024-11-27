import React, { useState } from "react";

const MasterCard: React.FC = () => {
  const [formData, setFormData] = useState({
    accountHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData({ accountHolder: "", cardNumber: "", expiryDate: "", cvv: "" });
    alert("Cancelled adding a card");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Card added: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Add a Credit/Debit Card</h2>
        <button className="text-gray-500 hover:text-gray-700">✕</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Holder Name</label>
            <input
              type="text"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleInputChange}
              placeholder="Enter account holder name"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <div className="relative">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Enter card number"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/MasterCard_Logo.svg"
                  alt="Mastercard Logo"
                  className="h-6 w-6"
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YYYY"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="Enter CVV number"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Proceed →
          </button>
        </div>
      </form>
    </div>
  );
};

export default MasterCard;
