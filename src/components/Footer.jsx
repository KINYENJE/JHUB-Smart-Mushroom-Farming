import React from 'react'
// import farmerLogo from '../assets/images/farmer_with_AI.jpeg'
import logo from '../assets/images/logo.png'
import { navLinks } from '../constants'
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full h-96 max-sm:px-3 bg-black py-12 flex items-center justify-between relative text-white'>

      <div className='w-44 h-44 bg-white rounded-full mx-5 absolute -top-[88px] left-0 border  border-t-black border-x-black bg-no-repeat bg-contain bg-center' style={{backgroundImage: `url(${logo})` }} ></div>

      <div className='w-1/3 flex items-center justify-center  max-sm:text-xs'>
        <ul className='flex flex-col mt-10 gap-4  '>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='text-md font-medium text-success hover:underline underline-offset-4 transition-colors duration-500'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>


      <div className='text-center w-full text-sm max-sm:text-[8px] absolute bottom-0  '>
        <p className='text-secondary_blue'>© {new Date().getFullYear()} MushroomGuardians.com. All rights reserved.</p>
        <a href="/privacy-policy" className='text-white'>Privacy Policy</a>
        <span> | </span>
        <a href="/terms-of-service" className='text-white'>Terms of Service</a>
      </div>



      <div className='w-1/3 flex flex-col gap-8 items-center justify-center max-sm:text-xs'> 
        <h1 className=' text-blue-600 text-left sm:text-xl'>Connect with us at:</h1>

        <div className='flex flex-col gap-4 items-center justify-center'>
        <a href="https://jhubafrica.com/" className='text-white flex gap-2' target='_blank' rel='noreferrer'>
          <FaLink size={30} /> <h1 className='text-success'>jhubafrica.com</h1>
        </a>
        <a href='https://www.linkedin.com/company/jhubafrica/' className='text-white flex gap-2' target='_blank' rel='noreferrer'>
          <FaLinkedin size={30} /> <h1 className='text-success'>JHUBAFRICA</h1>
        </a>
        </div>
       

      </div>

    </div>
  )
}

export default Footer