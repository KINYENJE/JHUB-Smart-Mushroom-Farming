import React, { useEffect, useRef } from 'react'
// import { NavLink } from 'react-router-dom'
import { parsePath } from 'react-router-dom'
import { navLinks } from '../constants'




const Navbar = () => {

  const path = parsePath(window.location.pathname).pathname

  const headerRef = useRef(null)

  const headerStick = () => {
    if (window.scrollY > 100) {
      headerRef.current.classList.add('sticky')
    } else {
      headerRef.current.classList.remove('sticky')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerStick);
    
    return () => window.removeEventListener('scroll', headerStick)

  }, []);

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top:location - 180,
    });
  }


  return (
    <header className='transition duration-500 w-full' >
      <div ref={headerRef} className=' w-full flex items-center justify-center py-4 shadow-2xl rounded-full my-1 border-t-4 border-b-4 border-t-primary_blue border-success bg-transparent transition-transform ease-in-out'>
        <ul className='flex gap-5 '>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={handleClick} className={'text-lg font-semibold  hover:text-success hover:underline underline-offset-4 transition-colors duration-500' + (path === link.href ? 'text-success' : ' ')}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar