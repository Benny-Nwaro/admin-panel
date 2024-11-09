/* eslint-disable react/no-unescaped-entities */
// components/CompletedClasses.tsx

import Image from 'next/image'
import React from 'react'
import dummyImg from '../../app/assets/images/educify_pic.png'

const CompletedClasses: React.FC = () => {
  const classes = [
    {
      student: 'Wade Warren',
      lesson: 'Xylophone',
      date: '20/05/2024',
      time: '08:30-09:12am',
      venue: 'Online',
      status: 'Present',
    },
    {
      student: 'Ronald Richards',
      lesson: 'Stand see principles social site catching.',
      date: '20/05/2024',
      time: '08:30-09:12am',
      venue: "Student's Location",
      status: 'Present',
    },
    {
      student: 'Albert Flores',
      lesson: 'For plane asserts domains wheel.',
      date: '20/05/2024',
      time: '08:30-09:12am',
      venue: "Teacher's Location",
      status: 'Missed',
    },
    {
      student: 'Kathryn Murphy',
      lesson: 'Scraps barn eow info no awareness',
      date: '20/05/2024',
      time: '08:30-09:12am',
      venue: 'Online',
      status: 'Cancelled',
    },
  ]

  return (
    <div className='p-4 sm:p-6 bg-white rounded-xl shadow-lg max-w-full'>
      {/* Header Section */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-[16px] text-[#171717] font-semibold'>
          12 Completed Classes
        </h2>
        <button className='text-[#171717] text-[14px] hover:underline'>
          This week, May 12-18
        </button>
      </div>

      {/* Table for medium and larger screens */}
      <div className='hidden sm:block overflow-auto'>
        <table className='min-w-full table-auto'>
          <thead>
            <tr className='bg-white text-[#9193A5]'>
              <th className='px-4 py-2'>Student</th>
              <th className='px-4 py-2'>Lesson</th>
              <th className='px-4 py-2'>Date</th>
              <th className='px-4 py-2'>Time</th>
              <th className='px-4 py-2'>Venue</th>
              <th className='px-4 py-2'>Status</th>
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
                <td className='px-4 py-2 flex items-center space-x-2'>
                  <Image
                    src={dummyImg} // replace with actual avatars or use a placeholder image
                    alt={classItem.student}
                    className='w-10 h-10 rounded-full'
                  />
                  <span>{classItem.student}</span>
                </td>
                <td className='px-4 py-2'>{classItem.lesson}</td>
                <td className='px-4 py-2'>{classItem.date}</td>
                <td className='px-4 py-2'>{classItem.time}</td>
                <td className='px-4 py-2'>{classItem.venue}</td>
                <td className='px-4 py-2'>
                  <span
                    className={`px-4 py-1 rounded-full text-white ${
                      classItem.status === 'Present'
                        ? 'bg-green-500'
                        : classItem.status === 'Missed'
                        ? 'bg-red-500'
                        : 'bg-gray-500'
                    }`}
                  >
                    {classItem.status}
                  </span>
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
                {classItem.venue}
              </p>
              <p>
                <span className='font-semibold'>Status: </span>
                <span
                  className={`px-4 py-1 rounded-full text-white ${
                    classItem.status === 'Present'
                      ? 'bg-green-500'
                      : classItem.status === 'Missed'
                      ? 'bg-red-500'
                      : 'bg-gray-500'
                  }`}
                >
                  {classItem.status}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompletedClasses
