import React from 'react'
import { useState } from 'react'

// import { MushroomTypes } from '../constants'


const MushroomSlider = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(slides)

  return (

    <div className="w-full flex items-center justify-center overflow-hidden shadow-2xl pt-4 rounded-lg ">
      {slides.map((slide, index) => {
        return (
        <div key={index} className={index === currentIndex ? `w-full h-96 rounded-lg   flex px-4 items-center justify-center gap-4` : "hidden"}>
          
          <div className='w-1/2 '>
            <h3 className="text-xl capitalize -mt-14 text-start">{slide.name}</h3>
            <p className='py-5 text-sm opacity-75'>{slide.description}</p>
            <div>
              <p>Temperature: {slide.temperature}</p>
              <p>Humidity: {slide.humidity}</p>
              <p>Price Per Kg: {slide.pricePerKg}</p>
            </div>
          </div>

          <div className='w-1/2 overflow-hidden'>
            <img src={slide.image} alt={slide.name} className="w-full  h-72 object-cover object-center overflow-x-hidden rounded-lg" />
          </div>
          
        </div>
        )

      }
      )}
      </div>
    
  
  )
}

export default MushroomSlider