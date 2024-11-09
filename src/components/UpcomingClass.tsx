import React from 'react'
import Image from 'next/image'
import PianoPicture from '@/app/assets/images/piano.png'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { HiMiniVideoCamera } from 'react-icons/hi2'
import Card from './Card'

const UpcomingClass = () => {
  return (
    <Card>
      <div className=' '>
        {/* Header */}
        <div className='flex justify-between p-6 border-b-2 w-full items-center mb-4'>
          <h2 className='text-lg font-semibold'>Upcoming Class</h2>
          <a href='#' className='text-blue-500 font-medium'>
            See All
          </a>
        </div>

        {/* Profile */}
        <div className='flex px-6 items-center mb-4'>
          <Image
            src={PianoPicture}
            alt='Piano'
            className='w-12 h-12 rounded-full object-cover'
          />
          <div className='ml-4'>
            <h3 className='text-[16px] font-semibold'>
              {' '}
              <span className='font-normal capitalize'>tutor:</span> Matt Samuel
            </h3>
            <h3 className='inline-block text-[16px] font-bold  py-0.5 rounded-lg'>
              <span className='font-normal capitalize'>class:</span> Piano 101
            </h3>
          </div>
        </div>

        {/* Class Details */}
        <div className='text-sm px-6 text-gray-600 mb-6'>
          <div className='flex border-b justify-between items-center mb-4'>
            <span>Date</span>
            <span className='font-bold text-gray-800'>20 May, 2024</span>
          </div>
          <div className='flex border-b justify-between items-center mb-4'>
            <span>Time</span>
            <span className='font-bold text-gray-800'>08:30-09:12am</span>
          </div>
          <div className='flex border-b justify-between items-center mb-4'>
            <span>Venue</span>
            <span className='font-bold text-gray-800'>Online</span>
          </div>
        </div>

        {/* Start Lesson Button */}
        <div className='flex w-3/4 items-center text-sm justify-between border border-[#D3E9FD] p-2 rounded-full mb-6 ml-10'>
          <button className='bg-blue-100 p-2 text-blue-600 font-medium rounded-full flex items-center'>
            Join Class
            <HiMiniVideoCamera size={24} className='text-[#3198F5] ml-2' />
          </button>
          <button className='bg-blue-100 p-2 text-blue-600 font-medium rounded-full flex items-center'>
            Message Tutor
            <IoChatbubbleEllipsesSharp size={24} className='text-[#3198F5]' />
          </button>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className='flex justify-between bg-[#3198F5] rounded-3xl rounded-t-none'>
        <button className='bg-white text-[#3198F5] font-medium px-4 py-2 ml-4 my-4 rounded-full'>
          Ask to Reschedule
        </button>
        <button className='border border-white text-white font-medium px-4 py-2 mr-4 my-4 rounded-full'>
          Cancel Class
        </button>
      </div>
    </Card>
  )
}

export default UpcomingClass
