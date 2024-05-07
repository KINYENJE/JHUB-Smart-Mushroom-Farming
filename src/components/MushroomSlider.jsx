import React from 'react'
import { useState } from 'react'
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


// import { MushroomTypes } from '../constants'


const MushroomSlider = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(slides)

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length)
    
  }

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
    
  }

  const autoslide = () => {
    setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length)
    }, 5000)

    

  }

  // autoslide()

  return (

    <div className="w-full flex  items-center justify-center shadow-2xl pt-4 rounded-lg border-t-2 transition duration-300" >
      {slides.map((slide, index) => {
        return (
          <div key={index} className={'w-full max-sm:relative max-sm:py-5 sm:h-96 rounded-lg flex max-sm:flex-col px-4 items-center justify-center gap-4 ' + (index === currentIndex ? 'translate-x-' + (index - currentIndex) : 'hidden translate-x-' + index)} >
          
          <div className='max-sm:w-full max-sm:h-1/2 sm:w-1/2 px-5 lg:px-16' 
           
          >

            <h3 className="text-sm sm:text-xl capitalize -mt-6 text-start text-success underline-offset-3 underline">{slide.name}</h3>
            <p className='py-5 -mt-2 text-xs sm:text-sm opacity-75 text-start text-warmGray-900 font-semibold'>{slide.description}</p>

            <div className='flex  gap-3 sm:gap-6 text-slate-950' >
              <div className='flex flex-col border-2 border-slate-950 rounded-lg p-2 items-center justify-center gap-1 sm:gap-2'>
                <FaTemperatureHigh size={30} className="inline max-sm:hidden" />
                <FaTemperatureHigh size={18} className="inline sm:hidden" />
                <p className='text-xs font-bold text-nowrap montserrat'>{slide.temperature}</p>
              </div>
              <div className='flex flex-col border-2 border-slate-950 rounded-lg p-2 items-center justify-center gap-1 sm:gap-2'>
                <WiHumidity size={30} className="inline max-sm:hidden" />
                <WiHumidity size={18} className="inline sm:hidden" />
                <p className='text-xs font-bold text-nowrap montserrat'>{slide.humidity}</p>
              </div>
              
            </div>

              <div className='w-fit mt-3 py-3 px-2 rounded-full bg-success '>
                <h3 className=' text-sm font-bold text-nowrap text-white'>Price: {slide.pricePerKg} <span className=' text-xs font-normal'>/kg</span> </h3>
              </div>
          </div>

          <div className='w-full max-sm:h-1/2  sm:w-1/2 overflow-hidden lg:px-16 '>
            <img src={slide.image} alt={slide.name} className="w-full max-sm:h-36 sm:h-72 object-cover object-center  rounded-lg hover:scale-125  transition duration-500 flex-shrink-0 flex-grow-0" />
          </div>
          
          
          
          <div className='absolute max-sm:hidden '>
          {slides.map((_, index) => {
           return (
            <div className=''>
              <button key={index} onClick={() => setCurrentIndex(index)} className={'w-2 h-2 bg-blueGray-950 rounded-lg ' + (index === currentIndex ? 'bg-success' : 'bg-blueGray-950')}></button>
            </div>
            )
          })}
          </div>
               
          
        </div>
        )

      }
      )}

      

          <div className="w-full max-sm:hidden sm:w-1/3  absolute -mb-96  flex items-center justify-center  gap-8 ">
            <button onClick={goToPrevSlide} className="p-2  hover:text-success text-blueGray-950 border border-s-secondary_blue border-e-secondary_blue border-t-secondary_blue backdrop-blur-xl shadow-2xl hover:shadow-success transition duration-300 rounded-lg z-50 w-1/6 flex items-center justify-center"><FaArrowCircleLeft size={30} /></button>
            <button onClick={goToNextSlide} className="p-2  hover:text-success text-blueGray-950 border border-s-secondary_blue border-e-secondary_blue border-t-secondary_blue backdrop-blur-xl shadow-2xl hover:shadow-success transition duration-300 rounded-lg z-50 w-1/6 flex items-center justify-center"><FaArrowCircleRight size={30} /></button>

          </div>

          <button className="sm:hidden max-sm:absolute max-sm:left-5 p-2  hover:text-success text-blueGray-950 border border-s-secondary_blue border-e-secondary_blue border-t-secondary_blue backdrop-blur-xl shadow-2xl hover:shadow-success transition duration-300 rounded-lg z-50  flex items-center justify-center" >
            <FaArrowCircleLeft size={30} className='' onClick={goToPrevSlide} />
          </button>

          <button className="sm:hidden max-sm:absolute max-sm:right-5 p-2  hover:text-success text-blueGray-950 border border-s-secondary_blue border-e-secondary_blue border-t-secondary_blue backdrop-blur-xl shadow-2xl hover:shadow-success transition duration-300 rounded-lg z-50  flex items-center justify-center" >
            <FaArrowCircleRight size={30} className='' onClick={goToNextSlide} />
          </button>

      </div>
    
  
  )
}

export default MushroomSlider