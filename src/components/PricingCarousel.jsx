import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ImCheckmark } from 'react-icons/im'
import useEmblaCarousel from 'embla-carousel-react'

const STANDARD_CONTENT = [
  {
    packageName: 'Personal',
    price: '$59',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consect.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
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
    title: 'CUSTOM / ENTERPRISE',
    key: 'customActive'
  },
]

const Cards = ({ cardContentObj }) => {
  return (
    <div className='w-full h-min'>

    {/* START OF GRID CONTAINER */}
      <div className='grid grid-cols-3 gap-10 items-center px-6'>
        {/* START OF CARDS */}
        {cardContentObj.map((item, index) => {
          return (
            <div 
              key={index}
              className={`flex flex-col py-10 px-4 mx-auto h-min max-w-[450px] text-center rounded-xl bg-secondary text-default ${item.highlighted ? 'highlighted-pricing-card py-12' : ''}`}
            >
              <h2 className={`font-medium text-3xl mb-10 ${item.highlighted ? 'text-primaryText' :  ''}`}>
                {item.packageName}
              </h2>
              <h1 className={`font-bold text-7xl ${item.highlighted ? 'text-primaryText' : ''}`}>{item.price}</h1>
              <p className='mb-5'>Per Month</p>
              <p className='px-7 mb-5'>{item.description}</p>
              <div className='w-full h-[1px] mb-5 bg-gray-600' />
              {/* Start of Package Features */}
              <div  className='flex flex-col px-8 text-left'>
                {item.features.map((feature, index) => {
                  return (
                  <div className='flex flex-row my-2 items-center gap-3'>
                    <div className='text-lg text-primaryText'>
                      <ImCheckmark />
                    </div>
                    <p key={index}>{feature}</p>
                  </div>
                  )
                })}
                <a href='/#' className='flex flex-row items-center gap-1.5 mt-4 ml-1 w-fit font-medium text-accent hover:underline decoration-accent decoration-2 underline-offset-4'>
                  See all features
                  <div className='text-xl pt-0.5'>
                    <FaArrowRightLong />
                  </div>
                </a>
              </div>
              {/* End of Package Features */}
              <div className='w-full h-[1px] mt-6 bg-gray-600' />
              <button
                onClick={() => {}}
                className='w-fit mt-10 mx-auto px-8 py-3 font-medium text-white bg-primary hover:bg-blue-900 hover:scale-105 transition-all duration-200'>
                {item.buttonContent}
              </button>
            </div>
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
    <div className='relative flex flex-row justify-center items-center gap-36 mt-12 mx-6 pb-5 text-default font-bold text-lg'>
    {PACKAGE_TITLES.map((item, index) => {
      let isSelected = packageState[item.key]
      return (
        <div key={index} className='relative hover:cursor-pointer' onClick={() => {handleClick(item.key); onControlClick(index);}}>
          <h2 className={`${isSelected ? 'text-primaryText' : ''} transition-colors duration-600 select-none`}>{item.title}</h2>
          <div className={`absolute -bottom-5 h-1 w-full bg-primaryText transition-opacity duration-600 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      )
    })}
    <div className='absolute bottom-0 h-[1px] w-full bg-gray-600' />
  </div>
  )
}

const PricingCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, watchDrag: false, })

  const onControlClick = (index) => {
    emblaApi.scrollTo(index)
  }

  return (
    <div className=''>

      <PricingCarouselControls onControlClick={onControlClick} />

      <div className="embla overflow-hidden py-14" ref={emblaRef}>
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
    </div>
  )
}

export default PricingCarousel