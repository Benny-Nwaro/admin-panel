import React from 'react'
import Charts from './Charts'
import KPISection from './KPISection'
import UserLocation from '../dashboard/UserLocation'

function Home() {
  return (
    <div className='max-md:px-3'>
        <UserLocation/>
        <KPISection/>
        <Charts/>
    </div>
  )
}

export default Home