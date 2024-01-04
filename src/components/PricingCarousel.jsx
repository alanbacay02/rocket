import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ImCheckmark } from 'react-icons/im'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, useAnimation, useInView } from 'framer-motion'

const STANDARD_CONTENT = [
  {
    packageName: 'Personal',
    price: '$59',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.'
    ],
    highlighted: false,
    buttonContent: 'Get a Free Trial'
  },
  {
    packageName: 'Developer',
    price: '$79',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.'
    ],
    highlighted: true,
    buttonContent: 'Get a Free Trial'
  },
  {
    packageName: 'Pro',
    price: '$109',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.'
    ],
    highlighted: false,
    buttonContent: 'Get a Free Trial'
  },
]

const AGENCY_CONTENT = [
  {
    packageName: 'Studio',
    price: '$259',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.'
    ],
    highlighted: false,
    buttonContent: 'Plan Now'
  },
  {
    packageName: 'Startup I',
    price: '$479',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.'
    ],
    highlighted: true,
    buttonContent: 'Plan Now'
  },
  {
    packageName: 'Startup II',
    price: '$759',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.'
    ],
    highlighted: false,
    buttonContent: 'Plan Now'
  },
]

const CUSTOM_CONTENT = [
  {
    packageName: 'Enterprise I',
    price: '$1,019',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.'
    ],
    highlighted: false,
    buttonContent: 'Plan Now'
  },
  {
    packageName: 'Enterprise II',
    price: '$1,259',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.'
    ],
    highlighted: false,
    buttonContent: 'Plan Now'
  },
  {
    packageName: 'Custom',
    price: '$1,599+',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.'
    ],
    highlighted: true,
    buttonContent: 'Get a Quote'
  },
]

// Define the initial state for the package options.
const initialState = {
  standardActive: true,
  agencyActive: false,
  customActive: false
}

// Creates an array object `PACKAGE_TITLES`.
const PACKAGE_TITLES = [
  {
    title: 'STANDARD',
    key: 'standardActive'
  },
  {
    title: 'AGENCY',
    key: 'agencyActive'
  },
  {
    title: 'ENTERPRISE',
    key: 'customActive'
  },
]

const globalTransitionDelay = 0.2

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 100, y: 0 }
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

const Cards = ({ cardContentObj }) => {
  return (
    <div className='w-full h-min'>

    {/* START OF GRID CONTAINER */}
      <div className='grid lg:grid-cols-3 gap-6 items-center mx-6'>
        {/* START OF CARDS */}
        {cardContentObj.map((item, index) => {
          return (
            <motion.div 
              key={index}
              className={`flex flex-col py-5 px-3 mx-auto h-min max-w-[350px] text-center rounded-xl bg-secondary text-default ${item.highlighted ? 'highlighted-pricing-card py-12' : ''}`}
              variants={cardVariants}
            >
              <h2 className={`font-medium text-base xs:text-lg sm:text-xl mb-4 ${item.highlighted ? 'text-primaryText' :  ''}`}>
                {item.packageName}
              </h2>
              <h1 className={`font-bold text-2xl xs:text-3xl sm:text-4xl ${item.highlighted ? 'text-primaryText' : ''}`}>{item.price}</h1>
              <p className='mb-3 text-xs sm:text-sm'>Per Month</p>
              <p className='text-xs sm:text-sm sm:px-6 mb-3'>{item.description}</p>
              <div className='w-full h-[1px] mb-3 bg-gray-600' />
              {/* Start of Package Features */}
              <div  className='flex flex-col px-2 text-left'>
                {item.features.map((feature, index) => {
                  return (
                  <div className='flex flex-row my-1.5 items-center gap-3'>
                    <div className='text-sm sm:text-base text-primaryText'>
                      <ImCheckmark />
                    </div>
                    <p
                      key={index}
                      className='text-xs sm:text-sm'
                    >{feature}</p>
                  </div>
                  )
                })}
                <a href='/#' className='flex flex-row items-center gap-1.5 mt-2 ml-1 w-fit font-medium text-accent hover:underline decoration-accent decoration-2 underline-offset-4 text-xs sm:text-sm'>
                  See More features
                  <div className='pt-1'>
                    <FaArrowRightLong />
                  </div>
                </a>
              </div>
              {/* End of Package Features */}
              <div className='w-full h-[1px] my-3 bg-gray-600' />

              {/* Package Button */}
              <button
                onClick={() => {}}
                className='w-fit mx-auto mt-1 px-3 py-2 font-medium text-xs sm:text-sm text-white bg-primary hover:bg-blue-900 hover:scale-105 transition-all duration-200'>
                {item.buttonContent}
              </button>
            </motion.div>
          )
        })}
        {/* END OF CARDS */}
      </div>
    {/* END OF GRID CONTAINER */}

    </div>
  )
}

const PricingCarouselControls = ({ onControlClick }) => {
  // Initialize the package state with the initial state.
  const [packageState, setPackageState] = useState(initialState)

  // Handle clicks on package bars.
  const handleClick = (target) => {
    // Create a copy of the current state.
    let prevPackageState = {...packageState}
    // Find the previously active package by searching for a key with a 'true' value.
    let prevActiveKey = Object.keys(prevPackageState).find(key => prevPackageState[key] === true)
    
    // Update the state to reflect the new active package.
    setPackageState((prevState) => ({
      ...prevState, // Preserve the previous state.
      [prevActiveKey]: false, // Deactivate the previously active package.
      [target]: true // Activate the selected package.
    }))
  }

  return (
    <div className='relative flex flex-row justify-center items-center gap-3 xs:gap-12 sm:gap-20 md:gap-36 pt-12 mx-4 pb-5 text-default font-bold text-xs sm:text-sm'>
    {PACKAGE_TITLES.map((item, index) => {
      let isSelected = packageState[item.key]
      return (
        <div key={index} className='relative h-auto hover:cursor-pointer' onClick={() => {handleClick(item.key); onControlClick(index);}}>
          <h2 className={`${isSelected ? 'text-primaryText' : ''} transition-colors duration-600 select-none`}>{item.title}</h2>
          <div className={`absolute -bottom-full md:-bottom-5 h-1 w-full bg-primaryText transition-opacity duration-600 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      )
    })}
    <div className='absolute bottom-0 h-[1px] w-full bg-gray-600' />
  </div>
  )
}

const PricingCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, watchDrag: false, })
  const containerRef = useRef()
  const isInView = useInView(containerRef)
  const mainControls = useAnimation()

  const onControlClick = (index) => {
    emblaApi.scrollTo(index)
  }

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    } else {
      mainControls.start('hidden')
    }
  }, [isInView, mainControls])

  return (
    <motion.div 
      className='overflow-hidden'
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={mainControls}
    >

      <PricingCarouselControls onControlClick={onControlClick} />

      <div className="embla overflow-hidden pt-14 md:py-14" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide">
            <Cards cardContentObj={STANDARD_CONTENT} />
          </div>
          <div className="embla__slide">
            <Cards cardContentObj={AGENCY_CONTENT} />
          </div>
          <div className="embla__slide">
            <Cards cardContentObj={CUSTOM_CONTENT} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PricingCarousel