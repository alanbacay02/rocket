import React, { useRef, useEffect } from 'react'
import { AiOutlineInfoCircle, AiOutlineClose, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BiBuildings, BiPhone } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { IoPricetagsOutline } from 'react-icons/io5'
import { PiRocketLaunch } from 'react-icons/pi'

const MENU_ITEMS = [
  {
    title: 'About',
    icons: <AiOutlineInfoCircle />
  },
  {
    title: 'Company',
    icons: < BiBuildings />
  },
  {
    title: 'Pricing',
    icons: <IoPricetagsOutline />
  },
  {
    title: 'Resources',
    icons: <BsStack />
  },
  {
    title: 'Contact',
    icons: <BiPhone />
  },
]

const NavPopMenu = (props) => {
  const menuRef = useRef()

  useEffect(() => {
    // Gets the current properties of `menuRef` and assigns it to `popoutMenu`.
    const popoutMenu = menuRef.current
    // Checks `props.menu` state if its true.
    if(props.menu) {
      document.body.classList.add('no-scroll') // Adds the `.no-scroll` class to body.
      popoutMenu.style.overflow = 'auto' // Sets `popoutMenu` overflow style to auto.
    } else {
      document.body.classList.remove('no-scroll') // Removes the `.no-scroll` class in body.
      popoutMenu.style.overflow = 'hidden' // Sets `popoutMenu` overflow style to hidden.
    }

    // Function to handle click events.
    let handleClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        props.setMenu(false); // Sets state `navMenu` to false when click event is outside `menuRef`.
      }
    }

    // Adds event listener for `mousedown` events.
    document.addEventListener('mousedown', handleClick);
    // Clean up event listener and remove 'no-scroll' class when component unmounts.
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.body.classList.remove('no-scroll');
      popoutMenu.style.overflow = 'hidden';
    }
  }, [props]);

  return (
    <div ref={menuRef} className={`w-[87%] h-screen fixed top-0 bg-background text-white z-50 ${props.menu ? 'right-0' : '-right-[100%] md:hidden'} transition-all duration-500`}>
      <div className='flex flex-col'>
        <button
         onClick={() => {props.handleMenuClick()}}
         className='text-2xl w-fit ml-auto mr-2 mt-5'
        >
          <AiOutlineClose />
        </button>
        <ul className='mt-6'>
          {MENU_ITEMS.map((item, index) => {
            return (
              <li key={index} className='p-4 text-lg font-medium active:bg-gray-800'>
                <a href='/#' className='flex flex-row items-center gap-3 a-no-highlight'>
                  <div className='text-xl text-primaryText'>
                    {item.icons}
                  </div>
                  {item.title}
                </a>
              </li>
            )
          })}
          <div className='h-[2px] w-[90%] mx-auto my-4 bg-gray-700' />
        </ul>
        <ul className=''>
          <li className='p-4 text-lg font-medium active:bg-gray-800'>
            <a href='/#' className='flex flex-row items-center gap-3 a-no-highlight'>
              <div className='text-xl text-primaryText'>
                <PiRocketLaunch />
              </div>
              Get Started
            </a>
          </li>
          <li className='p-4 text-lg font-medium active:bg-gray-800'>
            <a href='/#' className='flex flex-row items-center gap-3 a-no-highlight'>
              <div className='text-xl text-primaryText'>
                <AiOutlineQuestionCircle />
              </div>
              help
            </a>
          </li>
          <div className='h-[2px] w-[90%] mx-auto my-4 bg-gray-700' />
        </ul>
      </div>
    </div>
  )
}

export default NavPopMenu