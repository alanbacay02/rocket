import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4, CompanyLogo5 } from '../svg-components/CompanySvg'

const LOGOS = [<CompanyLogo1 />, <CompanyLogo2 />, <CompanyLogo3 />, <CompanyLogo4 />, <CompanyLogo5 />]


const CompanyLogosDesktop = () => {
  return (
    <div className='w-full h-min mx-auto grid grid-cols-5 bg-transparent'>
      {LOGOS.map((item,index) => {
        return (
          <div key={index} className='fill-gray-700 w-fit h-12 mx-auto'>
            {item}
          </div>
        )
      })}
    </div>
  )
}


const CompanyLogosMobile = () => {
  const [emblaRef] = useEmblaCarousel({loop:true, skipSnaps: false, align: 'start', dragFree: true })

  return (
    <div className='w-full h-min mx-auto'>
      <div className='embla overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex'>
          {LOGOS.map((item, index) => {
            return (
              <div key={index} className="embla__slide__company fill-gray-700 w-fit h-16 md:h-24 mx-auto">{item}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const CompanyLogos = () => {
  return (
    <div>
      <div className='md:hidden'>
        <CompanyLogosMobile />
      </div>
      <div className='hidden md:block'>
        <CompanyLogosDesktop />
      </div>
    </div>
  )
}

export default CompanyLogos