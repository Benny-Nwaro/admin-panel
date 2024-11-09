/* eslint-disable react/no-unescaped-entities */
'use client'

import { SearchIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

const SearchFilters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className=''>
      <div className='flex items-center justify-center space-x-2 my-4'>
        {/* Search for lessons button */}
        <button className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          Search for lessons
        </button>

        {/* View categories button */}
        <button className='border border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          View categories
        </button>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between mb-4'>
        <div className='w-full relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='text-gray-500' /> {/* Chakra UI Icon */}
          </div>
          <input
            type='text'
            placeholder='Search for lessons'
            value={searchTerm}
            onChange={handleSearch}
            className='p-3 pl-10 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
      </div>
      {/* Search Results (Mockup) */}
      {searchTerm && (
        <div className='mt-4 mb-4'>
          <p className='text-gray-600'>
            Search results for "<strong>{searchTerm}</strong>"
          </p>
        </div>
      )}

      <div className='flex flex-wrap items-center gap-2'>
        <strong className='text-[#171717] text-[16px]  '>Filter by:</strong>
        {[
          'Location',
          'Class Location',
          'Price Range',
          'Gender',
          'Experience',
          'Rating',
          'Availability',
        ].map((filter) => (
          <button
            key={filter}
            className='bg-gray-100 text-[#171717] border-[#9193A5] text-[14px] py-2 px-4 rounded-full'
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFilters
