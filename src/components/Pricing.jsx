import React from 'react'
import PricingCarousel from './PricingCarousel'

const Pricing = () => {
  return (
    <div className='w-full -mt-4 pt-4 pb-16 bg-background z-50'>
      <div className='w-full max-w-[1440px] mx-auto'>
        <div className='flex flex-col justify-center items-center mx-6 text-default'>
          <h1 className='font-bold text-4xl mb-7'>Our Plans</h1>
          <p className='text-lg text-center max-w-[800px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptates, minus sapiente voluptatem reiciendis dicta nisi ea repellendus. Quod modi expedita, ipsam suscipit accusantium in pariatur saepe. Corrupti, maxime repudiandae!</p>
        </div>
        <PricingCarousel />
      </div>
    </div>
  )
}

export default Pricing