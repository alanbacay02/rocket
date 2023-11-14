import React, { useRef, useEffect } from 'react'
import HeroBg from '../assets/HeroBackground.jpg'
import HeroImg from '../assets/dashboard_hero.png'
import CompanyLogos from './CompanyLogos'
import { motion, useInView, useAnimation } from 'framer-motion'

const globalTransitionDelay = 0.1

const textVariants = {
  hidden: { opacity: 0, y: 140 },
  visible: { opacity: 100, y: 0 }
}

const imgVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 100, x: 0, transition: { delay: globalTransitionDelay } }
}

const containerVariants = {
  visible: {
    delay: globalTransitionDelay, // Add a short delay before triggering this transition
    transition: { 
      when: "beforeChildren", // Trigger children animations after transition
      staggerChildren: 0.1, // Step interval for staggering
    }
  }
}

const Hero = () => {
  const containerRef = useRef()
  const isInView = useInView(containerRef)

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    } else {
      mainControls.start('hidden')
    }
  }, [isInView, mainControls])

  return (
    <div className='relative w-full h-fit overflow-clip'>
      <div className='w-full h-fit md:h-screen max-w-[1440px] mx-auto flex flex-col justify-center'>
        <div ref={containerRef} className='grid h-fit md:grid-cols-2 px-4 mt-28 md:mt-0 gap-6 overflow-hidden'>
          <motion.div
            className='flex flex-col md:justify-center text-left text-default'
            variants={containerVariants}
            initial='hidden'
            animate={mainControls}
          >
            <motion.h1 
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'
              variants={textVariants}
            >
              Unleash the Power of the Cloud with Orion.
            </motion.h1>
            <motion.p
              className='text-base md:text-xl lg:text-2xl pr-5 mt-4 md:mt-6 lg:mt-11'
              variants={textVariants}
            >
              At Orion, we're not just in the buisness of providing cloud solutions. We're in the buisness of transforming your digital dreams into reality.
            </motion.p>
            <motion.p
              className='text-base md:text-xl lg:text-2xl pr-5 mt-4 md:mt-6 lg:mt-11'
              variants={textVariants}
            >
              Harness the limitless potential of Cloud now.
            </motion.p>
            <div className='flex flex-row justify-center sm:justify-start gap-3 mt-5 md:mt-7 lg:mt-11 text-sm md:text-lg text-default font-medium'>
              <button className='hero-button bg-primary px-3 py-3 md:px-7 md:py-3  transition-all duration-300'>Get Started</button>
              <button
                className='hero-button bg-secondary px-3 py-3 md:px-7 md:py-3  transition-all duration-300'
              >How It Works</button>
            </div>
          </motion.div>
          <div className='flex justify-center items-center mt-5 md:mt-0'>
            <motion.img
              src={HeroImg} 
              alt='heroImg' 
              loading='lazy' 
              className='max-h-[250px] sm:max-h-[300px] md:max-h-fit w-auto object-cover'
              variants={imgVariants}
              initial='hidden'
              animate={mainControls}
            />
          </div>
        </div>
      
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-background/50 to-90% to-background -z-20' />
        <img
          src={HeroBg}
          alt='Hero_Background'
          className='absolute inset-0 w-full h-full -z-50 object-cover'
          loading='lazy'
        />

        <div className='block mt-11 md:absolute md:mt-0 bottom-2 md:bottom-7 left-0 right-0 w-full max-w-[1440px] h-fit mx-auto z-20'>
          <CompanyLogos />
        </div>
      </div>
    </div>
  )
}

export default Hero