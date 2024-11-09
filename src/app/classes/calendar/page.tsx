//classes/calendar/page.tsx
'use client'
import React from 'react'
import Calendar from '@/components/Calendar'
import MainWrapper from '@/components/MainWarpper'

const ClassesPage: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <div className='flex'>
          <Calendar />
        </div>
      </MainWrapper>
    </>
  )
}

export default ClassesPage
