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
        <div className='grid grid-cols-3 gap-10 items-center'>
          {/* START OF CARDS */}
          {CARD_CONTENT.map((item, index) => {
            return (
              <div 
                key={index}
                className={`flex flex-col py-10 px-4 h-fit text-center rounded-xl bg-secondary text-default ${item.highlighted ? 'highlighted-pricing-card py-12' : ''}`}
              >
                <h2 className={`font-medium text-3xl mb-10 ${item.highlighted ? 'text-primaryText' :  ''}`}>
                  {item.packageName}
                </h2>
                <h1 className={`font-bold text-7xl ${item.highlighted ? 'text-primaryText' : ''}`}>{item.price}</h1>
                <p className='mb-5'>Per Month</p>
                <p className='px-7 mb-5'>{item.description}</p>
                <div className='w-full h-[1px] mb-5 bg-gray-600' />
                {/* Start of Package Features */}
                <div  className='flex flex-col px-7 text-left'>
                  {item.features.map((feature, index) => {
                    return (
                    <p key={index}>{feature}</p>
                    )
                  })}
                  <a href='/#' className='w-fit font-medium text-accent'>See all features</a>
                </div>
                {/* End of Package Features */}
                <div className='w-full h-[1px] mt-5 bg-gray-600' />
                <button
                  onClick={() => {}}
                  className='w-fit mt-10 mx-auto px-8 py-3 font-medium text-white bg-primary'>
                  Get a Free Trial
                </button>
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