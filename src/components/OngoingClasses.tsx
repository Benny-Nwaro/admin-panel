import Image from 'next/image';
import React from 'react';

const OngoingClasses: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-xl shadow-lg max-w-full overflow-auto">
            {/* Notice Section */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-start">
                <span className="bg-blue-100 p-2 rounded-full text-blue-600 mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m4 4h-1v-4h-1m1 0V8h-1v4H7v4H6m-1 0h12M9 12h2m4 0h2M8 16h8v1H8v-1z"
                        />
                    </svg>
                </span>
                <p className="text-sm text-blue-700">
                    Please note that only classes marked as Complete will be eligible for payment. Ensure you mark your
                    classes accordingly to receive timely compensation.
                </p>
            </div>

            {/* Ongoing Classes Section */}
            <h2 className="text-lg font-semibold mb-4">1 Ongoing Class</h2>

            <div className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        src="https://via.placeholder.com/150" 
                        alt="Student"
                    />
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">Wade Warren</h3>
                        <p className="text-sm text-gray-500">Xylophone</p>
                    </div>
                </div>

                <div className="flex space-x-8">
                    <div className="text-center">
                        <p className="text-sm text-gray-900">Date</p>
                        <p className="text-sm text-gray-500">20/05/2024</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-900">Time</p>
                        <p className="text-sm text-gray-500">08:30–09:12am</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-900">Venue</p>
                        <p className="text-sm text-gray-500">Online</p>
                    </div>
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                    Mark Attendance
                </button>
            </div>
        </div>
    );
};

export default OngoingClasses;
