import React from 'react';

const CheckoutIncomplete: React.FC = () => {
  return (
    <div className="flex-1 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center">
      {/* Card Content */}
      <div className="w-full max-w-3xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {/* Profile Image */}
            <img
              src="https://via.placeholder.com/40"  // Replace with actual image source
              alt="Tutor"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-semibold">Darrell Steward</h2>
              <p className="text-gray-500 text-lg">Piano Tutor</p>
            </div>
          </div>
          {/* Proceed to pay button */}
          <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg">
            PROCEED TO PAY
          </button>
        </div>

        {/* Message Section */}
        <div className="text-center mb-6">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">Your Checkout is Incomplete</h3>
          <p className="text-gray-600 text-xl max-w-lg mx-auto">
            It looks like you started the checkout process but didn’t complete it.
            Don’t miss out on your learning journey—let’s get you back on track!
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button className="bg-red-500 text-white px-8 py-4 rounded-full text-lg w-full sm:max-w-md">
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutIncomplete;
