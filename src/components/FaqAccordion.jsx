import React, { useEffect, useRef } from 'react'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { motion, useAnimation, useInView } from 'framer-motion'

const globalTransitionDelay = 0.1

const itemVariants ={
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 100, y: 0 }
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

const AccordionItem = ({ header, ...rest }) => {
  return (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          <h2 className='font-medium sm:text-lg md:text-xl'>{header}</h2>
          <div className='text-default'>
            {!isEnter ? <AiOutlinePlus />: <AiOutlineMinus />}
          </div>
        </>
      )}
      className='bg-secondary rounded-xl'
      buttonProps={{
        className: ({ isEnter }) =>
          `flex justify-between items-center w-full px-6 p-4 text-left ${isEnter ? 'border-b border-gray-600' : ''}`
      }}
      contentProps={{
        className: "transition-all duration-200 ease-out"
      }}
      panelProps={{ className: "p-4" }}
    />
  )
}

const FaqAccordion = ({ content }) => {
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
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={mainControls}
    >
      <Accordion transition transitionTimeout={600} className='flex flex-col gap-y-5'>
        {content.map((item, index) => {
          return (
            <motion.div variants={itemVariants}>
              <AccordionItem key={index} header={item.question}>
                <p className='text-base sm:text-lg md:text-xl leading-8 md:leading-10 px-3'>{item.answer}</p>
              </AccordionItem>
            </motion.div>
          )
        })}
      </Accordion>

    </motion.div>
  )
}

export default FaqAccordion