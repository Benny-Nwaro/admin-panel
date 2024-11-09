import React from 'react'
import Image from 'next/image'
import dummyImg from '../../app/assets/images/educify_pic.png'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { SlBadge, SlPaypal } from 'react-icons/sl'
import { CiCreditCard1, CiWallet } from 'react-icons/ci'
import { FaRegSquarePlus } from 'react-icons/fa6'

const PaymentReviewModal = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        {/* Payment Summary Section */}
        <div className='bg-white p4 rounded-2xl shadow-md border w-full max-w-sm'>
          <h3 className='font-bold  py-4 text-white rounded-t-2xl bg-[#3198F5] text-[16px] text-center mb-4'>
            Payment Summary
          </h3>
          <div className='flex items-center gap-2 px-4 mb-4'>
            <Image
              src={dummyImg}
              alt='User'
              width={50}
              height={50}
              className='rounded-full'
            />
            <div className='flex gap-2  items-center'>
              <h4 className='font-bold text-lg'>Guy Hawkins</h4>
              <RiVerifiedBadgeFill className='text-[#F5AA00] ' />
            </div>
          </div>
          <div className='space-y-2 px-4'>
            <p className='flex justify-between text-[#414158] text-[14px] '>
              Plan Name:{' '}
              <strong className='text-[#171717] text-[14px] '>Trial</strong>
            </p>
            <p className='flex justify-between text-[#414158] text-[14px] '>
              Selected Lesson:{' '}
              <strong className='text-[#171717] text-[14px] '>Algebra</strong>
            </p>
            <p className='flex justify-between text-[#414158] text-[14px] '>
              Date:{' '}
              <strong className='text-[#171717] text-[14px] '>
                Thur, 20th July, 2024
              </strong>
            </p>
            <p className='flex justify-between text-[#414158] text-[14px] '>
              Time:{' '}
              <strong className='text-[#171717] text-[14px] '>12:30 PM</strong>
            </p>
            <p className='flex justify-between text-[#414158] text-[14px] '>
              Class Duration:{' '}
              <strong className='text-[#171717] text-[14px] '>
                30 Minutes
              </strong>
            </p>
          </div>
          <div className='mt-4 px-4'>
            <p className='flex justify-between text-[#414158] text-[14px] '>
              Amount:{' '}
              <strong className='text-[#171717] text-[14px] '>$12 USD</strong>
            </p>
            <p className='flex justify-between text-[#414158] text-[14px] '>
              Tax: <strong className='text-[#171717] text-[14px] '>$0</strong>
            </p>
            <div className='flex gap-2 justify-center border-[#3198F5] items-center rounded-md font-bold text-lg mt-2 border pt-2'>
              <span className='font-medium text-[#414158] text-[14px] '>
                Total:
              </span>{' '}
              <span className=' text-[#171717] text-[24px] '>$12</span>{' '}
              <span className='font-medium text-[#414158] text-[14px] '>
                USD
              </span>
            </div>
          </div>
          <div className='flex items-center px-4 mt-4  py-2 pb-4'>
            <input type='checkbox' id='terms' className='mr-2' />
            <label
              htmlFor='terms'
              className='text-[12px] font-medium text-center text-[#414158]'
            >
              By subscribing for this lesson you agree to our{' '}
              <span className='text-[#3198F5]'>Terms & Conditions</span>
            </label>
          </div>
        </div>

        <div className='w-full  max-w-md'>
          {/* Payment Methods Section */}
          <div className='bg-white  rounded-2xl border shadow-md border-gray-200'>
            <h3 className='font-bold  py-4 text-white rounded-t-2xl bg-[#3198F5] text-[16px] text-center mb-4'>
              Payment Methods
            </h3>
            <div className='space-y-4 px-4 divide-y-2'>
              <label className='flex items-center py-2 gap-2'>
                <input type='radio' name='paymentMethod' value='wallet' />
                <CiWallet />

                <span>Educify Wallet</span>
              </label>
              <label className='flex items-center py-2 gap-2'>
                <input type='radio' name='paymentMethod' value='card' />
                <CiCreditCard1 />

                <span>Debit card ending with **** 4574</span>
                <button className='ml-auto flex gap-2 text-[12px] font-semibold items-center p-2 bg-[#D3E9FD]  text-[#414158]'>
                  Add New Card <FaRegSquarePlus />
                </button>
              </label>
              <label className='flex items-center py-2 gap-2'>
                <input type='radio' name='paymentMethod' value='paypal' />
                <SlPaypal />

                <span>PayPal</span>
              </label>
            </div>

            <div className='flex justify-center'>
              <button className='max-w-[180px] w-56  mt-4 mb-4 mx-auto bg-[#3198F5] text-white py-2 rounded-full font-semibold hover:bg-blue-600'>
                Pay $12 USD
              </button>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className='col-span-1 sm:col-span-2 bg-white p-4 shadow-md rounded-lg border border-gray-200 mt-4'>
            <div className='flex items-center  overflow-hidden max-w-md'>
              {/* Label */}
              <label className='px-4 py-2 font-semibold text-sm text-gray-800'>
                Promo Code
              </label>

              <div className='border-gray-300 border rounded-lg'>
                {/* Input field */}
                <input
                  type='text'
                  placeholder='Please enter your code'
                  className='flex-1 px-4 py-2 text-gray-500 placeholder-gray-400 focus:outline-none'
                />

                {/* Redeem button */}
                <button className='px-4 py-2 font-semibold text-sm text-gray-800 bg-white hover:bg-gray-100 border-l border-gray-300'>
                  REDEEM
                </button>
              </div>
            </div>
            {/* Satisfaction Guarantee */}
            <div className='col-span-1 sm:col-span-2 text-start text-sm text-gray-600 mt-4'>
              <p className='flex items-center  gap-2'>
                <SlBadge className='text-[#F5AA00] ' />

                <span className='text-[#171717] text-[16px] font-bold'>
                  100% Satisfaction Guarantee
                </span>
              </p>
              <p className='text-[#414158] text-[12px]  '>
                If you are unsatisfied with your trial lesson, you can contact
                Customer Support for a refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentReviewModal
