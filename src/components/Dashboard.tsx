'use client'

// src/components/Dashboard.tsx

import { FC } from 'react'
import MainWrapper from './MainWarpper'
import Home from '@/components/dashboard/Home'

const Dashboard: FC = () => {
  return (
    <>
      <MainWrapper>
        <div className='flex flex-col max-w-full max-md:px-2 lg:px-10 mx-auto space-y-5 w-full pt-8'>
          <Home/>
        </div>
      </MainWrapper>
    </>
  )
}

export default Dashboard
