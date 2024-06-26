import React, { useEffect, useRef, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { parsePath } from 'react-router-dom'
import { navLinks } from '../constants'
import logo from "../assets/images/logo.png"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import jhubLogo from '../assets/images/jhub_logo.png'
import jkuaLogo from '../assets/images/jkuat_logo.png'


const Navbar = () => {

  const path = parsePath(window.location.pathname).pathname

  const headerRef = useRef(null)

  const headerStick = () => {
    if (window.scrollY > 0) {
      if (headerRef.current) {
        headerRef.current.classList.add('sticky');
      }
    } else {
      if (headerRef.current) {
        headerRef.current.classList.remove('sticky');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerStick);
    
    return () => window.removeEventListener('scroll', headerStick)

  }, []);

  useEffect(() => {
    const navbarElement = document.getElementById('navbar');

    if (navbarElement) {
      navbarElement.classList.add('some-class');
    }
  }, []);

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top:location - 40,
    });
  }

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)

    if (isOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }

  }

  {/** close menu if user scrolls or clicks outside menu box */}
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false)
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <nav ref={headerRef} id="navbar" className='transition duration-500 w-full z-30 bg-transparent'  >
      <div  className=' w-full flex items-center justify-between py-4 shadow-2xl px-6 sm:px-14 rounded-full my-1  transition-transform ease-in-out'>

        <div className='flex items-center gap-2 sm:gap-5'>
          <img src={logo} alt="logo" className='w-10 w- h-10 ' />
          <h1 className='sm:text-2xl text-xl font-bold text-stone-50 sm:hidden' >EcoShrumz</h1>
        </div>
        
        <ul className='max-sm:hidden flex gap-5 '>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={handleClick} className={' text-[16px] text-stone-50 font-normal hover:underline underline-offset-4 transition-colors duration-500' + (path === link.href ? 'text-success' : ' ')}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className='max-sm:hidden flex items-center gap-6 '>
          <a href="https://jhubafrica.com/" target="_blank" rel="noreferrer" >
            <img src={jhubLogo} alt="JHub logo" className='w-10 h-10 scale-150 backdrop-brightness-150 backdrop-blur-3xl rounded-3xl' />
          </a>
          <a href="https://www.jkuat.ac.ke/" target="_blank" rel="noreferrer"  >
            <img src={jkuaLogo} alt="JKUAT logo" className='w-10 h-10 scale-150  rounded-3xl' />
          </a>
        </div>

        {/** Mobile menu */}
        <div className='sm:hidden max-sm:flex items-center gap-5'>
          <button onClick={handleMenu} className='text-rose-500 text-3xl'>
            {isOpen ? <IoMdCloseCircle /> : <RiMenu3Fill />}
          </button>
          </div>

        {isOpen && (
          <div className='absolute top-20 right-0 w-2/3 h-[100vh] bg-transparent backdrop-blur-lg backdrop-brightness-50 backdrop-contrast-200   shadow-2xl rounded-lg py-4 px-14 flex flex-col items-center pt-10  gap-5  ' data-aos="fade-left"  data-aos-duration="2000">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} onClick={handleClick} className={' text-[18px] text-white font-semibold hover:underline underline-offset-4 transition-colors duration-500 ' + (path === link.href ? 'text-success' : ' ')}>{link.name}</a>
            ))}
            <a href="https://jhubafrica.com/" target="_blank" rel="noreferrer">
              <img src={jhubLogo} alt="JHub logo" className='w-20 h-20' />
            </a>
            <a href="https://www.jkuat.ac.ke/" target="_blank" rel="noreferrer">
              <img src={jkuaLogo} alt="JKUAT logo" className='w-20 h-20' />
            </a>
          </div>
        )}
        


        
      </div>
    </nav>
  )
}

export default Navbar