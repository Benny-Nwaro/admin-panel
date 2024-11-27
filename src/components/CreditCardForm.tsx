import React from "react";

const CreditCardForm: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 relative">
      <h2 className="text-lg font-bold mb-2">Credit/Debit Card</h2>
      <p className="text-sm text-gray-600 mb-4">
        To fund your wallet, kindly fill in your card details and the amount you wish to fund your account with
      </p>
      <div className="absolute top-4 right-4">
        <span className="text-xs text-gray-500 font-semibold">Powered by </span>
        <span className="text-blue-500 font-bold">Stripe</span>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="accountHolderName">
            Account Holder Name
          </label>
          <input
            id="accountHolderName"
            type="text"
            defaultValue="Undie Bekwa"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cardNumber">
            Card Number
          </label>
          <div className="flex items-center border rounded-md">
            <input
              id="cardNumber"
              type="text"
              defaultValue="1234 1234 1234 1234"
              className="w-full px-3 py-2 text-sm focus:outline-none"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard Logo"
              className="w-6 h-6 mr-2"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="expiryDate">
              Expiry Date
            </label>
            <input
              id="expiryDate"
              type="text"
              defaultValue="27/07"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cvv">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              defaultValue="123"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="amount">
            Amount
          </label>
          <div className="flex items-center border rounded-md">
            <span className="px-3 text-gray-500">$</span>
            <input
              id="amount"
              type="text"
              defaultValue="120"
              className="w-full px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 mt-4 font-semibold text-sm hover:bg-blue-600"
        >
          Proceed →
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;
