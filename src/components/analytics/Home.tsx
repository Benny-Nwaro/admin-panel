import React from 'react'
import Charts from './Charts'
import KPISection from './KPISection'
import UserLocation from '../dashboard/UserLocation'

function Home() {
  return (
    <div className='lg:pl-20 max-md:mt-4'>
        <UserLocation/>
        <KPISection/>
        <Charts/>
    </div>
  )
}

export default Home