import React from "react";

const Address: React.FC = () => {
  return (
    <div className="max-w-5xl bg-white rounded-2xl shadow-lg p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Address</h2>
        <button className="text-gray-600 hover:text-blue-500 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 3.75h4.5m-4.5 0v4.5m0-4.5L12 12m0 0l-4.5 4.5m4.5-4.5h9M12 12l-4.5-4.5m4.5 4.5H3.75"
            />
          </svg>
        </button>
      </div>

      {/* Address Info */}
      <div className="flex items-center text-gray-700 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-blue-500 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657A8 8 0 118.343 7.343a8 8 0 019.314 9.314z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11.25h.008v.008H15v-.008z"
          />
        </svg>
        <p className="text-sm">2464 Royal Ln. Mesa, New Jersey 45463</p>
      </div>

      {/* Map */}
      <div className="w-full h-80 overflow-hidden rounded-lg shadow-md">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509395!2d-122.41941508468137!3d37.77492957975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e66c4e23%3A0x1ce739e70a9a73!2s2464%20Royal%20Ln%2C%20Mesa%2C%20NJ%2045463%2C%20USA!5e0!3m2!1sen!2sus!4v1690994920194!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Address;
