import React from 'react'
import cloudSecurityImg from '../assets/cloudSecurity.png'
import magGlass from '../assets/magGlass.png'
import serverImg from '../assets/securityCloud3.png'
import { WaveBottom, WaveTop } from '../svg-components/WaveSvg'
import wristWatch from '../assets/wristWatch.png'

const CARD_CONTENT = [
  {
    cardIcon: <img src={cloudSecurityImg} alt='cloudSecurityImg' />,
    cardDesc: 'Your data, our priority. We employ cutting-edge security protocols to safeguard your information.'
  },
  {
    cardIcon: <img src={magGlass} alt='cloudSecurityImg' />,
    cardDesc: 'Rest easy knowing that your applications are shielded from threats with our robust security measures.'
  },
  {
    cardIcon: <img src={wristWatch} alt='cloudSecurityImg' />,
    cardDesc: 'Experience peace of mind with our 24/7 security monitoring, ensuring that your assets are always protected.'
  }
]

const Security = () => {
  return (
    <div className='relative w-full bg-[#001c72]'>
      <div className='h-auto'>
        <WaveTop />
      </div>

      <div className='w-full h-min max-w-[1440px] mx-auto -mt-32'>
        <div className='grid grid-cols-2'>
          <div className=''>
            <img src={serverImg} alt='serverImg' />
          </div>
          <div className='flex flex-col max-w-[600px] mx-auto items-center justify-center gap-5 px-6 text-default text-xl'>
            <h2 className='text-3xl font-medium'>Putting Security First to Safeguard What Matters Most</h2>
            {CARD_CONTENT.map((item, index) => {
              return (
                <div className='flex flex-row items-center px-6 py-5 gap-6 bg-[#003097] shadow-xl rounded-xl'>
                  <div className='h-auto w-32'>
                    {item.cardIcon}
                  </div>
                  {item.cardDesc}
                </div>
              )
            })}
            <div className='flex flex-row w-full justify-start items-center gap-5 pl-2'>
              <button onClick={() => {}} className='px-6 py-2.5 rounded-3xl shadow-xl bg-accent hover:bg-accent/90 transition-colors'>Learn More</button>
              <button onClick={() => {}} className='px-6 py-2.5 rounded-3xl shadow-xl bg-white hover:bg-white/90 text-primary'>Documentation</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <WaveBottom />
      </div>
    </div>
  )
}

export default Security