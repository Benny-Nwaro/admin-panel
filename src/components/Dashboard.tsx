'use client'

// src/components/Dashboard.tsx

import { FC } from 'react'
import MainWrapper from './MainWarpper'
import Home from '@/components/dashboard/Home'

const Dashboard: FC = () => {
  return (
    <>
      <MainWrapper>
        <div className='flex flex-col max-w-full px-10 mx-auto space-y-5 w-full pt-8'>
          {/* <div className='flex flex-row space-x-3'>
          <h1>Hi Bekwa 👋, Welcome to your dashboard </h1>
            <button className=' rounded-full bg-yellow-500 text-white px-5'>Complete your profile  </button>
          </div>
          <BookTrial/>
          <UpcomingClass />
          <PendingInvoices/> */}
          <Home/>
        </div>
      </MainWrapper>
    </>
  )
}

export default Dashboard
