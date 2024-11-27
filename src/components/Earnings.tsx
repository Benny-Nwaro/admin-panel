import React, { useState } from 'react';
import PaymentMethods from './PaymentMethods';
import SavedPaymentMethod from './SavedPaymentMethod';
import Receipts from './Receipts';




interface PaymentMethodProps {
    methods: {
      id: number;
      icon: React.ReactNode;
      name: string;
      isSelected: boolean;
    }[];
  }

const Earnings: React.FC<PaymentMethodProps> = ({methods}) => {
    const [activeTab, setActiveTab] = useState('My wallet');

    interface Transaction {
        id: number;
        referenceNumber: string;
        amount: number;
      }

      const paymentMethods = [
        {
          id: 1,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 7h14M5 11h14M5 15h14M5 19h14"
              />
            </svg>
          ),
          name: "Credit/Debit Card",
          isSelected: true,
        },
        {
          id: 2,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.3 16.1h6.8v.8H9.3zM11.9 3.6a9.3 9.3 0 11-9.3 9.3 9.3 9.3 0 019.3-9.3zm3.2 7.5h-2v1.6h2v1.6h-2v.8h2v1.6h-2v.8h-1.6v-.8h-2v.8H10v-1.6h2v-.8H9.3V12H10V7.5h1.6zm-1.6-.8h1.6V9H10v.8h2z" />
            </svg>
          ),
          name: "PayPal",
          isSelected: false,
        },
        {
          id: 3,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 16h14M5 20h14M5 8h14M5 4h14"
              />
            </svg>
          ),
          name: "Bank Transfer",
          isSelected: false,
        },
        {
          id: 4,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 16h14M5 20h14M5 8h14M5 4h14"
              />
            </svg>
          ),
          name: "Gift Card",
          isSelected: false,
        },
      ];
      
      
      const transactions: Transaction[] = [
        { id: 1, referenceNumber: "1234567hufhfjnkdiiidjsurkf,vmkjjjfb", amount: 100 },
        { id: 2, referenceNumber: "stgdyguhijjwehewg62383u83y73", amount: 20 },
        { id: 3, referenceNumber: "1234567hufhfjnkdiiidjsurkf,vmkjjjfb", amount: 100 },
        { id: 4, referenceNumber: "stgdyguhijjwehewg62383u83y73", amount: 20 },
      ];
      

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Navigation */}
            <header className="bg-white shadow">
                <nav className="container mx-auto flex justify-start items-center space-x-10 py-4 px-4">
                    {['My wallet', 'Fund wallet', 'Saved payment method', 'Receipts'].map((tab) => (
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
            {activeTab === 'My wallet' && (
                <div className="container mx-auto py-10">
                    <div className="flex flex-col lg:flex-row lg:space-x-10">
                        {/* Earnings Summary */}
                        <div className="w-full max-w-xs mx-auto mt-8 p-6 justify-items-center  text-white rounded-3xl shadow-lg">
                            <h2 className="text-xl font-semibold text-black mb-4">Total Balance</h2>
                            <div className=" text-6xl text-black font-bold mb-4">$ 0.00</div>
                            <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 mx-10 px-2 mt-10 rounded-full" onClick={() => setActiveTab('Fund wallet')}>
                                Fund wallet
                            </button>
                        </div>
                        {/* Earnings Breakdown */}
                        <div className="w-full max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-3xl">
                            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
                            <table className="w-full table-auto">
                                <thead>
                                <tr>
                                    <th className="text-left text-sm font-medium text-gray-600 p-3">Reference Number</th>
                                    <th className="text-left text-sm font-medium text-gray-600 p-3">Amount</th>
                                    <th className="text-left text-sm font-medium text-gray-600 p-3">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {transactions.map((transaction) => (
                                    <tr key={transaction.id} className="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td className="text-sm text-gray-700 p-3">{transaction.referenceNumber}</td>
                                    <td className="text-sm text-gray-700 p-3">${transaction.amount}</td>
                                    <td className="text-sm p-3">
                                        <button className="text-gray-500 hover:text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9L18 9M6 15L18 15" />
                                        </svg>
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                    </div>
                </div>
            )}

            {activeTab === 'Fund wallet' && (
                <div className=" py-10 ">
                    {/* Method of Receiving Payments */}
                    <PaymentMethods methods={paymentMethods} />                    
                </div>
            )}

            {activeTab === 'Saved payment method' && (
                <div className="container mx-auto py-10">
                    {/* Cancellation Policy Section */}
                    <SavedPaymentMethod/>
                </div>
            )}
            {/* Content based on selected tab */}
            {activeTab === 'Receipts' && (
                <div className="container mx-auto py-10">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-6">Receiptss</h2>
                        <Receipts/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Earnings; 