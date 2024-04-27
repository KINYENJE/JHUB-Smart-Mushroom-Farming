import React from 'react'
import ContactCard from './ContactCard'
import { ContactDetails } from '../constants'


const ContactUs = () => {
  return (
    <div className='flex items-center justify-between '>

      {ContactDetails.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}

    </div>
  )
}

export default ContactUs