/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Performance = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Handler to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Close dropdown if clicked outside
  const handleBlur = (e: {
    currentTarget: { contains: (arg0: any) => any }
    relatedTarget: any
  }) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false)
    }
  }

  return (
    <div className='bg-white p-6 rounded-3xl shadow-md'>
      <div className='flex  justify-between mb-4'>
        <div className=' text-base md:text-xl font-semibold'>
          Your Learning Stats
        </div>
        <div className='relative inline-block' onBlur={handleBlur}>
          <button
            className='flex items-center text-base gap-2 bg-blue-100 text-blue-500 font-bold px-4 py-2 rounded-lg shadow-md focus:outline-none'
            onClick={toggleDropdown}
          >
            All Time
            <FaChevronDown />
          </button>

          {isOpen && (
            <div className='absolute mt-2 w-40 bg-white rounded-md shadow-lg z-10'>
              <ul className='py-2'>
                <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer'>
                  Last 7 Days
                </li>
                <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer'>
                  Last 30 Days
                </li>
                <li className='px-4 py-2 hover:bg-blue-100 cursor-pointer'>
                  All Time
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        {/* Attendance */}
        <div className='bg-[#FFEED1] p-4 rounded-lg'>
          <div className='flex flex-row mb-2'>
            <div className='flex items-center justify-between w-full'>
              <div className='text-lg font-bold text-[#171717] '>
                Attendance Rate
              </div>
              <div className='text-[32px] text-[#414158] font-bold'>95%</div>
            </div>
          </div>
          <div className='text-sm text-[#171717]'>
            You attended 34 out of 36 classes so far
          </div>
        </div>

        {/* Completion Rate */}
        <div className='bg-[#F1F1F9] p-4 rounded-lg'>
          <div className='flex flex-row mb-2'>
            <div className='flex  items-center justify-between w-full'>
              <div className='text-lg font-bold text-[#171717] '>
                Number of lessons
              </div>
              <div className='text-[32px] text-[#414158] font-bold'>23</div>
            </div>
          </div>
          <div className='text-sm text-[#171717]'>
            You have taken a total of 23 lessons
          </div>
        </div>

        {/* Average Grade Join */}
        <div className='bg-[#F7CAE8] p-4 rounded-lg'>
          <div className='flex flex-row mb-2'>
            <div className='flex  item-center justify-between w-full'>
              <div className='text-lg font-bold text-[#171717] '>
                Average Grade
              </div>
              <div className='text-[32px] text-[#414158] font-bold'>A-</div>
            </div>
          </div>
          <div className='text-sm text-[#171717]'>
            Your average grade is 78/100
          </div>
        </div>

        {/* Half The */}
        <div className='bg-[#E8FFE5] p-4 rounded-lg'>
          <div className='flex flex-row mb-2'>
            <div className='flex  item-center justify-between w-full'>
              <div className='text-lg font-bold text-[#171717] '>
                Progress Tracker
              </div>
              <div className='text-[32px] text-[#414158] font-bold'>75%</div>
            </div>
          </div>
          <div className='text-sm text-[#171717]'>
            You have completed 75% of all your lessons
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance
