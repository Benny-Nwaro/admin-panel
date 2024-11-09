import { useState } from 'react';
import BookingModal from './BookingModal';

const Bookings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="mx-12">
            <div className="flex flex-row justify-between items-center py-8">
                <h1 className="font-extrabold text-xl">All Bookings (3)</h1>
                <button onClick={openModal} className="bg-[#3198F5] hover:bg-blue-700 text-white font-bold text-sm py-4 px-8 rounded-full">
                    Create New Booking
                </button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-medium text-left rtl:text-right text-gray-500">
                    <thead className="text-[#9193A5] bg-white">
                        <tr>
                            <th scope="col" className="pl-10 py-4">
                                Client
                            </th>
                            <th scope="col" className="pl-28 py-3">
                                Lesson
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Package
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="pr-2 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-[#414158]">
                        <tr className=" border-b bg-white">
                            <th scope="row" className="pl-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Bray Uche
                            </th>
                            <td className="pl-28 py-3">
                                Violin
                            </td>
                            <td className="px-6 py-4">
                                Online
                            </td>
                            <td className="px-6 py-4">
                                Monthly (30 Mins)
                            </td>
                            <td className="px-10 py-4">
                                $40
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-[#F738391A] text-[#F73839] py-2 px-2 rounded-full">
                                    Cancelled
                                </button>
                            </td>
                            <td className="pr-10 py-4">
                                <div className="flex flex-col justify-center items-center space-y-1">
                                    <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                                </div>
                            </td>
                        </tr>
                        {/* <tr className="border-b bg-white">
                            <th scope="row" className="pl-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Bray Uche
                            </th>
                            <td className="py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white">
                            <th scope="row" className="pl-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Bray Uche
                            </th>
                            <td className="py-4 pr-8">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Bookings;
