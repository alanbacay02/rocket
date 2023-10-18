import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa'
import { Logo5 } from '../svg-components/SvgLogos'

const Footer = () => {
  return (
    <div className='w-full my-4 px-6'>
      <div className='w-full max-w-[1400px] mx-auto py-12 px-6 bg-secondary rounded-xl'>
        <div className='grid grid-cols-5'>
          <div className='col-span-2'>
            <div>
              <a href='/#' className='flex flex-row hover:cursor-pointer w-min'>
                <div className='w-11 h-11 fill-primary'>
                  <Logo5 />
                </div>
                <h3 className='text-default font-bold text-3xl mb-2'>Orion</h3>
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-medium text-gray-400 text-xl mb-4'>Product</h3>
            <ul className='flex flex-col gap-2 text-default'>
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
            <h3 className='font-medium text-gray-400 text-xl mb-4'>Resources</h3>
            <ul className='flex flex-col gap-2 text-default'>
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
          <div className='flex flex-col'>
            <h3 className='text-gray-400 font-medium mb-4 text-xl'>Socials</h3>
            <div className='flex flex-row gap-5 text-default text-3xl mb-5'>
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
            <h3 className='text-gray-400 font-medium mb-4 text-xl'>Email</h3>
            <a href='/#' className='text-accent hover:underline hover:underline-offset-2 text-lg font-medium'>info@mycompany.io</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer