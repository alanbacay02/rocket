import React from 'react'
import ReviewCarousel from './ReviewCarousel'

const Reviews = () => {
  return (
    <div className='w-full py-12'>
      <div className='w-full max-w-[1440px] mx-auto'>
        <div className='flex flex-col justify-center items-center text-default'>
          <h1 className='font-bold text-4xl'>Testimonials</h1>
          <p className='text-2xl mt-4'>What other people say about us</p>
        </div>

        <ReviewCarousel />
      </div>
    </div>
  )
}

export default Reviews