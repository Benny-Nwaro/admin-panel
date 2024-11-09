import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className='w-full max-w-md bg-white shadow-lg rounded-3xl'>
      {children}
    </div>
  )
}
