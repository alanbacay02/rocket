import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ImCheckmark } from 'react-icons/im'

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
    price: '$1600+',
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
              className={`flex flex-col py-10 px-4 h-min text-center rounded-xl bg-secondary text-default ${item.highlighted ? 'highlighted-pricing-card py-12' : ''}`}
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


const PricingCards = ({ packageState }) => {
  return (
    <div className='relative w-full py-12 overflow-x-hidden overflow-y-clip'>
      <div className={`transition-opacity duration-600 ${packageState.standardActive ? 'static opacity-100' : 'opacity-0 absolute top-0 left-[1600px]'}`}>
        <Cards cardContentObj={STANDARD_CONTENT} />
      </div>
      <div className={`transition-opacity duration-600 ${packageState.agencyActive ? 'static opacity-100' : 'opacity-0 absolute top-0 left-[1600px]'}`}>
        <Cards cardContentObj={AGENCY_CONTENT} />
      </div>
      <div className={`transition-opacity duration-600 ${packageState.customActive ? 'static opacity-100' : 'opacity-0 absolute top-0 left-[1600px]'}`}>
        <Cards cardContentObj={CUSTOM_CONTENT} />
      </div>
    </div>
  )
}

export default PricingCards