// components/NewListingModal.jsx
import React from 'react';

const NewListing = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg m-12">
            <div className="m-6">
                <div className="flex flex-row items-center justify-between mb-8">
                    <h2 className="text-xl font-bold">New Listing</h2>
                    <a href="/listing" className="text-gray-600 hover:text-gray-900">
                        &#x2715;
                    </a>
                </div>
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center justify-center w-2/5">
                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-[#9193A5]">Subject Category</label>
                        <select className="w-full border rounded-md p-2">
                            <option>Select subject category</option>
                            {/* Add options here */}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-[#9193A5]">Subject</label>
                        <select className="w-full border rounded-md p-2">
                            <option>Select subject</option>
                            {/* Add options here */}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-[#9193A5]">Level</label>
                        <select className="w-full border rounded-md p-2">
                            <option>Select level</option>
                            {/* Add options here */}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-[#9193A5]">Lesson Title</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2 placeholder-black"
                            placeholder="Ex. begin your music career with piano lessons"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-[#9193A5]">Lesson Location</label>
                        <select className="w-full border rounded-md p-2">
                            <option>Select lesson location</option>
                            {/* Add options here */}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-[#9193A5]">Headline</label>
                    <textarea
                        className="w-full h-32 border rounded-md p-2 placeholder-black"
                        placeholder="Write a compelling paragraph about the course"
                    ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-[#9193A5]">Discount (%)</label>
                        <input
                            type="number"
                            className="w-full border rounded-md p-2 placeholder-black"
                            placeholder="Discount percentage"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-[#9193A5]">Discount end date</label>
                        <input
                            type="date"
                            className="w-full border rounded-md p-2 uppercase"
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 text-white font-bold py-4 px-8 rounded-full">Save Listing</button>
                </div>
            </div>
        </div>
    );
};

export default NewListing;