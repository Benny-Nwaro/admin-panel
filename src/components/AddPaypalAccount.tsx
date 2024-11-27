import React, { useState } from "react";

const AddPaypalAccount: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    paypalEmail: "",
  });
  const [errors, setErrors] = useState({
    accountHolderName: "",
    paypalEmail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { accountHolderName: "", paypalEmail: "" };

    if (!formData.accountHolderName.trim()) {
      newErrors.accountHolderName = "Account holder name is required.";
      isValid = false;
    }

    if (!formData.paypalEmail.trim()) {
      newErrors.paypalEmail = "PayPal email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.paypalEmail)) {
      newErrors.paypalEmail = "Invalid email format.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("PayPal account linked successfully!");
      setFormData({ accountHolderName: "", paypalEmail: "" });
      if (onClose) onClose();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Link a PayPal Account</h2>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4 mb-6">
          <label
            htmlFor="accountHolderName"
            className="w-1/4 text-sm font-medium text-gray-700 text-right"
          >
            Account Holder Name
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleChange}
              placeholder="Enter account holder name"
              className={`mt-1 block w-full rounded-md border ${
                errors.accountHolderName ? "border-red-500" : "border-gray-300"
              } p-3 focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.accountHolderName && (
              <p className="text-sm text-red-500 mt-1">{errors.accountHolderName}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <label
            htmlFor="paypalEmail"
            className="w-1/4 text-sm font-medium text-gray-700 text-right"
          >
            PayPal Email Address
          </label>
          <div className="w-3/4">
            <input
              type="email"
              id="paypalEmail"
              name="paypalEmail"
              value={formData.paypalEmail}
              onChange={handleChange}
              placeholder="Enter PayPal email"
              className={`mt-1 block w-full rounded-md border ${
                errors.paypalEmail ? "border-red-500" : "border-gray-300"
              } p-3 focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.paypalEmail && (
              <p className="text-sm text-red-500 mt-1">{errors.paypalEmail}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-6 mt-6">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-6 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Link Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPaypalAccount;
