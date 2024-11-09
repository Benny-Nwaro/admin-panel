import { Img } from '@chakra-ui/react'
import React from 'react'
import { FaPlay } from 'react-icons/fa' // For play button icon

const ScheduleCard: React.FC = () => {
  const schedules = [
    {
      day: 'Monday',
      times: ['07:00 PM', '07:00 PM'],
    },
    {
      day: 'Tuesday',
      times: ['07:00 PM', '07:00 PM', '07:00 PM', '07:00 PM'],
    },
    // Add more days and times as needed
  ]
  return (
    <div className='max-w-sm md:max-w-md p-4 bg-white border rounded-3xl shadow-lg'>
      {/* Video Section */}
      <div className='relative'>
        <Img
          src='https://via.placeholder.com/300x200' // Placeholder image (Replace with actual video thumbnail)
          alt='Video Thumbnail'
          className='rounded-t-lg w-full h-[200px] object-cover'
        />
        {/* Play Button Overlay */}
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='bg-red-600 text-white p-4 rounded-full'>
            <FaPlay className='text-2xl' />
          </div>
        </div>
      </div>

      {/* Schedules Header */}
      <div className='flex justify-between items-center mt-4'>
        <h3 className='text-lg font-semibold'>Schedules</h3>
        <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>
          See all
        </button>
      </div>

      {/* Daily Schedules */}
      <div className='mt-4'>
        {schedules.map((schedule, index) => (
          <div key={index} className='flex items-center justify-between mb-2'>
            <p className='font-medium'>{schedule.day}</p>
            <div className='grid grid-cols-2 gap-2'>
              {schedule.times.map((time, idx) => (
                <button key={idx} className='bg-gray-100 px-3 py-1 rounded-md'>
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleCard
