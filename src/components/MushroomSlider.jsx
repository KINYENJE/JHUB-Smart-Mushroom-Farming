import React from 'react'
import { useState } from 'react'
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


// import { MushroomTypes } from '../constants'


const MushroomSlider = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(slides)

  return (

    <div className="w-full flex flex-col items-center justify-center overflow-hidden shadow-2xl pt-4 rounded-lg border-t-2  ">
      {slides.map((slide, index) => {
        return (
        <div key={index} className={index === currentIndex ? `w-full h-96 rounded-lg   flex  px-4 items-center justify-center gap-4 ` : "hidden"}>
          
          <div className='w-1/2 px-5 lg:px-16'>
            <h3 className="text-xl capitalize -mt-14 text-start text-success underline-offset-3 underline">{slide.name}</h3>
            <p className='py-5 text-sm opacity-75 text-start'>{slide.description}</p>
            <div>
              <p>Temperature: {slide.temperature}</p>
              <p>Humidity: {slide.humidity}</p>
              <p>Price Per Kg: {slide.pricePerKg}</p>
            </div>
          </div>

          <div className='w-1/2 overflow-hidden lg:px-16'>
            <img src={slide.image} alt={slide.name} className="w-full  h-72 object-cover object-center overflow-x-hidden rounded-lg hover:scale-125  transition duration-500" />
          </div>

         
          
        </div>
        )

      }
      )}

          <div className="w-1/3  absolute -mb-96 border border-s-secondary_blue border-e-secondary_blue border-t-secondary_blue flex items-center justify-center backdrop-blur-xl shadow-2xl hover:shadow-success transition duration-300 rounded-lg gap-8 z-50">
            <button onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)} className="p-2 rounded-full hover:text-success text-blueGray-950 "><FaArrowCircleLeft size={30} /></button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)} className="p-2 rounded-full hover:text-success  text-blueGray-950 "><FaArrowCircleRight size={30} /></button>

          </div>
      </div>
    
  
  )
}

export default MushroomSlider