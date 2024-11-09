'use client'

// src/components/Dashboard.tsx

import ToDoList from './ToDoList'
import QuickLinks from './QuickLinks'
import Performance from './Performance'
import UpcomingClass from './UpcomingClass'
import { FC } from 'react'
import MainWrapper from './MainWarpper'

const Dashboard: FC = () => {
  return (
    <>
      <MainWrapper>
        <div className='p-6 grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-1'>
            <h1>Hi Bekwa 👋, Welcome to your dashboard</h1>
            <ToDoList />
            <UpcomingClass />
          </div>
          <div className='lg:col-span-2 space-y-4'>
            <Performance />
            <QuickLinks />
          </div>
        </div>
      </MainWrapper>
    </>
  )
}

export default Dashboard
