import { useState } from 'react';

const NotesModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    // Dropdown state for Homework options
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle the dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-full max-w-3xl p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Create New Note</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        &#x2715;
                    </button>
                </div>

                {/* Modal Content */}
                <div className="mt-4">
                    <form>
                        {/* Form Fields */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#9193A5]">Student Name</label>
                            <input type="text" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black" placeholder="Enter title" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="mb-4 w-1/2 mr-2">
                                <label className="block text-sm font-medium text-[#9193A5]">Select Lesson</label>
                                <select className="mt-1 block w-full px-3 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>Learn Guitar</option>
                                </select>
                            </div>

                            <div className="mb-4 w-1/2 ml-2">
                                <label className="block text-sm font-medium text-[#9193A5]">Due Date</label>
                                <input type="date" className="uppercase mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#9193A5]">Content</label>
                            <textarea className="mt-1 block w-full px-4 pt-3 pb-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-black" placeholder="Write your notes here"></textarea>
                        </div>

                        <div className="flex flex-row justify-between mt-8">
                            {/* Dropdown Button */}
                            <div className="relative mb-4">
                                <button
                                    onClick={toggleDropdown}
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-8 py-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                >
                                    Add attachments
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06 0l3.25 3.25 3.25-3.25a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {dropdownOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Video recording
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Upload document
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Save Button */}
                            <button type="button" className="bg-blue-600 max-h-14 px-8 text-white text-sm font-medium rounded-full hover:bg-[#3198F5] focus:outline-none" onClick={onClose}>
                                Save Note
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NotesModal;