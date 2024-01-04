import React, { useState } from 'react'
import { Logo5, Pin } from '../svg-components/SvgLogos'
import { RxHamburgerMenu } from 'react-icons/rx'
import NavPopMenu from './NavPopMenu'

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

  const handleMenuClick = () => {
    setMenu(!menu)
  }

  return (
    <div className='absolute inset-0 h-fit w-full py-4 md:py-6 border-b border-gray-800 z-50 overflow-hidden'>
      <div className='w-full max-w-[1200px] px-4 mx-auto flex flex-row justify-between items-center'>
        <a href='/#' className='hover:cursor-pointer'>
          <div className='flex flex-row justify-center items-center gap-0.5'>
            <div className='w-auto h-5 md:h-9 mt-1 fill-primary'>
              <Logo5 />
            </div>
            <h3 className='text-default font-bold text-xl md:text-2xl'>Orion</h3>
          </div>
        </a>
        <div className='hidden md:block'>
          <ul className='flex flex-row gap-5 text-default font-medium text-sm overflow-clip'>
            {NAVBAR_ITEMS.map((item, index) => {
              return (
                <li className='relative group flex flex-row items-center gap-1 pl-6'>
                  <div className='absolute -left-0 -bottom-[50px] group-hover:-bottom-2.5 fill-accent transition-all duration-300 w-auto h-8'>
                    <Pin />
                  </div>
                  <a href={item.itemHref}>{item.itemTitle}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='md:hidden text-default text-2xl mr-2' onClick={handleMenuClick}>
          <RxHamburgerMenu />
        </div>
      </div>
      <NavPopMenu menu={menu} setMenu={setMenu} handleMenuClick={handleMenuClick} />
    </div>
  )
}

export default Navbar