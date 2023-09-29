import React from 'react'
import HeroBg from '../assets/HeroBackground.jpg'
import HeroImg from '../assets/serverNoBgGlow.png'
import CompanyLogos from './CompanyLogos'

const Hero = () => {
  return (
    <div className='relative w-full h-screen overflow-clip'>
      <div className='w-full h-full max-w-[1440px] flex justify-center items-center mx-auto'>
        <div className='grid h-full grid-cols-2 my-auto px-6'>
          <div className='flex flex-col justify-center text-default'>
            <h1 className='text-6xl font-bold'>Launch Your <span className='text-default'>Buisness</span> To <span className='relative'>Cloud Excellence<div className='absolute -z-50 w-full h-[65%] -left-2 -bottom-2 bg-secondary' /></span>.</h1>
            <p className='mt-10 text-2xl'>Supercharge your buisness with cutting-edge data and technology services. Harness the power of data for smarter decisions and accelerated growth.</p>
            <div className='flex flex-row justify-start gap-5 my-11 text-lg text-default font-medium'>
              <button className='hero-button bg-primary px-7 py-3  transition-all duration-300'>Get Started</button>
              <button
                className='hero-button bg-secondary px-7 py-3  transition-all duration-300'
              >How It Works</button>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img src={HeroImg} alt='heroImg' className=' object-cover'/>
          </div>
        </div>
      
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-background/50 to-90% to-background -z-20' />
        <img
          src={HeroBg}
          alt='Hero_Background'
          className='absolute inset-0 w-full h-full -z-50 object-cover'
        />

        <div className='absolute bottom-6 left-0 right-0 w-full max-w-[1440px] h-fit mx-auto z-20'>
          <CompanyLogos />
        </div>
      </div>
    </div>
  )
}

export default Hero