import React from 'react'
import RevenueAnalytics from './RevenueAnalytics'
import RecentSales from './RecentSales'
import UserLocation from '../dashboard/UserLocation'
import KPISection from './KPISection'

function Sales() {
  return (
    <div className='flex flex-col w-full space-y-5 lg:px-16 max-md:mt-20  max-md:overflow-x-scroll  '>
        <KPISection/>
        <UserLocation/>
        <RevenueAnalytics/>
        <div className=''>
          <RecentSales/>
        </div>
    </div>
  )
}

export default Sales