import React from 'react'
import SearchFilters from './SearchFilters'
import TeacherCard from './TeacherCard'
import ScheduleCard from './ScheduleCard'

const FindClasses: React.FC = () => {
  return (
    <div>
      <SearchFilters />
      <div className='p-6 flex flex-col md:flex-row gap-4'>
        <div className='flex-1 space-y-6'>
          <TeacherCard />
          <TeacherCard />
          {/* Duplicate the card for more teachers */}
        </div>
        <div className='w-full md:w-1/3'>
          <ScheduleCard />
        </div>
      </div>
    </div>
  )
}

export default FindClasses
