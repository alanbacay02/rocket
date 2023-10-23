import React, { useState } from 'react'
import { Logo5, Pin } from '../svg-components/SvgLogos'
import { RxHamburgerMenu } from 'react-icons/rx'

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
  const [menu, setMenu] = useState(false)

  return (
    <div className='absolute inset-0 h-fit w-full py-4 md:py-6 border-b border-gray-800 z-50'>
      <div className='w-full max-w-[1440px] px-2 sm:px-4 md:px-6 mx-auto flex flex-row justify-between items-center'>
        <a href='/#' className='hover:cursor-pointer'>
          <div className='flex flex-row justify-center items-center gap-0.5'>
            <div className='w-7 h-7 md:w-11 md:h-11 mt-1 fill-primary'>
              <Logo5 />
            </div>
            <h3 className='text-default font-bold text-xl md:text-3xl'>Orion</h3>
          </div>
        </a>
        <div className='hidden md:block'>
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
        <div className='md:hidden text-default text-2xl mr-2' onClick={() => {setMenu(!menu)}}>
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar