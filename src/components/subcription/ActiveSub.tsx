/* eslint-disable react/no-unescaped-entities */
// components/UpcomingClasses.tsx
import { FaChevronDown } from 'react-icons/fa'
import Image, { StaticImageData } from 'next/image'
import dummyImg from '../../app/assets/images/educify_pic.png'
import PendingPayment from './PendingPayment'
import { useState } from 'react'
import ReusableModal from './ReusableModal'
import PauseSubscriptionForm from './PauseSubscriptionForm'

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

const ActiveSub = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  )

  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index)) // Toggle dropdown for specific row
  }

  const handleAction = (action: string) => {
    if (action === 'Pause Subscription') {
      openModal() // Open modal for Pause Subscription
    }
    console.log(`Selected action: ${action}`)
    setOpenDropdownIndex(null) // Close the dropdown after selecting an action
  }
  return (
    <>
      <PendingPayment />
      <div className='p-4 sm:p-6 max-w-full mx-auto'>
        {/* Table for medium and larger screens, grid for small screens */}
        <div className='overflow-hidden'>
          <div className='hidden sm:block'>
            <table className='table-auto w-full text-left'>
              <thead>
                <tr>
                  <th className='p-4 font-semibold text-[#9193A5]'>Title</th>
                  <th className='p-4 font-semibold text-[#9193A5]'>Tutor</th>
                  <th className='p-4 font-semibold text-[#9193A5]'>
                    Start Date
                  </th>
                  <th className='p-4 font-semibold text-[#9193A5]'>End </th>
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
                    <td className='p-4'>{classItem.time}</td>
                    <td className='p-4 relative'>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className='bg-[#3198F5] text-white px-4 py-2 rounded-lg flex items-center space-x-1'
                      >
                        <span>Action</span>
                        <FaChevronDown />
                      </button>

                      {/* Dropdown menu */}
                      {openDropdownIndex === index && (
                        <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
                          <ul className='py-2'>
                            <li>
                              <button
                                onClick={() =>
                                  handleAction('Pause Subscription')
                                }
                                className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'
                              >
                                Pause Subscription
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => handleAction('Receipt')}
                                className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'
                              >
                                Receipt
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
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
                    <p className='text-sm text-gray-500'>{classItem.lesson}</p>
                    <h3 className='font-semibold'>{classItem.student}</h3>
                  </div>
                </div>
                <div className='text-sm space-y-2'>
                  <p>
                    <span className='font-semibold'>Start Date: </span>
                    {classItem.date}
                  </p>
                  <p>
                    <span className='font-semibold'>End Date: </span>
                    {classItem.time}{' '}
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

      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title='Pause subscription'
        actions={
          <button
            className='w-full bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-600'
            onClick={closeModal}
          >
            Pause
          </button>
        }
      >
        <PauseSubscriptionForm />
      </ReusableModal>
    </>
  )
}

export default ActiveSub
