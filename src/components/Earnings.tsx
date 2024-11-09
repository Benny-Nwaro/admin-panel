import React, { useState } from 'react';

const Earnings = () => {
    const [activeTab, setActiveTab] = useState('Earnings');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Navigation */}
            <header className="bg-white shadow">
                <nav className="container mx-auto flex justify-start items-center space-x-10 py-4 px-4">
                    {['Earnings', 'Receiving Payments', 'Cancellation Policy', 'Taxes'].map((tab) => (
                        <button
                            key={tab}
                            className={`text-lg font-medium ${activeTab === tab ? 'text-blue-600' : 'text-gray-600'
                                } hover:text-blue-600`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </header>

            {/* Content based on selected tab */}
            {activeTab === 'Earnings' && (
                <div className="container mx-auto py-10">
                    <div className="flex flex-col lg:flex-row lg:space-x-10">
                        {/* Earnings Summary */}
                        <div className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/3">
                            <h2 className="text-xl font-semibold mb-4">Earnings Summary</h2>
                            <div className="mb-2">
                                <p className="text-gray-500">Total Earnings to Date</p>
                                <p className="text-2xl font-bold">$120,392.39</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-gray-500">Earnings this Month</p>
                                <p className="text-2xl font-bold">$1,028.32</p>
                            </div>
                            <div className="mb-6">
                                <p className="text-gray-500">Pending Payments</p>
                                <p className="text-2xl font-bold">$300.00</p>
                            </div>
                            <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600">
                                Export earning report
                            </button>
                            <p className="text-gray-400 text-sm mt-2">Supported formats: .csv, .pdf, .xlsx</p>
                        </div>

                        {/* Earnings Breakdown */}
                        <div className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-2/3">
                            <h2 className="text-xl font-semibold mb-4">Earnings Breakdown</h2>
                            <div className="mb-4">
                                <p className="text-gray-500">Completed Classes</p>
                                <p className="text-2xl font-bold">320</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-500 mb-4">Upcoming Payments</p>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((_, index) => (
                                        <div key={index} className="flex justify-between items-center bg-blue-100 p-4 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src="/avatar.png" // Use an appropriate image
                                                    alt="Profile"
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div>
                                                    <p className="font-semibold">Wade Warren</p>
                                                    <p className="text-sm text-gray-500">Maths</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold">$100</p>
                                                <p className="text-sm text-gray-500">12/07/2024</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 text-xl font-bold">Total: $300</div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Receiving Payments' && (
                <div className="container mx-auto py-10">
                    {/* Method of Receiving Payments */}
                    <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
                        <h2 className="text-xl font-semibold mb-4">Method of Receiving Payments</h2>
                        <p className="text-gray-500 mb-4">
                            In order to be paid for your lessons, you must register a payment method.
                        </p>
                        <button className="w-full bg-blue-100 text-blue-600 font-semibold py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-200">
                            <span>Add a payment method</span>
                            <span className="text-xl font-bold">+</span>
                        </button>
                    </div>

                    {/* Payment Frequency */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Payment Frequency</h2>
                        <p className="text-gray-500 mb-4">How frequently do you wish to be paid?</p>
                        <div className="space-y-4">
                            <div className="p-4 border border-gray-300 rounded-md flex items-start space-x-3">
                                <input
                                    type="radio"
                                    name="paymentFrequency"
                                    className="mt-1"
                                    id="afterLessonCompletion"
                                />
                                <div>
                                    <label htmlFor="afterLessonCompletion" className="font-semibold">
                                        After Lesson Completion
                                    </label>
                                    <p className="text-gray-500">
                                        Payments for completed lessons will be processed and credited to your account
                                        within 48 hours after the lesson plan is finished.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 border-2 border-blue-400 bg-blue-100 rounded-md flex items-start space-x-3">
                                <input
                                    type="radio"
                                    name="paymentFrequency"
                                    className="mt-1"
                                    id="monthlyPayments"
                                    defaultChecked
                                />
                                <div>
                                    <label htmlFor="monthlyPayments" className="font-semibold">
                                        Monthly Payments
                                    </label>
                                    <p className="text-gray-500">
                                        Your earnings will be compiled and paid out on the last day of each month.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Cancellation Policy' && (
                <div className="container mx-auto py-10">
                    {/* Cancellation Policy Section */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
                        <p className="text-gray-500 mb-6">
                            Our cancellation policy is designed to protect both teachers and students. Here’s what you need to know:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Standard Cancellations</h3>
                                <p className="text-gray-500">
                                    Students must cancel at least 24 hours before the lesson to avoid any charges.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">No shows</h3>
                                <p className="text-gray-500">
                                    If a student does not show up for a scheduled lesson without prior notice, they will be charged the full lesson fee.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Last-Minute Cancellations</h3>
                                <p className="text-gray-500">
                                    For cancellations made within 24 hours of the lesson, students will be charged 50% of the lesson fee.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11h2v4H9V7zm0 6h2v2H9v-2z" />
                                </svg>
                                <span>Modify Compensation Level</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Content based on selected tab */}
            {activeTab === 'Taxes' && (
                <div className="container mx-auto py-10">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-6">Taxes</h2>

                        {/* Tax ID Input */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Tax ID (VAT, GST, OST, HST, RFC)
                            </label>
                            <p className="text-gray-500 mb-4">
                                Educify uses your country-specific tax ID to determine appropriate tax collection remittance and for receipt purposes, when applicable.
                            </p>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Tax ID"
                                    className="border border-gray-300 p-3 rounded-lg w-full mr-4"
                                />
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    Proceed
                                </button>
                            </div>
                        </div>

                        {/* EU VAT Tax Collection */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-gray-700 font-semibold">
                                    EU VAT Tax Collection
                                </label>
                                <input
                                    type="checkbox"
                                    className="h-6 w-6 text-blue-600 rounded-full"
                                    defaultChecked
                                />
                            </div>
                            <p className="text-gray-500">
                                If applicable, charge VAT (value-added tax) to customers located within the EU. Any change made to your VAT settings will apply to all products in your school.
                            </p>
                            <p className="text-gray-400 mt-2 text-sm">
                                When enabled, Teachable charges, files, and remits VAT to respective EU governments on your behalf. If your courses are VAT exempt, you can disable VAT charging in the EU.
                            </p>
                        </div>

                        {/* Include taxes in all prices */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-gray-700 font-semibold">
                                    Include taxes in all prices
                                </label>
                                <input
                                    type="checkbox"
                                    className="h-6 w-6 text-blue-600 rounded-full"
                                />
                            </div>
                            <p className="text-gray-500">
                                Choose whether you would like for your products to be tax inclusive or exclusive.
                            </p>
                            <p className="text-gray-400 mt-2 text-sm">
                                When enabled, your customers will pay the price you set for your products, regardless of where they are located. Teachable will calculate and withdraw the appropriate taxes from that price.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Earnings; 