import React from 'react'
// import { ContactDetails } from '../constants'

const ContactCard = ({profilePic, name, role, linkedin}) => {
  return (
    <div className='flex flex-col items-center justify-between gap-4 py-4  p-8'>
      {/** profile image */}
      <div className='w-44 h-44 bg-contain rounded-full bg-center' style={{backgroundImage: `url(${profilePic})`}}>
        
      </div>

      {/** name and role */}
      <div>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-warmGray-700 font-medium '>{role}</p>
      </div>

      {/** linkedin url */}
      <div>
        <a href={linkedin} target='_blank' rel='noreferrer'  className='text-success font-bold montserrat cursor-pointer'>View Profile</a>
      </div>

    </div>
  )
}

export default ContactCard