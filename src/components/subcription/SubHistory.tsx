/* eslint-disable react/no-unescaped-entities */
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import dummyImg from '../../app/assets/images/educify_pic.png'
import { CiReceipt } from 'react-icons/ci'
import { IconType } from 'react-icons'

interface ClassData {
  student: string
  lesson: string
  date: string
  time: string
  image: string | StaticImageData
  icon?: IconType
}

const classesData: ClassData[] = [
  {
    student: 'Wade Warren',
    lesson: 'Xylophone',
    date: '20/05/2024',
    time: '08:30-09:12am',
    image: dummyImg,
    icon: CiReceipt,
  },
  {
    student: 'Ronald Richards',
    lesson: 'Stand see principles social site catching.',
    date: '20/05/2024',
    time: '08:30-09:12am',
    image: dummyImg,
    icon: CiReceipt,
  },
  {
    student: 'Albert Flores',
    lesson: 'For plane asserts domains wheel.',
    date: '20/05/2024',
    time: '08:30-09:12am',
    image: dummyImg,
    icon: CiReceipt,
  },
  {
    student: 'Kathryn Murphy',
    lesson: 'Scraps barn eow info no awareness',
    date: '20/05/2024',
    time: '08:30-09:12am',
    image: dummyImg,
    icon: CiReceipt,
  },
]

const SubHistoory = () => {
  return (
    <div className='p-4 sm:p-6 bg-white rounded-xl shadow-lg mx-auto max-w-full'>
      {/* Table for medium and larger screens */}
      <div className='hidden sm:block overflow-auto'>
        <table className='table-auto w-full text-left'>
          <thead>
            <tr>
              <th className='p-4 font-semibold text-[#9193A5]'>Ttile</th>
              <th className='p-4 font-semibold text-[#9193A5]'>Tutor</th>
              <th className='p-4 font-semibold text-[#9193A5]'>Invoice date</th>
              <th className='p-4 font-semibold text-[#9193A5]'>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {classesData.map((classItem, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-[#D3E9FD] rounded-xl' : 'bg-white'
                } `}
              >
                <td className='p-4'>{classItem.lesson}</td>
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
                <td className='p-4'>{classItem.date}</td>
                <td className='p-4 text-[#3198F5] cursor-pointer '>
                  {' '}
                  <button>
                    {classItem.icon && <classItem.icon size='2em' />}
                  </button>
                </td>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubHistoory
