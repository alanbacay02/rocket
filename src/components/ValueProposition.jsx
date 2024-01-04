import React, { useRef, useEffect } from 'react'
import { DataUsageSvg, DataManagementSvg, DataNetworkingSvg } from '../svg-components/SvgLogos'
import { motion, useAnimation, useInView } from 'framer-motion'

const CARD_CONTENT = [
  {
    cardTitle: 'Reliability You Can Trust',
    cardParagraph: 'Orion Network utilizes decentralized infrastructure for maximum security and uptime. Your data stays distributed, ensuring no single point of failure.',
    cardSvgLogo: <DataNetworkingSvg />
  },
  {
    cardTitle: 'Seamless Scalability',
    cardParagraph: 'Our cloud solutions effortlessly scale with your needs. Whether you\'re a startup or an enterprise, Orion adapts to your growth seamlessly.',
    cardSvgLogo: <DataManagementSvg />
  },
  {
    cardTitle: 'We Keep it Simple',
    cardParagraph: 'We believe in simplicity. Orion offers intuitive tools and a user-friendly interface, making cloud management a breeze.',
    cardSvgLogo: <DataUsageSvg />
  },
]

const globalTransitionDelay = 0.1

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 100, y: 0}
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

const ValueProposition = () => {
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
    <div className='relative w-full py-16'>
      <div className='w-full max-w-[1200px] px-4 mx-auto'>
        {/* START OF FLEX CONTAINER */}
        <div className='flex flex-col justify-center items-center text-default'>
          <h1 className='font-bold text-xl sm:text-2xl text-center'>Why Choose Orion</h1>
          {/* START OF GRID */}
          <motion.div
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mt-12 md:mt-20 overflow-hidden'
            ref={containerRef}
            variants={containerVariants}
            initial='hidden'
            animate={mainControls}
          >
            {CARD_CONTENT.map((item, index) => {
              return (
                <motion.div 
                  className={`flex flex-col items-center h-full rounded-2xl bg-secondary p-4 md:p-6 -z-50 ${index === CARD_CONTENT.length - 1 ? 'sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0' : ''} max-w-[300px] sm:max-w-[330px] md:max-w-[400px]`}
                  variants={cardVariants}
                >
                  <div className='h-auto w-32 sm:w-44'>
                    {item.cardSvgLogo}
                  </div>
                  <div>
                    <h2 className='card-h2-title relative font-medium text-default text-sm sm:text-base mt-8 mb-7 z-50'>{item.cardTitle}</h2>
                  </div>
                  <p className='text-default text-xs sm:text-sm leading-10 w-fit'>{item.cardParagraph}</p>
                </motion.div>
              )
            })}
          </motion.div>
          {/* END OF GRID */}
        </div>
        {/* END OF FLEX CONTAINER */}
      </div>
    </div>
  )
}

export default ValueProposition