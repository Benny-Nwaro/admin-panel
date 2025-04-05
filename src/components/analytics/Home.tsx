import React from 'react'
import Charts from './Charts'
import KPISection from './KPISection'
import UserLocation from '../dashboard/UserLocation'

function Home() {
  return (
    <div className='pl-20'>
        <UserLocation/>
        <KPISection/>
        <Charts/>
    </div>
  )
}

export default Home