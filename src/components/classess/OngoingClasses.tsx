/* eslint-disable react/no-unescaped-entities */
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import dummyImg from '../../app/assets/images/educify_pic.png'

interface ClassData {
  student: string
  lesson: string
  date: string
  time: string
  venue: string
  image: string | StaticImageData
}

const classesData: ClassData[] = [
  {
    student: 'Wade Warren',
    lesson: 'Xylophone',
    date: '20/05/2024',
    time: '08:30-09:12am',
    venue: 'Online',
    image: dummyImg,
  },
  {
    student: 'Ronald Richards',
    lesson: 'Stand see principles social site catching.',
    date: '20/05/2024',
    time: '08:30-09:12am',
    venue: "Student's Location",
    image: dummyImg,
  },
  {
    student: 'Albert Flores',
    lesson: 'For plane asserts domains wheel.',
    date: '20/05/2024',
    time: '08:30-09:12am',
    venue: "Teacher's Location",
    image: dummyImg,
  },
  {
    student: 'Kathryn Murphy',
    lesson: 'Scraps barn eow info no awareness',
    date: '20/05/2024',
    time: '08:30-09:12am',
    venue: 'Online',
    image: dummyImg,
  },
]

const OngoingClasses: React.FC = () => {
  return (
    <div className='p-4 sm:p-6 bg-white rounded-xl shadow-lg mx-auto max-w-full'>
      {/* Ongoing Classes Section */}
      <h2 className='text-lg font-semibold mb-4'>1 Ongoing Class</h2>

      {/* Table for medium and larger screens */}
      <div className='hidden sm:block overflow-auto'>
        <table className='table-auto w-full text-left'>
          <thead>
            <tr>
              <th className='p-4 font-semibold text-[#9193A5]'>Student</th>
              <th className='p-4 font-semibold text-[#9193A5]'>Lesson</th>
              <th className='p-4 font-semibold text-[#9193A5]'>Date</th>
              <th className='p-4 font-semibold text-[#9193A5]'>Time</th>
              <th className='p-4 font-semibold text-[#9193A5]'>Venue</th>
            </tr>
          </thead>
          <tbody>
            {classesData.map((classItem, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-[#D3E9FD]' : 'bg-white'} `}
              >
                <td className='p-4 flex items-center space-x-3'>
                  <Image
                    src={classItem.image}
                    alt={classItem.student}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                  <span>{classItem.student}</span>
                </td>
                <td className='p-4'>{classItem.lesson}</td>
                <td className='p-4'>{classItem.date}</td>
                <td className='p-4'>{classItem.time}</td>
                <td className='p-4'>{classItem.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className='block sm:hidden'>
        {classesData.map((classItem, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? 'bg-[#D3E9FD]' : 'bg-white'
            } border-b p-4 rounded-lg mb-2`}
          >
            <div className='flex items-center space-x-3 mb-3'>
              <Image
                src={classItem.image}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OngoingClasses
