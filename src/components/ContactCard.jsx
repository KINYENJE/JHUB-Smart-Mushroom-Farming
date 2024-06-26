import React from 'react'
// import { ContactDetails } from '../constants'
import { FaLinkedinIn } from "react-icons/fa";

const ContactCard = ({profilePic, name, role, linkedin}) => {
  return (
    <div className='flex flex-col items-center justify-between gap-4 py-4  p-8'>
      {/** profile image */}
      <div className='w-44 h-44 bg-contain rounded-full bg-center' style={{backgroundImage: `url(${profilePic})`}}>
        
      </div>

      {/** name and role */}
      <div className='gap-3 flex flex-col'>
        <h3 className='text-lg font-bold text-red-950/100 tracking-wide'>{name}</h3>
        <p className='text-warmGray-700 font-medium '>{role}</p>
      </div>

      {/** linkedin url */}
      <div>
        <a href={linkedin} target='_blank' rel='noreferrer'  className='hover:text-rose-600 bg-transparent backdrop-brightness-50 backdrop-blur-3xl text-lg  px-3 py-1 rounded-3xl font-semibold montserrat cursor-pointer transition-colors duration-300 '>
          <FaLinkedinIn className='inline-block' />
        </a>
      </div>

    </div>
  )
}

export default ContactCard