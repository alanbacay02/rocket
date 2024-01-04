import React from 'react'
import ReviewCarousel from './ReviewCarousel'

const Reviews = () => {
  return (
    <div className='w-full pt-16 pb-4'>
      <div className='w-full max-w-[1200px] mx-auto'>
        <div className='flex flex-col justify-center items-center px-4 text-center text-default'>
          <h1 className='font-bold text-xl sm:text-2xl mb-2'>What Our Customers Say</h1>
        </div>

        <ReviewCarousel />
      </div>
    </div>
  )
}

export default Reviews