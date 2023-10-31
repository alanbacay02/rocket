import React from 'react'
import ReviewCarousel from './ReviewCarousel'

const Reviews = () => {
  return (
    <div className='w-full py-12'>
      <div className='w-full max-w-[1440px] mx-auto'>
        <div className='flex flex-col justify-center items-center px-4 text-center text-default'>
          <h1 className='font-bold text-4xl mb-2'>What Our Customers Say</h1>
        </div>

        <ReviewCarousel />
      </div>
    </div>
  )
}

export default Reviews