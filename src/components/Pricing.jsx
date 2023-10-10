import React, { useState } from 'react'

// Define the initial state for the package options.
const initialState = {
  standardActive: true,
  agencyActive: false,
  customActive: false
}

// Creates an array object `PACKAGE_TITLES`.
const PACKAGE_TITLES = [
  {
    title: 'STANDARD',
    key: 'standardActive'
  },
  {
    title: 'AGENCY',
    key: 'agencyActive'
  },
  {
    title: 'CUSTOM / ENTERPRISE',
    key: 'customActive'
  },
]

const Pricing = () => {
  /*
  const [standardActive, setStandardActive] = useState(true)
  const [agencyActive, setAgencyActive] = useState(false)
  const [customActive, setCustomActive] = useState(false)

  const handleClick = (target) => {
    switch (target) {
      case 'standard':
        setStandardActive(true)
        setAgencyActive(false)
        setCustomActive(false)
        break
      
      case 'agency':
        setStandardActive(false)
        setAgencyActive(true)
        setCustomActive(false)
        break

      case 'custom':
        setStandardActive(false)
        setAgencyActive(false)
        setCustomActive(true)
        break

      default:
        setStandardActive(true)
        setAgencyActive(false)
        setCustomActive(false)
        break
    }
  }
  */

  // Initialize the package state with the initial state.
  const [packageState, setPackageState] = useState(initialState)

  // Handle clicks on package bars.
  const handleClick = (target) => {
    // Create a copy of the current state.
    let prevPackageState = {...packageState}
    // Find the previously active package by searching for a key with a 'true' value.
    let prevActiveKey = Object.keys(prevPackageState).find(key => prevPackageState[key] === true)
    
    // Update the state to reflect the new active package.
    setPackageState((prevState) => ({
      ...prevState, // Preserve the previous state.
      [prevActiveKey]: false, // Deactivate the previously active package.
      [target]: true // Activate the selected package.
    }))
  }


  return (
    <div className='w-full pb-16'>
      <div className='w-full max-w-[1440px] mx-auto px-6'>

        <div className='flex flex-col justify-center items-center text-default'>
          <h1 className='font-bold text-4xl mb-7'>Pricing</h1>
          <p className='text-lg text-center max-w-[800px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptates, minus sapiente voluptatem reiciendis dicta nisi ea repellendus. Quod modi expedita, ipsam suscipit accusantium in pariatur saepe. Corrupti, maxime repudiandae!</p>
        </div>

        <div className='relative flex flex-row justify-center items-center gap-36 mt-12 pb-5 text-default font-bold text-lg'>
          {PACKAGE_TITLES.map((item, index) => {
            return (
              <div key={index} className='relative hover:cursor-pointer' onClick={() => {handleClick(item.key)}}>
                <h2 className={`${packageState[item.key] ? 'text-accent' : ''}`}>{item.title}</h2>
                <div className={`absolute -bottom-5 h-1 w-full bg-accent ${!packageState[item.key] ? 'hidden' : ''}`} />
              </div>
            )
          })}
          
          <div className='absolute bottom-0 h-[1px] w-full bg-gray-600' />
        </div>

      </div>
    </div>
  )
}

export default Pricing