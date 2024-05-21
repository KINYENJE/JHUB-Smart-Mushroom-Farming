import React from 'react'
import ContactCard from './ContactCard'
import { ContactDetails } from '../constants'


const ContactUs = () => {
  return (
    <div className='flex group'>
      <div className='flex gap-8 max-sm:flex-col items-center max-sm:justify-between sm:animate-loop-scroll group-hover:paused'>

      {ContactDetails.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}

    </div>
    <div className='max-sm:hidden flex gap-8 max-sm:flex-col items-center  sm:animate-loop-scroll group-hover:paused' aria-hidden="true">

      {ContactDetails.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}

    </div>


    </div>
    
  )
}

export default ContactUs