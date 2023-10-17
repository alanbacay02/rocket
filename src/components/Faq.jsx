import React from 'react'
import FaqAccordion from './FaqAccordion'

const FAQ_CONTENT = [
  {
    question: 'What types of customers does your cloud service cater to?',
    answer: 'Our cloud solutions are designed to meet the needs of a wide range of clients, including individuals, developers, professionals, startups, established companies, enterprises, and we also offer a custom package to accommodate unique requirements.'
  },
  {
    question: 'How can I get started with your cloud services?',
    answer: 'To get started, simply navigate to our "Get Started" page and select the package that best fits your needs. You can then follow the easy steps to set up your account and access our cloud services.'
  },
  {
    question: 'What are the key benefits of using your cloud solutions for companies?',
    answer: 'For startups, our cloud solutions provide cost-effective and scalable infrastructure, helping you grow without the burden of extensive upfront investments. Established companies benefit from enhanced security, reliability, and the ability to optimize their operations for maximum efficiency.'
  },
  {
    question: 'Do you offer specialized support for enterprises with complex requirements?',
    answer: 'Yes, our enterprise package comes with dedicated support and customized solutions to meet the unique demands of large organizations. We work closely with our enterprise clients to ensure they receive the level of service they require.'
  },
  {
    question: 'What security measures are in place to protect my data?',
    answer: 'Security is our top priority. We employ industry-standard encryption protocols, regular security audits, and 24/7 monitoring to safeguard your data and applications. You can trust us to keep your information safe.'
  },
  {
    question: 'Can I upgrade or downgrade my package at any time?',
    answer: 'Yes, you can easily upgrade or downgrade your package as your needs change. We offer flexibility to ensure you\'re always using the right level of resources for your current requirements.'
  },
  
]

const Faq = () => {
  return (
    <div className='w-full py-14'>
      <div className='w-full max-w-[1440px] mx-auto'>
        <div className='grid grid-cols-3 px-6'>
          <div className='col-span-1 text-default'>
            <h1 className='text-6xl font-bold'>FAQ</h1>
            <p className='text-lg'>Got Questions?</p>
          </div>
          <div className='col-span-2 text-default'>
            <FaqAccordion content={FAQ_CONTENT} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq