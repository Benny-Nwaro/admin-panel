// components/CalendarWithBooking.tsx

import React, { useState } from 'react'
import { FaTimes, FaUser, FaPlus, FaCalendarAlt, FaClock } from 'react-icons/fa'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // for selectable dates and dragging
import ClassesComponents from './classess/ClassesComponents'
import FindClasses from './findClasses/FindClasses'
import SubscriptionsTabs from './subcription/SubscriptionsTabs'

// Modal component for creating a new booking
const CreateBookingModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white rounded-xl shadow-lg p-8 w-[400px]'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Create booking</h2>
          <button onClick={onClose}>
            <FaTimes className='text-gray-600 hover:text-gray-900' />
          </button>
        </div>

        <form className='space-y-4'>
          {/* Client Input */}
          <div>
            <label className='block text-sm font-medium'>Client</label>
            <div className='relative'>
              <input
                type='text'
                placeholder='Add client information'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              />
              <FaUser className='absolute right-3 top-3 text-gray-500' />
            </div>
          </div>

          {/* Tutor Input */}
          <div>
            <label className='block text-sm font-medium'>Tutor</label>
            <input
              type='text'
              defaultValue='Bekwa Undie'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              readOnly
            />
          </div>

          {/* Class Selection */}
          <div>
            <label className='block text-sm font-medium'>Class</label>
            <div className='relative'>
              <select className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'>
                <option>Select a class</option>
              </select>
              <FaPlus className='absolute right-3 top-3 text-gray-500' />
            </div>
          </div>

          {/* Timezone */}
          <div>
            <label className='block text-sm font-medium'>Timezone</label>
            <select className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'>
              <option>UTC +01:00</option>
            </select>
          </div>

          {/* Start Time and Date Inputs */}
          <div className='flex space-x-2'>
            <div className='w-1/2'>
              <label className='block text-sm font-medium'>Start time</label>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='DD/MM/YYYY'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                />
                <FaCalendarAlt className='absolute right-3 top-3 text-gray-500' />
              </div>
            </div>
            <div className='w-1/2'>
              <label className='block text-sm font-medium invisible'>
                Time
              </label>
              <div className='relative'>
                <select className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'>
                  <option>Select time</option>
                </select>
                <FaClock className='absolute right-3 top-3 text-gray-500' />
              </div>
            </div>
          </div>

          {/* Recurring Checkbox */}
          <div className='flex items-center'>
            <label className='block text-sm font-medium mr-4'>
              Make recurring
            </label>
            <input
              type='checkbox'
              className='form-checkbox h-5 w-5 text-blue-600'
            />
          </div>

          {/* Modal Buttons */}
          <div className='flex justify-between'>
            <button
              type='button'
              className='px-4 py-2 bg-gray-200 rounded-lg text-gray-700'
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

{
  /* // Main component including the FullCalendar and the "Create Booking" button/modal */
}
const CalendarWithBooking: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('calendar')

  // const handleCreateBooking = () => {
  //   setIsBookingModalOpen(true)
  // }

  const handleCloseModal = () => {
    setIsBookingModalOpen(false)
  }

  const events = [
    {
      title: 'Math Class',
      start: new Date(),
      end: new Date(),
    },
    {
      title: 'Physics Class',
      start: new Date(new Date().setDate(new Date().getDate() + 1)),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  ]

  return (
    <div className='p-6 bg-white  rounded-xl shadow-lg w-full  max-wfull overflow-auto'>
      <div className='flex bg-white justify-between items-center mb-4 border-b '>
        <div className='flex space-x-4'>
          <button
            className={`px-4 py-2 font-medium rounded ${
              activeTab === 'calendar'
                ? 'border-b-2 border-[#414158] text-[#414158]'
                : 'text-[#9193A5]'
            }`}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </button>
          <button
            className={`px-4 py-2 font-medium rounded ${
              activeTab === 'Classes'
                ? 'border-b-2 border-[#414158] text-[#414158]'
                : 'text-[#9193A5]'
            }`}
            onClick={() => setActiveTab('Classes')}
          >
            Classes
          </button>
          <button
            className={`px-4 py-2 font-medium rounded ${
              activeTab === 'Find Classes'
                ? 'border-b-2 border-[#414158] text-[#414158]'
                : 'text-[#9193A5]'
            }`}
            onClick={() => setActiveTab('Find Classes')}
          >
            Find Classes
          </button>
          <button
            className={`px-4 py-2 relative font-medium rounded ${
              activeTab === 'Subscriptions'
                ? 'border-b-2 border-[#414158] text-[#414158]'
                : 'text-[#9193A5]'
            }`}
            onClick={() => setActiveTab('Subscriptions')}
          >
            Subscriptions
            <div className='absolute top-0   right-0 bg-red-500 w-5 h-5 flex justify-center items-center rounded-full'>
              <span className='text-xs text-white font-bold'>23</span>
            </div>
          </button>
        </div>
        {/* <button
          onClick={handleCreateBooking}
          className='bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition'
        >
          Create Booking
        </button> */}
      </div>
      {/* Conditional Rendering */}
      {activeTab === 'calendar' && (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          selectable={true}
          editable={true}
          events={events}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          height='auto'
        />
      )}
      {activeTab === 'Classes' && <ClassesComponents />}{' '}
      {/* Render UpcomingClasses when activeTab is 'upcoming' */}
      {activeTab === 'Find Classes' && <FindClasses />}{' '}
      {/* Show the Ongoing Classes here */}
      {activeTab === 'Subscriptions' && <SubscriptionsTabs />}
      {isBookingModalOpen && <CreateBookingModal onClose={handleCloseModal} />}
    </div>
  )
}

export default CalendarWithBooking
