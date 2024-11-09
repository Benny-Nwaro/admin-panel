/* eslint-disable react/no-unescaped-entities */
// components/UpcomingClasses.tsx
import { FaChevronDown } from 'react-icons/fa'
import Image, { StaticImageData } from 'next/image'
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

const ComingClasses: React.FC = () => {
  return (
    <div className='p-4 sm:p-6 max-w-full mx-auto'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
        <div className='flex space-x-2 sm:space-x-4 mb-2 sm:mb-0'>
          <button className='bg-gray-100 text-black px-4 py-2 rounded-lg'>
            Week
          </button>
          <span className='font-semibold text-lg'>12 Classes</span>
        </div>
        <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2'>
          <button className='bg-white text-black px-4 py-2 rounded-lg border border-gray-300'>
            This week, May 12-18
          </button>
          <span className='text-sm text-gray-500'>
            Your time zone UTC +01:00{' '}
            <a href='#' className='text-blue-500'>
              Change
            </a>
          </span>
        </div>
      </div>

      {/* Table for medium and larger screens, grid for small screens */}
      <div className='overflow-hidden'>
        <div className='hidden sm:block'>
          <table className='table-auto w-full text-left'>
            <thead>
              <tr>
                <th className='p-4 font-semibold text-[#9193A5]'>Tutor</th>
                <th className='p-4 font-semibold text-[#9193A5]'>Lesson</th>
                <th className='p-4 font-semibold text-[#9193A5]'>Date</th>
                <th className='p-4 font-semibold text-[#9193A5]'>Time</th>
                <th className='p-4 font-semibold text-[#9193A5]'>Venue</th>
                <th className='p-4 font-semibold text-[#9193A5]'></th>
              </tr>
            </thead>
            <tbody>
              {classesData.map((classItem, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-[#D3E9FD]' : 'bg-white'
                  } `}
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
                  <td className='p-4'>
                    {classItem.time}
                    <span className='text-gray-500 block text-xs'>
                      (America/Edmonton)
                    </span>
                  </td>
                  <td className='p-4'>{classItem.venue}</td>
                  <td className='p-4'>
                    <button className='bg-[#3198F5] text-white px-4 py-2 rounded-lg flex items-center space-x-1'>
                      <span>Action</span>
                      <FaChevronDown />
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
                  {classItem.time}{' '}
                  <span className='text-gray-500'>(America/Edmonton)</span>
                </p>
                <p>
                  <span className='font-semibold'>Venue: </span>
                  {classItem.venue}
                </p>
              </div>
              <div className='mt-4'>
                <button className='bg-[#3198F5] text-white px-4 py-2 rounded-lg flex items-center space-x-1 w-full justify-center'>
                  <span>Action</span>
                  <FaChevronDown />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComingClasses
