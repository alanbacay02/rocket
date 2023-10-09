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
            <h1 className='text-6xl font-bold'>Unleash the Power of the Cloud with Orion.</h1>
            <p className='mt-10 text-2xl pr-5'>At Orion, we're not just in the buisness of providing cloud solutions. We're in the buisness of transforming your digital dreams into reality. Harness the limitless potential of Cloud now.</p>
            <div className='flex flex-row justify-start gap-5 my-11 text-lg text-default font-medium'>
              <button className='hero-button bg-primary px-7 py-3  transition-all duration-300'>Get Started</button>
              <button
                className='hero-button bg-secondary px-7 py-3  transition-all duration-300'
              >How It Works</button>
            </div>
          </div>
          <div className='flex items-center'>
            <img src={HeroImg} alt='heroImg' loading='lazy' className='max-h-[66%] w-auto object-cover'/>
          </div>
        </div>
      
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-background/50 to-90% to-background -z-20' />
        <img
          src={HeroBg}
          alt='Hero_Background'
          className='absolute inset-0 w-full h-full -z-50 object-cover'
          loading='lazy'
        />

        <div className='absolute bottom-7 left-0 right-0 w-full max-w-[1440px] h-fit mx-auto z-20'>
          <CompanyLogos />
        </div>
      </div>
    </div>
  )
}

export default Hero