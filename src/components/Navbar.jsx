import React from 'react'
import { Logo5, Pin } from '../svg-components/SvgLogos'

const NAVBAR_ITEMS = [
  {
    itemTitle: 'Home',
    itemHref: '/#'
  },
  {
    itemTitle: 'Company',
    itemHref: '/#'
  },
  {
    itemTitle: 'Resources',
    itemHref: '/#'
  },
  {
    itemTitle: 'About',
    itemHref: '/#'
  },
  {
    itemTitle: 'Pricing',
    itemHref: '/#'
  },
  {
    itemTitle: 'Contact',
    itemHref: '/#'
  },
]

const Navbar = () => {
  return (
    <div className='absolute inset-0 h-fit w-full py-6 border-b border-gray-800 z-50'>
      <div className='w-full max-w-[1440px] px-6 mx-auto flex flex-row justify-between items-center'>
        <a href='/#' className='hover:cursor-pointer'>
          <div className='flex flex-row justify-center items-center'>
            <div className='w-11 h-11 fill-primary'>
              <Logo5 />
            </div>
            <h3 className='text-default font-bold text-3xl'>Orion</h3>
          </div>
        </a>
        <div>
          <ul className='flex flex-row gap-5 text-default text-lg overflow-clip'>
            {NAVBAR_ITEMS.map((item, index) => {
              return (
                <li className='relative group flex flex-row items-center gap-1 pl-6'>
                  <div className='absolute -left-1.5 bottom-[-40px] group-hover:-bottom-2.5 fill-accent transition-all duration-300 w-10 h-10'>
                    <Pin />
                  </div>
                  <a href={item.itemHref}>{item.itemTitle}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar