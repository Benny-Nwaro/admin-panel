import React, { useState } from 'react'
import SubHistoory from './SubHistory'
import ActiveSub from './ActiveSub'

const SubscriptionsTabs = () => {
  const [activeTab, setActiveTab] = useState('active sub')

  return (
    <div className=' max-w-full overflow-auto'>
      <div className='flex justify-between items-center mb-4 '>
        <div className='flex space-x-4'>
          <button
            className={`px-4 py-2 font-medium rounded ${
              activeTab === 'active sub'
                ? 'border-b-2 border-[#414158] text-[#414158]'
                : 'text-[#9193A5]'
            }`}
            onClick={() => setActiveTab('active sub')}
          >
            Active Subscription
          </button>
          <button
            className={`px-4 py-2 font-medium rounded ${
              activeTab === 'sub history'
                ? 'border-b-2 border-[#414158] text-[#414158]'
                : 'text-[#9193A5]'
            }`}
            onClick={() => setActiveTab('sub history')}
          >
            Subscriptions History
          </button>
        </div>
      </div>
      {/* Conditional Rendering */}
      {activeTab === 'active sub' && <ActiveSub />}{' '}
      {/* Render UpcomingClasses when activeTab is 'upcoming' */}
      {activeTab === 'sub history' && <SubHistoory />}{' '}
    </div>
  )
}

export default SubscriptionsTabs
