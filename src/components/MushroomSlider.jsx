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

    <div className="w-full h-96 flex items-center justify-center  shadow-2xl pt-4 rounded-lg border-t-2 transition duration-300" >
      {slides.map((slide, index) => {
        return (
          <div key={index} className={'w-full h-96 rounded-lg flex px-4 items-center justify-center gap-4 ' + (index === currentIndex ? 'translate-x-' + (index - currentIndex) : 'hidden translate-x-' + index)} >
          
          <div className='w-1/2 px-5 lg:px-16' 
           
          >

            <h3 className="text-xl capitalize -mt-6 text-start text-success underline-offset-3 underline">{slide.name}</h3>
            <p className='py-5 -mt-2 text-sm opacity-75 text-start text-warmGray-900 font-semibold'>{slide.description}</p>

            <div className='flex gap-6 text-slate-950' >
              <div className='flex flex-col border-2 border-slate-950 rounded-lg p-2 items-center justify-center gap-2'>
                <FaTemperatureHigh size={30} className="inline" />
                <p className='text-xs font-bold text-nowrap montserrat'>{slide.temperature}</p>
              </div>
              <div className='flex flex-col border-2 border-slate-950 rounded-lg p-2 items-center justify-center gap-2'>
                <WiHumidity size={30} className="inline" />
                <p className='text-xs font-bold text-nowrap montserrat'>{slide.humidity}</p>
              </div>
              
            </div>

            <div className='w-fit mt-3 py-3 px-2 rounded-full bg-success '>
                <h3 className=' text-sm font-bold text-nowrap text-white'>Price: {slide.pricePerKg} <span className=' text-xs font-normal'>/kg</span> </h3>
              </div>
          </div>

          <div className='w-1/2 overflow-hidden lg:px-16 '>
            <img src={slide.image} alt={slide.name} className="w-full  h-72 object-cover object-center  rounded-lg hover:scale-125  transition duration-500 flex-shrink-0 flex-grow-0" />
          </div>
          
          
          <div className='absolute'>
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

      

          <div className="w-1/3  absolute -mb-96  flex items-center justify-center  gap-8 ">
            <button onClick={goToPrevSlide} className="p-2  hover:text-success text-blueGray-950 border border-s-secondary_blue border-e-secondary_blue border-t-secondary_blue backdrop-blur-xl shadow-2xl hover:shadow-success transition duration-300 rounded-lg z-50 w-1/6 flex items-center justify-center"><FaArrowCircleLeft size={30} /></button>
            <button onClick={goToNextSlide} className="p-2  hover:text-success text-blueGray-950 border border-s-secondary_blue border-e-secondary_blue border-t-secondary_blue backdrop-blur-xl shadow-2xl hover:shadow-success transition duration-300 rounded-lg z-50 w-1/6 flex items-center justify-center"><FaArrowCircleRight size={30} /></button>

          </div>
      </div>
    
  
  )
}

export default MushroomSlider