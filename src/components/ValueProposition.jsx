import React from 'react'
import { DataUsageSvg, DataManagementSvg, DataNetworkingSvg } from '../svg-components/SvgLogos'

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

const ValueProposition = () => {
  return (
    <div className='relative w-full pt-20'>
      <div className='w-full max-w-[1440px] mx-auto'>
        {/* START OF FLEX CONTAINER */}
        <div className='flex flex-col justify-center items-center text-default'>
          <h1 className='font-bold text-4xl'>Why Choose Orion</h1>
          {/* START OF GRID */}
          <div className='grid md:grid-cols-3 px-6 gap-20 mt-[120px]'>
            {CARD_CONTENT.map((item, index) => {
              return (
                <div className='flex flex-col items-center w-full h-full rounded-2xl bg-secondary px-12 pb-10 -z-50'>
                  <div className='h-auto w-64 -mt-24'>
                    {item.cardSvgLogo}
                  </div>
                  <div>
                    <h2 className='card-h2-title relative font-medium text-default text-2xl mt-8 mb-7 z-50'>{item.cardTitle}</h2>
                  </div>
                  <p className='text-default text-lg leading-9'>{item.cardParagraph}</p>
                </div>
              )
            })}
          </div>
          {/* END OF GRID */}
        </div>
        {/* END OF FLEX CONTAINER */}
      </div>
    </div>
  )
}

export default ValueProposition