import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

interface RatingProps {
  rating: number
  totalReviews: string
}

const StarRating: React.FC<RatingProps> = ({ rating, totalReviews }) => {
  // Calculate full, half, and empty stars
  const fullStars = Math.floor(rating)
  const halfStars = rating % 1 >= 0.5 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStars

  return (
    <div className='flex items-center text-yellow-500'>
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className='mr-1' />
      ))}
      {/* Half Star */}
      {halfStars === 1 && <FaStarHalfAlt className='mr-1' />}
      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className='mr-1' />
      ))}
      {/* Rating number and reviews */}
      <span className='text-gray-700 ml-2'>{rating}</span>
      <span className='text-gray-500 ml-1'>({totalReviews} Reviews)</span>
    </div>
  )
}

export default StarRating
