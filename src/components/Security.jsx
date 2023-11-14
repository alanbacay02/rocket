import React, { useEffect, useRef } from 'react'
import cloudSecurityImg from '../assets/cloudSecurity.png'
import magGlass from '../assets/magGlass.png'
import serverImg from '../assets/securityCloud3.png'
import { WaveBottom, WaveTop } from '../svg-components/WaveSvg'
import wristWatch from '../assets/wristWatch.png'
import { motion, useAnimation, useInView } from 'framer-motion'

const CARD_CONTENT = [
  {
    cardIcon: <img src={cloudSecurityImg} alt='cloudSecurityImg' />,
    cardDesc: 'Your data, our priority. We employ cutting-edge security protocols to safeguard your information.'
  },
  {
    cardIcon: <img src={magGlass} alt='cloudSecurityImg' />,
    cardDesc: 'Rest easy knowing that your applications are shielded from threats with our robust security measures.'
  },
  {
    cardIcon: <img src={wristWatch} alt='cloudSecurityImg' />,
    cardDesc: 'Experience peace of mind with our 24/7 security monitoring, ensuring that your assets are always protected.'
  }
]

const globalTransitionDelay = 0.1

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 100, x: 0 }
}

const containerVariants = {
  visible: {
    delay: globalTransitionDelay, // Add a short delay before triggering this transition
    transition: { 
      when: "beforeChildren", // Trigger children animations after transition
      staggerChildren: 0.12, // Step interval for staggering
    }
  }
}

const Security = () => {
  const containerRef = useRef()
  const isInView = useInView(containerRef)
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    } else {
      mainControls.start('hidden')
    }
  }, [mainControls, isInView])


  return (
    <div className='relative w-full bg-[#001c72] -z-50'>
      <div className='h-auto'>
        <WaveTop />
      </div>

      <div className='w-full h-fit max-w-[1440px] mx-auto my-14 md:my-0 xl:-mt-28'>
        <div className='grid lg:grid-cols-2 items-center'>
          <div className='hidden lg:block'>
            <img src={serverImg} alt='serverImg' />
          </div>
          <motion.div
            className='flex flex-col max-w-[500px] lg:max-w-[600px] mx-auto items-center justify-center gap-5 px-4 overflow-hidden text-default'
            ref={containerRef}
            variants={containerVariants}
            initial='hidden'
            animate={mainControls}
          >
            <h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-center lg:text-left'>We Put Security First to Safeguard What Matters Most</h2>
            {CARD_CONTENT.map((item, index) => {
              return (
                <motion.div
                  className='w-fit flex flex-col xs:flex-row items-center px-3 md:px-6 py-5 gap-3 bg-[#003097] shadow-xl rounded-xl'
                  variants={cardVariants}
                >
                  <div className='h-auto w-20 xs:w-24 md:w-32'>
                    {item.cardIcon}
                  </div>
                  <p className='text-base sm:text-lg md:text-xl text-center xs:text-left'>
                    {item.cardDesc}
                  </p>
                </motion.div>
              )
            })}
            <div className='flex flex-row w-full justify-center lg:justify-start items-center gap-3 md:gap-5 md:pl-2 text-sm sm:text-base md:text-lg lg:text-xl'>
              <button onClick={() => {}} className='px-3.5 md:px-6 py-2.5 rounded-3xl shadow-xl bg-accent hover:bg-accent/90 transition-colors'>Learn More</button>
              <button onClick={() => {}} className='px-3.5 md:px-6 py-2.5 rounded-3xl shadow-xl bg-white hover:bg-white/90 text-primary'>Documentation</button>
            </div>
          </motion.div>
        </div>
      </div>

      <div>
        <WaveBottom />
      </div>
    </div>
  )
}

export default Security