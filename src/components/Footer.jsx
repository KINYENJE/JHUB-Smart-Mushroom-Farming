import React from 'react'
// import farmerLogo from '../assets/images/farmer_with_AI.jpeg'
import logo from '../assets/images/logo.png'
import { navLinks } from '../constants'
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import jhub_logo from "../assets/images/jhub_logo.png"
import jkuat_logo from "../assets/images/jkuat_logo.png"


const Footer = () => {
  return (
    <div className='w-full  max-sm:px-3 bg-black py-12 flex max-sm:flex-col justify-start sm:justify-between relative text-white'>

      <div className='w-full sm:w-1/3 flex items-start justify-center  max-sm:text-xs flex-col pt-5 max-sm:pl-2'>
        <h1 className='text-warmGray-400 text-left text-lg sm:text-xl xl:text-2xl font-bold'>Quick Links:</h1>
        <ul className='flex flex-col pt-5 gap-4  '>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='text-[16px] font-medium text-rose-500 hover:underline underline-offset-4 transition-colors duration-500'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full sm:w-1/3 max-sm:mt-5 flex flex-col gap-3 sm:gap-8 items-start justify-center max-sm:text-xs max-sm:pl-2'>
        <h1 className='text-warmGray-400 text-left text-lg sm:text-xl xl:text-2xl font-bold'>Our Partners:</h1>
        <div className='flex  gap-6 items-center justify-center sm:pt-5'>
          <div className='bg-white rounded-lg'>
            <img src={jhub_logo} alt="jhub_logo" className='w-20 h-20' />
          </div>
          <div className='bg-white rounded-lg'>
          <img src={jkuat_logo} alt="jkuat_logo" className='w-20 h-20' />
          </div>
        </div>
      </div>


      <div className='text-center w-full text-sm max-sm:text-[8px] absolute bottom-0  '>
        <p className='text-secondary_blue'>© {new Date().getFullYear()} MushroomGuardians.com. All rights reserved.</p>
        <a href="/privacy-policy" className='text-white'>Privacy Policy</a>
        <span> | </span>
        <a href="/terms-of-service" className='text-white'>Terms of Service</a>
      </div>



      <div className='w-full sm:w-1/3 flex flex-col gap-8 items-start max-sm:pl-2 justify-center max-sm:text-xs'> 
        <h1 className=' text-warmGray-400 pt-5 text-left text-lg  sm:text-xl xl:text-2xl font-bold'>Connect with us at:</h1>

        <div className='flex flex-col gap-4 sm:pt-5 items-start justify-center transition-all duration-300'>
        <a href="https://jhubafrica.com/" className='text-white flex gap-2' target='_blank' rel='noreferrer'>
          <FaLink size={20} className='text-warmGray-600 hover:scale-150 transition duration-300 hover:text-white'/> <h1 className='text-rose-500'>jhubafrica.com</h1>
        </a>
        <a href='https://www.linkedin.com/company/jhubafrica/' className='text-white flex gap-2 items-center' target='_blank' rel='noreferrer'>
          <FaLinkedin size={20} className='text-warmGray-600 hover:scale-150 transition duration-300 hover:text-white'/> <h1 className='text-rose-500'>JHUBAFRICA</h1>
        </a>
        <a href='https://www.tiktok.com/@jhubafrica' className='text-white flex gap-2 items-center' target='_blank' rel='noreferrer'>
          <AiFillTikTok size={20} className='text-warmGray-600 hover:scale-150 hover:text-white transition duration-300' /> <h1 className='text-rose-500'>@jhubafrica</h1>
        </a>
      </div>
       

      </div>

    </div>
  )
}

export default Footer