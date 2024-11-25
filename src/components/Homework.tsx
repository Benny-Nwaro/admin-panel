import { useState } from 'react';
import HomeworkModal from './HomeworkModal';

const Homework = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="px-4 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center py-8">
                <h1 className="font-extrabold text-lg md:text-xl mb-4 md:mb-0">All Homeworks (3)</h1>
                <button
                    onClick={openModal}
                    className="bg-[#3198F5] hover:bg-blue-700 text-white font-bold text-sm py-2 px-6 md:py-4 md:px-8 rounded-full"
                >
                    Create New Homework
                </button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm md:text-base text-left rtl:text-right text-gray-500">
                    <thead className="text-[#9193A5] bg-white">
                        <tr>
                            <th scope="col" className="py-3"></th>
                            <th scope="col" className="pr-8 md:pr-64 py-3">Homework</th>
                            <th scope="col" className="px-4 md:px-6 py-3">Lesson</th>
                            <th scope="col" className="px-4 md:px-6 py-3">Start Date</th>
                            <th scope="col" className="px-4 md:px-6 py-3">Due Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#414158]">
                        <tr className="odd:bg-[#D3E9FD] even:bg-white border-b">
                            <th scope="row" className="pl-4 md:pl-10 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="py-4">Silver</td>
                            <td className="px-4 md:px-6 py-4">Laptop</td>
                            <td className="px-4 md:px-6 py-4">$2999</td>
                            <td className="px-4 md:px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th scope="row" className="pl-4 md:pl-10 py-4 font-medium text-gray-900 whitespace-nowrap">
                                2
                            </th>
                            <td className="py-4">White</td>
                            <td className="px-4 md:px-6 py-4">Laptop PC</td>
                            <td className="px-4 md:px-6 py-4">$1999</td>
                            <td className="px-4 md:px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="odd:bg-[#D3E9FD] even:bg-gray-50 border-b">
                            <th scope="row" className="pl-4 md:pl-10 py-4 font-medium text-gray-900 whitespace-nowrap">
                                3
                            </th>
                            <td className="py-4">Black</td>
                            <td className="px-4 md:px-6 py-4">Accessories</td>
                            <td className="px-4 md:px-6 py-4">$99</td>
                            <td className="px-4 md:px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            <HomeworkModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Homework;
