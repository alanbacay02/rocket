import React from 'react'

const CARD_CONTENT = [
  {
    packageName: 'Basic',
    price: '$59',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
    ],
    highlighted: false
  },
  {
    packageName: 'Standard',
    price: '$79',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
    ],
    highlighted: true
  },
  {
    packageName: 'Pro',
    price: '$109',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellat maiores officia fugit delectus officiis adipisci sunt.',
    features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.'
    ],
    highlighted: false
  },
]

const PricingCards = () => {
  return (
    <div className='w-full py-12'>
      <div className='w-full max-w-[1440px]'>

      {/* START OF GRID CONTAINER */}
        <div className='grid grid-cols-3 gap-10'>
          {/* START OF CARDS */}
          {CARD_CONTENT.map((item, index) => {
            return (
              <div key={index} className='flex flex-col py-6 px-9 h-fit bg-secondary text-default'>
                <h2>{item.packageName}</h2>
                <h1>{item.price}</h1>
                <p>Per Month</p>
                <p>{item.description}</p>
                <div className='w-full h-[1px] bg-gray-600' />
                {/* Start of Package Features */}
                {item.features.map((feature, index) => {
                  return (
                    <p key={index}>{feature}</p>
                  )
                })}
                <a href='/#'>See all features</a>
                {/* End of Package Features */}
                <div className='w-full h-[1px] bg-gray-600' />
                <button>Get a Free Trial</button>
              </div>
            )
          })}
          {/* END OF CARDS */}
        </div>
      {/* END OF GRID CONTAINER */}

      </div>
    </div>
  )
}

export default PricingCards