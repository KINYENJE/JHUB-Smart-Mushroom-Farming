import React from 'react'
import farmerLogo from '../assets/images/farmer_with_AI.jpeg'
import { navLinks } from '../constants'
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full h-96 bg-black flex items-center justify-between relative text-white'>

      <div className='w-44 h-44 bg-white rounded-full mx-5 absolute -top-[88px] left-0 border  border-t-black border-x-black bg-no-repeat bg-contain bg-center' style={{backgroundImage: `url(${farmerLogo})` }} ></div>

      <div className='w-1/3 flex items-center justify-center '>
        <ul className='flex flex-col gap-3 '>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='text-md font-normal hover:text-success hover:underline underline-offset-4 transition-colors duration-500'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>


      <div className='text-center w-1/3 text-sm '>
        <p>© {new Date().getFullYear()} MushroomGuardians.com. All rights reserved.</p>
        <a href="/privacy-policy" className='text-white'>Privacy Policy</a>
        <span> | </span>
        <a href="/terms-of-service" className='text-white'>Terms of Service</a>
      </div>

      <div className='w-1/3 '>
        <a href='https://www.linkedin.com/company/jhubafrica/' className='text-white flex gap-2' target='_blank' rel='noreferrer'>
          <FaLinkedin size={30} /> <h1 className='text-white'>JHUBAFRICA</h1>
        </a>
      </div>

    </div>
  )
}

export default Footer