import React, { useState } from 'react'

const PauseSubscriptionForm = () => {
  const [pauseBy, setPauseBy] = useState('Timeframe')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [reason, setReason] = useState('')

  return (
    <div className=' max-w-md'>
      <label className='block font-bold text-[16px] text-start text-[#171717] mb-1'>
        Pause duration
      </label>
      <select
        value={pauseBy}
        onChange={(e) => setPauseBy(e.target.value)}
        className='w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-blue-500'
      >
        <option value='Timeframe'>Timeframe</option>
        <option value='Other Option'>Other Option</option>
      </select>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            Start date
          </label>
          <input
            type='date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div>
          <label className='block font-medium text-gray-700 mb-1'>
            End date
          </label>
          <input
            type='date'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
          />
        </div>
      </div>

      <p className='text-sm text-gray-500 mb-4'>
        Your subscription will resume on {endDate || 'N/A'}
      </p>

      <label className='block font-medium text-gray-700 mb-1'>Reason</label>
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder='Enter reason for pausing subscription'
        maxLength={100}
        rows={4}
        className='w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
      />
      <div className='text-right text-sm text-gray-400'>
        {reason.length}/100
      </div>
      <p className='text-sm text-gray-500 mt-2'>
        This note will be visible to the tutor
      </p>
    </div>
  )
}

export default PauseSubscriptionForm
