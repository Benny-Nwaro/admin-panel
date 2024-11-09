/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Img } from '@chakra-ui/react'
import { HiMiniCheckBadge } from 'react-icons/hi2'
import StarRating from './StarRating'
import { MdOutlinePets } from 'react-icons/md'
import { SlPeople } from 'react-icons/sl'
import { MdWorkOutline } from 'react-icons/md'
import { LiaMapMarkerAltSolid } from 'react-icons/lia'

const TeacherCard: React.FC = () => {
  const newImage = `https://bit.ly/sage-adebayo`
  return (
    <div className='max-w-full md:max-w-4xl p-6 bg-white border rounded-3xl shadow-lg flx flexcol md:flexrow'>
      <div className='flex gap-2 relative flex-wrap md:flex-nowrap'>
        {/* Profile Image Section */}
        <div className='relative'>
          <Img
            src={newImage}
            alt='Guy Hawkins'
            width={175}
            height={185}
            className='rounded-2xl'
          />
          <span className='absolute bottom-0 left-0 rounded-bl-2xl bg-[#3198F5] text-white text-sm px-2 py-1 rounded-lg'>
            1st lesson free
          </span>
        </div>

        {/* Info Section */}
        <div className='flex justify-between w-full '>
          <div className='flex justify-between items-start'>
            {/* Name and Rating */}
            <div>
              <h2 className='text-[20px] flex gap-2 items-center text-[#191919] font-bold'>
                Guy Hawkins{' '}
                <span className='text-[#3198F5]'>
                  <HiMiniCheckBadge />
                </span>
              </h2>

              <StarRating rating={4.3} totalReviews='3.3k' />
              {/* Additional Details */}
              <div className='text-gray-700 mt-4'>
                <p className='flex  gap-2 items-center text-[#414158] text-[16px] '>
                  <LiaMapMarkerAltSolid />
                  Location
                </p>
                <p className='flex  gap-2 items-center text-[#414158] text-[16px] '>
                  <MdWorkOutline />
                  Teaches
                  <strong className='font-semibold'>Online, In-Person</strong>
                </p>
                <p className='flex  gap-2 items-center text-[#414158] text-[16px] '>
                  <SlPeople />
                  <strong>234</strong> Students
                </p>
                <p className='flex items-center gap-2 text-[#414158] text-[16px] '>
                  <MdOutlinePets /> No pets
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='mt4 flx grid space-y-4'>
            {/* Pricing and Heart Icon */}
            <div className='textright flex gap-3'>
              <p className='line-through text-[15px] text-[#9193A5]'>$23/hr</p>
              <p className='text-[19px] font-bold text-[#414158] '>$23/hr</p>
              <FaHeart className='text-gray-300 inline-block mt-2 cursor-pointer' />
            </div>
            <button className='bg-[#D3E9FD] text-[#3198F5] px-4 py-2 rounded-md'>
              Ask a Question
            </button>
            <button className='bg-[#3198F5] text-white px-4 py-2 rounded-md'>
              Book a Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='mt-4 text-gray-600  md:mt0 md:ml-4 py-6 border-t'>
        <p>
          Customer zoom line / savvy. Growth now lift other I stakeholder. After
          leverage catching no-brainer moments functional skulls opportunity
          hands what's. Product going open race reinvent illustration. Field
          impact.
        </p>
      </div>
    </div>
  )
}

export default TeacherCard
