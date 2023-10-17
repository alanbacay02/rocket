import React from 'react'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const AccordionItem = ({ header, ...rest }) => {
  return (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          <h2 className='font-medium sm:text-lg md:text-xl'>{header}</h2>
          <div className='text-default'>
            {!isEnter ? <AiOutlinePlus />: <AiOutlineMinus />}
          </div>
        </>
      )}
      className='bg-secondary rounded-xl'
      buttonProps={{
        className: ({ isEnter }) =>
          `flex justify-between items-center w-full px-6 p-4 text-left ${isEnter ? 'border-b border-gray-600' : ''}`
      }}
      contentProps={{
        className: "transition-all duration-200 ease-out"
      }}
      panelProps={{ className: "p-4" }}
    />
  )
}

const FaqAccordion = ({ content }) => {
  return (
    <div>
      <Accordion transition transitionTimeout={600} className='flex flex-col gap-y-5'>
        {content.map((item, index) => {
          return (
            <AccordionItem key={index} header={item.question}>
              <p className='text-xl leading-10 px-3'>{item.answer}</p>
            </AccordionItem>
          )
        })}
      </Accordion>

    </div>
  )
}

export default FaqAccordion