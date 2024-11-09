import { useState } from 'react';

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [clientInfo, setClientInfo] = useState('');
    const [tutorName, setTutorName] = useState('');
    const [lesson, setLesson] = useState('');
    const [location, setLocation] = useState('');
    const [lessonPackage, setLessonPackage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare data for submission
        const bookingData = {
            clientInfo,
            tutorName,
            lesson,
            location,
            lessonPackage,
            startDate,
            startTime,
            isRecurring,
        };

        console.log('Booking Data:', bookingData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Create booking</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        &#x2715;
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Client Input */}
                    <div className="mb-4 flex items-center">
                        <label className="block text-gray-700 mb-1 w-1/4">Client</label>
                        <div className="relative w-3/4">
                            <input
                                type="text"
                                value={clientInfo}
                                onChange={(e) => setClientInfo(e.target.value)}
                                placeholder="Add client information"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-400"
                            />
                            <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">👤</span>
                        </div>
                    </div>

                    {/* Tutor Input */}
                    <div className="mb-4 flex items-center">
                        <label className="block text-gray-700 mb-1 w-1/4">Tutor</label>
                        <input
                            type="text"
                            value={tutorName}
                            onChange={(e) => setTutorName(e.target.value)}
                            placeholder="Enter tutor name"
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-400 w-3/4"
                        />
                    </div>

                    {/* Lesson Input */}
                    <div className="mb-4 flex items-center">
                        <label className="block text-gray-700 mb-1 w-1/4">Lesson</label>
                        <div className="relative w-3/4">
                            <input
                                type="text"
                                value={lesson}
                                onChange={(e) => setLesson(e.target.value)}
                                placeholder="Select a lesson"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-400"
                            />
                            <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">➕</span>
                        </div>
                    </div>

                    {/* Location Select */}
                    <div className="mb-4 flex items-center">
                        <label className="block text-gray-700 mb-1 w-1/4">Location</label>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm w-3/4"
                        >
                            <option value="">Select a location</option>
                            {/* Add your location options here */}
                        </select>
                    </div>

                    {/* Lesson Package Select */}
                    <div className="mb-4 flex items-center">
                        <label className="block text-gray-700 mb-1 w-1/4">Lesson package</label>
                        <select
                            value={lessonPackage}
                            onChange={(e) => setLessonPackage(e.target.value)}
                            className="w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        >
                            <option value="">Select a package</option>
                            {/* Add your package options here */}
                        </select>
                    </div>

                    {/* Start Date/Time */}
                    <div className="mb-4 flex items-center">
                        <label className="text-gray-700 mb-1 w-1/4">Start Date/Time</label>
                        <div className="flex w-3/4">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="mt-1 w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <input
                                type="text"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                placeholder="Start time"
                                className="mt-1 w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Make Recurring Toggle */}
                    <div className="mb-6 flex flex-row items-center">
                        <label className="block text-gray-700 mb-1 mr-16">Make recurring</label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value=""
                                checked={isRecurring}
                                onChange={() => setIsRecurring(!isRecurring)}
                                className="sr-only peer" />
                            <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-3 after:h-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4 items-center">
                        <button
                            type="button"
                            className="px-8 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-10 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;