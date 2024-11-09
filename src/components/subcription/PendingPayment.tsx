/* eslint-disable react/no-unescaped-entities */
// components/CompletedClasses.tsx

import Image from 'next/image'
import React, { useState } from 'react'
import dummyImg from '../../app/assets/images/educify_pic.png'
import InvoiceModal from './InvoiceModal'
import ReusableModal from './ReusableModal'
import PaymentReviewModal from './PaymentReviewModal'

const PendingPayment = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [view, setView] = useState('invoice')

  const openModalWithView = (viewName: React.SetStateAction<string>) => {
    setView(viewName)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const classes = [
    {
      student: 'Wade Warren',
      lesson: 'Xylophone',
      date: '20/05/2024',
      time: '08:30-09:12am',
      venue: 'Online',
      status: 'Present',
      amount: '$12',
    },
  ]

  return (
    <>
      <div className='p-4 sm:p-6 bg-white rounded-xl shadow-lg max-w-full'>
        {/* Header Section */}

        <button
          className={`px-4 py-2 text-[#171717] relative font-medium rounded `}
        >
          Pending Payment
          <div className='absolute top-0  -right-2 bg-red-500 w-5 h-5 flex justify-center items-center rounded-full'>
            <span className='text-xs text-white font-bold'>1</span>
          </div>
        </button>

        {/* Table for medium and larger screens */}
        <div className='hidden sm:block overflow-auto'>
          <table className='min-w-full table-auto'>
            <thead>
              <tr className='bg-white text-[#9193A5]'>
                <th className='p-4 font-semibold text-[#9193A5]'>Ttile</th>
                <th className='p-4 font-semibold text-[#9193A5]'>Tutor</th>
                <th className='p-4 font-semibold text-[#9193A5]'>Package</th>
                <th className='p-4 font-semibold text-[#9193A5]'>Day/Time</th>
                <th className='p-4 font-semibold text-[#9193A5]'>
                  Start/End date
                </th>
                <th className='p-4 font-semibold text-[#9193A5]'>amount</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-[#D3E9FD]' : 'bg-white'
                  } text-center `}
                >
                  <td className='px-4 py-2'>{classItem.lesson}</td>
                  <td className='px-4 py-2 flex items-center space-x-2'>
                    <Image
                      src={dummyImg} // replace with actual avatars or use a placeholder image
                      alt={classItem.student}
                      className='w-10 h-10 rounded-full'
                    />
                    <span>{classItem.student}</span>
                  </td>
                  <td className='px-2 py-2'>{classItem.date}</td>
                  <td className='px-2 py-2'>{classItem.time}</td>
                  <td className='px-2 py-2'>{classItem.venue}</td>
                  <td className='px-2 py-2'>{classItem.amount}</td>
                  <td className='cursor-pointer'>
                    <button
                      // onClick={() => setInvoiceModalOpen(true)}
                      onClick={() => openModalWithView('invoice')}
                      className={`px-2 py-2 rounded-full bg-red-500 text-white  `}
                    >
                      View Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for small screens */}
        <div className='block sm:hidden'>
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-[#D3E9FD]' : 'bg-white'
              } border-b p-4 rounded-lg mb-2`}
            >
              <div className='flex items-center space-x-3 mb-3'>
                <Image
                  src={dummyImg}
                  alt={classItem.student}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div>
                  <h3 className='font-semibold'>{classItem.student}</h3>
                  <p className='text-sm text-gray-500'>{classItem.lesson}</p>
                </div>
              </div>
              <div className='text-sm space-y-2'>
                <p>
                  <span className='font-semibold'>Date: </span>
                  {classItem.date}
                </p>
                <p>
                  <span className='font-semibold'>Time: </span>
                  {classItem.time}
                </p>
                <p>
                  <span className='font-semibold'>Venue: </span>
                  {classItem.amount}
                </p>
                <p>
                  <button
                    // onClick={() => setInvoiceModalOpen(true)}
                    onClick={() => openModalWithView('invoice')}
                    className={`px-2 py-2 rounded-full bg-red-500 text-white  `}
                  >
                    View Invoice
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <ReusableModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={view === 'invoice' ? 'Invoice' : 'Review and Subscribe'}
          className={view === 'invoice' ? 'max-w-lg' : 'max-w-3xl'} // Different widths for each view
          actions={
            view === 'invoice' && (
              <button
                className='w-full max-w-xs bg-[#3198F5] text-white py-3 rounded-full font-semibold hover:bg-blue-600'
                onClick={() => setView('review')}
              >
                Pay Invoice
              </button>
            )
          }
        >
          {view === 'invoice' ? <InvoiceModal /> : <PaymentReviewModal />}
        </ReusableModal>
      )}
    </>
  )
}

export default PendingPayment
