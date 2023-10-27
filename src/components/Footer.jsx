import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa'
import { Logo5 } from '../svg-components/SvgLogos'

const Footer = () => {
  return (
    <div className='w-full my-4 px-4'>
      <div className='w-full max-w-[1400px] mx-auto py-5 px-3 sm:px-6 sm:py-8 md:py-12 md:px-10 bg-secondary rounded-xl'>
        <div className='grid lg:grid-cols-2 items-center'>
          <div className='flex w-full flex-col'>
            <div className='mb-5'>
              <a href='/#' className='flex flex-row hover:cursor-pointer w-min'>
                <div className='w-11 h-11 fill-primary'>
                  <Logo5 />
                </div>
                <h3 className='text-default font-bold text-3xl mb-2'>Orion</h3>
              </a>
            </div>
            <form className='flex flex-col w-full'>
              <h3 className='text-default font-medium ml-1 mb-3 text-base xs:text-lg md:text-xl'>Subscribe to our Newsletter</h3>
              <div className='flex flex-col xs:flex-row gap-2 text-base md:text-lg'>
                <label htmlFor='newsletter-input' className='sr-only'>Email</label>
                <input id='newsletter-input' type='email' placeholder='Enter email here' className='rounded-lg py-1 px-3 w-full xs:min-w-fit xs:max-w-[40%] outline-none' />
                <button type='submit' className='max-w-fit mx-auto xs:mx-0 px-3 py-1 bg-primary text-default rounded-lg'>Submit</button>
              </div>
            </form>
          </div>
          <div className='grid grid-cols-2 gap-y-5 xs:flex xs:flex-row xs:justify-between mt-10 lg:mt-0'>
            <div className='flex flex-col'>
              <h3 className='font-medium text-gray-400 text-lg md:text-xl mb-4'>Product</h3>
              <ul className='flex flex-col gap-2 text-default text-sm md:text-base'>
                <li className='hover:underline max-w-fit'>
                  <a href='/#'>Platform</a>
                </li>
                <li className='hover:underline max-w-fit'>
                  <a href='/#'>Pricing</a>
                </li>
                <li className='hover:underline max-w-fit'>
                  <a href='/#'>API</a>
                </li>
                <li className='hover:underline max-w-fit'>
                  <a href='/#'>Dashboard</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-medium text-gray-400 text-lg md:text-xl mb-4'>Resources</h3>
              <ul className='flex flex-col gap-2 text-default text-sm md:text-base'>
                <li className='hover:underline max-w-fit'>
                  <a href='/#'>Documentation</a>
                </li>
                <li className='hover:underline max-w-fit'>
                  <a href='/#'>Blogs</a>
                </li>
                <li className='hover:underline max-w-fit'>
                  <a href='/#'>Jobs</a>
                </li>
                <li className='hover:underline max-w-fit'>
                  <a href='/#'>Changelong</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col col-span-2 xs:col-span-1'>
              <h3 className='text-gray-400 font-medium mb-4 text-lg md:text-xl'>Socials</h3>
              <div className='flex flex-row gap-2 md:gap-5 text-default text-3xl mb-5'>
                <button className='hover:scale-110' onClick={() => {}}>
                  <FaFacebookSquare />
                </button>
                <button className='hover:scale-110' onClick={() => {}}>
                  <FaTwitterSquare />
                </button>
                <button className='hover:scale-110' onClick={() => {}}>
                  <FaLinkedin />
                </button>
                <button className='hover:scale-110' onClick={() => {}}>
                  <FaGithubSquare />
                </button>
                <button className='hover:scale-110' onClick={() => {}}>
                  <FaDribbbleSquare />
                </button>
              </div>
              <h3 className='text-gray-400 font-medium mb-4 text-lg md:text-xl'>Email</h3>
              <a href='/#' className='text-accent hover:underline hover:underline-offset-2 text-base font-medium'>info@mycompany.io</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer