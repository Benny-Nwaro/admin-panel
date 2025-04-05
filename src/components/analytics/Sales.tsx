import React from 'react'
import RevenueAnalytics from './RevenueAnalytics'
import Receipts from '../Receipts'
import RecentSales from './RecentSales'
import UserLocation from '../dashboard/UserLocation'
import KPISection from './KPISection'

function Sales() {
  return (
    <div className='flex flex-col space-y-5 pl-32 pr-12'>
        <KPISection/>
        <UserLocation/>
        <RevenueAnalytics/>
        <RecentSales/>
    </div>
  )
}

export default Sales